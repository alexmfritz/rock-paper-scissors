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

