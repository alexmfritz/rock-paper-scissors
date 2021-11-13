
class Game {
    constructor(type) {
        this.player = new Player('Human', '👩🏻‍💻');
        this.computer = new Player('Computer', '💻');
        this.type = type || 'classic';
        this.choices = ['ironMan', 'capAm', 'thor'];
        this.winner;
    }
    playGame(type) {
        this.type = type;
        if (this.type === 'spicy') {
            this.choices.push('hulk', 'widow');
        };
    }
    determineWinner() {
        if (this.player.choice === this.computer.choice) {
            this.winner = 'Draw';
            return '😭 It\s a draw! 😭';
        } else if ((this.player.choice === 'ironMan') && (this.computer.choice === 'capAm') || (this.player.choice === 'ironMan') && (this.computer.choice === 'hulk')) {
            this.player.wins++;
            this.winner = this.player.name;
            this.player.saveWinsToStorage();
            return  `👩🏻‍💻 ${game.player.name} wins! 👩🏻‍💻`;
        } else if ((this.player.choice === 'capAm') && (this.computer.choice === 'thor') || (this.player.choice === 'capAm') && (this.computer.choice === 'widow')) {
            this.player.wins++;
            this.winner = this.player.name;
            this.player.saveWinsToStorage();
            return  `👩🏻‍💻 ${game.player.name} wins! 👩🏻‍💻`;
        } else if ((this.player.choice === 'thor') && (this.computer.choice === 'ironMan') || (this.player.choice === "thor") && (this.computer.choice === 'widow')) {
            this.player.wins++;
            this.winner = this.player.name;
            this.player.saveWinsToStorage();
            return  `👩🏻‍💻 ${game.player.name} wins! 👩🏻‍💻`;
        } else if ((this.player.choice === 'hulk') && (this.computer.choice === 'thor') || (this.player.choice === 'hulk') && (this.computer.choice === 'capAm')) {
            this.player.wins++;
            this.winner = this.player.name;
            this.player.saveWinsToStorage();
            return  `👩🏻‍💻 ${game.player.name} wins! 👩🏻‍💻`;
        } else if ((this.player.choice === 'widow') && (this.computer.choice === 'ironMan') || (this.player.choice === 'widow') && (this.computer.choice === 'hulk')) {
            this.player.wins++;
            this.winner = this.player.name;
            this.player.saveWinsToStorage();
            return  `👩🏻‍💻 ${game.player.name} wins! 👩🏻‍💻`;
        } 
        this.computer.wins++;
        this.winner = this.computer.name;
        this.computer.saveWinsToStorage();
        return  `💻 ${game.computer.name} wins! 💻`;
    }
}