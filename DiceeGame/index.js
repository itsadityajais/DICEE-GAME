function refresh() {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomDiceImage = "assets/" + "dice" + randomNumber1 + ".png";
  let image1 = document
    .querySelectorAll("img")[0]
    .setAttribute("src", randomDiceImage);

  let randomNumber2 = Math.floor(Math.random() * 6) + 1;
  let randomDiceImage2 = "assets/" + "dice" + randomNumber2 + ".png";
  let image2 = document
    .querySelectorAll("img")[1]
    .setAttribute("src", randomDiceImage2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!🥳";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🥳Player 2 Wins!";
  } else {
    document.querySelector("h1").innerHTML = "Draw!😁";
  }
  // let btn = document.getElementsByClassName("button");
  // btn.addEventListner("click", function () {
  //   "h1" = Hello;
  //   document.getElementsByClassName("h1").textContent = newHeading;
  // });
}
