var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;

function getRandomNumber(upper) {
  var num = Math.floor(Math.random() * upper) + 1;
  return num;
}

while (guessCount < 10) {
  guess = prompt('I am thinking of a number between 1 and 10. What is it?');
  guessCount += 1;
  if (parseInt(guess) === randomNumber) {
    correctGuess = true;
    break;
  }
  // if (i <= 0) {
  //   document.write("<p>Sorry, you have no guesses left</p>");
  // }
}

if ( correctGuess ) {
document.write('Noice!');
document.write('<p>It only took you ' + guessCount + ' tries!</p>');
} else (document.write('Sorry, you are out of guesses' ));
