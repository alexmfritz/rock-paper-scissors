// image views
var gameChoiceImages = document.getElementById('gameLogos');
var resultsImages = document.getElementById('choiceDisplay');
// choice images
var hulkLogo = document.getElementById('hulk');
var ironManLogo = document.getElementById('ironman');
var capAmLogo = document.getElementById('captain');
var thorLogo = document.getElementById('thor');
var widowLogo = document.getElementById('widow');
var allButtons = document.getElementsByClassName('med-img');
// var allButtons = document.querySelectorAll('all-btns');
// chosen images
var playerChoice = document.getElementById('playerChoiceDisplay');
var computerChoice = document.getElementById('computerChoiceDisplay');
// buttons
var buttonBox = document.getElementById('gameTypeBox');
var classicButton = document.getElementById('classic');
var spicyButton = document.getElementById('spicy');
var changeGameButton = document.getElementById('changeGameButton');
// player
var playerEmoji = document.getElementById('playerEmoji');
var playerName = document.getElementById('playerName');
var playerWins = document.getElementById('playerWin');
// computer
var compEmoji = document.getElementById('compEmoji');
var compName = document.getElementById('compName');
var compWins = document.getElementById('compWin');
// winner text
var winnerAnouncement = document.getElementById('winnerAnnounce');
// data model
var game = new Game();

// event handlers
const startGameType = (event) => {
    if (event.target.classList.contains('spicy')) {
        beginGame('spicy');
    }
    displayChoices();
    hideButtons();
    updateInfo(winnerAnouncement, 'Choose your fighter!');
}

const playRound = (event) => {
    if (event.target.classList.contains('med-img')) {
        takeBothTurns(event.target.id);
        displayEmoji();
        disableButtons();
        removeClass([changeGameButton], 'hidden');
        setTimeout(displayBothFighters, 1000);
        setTimeout(replayGame, 2000);
    }
}

const takeBothTurns = (choice) => {
    game.player.takeTurn(choice);
    game.computer.takeTurn();
}

const beginGame = (type) => {
    game.playGame(type);
}

const displayChoices = () => {
    let choiceImages = Array.from(Object.keys(game.choices));
    gameChoiceImages.innerHTML = ``;
    choiceImages.forEach(item => {
        gameChoiceImages.innerHTML += `
            <section class="flex column">
                <button class="${item} med-img no-back all-btns" id="${item}" alt="${item} image logo"></button>
                <h2 class="emoji lrg-text" id="${item}Emoji"></h2>
            </section>`
    })
}

const displayBothFighters = () => {
    winnerAnouncement.innerText = game.determineWinner();
    displayFighters(playerChoice, `${game.player.choice}`);
    displayFighters(computerChoice, `${game.computer.choice}`);
    showStats();
}

const displayFighters = (element, opponent) => {
    element.src = `assets/${opponent}.png`;
    element.alt = `${opponent} logo`;
    removeClass([resultsImages], 'hidden');
    addClass([gameChoiceImages], 'hidden');
}

const displayEmoji = () => {
    let logoEmoji = document.querySelector(`#${game.player.choice}Emoji`);
    logoEmoji.innerText = '👩🏻‍💻';
}

const clearGame = () => {
    game.choices = {
        'ironman': ['captain', 'hulk'],
        'captain': ['thor', 'widow'],
        'thor': ['ironman', 'widow'],
    }
}

const replayGame = () => {
    game.resetGame();
    enableGameChange();
    displayChoices();
    removeClass([gameChoiceImages], 'hidden');
    addClass([resultsImages], 'hidden');
    updateInfo(winnerAnouncement, 'Choose your fighter!');
}

const enableGameChange = () => {
    changeGameButton.disabled = false;
    removeClass([changeGameButton], 'opacity');
}

const disableButtons = () => {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].disabled = true;
        allButtons[i].classList.add('opacity');
    }
}

const pickNewGame = () => {
    clearGame();
    addClass([gameChoiceImages, resultsImages, changeGameButton], 'hidden');
    removeClass([classicButton, spicyButton], 'hidden');
    updateInfo(winnerAnouncement, 'Choose your game!');
}

const showStats = () => {
    showPlayerStats();
    showComputerStats();
}

const showPlayerStats = () => {
    game.player.retrieveWinsFromStorage();
    updateInfo(playerName, `${game.player.name}`);
    updateInfo(playerEmoji, `${game.player.emoji}`);
    updateInfo(playerWins, `Wins: ${game.player.wins}`);
}

const showComputerStats = () => {
    game.computer.retrieveWinsFromStorage();
    updateInfo(compName, `${game.computer.name}`);
    updateInfo(compEmoji, `${game.computer.emoji}`);
    updateInfo(compWins, `Wins: ${game.computer.wins}`);
}

const hideButtons = () => {
    removeClass([gameChoiceImages], 'hidden');
    addClass([classicButton, spicyButton, changeGameButton], 'hidden');
}

// helper functions
const updateInfo = (element, update) => {
    element.innerText = update;
}

const removeClass = (elements) => {
    elements.forEach(item => item.classList.remove('hidden'));
}

const addClass = (elements) => {
    elements.forEach(item => item.classList.add('hidden'));
}

const getRandomIndex = (array) => {
    return Math.floor(Math.random() * array.length);
}

// event listeners
window.addEventListener('load', () => {
    showStats();
});
buttonBox.addEventListener('click', (event) => {
    startGameType(event);
});
gameChoiceImages.addEventListener('click', (event) => {
    playRound(event);
});
changeGameButton.addEventListener('click', () => {
    pickNewGame();
});