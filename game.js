class Game {
  constructor() {
    this.player1 = new Player(1, "🦀");
    this.player2 = new Player(2, "👽");
    this.currentTurn = 1;
    this.gameWon = false;
    this.tie = false;
    this.turns = 0;
    this.winConditions = [
                          [0, 1, 2],
                          [3, 4, 5],
                          [6, 7, 8],
                          [0, 4, 8],
                          [2, 4, 6],
                          [0, 3, 6],
                          [1, 4, 7],
                          [2, 5, 8]
                         ]
    //player wins more appropriate within game class or player class?
    this.squares = [
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    ""
                   ];
  }

  //click handler(main.js): first fill with appropriate player's emoji (unless already filled)
  //
  //fire this function on click to check for wins
  //ensure helper function is going through all checks
  checkSquare(squareNum) {
    if (!this.squares[squareNum]) {
      this.fillSquare(squareNum);
    }
  }

  fillSquare(squareNum) {
    if (this.currentTurn === 1) {
      this.squares[squareNum] = this.player1.emoji
    } else {
      this.squares[squareNum] = this.player2.emoji
    }
  }

  checkForWin() {
    //loop through squares + check against winning arrays
    if (PLACEHOLDER FOR WIN CONDITION) {
      this.gameWon = true;
      // PLACEHOLDER FOR ADDING WIN TO CORRECT PLAYER - make function
      // PLACEHOLDER FOR TIME DELAY + GAME RESET - make function
    }
  }



  checkForTie() {

  }

  changeTurn() {
    if (this.currentTurn === 1) {
      this.currentTurn = 2
    }
    else {
      this.currentTurn = 1
    }
  }

}

//game.js = DATA MODEL
//main.js accesses game/player.js
//have a method that updates a game board (what is my gameboard? how would I update? yadda yadda)
//