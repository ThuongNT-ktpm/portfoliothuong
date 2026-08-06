const cases = {
  library: {
    image: "image/project-library-management.jpg",
    source: "https://github.com/Thuong404-lab/Group_2_Library_Management_WEB",
    stack: "Java 21 · Spring Boot 3 · Spring Security 6 · SQL Server",
    en: {
      date: "June 2026",
      type: "JAVA BACKEND · TEAM PROJECT",
      title: "Library Management System",
      summary: "A secure web platform that digitizes core library operations for administrators, librarians, and members.",
      role: "Backend Developer — Security & Authentication",
      problem: "Manual library workflows make borrowing, reservations, member wallets, fines, and notifications difficult to manage consistently.",
      solution: "A layered Spring Boot application centralizes library operations and protects each workflow with authentication and role-based authorization.",
      features: ["RBAC for Admin, Librarian, and Member", "Secure authentication and endpoint protection", "Email OTP password recovery", "Borrowing, reservations, wallet, and notifications", "PDF reports and payment integration"],
      learning: "Applied Spring Security 6, JPA, layered architecture, DTOs, validation, exception handling, and third-party integrations in a large team codebase.",
      flow: ["Thymeleaf UI", "Controller", "Service", "Repository", "SQL Server"]
    },
    vi: {
      date: "Tháng 6/2026",
      type: "JAVA BACKEND · DỰ ÁN NHÓM",
      title: "Hệ thống quản lý thư viện",
      summary: "Nền tảng web bảo mật giúp số hóa hoạt động thư viện dành cho quản trị viên, thủ thư và thành viên.",
      role: "Lập trình viên Backend — Bảo mật và xác thực",
      problem: "Quy trình thủ công khiến việc mượn trả, đặt sách, quản lý ví, tiền phạt và thông báo khó được xử lý đồng nhất.",
      solution: "Ứng dụng Spring Boot theo kiến trúc phân lớp giúp tập trung hóa nghiệp vụ, đồng thời bảo vệ từng luồng bằng xác thực và phân quyền theo vai trò.",
      features: ["Phân quyền cho Quản trị viên, Thủ thư và Thành viên", "Xác thực và bảo vệ các endpoint", "Khôi phục mật khẩu bằng mã OTP qua email", "Quản lý mượn trả, đặt sách, ví và thông báo", "Xuất báo cáo PDF và tích hợp thanh toán"],
      learning: "Áp dụng Spring Security 6, JPA, kiến trúc phân lớp, DTO, kiểm tra dữ liệu, xử lý ngoại lệ và tích hợp dịch vụ bên thứ ba trong dự án nhóm quy mô lớn.",
      flow: ["Giao diện Thymeleaf", "Bộ điều khiển", "Lớp nghiệp vụ", "Lớp dữ liệu", "SQL Server"]
    }
  },
  tasks: {
    image: "image/project-tasks-manager.jpg",
    source: "https://github.com/Thuong404-lab/ProjectPRJ_TasksManager",
    stack: "Java 11 · Servlet/JSP · JDBC · SQL Server · Maven",
    en: {
      date: "March 2026",
      type: "JAVA WEB · PERSONAL PROJECT",
      title: "Task Management System",
      summary: "A Java web application for organizing tasks with secure access and clear priority workflows.",
      role: "Full-stack Developer",
      problem: "Users need a straightforward way to organize tasks while administrators require separate access and management capabilities.",
      solution: "An MVC-based Java web application separates request handling, business logic, and data access, while a custom filter secures role-specific routes.",
      features: ["Admin and User role-based access", "Custom Servlet authentication filter", "Password hashing", "Color-coded task priorities", "Persistent SQL Server storage"],
      learning: "Strengthened Servlet/JSP request flows, JDBC data access, session security, Maven builds, and MVC separation.",
      flow: ["JSP View", "Servlet", "Service", "DAO / JDBC", "SQL Server"]
    },
    vi: {
      date: "Tháng 3/2026",
      type: "JAVA WEB · DỰ ÁN CÁ NHÂN",
      title: "Hệ thống quản lý công việc",
      summary: "Ứng dụng Java Web giúp tổ chức công việc với quyền truy cập an toàn và quy trình ưu tiên rõ ràng.",
      role: "Lập trình viên Full-stack",
      problem: "Người dùng cần một cách quản lý công việc đơn giản, trong khi quản trị viên cần quyền truy cập và chức năng quản lý riêng.",
      solution: "Ứng dụng Java Web theo mô hình MVC tách biệt xử lý yêu cầu, nghiệp vụ và truy cập dữ liệu; bộ lọc tùy chỉnh bảo vệ các đường dẫn theo vai trò.",
      features: ["Phân quyền Quản trị viên và Người dùng", "Bộ lọc xác thực Servlet tùy chỉnh", "Mã hóa mật khẩu", "Phân loại mức ưu tiên bằng màu sắc", "Lưu trữ dữ liệu trên SQL Server"],
      learning: "Củng cố luồng xử lý Servlet/JSP, truy cập dữ liệu bằng JDBC, bảo mật phiên đăng nhập, quy trình build Maven và phân tách trách nhiệm theo MVC.",
      flow: ["Giao diện JSP", "Servlet", "Lớp nghiệp vụ", "DAO / JDBC", "SQL Server"]
    }
  }
};

