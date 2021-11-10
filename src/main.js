// images
var classicChoiceImages = document.querySelector('.classic');
var spicyChoiceImages = document.querySelector('.spicy');
// classic inputs
var ironManClassic = document.getElementById('ironManClassic');
var capAmClassic = document.getElementById('capAmClassic');
var thorClassic = document.getElementById('thorClassic');
// spicy inputs
var ironManSpicy = document.getElementById('ironManSpicy');
var capAmSpicy = document.getElementById('capAmSpicy');
var thorSpicy = document.getElementById('thorSpicy');
var hulkSpicy = document.getElementById('hulkSpicy');
var widowSpicy = document.getElementById('widowSpicy');
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
})
classicButton.addEventListener('click', startClassic);
spicyButton.addEventListener('click', startSpicy);
changeGameButton.addEventListener('click', pickNewGame);

// event handlers



function startNewGame(type) {
    game.playGame(type);
};

function startClassic(event) {
    show(classicChoiceImages);
    hide(classicButton);
    hide(spicyButton);
    startNewGame('classic');
};

function startSpicy(event) {
    show(spicyChoiceImages);
    hide(classicButton);
    hide(spicyButton);
    startNewGame('spicy');
};

function pickNewGame(event) {
    hide(classicChoiceImages);
    hide(spicyChoiceImages);
    show(classicButton);
    show(spicyButton);
};

// helper functions

function show(element) {
    element.classList.remove('hidden');
};

function hide(element) {
    element.classList.add('hidden');
};

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
};