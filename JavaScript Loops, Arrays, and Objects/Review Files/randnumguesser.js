var counter = 0;
var randNum;
var randNumGuess;

 function randomNumber(upper) {
   return Math.floor(Math.random() * upper) + 1;
 }

randNum = randomNumber(10000);
randNumGuess = '';

while (randNumGuess != randNum) {
  randNumGuess = randomNumber(10000);
  console.log(randNumGuess);
  counter += 1;
}

document.write('The number was ' + randNum + ' It took this sucker ' + counter + ' tries to guess that number.');

if (counter > 1000) {
  document.write('<br/> Wow, that\'s slow as shit.');
}
