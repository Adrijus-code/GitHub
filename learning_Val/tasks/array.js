let arr = [1, 2, 3];

arr.push(4);

arr[2] = 55;
arr.splice()
console.log(arr);
//how many el in array (2 ways)
//arr.length / Object.keys(arr).length

//how to add in the end (2 ways)
//arr.push / arr[arr.length] = value / arr = [...arr, value]

//how to add in the begining
//arr.unshift() / arr = [value, ...arr]

//how to add in any place
//arr.splice(@index of which to insert to, 0(0=dont delete)-1(1=delete this many items) to delete or just shift to the right, value to insert)
// how to find value (2 ways)
//arr.find(), arr.indexOf(value)