// images
var classicChoiceImages = document.querySelector('.classic');
var spicyChoiceImages = document.querySelector('.spicy');
var resultsImages = document.querySelector('.choice');
// classic images
var ironManClassic = document.getElementById('ironManClassic');
var capAmClassic = document.getElementById('capAmClassic');
var thorClassic = document.getElementById('thorClassic');
// spicy images
var ironManSpicy = document.getElementById('ironManSpicy');
var capAmSpicy = document.getElementById('capAmSpicy');
var thorSpicy = document.getElementById('thorSpicy');
var hulkSpicy = document.getElementById('hulkSpicy');
var widowSpicy = document.getElementById('widowSpicy');
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
ironManClassic.addEventListener('click', function(event) {
    playGame('iron man');
    displayBothFighters();
});
capAmClassic.addEventListener('click', function(event) {
    playGame('captain america');
    displayBothFighters();
});
thorClassic.addEventListener('click', function(event) {
    playGame('thor');
    displayBothFighters();
});
ironManSpicy.addEventListener('click', function(event) {
    playGame('iron man');
    displayBothFighters();
});
capAmSpicy.addEventListener('click', function(event) {
    playGame('captain america');
    displayBothFighters();
});
thorSpicy.addEventListener('click', function(event) {
    playGame('thor');
    displayBothFighters();
});
hulkSpicy.addEventListener('click', function(event) {
    playGame('the hulk');
    displayBothFighters();
});
widowSpicy.addEventListener('click', function(event) {
    playGame('black widow');
    displayBothFighters();
});

// event handlers
function playGame(choice) {
    show(changeGameButton);
    takeBothTurns(choice);
};

function takeBothTurns(choice) {
    game.player.takeTurn(choice);
    game.computer.takeTurn();
};

function beginGame(type) {
    game.playGame(type);
};

function startClassic(event) {
    show(classicChoiceImages);
    hide(classicButton);
    hide(spicyButton);
    hide(changeGameButton);
    beginGame('classic');
    updateInfo(winnerAnouncement, 'Choose your fighter!');
};

function startSpicy(event) {
    show(spicyChoiceImages);
    hide(classicButton);
    hide(spicyButton);
    hide(changeGameButton);
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
    show(resultsImages);
    hide(classicChoiceImages);
    hide(spicyChoiceImages);
    if (opponent === 'iron man') {
        element.src = "assets/ironman.png";
        element.alt = "iron man logo";
    } else if (opponent === 'captain america') {
        element.src = "assets/capam.png";
        element.alt = "captain america shield logo";
    } else if (opponent === 'thor') {
        element.src = "assets/thor.png";
        element.alt = "thor\s hammer logo";
    } else if (opponent === 'the hulk') {
        element.src = "assets/hulk.png";
        element.alt = "hulk logo";
    } else if (opponent === 'black widow') {
        element.src = "assets/blackwidow.png";
        element.alt = "black widow logo";
    }
};

function pickNewGame(event) {
    hide(classicChoiceImages);
    hide(spicyChoiceImages);
    hide(resultsImages);
    show(classicButton);
    show(spicyButton);
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

function show(element) {
    element.classList.remove('hidden');
};

function hide(element) {
    element.classList.add('hidden');
};

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
};