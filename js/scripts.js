// Da Business Functions
var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var times = function(number1,number2) {
return number1*number2;
};

var divide = function(number1, number2) {
return number1 / number2;
};

// Da User Logic

$(function () {
  // addition
  $("form#calculate").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    // console.log(number1)
    var number2 = parseInt($("#input2").val());
    // console.log(number2)
    var operator = $("input:radio[name=operator]:checked").val();
    // console.log("1st number: " + number1);  // for debugging
    // console.log("2nd number: " + number2);  // for debugging
    // console.log("operator: " + operator);  // for debugging
    var result;

    if (operator === "add") {
      result = add(number1, number2);
    } else if (operator === "sub") {
      result = subtract(number1, number2);
    } else if (operator === "times") {
      result = times(number1, number2);
    } else if (operator === "div") {
      result = divide(number1, number2);
    }
    // console.log(result)
    $("#output").text(result);
    // console.log($("#add-output p").val())
  });
});

// // subtraction
//   $("form#subtract").submit(function(event) {
//     event.preventDefault();
//     var number1 = parseInt($("#sub1").val());
//     var number2 = parseInt($("#sub2").val());
//     var result = subtract(number1, number2);
//     $("#sub-output").text(result);
//   });
// // times
//   $("form#times").submit(function(event) {
//     event.preventDefault();
//     var number1 = parseInt($("#times1").val());
//     var number2 = parseInt($("#times2").val());
//     var result = times(number1, number2);
//     $("#times-output").text(result);
//   });
// // divide
//   $("form#divide").submit(function(event) {
//     event.preventDefault();
//     var number1 = parseInt($("#div1").val());
//     var number2 = parseInt($("#div2").val());
//     var result = divide(number1, number2);
//     $("#div-output").text(result);
//   });
//






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

// var celsFahren = parseInt(prompt("Enter a Celsius temp yo dog: "));
//
// var convert = function(celsFahren) {
//   return ((celsFahren*1.8)+32);
// };
//
// alert(convert(celsFahren));
