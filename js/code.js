(function () {
  if (!("ontouchstart" in globalThis)) return;

  const skills = document.querySelectorAll(".skill-item[data-tip]");
  let current = null;

  skills.forEach((item) => {
    item.addEventListener(
      "touchstart",
      (e) => {
        e.preventDefault();
        if (current && current !== item) current.classList.remove("tip-active");
        item.classList.toggle("tip-active");
        current = item.classList.contains("tip-active") ? item : null;
      },
      { passive: false },
    );
  });

  document.addEventListener("touchstart", (e) => {
    if (current && !current.contains(e.target)) {
      current.classList.remove("tip-active");
      current = null;
    }
  });
})();

(function () {
  const bar = document.getElementById("reading-progress");
  if (!bar) return;
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (docHeight > 0 ? (scrollTop / docHeight) * 100 : 0) + "%";
  });
})();

(function () {
  const sections = document.querySelectorAll("section[id], footer[id]");
  const navLinks = document.querySelectorAll(".navbar a");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.remove("active"));
          const active = document.querySelector(
            `.navbar a[href="#${entry.target.id}"]`,
          );
          if (active) active.classList.add("active");
        }
      });
    },
    { threshold: 0.35 },
  );

  sections.forEach((sec) => observer.observe(sec));
})();

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

(function () {
  if (sessionStorage.getItem("confetti_done")) return;
  sessionStorage.setItem("confetti_done", "1");

  window.addEventListener("load", () => {
    if (typeof confetti !== "function") return;
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.5 } });
  });
})();

(function () {
  const toggle = document.getElementById("theme-toggle");
  const saved = localStorage.getItem("darkMode");
  if (saved === "true") document.body.classList.add("dark-mode");

  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      localStorage.setItem(
        "darkMode",
        document.body.classList.contains("dark-mode"),
      );
    });
  }
})();

(function () {
  const btn = document.getElementById("scroll-top");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 300);
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();

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

(function () {
  const copyBtn = document.getElementById("copyEmailBtn");
  if (!copyBtn) return;

  const EMAIL = "thuongnt.ktpm@gmail.com";

  copyBtn.addEventListener("click", () => {
    navigator.clipboard
      .writeText(EMAIL)
      .then(() => {
        copyBtn.classList.add("copied");
        setTimeout(() => copyBtn.classList.remove("copied"), 2000);
      })
      .catch(() => {
        const el = document.createElement("textarea");
        el.value = EMAIL;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        el.remove();
        copyBtn.classList.add("copied");
        setTimeout(() => copyBtn.classList.remove("copied"), 2000);
      });
  });
})();

document.addEventListener("DOMContentLoaded", function () {
  /*
  const themes = [
    // "css/cute.css",
    "css/styles.css"
    // "css/style-wibu.css",
    // "css/pixel.css",
  ];

  // 2. Lấy các phần tử cần thiết
  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeLink = document.getElementById("theme-link");
  const icon = themeToggleBtn.querySelector("i");

  let currentThemeIndex = localStorage.getItem("savedThemeIndex")
    ? parseInt(localStorage.getItem("savedThemeIndex"))
    : 1;

  function applyTheme(index) {
    themeLink.href = themes[index];

    if (index === 0) {
      // Mặc định
      icon.className = "fas fa-moon";
    } else if (index === 1) {
      // Wibu
      icon.className = "fas fa-robot";
    } else if (index === 2) {
      // Retro
      icon.className = "fas fa-newspaper";
    } else if (index === 3) {
      // Cute
      icon.className = "fas fa-heart";
    }

    localStorage.setItem("savedThemeIndex", index);
  }

  applyTheme(currentThemeIndex);

  themeToggleBtn.addEventListener("click", function () {
    currentThemeIndex++;

    if (currentThemeIndex >= themes.length) {
      currentThemeIndex = 0;
    }

    applyTheme(currentThemeIndex);
  });
  */

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
      }),
    );
  }

  window.onscroll = () => {
    if (menuIcon && navbar) {
      menuIcon.classList.remove("fa-times");
      navbar.classList.remove("active");
    }
  };
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.1 },
);

document
  .querySelectorAll(".animate-scroll")
  .forEach((el) => observer.observe(el));

window.onload = function () {
  document.querySelectorAll(".animate-scroll").forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.classList.add("active");
    }
  });
};

document.addEventListener("contextmenu", (event) => event.preventDefault());

