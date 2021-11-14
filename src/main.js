// image views
var gameChoiceImages = document.getElementById('gameLogos');
var resultsImages = document.getElementById('choiceDisplay');
// choice images
var hulkLogo = document.getElementById('hulk');
var ironManLogo = document.getElementById('ironMan');
var capAmLogo = document.getElementById('capAm');
var thorLogo = document.getElementById('thor');
var widowLogo = document.getElementById('widow');
var allLogos = document.querySelectorAll('.med-image');
// chosen images
var playerChoice = document.getElementById('playerChoiceDisplay');
var computerChoice = document.getElementById('computerChoiceDisplay');
// buttons
var classicButton = document.getElementById('classicButton');
var spicyButton = document.getElementById('spicyButton');
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
classicButton.addEventListener('click', startClassic);
spicyButton.addEventListener('click', startSpicy);
changeGameButton.addEventListener('click', pickNewGame);
gameChoiceImages.addEventListener('click', function(event) {
    if (event.target.classList.contains('med-image')) {
        playGame(event.target.id);
        displayEmoji(event);
    };
});


// event handlers
function playGame(choice) {
    removeClass([changeGameButton], 'hidden');
    takeBothTurns(choice);
    setTimeout(displayBothFighters, 1000);
    setTimeout(replayGame, 2000);
};

function clearGame() {
    game.choices = ['ironMan', 'capAm', 'thor'];
};

function replayGame() {
    addClass([resultsImages], 'hidden');
    updateInfo(winnerAnouncement, 'Choose your fighter!');
    decideReplay();
};

function decideReplay() {
    if (game.type === 'spicy') {
        removeClass([gameChoiceImages], 'hidden');
        displayClassic();
    } else if (game.type === 'classic') {
        removeClass([gameChoiceImages], 'hidden');
        displaySpicy();
    };
};

function takeBothTurns(choice) {
    game.player.takeTurn(choice);
    game.computer.takeTurn();
};

function beginGame(type) {
    game.playGame(type);
};

function startClassic() {
    hideButtons();
    beginGame('classic');
    updateInfo(winnerAnouncement, 'Choose your fighter!');
    displayClassic();
};

function startSpicy() {
    hideButtons();
    beginGame('spicy');
    updateInfo(winnerAnouncement, 'Choose your fighter!');
    displaySpicy();
};

function displayClassic() {
    gameChoiceImages.innerHTML = ``;
    for(var i = 0; i < game.choices.length; i++) {
        gameChoiceImages.innerHTML += `
            <section class="flex column">
                <image class="${game.choices[i]} med-image ${game.choices[i]}-cursor" id="${game.choices[i]}" src="assets/${game.choices[i]}.png" alt="${game.choices[i]} logo" />
                <p class="emoji large-text visible" id="${game.choices[i]}Emoji">👩🏻‍💻</p>
             </section>
        
        `;
    };
};

function displaySpicy() {
    gameChoiceImages.innerHTML = ``;
    for(var i = 0; i < game.choices.length; i++) {
        gameChoiceImages.innerHTML += `
            <section class="flex column">
                <image class="${game.choices[i]} med-image ${game.choices[i]}-cursor" id="${game.choices[i]}" src="assets/${game.choices[i]}.png" alt="${game.choices[i]} logo" />
                <p class="emoji large-text visible" id="${game.choices[i]}Emoji">👩🏻‍💻</p>
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

function displayEmoji(event) {
    removeClass([event.target.nextElementSibling], 'visible');
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