const nameInp = document.querySelector("#name");
const surnameInp = document.querySelector("#surname");
const emailInp = document.querySelector("#email");
const pswInp = document.querySelector("#psw");
const nameError = document.querySelector(".nameError");
const surnameError = document.querySelector(".surnameError");
const emailError = document.querySelector(".emailError");
const pswError = document.querySelector(".pswError");
const submit = document.querySelector(".registerbtn");
let emailRegVal =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+(ru|com)))$/;
nameInp.addEventListener("input", nameValidation);
surnameInp.addEventListener("input", surnameValidation);
emailInp.addEventListener("input", emailValidation);
pswInp.addEventListener("input", pswValidation);
submit.addEventListener("click", finishValid);

function nameValidation() {
  if (nameInp.value.length < 4) {
    nameError.textContent = "The length of the name must be 4 or more";
  } else {
    nameError.textContent = "";
  }
}

function surnameValidation() {
  if (surnameInp.value.length < 6) {
    surnameError.textContent = "The length of the name must be 6 or more";
  } else {
    surnameError.textContent = "";
  }
}

function emailValidation() {
  if (emailInp.value.match(emailRegVal)) {
    emailError.textContent = "";
  } else {
    emailError.textContent = "Invalid Email";
  }
}

function pswValidation() {
  if (pswInp.value.length < 8) {
    pswError.textContent = "The length of the password must be 8 or more";
  } else {
    pswError.textContent = "";
  }
}

function finishValid() {
  nameValidation();
  surnameValidation();
  emailValidation();
  pswValidation();
  if (
    nameError.textContent === "" &&
    surnameError.textContent === "" &&
    emailError.textContent === "" &&
    pswError.textContent === ""
  ) {
    let user = [
      { name: nameInp.value },
      { surname: surnameInp.value },
      { email: emailInp.value },
    ];
    let data = JSON.stringify(user);
    alert(data);
  }
}
