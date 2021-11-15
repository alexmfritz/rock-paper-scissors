
class Game {
    constructor(type) {
        this.player = new Player('Human', '👩🏻‍💻');
        this.computer = new Player('Computer', '💻');
        this.type = type || 'classic';
        this.choices = {
            'ironman': ['captain', 'hulk'],
            'captain': ['thor', 'widow'],
            'thor': ['ironman', 'widow'],
        };
        this.winner;
    }
    playGame(type) {
        this.type = type;
        if (this.type === 'spicy') {
            this.choices['hulk'] = ['thor', 'captain'];
            this.choices['widow'] = ['hulk', 'ironman'];
        };
    }
    updateWinner(winner) {
        winner.wins++;
        winner.saveWinsToStorage();
        return winner.name;
    }
    determineWinner() {
        var winsAgainst = this.choices[this.player.choice];

        if (this.player.choice === this.computer.choice) {
            this.winner = 'Draw';
            return '😭 It\s a draw! 😭';
        } else if (this.computer.choice === winsAgainst[0] || this.computer.choice === winsAgainst[1]) {
            this.winner = this.updateWinner(this.player);
            return `👩🏻‍💻 ${game.player.name} wins! 👩🏻‍💻`;
        }
        this.winner = this.updateWinner(this.computer);
        return `💻 ${game.computer.name} wins! 💻`;
    }
}