/**
 * music.js
 * Trách nhiệm: Quản lý toàn bộ tính năng trình phát nhạc (Playlist, Controls).
 */

document.addEventListener("DOMContentLoaded", function () {
  const songs = [
    {
      title: "Nắng",
      artist: "MANBO x CHANEE ",
      src: "music/nang.mp3",
      cover: "image/avata.jpg",

    },
    {
      title: "Không Thời Gian",
      artist: "Dương Domic",
      src: "music/khongthoigian.mp3",
      cover: "image/avata.jpg",
    },
    {
      title: "Hẹn Nhau Dưới Ánh Trăng",
      artist: "HIEUTHUHAI, MANBO, HURRYKNG",
      src: "music/hennhauduoianhtrang.mp3",
      cover: "image/avata.jpg",
    },
    {
      title: "Bên Ấy Bên Này",
      artist: "Long Cao",
      src: "music/benaybennay.mp3",
      cover: "image/avata.jpg",
    },
  ];

  let songIdx = 0;
  const widget = document.getElementById("musicWidget");
  const audio = document.getElementById("audioPlayer");
  const playBtn = document.getElementById("playBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const titleEl = document.getElementById("trackTitle");
  const artistEl = document.getElementById("trackArtist");
  const coverEl = document.getElementById("trackCover");

  if (!widget || !audio) return;

  // Khởi tạo bài hát đầu tiên
  loadSong(songIdx);

  function loadSong(idx) {
    const song = songs[idx];
    if (titleEl) titleEl.textContent = song.title;
    if (artistEl) artistEl.textContent = song.artist;
    if (coverEl) coverEl.src = song.cover;
    audio.src = song.src;
  }

  function playSong() {
    audio.play().catch(error => {
      console.log("Trình duyệt chặn tự động phát nhạc hoặc lỗi: ", error);
    });
    widget.classList.add("playing");
  }

  function pauseSong() {
    audio.pause();
    widget.classList.remove("playing");
  }


  if (playBtn) {
    playBtn.addEventListener("click", () => {
      const isPlaying = widget.classList.contains("playing");
      if (isPlaying) pauseSong();
      else playSong();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      songIdx = (songIdx + 1) % songs.length;
      loadSong(songIdx);
      playSong();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      songIdx = (songIdx - 1 + songs.length) % songs.length;
      loadSong(songIdx);
      playSong();
    });
  }

  audio.addEventListener("ended", () => {
    songIdx = (songIdx + 1) % songs.length;
    loadSong(songIdx);
    playSong();
  });

  document.addEventListener('welcomeLetterClosed', () => {
    playSong();
  });
});
