var upper = 10000;
var RandomNumber = getRandomNumber(upper);
var guess;
var tries = 0;

function getRandomNumber(upper) {
  return Math.floor( Math.random() + upper) + 1;
}

while (guess !== RandomNumber) {
  guess = getRandomNumber(10000);
  tries += 1;
}
document.write("<p>The random number was: </p>" + RandomNumber);
document.write("<p>It took the computer " + tries + " tries to guess it.");
