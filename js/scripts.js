// // Da Business Functions
// var add = function(number1, number2) {
//   return number1 + number2;
// };
//
// var subtract = function(number1, number2) {
//   return number1 - number2;
// };
//
// var times = function(number1,number2) {
// return number1*number2;
// };
//
// var divide = function(number1, number2) {
// return number1 / number2;
// }

//Da User Logic

// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
//
// var result = divide(number1, number2);
//
// alert(result);

// var weight = parseInt(prompt("how fat are you? in pounds"));
// var height = parseInt(prompt("how many inches tall are you?"));
//
//
// var bmi = function(weight, height) {
// return (weight / (Math.pow(height, 2)) * 703);
// };
//
// var output = bmi(weight,height);
// alert(output);



// var fahrenCels = parseInt(prompt("Enter a fahrenheit temp yo dog: "));
//
// var convert = function(fahrenCels) {
//   return ((fahrenCels - 32)*5/9);
// };
// alert(convert(fahrenCels));

var celsFahren = parseInt(prompt("Enter a Celsius temp yo dog: "));

var convert = function(celsFahren) {
  return ((celsFahren*1.8)+32);
};

alert(convert(celsFahren));
