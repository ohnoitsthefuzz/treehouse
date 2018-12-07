var num1;
var num2;
var message;
//Announces program to user
alert("Let's do some math!");
//Prompts user for input, validates the input, returns another prompt if isNan(input)
num1 = prompt("Please enter a number.");
  if (isNaN(parseFloat(num1))) {
      do {
        num1 = prompt("Sorry, that's not a number. Please enter a number, you silly goose.");
      } while (isNaN(parseFloat(num1)));
  }
num1 = parseFloat(num1);

//Prompts user for input, validates the input, returns different prompts if input is NaN or 0, which loop until the user provides a non-zero number.
num2 = prompt("Please enter a second  number.");
  do {
    if (isNaN(parseFloat(num2))) {
      do {
        num2 = prompt("Sorry, that's not a number. Please enter a number, you silly goose.");
        num2 = parseFloat(num2);
      } while (isNaN(parseFloat(num2)));
    }
    if (parseFloat(num2) === 0) {
      do {
        num2 = prompt("Nice try fucko, but we'll be doing some division, and you can't divide by zero. Enter a number that isn't zero. Jerk.");
        num2 = parseFloat(num2);
      } while (parseFloat(num2) === 0);
    }
  } while (isNaN(parseFloat(num2)) || parseFloat(num2) === 0);
num2 = parseFloat(num2);


// 6. Create a new variable -- message -- which you'll use to build
//    a complete message to print to the document
//    Start by creating a string that includes <h1> tags as well
//    and the two input numbers. The string should look something like this:
//    "<h1>Math  with the numbers 3 and 4</h1>" where the two numbers are
//    the values input from the user. Use string concatenation to create this
//    and make sure you actually perform the math on the values by
//    using the + symbol to add their values together

message = "<h1>Math with the numbers " + num1 + " and " + num2 + "</h1>";

// 7. Add another string to the message variable.
//    The string should look something like this after concatenation:
//    "3 + 4 = 7"
message += num1 + " + " + num2 + " = " + (num1 + num2);
// 8. Add a linebreak tag -- <br> -- to the message variable
message += "<br>";
// 9. Continue to add to the message variable to include strings
//    demonstrating multiplication, division and subtraction
//    For example:
//    "3 * 4 = 12"
//    "3 / 4 = 0.75"
//    "3 - 4 = -1"
message += num1 + " - " + num2 + " = " + (num1 - num2) + "<br>";
message += num1 + " X " + num2 + " = " + (num1 * num2) + "<br>";
message += num1 + " / " + num2 + " = " + (num1 / num2);
document.write(message);
// 10. Use the document.write() method to print the message variable
//     to the web page. Open the finished.png file in this workspace
//     to see what the completed output should look like
