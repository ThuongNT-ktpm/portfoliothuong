/**
 * effects.js
 * Trach nhiem: Cac hieu ung trang tri nhe, uu tien muot va khong lam nang mobile.
 */

(function () {
  const el = document.getElementById("typing-text");
  if (!el) return;

  const roles = ["🌌", "🎓", "💘", "📔"];
  let roleIdx = 0;
  let charIdx = 0;
  let deleting = false;

  function type() {
    const current = roles[roleIdx];
    el.textContent = deleting
      ? current.substring(0, charIdx--)
      : current.substring(0, charIdx++);

    let delay = deleting ? 60 : 100;

    if (!deleting && charIdx > current.length) {
      delay = 1800;
      deleting = true;
    } else if (deleting && charIdx < 0) {
      deleting = false;
      charIdx = 0;
      roleIdx = (roleIdx + 1) % roles.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  setTimeout(type, 800);
})();

(function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  function createHeroParticles() {
    const wrap = document.getElementById("heroParticles");
    if (!wrap || reduceMotion) return;

    const particleCount = isFinePointer ? 34 : 18;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < particleCount; i++) {
      const dot = document.createElement("span");
      dot.style.setProperty("--x", `${Math.random() * 100}%`);
      dot.style.setProperty("--y", `${Math.random() * 100}%`);
      dot.style.setProperty("--size", `${2 + Math.random() * 4}px`);
      dot.style.setProperty("--delay", `${Math.random() * 8}s`);
      dot.style.setProperty("--duration", `${9 + Math.random() * 12}s`);
      fragment.appendChild(dot);
    }

    wrap.appendChild(fragment);
  }

  function initHeroReveal() {
    const items = document.querySelectorAll(".hero-text > *");
    items.forEach((item, index) => {
      item.classList.add("hero-reveal");
      item.style.setProperty("--reveal-delay", `${120 + index * 120}ms`);
    });
    requestAnimationFrame(() => document.body.classList.add("hero-ready"));
  }

  function initCursorGlow() {
    if (!isFinePointer || reduceMotion) return;

    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    document.body.appendChild(glow);

    window.addEventListener("pointermove", (event) => {
      glow.style.setProperty("--cursor-x", `${event.clientX}px`);
      glow.style.setProperty("--cursor-y", `${event.clientY}px`);
    }, { passive: true });
  }

  function initProjectTilt() {
    if (!isFinePointer || reduceMotion) return;

    document.addEventListener("pointermove", (event) => {
      const card = event.target.closest(".project-card");
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      const rotateX = (0.5 - y) * 8;
      const rotateY = (x - 0.5) * 10;

      card.classList.add("is-tilting");
      card.style.setProperty("--tilt-x", `${rotateX}deg`);
      card.style.setProperty("--tilt-y", `${rotateY}deg`);
      card.style.setProperty("--glow-x", `${x * 100}%`);
      card.style.setProperty("--glow-y", `${y * 100}%`);
    }, { passive: true });

    document.addEventListener("pointerout", (event) => {
      const card = event.target.closest(".project-card");
      if (!card || card.contains(event.relatedTarget)) return;
      card.classList.remove("is-tilting");
      card.style.removeProperty("--tilt-x");
      card.style.removeProperty("--tilt-y");
    });
  }

  function initMagneticButtons() {
    if (!isFinePointer || reduceMotion) return;

    document.addEventListener("pointermove", (event) => {
      const btn = event.target.closest(".study-btn, .project-btn, .filter-btn, .social-link, .copy-email-btn");
      if (!btn) return;

      const rect = btn.getBoundingClientRect();
      const x = event.clientX - (rect.left + rect.width / 2);
      const y = event.clientY - (rect.top + rect.height / 2);

      btn.classList.add("is-magnetic");
      btn.style.setProperty("--magnet-x", `${x * 0.18}px`);
      btn.style.setProperty("--magnet-y", `${y * 0.18}px`);
    }, { passive: true });

    document.addEventListener("pointerout", (event) => {
      const btn = event.target.closest(".is-magnetic");
      if (!btn || btn.contains(event.relatedTarget)) return;
      btn.classList.remove("is-magnetic");
      btn.style.removeProperty("--magnet-x");
      btn.style.removeProperty("--magnet-y");
    });
  }

  function initSectionTransitions() {
    const headings = document.querySelectorAll(".heading");
    if (!headings.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("heading-in-view", entry.isIntersecting);
      });
    }, { threshold: 0.6 });

    headings.forEach((heading) => observer.observe(heading));
  }

  function initProjectLaunchFeedback() {
    document.addEventListener("projectLinkClicked", (event) => {
      const card = event.detail?.card;
      if (!card) return;

      card.classList.add("project-launching");
      document.body.classList.add("project-page-transition");

      setTimeout(() => {
        card.classList.remove("project-launching");
        document.body.classList.remove("project-page-transition");
      }, 650);
    });
  }

  createHeroParticles();
  initHeroReveal();
  initCursorGlow();
  initProjectTilt();
  initMagneticButtons();
  initSectionTransitions();
  initProjectLaunchFeedback();
})();
