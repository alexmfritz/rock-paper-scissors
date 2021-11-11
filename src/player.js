
class Player {
    constructor(name, emoji) {
        this.name = name;
        this.emoji = emoji;
        this.wins = 0;
        this.choice;
    }
    takeTurn(decision) {
        if (!decision) {
            this.choice.getRandomIndex(this.choice);
        }
        this.choice = decision;
    }
    saveWinsToStorage() {
        var storedWins = this.wins;
        var stringifiedWins = JSON.stringify(storedWins);
        localStorage.setItem(`${this.name} wins`, stringifiedWins);
    }
    retrieveWinsFromStorage() {
        var retrievedWins = localStorage.getItem(`${this.name} wins`);
        var parsedWins = JSON.parse(retrievedWins);
        this.wins = parsedWins;
        return `Wins: ${this.wins}`;
    }
}