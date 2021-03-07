class Game {
  constructor() {
    this.player1 = new Player(1, "🦀");
    this.player2 = new Player(2, "👽");
    this.currentTurn = 1;
    this.gameWon = false;
    this.tie = false;
    this.turns = 0;
    this.squares = ["", "", "", "", "", "", "", "", ""];
    this.winCon1 = "";
    this.winCon2 = "";
    this.winCon3 = "";
    this.winCon4 = "";
    this.winCon5 = "";
    this.winCon6 = "";
    this.winCon7 = "";
    this.winCon8 = "";
  }
  //click handler(main.js): first fill with appropriate player's emoji (unless already filled)
  //check for wins
  //ensure helper function is going through all checks
  ticTacToeTime(squareNum, squareVar) {
    if (!this.squares[squareNum]) {
      this.turns++;
      this.fillSquare(squareNum, squareVar);
      this.checkForWin();
      this.checkForTie();
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
    this.changeTurn();
  }

  updateBoardState() {
      this.winCon1 = `"${this.squares[0]}, ${this.squares[1]}, ${this.squares[2]}"`;
      this.winCon2 = `"${this.squares[3]}, ${this.squares[4]}, ${this.squares[5]}"`;
      this.winCon3 = `"${this.squares[6]}, ${this.squares[7]}, ${this.squares[8]}"`;
      this.winCon4 = `"${this.squares[0]}, ${this.squares[4]}, ${this.squares[8]}"`;
      this.winCon5 = `"${this.squares[2]}, ${this.squares[4]}, ${this.squares[6]}"`;
      this.winCon6 = `"${this.squares[0]}, ${this.squares[3]}, ${this.squares[6]}"`;
      this.winCon7 = `"${this.squares[1]}, ${this.squares[4]}, ${this.squares[7]}"`;
      this.winCon8 = `"${this.squares[2]}, ${this.squares[5]}, ${this.squares[8]}"`;
  }

  checkForWin() {
    this.updateBoardState();
    console.log(this.winCon1);
    if (this.winCon1.includes("🦀, 🦀, 🦀")) {
      console.log("WEEEEEEEEEEEN");
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