(function () {
  const $ = (sel) => document.querySelector(sel);

  const I18N = {
    ko: {
      nav_home: "홈",
      nav_support: "지원",
      nav_privacy: "개인정보",
      nav_terms: "약관",
      nav_review: "검토자료",

      btn_theme: "테마",

      hero_title: "말하면, 바로 끝납니다.",
      hero_subtitle: "받아쓰기부터 Google Calendar/Tasks 실행까지, 메뉴바에서 조용히 처리하는 macOS 음성 비서입니다.",
      hero_note: "구매 후 2대까지 활성화. 자동 업데이트를 지원합니다.",

      pill_1: "눌러 말하기",
      pill_2: "받아쓰기",
      pill_3: "명령",
      pill_4: "AI 작업",

      btn_download: "Download",
      btn_download_sub: "Coming soon",
      btn_support: "지원",
      btn_waitlist: "알림 받기",

      preview_title: "메뉴바 • 즉시 실행",
      preview_k1: "단축키",
      preview_k2: "모드",
      preview_k3: "결과",
      preview_v2: "누르는 동안 말하기",
      preview_v3: "현재 앱에 바로 입력",
      preview_mono: "“내일 오전 6시 점심 일정 추가해줘”",
      preview_footer: "빠르게 • 가볍게 • 안정적으로",

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

      footer_note: "macOS 생산성을 위해 제작",
      badge_platform: "macOS",

      download_alert: "다운로드 링크는 준비 중입니다."
    },

    en: {
      nav_home: "Home",
      nav_support: "Support",
      nav_privacy: "Privacy",
      nav_terms: "Terms",
      nav_review: "Review",

      btn_theme: "Theme",

      hero_title: "Speak, get it done.",
      hero_subtitle: "Dictation, Google Calendar/Tasks, and AI actions from a quiet macOS menu bar assistant.",
      hero_note: "Buy once, activate on 2 devices, and stay current with automatic updates.",

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
      preview_mono: "“Add lunch tomorrow at 6 AM.”",
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

      download_alert: "The download link is coming soon."
    }
  };

  const HEAD_I18N = {
    "/": {
      ko: {
        title: "SoriCue — Speak. Trigger. Done.",
        description: "SoriCue는 macOS 메뉴바에서 음성 입력으로 Google Calendar/Tasks 일정·할 일을 빠르게 처리하는 앱입니다.",
        ogDescription: "메뉴바에서 음성 입력으로 Google Calendar/Tasks 일정·할 일을 빠르게 처리하는 macOS 앱"
      },
      en: {
        title: "SoriCue — Speak. Trigger. Done.",
        description: "SoriCue is a macOS menu bar app for handling Google Calendar and Google Tasks with voice-driven input.",
        ogDescription: "A macOS app that lets you manage Google Calendar and Google Tasks from the menu bar with voice."
      }
    },
    "/support/": {
      ko: {
        title: "SoriCue — Support",
        description: "SoriCue 고객지원 / Support"
      },
      en: {
        title: "SoriCue — Support",
        description: "SoriCue support, contact information, and FAQ."
      }
    },
    "/privacy/": {
      ko: {
        title: "SoriCue — Privacy",
        description: "SoriCue 개인정보처리방침 / Privacy Policy"
      },
      en: {
        title: "SoriCue — Privacy",
        description: "SoriCue Privacy Policy."
      }
    },
    "/terms/": {
      ko: {
        title: "SoriCue — Terms",
        description: "SoriCue 이용약관 / Terms of Service"
      },
      en: {
        title: "SoriCue — Terms",
        description: "SoriCue Terms of Service."
      }
    }
  };

  function applyI18n(lang) {
    const dict = I18N[lang] || I18N.en;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      if (dict[key] == null) return;
      el.textContent = dict[key];
    });
  }

  function applyLangBlocks(lang) {
    document.querySelectorAll("[data-lang]").forEach((el) => {
      const target = el.getAttribute("data-lang");
      el.hidden = target !== lang;
    });
  }

  function normalizePath(pathname) {
    if (!pathname || pathname === "/") return "/";
    return pathname.endsWith("/") ? pathname : `${pathname}/`;
  }

  function applyHeadI18n(lang) {
    const path = normalizePath(window.location.pathname);
    const page = HEAD_I18N[path];
    if (!page) return;

    const head = page[lang] || page.en;
    if (!head) return;

    if (head.title) document.title = head.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && head.description) {
      metaDescription.setAttribute("content", head.description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && head.title) {
      ogTitle.setAttribute("content", head.title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription && (head.ogDescription || head.description)) {
      ogDescription.setAttribute("content", head.ogDescription || head.description);
    }
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
    applyHeadI18n(lang);
  }

  function detectInitialTheme() {
    const saved = localStorage.getItem("soricue_theme");
    if (saved === "light" || saved === "dark" || saved === "system") return saved;
    return "system";
  }

  function applyTheme(theme) {
    const root = document.documentElement;

    if (theme === "system") {
      const prefersDark = window.matchMedia &&
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
        const next = current === "light" ? "dark" : current === "dark" ? "system" : "light";
        applyTheme(next);
      });
    }

    const dl = $("#downloadBtn");
    if (dl) {
      dl.addEventListener("click", (e) => {
        const href = (dl.getAttribute("href") || "").trim().toLowerCase();
        const isPlaceholder = href === "" || href === "#" || href.startsWith("javascript:");
        if (!isPlaceholder) return;

        e.preventDefault();
        const lang = localStorage.getItem("soricue_lang") || detectInitialLang();
        const dict = I18N[lang] || I18N.en;
        alert(dict.download_alert || I18N.en.download_alert);
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
