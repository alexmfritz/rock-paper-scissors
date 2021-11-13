// image views
var gameChoiceImages = document.querySelector('.game-logos');
var resultsImages = document.querySelector('.choice');
// choice images
var hulkLogo = document.getElementById('hulk');
var ironManLogo = document.getElementById('ironMan');
var capAmLogo = document.getElementById('capAm');
var thorLogo = document.getElementById('thor');
var widowLogo = document.getElementById('widow');
var allLogos = document.querySelectorAll('.med-image');
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
// display emojis
var hulkEmoji = document.getElementById('hulkEmoji');
var ironManEmoji = document.getElementById('ironManEmoji');
var capAmEmoji = document.getElementById('capAmEmoji');
var thorEmoji = document.getElementById('thorEmoji');
var widowEmoji = document.getElementById('widowEmoji');
var allEmojis = document.querySelectorAll('.emoji');
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
    }
});


// event handlers
function playGame(choice) {
    show(changeGameButton, 'hidden');
    takeBothTurns(choice);
    setTimeout(displayBothFighters, 1000);
    setTimeout(replayGame, 2000);
};

function clearGame() {
    game.choices = ['ironMan', 'capAm', 'thor'];
};

function replayGame() {
    hide(resultsImages, 'hidden');
    updateInfo(winnerAnouncement, 'Choose your fighter!');
    decideReplay();
};

function decideReplay() {
    if (game.type === 'spicy') {
        show(gameChoiceImages, 'hidden');
        displayClassic();
    } else if (game.type === 'classic') {
        show(gameChoiceImages, 'hidden');
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
        element.src = "assets/widow.png";
        element.alt = "black widow logo";
    };
};

function displayEmoji(event) {
    show(event.target.nextElementSibling, 'visible');
};

function pickNewGame(event) {
    hide(gameChoiceImages, 'hidden');
    hide(resultsImages, 'hidden');
    hide(changeGameButton, 'hidden');
    show(classicButton, 'hidden');
    show(spicyButton, 'hidden');
    clearGame();
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
    show(gameChoiceImages, 'hidden');
    hide(classicButton, 'hidden');
    hide(spicyButton, 'hidden');
    hide(changeGameButton, 'hidden');
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