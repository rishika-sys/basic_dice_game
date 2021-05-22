var imgArr = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];

var image1 = document.querySelectorAll("img")[0];
var ranImg1 = Math.floor(Math.random() * imgArr.length);
image1.setAttribute("src", imgArr[ranImg1]);

var image2 = document.querySelectorAll("img")[1];
var ranImg2 = Math.floor(Math.random() * imgArr.length);
image2.setAttribute("src", imgArr[ranImg2]);

if (ranImg1 > ranImg2) {
  document.querySelector("h1").innerHTML = "⛳ Player 1 won!";
} else if (ranImg2 > ranImg1) {
  document.querySelector("h1").innerHTML = "Player 2 won! ⛳";
} else if (ranImg1 == ranImg2) {
  document.querySelector("h1").innerHTML = "Draw!";
}
