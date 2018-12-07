var secondsPerMin = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;
var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;
var userAge = prompt("Please enter your age in years.");
userAge *= 365 * secondsPerDay; //Converts user input value from years to seconds
document.write(userAge);