document.onkeydown = function (e) {
  if (
    e.keyCode == 123 ||
    (e.ctrlKey &&
      e.shiftKey &&
      (e.keyCode == "I".charCodeAt(0) || e.keyCode == "J".charCodeAt(0))) ||
    (e.ctrlKey && e.keyCode == "U".charCodeAt(0))
  ) {
    return false;
  }
};

// Telegram notification
const TELEGRAM_BOT_TOKEN = "8632589547:AAGQjBlLd906MzjBsr8ToOTXp-J_1VoPqGU";
const TELEGRAM_CHAT_ID = "6149032213";

function sendTelegramNotification() {
  const message = "Có ai đó vào link web bạn";
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.ok) {
        console.log("Notification sent");
      } else {
        console.error("Failed to send notification:", data);
      }
    })
    .catch((error) => {
      console.error("Error sending notification:", error);
    });
}

// Send notification on page load (test)
window.addEventListener("load", () => {
  const message = "Có ngươi vào web của bạn";
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${encodeURIComponent(message)}`;
  console.log("Testing Telegram on load...");
  fetch(url)
    .then((response) => {
      if (response.ok) {
        console.log("Test notification sent.");
      } else {
        console.error("Test failed:", response.status);
      }
    })
    .catch((err) => console.error("Test error:", err));
});

document.addEventListener("DOMContentLoaded", function () {
  const widget = document.getElementById("musicWidget");
  const playBtn = document.getElementById("playBtn");
  const audio = document.getElementById("audioPlayer");

  if (playBtn && audio) {
    playBtn.addEventListener("click", () => {
      if (audio.paused) {
        audio.play();
        widget.classList.add("playing");
      } else {
        audio.pause();
        widget.classList.remove("playing");
      }
    });

    audio.addEventListener("ended", () => {
      widget.classList.remove("playing");
    });
  }
});

function sendLocationToTelegram(lat, lng, info = "") {
  // Chỉ gửi 1 lần per session để tránh spam
  if (sessionStorage.getItem("telegramNotificationSent")) {
    console.log("Notification already sent in this session.");
    return;
  }

  const mapLink = `https://www.google.com/maps?q=${lat},${lng}`;
  const message = `🚨 CÓ NGƯỜI ĐANG XEM DỰ ÁN CỦA BẠN!\n📍 Vị trí: ${mapLink}${info}`;
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${encodeURIComponent(message)}`;

  console.log("Sending Telegram notification...");
  fetch(url)
    .then((response) => {
      if (response.ok) {
        console.log("Notification sent successfully.");
        sessionStorage.setItem("telegramNotificationSent", "true");
      } else {
        console.error("Failed to send notification:", response.status);
      }
    })
    .catch((err) => console.error("Lỗi gửi Telegram:", err));
}

document.querySelectorAll(".project-btn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const targetUrl = this.getAttribute("href");
    const targetWindow = this.getAttribute("target") || "_self";

    window.open(targetUrl, targetWindow);

    // Hàm dự phòng: lấy vị trí qua IP nếu không lấy được GPS
    const fallbackToIP = () => {
      fetch("https://get.geojs.io/v1/ip/geo.json")
        .then((res) => res.json())
        .then((data) => {
          const info = `\n🌎 Vùng (Lấy theo IP): ${data.city || "Không rõ"}, ${data.region || "Không rõ"}, ${data.country || "Không rõ"}\n🌐 IP: ${data.ip}\n🔗 Project: ${targetUrl}`;
          sendLocationToTelegram(data.latitude || 0, data.longitude || 0, info);
        })
        .catch((err) => console.error("Lỗi lấy vị trí IP:", err));
    };

    // Ưu tiên xin quyền GPS trước để có độ chính xác cao nhất
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const info = `\n🎯 Vị trí chính xác (Lấy theo GPS)\n🔗 Project: ${targetUrl}`;
          sendLocationToTelegram(
            position.coords.latitude,
            position.coords.longitude,
            info,
          );
        },
        (error) => {
          console.log(
            "Khách từ chối GPS hoặc lỗi timeout, chuyển sang dò bằng IP...",
            error.message,
          );
          fallbackToIP();
        },
        {
          timeout: 8000,
          maximumAge: 60000,
          enableHighAccuracy: true,
        },
      );
    } else {
      fallbackToIP();
    }
  });
});
