const passwordBox = document.getElementById("password");
const length = 12;
const btn = document.querySelector(".btn");
const img = document.querySelector(".img");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "@#$%^&*()_+~|}{[]></-=";
const allChars = upperCase + lowerCase + number + symbols;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];
  //   let count = password.lenght;
  //   console.log(count);
  //   console.log(password);
  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}

btn.addEventListener("click", () => {
  createPassword();
  //   console.log("clicked");
});

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}

img.addEventListener("click", () => {
  copyPassword();
});
