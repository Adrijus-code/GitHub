let arr = [1, 2, 3];

arr.push(4);

arr[2] = 55;

console.log(arr);
//how many el in array (2 ways)
//how to add in the end (2 ways)
//how to add in the begining
//how to add in any place
// how to find value (2 ways)

//10,100,1000, 10000, 100_000 <12s
// let copy = [];
// for (let i = 0; i < arr.length; i++) {
//   copy.push(arr[i] * 2);
// }
//1_000_000, 1_000_000_000 <3
//much faster without dynamic realocation
let copy = Array(arr.length);
console.log(copy);
for (let i = 0; i < arr.length; i++) {
  copy[i] = arr[i] * 2;
}

console.log(copy);
