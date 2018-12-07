alert('This calculator will generate a random number between two numbers you enter.');
var userInput1 = prompt('Enter first number: ');
userInput1 = parseInt(userInput1);
var userInput2 = prompt('Enter second number: ');
userInput2 = parseInt(userInput2);
var dieRoll = Math.floor(Math.random() * userInput2) + userInput1;
alert('You rolled a ' + dieRoll);
