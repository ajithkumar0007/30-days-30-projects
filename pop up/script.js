const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");

let popUp = document.getElementById("popup");

btn.addEventListener("click", () => {
  openPopUp();
  console.log("opened");
});

btn2.addEventListener("click", () => {
  closePopUp();
  console.log("Closed");
});

function openPopUp() {
  popUp.classList.add("open-popup");
}

function closePopUp() {
  popUp.classList.remove("open-popup");
}
