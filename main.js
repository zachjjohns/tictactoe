var allSquares = document.querySelectorAll(".square");
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
  if (!game.gameWon && !game.tie) {
    game.ticTacToeTime(event.target.id, event.target);
    updateBoard();
  }
  checkForBoardWipe();
  displayPlayerWins();
  displayCurrentTurn(game.currentTurn);
}

function updateBoard() {
  for (var i = 0; i < allSquares.length; i++) {
    allSquares[i].innerText = game.squares[i];
  }
}

function checkForBoardWipe() {
  if (game.tie || game.gameWon) {
    window.setTimeout(createNewGame, 2000);
  }
}

function createNewGame() {
  game.resetGame();
  updateBoard();
  displayCurrentTurn(game.currentTurn);
}
