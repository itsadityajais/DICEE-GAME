let programmingLanguages = [
  "python",
  "javascript",
  "mongodb",
  "json",
  "java",
  "html",
  "css",
  "c",
  "csharp",
  "golang",
  "kotlin",
  "php",
  "sql",
  "ruby",
];
let mistakes = 0;
let maxWrong = 6;
let answer = "";
let guessed = [];
let wordStatus = null;

function randomWord() {
  answer =
    programmingLanguages[
      Math.floor(Math.random() * programmingLanguages.length)
    ];
  // alert(answer);
}
document.getElementById("maxWrong").innerHTML = maxWrong;

function guessedWord() {
  wordStatus = answer
    .split("")
    .map((letter) => (guessed.indexOf(letter) >= 0 ? letter : " _ "))
    .join("");

  document.getElementById("spotlight").innerHTML = wordStatus;
}

function generateButtons() {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let buttonArray = alphabet.map((letter) => {
    return (
      `
    <button
      class="btn "
      id='` +
      letter +
      `'
      onClick="handleGuess('` +
      letter +
      `')"
    >
      ` +
      letter +
      `
    </button>
  `
    );
  });
  let buttonHTML = buttonArray.join("");
  document.getElementById("keyboardButton").innerHTML = buttonHTML;
}
function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute("disabled", true);

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    mistakes++;
    updateMistakes();
    checkIfGameLost();
    updateHangmanPicture();
  }
}

function updateHangmanPicture() {
  document.getElementById("pic").src = "assets/" + mistakes + ".jpg";
}

function updateMistakes() {
  document.getElementById("mistakes").innerHTML = mistakes;
}
document.getElementById("maxWrong").innerHTML = maxWrong;

function checkIfGameWon() {
  if (wordStatus === answer) {
    document.getElementById("keyboardButton").innerHTML = "You Won!!!";
  }
}

function checkIfGameLost() {
  if (mistakes === maxWrong) {
    document.getElementById("spotlight").innerHTML =
      "The answer was : " + answer;
    document.getElementById("keyboardButton").innerHTML = " You Lost!!! ";
  }
}
function reset() {
  mistakes = 0;
  guessed = [];
  document.getElementById("pic").src = "assets/0.jpg";

  randomWord();
  guessedWord();
  updateMistakes();
  generateButtons();
}
randomWord();
guessedWord();
generateButtons();
updateMistakes();
