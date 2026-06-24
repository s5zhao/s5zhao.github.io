// Citation display logic. The data file is updated by scripts/update_citations.py.
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

function citationText(count) {
  if (typeof count !== "number") {
    return {
      en: "Citations pending update",
      zh: "引用待更新",
    };
  }

  return {
    en: count === 1 ? "1 citation" : `${count} citations`,
    zh: `引用 ${count} 次`,
  };
}

function ensureCitationBadge(pub) {
  let badge = pub.querySelector(".citation-badge");
  if (!badge) {
    badge = document.createElement("span");
    badge.className = "citation-badge";
    badge.innerHTML = '<span class="lang-en"></span><span class="lang-zh"></span>';
    pub.querySelector("div").appendChild(badge);
  }
  return badge;
}

function renderCitationBadge(pub, count) {
  const badge = ensureCitationBadge(pub);
  const text = citationText(count);

  badge.classList.toggle("is-missing", typeof count !== "number");
  badge.querySelector(".lang-en").textContent = text.en;
  badge.querySelector(".lang-zh").textContent = text.zh;
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
  } catch (error) {
    pubs.forEach((pub) => renderCitationBadge(pub, null));
  }
}

updateCitationDisplay();
window.setInterval(updateCitationDisplay, CITATION_REFRESH_MS);
