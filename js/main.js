var progress = document.getElementById("progress");
var song = document.getElementById("song");
var controlIcon = document.getElementById("controlIcon");
var lessIcon = document.getElementById("lessIcon");
var moreIcon = document.getElementById("moreIcon");
var intervalId;

song.onloadeddata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

function updateProgress() {
  progress.value = song.currentTime;
}

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
};

function playPause() {
  if (controlIcon.classList.contains("fa-pause")) {
    song.pause();
    controlIcon.classList.remove("fa-pause");
    controlIcon.classList.add("fa-play");
  } else {
    song.play();
    controlIcon.classList.add("fa-pause");
    controlIcon.classList.remove("fa-play");
  }
}

function less() {
  if (song.currentTime >= 2) {
    song.currentTime -= 2;
    progress.value = song.currentTime;
  }
}

function more() {
  if (song.currentTime + 2 <= song.duration) {
    song.currentTime += 2;
    progress.value = song.currentTime;
  }
}

song.addEventListener("play", function () {
  intervalId = setInterval(updateProgress, 500);
});

song.addEventListener("pause", function () {
  clearInterval(intervalId);
});
