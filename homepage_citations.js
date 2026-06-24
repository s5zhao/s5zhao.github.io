// Citation display logic. The data file is updated by scripts/update_citations.py.
const CITATION_DATA_URL = "citations.json";
const CITATION_REFRESH_MS = 12 * 60 * 60 * 1000;
const SCHOLAR_ICON = `
  <svg class="scholar-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path class="scholar-icon-cap" d="M12 3 2.75 8.25 12 13.5l9.25-5.25L12 3Z" />
    <path class="scholar-icon-base" d="M6.75 11.25v4.6c0 1.65 2.35 3.15 5.25 3.15s5.25-1.5 5.25-3.15v-4.6L12 14.2l-5.25-2.95Z" />
    <path class="scholar-icon-tassel" d="M19.4 9.25v4.1" />
  </svg>
`;

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

function citationText(count) {
  if (typeof count !== "number") {
    return {
      en: "pending",
      zh: "待更新",
      value: "?",
    };
  }

  return {
    en: "citations",
    zh: "引用",
    value: String(count),
  };
}

function citationBadgeHtml(count, extraClass = "") {
  const text = citationText(count);
  const stateClass = typeof count === "number" ? "" : " is-missing";

  return `
    <span class="citation-badge scholar-badge${stateClass} ${extraClass}">
      ${SCHOLAR_ICON}
      <span class="citation-label">
        <span class="lang-en">${text.en}</span>
        <span class="lang-zh">${text.zh}</span>
      </span>
      <span class="citation-count">${text.value}</span>
    </span>
  `;
}

function ensureCitationBadge(pub) {
  let badge = pub.querySelector(".citation-badge");
  if (!badge) {
    badge = document.createElement("span");
    const authors = pub.querySelector(".paper-authors");
    if (authors) {
      authors.appendChild(badge);
    } else {
      pub.querySelector("div").appendChild(badge);
    }
  }
  return badge;
}

function renderCitationBadge(pub, count) {
  const badge = ensureCitationBadge(pub);
  badge.outerHTML = citationBadgeHtml(count);
}

function renderCitationDate(data) {
  if (!data || !data.updated_at) return;

  const date = new Date(data.updated_at);
  if (Number.isNaN(date.getTime())) return;

  const enNode = document.getElementById("citationUpdatedEn");
  const zhNode = document.getElementById("citationUpdatedZh");
  const enDate = date.toLocaleDateString("en", { year: "numeric", month: "long", day: "numeric" });
  const zhDate = date.toLocaleDateString("zh-CN", { year: "numeric", month: "long", day: "numeric" });

  if (enNode) enNode.textContent = `Citations updated: ${enDate}.`;
  if (zhNode) zhNode.textContent = `引用更新：${zhDate}。`;
}

function renderCitationTotal(data) {
  const totalNodes = Array.from(document.querySelectorAll("#scholarCitationTotal, .scholar-citation-total"));
  if (!totalNodes.length) return;

  const total = (data.papers || []).reduce((sum, paper) => {
    return typeof paper.citations === "number" ? sum + paper.citations : sum;
  }, 0);

  totalNodes.forEach((node) => {
    node.innerHTML = citationBadgeHtml(total, "citation-badge-total");
  });
}

async function loadCitations() {
  const response = await fetch(`${CITATION_DATA_URL}?t=${Date.now()}`, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Could not load ${CITATION_DATA_URL}`);
  }
  return response.json();
}

async function updateCitationDisplay() {
  const pubs = Array.from(document.querySelectorAll(".pub"));

  try {
    const data = await loadCitations();
    const citationMap = new Map(
      (data.papers || []).map((paper) => [normalizeCitationTitle(paper.title), paper.citations])
    );

    pubs.forEach((pub) => {
      const count = citationMap.get(normalizeCitationTitle(getPublicationTitle(pub)));
      renderCitationBadge(pub, count);
    });
    renderCitationDate(data);
    renderCitationTotal(data);
  } catch (error) {
    pubs.forEach((pub) => renderCitationBadge(pub, null));
    document.querySelectorAll("#scholarCitationTotal, .scholar-citation-total").forEach((node) => {
      node.innerHTML = citationBadgeHtml(null, "citation-badge-total");
    });
  }
}

updateCitationDisplay();
window.setInterval(updateCitationDisplay, CITATION_REFRESH_MS);
