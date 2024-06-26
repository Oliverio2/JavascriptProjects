// const
let meme = document.getElementById("meme");
let title = document.getElementById("title");
let getMemeBtn = document.getElementById("get-meme-btn");

// API

let url = "https://meme-api.com/gimme/";
let subreddits = ["memes"];

// Function to get a meme

let getMeme = () => {
  let randomSubReddit =
    subreddits[Math.floor(Math.random() * subreddits.length)];

  fetch(url + randomSubReddit)
    .then((resp) => resp.json())
    .then((data) => {
      let memeImg = new Image();
      memeImg.onload = () => {
        meme.src = data.url;
        title.innerHTML = data.title;
      };
      memeImg.src = data.url;
    });
};

getMemeBtn.addEventListener("click", getMeme);
window.addEventListener("load", getMeme);
