
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
        if (this.player.choice === this.player.choice) {
            this.winner = 'Draw';
            return 'It\s a draw!';
        } else if ((this.player.choice === 'iron man') && (this.computer.choice === 'captain america') || (this.player.choice === 'iron man') && (this.computer.choice === 'the hulk')) {
            this.player.wins++;
            this.winner = this.player.name;
            return  `${game.player.name} wins!`;
        } else if ((this.player.choice === 'captain america') && (this.computer.choice === 'thor') || (this.player.choice === 'captain america') && (this.computer.choice === 'black widow')) {
            this.player.wins++;
            this.winner = this.player.name;
            return  `${game.player.name} wins!`;
        } else if ((this.player.choice === 'thor') && (this.computer.choice === 'iron man') || (this.player.choice === "thor") && (this.computer.choice === 'black widow')) {
            this.player.wins++;
            this.winner = this.player.name;
            return  `${game.player.name} wins!`;
        } else if ((this.player.choice === 'the hulk') && (this.computer.choice === 'thor') || (this.player.choice === 'the hulk') && (this.computer.choice === 'captain america')) {
            this.player.wins++;
            this.winner = this.player.name;
            return  `${game.player.name} wins!`;
        } else if ((this.player.choice === 'black widow') && (this.computer.choice === 'iron man') || (this.player.choice === 'black widow') && (this.computer.choice === 'the hulk')) {
            this.player.wins++;
            this.winner = this.player.name;
            return  `${game.player.name} wins!`;
        } 
        this.computer.wins++;
        this.winner = this.computer.name;
        return  `${game.computer.name} wins!`;
    }
}