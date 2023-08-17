const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
// const success = document.querySelector(".fa-solid fa-circle-check");
// const error = document.querySelector(".fa-solid fa-circle-xmark");
// const invalid = document.querySelector(".fa-solid fa-circle-exclamation");

// console.log(success);

btn1.addEventListener("click", () => {
  showToast(successMsg);
});

btn2.addEventListener("click", () => {
  showToast(errorMsg);
});

btn3.addEventListener("click", () => {
  showToast(invalidMsg);
});
let toastBox = document.getElementById("toastBox");
let successMsg = "Successfully submitted";
let errorMsg = "Please fix the error";
let invalidMsg = "Invalid Input, Check again";

function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  if (msg.includes("error")) {
    toast.classList.add("error");
  }

  if (msg.includes("Invalid")) {
    toast.classList.add("Invalid");
  }
  setTimeout(() => {
    toast.remove();
  }, 6000);
}
