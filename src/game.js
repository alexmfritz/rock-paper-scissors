
class Game {
    constructor(type) {
        this.player = new Player('Human', '👩🏻‍💻');
        this.computer = new Player('Computer', '💻');
        this.type = type || 'classic';
        this.choices = ['iron man', 'captain america', 'thor'];
        this.winner;
    }
    playGame(type) {
        this.type = type;
        if (this.type === 'spicy') {
            this.choices.push('the hulk', 'black widow');
        };
    }
    determineWinner() {
        
    }
}