# Rock, Paper, Scissors: Mod 1 Final Solo Project

## Overview 

The Mod 1 Final Solo Project was the age old game of Rock, Paper, Scissors - with a unique twist! The project [specs](https://frontend.turing.edu/projects/module-1/rock-paper-scissors-solo.html) outlined some basic rules to follow:

1. A Game file that contains the two players (user and computer), the style of game (classic or **spicy** ), the choices available with each game type, the winner of each game, and how that winner is determined
2. A Player file that contains the information of each player (name, emoji, wins, and choice), how they take their turn, and a way to store their success during the game
3. A main file that will act like as a vehicle to update the "DOM" (visuals on site) based on the content of the Game and Player files
4. A basic match of composition

## Learning Goals

With the Mod 1 Final Solo project, I was nervously excited to put all the skills I had developed over the past 6 weeks to the test and truly show case my knowledge while still having fun. At the beginning of the project, our instructor Hannah Hudson gave a really thoughtful AMA on the power of efficiently using Cascading Style Sheets and I was looking forward to incorporating what I gained from that presentation into the project. Additionally, it would have been my first attempt at including the feature of ```localStorage``` into the application as a means to persist past game data for the user to return to. Lastly, it was my final opportunity in Mod 1 to prove that I could write DRY JavaScript functions using SRP, as well as appropriately distinguising between the DOM and Data Model.

## Composition

Since the composition only required a loose match, we were given the freedom of designing our own theme. I chose to incorporate the **The Avengers** characters from *Marvel Comics*. The classic version of the game allows the user to pick from the beloved "Big 3": Iron Man, Captain America, and Thor Odison. If the user chooses to play the spicy version of the game, they will then have the choice to select between The Incredible Hulk and Black Widow, too.

**Classic Rules**
- Iron Man **>** Captain America
- Captain America **>** Thor Odison
- Thor Odison **>** Iron Man

**Spicy Rules**
- Iron Man **>** Captain American **&&** The Incredible Hulk
- Captain America **>** Thor Odison **&&** Black Widow
- Thor Odinson **>** Iron Man  Black **&&** Widow
- The Incredible Hulk **>** Captain **&&** America Thor Odinson
- Black Widow **>** Captain Ammerica **&&** The Incredible Hulk

## Basic Game Play

Upon page load, the user will see the game board in the center of the page with a fancy title (mouse over effect!) and a message asking them to choose their game type. Their game type will be decided by the action of clicking on either the classic or spicy buttons found at the bottom of the game board. On either side of the game board, the user will see the two players (human user: left, computer: right) with an emoji that represents them and a score of 0. The user will also be pleasantly surprised to see their cursor is represented by the iconic Vibranium shield wielded by Captain America.

After selecting their game type, the game board will populate with the super hero logos that represents their decision and the text will ask them to pick their "fighter". Classic game type displays three logos, meanwhile the spicy game type displays five logos. As the cursor hovers over the different options in both versions, the icon will change to be a cute 8-bit version of whatever the larger icon will be. Additionally, a *slight* opacity will be added, just to notify the user that those logos are clickable. Once the decision is made, an emoji appears underneath the user's pick and the computer will randomly select one of the options that are available to them within that specific game type. 

A "New Game" button will also appear, but all currently in-view buttons will gain a *heavy* opacity to display that they are disabled until the game board has completed the round. The two characters chosen (both user and computer) will display larger on the screen, the text will announce the winner, scores are logged within the side panels, and finally the previous game type is redisplayed while all buttons become enabled again. If the user would like to continue playing that specific game type, they may keep clicking on the current logos or direct themselves to the home screen via the New Game button and pick a different version.

##

