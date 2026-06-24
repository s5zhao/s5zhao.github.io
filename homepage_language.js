// 中英文切换逻辑
// 页面内容里只需要保留 .lang-en 和 .lang-zh 两套文字。
const languageToggle = document.getElementById("languageToggle");

function setLanguage(lang) {
  document.body.dataset.lang = lang;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  languageToggle.setAttribute("aria-label", lang === "zh" ? "Switch to English" : "切换到中文");
}

languageToggle.addEventListener("click", () => {
  const nextLang = document.body.dataset.lang === "zh" ? "en" : "zh";
  setLanguage(nextLang);
});
