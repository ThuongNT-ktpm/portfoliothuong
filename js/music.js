/**
 * music.js
 * Trach nhiem: Quan ly playlist va cac nut dieu khien trinh phat nhac.
 */

document.addEventListener("DOMContentLoaded", function () {
  const songs = window.APP_CONFIG?.playlist || [];

  let songIdx = 0;
  const widget = document.getElementById("musicWidget");
  const audio = document.getElementById("audioPlayer");
  const playBtn = document.getElementById("playBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const titleEl = document.getElementById("trackTitle");
  const artistEl = document.getElementById("trackArtist");
  const coverEl = document.getElementById("trackCover");

  if (!widget || !audio || songs.length === 0) return;

  function loadSong(idx) {
    const song = songs[idx];
    if (titleEl) titleEl.textContent = song.title;
    if (artistEl) artistEl.textContent = song.artist;
    if (coverEl) coverEl.src = song.cover;
    audio.src = song.src;
  }

  function playSong() {
    audio.play().catch((error) => {
      console.log("Trinh duyet chan tu dong phat nhac hoac loi: ", error);
    });
    widget.classList.add("playing");
  }

  function pauseSong() {
    audio.pause();
    widget.classList.remove("playing");
  }

  function nextSong() {
    songIdx = (songIdx + 1) % songs.length;
    loadSong(songIdx);
    playSong();
  }

  function prevSong() {
    songIdx = (songIdx - 1 + songs.length) % songs.length;
    loadSong(songIdx);
    playSong();
  }

  loadSong(songIdx);

  playBtn?.addEventListener("click", () => {
    const isPlaying = widget.classList.contains("playing");
    if (isPlaying) pauseSong();
    else playSong();
  });

  nextBtn?.addEventListener("click", nextSong);
  prevBtn?.addEventListener("click", prevSong);
  audio.addEventListener("ended", nextSong);

  document.addEventListener("welcomeLetterClosed", playSong);
});
