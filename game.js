class Game {
  constructor() {
    this.player1 = new Player(1, "🦀");
    this.player2 = new Player(2, "👽");
    this.currentTurn = 1;
    this.gameWon = false;
    this.tie = false;
    this.turns = 0;
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
    // this.winConditions = [
    //                       [this.squares[0], this.squares[1], this.squares[2]],
    //                       [this.squares[3], this.squares[4], this.squares[5]],
    //                       [this.squares[6], this.squares[7], this.squares[8]],
    //                       [this.squares[0], this.squares[4], this.squares[8]],
    //                       [this.squares[2], this.squares[4], this.squares[6]],
    //                       [this.squares[0], this.squares[3], this.squares[6]],
    //                       [this.squares[1], this.squares[4], this.squares[7]],
    //                       [this.squares[2], this.squares[5], this.squares[8]]
    //                      ]
  }
  //click handler(main.js): first fill with appropriate player's emoji (unless already filled)
  //check for wins
  //ensure helper function is going through all checks
  ticTacToeTime(squareNum, squareVar) {
    if (!this.squares[squareNum]) {
      this.fillSquare(squareNum, squareVar);
      this.checkForWin();
      this.checkForTie();
      this.changeTurn();
    }
  }

  fillSquare(squareNum, squareVar) {
    if (this.currentTurn === 1) {
      this.squares[squareNum] = this.player1.emoji;
      squareVar.innerText = this.player1.emoji;
    } else {
      this.squares[squareNum] = this.player2.emoji;
      squareVar.innerText = this.player2.emoji;
    }
  }

  checkForWin() {
    var winConditions = [
      [this.squares[0], this.squares[1], this.squares[2]],
      [this.squares[3], this.squares[4], this.squares[5]],
      [this.squares[6], this.squares[7], this.squares[8]],
      [this.squares[0], this.squares[4], this.squares[8]],
      [this.squares[2], this.squares[4], this.squares[6]],
      [this.squares[0], this.squares[3], this.squares[6]],
      [this.squares[1], this.squares[4], this.squares[7]],
      [this.squares[2], this.squares[5], this.squares[8]]
    ];
    console.log(winConditions);
    for (var i = 0; i < winConditions.length; i++) {
      if (winConditions[i] === [this.player1.emoji, this.player1.emoji, this.player1.emoji]) {
        this.player1.wins++;
        this.gameWon = true;
        console.log("Player 1 wins!");
      } else if (winConditions[i] === [this.player2.emoji, this.player2.emoji, this.player2.emoji]) {
        this.player2.wins++;
        this.gameWon = true;
        console.log("Player 2 wins!");
      }
    }
  }
      // PLACEHOLDER FOR TIME DELAY + GAME RESET - make function
  


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