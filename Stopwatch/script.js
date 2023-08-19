let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("displayTime");
let timer = null;
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");
function stopwatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 0) {
      minutes = 0;
      hours++;
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  displayTime.innerHTML = h + ":" + m + ":" + s;
}

function watchStart() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopwatch, 1000);
}

start.addEventListener("click", () => {
  watchStart();
  console.log("clicked");
});

function watchStop() {
  clearInterval(timer);
}

function watchReset() {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  displayTime.innerHTML = "00:00:00";
}

stop.addEventListener("click", () => {
  watchStop();
  console.log("clicked");
});

reset.addEventListener("click", () => {
  watchReset();
  console.log("clicked");
});
