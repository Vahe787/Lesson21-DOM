const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const start = document.querySelector(".start");
const stoping = document.querySelector(".stop");
const reset = document.querySelector(".reset");

let startInerval;

start.addEventListener("click", startTimer);
stoping.addEventListener("click", stopTimer);
reset.addEventListener("click", resetInterval);

function startTimer() {
  minute.setAttribute("readonly", "readonly");
  second.setAttribute("readonly", "readonly");
  startInerval = setInterval(function () {
    if (second.value === "" && minute.value === "") {
      return;
    }
    if (second.value <= 0 && minute.value >= 0) {
      second.value = 60;
      minute.value--;
    }
    if (minute.value < 0) {
      second.value = 1;
      minute.value = 0;
    }
    second.value--;
  }, 1000);
  start.removeEventListener("click", startTimer);
}

function stopTimer() {
  clearInterval(startInerval);
  start.addEventListener("click", startTimer);
}

function resetInterval() {
  clearInterval(startInerval);
  if (second.value !== "" || minute.value !== "") {
    second.value = 0;
    minute.value = 0;
  }
  minute.removeAttribute("readonly");
  second.removeAttribute("readonly");
  start.addEventListener("click", startTimer);
}
