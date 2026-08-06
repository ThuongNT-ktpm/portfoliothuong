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

  const vietnameseDetails = {
    "Library Management Web": {
      problem: "Quản lý tài khoản, kho sách, mượn trả, tiền phạt, thanh toán và báo cáo trong một hệ thống thống nhất.",
      role: "Dự án nhóm học thuật",
      features: "Phân quyền, đặt sách, thanh toán PayOS, thông báo và xuất báo cáo PDF.",
      lesson: "Áp dụng Spring MVC, kiến trúc phân lớp, bảo mật, JPA và tích hợp dịch vụ bên thứ ba."
    },
    "Photobooth Xi Đa": {
      problem: "Cung cấp công cụ chụp và cá nhân hóa dải ảnh riêng tư ngay trên trình duyệt.",
      role: "Lập trình viên",
      features: "Chụp ảnh, chọn bố cục, bộ lọc, sticker, tải ảnh và video recap.",
      lesson: "Cải thiện kỹ năng xử lý media, Browser API, trạng thái giao diện và tương tác responsive."
    },
    "Smart Anti-Theft Camera": {
      problem: "Phát hiện chuyển động đáng ngờ và cảnh báo tại chỗ kèm hình ảnh.",
      role: "Lập trình viên",
      features: "Cảm biến chuyển động, camera, còi, đèn LED và cảnh báo xâm nhập.",
      lesson: "Kết hợp cảm biến phần cứng, logic nhúng và xử lý sự kiện thời gian thực."
    },
    "Tạo QR": {
      problem: "Tạo mã QR nhanh chóng từ nội dung do người dùng nhập.",
      role: "Lập trình viên",
      features: "Tạo tức thì, tải mã QR và giao diện responsive.",
      lesson: "Rèn luyện tích hợp API, kiểm tra dữ liệu và thiết kế trải nghiệm gọn nhẹ."
    },
    "Cảm ơn vì đã đến bên tôi": {
      problem: "Tạo một trải nghiệm web kể chuyện giàu cảm xúc.",
      role: "Lập trình viên",
      features: "Cảnh tương tác, animation, âm thanh và trình bày responsive.",
      lesson: "Rèn luyện cách điều phối animation và thiết kế trải nghiệm tập trung vào cảm xúc."
    },
    "Mưa Chữ": {
      problem: "Biến typography thành một trải nghiệm hình ảnh có tính tương tác.",
      role: "Lập trình viên",
      features: "Hiệu ứng chữ chuyển động và tương tác trực tiếp trên trình duyệt.",
      lesson: "Khám phá DOM animation, kiểm soát thời gian và tối ưu hiệu ứng hình ảnh."
    },
    "TasksManager": {
      problem: "Tổ chức và quản lý công việc bằng một ứng dụng web Java có cấu trúc.",
      role: "Lập trình viên",
      features: "Luồng quản lý công việc, lưu trữ dữ liệu, giao diện JSP/JSTL và ánh xạ ORM.",
      lesson: "Áp dụng Jakarta EE, Hibernate/JPA, Maven và phát triển web theo kiến trúc phân lớp."
    }
  };

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

    const imageMarkup = project.image
      ? `<img src="${project.image}" alt="${project.alt || project.title}" loading="lazy" />`
      : `<div class="project-placeholder"><i class="fas fa-code"></i><span>${project.title}</span></div>`;
    const isVietnamese = window.getPortfolioLanguage?.() === "vi";
    const details = isVietnamese ? (vietnameseDetails[project.title] || project) : project;
    const demoLink = project.url
      ? `<a href="${project.url}" target="_blank" rel="noopener noreferrer" class="project-btn"><i class="fas fa-arrow-up-right-from-square"></i> ${window.t?.("live_demo") || "Live demo"}</a>`
      : "";
    const sourceLink = project.source
      ? `<a href="${project.source}" target="_blank" rel="noopener noreferrer" class="project-btn"><i class="fab fa-github"></i> ${window.t?.("source_code") || "Source"}</a>`
      : "";
    const caseLink = project.caseStudy
      ? `<a href="${project.caseStudy}" class="project-btn case-link"><i class="fas fa-book-open"></i> ${window.t?.("case_study") || "Case study"}</a>`
      : "";

    card.innerHTML = `
      <div class="project-thumb">
        ${imageMarkup}
        ${project.featured ? `<span class="project-featured">${typeof window.t === "function" ? window.t("featured") : "Nổi bật"}</span>` : ""}
      </div>
      <div class="project-info">
        <h4>${project.title}</h4>
        <div class="project-tech-list">${createTechBadges(project.tech)}</div>
        <p class="project-summary">${details.problem || ""}</p>
        <div class="project-links">${caseLink}${demoLink}${sourceLink}</div>
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
      const countLabel = typeof window.t === "function" ? window.t("project_count") : "dự án";
      countEl.textContent = `${visibleProjects.length}/${projects.length} ${countLabel}`;
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

  });

  renderProjects();
  document.addEventListener("languageChanged", renderProjects);
})();
