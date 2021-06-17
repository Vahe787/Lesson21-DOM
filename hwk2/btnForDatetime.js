const button = document.querySelector(".date-btn");
const date = document.querySelector(".date");

button.addEventListener("click", updateButton);

function updateButton() {
  date.textContent = new Date();
}
