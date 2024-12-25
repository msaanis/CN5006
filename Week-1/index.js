global.prompt = require('prompt-sync')();
//console.log("This is my first programe ")
//console.log("Well come John your month salary is 500000")

//const num1 = 5;
//const num2 = 3;

//const sum = num1 + num2;
//console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);

//const number = parseInt(prompt("Enter a number: "));
//if (number > 0) {
// console.log("The number is positive");
//}
//else if (number == 0) {
 //console.log("The number is zero");
//}
//else {
// console.log("The number is negative");
//}


function performOperations(num1, num2) {
    console.log("Addition: " + (num1 + num2));
  
    console.log("Subtraction: " + (num1 - num2));
  
    console.log("Multiplication: " + (num1 * num2));
  
    if (num2 !== 0) {
      console.log("Division: " + (num1 / num2));
    } else {
      console.log("Division by zero is not allowed.");
    }
  }
  
  const num1 = 20;
  const num2 = 30;
  
  performOperations(num1, num2);
  