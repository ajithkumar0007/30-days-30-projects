const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");
const api_url = "https://api.quotable.io/random";
async function getquote(url) {
  const response = await fetch(url);
  var data = await response.json();
  //   console.log(data);
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}

getquote(api_url);

btn.addEventListener("click", () => {
  getquote(api_url);
  console.log("clicked");
});

btn2.addEventListener("click", () => {
  tweet();
});

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      "  ----by  " +
      author.innerHTML,
    "Tweet Window",
    "width=600, height=300"
  );
}
