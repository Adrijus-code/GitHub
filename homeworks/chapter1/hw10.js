// Homework 10:
// Create a variable with  value 10. Create another variable with value '10' . 
// The second value is a string. Add them together and print them out. 
// Write a comment describing what is happening in the program. Fix the problem is any.


let val1 = 10;
let val2 = '10';

let result = val1 + val2;
console.log(result);

// Its just adding them both as a string
// Have to turn the second value into a number too

let fixedResult = val1 + Number(val2);
console.log(fixedResult); 