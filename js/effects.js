/**
 * effects.js
 * Trách nhiệm: Các hiệu ứng đặc biệt mang tính trang trí.
 */

// 1. Typing Text Effect
(function () {
  const el = document.getElementById("typing-text");
  if (!el) return;

  const roles = ["🌌", "🎓", "💘", "📔"];
  let roleIdx = 0,
    charIdx = 0,
    deleting = false;

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
