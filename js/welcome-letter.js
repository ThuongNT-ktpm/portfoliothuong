
const QUOTES = [
  {
    icon: '🐟',
    quote: '"Mỗi ngày là một trang mới —\nhãy viết thật đẹp!"',
    sub: 'Đừng bao giờ so sánh hành trình của mình với người khác. Bạn đang đi con đường của riêng mình, và con đường đó luôn xứng đáng 💪',
    author: '— Gửi đến cậu, người đang ghé thăm trang này 🌟'
  },
  {
    icon: '🐸',
    quote: '"Sau tất cả,\n học được cách mỉm cười\ngay cả khi lòng mình không còn nguyên vẹn."',
    sub: 'Không phải vì đã quên, cũng chẳng hẳn là đã ổn. Chỉ là lớn rồi, người ta quen với việc mang một nỗi buồn đi qua rất nhiều ngày mà không cần ai biết.',
    author: '— Gửi đến cậu, người đang ghé thăm trang này 🌟'
  },
  {
    icon: '🐳',
    quote: '"Đêm nào cũng giống nhau,\ncho đến khi một bài hát làm lòng mình khác đi."',
    sub: 'Vẫn là khoảng trời ấy, vẫn là căn phòng ấy. Chỉ có một chút âm thanh cũ vô tình đi qua, đủ khiến chùng xuống cả một quãng dài.',
    author: '— Gửi đến cậu, người đang ghé thăm trang này 🌟'
  },
  {
    icon: '🐦',
    quote: '"Có những đoạn giai điệu,\nnghe một lần là nhớ một đời."',
    sub: 'Không phải vì nó hay đến mức nào, mà vì đúng lúc nó cất lên, có một khoảng trống vừa kịp mở ra.',
    author: '— Gửi đến cậu, người đang ghé thăm trang này 🌟'
  },
  {
    icon: '🪼',
    quote: '"Một bài hát kết thúc,\nnhưng dư âm thì ở lại rất lâu."',
    sub: 'Giống như có những chuyện đã qua từ lâu rồi, vậy mà chỉ cần một chút gợi nhắc rất khẽ thôi, lòng vẫn chưa thể xem như chưa từng có gì.',
    author: '— Gửi đến cậu, người đang ghé thăm trang này 🌟'
  },
  {
    icon: '🐓',
    quote: '"Mưa vẫn rơi qua ô cửa nhỏ,\nchỉ là người ngồi nghe mưa\nkhông còn như trước."',
    sub: 'Có những chiều rất giống ngày xưa, đến mức ngỡ chỉ cần quay đầu lại là mọi thứ sẽ còn nguyên. Nhưng hóa ra, thứ thay đổi đầu tiên lại chính là...',
    author: '— Gửi đến cậu, người đang ghé thăm trang này 🌟'
  },
  {
    icon: '🌧️',
    quote: '"Mọi thứ rồi cũng lặng,\nchỉ có ký ức là không."',
    sub: 'Có những điều tưởng đã ngủ yên theo năm tháng, vậy mà chỉ cần một giai điệu cũ vang lên, tất cả lại quay về nguyên vẹn như chưa từng rời khỏi.',
    author: '— Gửi đến cậu, người đang ghé thăm trang này 🌟'
  },
  {
    icon: '🐬',
    quote: '"Chiều hôm ấy chẳng có gì khác,\nchỉ là từ hôm ấy\n không còn như trước nữa."',
    sub: 'Thành phố vẫn đông, mưa vẫn đến rồi đi, chỉ có một người từ đó trở đi học cách im lặng nhiều hơn với chính nỗi buồn của mình.',
    author: '— Gửi đến cậu, người đang ghé thăm trang này 🌟'
  },
  {
    icon: '🦎',
    quote: '"Phía sau một người im lặng,\nthường là rất nhiều điều\nđã từng muốn nói."',
    sub: 'Không hỏi nữa, không phải vì không còn muốn biết, chỉ là có những câu trả lời nếu đến muộn rồi thì nghe xong cũng chỉ làm lòng nặng thêm.',
    author: '— Gửi đến cậu, người đang ghé thăm trang này 🌟'
  },
  {
    icon: '🐷',
    quote: '"Kẻ luôn làm hài lòng người khác, đôi khi lại quên mất chính bản thân mình."',
    sub: 'Cậu tự nhận mình là kẻ luôn làm hài lòng người khác, nhưng lại không nhớ lần cuối cậu chiều chuộng bản thân là khi nào. Tôi hy vọng cậu không quên rằng: chính cậu cũng xứng đáng nhận lại sự dịu dàng bấy lâu nay cậu luôn dành cho người khác. Hãy yêu thương bản thân mình nhiều hơn nhé!',
    author: '— Gửi đến cậu, người đang ghé thăm trang này 🌟'
  },
  {
    icon: '🐺',
    quote: '"Chính Cậu"',
    sub: 'Có lúc, tất cả những gì cậu cần chỉ là một người tin tưởng mình khi bị cả thế giới quay lưng. Chỉ bấy nhiêu đó cũng đủ để cậu vững vàng bước tiếp, ngay cả khi người duy nhất ấy là chính cậu.',
    author: '— Gửi đến cậu, người đang ghé thăm trang này 🌟'
  },
  {
    icon: '🐺',
    quote: '"Có lẽ"',
    sub: 'Có lẽ, mỗi người chúng ta điều là kẻ xấu trong chuyện của ai đó. Thế nên không cần phải bận tâm, cứ cố gắng sống tốt cho cuộc đời mình là được. Bởi vì chiếc áo đẹp nhất là chiếc áo mặc vừa vặn, cuộc đời đẹp nhất là cuộc đời sống vừa ý mình.',
    author: '— Gửi đến cậu, người đang ghé thăm trang này 🌟'
  },
  {
    icon: '🐯',
    quote: '"Một ngày bình thường để thương mình"',
    sub: 'Hãy dành một chút thời gian hôm nay để nhìn lại vị trí của mình và cả những nổ lực của bản thân để chạm đến hiện tại, dù là nơi này chưa phải đích đến cậu mơ ước, nhưng ít nhất cậu đã đi được một chặng đường dài, và đó là điều đáng tự hào.',
    author: '— Gửi đến cậu, người đang ghé thăm trang này 🌟'
  },
  {
    icon: '🐯',
    quote: '"Người bìn thường tập lớn"',
    sub: 'Mong cuộc sống ở thành phố không kéo bạn xa rời chính mình, không làm bạn lấm lem những chuyện buồn, không làm bạn kẹt cứng trong những suy nghĩ tiêu cực và không làm tâm hồn bạn trở nên vô cảm. Hãy luôn là chính mình, hãy luôn là chàng trai/cô gái mạnh mẽ, kiên cường và xinh đẹp nhé! ',
    author: '— Gửi đến cậu, người đang ghé thăm trang này 🌟'
  },
];

