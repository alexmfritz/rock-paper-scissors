
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

    }
    retrieveWinsFromStorage() {

    }
}