(function () {
  const $ = (sel) => document.querySelector(sel);

  // 홈처럼 짧은 텍스트: data-i18n="key"를 언어별로 바꿔치기
  const I18N = {
    ko: {
      nav_home: "Home",
      nav_support: "Support",
      nav_privacy: "Privacy",
      nav_terms: "Terms",

      btn_theme: "Theme",

      hero_title: "SoriCue — 말하면, 바로 실행됩니다.",
      hero_subtitle: "메뉴바에서 푸시-투-톡으로 받아쓰기/명령/AI 작업을 빠르게 처리하는 macOS 앱입니다.",
      hero_note: "v0.1 목표: 설치 가능 + 자동 업데이트 + 라이선스(2대) 기반을 안정적으로 완성합니다.",

      pill_1: "Push-to-Talk",
      pill_2: "Dictation",
      pill_3: "Commands",
      pill_4: "AI Actions",

      btn_download: "Download",
      btn_download_sub: "Coming soon",
      btn_support: "Support",
      btn_waitlist: "Get notified",

      preview_title: "Menu Bar • Instant Actions",
      preview_k1: "Hotkey",
      preview_k2: "Mode",
      preview_k3: "Output",
      preview_v2: "Hold to talk",
      preview_v3: "Paste into any app",
      preview_mono: "“회의 요약 3줄로 정리해줘”",
      preview_footer: "Fast • Minimal • Reliable",

      f1_title: "빠른 입력",
      f1_desc: "어떤 앱에서도 즉시 텍스트 입력",
      f2_title: "자동 업데이트",
      f2_desc: "Sparkle 기반 업데이트 운영",
      f3_title: "라이선스",
      f3_desc: "기본 2대 활성화 제한을 지원",

      how_title: "How it works",
      how_subtitle: "짧게 말하면, 입력/명령/AI 작업을 “한 흐름”으로 처리합니다.",
      s1_title: "Push-to-Talk",
      s1_desc: "단축키로 바로 말하기 시작",
      s2_title: "Transcribe / Interpret",
      s2_desc: "받아쓰기 또는 명령/AI 작업으로 분기",
      s3_title: "Insert",
      s3_desc: "현재 커서 위치에 즉시 입력/실행",

      road_title: "v0.1 Roadmap",
      road_subtitle: "먼저 “배포 가능한 기본기”부터 확실하게 만듭니다.",
      r1_title: "Installer",
      r1_desc: "설치/실행/권한 흐름을 안정화",
      r2_title: "Auto Update",
      r2_desc: "Sparkle 기반 업데이트 채널 운영",
      r3_title: "License (2 devices)",
      r3_desc: "2대 제한 라이선스 플로우 정리",

      callout_title: "Business-ready basics",
      callout_desc: "“설치/업데이트/라이선스”가 갖춰지면 제품 신뢰도가 확 올라갑니다.",

      footer_note: "Built for macOS productivity",
      badge_platform: "macOS",
    },

    en: {
      nav_home: "Home",
      nav_support: "Support",
      nav_privacy: "Privacy",
      nav_terms: "Terms",

      btn_theme: "Theme",

      hero_title: "SoriCue — Speak. Trigger. Done.",
      hero_subtitle: "A macOS menu-bar app that handles dictation, commands, and AI actions with push-to-talk speed.",
      hero_note: "v0.1 goal: A solid, shippable foundation — installer, auto updates, and 2-device licensing.",

      pill_1: "Push-to-Talk",
      pill_2: "Dictation",
      pill_3: "Commands",
      pill_4: "AI Actions",

      btn_download: "Download",
      btn_download_sub: "Coming soon",
      btn_support: "Support",
      btn_waitlist: "Get notified",

      preview_title: "Menu Bar • Instant Actions",
      preview_k1: "Hotkey",
      preview_k2: "Mode",
      preview_k3: "Output",
      preview_v2: "Hold to talk",
      preview_v3: "Paste into any app",
      preview_mono: "“Summarize this meeting in 3 bullets.”",
      preview_footer: "Fast • Minimal • Reliable",

      f1_title: "Instant input",
      f1_desc: "Type anywhere, immediately",
      f2_title: "Auto updates",
      f2_desc: "Sparkle-based update delivery",
      f3_title: "Licensing",
      f3_desc: "Supports a default 2-device limit",

      how_title: "How it works",
      how_subtitle: "One flow for dictation, commands, and AI actions.",
      s1_title: "Push-to-Talk",
      s1_desc: "Start speaking with a hotkey",
      s2_title: "Transcribe / Interpret",
      s2_desc: "Routes to dictation, commands, or AI",
      s3_title: "Insert",
      s3_desc: "Paste/execute instantly at the cursor",

      road_title: "v0.1 Roadmap",
      road_subtitle: "Nail the shippable basics first.",
      r1_title: "Installer",
      r1_desc: "Stable install/run/permission flow",
      r2_title: "Auto Update",
      r2_desc: "Operate Sparkle update channels",
      r3_title: "License (2 devices)",
      r3_desc: "Clean 2-device licensing flow",

      callout_title: "Business-ready basics",
      callout_desc: "Once install/update/license are solid, trust jumps immediately.",

      footer_note: "Built for macOS productivity",
      badge_platform: "macOS",
    },
  };

  function applyI18n(lang) {
    const dict = I18N[lang] || I18N.en;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      if (dict[key] == null) return; // 키가 없으면 그대로 둠
      el.textContent = dict[key];
    });
  }

  // 문서(약관/프라이버시/서포트)처럼 긴 텍스트: data-lang="ko|en" 블록 표시/숨김
  function applyLangBlocks(lang) {
    document.querySelectorAll("[data-lang]").forEach((el) => {
      const target = el.getAttribute("data-lang");
      el.hidden = target !== lang;
    });
  }

  function detectInitialLang() {
    const saved = localStorage.getItem("soricue_lang");
    if (saved === "ko" || saved === "en") return saved;
    const nav = (navigator.language || "").toLowerCase();
    return nav.startsWith("ko") ? "ko" : "en";
  }

  function applyLang(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem("soricue_lang", lang);

    const label = $("#langLabel");
    if (label) label.textContent = lang === "ko" ? "KR" : "EN";

    applyI18n(lang);
    applyLangBlocks(lang);
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

    // 다운로드 버튼 데모
    const dl = $("#downloadBtn");
    if (dl) {
      dl.addEventListener("click", (e) => {
        e.preventDefault();
        alert("다운로드 링크는 준비 중입니다.");
      });
    }
  }

  function init() {
    setYear();

    const lang = detectInitialLang();
    applyLang(lang);

    const theme = detectInitialTheme();
    applyTheme(theme);

    // 시스템 테마 변경 감지(시스템 모드일 때만 반영)
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
