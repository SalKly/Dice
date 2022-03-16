function letsplay() {
  var i = Math.floor(Math.random() * (7 - 1) + 1);
  var y = Math.floor(Math.random() * (7 - 1) + 1);
  var imgl = "images/dice" + i + ".png";
  var imgr = "images/dice" + y + ".png";

  document.querySelector(".img1").src = imgl;
  document.querySelector(".img2").src = imgr;

  if (i > y) {
    document.querySelector(".container h1").textContent = "Player 1 Wins!";
  } else {
    if (y > i) {
      document.querySelector(".container h1").textContent = "Player 2 Wins!";
    } else {
      document.querySelector(".container h1").textContent = "DRAW!";
    }
  }
}
