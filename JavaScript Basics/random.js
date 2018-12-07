./*
The Random Number Guessing Game
Generates a number between 1 and 6 and gives a player 2 attempts to guess that number*/

//assume the player didn't guess correctly
var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6 ) + 1;
console.log(randomNumber);
var guess = prompt('I am thinking of a number between 1 and 6. What is it?');
if ( parseInt(guess) === randomNumber ) {
  correctGuess = true;
} else if (parseInt(guess) < randomNumber) {
    var guessMore = prompt('Try again. The number I am thinking of is more than ' + guess);
    if (guessMore === randomNumber) {
      correctGuess = true;
    }
} else if (parseInt(guess) > randomNumber) {
    var guessLess = prompt("Try again. The number I am thinking of is less than " + guess);
    if (guessLess === randomNumber) {
      correctGuess = true;
      }
  }
if (correctGuess) {
  document.write("<p>That's right!</p>");
} else {
  document.write("<p>You lose!</p>");
}
