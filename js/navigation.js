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
  const scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".animate-scroll").forEach((el) => scrollObserver.observe(el));

  // Initial check on load
  window.addEventListener("load", () => {
    document.querySelectorAll(".animate-scroll").forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add("active");
      }
    });
  });
})();
