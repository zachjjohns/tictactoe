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
  //check for wins
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
    for (var i = 0; i < this.winConditions; i++) {
      if (this.winConditions[i] === [this.player1.emoji, this.player1.emoji, this.player1.emoji]) {
        this.player1.wins++;
        this.gameWon = true;
      } else if (this.winConditions[i] === [this.player2.emoji, this.player2.emoji, this.player2.emoji]) {
        this.player2.wins++;
        this.gameWon = true;
      }
    }
      // PLACEHOLDER FOR TIME DELAY + GAME RESET - make function
  }



  checkForTie() {
    //ensure this.turns has an incrementer within helper function
      if (this.turns === 9) {
        this.tie = true;
      } 
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