// --- FIREBASE CONFIGURATION ---
const firebaseConfig = {
  apiKey: "AIzaSyBGvORskaNnFlbaXrAo5EY0T2v1gbnA6ME",
  authDomain: "profilethw.firebaseapp.com",
  databaseURL: "https://profilethw-default-rtdb.firebaseio.com",
  projectId: "profilethw",
  storageBucket: "profilethw.firebasestorage.app",
  messagingSenderId: "388876970338",
  appId: "1:388876970338:web:a4116c6f375baa7471243b",
  measurementId: "G-E7H9F5VYJ9"
};

let database = null;
let currentQuoteIdx = 0;
let autoCloseTimer = null;

/**
 * Khởi tạo Firebase
 */
function initFirebase() {
  try {
    if (typeof firebase !== 'undefined' && firebaseConfig.apiKey) {
      firebase.initializeApp(firebaseConfig);
      database = firebase.database();
    }
  } catch (err) {
    console.error("Firebase Init Error:", err);
  }
}

/**
 * Hiệu ứng tim bay
 */
function createFloatingEmoji(btn, emoji) {
  const floating = document.createElement('span');
  floating.className = 'floating-reaction';
  floating.textContent = emoji;

  const rect = btn.getBoundingClientRect();
  const offset = (Math.random() - 0.5) * 40;
  floating.style.left = `calc(50% + ${offset}px)`;

  btn.appendChild(floating);
  setTimeout(() => floating.remove(), 1200);
}

/**
 * Đồng bộ data
 */
function syncReactions() {
  if (!database) return;
  const reactionsRef = database.ref('reactions');
  reactionsRef.on('value', (snapshot) => {
    const data = snapshot.val() || {};
    ['love', 'like', 'sparkles', 'fire'].forEach(type => {
      const el = document.getElementById(`count-${type}`);
      if (el) el.textContent = data[type] || 0;
    });
  });
}

