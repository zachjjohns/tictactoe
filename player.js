class Player {
  constructor(playerNum, emoji) {
    this.number = playerNum;
    this.emoji = emoji;
    this.wins = 0;
  }

  saveWinsToStorage() {
    this.retrieveWinsFromStorage();
    this.wins++;
    localStorage.setItem(this.emoji, JSON.stringify(this.wins));
  }

  retrieveWinsFromStorage() {
    this.wins = JSON.parse(localStorage.getItem(this.emoji)) || 0;
  }
}