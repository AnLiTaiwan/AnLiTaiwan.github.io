/* =========================================================
   Terminal Site · logic (trimmed)
   - 2 themes (Catppuccin dark, Paper light)
   - Command palette (⌘K / Ctrl+K)
   - Commands: :help, :theme, :lang, :cv, :playground
   - Focus-follows-cursor blinking caret
   - Deep-links from about.md → experience.json
   ========================================================= */
(function () {
  "use strict";

  // ---------- Theme ----------
  const THEMES = ["catppuccin", "paper"];
  const THEME_KEY = "anli.terminal.theme";
  function setTheme(name) {
    if (!THEMES.includes(name)) return;
    document.documentElement.setAttribute("data-theme", name);
    localStorage.setItem(THEME_KEY, name);
    document.querySelectorAll("[data-theme-btn]").forEach(b => {
      b.classList.toggle("is-active", b.getAttribute("data-theme-btn") === name);
    });
  }
  function cycleTheme() {
    const cur = document.documentElement.getAttribute("data-theme") || "catppuccin";
    const next = THEMES[(THEMES.indexOf(cur) + 1) % THEMES.length];
    setTheme(next);
    return next;
  }
  setTheme(localStorage.getItem(THEME_KEY) || "catppuccin");
  document.querySelectorAll("[data-theme-btn]").forEach(b => {
    b.addEventListener("click", () => setTheme(b.getAttribute("data-theme-btn")));
  });

  // ---------- Files / tabs ----------
  const ICONS = {
    about: "ic-md", skills: "ic-yml", experience: "ic-json", projects: "ic-ts",
    contact: "ic-sh", resume: "ic-pdf", help: "ic-help", playground: "ic-play"
  };
  const FILES = {
    about:      { label: "about.md",        lang: "Markdown",   modified: false },
    skills:     { label: "skills.yml",      lang: "YAML",       modified: false },
    experience: { label: "experience.json", lang: "JSON",       modified: false },
    projects:   { label: "projects.ts",     lang: "TypeScript", modified: false },
    contact:    { label: "contact.sh",      lang: "Shell",      modified: false },
    resume:     { label: "resume.pdf",      lang: "PDF",        modified: false },
    help:       { label: ":help",           lang: "Help",       modified: false },
    playground: { label: ":playground",     lang: "TypeScript", modified: false }
  };

  const openTabs = ["about"];
  let activeFile = "about";

  const $ = sel => document.querySelector(sel);
  const tabsEl = $("#tabs");
  const tbFile = $("#tb-file");
  const sbFile = $("#sb-file");

  function renderTabs() {
    tabsEl.innerHTML = "";
    openTabs.forEach(id => {
      const f = FILES[id];
      const div = document.createElement("div");
      div.className = "tab" + (id === activeFile ? " active" : "");
      const icId = ICONS[id];
      div.innerHTML =
        `<span class="ic">${icId ? `<svg><use href="#${icId}"/></svg>` : ""}</span>` +
        `<span>${f.label}</span>` +
        (f.modified ? `<span class="dot" title="unsaved"></span>` : "") +
        `<span class="close" data-close="${id}" title="Close">×</span>`;
      div.addEventListener("click", (e) => {
        if (e.target.dataset.close) return;
        activate(id);
      });
      tabsEl.appendChild(div);
    });
    tabsEl.querySelectorAll("[data-close]").forEach(c => {
      c.addEventListener("click", (e) => {
        e.stopPropagation();
        closeTab(c.dataset.close);
      });
    });
  }

  function activate(id) {
    if (!FILES[id]) return;
    if (!openTabs.includes(id)) openTabs.push(id);
    activeFile = id;
    document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
    const view = document.getElementById("view-" + id);
    if (view) view.classList.add("active");
    document.querySelectorAll("[data-open]").forEach(n => n.classList.toggle("active", n.dataset.open === id));
    const f = FILES[id];
    tbFile.textContent = f.label;
    sbFile.textContent = f.label;
    renderTabs();
  }

  function closeTab(id) {
    const i = openTabs.indexOf(id);
    if (i === -1) return;
    openTabs.splice(i, 1);
    if (activeFile === id) {
      activeFile = openTabs[openTabs.length - 1] || "about";
      if (!openTabs.length) openTabs.push("about");
    }
    activate(activeFile);
  }

  document.querySelectorAll("[data-open]").forEach(n => {
    n.addEventListener("click", () => activate(n.dataset.open));
  });
  document.querySelectorAll("[data-folder]").forEach(n => {
    n.addEventListener("click", () => n.classList.toggle("open"));
  });
  document.querySelectorAll("[data-open-file]").forEach(n => {
    n.addEventListener("click", (e) => { e.preventDefault(); activate(n.dataset.openFile); });
  });
  // deep-links to a specific experience item by index
  document.querySelectorAll("[data-open-exp]").forEach(n => {
    n.addEventListener("click", (e) => {
      e.preventDefault();
      activate("experience");
      const idx = parseInt(n.dataset.openExp, 10) || 0;
      setTimeout(() => {
        const items = document.querySelectorAll("#exp-list .exp-item");
        const target = items[idx];
        if (target) {
          target.style.transition = "background .2s";
          target.style.background = "var(--bg-2)";
          target.scrollIntoView({ block: "start", behavior: "smooth" });
          setTimeout(() => target.style.background = "", 1400);
        }
      }, 80);
    });
  });

  // ---------- Render views from i18n ----------
  function render() {
    const lang = window.I18nRuntime.getLang();
    renderSkills();
    renderExperience();
    renderProjects();
  }

  function renderSkills() {
    const grid = $("#skills-grid");
    if (!grid) return;
    const skills = window.I18nRuntime.get("about.skills", {});
    grid.innerHTML = "";
    Object.entries(skills).forEach(([k, s]) => {
      const row = document.createElement("div");
      row.className = "skill-row";
      row.innerHTML = `<div class="lab">${k}:</div><div class="val">${escape(s.label)} · <span style="color:var(--ink)">${escape(s.value)}</span></div>`;
      grid.appendChild(row);
    });
  }

  function renderExperience() {
    const list = $("#exp-list");
    const items = window.I18nRuntime.get("experience.items", []) || [];
    list.innerHTML = items.map((it, i) => `
      <div class="exp-item">
        <div class="exp-head">
          <span class="co">[${String(i+1).padStart(2,"0")}] ${escape(it.company)}</span>
          <span class="role">· ${escape(it.role)}</span>
          <span class="period">${escape(it.period)}</span>
        </div>
        <div class="loc" style="color:var(--dim);font-size:11px;margin:2px 0 4px">📍 ${escape(it.location)}</div>
        <ul>${(it.bullets||[]).map(b => `<li>${escape(b)}</li>`).join("")}</ul>
        <div class="exp-stack">${(it.stack||"").split("·").map(s => s.trim()).filter(Boolean).map(s => `<span class="chip">${escape(s)}</span>`).join("")}</div>
      </div>
    `).join("");
  }

  function renderProjects() {
    const grid = $("#proj-grid");
    const items = window.I18nRuntime.get("projects.items", []) || [];
    grid.innerHTML = items.map((p, i) => `
      <div class="proj">
        <div class="id">PRJ_${String(i+1).padStart(3,"0")}</div>
        <h4>${escape(p.title)}</h4>
        <p>${escape(p.desc)}</p>
      </div>
    `).join("");
  }

  function escape(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  const sleep = ms => new Promise(r => setTimeout(r, ms));

  // ---------- Command Palette ----------
  const COMMANDS = [
    { cmd: ":about",          label: "Open about.md",           icon: "📄", kind: "nav",   act: () => activate("about") },
    { cmd: ":skills",         label: "Open skills.yml",         icon: "⚙️", kind: "nav",   act: () => activate("skills") },
    { cmd: ":experience",     label: "Open experience.json",    icon: "📂", kind: "nav",   act: () => activate("experience") },
    { cmd: ":projects",       label: "Open projects.ts",        icon: "🧩", kind: "nav",   act: () => activate("projects") },
    { cmd: ":contact",        label: "Open contact form",       icon: "✉️", kind: "nav",   act: () => activate("contact") },
    { cmd: ":cv",             label: "Preview resume.pdf",      icon: "📕", kind: "nav",   act: () => activate("resume") },
    { cmd: ":help",           label: "Show help / command list",icon: "❔", kind: "nav",   act: () => activate("help") },
    { cmd: ":playground",     label: "Run Playwright playground", icon: "▶️", kind: "nav", act: () => activate("playground") },

    { cmd: ":resume download",label: "Download Anli-Resume.pdf",icon: "⬇️", kind: "action", act: downloadResume },
    { cmd: ":email",          label: "Compose email → hello@an-li.tw", icon: "📧", kind: "action",
      act: () => { window.location.href = "mailto:hello@an-li.tw?subject=Hello%20An"; } },
    { cmd: ":linkedin",       label: "Open LinkedIn",           icon: "🔗", kind: "action", act: () => window.open("https://linkedin.com/in/anlitaiwan","_blank") },
    { cmd: ":exit",           label: "Shut down · back to classic UI", icon: "⏻", kind: "action", act: () => window.__runShutdown && window.__runShutdown() },

    { cmd: ":theme",          label: "Toggle dark / light",     icon: "🌓", kind: "theme", act: () => cycleTheme() },
    { cmd: ":theme dark",     label: "Set theme: Dark",        icon: "🌙", kind: "theme", act: () => setTheme("catppuccin") },
    { cmd: ":theme light",    label: "Set theme: Light",       icon: "☀️", kind: "theme", act: () => setTheme("paper") },

    { cmd: ":lang en",        label: "Language: English",       icon: "🇬🇧", kind: "lang", act: () => window.I18nRuntime.setLang("en") },
    { cmd: ":lang ja",        label: "Language: 日本語",        icon: "🇯🇵", kind: "lang", act: () => window.I18nRuntime.setLang("ja") },
    { cmd: ":lang zh",        label: "Language: 繁體中文",      icon: "🇹🇼", kind: "lang", act: () => window.I18nRuntime.setLang("zh") }
  ];

  // hidden commands · don't show in palette list, but executable via status-bar prompt
  const HIDDEN_COMMANDS = [
    { cmd: ":sudo hire-me", act: openEgg },
    { cmd: ":sudo",         act: openEgg }
  ];

  const paletteBackdrop = $("#paletteBackdrop");
  const paletteInput = $("#paletteInput");
  const paletteList = $("#paletteList");
  let paletteSel = 0;
  let paletteFiltered = [];

  function openPalette(prefill = "") {
    paletteBackdrop.classList.add("open");
    paletteInput.value = prefill;
    paletteInput.focus();
    refreshPalette();
    // auto-hide the hint bar once user has discovered the palette
    const hint = document.querySelector(".hint-bar");
    if (hint) { hint.classList.add("hide"); setTimeout(() => hint.remove(), 600); }
    localStorage.setItem("anli.terminal.paletteSeen", "1");
  }
  function closePalette() {
    paletteBackdrop.classList.remove("open");
  }
  function refreshPalette() {
    const q = paletteInput.value.trim().toLowerCase();
    paletteFiltered = COMMANDS.filter(c =>
      !q || c.cmd.toLowerCase().includes(q) || c.label.toLowerCase().includes(q)
    );
    paletteSel = 0;
    paletteList.innerHTML = paletteFiltered.map((c, i) => `
      <div class="palette-item ${i===0?'selected':''}" data-idx="${i}">
        <span class="icon">${c.icon}</span>
        <span class="cmd">${c.cmd}</span>
        <span class="lab">${c.label}</span>
        <span class="sig">${c.kind}</span>
      </div>
    `).join("") || `<div class="palette-item"><span class="lab" style="color:var(--dim)">No matches.</span></div>`;
    paletteList.querySelectorAll("[data-idx]").forEach(el => {
      el.addEventListener("click", () => runPalette(parseInt(el.dataset.idx, 10)));
      el.addEventListener("mousemove", () => setPaletteSel(parseInt(el.dataset.idx, 10)));
    });
  }
  function setPaletteSel(i) {
    paletteSel = Math.max(0, Math.min(paletteFiltered.length - 1, i));
    paletteList.querySelectorAll(".palette-item").forEach((el, idx) => el.classList.toggle("selected", idx === paletteSel));
  }
  function runPalette(i) {
    const c = paletteFiltered[i];
    if (!c) return;
    closePalette();
    c.act();
  }

  paletteInput.addEventListener("input", refreshPalette);
  paletteInput.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setPaletteSel(paletteSel + 1); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setPaletteSel(paletteSel - 1); }
    else if (e.key === "Enter") { e.preventDefault(); runPalette(paletteSel); }
    else if (e.key === "Escape") { closePalette(); }
  });
  paletteBackdrop.addEventListener("click", (e) => { if (e.target === paletteBackdrop) closePalette(); });

  // ---------- Global shortcuts ----------
  let gPressed = false;
  document.addEventListener("keydown", (e) => {
    const meta = e.metaKey || e.ctrlKey;
    if (meta && (e.key === "k" || e.key === "K")) { e.preventDefault(); openPalette(); return; }
    if (e.key === "Escape") { closePalette(); closeEgg(); return; }
    const typing = ["INPUT","TEXTAREA"].includes(document.activeElement?.tagName);
    if (typing) return;
    if (e.key === "/") { e.preventDefault(); openPalette(); return; }
    if (e.key === "g") { gPressed = true; setTimeout(() => gPressed = false, 800); return; }
    if (gPressed) {
      const map = { a:"about", s:"skills", e:"experience", p:"projects", c:"contact", h:"help", r:"resume" };
      const k = e.key.toLowerCase();
      if (map[k]) { gPressed = false; activate(map[k]); }
    }
  });

  // ---------- Focus-follows-cursor ----------
  const caret = $("#focusCursor");
  const focusables = "a, button, input, textarea, [role=button], .node.file, .proj, .skill-row, .palette-item, .btn";
  // areas where we suppress the effect (top chrome)
  const suppressZones = ".titlebar, .tabs, .statusbar";
  document.addEventListener("mousemove", (e) => {
    const el = document.elementFromPoint(e.clientX, e.clientY);
    const hit = el && el.closest(focusables);
    if (hit && !hit.closest(suppressZones)) {
      const rect = hit.getBoundingClientRect();
      caret.classList.add("on");
      caret.style.left = (rect.right + 2) + "px";
      caret.style.top  = (rect.top + 2) + "px";
      caret.style.height = Math.min(16, rect.height - 4) + "px";
    } else {
      caret.classList.remove("on");
    }
  });

  // ---------- Easter egg ----------
  const egg = $("#egg");
  function openEgg() { egg.classList.add("on"); }
  function closeEgg() { egg.classList.remove("on"); }
  $("#egg-close").addEventListener("click", closeEgg);

  // ---------- Resume helpers ----------
  function downloadResume() {
    const a = document.createElement("a");
    a.href = "shared/Anli-Resume.pdf";
    a.download = "Anli-Resume.pdf";
    a.click();
  }

  // ---------- Playground ----------
  const pgOutput = () => $("#pg-output");
  const now = () => new Date().toLocaleTimeString("en-GB");
  async function pgRun() {
    const box = pgOutput();
    box.innerHTML = "";
    function add(st, msg, cls="") {
      const div = document.createElement("div");
      div.className = "pg-line";
      div.innerHTML = `<span class="ts">${now()}</span><span class="st ${cls}">${st}</span><span class="msg">${msg}</span>`;
      box.appendChild(div);
      box.scrollTop = box.scrollHeight;
    }
    add("▸", "Running 1 test using 1 worker…");
    await sleep(350);
    add("↻", "tests/login.spec.ts · login flow");
    await sleep(280);
    add("→", "  page.goto('/login') …200 OK");
    await sleep(220);
    add("→", "  fill Email → hello@an-li.tw");
    await sleep(180);
    add("→", "  fill Password → ••••••••");
    await sleep(180);
    add("→", "  click Sign in");
    await sleep(320);
    add("→", "  expect(heading 'Dashboard') .toBeVisible()");
    await sleep(260);
    add("✓", "  passed (1.8s)", "");
    await sleep(80);
    add("", "");
    add("✓", "1 passed (2.1s)");
  }
  $("#pg-run").addEventListener("click", pgRun);
  $("#pg-reset").addEventListener("click", () => {
    pgOutput().innerHTML = `<div class="pg-line"><span class="ts">--:--:--</span><span class="st">·</span><span class="msg" style="color:var(--dim)">Press "Run test" to start.</span></div>`;
  });

  // ---------- Hero typer ----------
  const typer = window.makeTyper(document.getElementById("hero-typer"), { delay: 80, pause: 1600 });
  function updateTyper() {
    const roles = window.I18nRuntime.get("hero.roles", ["a SWT"]);
    typer.setWords(roles);
  }

  // ---------- Contact form ----------
  const form = $("#contactForm");
  const formStatus = $("#formStatus");

  // EmailJS config — shared with the classic homepage (js/sendEmail.js)
  const EMAILJS_PUBLIC_KEY  = "FzivnNCaRKt7YjYiI";
  const EMAILJS_SERVICE_ID  = "default_service";
  const EMAILJS_TEMPLATE_ID = "template_xlgdz68";
  if (window.emailjs) {
    try { window.emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY }); }
    catch (err) { console.warn("[contact] EmailJS init failed:", err); }
  }

  $("#mailtoBtn").addEventListener("click", (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const subject = encodeURIComponent(fd.get("subject") || "Hello from an-li.tw");
    const body = encodeURIComponent(
      `Name: ${fd.get("name")||""}\nEmail: ${fd.get("email")||""}\n\n${fd.get("message")||""}`
    );
    window.location.href = `mailto:hello@an-li.tw?subject=${subject}&body=${body}`;
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    formStatus.className = "form-status";
    formStatus.style.display = "block";
    formStatus.textContent = window.I18nRuntime.get("contact.sending", "Sending…");

    if (!window.emailjs) {
      formStatus.className = "form-status err";
      formStatus.textContent = "Mail service failed to load. Use mailto: fallback.";
      return;
    }

    // Map terminal's short field names to the homepage template's variables
    // so one EmailJS template serves both pages.
    const fd = new FormData(form);
    const payload = {
      contactName:    fd.get("name")    || "",
      contactEmail:   fd.get("email")   || "",
      contactSubject: fd.get("subject") || "Hello from an-li.tw",
      contactMessage: fd.get("message") || ""
    };

    try {
      await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, payload);
      formStatus.textContent = window.I18nRuntime.get("contact.successMsg", "Thanks, your message was sent.");
      form.reset();
    } catch (err) {
      console.error("[contact] EmailJS send failed:", err);
      formStatus.className = "form-status err";
      formStatus.textContent = window.I18nRuntime.get("contact.errorMsg", "Something went wrong. Please try again.");
    }
  });

  // ---------- i18n change ----------
  window.addEventListener("i18n:change", () => { render(); updateTyper(); });

  // ---------- Status bar command input ----------
  const sbInput = $("#sbInput");
  const sbCmd   = $("#sbCmd");
  const statusbar = $("#statusbar");
  const history = [];
  let histIdx = -1;

  function flashStatus(ok, msg) {
    if (!msg) return;
    const old = statusbar.style.background;
    statusbar.style.transition = "background .15s";
    statusbar.style.background = ok ? "var(--accent)" : "var(--red)";
    setTimeout(() => { statusbar.style.background = old; }, 180);
  }

  function execCommand(raw) {
    const q = String(raw || "").trim();
    if (!q) return;
    // allow bare names: "about", "sudo", "sudo hire-me", or ":about"
    const norm = q.startsWith(":") ? q : ":" + q;
    // check hidden commands first (exact match, both colonized and not)
    const hidden = HIDDEN_COMMANDS.find(c => c.cmd.toLowerCase() === norm.toLowerCase());
    if (hidden) { hidden.act(); flashStatus(true); history.unshift(q); histIdx = -1; sbInput.value = ""; return; }
    // exact match first
    let c = COMMANDS.find(c => c.cmd.toLowerCase() === norm.toLowerCase());
    // prefix match fallback
    if (!c) c = COMMANDS.find(c => c.cmd.toLowerCase().startsWith(norm.toLowerCase()));
    if (!c) {
      flashStatus(false);
      sbInput.placeholder = `command not found: ${q} · try :help`;
      sbInput.value = "";
      setTimeout(() => sbInput.placeholder = "try a command ( :help for more detail )", 2500);
      return;
    }
    c.act();
    flashStatus(true);
    history.unshift(q);
    if (history.length > 30) history.pop();
    histIdx = -1;
    sbInput.value = "";
  }

  sbCmd.addEventListener("click", () => sbInput.focus());
  sbInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") { e.preventDefault(); execCommand(sbInput.value); }
    else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length && histIdx < history.length - 1) { histIdx++; sbInput.value = history[histIdx]; }
    }
    else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histIdx > 0) { histIdx--; sbInput.value = history[histIdx]; }
      else { histIdx = -1; sbInput.value = ""; }
    }
    else if (e.key === "Tab") {
      e.preventDefault();
      const q = sbInput.value.trim().toLowerCase();
      if (!q) return;
      const match = COMMANDS.find(c => c.cmd.toLowerCase().startsWith(q));
      if (match) sbInput.value = match.cmd;
    }
    else if (e.key === "Escape") { sbInput.value = ""; sbInput.blur(); }
  });

  // hide hint bar if user has already opened palette before
  if (localStorage.getItem("anli.terminal.paletteSeen")) {
    const hint = document.querySelector(".hint-bar");
    if (hint) hint.remove();
  }

  // ---------- Boot ----------
  render();
  renderTabs();
  updateTyper();
  activate("about");
})();
