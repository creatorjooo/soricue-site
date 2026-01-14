(function () {
  const $ = (sel) => document.querySelector(sel);

  // 1) 언어 토글: 긴 문서(약관/개인정보/지원)에서 data-lang="ko|en" 블록을 보여/숨김
  function applyLangBlocks(lang) {
    document.querySelectorAll("[data-lang]").forEach((el) => {
      const target = el.getAttribute("data-lang");
      el.hidden = target !== lang;
    });
  }

  // 2) (선택) 홈 같은 페이지에서 data-i18n 키로 짧은 문구를 바꾸고 싶으면 여기 확장
  // 지금은 최소구성으로 nav/버튼 텍스트는 그대로 두고 "문서 블록 토글"만 확실히 동작하게 합니다.
  // 원하시면 i18n 딕셔너리도 넣어서 Home/Support 라벨까지 완전 번역형으로 바꿔드릴게요.

  function detectInitialLang() {
    const saved = localStorage.getItem("soricue_lang");
    if (saved === "ko" || saved === "en") return saved;

    const nav = (navigator.language || "").toLowerCase();
    return nav.startsWith("ko") ? "ko" : "en";
  }

  function applyLang(lang) {
    document.documentElement.lang = lang === "ko" ? "ko" : "en";
    applyLangBlocks(lang);

    const label = $("#langLabel");
    if (label) label.textContent = lang === "ko" ? "KR" : "EN";

    localStorage.setItem("soricue_lang", lang);
  }

  function detectInitialTheme() {
    const saved = localStorage.getItem("soricue_theme");
    if (saved === "light" || saved === "dark" || saved === "system") return saved;
    return "system";
  }

  function applyTheme(theme) {
    const root = document.documentElement;

    if (theme === "system") {
      const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

      root.setAttribute("data-theme", prefersDark ? "dark" : "light");
      root.setAttribute("data-theme-mode", "system");
    } else {
      root.setAttribute("data-theme", theme);
      root.setAttribute("data-theme-mode", "manual");
    }

    localStorage.setItem("soricue_theme", theme);
  }

  function setYear() {
    const y = $("#y");
    if (y) y.textContent = String(new Date().getFullYear());
  }

  function bindButtons() {
    const langBtn = $("#langToggle");
    const themeBtn = $("#themeToggle");

    if (langBtn) {
      langBtn.addEventListener("click", () => {
        const current = localStorage.getItem("soricue_lang") || detectInitialLang();
        applyLang(current === "ko" ? "en" : "ko");
      });
    }

    if (themeBtn) {
      themeBtn.addEventListener("click", () => {
        const current = localStorage.getItem("soricue_theme") || detectInitialTheme();
        const next =
          current === "light" ? "dark" : current === "dark" ? "system" : "light";
        applyTheme(next);
      });
    }
  }

  function init() {
    setYear();

    const lang = detectInitialLang();
    applyLang(lang);

    const theme = detectInitialTheme();
    applyTheme(theme);

    if (window.matchMedia) {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      mq.addEventListener?.("change", () => {
        const saved = localStorage.getItem("soricue_theme") || "system";
        if (saved === "system") applyTheme("system");
      });
    }

    bindButtons();
  }

  init();
})();
