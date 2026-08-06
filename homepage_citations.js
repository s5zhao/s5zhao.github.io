const CITATION_DATA_URL = "citations.json";
const CITATION_REFRESH_MS = 12 * 60 * 60 * 1000;

function normalizeCitationTitle(title) {
  return title
    .toLowerCase()
    .replace(/&amp;/g, "&")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
}

function getPublicationTitle(pub) {
  const titleNode = pub.querySelector(".paper-title");
  return titleNode ? titleNode.textContent.trim() : "";
}

function citationBadgeHtml(count) {
  const hasCount = typeof count === "number";
  return `
    <span class="citation-badge${hasCount ? "" : " is-missing"}">
      <span class="lang-en">${hasCount ? "Cited by" : "Citation pending"}</span>
      <span class="lang-zh">${hasCount ? "引用" : "引用待更新"}</span>
      ${hasCount ? `<span class="citation-count">${count}</span>` : ""}
    </span>
  `;
}

function ensureCitationBadge(pub) {
  let badge = pub.querySelector(".citation-badge");
  if (!badge) {
    badge = document.createElement("span");
    const meta = pub.querySelector(".pub-meta");
    const authors = pub.querySelector(".paper-authors");
    (meta || authors || pub.querySelector(".pub-content")).appendChild(badge);
  }
  return badge;
}

function renderCitationBadge(pub, count) {
  ensureCitationBadge(pub).outerHTML = citationBadgeHtml(count);
}

function renderCitationDate(data) {
  if (!data?.updated_at) return;
  const date = new Date(data.updated_at);
  if (Number.isNaN(date.getTime())) return;

  const enNode = document.getElementById("citationUpdatedEn");
  const zhNode = document.getElementById("citationUpdatedZh");
  if (enNode) {
    enNode.textContent = `Citations updated ${date.toLocaleDateString("en", { year: "numeric", month: "long", day: "numeric" })}`;
  }
  if (zhNode) {
    zhNode.textContent = `引用数据更新于 ${date.toLocaleDateString("zh-CN", { year: "numeric", month: "long", day: "numeric" })}`;
  }
}

function renderCitationTotal(data) {
  const total = (data.papers || []).reduce(
    (sum, paper) => sum + (typeof paper.citations === "number" ? paper.citations : 0),
    0
  );
  document.querySelectorAll("[data-citation-total]").forEach((node) => {
    node.textContent = String(total);
  });
}

async function loadCitations() {
  const response = await fetch(`${CITATION_DATA_URL}?t=${Date.now()}`, { cache: "no-store" });
  if (!response.ok) throw new Error(`Could not load ${CITATION_DATA_URL}`);
  return response.json();
}

async function updateCitationDisplay() {
  const publications = Array.from(document.querySelectorAll(".pub"));
  try {
    const data = await loadCitations();
    const citationMap = new Map(
      (data.papers || []).map((paper) => [normalizeCitationTitle(paper.title), paper.citations])
    );

    publications.forEach((publication) => {
      renderCitationBadge(
        publication,
        citationMap.get(normalizeCitationTitle(getPublicationTitle(publication)))
      );
    });
    renderCitationDate(data);
    renderCitationTotal(data);
  } catch (_) {
    publications.forEach((publication) => renderCitationBadge(publication, null));
  }
}

updateCitationDisplay();
window.setInterval(updateCitationDisplay, CITATION_REFRESH_MS);
