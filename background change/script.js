var ImgBox = document.querySelector(".img-box");
var ImgWrap = document.querySelector(".img-wrap");
var leftSpace = ImgBox.offsetLeft;
var originalImg = document.getElementById("originalImg");
var line = document.getElementById("line");

originalImg.style.width = ImgBox.offsetWidth + "px";
ImgBox.onmousemove = function (e) {
  // prettier-ignore
  var boxWidth = (e.pageX - leftSpace) + "px";
  ImgWrap.style.width = boxWidth;
  line.style.left = boxWidth;
  //   console.log(boxWidth);
};
