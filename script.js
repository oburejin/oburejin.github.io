function buttonClickSad() {
  planeVideo.classList.add('isVisible');
  wineVideo.classList.remove('isVisible');
  planeVideo.seek = 0;
  wineVideo.pause();
  planeVideo.play();
}

function buttonClickVerySad() {
  planeVideo.classList.remove('isVisible');
  wineVideo.classList.add('isVisible');
  wineVideo.seek = 0;
  planeVideo.pause();
  wineVideo.play();
}