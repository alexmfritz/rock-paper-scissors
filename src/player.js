
class Player {
    constructor(name, emoji) {
        this.name = name;
        this.emoji = emoji;
        this.wins = 0;
        this.choice = null;
    }

    takeTurn = (decision) => {
        if (!decision) {
            let computerChoices = Array.from(Object.keys(game.choices));
            return this.choice = computerChoices[getRandomIndex(computerChoices)];
        }
        return this.choice = decision;
    }

    saveWinsToStorage = () => {
        let storedWins = this.wins;
        let stringifiedWins = JSON.stringify(storedWins);
        localStorage.setItem(`${this.name} wins`, stringifiedWins);
    }
    
    retrieveWinsFromStorage = () => {
        let retrievedWins = localStorage.getItem(`${this.name} wins`);
        let parsedWins = JSON.parse(retrievedWins);
        this.wins = parsedWins || 0;
        return `Wins: ${this.wins}`;
    }
}