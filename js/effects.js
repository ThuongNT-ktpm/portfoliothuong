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

  function initForeverClock() {
    const hourHand = document.getElementById("clockHourHand");
    const minuteHand = document.getElementById("clockMinuteHand");
    const secondHand = document.getElementById("clockSecondHand");
    const daysEl = document.getElementById("foreverDays");
    const timeEl = document.getElementById("foreverTime");
    const clock = document.getElementById("foreverClock");
    const closeBtn = document.getElementById("closeForeverClock");
    const panel = document.getElementById("foreverClockPanel");
    const detailDaysEl = document.getElementById("clockDetailDays");
    const detailTimeEl = document.getElementById("clockDetailTime");

    if (!hourHand || !minuteHand || !secondHand || !daysEl || !timeEl) return;

    const startDate = new Date(2023, 8, 20, 0, 0, 0);
    const secondMs = 1000;
    const minuteMs = 60 * secondMs;
    const hourMs = 60 * minuteMs;
    const dayMs = 24 * hourMs;

    function pad(value) {
      return String(value).padStart(2, "0");
    }

    function updateClock() {
      const now = new Date();
      const seconds = now.getSeconds() + now.getMilliseconds() / 1000;
      const minutes = now.getMinutes() + seconds / 60;
      const hours = (now.getHours() % 12) + minutes / 60;
      const elapsed = Math.max(0, now - startDate);
      const days = Math.floor(elapsed / dayMs);
      const hoursLeft = Math.floor((elapsed % dayMs) / hourMs);
      const minutesLeft = Math.floor((elapsed % hourMs) / minuteMs);
      const secondsLeft = Math.floor((elapsed % minuteMs) / secondMs);

      hourHand.style.transform = `translateX(-50%) rotate(${hours * 30}deg)`;
      minuteHand.style.transform = `translateX(-50%) rotate(${minutes * 6}deg)`;
      secondHand.style.transform = `translateX(-50%) rotate(${seconds * 6}deg)`;
      daysEl.textContent = `${days.toLocaleString("en-US")} days`;
      timeEl.textContent = `${pad(hoursLeft)}:${pad(minutesLeft)}:${pad(secondsLeft)} - forever`;
      if (detailDaysEl) detailDaysEl.textContent = days.toLocaleString("en-US");
      if (detailTimeEl) detailTimeEl.textContent = `${pad(hoursLeft)}:${pad(minutesLeft)}:${pad(secondsLeft)}`;

      requestAnimationFrame(updateClock);
    }

    function setPanel(open) {
      if (!clock) return;
      clock.classList.toggle("panel-open", open);
      clock.setAttribute("aria-expanded", String(open));
    }

    clock?.addEventListener("click", () => {
      setPanel(!clock.classList.contains("panel-open"));
    });

    clock?.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      setPanel(!clock.classList.contains("panel-open"));
    });

    closeBtn?.addEventListener("click", (event) => {
      event.stopPropagation();
      setPanel(false);
    });

    panel?.addEventListener("click", (event) => {
      event.stopPropagation();
    });

    document.addEventListener("click", (event) => {
      if (!clock || clock.contains(event.target)) return;
      setPanel(false);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setPanel(false);
    });

    updateClock();
  }

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

    const cursor = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      glowX: window.innerWidth / 2,
      glowY: window.innerHeight / 2,
    };

    window.addEventListener("pointermove", (event) => {
      cursor.x = event.clientX;
      cursor.y = event.clientY;
      glow.classList.add("is-visible");
    }, { passive: true });

    document.addEventListener("pointerleave", () => {
      glow.classList.remove("is-visible");
    });

    function animateGlow() {
      cursor.glowX += (cursor.x - cursor.glowX) * 0.12;
      cursor.glowY += (cursor.y - cursor.glowY) * 0.12;

      glow.style.setProperty("--cursor-x", `${cursor.glowX}px`);
      glow.style.setProperty("--cursor-y", `${cursor.glowY}px`);

      requestAnimationFrame(animateGlow);
    }

    animateGlow();
  }

  function initCursorTrail() {
    if (!isFinePointer || reduceMotion) return;

    const trailCount = 14;
    const trail = [];
    const cursor = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      lastSparkX: 0,
      lastSparkY: 0,
    };

    for (let i = 0; i < trailCount; i++) {
      const dot = document.createElement("span");
      const size = Math.max(3, 13 - i * 0.65);
      const alpha = Math.max(0.08, 0.55 - i * 0.035);

      dot.className = "cursor-trail";
      dot.style.setProperty("--trail-size", `${size}px`);
      dot.style.setProperty("--trail-alpha", `${alpha}`);
      document.body.appendChild(dot);

      trail.push({
        el: dot,
        x: cursor.x,
        y: cursor.y,
      });
    }

    function createSpark(x, y) {
      const spark = document.createElement("span");
      const angle = Math.random() * Math.PI * 2;
      const distance = 16 + Math.random() * 24;

      spark.className = "cursor-spark";
      spark.style.setProperty("--spark-x", `${x}px`);
      spark.style.setProperty("--spark-y", `${y}px`);
      spark.style.setProperty("--spark-size", `${3 + Math.random() * 4}px`);
      spark.style.setProperty("--spark-dx", `${Math.cos(angle) * distance}px`);
      spark.style.setProperty("--spark-dy", `${Math.sin(angle) * distance}px`);
      document.body.appendChild(spark);

      spark.addEventListener("animationend", () => spark.remove(), { once: true });
    }

    window.addEventListener("pointermove", (event) => {
      cursor.x = event.clientX;
      cursor.y = event.clientY;
      trail.forEach((dot) => dot.el.classList.add("is-visible"));

      const dx = cursor.x - cursor.lastSparkX;
      const dy = cursor.y - cursor.lastSparkY;
      if (Math.hypot(dx, dy) > 34) {
        createSpark(cursor.x, cursor.y);
        cursor.lastSparkX = cursor.x;
        cursor.lastSparkY = cursor.y;
      }
    }, { passive: true });

    document.addEventListener("pointerleave", () => {
      trail.forEach((dot) => dot.el.classList.remove("is-visible"));
    });

    function animateTrail() {
      trail.forEach((dot, index) => {
        const target = index === 0 ? cursor : trail[index - 1];
        const speed = index === 0 ? 0.34 : 0.28;

        dot.x += (target.x - dot.x) * speed;
        dot.y += (target.y - dot.y) * speed;
        dot.el.style.setProperty("--trail-x", `${dot.x}px`);
        dot.el.style.setProperty("--trail-y", `${dot.y}px`);
      });

      requestAnimationFrame(animateTrail);
    }

    animateTrail();
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
  initForeverClock();
  initCursorGlow();
  initCursorTrail();
  initProjectTilt();
  initMagneticButtons();
  initSectionTransitions();
  initProjectLaunchFeedback();
})();