let language = localStorage.getItem("portfolioLanguageV2") === "vi" ? "vi" : "en";
let darkMode = localStorage.getItem("darkMode") === "true";
const key = new URLSearchParams(location.search).get("project") === "tasks" ? "tasks" : "library";
const project = cases[key];
const $ = (id) => document.getElementById(id);

function render() {
  const data = project[language];
  const isVietnamese = language === "vi";

  document.documentElement.lang = language;
  document.title = `${data.title} | ${isVietnamese ? "Nghiên cứu dự án" : "Case Study"}`;
  $("caseType").textContent = data.type;
  $("caseTitle").textContent = data.title;
  $("caseSummary").textContent = data.summary;
  $("caseImage").src = project.image;
  $("caseImage").alt = data.title;
  $("sourceLink").href = project.source;
  $("sourceLink").innerHTML = `<i class="fab fa-github"></i> ${isVietnamese ? "Mã nguồn" : "GitHub"}`;
  $("caseRole").textContent = data.role;
  $("caseDate").textContent = data.date;
  $("caseStack").textContent = project.stack;
  $("caseProblem").textContent = data.problem;
  $("caseSolution").textContent = data.solution;
  $("caseLearning").textContent = data.learning;
  $("caseFeatures").innerHTML = data.features.map((feature) => `<li>${feature}</li>`).join("");
  $("architectureFlow").innerHTML = data.flow.map((item, index) => `${index ? '<i class="fas fa-arrow-right"></i>' : ""}<span>${item}</span>`).join("");

  $("backLabel").textContent = isVietnamese ? "Dự án" : "Projects";
  $("roleLabel").textContent = isVietnamese ? "Vai trò" : "Role";
  $("dateLabel").textContent = isVietnamese ? "Thời gian" : "Date";
  $("stackLabel").textContent = isVietnamese ? "Công nghệ chính" : "Core stack";
  $("problemTitle").textContent = isVietnamese ? "Bài toán" : "Problem";
  $("solutionTitle").textContent = isVietnamese ? "Giải pháp" : "Solution";
  $("featuresTitle").textContent = isVietnamese ? "Tính năng nổi bật" : "Key Features";
  $("learningTitle").textContent = isVietnamese ? "Bài học kỹ thuật" : "Technical Learning";
  $("architectureKicker").textContent = isVietnamese ? "KIẾN TRÚC" : "ARCHITECTURE";
  $("architectureTitle").textContent = isVietnamese ? "Cấu trúc hoạt động của hệ thống" : "How the system is structured";
  $("caseLanguage").innerHTML = isVietnamese ? "<strong>VI</strong> / <span>EN</span>" : "<span>VI</span> / <strong>EN</strong>";
  document.body.classList.toggle("light-mode", !darkMode);
  $("caseTheme").innerHTML = darkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  $("caseTheme").title = darkMode ? (isVietnamese ? "Giao diện sáng" : "Light theme") : (isVietnamese ? "Giao diện tối" : "Dark theme");
  $("caseTheme").setAttribute("aria-label", $("caseTheme").title);
}

$("caseLanguage").addEventListener("click", () => {
  language = language === "en" ? "vi" : "en";
  localStorage.setItem("portfolioLanguageV2", language);
  render();
});

$("caseTheme").addEventListener("click", () => {
  darkMode = !darkMode;
  localStorage.setItem("darkMode", String(darkMode));
  render();
});

render();
