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

![](https://media.giphy.com/media/FWWEFyQzsacic60XhD/giphy.gif)

Since the composition only required a loose match, we were given the freedom of designing our own theme. I chose to incorporate the **The Avengers** characters from *Marvel Comics*. The classic version of the game allows the user to pick from the beloved "Big 3": Iron Man, Captain America, and Thor Odison. If the user chooses to play the spicy version of the game, they will then have the choice to select between The Incredible Hulk and Black Widow, too.

![](https://media.giphy.com/media/AdGjNWM0nkmS0q1cSs/giphy.gif)

**Classic Rules**
- Iron Man **>** Captain America
- Captain America **>** Thor Odison
- Thor Odison **>** Iron Man

![](https://media.giphy.com/media/WZVFymQ1246VADrQCO/giphy.gif)

**Spicy Rules**
- Iron Man **>** Captain American **&&** The Incredible Hulk
- Captain America **>** Thor Odison **&&** Black Widow
- Thor Odinson **>** Iron Man  Black **&&** Widow
- The Incredible Hulk **>** Captain **&&** America Thor Odinson
- Black Widow **>** Captain Ammerica **&&** The Incredible Hulk

## Basic Game Play

Upon page load, the user will see the game board in the center of the page with a fancy title (mouse over effect!) and a message asking them to choose their game type. Their game type will be decided by the action of clicking on either the classic or spicy buttons found at the bottom of the game board. On either side of the game board, the user will see the two players (human user: left, computer: right) with an emoji that represents them and a score of 0. The user will also be pleasantly surprised to see their cursor is represented by the iconic Vibranium shield wielded by Captain America.

![](https://media.giphy.com/media/t93hAsL1SWtArHfLSp/giphy.gif)

After selecting their game type, the game board will populate with the super hero logos that represents their decision and the text will ask them to pick their "fighter". Classic game type displays three logos, meanwhile the spicy game type displays five logos. As the cursor hovers over the different options in both versions, the icon will change to be a cute 8-bit version of whatever the larger icon will be. Additionally, a *slight* opacity will be added, just to notify the user that those logos are clickable. Once the decision is made, an emoji appears underneath the user's pick and the computer will randomly select one of the options that are available to them within that specific game type. 

![](https://media.giphy.com/media/Hagnt97EcSQIsBSeXf/giphy.gif)

A "New Game" button will also appear, but all currently in-view buttons will gain a *heavy* opacity to display that they are disabled until the game board has completed the round. The two characters chosen (both user and computer) will display larger on the screen, the text will announce the winner, scores are logged within the side panels, and finally the previous game type is redisplayed while all buttons become enabled again. If the user would like to continue playing that specific game type, they may keep clicking on the current logos or direct themselves to the home screen via the New Game button and pick a different version.

![](https://media.giphy.com/media/WD0MqRqcXlS0iuIe74/giphy.gif)

Once the user has completed their game, they may exit the application and sleep easy knowing their game scores will remain the same until the next time that they return to play again.

## Challenges

The biggest challenge of the project for me was breaking down the game logic inside the Game class ```determineWinner``` function. The initial logic was pretty easy to create, but it was extremely wordy and I knew there was a better option to display my ability to follow DRY JavaScript functions and SRP. My solution was to assign the Player.choice to be an Object with key-value pairs. Each key represented the user choice, while the value of each key would be represented as an Array that contains the choices that user selection will beat in the game. In the end, I found how to turn the keys of an Object into an JavaScript Array to allow the user/computer to filter through them when making their decision. This solution allowed roughly 30 lines of code to turn into 10, which I am really proud of. 

![Screen Shot 2021-11-16 at 4 12 53 PM](https://user-images.githubusercontent.com/89096040/142088297-c6ee1c00-2f01-4124-8164-421e791a08d7.png)

## Successes 

The biggest success of the project was the creation of composition within HTML and CSS. As mentioned above, Hannah's AMA gave me a lightbulb moment in how to quickly and efficiently apply CSS while maintaining naming accurate convention and DRY-ness standards.

![Screen Shot 2021-11-16 at 4 39 07 PM](https://user-images.githubusercontent.com/89096040/142088443-69262852-48db-4361-8510-1accde487d91.png)

![Screen Shot 2021-11-16 at 4 40 00 PM](https://user-images.githubusercontent.com/89096040/142088509-18f4852f-30ce-4c9c-b0d5-6606d0526fb5.png)

## Future Features

- The option for two player mode
- A login screen that allows users to dynamically choose their name and emoji
- The option for users to choose between WHICH three/five options they play with out of a selection of many more Avengers/Marvel Comic's superheroes 
- Upon winning (no matter who wins), a selection of quotes from the winning character displays on the screen
- After **5** consistent losses in a row, a reset score button appears for the user because they will be mad that the computer or their friend keeps winning

## Technologies

- JavaScript, HTML, CSS
- VS Code
- GitHub
- Terminal
- Giphy

## Install 

- Fork this project to your own Github account
- Clone the repository to your local machine
- cd into the project
- Read this README thoroughly, then begin editting however you'd like to!

## Author/Links

Alex Fritz
- [LinkedIn](https://www.linkedin.com/in/alexmfritz/)
- [GitHub](https://github.com/alexmfritz)
- [Rock, Paper, Scissors Repo](https://github.com/alexmfritz/rock-paper-scissors)
- [Rock, Paper, Scissors Journal](https://gist.github.com/alexmfritz/87814a959c96614fa99c045dd5754466)
- [Deployable Link](https://alexmfritz.github.io/rock-paper-scissors/) - TBD after project review

## Project Manager

Hannah Hudson
