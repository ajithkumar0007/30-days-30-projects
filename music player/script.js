let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
  console.log(song.duration);
};

ctrlIcon.addEventListener("click", () => {
  playpause();
  console.log("clicked");
});

function playpause() {
  ctrlIcon.classList.contains("fa-pause") ? song.pause() : song.play();
  ctrlIcon.classList.toggle("fa-pause");
  ctrlIcon.classList.toggle("fa-play");
}

if (song.play) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  ctrlIcon.classList.add("fa-pause");
  ctrlIcon.classList.remove("fa-play");
};
