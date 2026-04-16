
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
  }
];

let currentQuoteIdx = 0;
let autoCloseTimer = null;

function renderQuote(idx) {
  const q = QUOTES[idx];
  document.getElementById('letterIcon').textContent = q.icon;
  document.getElementById('letter-title').textContent = q.quote;
  document.getElementById('letterSub').textContent = q.sub;
  document.getElementById('letterAuthor').textContent = q.author;


  const bar = document.getElementById('letterProgressBar');
  if (bar) {
    bar.style.animation = 'none';
    bar.offsetHeight;
    bar.style.animation = 'shrinkBar 30s linear forwards';
  }
}

function closeWelcomeLetter() {
  const overlay = document.getElementById('welcome-overlay');
  const hearts = document.getElementById('letterHearts');
  if (overlay) {
    overlay.classList.add('hidden');
    setTimeout(() => {
      if (hearts) hearts.remove();
      overlay.remove();
    }, 700);
  }
  clearTimeout(autoCloseTimer);
  // Thông báo rằng lá thư đã đóng để các module khác (như nhạc) có thể phản hồi
  document.dispatchEvent(new CustomEvent('welcomeLetterClosed'));
}

function nextWelcomeQuote() {
  currentQuoteIdx = (currentQuoteIdx + 1) % QUOTES.length;
  renderQuote(currentQuoteIdx);
  clearTimeout(autoCloseTimer);
  autoCloseTimer = setTimeout(closeWelcomeLetter, 30000);
}


window.addEventListener('load', function () {
  // Don't show on mobile devices (smaller than 768px)
  if (window.innerWidth <= 768) return;

  const overlay = document.getElementById('welcome-overlay');
  if (!overlay) return;


  currentQuoteIdx = Math.floor(Math.random() * QUOTES.length);
  renderQuote(currentQuoteIdx);

  // Auto-close after 30 s
  autoCloseTimer = setTimeout(closeWelcomeLetter, 30000);


  overlay.addEventListener('click', function (e) {
    if (e.target === this) closeWelcomeLetter();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeWelcomeLetter();
  });
});
