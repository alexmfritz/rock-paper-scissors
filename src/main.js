// image views
var gameChoiceImages = document.getElementById('gameLogos');
var resultsImages = document.getElementById('choiceDisplay');
// choice images
var hulkLogo = document.getElementById('hulk');
var ironManLogo = document.getElementById('ironman');
var capAmLogo = document.getElementById('captain');
var thorLogo = document.getElementById('thor');
var widowLogo = document.getElementById('widow');
var allButtons = document.getElementsByClassName('all-btns');
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

// event listeners
window.addEventListener('load', showStats);
gameChoiceImages.addEventListener('click', function(event) {
    playRound(event);
});
buttonBox.addEventListener('click', function(event) {
    startGameType(event);
});
changeGameButton.addEventListener('click', pickNewGame);

// event handlers
function playRound(event) {
    if (event.target.classList.contains('med-img')) {
        removeClass([changeGameButton], 'hidden');
        takeBothTurns(event.target.id);
        displayEmoji();
        disableButtons();
        setTimeout(displayBothFighters, 1000);
        setTimeout(replayGame, 2000);
    };
};

function clearGame() {
    game.choices = {
        'ironman': ['captain', 'hulk'],
        'captain': ['thor', 'widow'],
        'thor': ['ironman', 'widow'],
    };
};

function replayGame() {
    enableGameChange()
    removeClass([gameChoiceImages], 'hidden');
    addClass([resultsImages], 'hidden');
    updateInfo(winnerAnouncement, 'Choose your fighter!');
    displayChoices();
    game.resetGame();
};

function takeBothTurns(choice) {
    game.player.takeTurn(choice);
    game.computer.takeTurn();
};

function beginGame(type) {
    game.playGame(type);
};

function startGameType(event) {
    hideButtons();
    updateInfo(winnerAnouncement, 'Choose your fighter!');
    if (event.target.classList.contains('spicy')) {
        beginGame('spicy');
    };
    beginGame('classic');
    displayChoices();
};

function enableGameChange() {
    changeGameButton.disabled = false;
    removeClass([changeGameButton], 'opacity');
};

function disableButtons() {
    for(var i = 0; i < allButtons.length; i++) {
        allButtons[i].disabled = true;
        addClass([allButtons[i]], 'opacity');
    };
};

function displayChoices() {
    var choiceImages = Array.from(Object.keys(game.choices));
    gameChoiceImages.innerHTML = ``;
    for(var i = 0; i < choiceImages.length; i++) {
        gameChoiceImages.innerHTML += `
            <section class="flex column">
                <button class="${choiceImages[i]} med-img no-back all-btns" id="${choiceImages[i]}" alt="${choiceImages[i]} logo"></button>
                <p class="emoji lrg-text" id="${choiceImages[i]}Emoji"></p>
             </section>
        `;
    };
};

function displayBothFighters() {
    winnerAnouncement.innerText = game.determineWinner();
    displayFighters(playerChoice, `${game.player.choice}`);
    displayFighters(computerChoice, `${game.computer.choice}`);
    showStats();
};

function displayFighters(element, opponent) {
    removeClass([resultsImages], 'hidden');
    addClass([gameChoiceImages], 'hidden');
    element.src = `assets/${opponent}.png`;
    element.alt = `${opponent} logo`;
};

function displayEmoji() {
    var logoEmoji = document.querySelector(`#${game.player.choice}Emoji`);
    logoEmoji.innerText = '👩🏻‍💻';
};

function pickNewGame() {
    addClass([gameChoiceImages, resultsImages, changeGameButton], 'hidden');
    removeClass([classicButton, spicyButton], 'hidden');
    clearGame();
    updateInfo(winnerAnouncement, 'Choose your game!');
};

function showStats() {
    showPlayerStats();
    showComputerStats();
};

function showPlayerStats() {
    updateInfo(playerName, `${game.player.name}`);
    updateInfo(playerEmoji, `${game.player.emoji}`);
    game.player.retrieveWinsFromStorage();
    updateInfo(playerWins, `Wins: ${game.player.wins}`);
};

function showComputerStats() {
    updateInfo(compName, `${game.computer.name}`);
    updateInfo(compEmoji, `${game.computer.emoji}`);
    game.computer.retrieveWinsFromStorage();
    updateInfo(compWins, `Wins: ${game.computer.wins}`);
};

function hideButtons() {
    removeClass([gameChoiceImages], 'hidden');
    addClass([classicButton, spicyButton, changeGameButton], 'hidden');
};

// helper functions

function updateInfo(element, update) {
    element.innerText = update;
};

function removeClass(elements, rule) {
    for (var i = 0; i < elements.length; i ++) {
        elements[i].classList.remove(rule);
    };
};

function addClass(elements, rule) {
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add(rule);
    };
};

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
};