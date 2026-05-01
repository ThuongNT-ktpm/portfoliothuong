/**
 * projects.js
 * Trach nhiem: Render, tim kiem, loc va xu ly hanh dong tren danh sach du an.
 */

(function () {
  const config = window.APP_CONFIG || {};
  const projects = Array.isArray(config.projects) ? config.projects : [];

  const grid = document.getElementById("projectsGrid");
  const input = document.getElementById("projectSearch");
  const clearBtn = document.getElementById("clearProjectSearch");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const countEl = document.getElementById("projectCount");
  const emptyState = document.getElementById("projectEmptyState");

  if (!grid) return;

  let activeFilter = "all";
  let keyword = "";

  function normalize(value) {
    return value
      .toString()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  function createTechBadges(techList) {
    return (techList || [])
      .map((tech) => `<span class="project-tech">${tech}</span>`)
      .join("");
  }

  function createProjectCard(project, index) {
    const card = document.createElement("article");
    const direction = index % 2 === 0 ? "from-right" : "from-left";
    card.className = `project-card animate-scroll ${direction}${project.featured ? " featured-card" : ""}`;
    card.dataset.tags = (project.tags || []).join(" ");
    card.style.setProperty("--scroll-delay", `${Math.min(index * 90, 360)}ms`);

    card.innerHTML = `
      <div class="project-thumb">
        <img src="${project.image}" alt="${project.alt || project.title}" loading="lazy" />
        ${project.featured ? '<span class="project-featured">Featured</span>' : ""}
      </div>
      <div class="project-info">
        <h4>${project.title}</h4>
        <div class="project-tech-list">${createTechBadges(project.tech)}</div>
        <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="project-btn">
          Xem chi tiết <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    `;

    return card;
  }

  function getFilteredProjects() {
    const normalizedKeyword = normalize(keyword);

    return projects.filter((project) => {
      const tags = project.tags || [];
      const matchesFilter = activeFilter === "all" || tags.includes(activeFilter);
      const searchable = [
        project.title,
        project.alt,
        ...(project.tech || []),
        ...tags,
      ].join(" ");
      const matchesKeyword = !normalizedKeyword || normalize(searchable).includes(normalizedKeyword);

      return matchesFilter && matchesKeyword;
    });
  }

  function refreshScrollAnimation() {
    requestAnimationFrame(() => {
      if (typeof window.observeScrollReveal === "function") {
        window.observeScrollReveal(grid);
        return;
      }

      document.querySelectorAll(".projects-grid .animate-scroll").forEach((el) => el.classList.add("active"));
    });
  }

  function renderProjects() {
    const visibleProjects = getFilteredProjects();
    grid.innerHTML = "";
    visibleProjects.forEach((project, index) => grid.appendChild(createProjectCard(project, index)));

    if (countEl) {
      countEl.textContent = `${visibleProjects.length}/${projects.length} projects`;
    }

    if (emptyState) {
      emptyState.hidden = visibleProjects.length > 0;
    }

    if (clearBtn) {
      clearBtn.classList.toggle("visible", keyword.length > 0);
    }

    refreshScrollAnimation();
  }

  input?.addEventListener("input", () => {
    keyword = input.value.trim();
    renderProjects();
  });

  clearBtn?.addEventListener("click", () => {
    keyword = "";
    if (input) {
      input.value = "";
      input.focus();
    }
    renderProjects();
  });

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((item) => item.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.dataset.filter || "all";
      renderProjects();
    });
  });

  grid.addEventListener("click", (event) => {
    const link = event.target.closest(".project-btn");
    if (!link) return;

    const card = link.closest(".project-card");
    document.dispatchEvent(new CustomEvent("projectLinkClicked", {
      detail: { link, card, url: link.href },
    }));

    if (typeof trackUserLocation === "function") {
      trackUserLocation(link.href);
    }
  });

  renderProjects();
})();
