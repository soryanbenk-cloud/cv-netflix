window.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("video1");

  if (!video) return;

  video.muted = true;
  video.playsInline = true;

  let isPlaying = false;

  video.addEventListener("mouseover", () => {
    if (!isPlaying) {
      video.play()
        .then(() => isPlaying = true)
        .catch(err => console.log("Play bloqué :", err));
    }
  });

  video.addEventListener("mouseout", () => {
    video.pause();
    video.currentTime = 0;
    isPlaying = false;
  });
});
