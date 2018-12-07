//Quiz begins, score = # of correct answers, intiially zero
var score = 0;

//Asking a question and evaluating the response
var question1 = prompt("What is 2 + 2?")
  if ( parseInt(question1) === 4 ) {      //parses string input into a number
    alert("Correct!");
    score += 1;
    console.log(score);
  } else {
    alert("Sorry, that's not right.");
  }
var question2 = prompt("What is the star at the center of our solar system called?");
  if ( question2.toUpperCase() === "SUN") {
    alert("Correct!");
    score += 1;
    console.log(score);
  } else {
    alert("Sorry, that's not right.");
  }
var question3 = prompt("What is the capital of Germany?");
    if ( question3.toUpperCase() === "BERLIN") {
      alert("Correct!");
      score += 1;
      console.log(score);
    } else {
      alert("Nein! Das ist falsch!");
    }
var question4 = prompt("What is the square root of 100?");
    if ( parseInt(question4) === 10 ) {
      alert("Correct!");
      score += 1;
      console.log(score);
    } else {
        alert("Sorry, that's not right.");
    }
var question5 = prompt("What is the answer to Life, the Universe, and Everything?");
  if ( parseInt(question5) === 42 ) {
        alert("Correct!");
        score += 1;
        console.log(score);
    } else {
        alert("Sorry, that's not right.");
        }
var crown = "";
  if ( score === 5) {
    crown = "Tungsten Carbide Crown! Hail to the King, baby!";
  } else if ( score === 4) {
    crown = "Silver Crown!";
  } else if ( score === 3 || 2) {
    crown = "Aluminum Crown!";
  } else if (score === 1 || 0) {
    crown = "Dumbass Crown!";
  }
  alert("You got " + score + " questions correct! You've earned the " + crown);
