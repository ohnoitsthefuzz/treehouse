var questions = 3;
var questionsLeft = ' [' + questions + ' questions left]';
var adjective = prompt("Please enter an adjective." + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var verb = prompt("Please enter a verb." + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var adverb = prompt("Please enter an adverb." + questionsLeft);
alert("Thanks! You're done now.");
var madlibs = "John had a really " + adjective + " problem. He had forgotten to " + verb + " his pet rock before running " + adverb + " out the door this morning.";
document.write(madlibs);
var parseExample = parseInt('.1 FTE');
document.write(parseExample);

var temperature = 37.5;
alert(Math.round(temperature)); //yaaaaay, first math object created!
