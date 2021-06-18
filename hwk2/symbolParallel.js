let inp = document.querySelector("#text");
let date = document.querySelector("#underText");

inp.addEventListener("keyup", underText);

function underText() {
  date.textContent = inp.value;
}
