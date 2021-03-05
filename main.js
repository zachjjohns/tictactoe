var square0 = document.querySelector(".square0");
var square1 = document.querySelector(".square1");
var square2 = document.querySelector(".square2");
var square3 = document.querySelector(".square3");
var square4 = document.querySelector(".square4");
var square5 = document.querySelector(".square5");
var square6 = document.querySelector(".square6");
var square7 = document.querySelector(".square7");
var square8 = document.querySelector(".square8");

var newGame = new Game();
//event.target.id

window.addEventListener("click", clickHandler)

function clickHandler(event) {
  if (event.target.id === "square0") {
    
  }
  if (event.target.id === "square1") {

  }
  if (event.target.id === "square2") {

  }
  if (event.target.id === "square3") {

  }
  if (event.target.id === "square4") {

  }
  if (event.target.id === "square5") {

  }
  if (event.target.id === "square6") {

  }
  if (event.target.id === "square7") {

  }
  if (event.target.id === "square8") {

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