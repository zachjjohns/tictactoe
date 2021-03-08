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

  ticTacToeTime(squareNum, squareTarget) {
    if (!this.squares[squareNum] && squareTarget.classList.contains("square")) {
      this.turns++;
      this.fillSquare(squareNum, squareTarget);
      this.checkForWin();
      this.checkForTie();
      this.changeTurn();
    }
  }

  fillSquare(squareNum, squareVar) {
    if (this.currentTurn === 1) {
      this.squares[squareNum] = this.player1.emoji;
    } else {
      this.squares[squareNum] = this.player2.emoji;
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
          this.gameWon = true;
          this.saveWinToPlayer();
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
          this.gameWon = true;
          this.saveWinToPlayer();
        }
  }

  checkForTie() {
      if (this.turns === 9 && !this.gameWon) {
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

  resetGame() {
    if (this.tie || this.gameWon) {
      this.squares = ["", "", "", "", "", "", "", "", ""];
      this.tie = false;
      this.gameWon = false;
      this.turns = 0;
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