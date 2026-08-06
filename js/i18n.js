(function () {
  const messages = {
    vi: {
      nav_home: "Giới thiệu", nav_projects: "Dự án", nav_skills: "Kỹ năng",
      nav_timeline: "Hành trình", nav_study: "Tài liệu", nav_blog: "Bài viết",
      profile_name: "Nguyễn Tiến Thương",
      profile_role: "SINH VIÊN KỸ THUẬT PHẦN MỀM",
      profile_bio: "Mình có nền tảng vững về Spring Boot và tập trung phát triển ứng dụng Backend Java có cấu trúc rõ ràng, bảo mật, ổn định và dễ mở rộng.",
      target_label: "Mục tiêu:", target_value: "Thực tập sinh Java", location_label: "Địa điểm:",
      status_label: "Trạng thái:", status_value: "Sẵn sàng thực tập", english_label: "Tiếng Anh:", english_value: "Đọc hiểu tài liệu kỹ thuật tốt",
      case_problem: "Bài toán", case_role: "Vai trò", case_features: "Tính năng nổi bật", case_lesson: "Bài học kỹ thuật",
      live_demo: "Bản chạy thử", source_code: "Mã nguồn",
      case_study: "Case study",
      hero_title: "Lập trình viên Backend Java",
      hero_bio: "Mình là Nguyễn Tiến Thương, sinh viên chuyên ngành Kỹ thuật Phần mềm định hướng phát triển Backend.<br><br>Mình có nền tảng vững về Spring Boot, từng xây dựng ứng dụng với Spring Security, JPA và cơ sở dữ liệu SQL; chú trọng kiến trúc phân lớp, bảo mật và khả năng bảo trì.",
      view_projects: "Xem dự án", view_cv: "Xem CV", contact: "Liên hệ",
      projects_title: "Dự án", project_search: "Tìm dự án...", all: "Tất cả",
      project_empty_title: "Không tìm thấy dự án", project_empty_text: "Thử đổi từ khóa khác hoặc chọn lại bộ lọc.",
      skills_title: "Kỹ năng kỹ thuật", timeline_title: "Hành trình",
      time_now: "2026 - Nay", time_before: "Trước 2023",
      timeline_1_title: "Định hướng Java Backend",
      timeline_1_text: "Tập trung vào Spring Boot, REST API, Spring Security và kiến trúc phân lớp; sẵn sàng tìm kiếm cơ hội Java Intern.",
      timeline_2_title: "Phát triển năng lực Java Web",
      timeline_2_text: "Thực hành Jakarta EE, Servlet, JSP, Hibernate và SQL Server qua các bài toán quản lý dữ liệu thực tế.",
      timeline_3_title: "Xây dựng nền tảng lập trình",
      timeline_3_text: "Học OOP, cấu trúc dữ liệu, cơ sở dữ liệu và phát triển giao diện web bằng HTML, CSS, JavaScript.",
      timeline_4_title: "Tốt nghiệp THPT",
      timeline_4_text: "THPT Trần Văn Thời — bước đầu xác định định hướng theo ngành công nghệ phần mềm.",
      study_title: "Tài liệu học tập", study_text: "Kho tài liệu mình tổng hợp trong quá trình học đại học",
      study_action: "Khám phá tài liệu", project_detail: "Xem chi tiết", project_count: "dự án",
      credentials_title: "Học vấn & Thành tích", education_label: "Học vấn", education_value: "Kỹ thuật Phần mềm — Đại học FPT", gpa_value: "GPA tích lũy: 3.1/4.0",
      cert_se: "Chuyên ngành Kỹ nghệ Phần mềm", cert_se_text: "UML, kiểm thử, design pattern và quản lý dự án.", cert_ux: "Nghiên cứu & Thiết kế UX", cert_ux_text: "Nghiên cứu, prototyping và kiểm thử khả dụng.", award_title: "Giải thưởng Sinh viên Giỏi", award_text: "Ghi nhận kết quả học tập tốt.",
      copied: "Đã sao chép! 📋", views: "👁️ Lượt xem:",
      footer: "© 2026 Nguyễn Tiến Thương. Được xây dựng bằng sự chỉn chu.",
      now_playing: "ĐANG PHÁT", featured: "Nổi bật", since: "TỪ 20/09/2023",
      clock_title: "Kỷ niệm đại học", clock_note: "20/09/2023 - ngày mình bước chân vào đại học, bắt đầu một hành trình mới với thật nhiều kỷ niệm.",
      milestone: "Cột mốc", first_day: "Ngày đầu vào đại học", started: "Bắt đầu",
      days_passed: "Số ngày đã qua", today_count: "Thời gian hôm nay", meaning: "Ý nghĩa", still_growing: "Vẫn đang trưởng thành"
    },
    en: {
      nav_home: "About", nav_projects: "Projects", nav_skills: "Skills",
      nav_timeline: "Journey", nav_study: "Resources", nav_blog: "Blog",
      profile_name: "Nguyen Tien Thuong",
      profile_role: "SOFTWARE ENGINEERING STUDENT",
      profile_bio: "I have a strong foundation in Spring Boot and focus on building secure, well-structured, reliable, and scalable Java backend applications.",
      target_label: "Target:", target_value: "Java Intern", location_label: "Location:",
      status_label: "Status:", status_value: "Open to Internship", english_label: "English:", english_value: "Good technical reading",
      case_problem: "Problem", case_role: "Role", case_features: "Key features", case_lesson: "Technical lesson",
      live_demo: "Live demo", source_code: "Source",
      case_study: "Case study",
      hero_title: "Java Backend Developer",
      hero_bio: "I'm Nguyen Tien Thuong, a Software Engineering student pursuing Backend Development.<br><br>I have a strong foundation in Spring Boot and hands-on experience with Spring Security, JPA, and SQL databases, with a focus on layered architecture, security, and maintainability.",
      view_projects: "View projects", view_cv: "View CV", contact: "Contact",
      projects_title: "Projects", project_search: "Search projects...", all: "All",
      project_empty_title: "No projects found", project_empty_text: "Try another keyword or select a different filter.",
      skills_title: "Technical Skills", timeline_title: "My Journey",
      time_now: "2026 - Present", time_before: "Before 2023",
      timeline_1_title: "Java Backend Career Focus",
      timeline_1_text: "Focusing on Spring Boot, REST APIs, Spring Security, and layered architecture while preparing for a Java Intern opportunity.",
      timeline_2_title: "Developed Java Web Skills",
      timeline_2_text: "Practiced Jakarta EE, Servlets, JSP, Hibernate, and SQL Server through practical data-management problems.",
      timeline_3_title: "Built Programming Foundations",
      timeline_3_text: "Studied OOP, data structures, databases, and web interface development with HTML, CSS, and JavaScript.",
      timeline_4_title: "High School Graduation",
      timeline_4_text: "Tran Van Thoi High School — began pursuing a career in software engineering.",
      study_title: "Study Resources", study_text: "A collection of learning materials curated throughout my university journey",
      study_action: "Explore resources", project_detail: "View details", project_count: "projects",
      credentials_title: "Education & Credentials", education_label: "Education", education_value: "Software Engineering — FPT University", gpa_value: "Cumulative GPA: 3.1/4.0",
      cert_se: "Software Engineering Specialization", cert_se_text: "UML, testing, design patterns, and project management.", cert_ux: "UX Research and Design", cert_ux_text: "Research, prototyping, and usability testing.", award_title: "Excellent Student Award", award_text: "Recognition for strong academic performance.",
      copied: "Copied! 📋", views: "👁️ Views:",
      footer: "© 2026 Nguyen Tien Thuong. Built with care.",
      now_playing: "NOW PLAYING", featured: "Featured", since: "SINCE 20/09/2023",
      clock_title: "University Memory", clock_note: "20/09/2023 - the day I started university and began a new journey filled with memories.",
      milestone: "Milestone", first_day: "First university day", started: "Started",
      days_passed: "Days passed", today_count: "Today count", meaning: "Meaning", still_growing: "Still growing"
    }
  };

  const savedLanguage = localStorage.getItem("portfolioLanguageV2");
  let language = savedLanguage === "vi" ? "vi" : "en";

  window.t = (key) => messages[language][key] || key;
  window.getPortfolioLanguage = () => language;

  function applyLanguage() {
    document.documentElement.lang = language;
    document.title = language === "vi"
      ? "Nguyễn Tiến Thương | Lập trình viên Backend Java"
      : "Nguyen Tien Thuong | Java Backend Developer";
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = window.t(element.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      element.innerHTML = window.t(element.dataset.i18nHtml);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      element.placeholder = window.t(element.dataset.i18nPlaceholder);
    });

    const toggle = document.getElementById("language-toggle");
    if (toggle) {
      toggle.innerHTML = language === "vi"
        ? '<span class="lang-active">VI</span><span>/</span><span>EN</span>'
        : '<span>VI</span><span>/</span><span class="lang-active">EN</span>';
      toggle.setAttribute("aria-label", language === "vi" ? "Switch to English" : "Chuyển sang tiếng Việt");
    }
  }

  applyLanguage();
  document.getElementById("language-toggle")?.addEventListener("click", () => {
      language = language === "vi" ? "en" : "vi";
      localStorage.setItem("portfolioLanguageV2", language);
      applyLanguage();
      document.dispatchEvent(new CustomEvent("languageChanged", { detail: { language } }));
  });
})();
