var square0 = document.querySelector("#square0");
var square1 = document.querySelector("#square1");
var square2 = document.querySelector("#square2");
var square3 = document.querySelector("#square3");
var square4 = document.querySelector("#square4");
var square5 = document.querySelector("#square5");
var square6 = document.querySelector("#square6");
var square7 = document.querySelector("#square7");
var square8 = document.querySelector("#square8");
var gameGrid = document.querySelector("#game-grid");
var player1Wins = document.querySelector("#player1Wins");
var player2Wins = document.querySelector("#player2Wins");
var currentTurn = document.querySelector("#currentTurn");

var game = new Game();

window.addEventListener("load", displayPlayerWins);
window.addEventListener("click", clickHandler);

function displayPlayerWins() {
  player1Wins.innerText = `${game.retrieveWinsFromPlayer(1)} wins`;
  player2Wins.innerText = `${game.retrieveWinsFromPlayer(2)} wins`;
}

function displayCurrentTurn(playerNum) {
  if (playerNum === 2 && game.gameWon) {
    currentTurn.innerText = `${game.player1.emoji} WINS!`;
  } else if (playerNum === 1 && game.gameWon) {
    currentTurn.innerText = `${game.player2.emoji} WINS!`;
  }
  if (playerNum === 1 && !game.gameWon) {
    currentTurn.innerText = `It's ${game.player1.emoji}'s turn`;
  } else if (playerNum === 2 && !game.gameWon) {
    currentTurn.innerHTML = `It's ${game.player2.emoji}'s turn`;
  }
  if (game.tie && !game.gameWon) {
    currentTurn.innerText = "IT'S A TIE!";
  }
}

function clickHandler(event) {
  if (event.target.id === "square0") {
    game.ticTacToeTime(0, square0);
  }
  if (event.target.id === "square1") {
    game.ticTacToeTime(1, square1);
  }
  if (event.target.id === "square2") {
    game.ticTacToeTime(2, square2);
  }
  if (event.target.id === "square3") {
    game.ticTacToeTime(3, square3);
  }
  if (event.target.id === "square4") {
    game.ticTacToeTime(4, square4);
  }
  if (event.target.id === "square5") {
    game.ticTacToeTime(5, square5);
  }
  if (event.target.id === "square6") {
    game.ticTacToeTime(6, square6);
  }
  if (event.target.id === "square7") {
    game.ticTacToeTime(7, square7);
  }
  if (event.target.id === "square8") {
    game.ticTacToeTime(8, square8);
  }
  checkForBoardWipe();
  displayPlayerWins();
  displayCurrentTurn(game.currentTurn);
}

function checkForBoardWipe() {
  if (game.tie === true || game.gameWon === true) {
    console.log("wiping board...");
    window.setTimeout(createNewGame, 2000)
  }
}

function createNewGame() {
  square0.innerText = "";
  square1.innerText = "";
  square2.innerText = "";
  square3.innerText = "";
  square4.innerText = "";
  square5.innerText = "";
  square6.innerText = "";
  square7.innerText = "";
  square8.innerText = "";
  game = new Game;
  displayCurrentTurn(game.currentTurn);
}
