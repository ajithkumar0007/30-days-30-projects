let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let btn = document.querySelector(".btn");
function generateQR() {
  if (qrText.value.length >= 1) {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
    imgBox.classList.add("show-img");
  } else {
    //alert("Please enter text or URL");
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
}

btn.addEventListener("click", () => {
  generateQR();
  console.log("clicked");
  console.log(qrText.value.length);
});
