class Game {
  constructor() {
    this.player1 = new Player(1);
    this.player2 = new Player(2);
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
                          // reverse versions too?
                         ]


    this.squares = [
                    { num: 0, fill: "" },
                    { num: 1, fill: "" },
                    { num: 2, fill: "" },
                    { num: 3, fill: "" },
                    { num: 4, fill: "" },
                    { num: 5, fill: "" },
                    { num: 6, fill: "" },
                    { num: 7, fill: "" },
                    { num: 8, fill: "" }
                   ];


  }

  // checkForWin() {
  //   if (PLACEHOLDER FOR WIN CONDITION) {
  //     this.gameWon = true;
  //     PLACEHOLDER FOR ADDING WIN TO CORRECT PLAYER
  //     PLACEHOLDER FOR TIME DELAY + GAME RESET
  //   }
  // }


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