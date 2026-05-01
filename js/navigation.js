/**
 * navigation.js
 * Trách nhiệm: Quản lý điều hướng, Menu Mobile và các hiệu ứng cuộn trang.
 */

// 1. Menu Mobile Toggle
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const navbar = document.querySelector(".navbar");

  if (menuIcon && navbar) {
    menuIcon.onclick = () => {
      menuIcon.classList.toggle("fa-times");
      navbar.classList.toggle("active");
    };

    document.querySelectorAll(".navbar a").forEach((n) =>
      n.addEventListener("click", () => {
        menuIcon.classList.remove("fa-times");
        navbar.classList.remove("active");
      })
    );
  }

  window.onscroll = () => {
    if (menuIcon && navbar) {
      menuIcon.classList.remove("fa-times");
      navbar.classList.remove("active");
    }
  };
});

// 2. Active Link Navbar Observer
(function () {
  const sections = document.querySelectorAll("section[id], footer[id]");
  const navLinks = document.querySelectorAll(".navbar a");

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.remove("active"));
          const active = document.querySelector(`.navbar a[href="#${entry.target.id}"]`);
          if (active) active.classList.add("active");
        }
      });
    },
    { threshold: 0.35 }
  );

  sections.forEach((sec) => navObserver.observe(sec));
})();

// 3. Animate on Scroll
(function () {
  function enhanceRevealTargets(root = document) {
    root
      .querySelectorAll(".project-search-wrap, .project-filters, .project-count, .project-empty-state")
      .forEach((el, index) => {
        el.classList.add("animate-scroll", "from-bottom");
        el.style.setProperty("--scroll-delay", `${Math.min(index * 90, 270)}ms`);
      });

    root.querySelectorAll(".skill-item").forEach((el, index) => {
      el.classList.add("animate-scroll", "from-bottom");
      el.style.setProperty("--scroll-delay", `${Math.min(index * 70, 420)}ms`);
    });

    root.querySelectorAll(".timeline-item").forEach((el, index) => {
      el.style.setProperty("--scroll-delay", `${Math.min(index * 80, 320)}ms`);
    });
  }

  const scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("active", entry.isIntersecting);
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -8% 0px",
    }
  );

  window.observeScrollReveal = function (root = document) {
    enhanceRevealTargets(root);
    root.querySelectorAll(".animate-scroll").forEach((el, index) => {
      if (!el.style.getPropertyValue("--scroll-delay")) {
        el.style.setProperty("--scroll-delay", `${Math.min(index * 45, 360)}ms`);
      }
      scrollObserver.observe(el);
    });
  };

  window.observeScrollReveal();

  // Initial check on load
  window.addEventListener("load", () => {
    document.querySelectorAll(".animate-scroll").forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
        el.classList.add("active");
      }
    });
  });
})();
