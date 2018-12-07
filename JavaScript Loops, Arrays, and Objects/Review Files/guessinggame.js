var randomNumber = getRandomNumber(10);
var userGuess;
var guessCount = 0;

function getRandomNumber(upper) {
  return Math.floor(Math.random() * upper) + 1;
}

console.log(randomNumber);

//while parameters used to validate user input as a number from 1 to 10
do {
  userGuess = prompt('I\'m thinking of a number between 1 and 10. Can you guess what it is?');
} while (isNaN(parseInt(userGuess)) || userGuess > 10 || userGuess < 1);

do {
  userGuess = prompt('Nope, that wasn\'t it. Have another go m8.');
  guessCount += 1;
} while (parseInt(userGuess) !== randomNumber || isNaN(parseInt(userGuess)) || userGuess > 10 || userGuess < 1);


  document.write('Jeee-zus Christ, took you long enough to guess the number was ' + randomNumber + '. It only took you ' + guessCount + ' tries, r-tard.');
