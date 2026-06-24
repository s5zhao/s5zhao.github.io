#!/usr/bin/env python3
"""Update citation counts from a Google Scholar author profile.

This script reads publication titles from index.html, scrapes the
public Google Scholar profile, matches titles, and writes citations.json.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
import time
from dataclasses import dataclass
from datetime import datetime, timezone
from html.parser import HTMLParser
from pathlib import Path
from typing import Iterable
from urllib.error import HTTPError, URLError
from urllib.parse import urlencode
from urllib.request import Request, urlopen


DEFAULT_PROFILE_ID = "amGtFUIAAAAJ"
DEFAULT_HTML = "index.html"
DEFAULT_OUTPUT = "citations.json"


def normalize_title(title: str) -> str:
    title = title.lower().replace("&amp;", "&")
    title = re.sub(r"[^\w\u4e00-\u9fff]+", " ", title, flags=re.UNICODE)
    return re.sub(r"\s+", " ", title).strip()


def title_tokens(title: str) -> set[str]:
    return {token for token in normalize_title(title).split() if token}


def similarity(left: str, right: str) -> float:
    left_tokens = title_tokens(left)
    right_tokens = title_tokens(right)
    if not left_tokens or not right_tokens:
        return 0.0
    return len(left_tokens & right_tokens) / len(left_tokens | right_tokens)


class PublicationTitleParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self._capture = False
        self._parts: list[str] = []
        self.titles: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if tag != "span":
            return
        classes = dict(attrs).get("class", "")
        if "paper-title" in classes.split():
            self._capture = True
            self._parts = []

    def handle_data(self, data: str) -> None:
        if self._capture:
            self._parts.append(data)

    def handle_endtag(self, tag: str) -> None:
        if tag == "span" and self._capture:
            title = " ".join(self._parts).strip()
            if title:
                self.titles.append(title)
            self._capture = False


@dataclass
class ScholarPaper:
    title: str
    citations: int


class ScholarProfileParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.rows: list[ScholarPaper] = []
        self._in_row = False
        self._capture_title = False
        self._capture_cites = False
        self._title_parts: list[str] = []
        self._cite_parts: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        classes = dict(attrs).get("class", "") or ""
        class_set = set(classes.split())

        if tag == "tr" and "gsc_a_tr" in class_set:
            self._in_row = True
            self._title_parts = []
            self._cite_parts = []
            return

        if not self._in_row:
            return

        if tag == "a" and "gsc_a_at" in class_set:
            self._capture_title = True
        elif tag == "a" and "gsc_a_ac" in class_set:
            self._capture_cites = True

    def handle_data(self, data: str) -> None:
        if self._capture_title:
            self._title_parts.append(data)
        elif self._capture_cites:
            self._cite_parts.append(data)

    def handle_endtag(self, tag: str) -> None:
        if tag == "a":
            self._capture_title = False
            self._capture_cites = False
        elif tag == "tr" and self._in_row:
            title = " ".join(self._title_parts).strip()
            cite_text = "".join(self._cite_parts).strip()
            citations = int(cite_text) if cite_text.isdigit() else 0
            if title:
                self.rows.append(ScholarPaper(title=title, citations=citations))
            self._in_row = False


def read_publication_titles(html_path: Path) -> list[str]:
    parser = PublicationTitleParser()
    parser.feed(html_path.read_text(encoding="utf-8"))
    return parser.titles


def fetch_scholar_page(profile_id: str, start: int, page_size: int) -> str:
    query = urlencode(
        {
            "user": profile_id,
            "hl": "en",
            "cstart": start,
            "pagesize": page_size,
        }
    )
    url = f"https://scholar.google.com/citations?{query}"
    request = Request(
        url,
        headers={
            "User-Agent": (
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                "AppleWebKit/537.36 (KHTML, like Gecko) "
                "Chrome/126.0 Safari/537.36"
            )
        },
    )
    with urlopen(request, timeout=30) as response:
        return response.read().decode("utf-8", errors="replace")


def fetch_scholar_papers(profile_id: str, page_size: int = 100, pause: float = 2.0) -> list[ScholarPaper]:
    papers: list[ScholarPaper] = []
    start = 0

    while True:
        html = fetch_scholar_page(profile_id, start=start, page_size=page_size)
        parser = ScholarProfileParser()
        parser.feed(html)

        if not parser.rows:
            break

        papers.extend(parser.rows)
        if len(parser.rows) < page_size:
            break

        start += page_size
        time.sleep(pause)

    return papers


def best_match(title: str, scholar_papers: Iterable[ScholarPaper]) -> tuple[ScholarPaper | None, float]:
    normalized = normalize_title(title)
    by_normalized = {normalize_title(paper.title): paper for paper in scholar_papers}
    exact = by_normalized.get(normalized)
    if exact:
        return exact, 1.0

    best_paper = None
    best_score = 0.0
    for paper in scholar_papers:
        score = similarity(title, paper.title)
        if score > best_score:
            best_paper = paper
            best_score = score

    if best_score >= 0.82:
        return best_paper, best_score

    return None, best_score


def existing_counts(output_path: Path) -> dict[str, int | None]:
    if not output_path.exists():
        return {}

    try:
        data = json.loads(output_path.read_text(encoding="utf-8"))
    except json.JSONDecodeError:
        return {}

    return {
        normalize_title(paper.get("title", "")): paper.get("citations")
        for paper in data.get("papers", [])
    }


def build_output(
    titles: list[str],
    scholar_papers: list[ScholarPaper],
    profile_id: str,
    output_path: Path,
) -> dict:
    previous = existing_counts(output_path)
    papers = []

    for title in titles:
        match, score = best_match(title, scholar_papers)
        previous_count = previous.get(normalize_title(title))
        citations = match.citations if match else previous_count
        papers.append(
            {
                "title": title,
                "citations": citations,
                "scholar_title": match.title if match else None,
                "match_score": round(score, 3),
                "status": "matched" if match else "unmatched",
            }
        )

    return {
        "profile_url": f"https://scholar.google.com/citations?user={profile_id}&hl=en",
        "updated_at": datetime.now(timezone.utc).isoformat(),
        "papers": papers,
    }


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Update Google Scholar citation counts.")
    parser.add_argument("--profile-id", default=DEFAULT_PROFILE_ID)
    parser.add_argument("--html", default=DEFAULT_HTML)
    parser.add_argument("--output", default=DEFAULT_OUTPUT)
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    root = Path(__file__).resolve().parents[1]
    html_path = (root / args.html).resolve()
    output_path = (root / args.output).resolve()

    titles = read_publication_titles(html_path)
    if not titles:
        print(f"No publication titles found in {html_path}", file=sys.stderr)
        return 1

    try:
        scholar_papers = fetch_scholar_papers(args.profile_id)
    except (HTTPError, URLError, TimeoutError) as exc:
        print(f"Could not fetch Google Scholar profile: {exc}", file=sys.stderr)
        return 1

    if not scholar_papers:
        print("Google Scholar returned no papers; citation data was not changed.", file=sys.stderr)
        return 1

    data = build_output(titles, scholar_papers, args.profile_id, output_path)
    output_path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    matched = sum(1 for paper in data["papers"] if paper["status"] == "matched")
    print(f"Updated {output_path.name}: matched {matched}/{len(data['papers'])} publications.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