/**
 * Kiểm tra trạng thái cá nhân từ LocalStorage
 */
function checkLocalReactions() {
  const localData = JSON.parse(localStorage.getItem('my_reactions') || '{}');
  document.querySelectorAll('.reaction-btn').forEach(btn => {
    const type = btn.getAttribute('data-type');
    if (localData[type]) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function handleReactionClick(btn) {
  const type = btn.getAttribute('data-type');
  const emoji = btn.querySelector('.reaction-icon').textContent;
  const localData = JSON.parse(localStorage.getItem('my_reactions') || '{}');
  const isAlreadyActive = btn.classList.contains('active');

  if (!isAlreadyActive) {
    // --- TRƯỜNG HỢP: THẢ TIM MỚI ---
    btn.classList.add('active');
    localData[type] = true;
    localStorage.setItem('my_reactions', JSON.stringify(localData));

    // 1. Hiệu ứng bay
    createFloatingEmoji(btn, emoji);

    // 2. Tăng số hiển thị ngay lập tức
    const el = document.getElementById(`count-${type}`);
    if (el) el.textContent = (parseInt(el.textContent) || 0) + 1;

    // 3. Gửi lên Firebase
    if (database) {
      database.ref(`reactions/${type}`).transaction(c => (c || 0) + 1);
    }

    // 4. Gửi Telegram
    if (typeof sendTelegramNotification === 'function') {
      sendTelegramNotification(`💌 Ai đó vừa thả ${emoji} cho lá thư của bạn!`);
    }
  } else {
    // --- TRƯỜNG HỢP: RÚT LẠI (UNLIKE) ---
    btn.classList.remove('active');
    delete localData[type];
    localStorage.setItem('my_reactions', JSON.stringify(localData));

    // 1. Giảm số hiển thị ngay lập tức
    const el = document.getElementById(`count-${type}`);
    if (el) {
      const current = parseInt(el.textContent) || 0;
      el.textContent = Math.max(0, current - 1);
    }

    // 2. Giảm trên Firebase
    if (database) {
      database.ref(`reactions/${type}`).transaction(c => Math.max(0, (c || 0) - 1));
    }
    
    // Lưu ý: Không gửi Telegram khi rút lại để tránh phiền cho chủ web
  }
}

function renderQuote(idx) {
  const q = QUOTES[idx];
  if (!q) return;

  const icon = document.getElementById('letterIcon');
  const title = document.getElementById('letter-title');
  const sub = document.getElementById('letterSub');
  const author = document.getElementById('letterAuthor');

  if (icon) icon.textContent = q.icon;
  if (title) title.textContent = q.quote;
  if (sub) sub.textContent = q.sub;
  if (author) author.textContent = q.author;

  const bar = document.getElementById('letterProgressBar');
  if (bar) {
    bar.style.animation = 'none';
    bar.offsetHeight;
    bar.style.animation = 'shrinkBar 30s linear forwards';
  }
}

function closeWelcomeLetter() {
  const overlay = document.getElementById('welcome-overlay');
  if (overlay) {
    overlay.classList.add('hidden');
    setTimeout(() => overlay.remove(), 700);
  }
  clearTimeout(autoCloseTimer);
  document.dispatchEvent(new CustomEvent('welcomeLetterClosed'));
}

function nextWelcomeQuote() {
  currentQuoteIdx = (currentQuoteIdx + 1) % QUOTES.length;
  renderQuote(currentQuoteIdx);
  clearTimeout(autoCloseTimer);
  autoCloseTimer = setTimeout(closeWelcomeLetter, 30000);
}

window.addEventListener('load', function () {
  const overlay = document.getElementById('welcome-overlay');
  if (!overlay) return;

  initFirebase();
  syncReactions();
  checkLocalReactions();

  currentQuoteIdx = Math.floor(Math.random() * QUOTES.length);
  renderQuote(currentQuoteIdx);

  document.querySelectorAll('.reaction-btn').forEach(btn => {
    btn.addEventListener('click', () => handleReactionClick(btn));
  });

  autoCloseTimer = setTimeout(closeWelcomeLetter, 30000);

  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeWelcomeLetter(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeWelcomeLetter(); });
});
