let inp = document.querySelector("#text");

inp.onkeyup = function () {
  document.querySelector("#underText").innerHTML = inp.value;
};
