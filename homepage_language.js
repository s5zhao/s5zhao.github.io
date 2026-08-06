const languageToggle = document.getElementById("languageToggle");
const LANGUAGE_KEY = "shengwu-zhao-homepage-language";

function setLanguage(lang, persist = true) {
  const nextLanguage = lang === "zh" ? "zh" : "en";
  document.body.dataset.lang = nextLanguage;
  document.documentElement.lang = nextLanguage === "zh" ? "zh-CN" : "en";
  languageToggle.setAttribute(
    "aria-label",
    nextLanguage === "zh" ? "Switch to English" : "切换到中文"
  );

  if (persist) {
    try {
      window.localStorage.setItem(LANGUAGE_KEY, nextLanguage);
    } catch (_) {
      // Language switching still works when storage is unavailable.
    }
  }
}

let initialLanguage = "en";
try {
  initialLanguage = window.localStorage.getItem(LANGUAGE_KEY) || "en";
} catch (_) {
  initialLanguage = "en";
}
setLanguage(initialLanguage, false);

languageToggle.addEventListener("click", () => {
  setLanguage(document.body.dataset.lang === "zh" ? "en" : "zh");
});
