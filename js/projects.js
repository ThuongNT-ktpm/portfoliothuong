/**
 * projects.js
 * Trách nhiệm: Tìm kiếm, lọc và xử lý hành động người dùng trên danh sách dự án.
 */

// 1. Tìm kiếm dự án
(function () {
  const input = document.getElementById("projectSearch");
  if (!input) return;
  const cards = document.querySelectorAll(".project-card");

  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    cards.forEach((card) => {
      const name = card.querySelector("h4")?.textContent.toLowerCase() || "";
      card.classList.toggle("hidden", q !== "" && !name.includes(q));
    });
  });
})();

// 2. Bộ lọc dự án (HTML/CSS, JS, Python...)
(function () {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".project-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;
      cards.forEach((card) => {
        const tags = card.dataset.tags || "";
        if (filter === "all" || tags.includes(filter)) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });
})();

// 3. Xử lý click Xem dự án & Gửi thông báo vị trí
document.querySelectorAll(".project-btn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const targetUrl = this.getAttribute("href");
    const targetWindow = this.getAttribute("target") || "_self";

    window.open(targetUrl, targetWindow);

    if (typeof trackUserLocation === "function") {
      trackUserLocation(targetUrl);
    }
  });
});
