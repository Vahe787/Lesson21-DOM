const hours = document.querySelector(".hours");
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
  hours.setAttribute("readonly", "readonly");
  minute.setAttribute("readonly", "readonly");
  second.setAttribute("readonly", "readonly");
  startInerval = setInterval(function () {
    if (second.value === "" && minute.value === "" && hours.value === "") {
      return;
    }
    if (second.value <= 1 && minute.value >= 0) {
      second.value = 60;
      minute.value--;
    }
    if (minute.value < 0) {
      second.value = 1;
      minute.value = 0;
    }
    if (minute.value <= 1 && hours.value > 0) {
      minute.value = 59;
      second.value = 60;
      hours.value--;
    }
    if (minute.value < 1) {
      hours.value = 0;
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
  second.value = 0;
  minute.value = 0;
  hours.value = 0;
  hours.removeAttribute("readonly");
  start.addEventListener("click", startTimer);
}
