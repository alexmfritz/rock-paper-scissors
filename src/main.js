// image views
var gameChoiceImages = document.querySelector('.game-logos');
var resultsImages = document.querySelector('.choice');
// choice images
var hulkLogo = document.getElementById('hulk');
var ironManLogo = document.getElementById('ironMan');
var capAmLogo = document.getElementById('capAm');
var thorLogo = document.getElementById('thor');
var widowLogo = document.getElementById('widow');
// chosen images
var playerChoice = document.querySelector('.player-choice');
var computerChoice = document.querySelector('.computer-choice');
// buttons
var classicButton = document.querySelector('.classic-button');
var spicyButton = document.querySelector('.spicy-button');
var changeGameButton = document.querySelector('.game-button');
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
var game;

// event listeners
window.addEventListener('load', function() {
    game = new Game();
    showStats();
});
classicButton.addEventListener('click', startClassic);
spicyButton.addEventListener('click', startSpicy);
changeGameButton.addEventListener('click', pickNewGame);
gameChoiceImages.addEventListener('click', function(event) {
    if (event.target.classList.contains('med-image')) {
        playGame(event.target.id);
        displayBothFighters();
    }
})

// event handlers
function playGame(choice) {
    show(changeGameButton, 'hidden');
    takeBothTurns(choice);
    setTimeout(replayGame, 1500);
};

function clearGame() {
    game.choices = ['ironMan', 'capAm', 'thor'];
};

function replayGame() {
    hide(resultsImages, 'hidden');
    updateInfo(winnerAnouncement, 'Choose your fighter!');
    if (game.type === 'spicy') {
        show(gameChoiceImages, 'hidden');
    } else if (game.type === 'classic') {
        show(gameChoiceImages, 'hidden');
        hide(hulkLogo, 'visible');
        hide(widowLogo, 'visible');
    };
};

function takeBothTurns(choice) {
    game.player.takeTurn(choice);
    game.computer.takeTurn();
};

function beginGame(type) {
    game.playGame(type);
};

function startClassic(event) {
    show(gameChoiceImages, 'hidden');
    hide(classicButton, 'hidden');
    hide(spicyButton, 'hidden');
    hide(changeGameButton, 'hidden');
    beginGame('classic');
    updateInfo(winnerAnouncement, 'Choose your fighter!');
};

function startSpicy(event) {
    show(gameChoiceImages, 'hidden');
    show(hulkLogo, 'visible');
    show(widowLogo, 'visible');
    hide(classicButton, 'hidden');
    hide(spicyButton, 'hidden');
    hide(changeGameButton, 'hidden');
    beginGame('spicy');
    updateInfo(winnerAnouncement, 'Choose your fighter!');
};

function displayBothFighters() {
    winnerAnouncement.innerText = game.determineWinner();
    displayFighters(playerChoice, `${game.player.choice}`);
    displayFighters(computerChoice, `${game.computer.choice}`);
    showStats();
};

function displayFighters(element, opponent) {
    show(resultsImages, 'hidden');
    hide(gameChoiceImages, 'hidden');
    if (opponent === 'ironMan') {
        element.src = "assets/ironman.png";
        element.alt = "iron man logo";
    } else if (opponent === 'capAm') {
        element.src = "assets/capam.png";
        element.alt = "captain america shield logo";
    } else if (opponent === 'thor') {
        element.src = "assets/thor.png";
        element.alt = "thor\s hammer logo";
    } else if (opponent === 'hulk') {
        element.src = "assets/hulk.png";
        element.alt = "hulk logo";
    } else if (opponent === 'widow') {
        element.src = "assets/blackwidow.png";
        element.alt = "black widow logo";
    };
};

function pickNewGame(event) {
    hide(gameChoiceImages, 'hidden');
    hide(hulkLogo, 'visible');
    hide(widowLogo, 'visible');
    hide(resultsImages, 'hidden');
    hide(changeGameButton, 'hidden');
    show(classicButton, 'hidden');
    show(spicyButton, 'hidden');
    clearGame();
};

function showStats() {
    updateInfo(playerName, `${game.player.name}`);
    updateInfo(playerEmoji, `${game.player.emoji}`);
    game.player.retrieveWinsFromStorage();
    updateInfo(playerWins, `Wins: ${game.player.wins}`);
    updateInfo(compName, `${game.computer.name}`);
    updateInfo(compEmoji, `${game.computer.emoji}`);
    game.computer.retrieveWinsFromStorage();
    updateInfo(compWins, `Wins: ${game.computer.wins}`);
};

// helper functions

function updateInfo(element, update) {
    element.innerText = update;
};

function show(element, rule) {
    element.classList.remove(rule);
};

function hide(element, rule) {
    element.classList.add(rule);
};

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
};