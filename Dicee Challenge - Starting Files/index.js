var player1 = Math.floor(Math.random() * 6 + 1);
var player2 = Math.floor(Math.random() * 6 + 1);
var p1image = "images/dice" + player1 + ".png";
var p2image = "images/dice" + player2 + ".png";
document.querySelector(".img1").setAttribute("src", p1image);
document.querySelector(".img2").setAttribute("src", p2image);
if (player1 == player2) {
  document.querySelector("h1").innerText = "Draw!";
} else if (player1 > player2) {
  document.querySelector("h1").innerText = "🚩️ Player 1 Wins!";
} else {
  document.querySelector("h1").innerText = "Player 2 Wins! 🚩️";
}
