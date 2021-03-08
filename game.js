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

  ticTacToeTime(squareNum, squareVar) {
    if (!this.squares[squareNum]) {
      this.turns++;
      this.fillSquare(squareNum, squareVar);
      this.checkForWin();
      this.checkForTie();
      this.checkForReset();
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
    if (this.winCon1.includes("🦀, 🦀, 🦀") || 
        this.winCon2.includes("🦀, 🦀, 🦀") || 
        this.winCon3.includes("🦀, 🦀, 🦀") || 
        this.winCon4.includes("🦀, 🦀, 🦀") || 
        this.winCon5.includes("🦀, 🦀, 🦀") || 
        this.winCon6.includes("🦀, 🦀, 🦀") || 
        this.winCon7.includes("🦀, 🦀, 🦀") || 
        this.winCon8.includes("🦀, 🦀, 🦀")) 
        {
          this.player1.wins++;
          this.gameWon = true;
          this.saveWinToPlayer();
          console.log("PLAYER ONE WINS!");
    } else if (
        this.winCon1.includes("👽, 👽, 👽") ||
        this.winCon2.includes("👽, 👽, 👽") ||
        this.winCon3.includes("👽, 👽, 👽") ||
        this.winCon4.includes("👽, 👽, 👽") ||
        this.winCon5.includes("👽, 👽, 👽") ||
        this.winCon6.includes("👽, 👽, 👽") ||
        this.winCon7.includes("👽, 👽, 👽") ||
        this.winCon8.includes("👽, 👽, 👽")) 
        {
          this.player2.wins++;
          this.gameWon = true;
          this.saveWinToPlayer();
          console.log("PLAYER TWO WINS!");
        }
  }

  checkForTie() {
      if (this.turns === 9) {
        console.log("TIE!");
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

  checkForReset() {
    if (this.tie || this.gameWon) {
      this.squares = ["", "", "", "", "", "", "", "", ""];
      this.updateBoardState();
    }
  }

  saveWinToPlayer() {
    if (this.currentTurn === 1) {
      this.player1.saveWinsToStorage();
    } else {
      this.player2.saveWinsToStorage();
    }
  }

  retrieveWinsFromPlayer(playerNum) {
    if (playerNum === 1) {
      this.player1.retrieveWinsFromStorage();
      return this.player1.wins;
    } else {
      this.player2.retrieveWinsFromStorage();
      return this.player2.wins;
    }
  }
}

//game.js = DATA MODEL
//main.js accesses game/player.js
//have a method that updates a game board (what is my gameboard? how would I update? yadda yadda)
//