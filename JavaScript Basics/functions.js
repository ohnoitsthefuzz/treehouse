


function getRandomNumber(upper,lower) {
  var randomNumber = Math.floor( Math.random() * (upper - lower + 1) + lower);
  if (isNaN(upper) || isNaN(lower)) {
    throw new Error('Digits only people, strings not permitted.');
  }
  return randomNumber;
}
document.write(getRandomNumber(34,34  ));
/*
var alertRandom = function () {
    var randomNumber = Math.floor( Math.random() * 6) + 1;
    alert(randomNumber);
};

function goToCoffeeShop() {
  return "Espresso is on its way.";
}*/
/*
function getArea(width, length, unit) {
  var area = width * length;
  return area + "" + unit;
}
console.log(getArea(10,20, " sq ft"));
*/
