var upper = 10000;
var randomNumber = getRandomNumber(upper);
var guess;
var tries = 0;

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper) + 1;
}

while (guess !== randomNumber) {
  guess = getRandomNumber(upper);
  tries += 1;
}
document.write("<p>The random number was: " + randomNumber + " </p>" );
document.write("<p>It took the computer " + tries + " tries to guess it.</p>");
