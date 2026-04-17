
// Homework 12:
// create a string variable containing a value '10.6'. 
// Convert the variable into a float. Then convert it into an int. These are permanent changes.

let strVal = '10.6';


strVal = parseFloat(strVal);

strVal = parseInt(strVal);

console.log(strVal);
let numValue = parseInt(parseFloat(strVal));