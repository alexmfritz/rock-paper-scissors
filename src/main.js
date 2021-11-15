// image views
var gameChoiceImages = document.getElementById('gameLogos');
var resultsImages = document.getElementById('choiceDisplay');
// choice images
var hulkLogo = document.getElementById('hulk');
var ironManLogo = document.getElementById('ironMan');
var capAmLogo = document.getElementById('capAm');
var thorLogo = document.getElementById('thor');
var widowLogo = document.getElementById('widow');
var allButtons = document.getElementsByClassName('buttons');
// chosen images
var playerChoice = document.getElementById('playerChoiceDisplay');
var computerChoice = document.getElementById('computerChoiceDisplay');
// buttons
var buttonBox = document.getElementById('game-type-box');
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
// display emojis
var hulkEmoji = document.getElementById('hulkEmoji');
var ironManEmoji = document.getElementById('ironManEmoji');
var capAmEmoji = document.getElementById('capAmEmoji');
var thorEmoji = document.getElementById('thorEmoji');
var widowEmoji = document.getElementById('widowEmoji');
// winner text
var winnerAnouncement = document.getElementById('winnerAnnounce');
// data model
var game;

// event listeners
window.addEventListener('load', function() {
    game = new Game();
    showStats();
});
// classicButton.addEventListener('click', startClassic);
// spicyButton.addEventListener('click', startSpicy);
changeGameButton.addEventListener('click', pickNewGame);
gameChoiceImages.addEventListener('click', function(event) {
    if (event.target.classList.contains('med-image')) {
        playRound(event.target.id);
    };
});
buttonBox.addEventListener('click', function(event) {
    startGameType(event);
});

// event handlers
function playRound(choice) {
    removeClass([changeGameButton], 'hidden');
    takeBothTurns(choice);
    displayEmoji();
    disableButtons();
    setTimeout(displayBothFighters, 1000);
    setTimeout(replayGame, 2000);
};

function clearGame() {
    game.choices = ['ironMan', 'capAm', 'thor'];
};

function replayGame() {
    enableGameChange()
    addClass([resultsImages], 'hidden');
    updateInfo(winnerAnouncement, 'Choose your fighter!');
    decideReplay();
};

function decideReplay() {
    removeClass([gameChoiceImages], 'hidden');
    if (game.type === 'spicy') {
        displayClassic();
    }
    displaySpicy();
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
        displaySpicy();
    }
        beginGame('classic');
        displayClassic();
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

function displayClassic() {
    gameChoiceImages.innerHTML = ``;
    for(var i = 0; i < game.choices.length; i++) {
        gameChoiceImages.innerHTML += `
            <section class="flex column">
                <button class="${game.choices[i]} ${game.choices[i]}-cursor med-image no-back buttons" id="${game.choices[i]}" alt="${game.choices[i]} logo"></button>
                <p class="emoji large-text" id="${game.choices[i]}Emoji"></p>
             </section>
        `;
    };
};

function displaySpicy() {
    gameChoiceImages.innerHTML = ``;
    for(var i = 0; i < game.choices.length; i++) {
        gameChoiceImages.innerHTML += `
            <section class="flex column">
                <button class="${game.choices[i]} ${game.choices[i]}-cursor med-image no-back buttons" id="${game.choices[i]}" alt="${game.choices[i]} logo"></button>
                <p class="emoji large-text" id="${game.choices[i]}Emoji"></p>
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