let name = "Adrijus"
let age = 16;


// age = age + 3
// age += 3
age++


// hi, my name is adrijus and i'm 26 years old
console.log("Hi, my name is "+name+" and i'm "+age+" years old")
console.log(`Hi, my name is ${name} and i'm ${age} years old`)

let is_old_enough = age >= 18
// console.log(is_old_enough);


if (is_old_enough == true){
    console.log(`${name} is old enough to drive`);
}
else{
    console.log(`${name} is NOT old enough to drive`);
}


console.log("5" == 5); // true 
console.log("5" === 5);// false



//  initialization                 condition               incrementation
for(let counter=0;               counter<100;                    counter++){
    console.log(`${name} is old enough to drive ${counter}`);
    console.log("hii");
}


// console.log("defiuerhfui");



let countries = ["Algeria","Lithuania","China","Canada","France"]

console.log(countries.length);
console.log(countries);

// writing into the first index
countries[0] = "ALEGRIIIA"
console.log(countries);


// reading from the first index
console.log(countries[0]);
// console.log(countries[1]);


// console.log(countries[0]);


// let numbers = [21, 65, 87, 43, 66, 65, 87, 43, 66, 65, 87, 43, 66, 65, 87, 43, 66, 65, 87, 43, 66, 65, 87, 43, 66, 65, 87, 43, 66, 65, 87, 43, 66, 65, 87, 43, 66, 65, 87, 43, 66, 65, 87, 43, 66, 65, 87, 43, 66, 65, 87, 43, 66, 65, 87, 43, 66, 65, 87, 43, 66, 65, 87, 43, 66, 65, 87, 43, 66, 65, 87, 43, 66, 65, 87, 43, 66, 65, 87, 43, 66, 65, 87, 43, 66, 65, 87, 43, 66, 65, 87, 43, 66, 65, 87, 43, 66, 65, 87, 43, 66, 65, 87, 43, 66, 65, 87, 43, 66, 65, 87, 43, 66, 65, 87, 43, 66, 65, 87, 43, 43]
let numbers = [21, 65, 87, 43]

// total = 0 + 21 + 65 + 87 + 43 
// i = 0 + 1 + 1 + 1 + 1

let total = 0
for(let i=0; i<numbers.length; i++){
    total += numbers[i]
}
console.log(total);



// console.log(numbers[numbers.length - 1])




function sum2numbers(a, b){
    let total = a+b
    return total / 2;
}

console.log(sum2numbers(22, 6))  // 14
console.log(sum2numbers(100, 20))// 60

function multiply(a, b, c){
    let total = a * b * c
    return total;
}
console.log(multiply(9, 3, 5))

function sumArrayNum(arr){
    let total =  arr[0] + arr[arr.length - 1]
    return total;
}
console.log("---------------");

console.log(sumArrayNum([4, 76, 8])) // 12
console.log(sumArrayNum([99, 21, 12, 55])) // 154
console.log(sumArrayNum(numbers)) // 64



