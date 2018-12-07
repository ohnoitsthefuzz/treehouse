// This program is quiz showgame, please to be having fun!//

var quiz = [
	['How many states are there in the United States of America?', 'fifty'],
	['What was the last state to be admitted to the Union?', 'hawaii'],
	['Who shot Mr. Burns?', 'maggie']
	];
var answer	
var correct;
var wrong;
var numberCorrect = 0;
var numberWrong = 0;

function print(message) {
	document.write(message);
}


function printCorrect(questionscorrect) {
	var correctHTML = '<h1>These are the questions you got right:</h1>';
	correctHTML += '<ol>' + '<li>' + questionscorrect + '</li>'+ '</ol>';
  print(correctHTML);
}

function printWrong(questionswrong) {
	var wrongHTML = '<h1>These are the questions you got wrong:</h1>';
	wrongHTML += '<ol>' + '<li>' + questionswrong + '</li>'+ '</ol>';
  print(wrongHTML);
}

for (var i = 0; i < quiz.length; i += 1) {
	answer = prompt(quiz[i][0]);
	answer = answer.toLowerCase();

 if (answer === quiz[i][1]) {
		correct += '<li>' + quiz[i][0] + '</li>';
		numberCorrect += 1;
	} else {
		wrong += '<li>' + quiz[i][0] + '</li>'; 
		numberWrong += 1;
	}
}//for

document.write('<h1> You got ' + numberCorrect + ' questions correct.</h1>');

document.write('<h1> You got ' + numberWrong + ' questions wrong.</h1>');

printCorrect(correct);

printWrong(wrong);

