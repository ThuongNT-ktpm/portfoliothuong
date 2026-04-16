/**
 * ui-core.js
 * Trách nhiệm: Quản lý các tiện ích giao diện chung (Reading progress, Theme, Scroll-top, Security).
 */

// 1. Tooltips cho Mobile (Skills)
(function () {
  if (!("ontouchstart" in globalThis)) return;
  const skills = document.querySelectorAll(".skill-item[data-tip]");
  let current = null;
  skills.forEach((item) => {
    item.addEventListener("touchstart", (e) => {
      e.preventDefault();
      if (current && current !== item) current.classList.remove("tip-active");
      item.classList.toggle("tip-active");
      current = item.classList.contains("tip-active") ? item : null;
    }, { passive: false });
  });
  document.addEventListener("touchstart", (e) => {
    if (current && !current.contains(e.target)) {
      current.classList.remove("tip-active");
      current = null;
    }
  });
})();

// 2. Reading Progress Bar
(function () {
  const bar = document.getElementById("reading-progress");
  if (!bar) return;
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (docHeight > 0 ? (scrollTop / docHeight) * 100 : 0) + "%";
  });
})();

// 3. Theme Toggle (Dark/Light Mode)
(function () {
  const toggle = document.getElementById("theme-toggle");
  const saved = localStorage.getItem("darkMode");
  if (saved === "true") document.body.classList.add("dark-mode");
  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
    });
  }
})();

// 4. Scroll To Top Button
(function () {
  const btn = document.getElementById("scroll-top");
  if (!btn) return;
  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 300);
  });
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();

// 5. Confetti on Load
(function () {
  if (sessionStorage.getItem("confetti_done")) return;
  sessionStorage.setItem("confetti_done", "1");
  window.addEventListener("load", () => {
    if (typeof confetti === "function") {
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.5 } });
    }
  });
})();

// 6. Security & Protection
document.addEventListener("contextmenu", (event) => event.preventDefault());
document.onkeydown = function (e) {
  if (
    e.keyCode == 123 ||
    (e.ctrlKey && e.shiftKey && (e.keyCode == "I".charCodeAt(0) || e.keyCode == "J".charCodeAt(0))) ||
    (e.ctrlKey && e.keyCode == "U".charCodeAt(0))
  ) {
    return false;
  }
};
