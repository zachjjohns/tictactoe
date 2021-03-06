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

var game = new Game();

// window.addEventListener("onload", startGame);
window.addEventListener("click", clickHandler);


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
}
/* PSEUDOOOO
game class:
-add event listener for player click
-create ways to target specific squares
  -determine which square was clicked
-create function for event listener/click, update data model


-establish win conditions (8 possibilities, probably making a super-conditional)
-determine what should be instantiated within player vs game classes
-determine if using global variables is worth saying "fuggit" to getting a 4 in functionality
-create ways to target each square
-add our event listeners on click,
  -click function should add respective player's emoji to square
  -swap player on successful click
  -create placeholder for win-condition-checker
-create conditional for "if square has inner value, don't fill square on click"
  -ensure it also prevents player from swapping on bad clicks
-create event tracker within main.js to keep track of square clicks
*/