/* Shared i18n runtime + hero typer + year stamp.
   Used by all four redesign directions. */
(function () {
  "use strict";
  const STORAGE_KEY = "anli.lang";
  const VALID = ["en", "ja", "zh"];

  function getInitialLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && VALID.includes(saved)) return saved;
    const nav = (navigator.language || "en").toLowerCase();
    if (nav.startsWith("ja")) return "ja";
    if (nav.startsWith("zh")) return "zh";
    return "en";
  }

  const state = { lang: getInitialLang() };

  function dict() { return (window.I18N && window.I18N[state.lang]) || (window.I18N && window.I18N.en) || {}; }
  function get(path, fallback) {
    const d = dict();
    const parts = path.split(".");
    let v = d;
    for (const p of parts) { if (v == null) return fallback; v = v[p]; }
    return v == null ? fallback : v;
  }

  function apply() {
    const d = dict();
    document.documentElement.lang = state.lang;
    const metaTitle = get("meta.title");
    if (metaTitle) document.title = metaTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && get("meta.description")) metaDesc.setAttribute("content", get("meta.description"));

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const path = el.getAttribute("data-i18n");
      const v = get(path);
      if (typeof v === "string") {
        if (el.dataset.i18nHtml === "1") el.innerHTML = v;
        else el.textContent = v;
      }
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const v = get(el.getAttribute("data-i18n-placeholder"));
      if (typeof v === "string") el.setAttribute("placeholder", v);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(el => {
      const v = get(el.getAttribute("data-i18n-aria"));
      if (typeof v === "string") el.setAttribute("aria-label", v);
    });

    document.querySelectorAll("[data-lang-btn]").forEach(b => {
      const on = b.getAttribute("data-lang-btn") === state.lang;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });

    window.dispatchEvent(new CustomEvent("i18n:change", { detail: { lang: state.lang, dict: d } }));
  }

  function setLang(l) {
    if (!VALID.includes(l)) return;
    state.lang = l;
    localStorage.setItem(STORAGE_KEY, l);
    apply();
  }

  window.I18nRuntime = {
    getLang: () => state.lang,
    setLang,
    get,
    apply
  };

  // Hero typer — accepts an element id + list of words.
  window.makeTyper = function makeTyper(el, { delay = 90, pause = 1800 } = {}) {
    if (!el) return { setWords() {} };
    let words = [], wi = 0, ci = 0, building = true, timer = null;
    function step() {
      if (!words.length) { timer = setTimeout(step, 200); return; }
      const w = words[wi % words.length];
      const chars = [...w];
      el.textContent = chars.slice(0, ci).join("");
      if (building) {
        if (ci >= chars.length) { building = false; timer = setTimeout(step, pause); }
        else { ci++; timer = setTimeout(step, delay); }
      } else {
        if (ci <= 0) { building = true; wi = (wi + 1) % words.length; timer = setTimeout(step, delay); }
        else { ci--; timer = setTimeout(step, delay * 0.6); }
      }
    }
    function setWords(newWords) {
      words = (newWords || []).slice();
      wi = 0; ci = 0; building = true;
      if (timer) clearTimeout(timer);
      step();
    }
    return { setWords };
  };

  // Wire lang switch buttons if present.
  function bind() {
    document.querySelectorAll("[data-lang-btn]").forEach(b => {
      b.addEventListener("click", () => setLang(b.getAttribute("data-lang-btn")));
    });
    apply();
    const yearEl = document.getElementById("copyrightYear");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Sync language across pages (e.g. classic ↔ terminal) via storage events.
    window.addEventListener("storage", (e) => {
      if (e.key === STORAGE_KEY && e.newValue && VALID.includes(e.newValue) && e.newValue !== state.lang) {
        state.lang = e.newValue;
        apply();
      }
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", bind);
  else bind();
})();
