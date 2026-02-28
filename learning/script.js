let name = "Adrijus"
let age = 16;

// name += "@"
console.log(name);


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




let arr1 = [21, 65, 87, 43, 22]  // 324
let arr2 = [87, 87, 43, 211]   // 543
let arr3 = [87, 43, 22]       // 134
let arr4 = [21, 65, 87, 43, 98, 99, 65]  // 676

function addArray(arr){
    let total = 0;
    for (let i = 0; i < arr.length ; i++){
        total += arr[i]
    }
    return total
}

console.log("add ");

console.log(addArray(arr1))
console.log(addArray(arr2))
console.log(addArray(arr3))
console.log(addArray(arr4))

function avgArray(arr){
    let total = addArray(arr)
    return total / arr.length
}

console.log("avg");
console.log(avgArray(arr1))
console.log(avgArray(arr2))
console.log(avgArray(arr3))
console.log(avgArray(arr4))

// fives = 0 + 1 + 1 
// i =  5
// [32, 5, 76 5, 12] 

function fiveCounter(arr){
    let fives = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 5){
            fives++
        }
    }
    return fives
}

console.log(fiveCounter([32, 5, 76, 5, 12] ));
console.log(fiveCounter([32, 15, 76, 25, 12] ));


// xCounter

console.log(xCounter([32, 5, 76, 5, 12] , 5));
console.log(xCounter([32, 15, 76, 25, 12], 12 ));



function xCounter(arr, number){
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === number){
            total++
        }
    }
    return total;
}



let strArr = [21, 676, 43, 12] 

function returnString(arr){
    let string = "";
    for (let i = 0; i < arr.length; i++){
        string += arr[i] + ";"
    }
    return string;
}
console.log(returnString(strArr))


// [21, 76, 8, 65, 32]  [322, 6, 544]   "322;6;544;"

function largestArr(arr1, arr2){
    if ( addArray(arr1) >  addArray(arr2)){
        return returnString(arr1)
    }else{
        return returnString(arr2)
    }
}


let fiveArr = [21, 76, 5, 65, 32]
// [21, 5, 76, 65, 32]  false

function fiveChecker(arr){
    for (let i = 0; i < arr.length; i++){
        if(arr[i] === 5){
            return true;
        }
    }
    return false;
}
// function fiveChecker(arr){
//     let isFiveThere = false;
//     for (let i = 0; i < arr.length; i++){
//         if(arr[i] === 5){
//             isFiveThere = true;
//         }
//     }
//     return isFiveThere;
// }

console.log(fiveChecker(fiveArr))

function sumFirstHalf(arr){
    let firstHalf = arr.length / 2;
    let firstHalfTotal = 0;
    for (let i = 0; i < firstHalf; i++){
        firstHalfTotal += arr[i]
    }
    return firstHalfTotal;
}
function sumSecondHalf(arr){
    let firstHalf = arr.length / 2;
    let firstHalfTotal = 0;
    for (let i = firstHalf; i < arr.length; i++){
        firstHalfTotal += arr[i]
    }
    return firstHalfTotal;
}

console.log(sumSecondHalf(fiveArr))