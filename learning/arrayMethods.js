let arr = [21, -65, 76, 3, 27]

// foreach : void -----------------------------------------------------------

// arr.forEach(num => {
//     if(num > 0 ){
//         console.log(num);
//     }
// })


// filter : array -----------------------------------------------------------

// option 1

let positves = arr.filter(num => {
    return num > 0
})

positves.forEach(num => {
    console.log("----"+num+"----");
})


// Option 2 

// arr.filter(num => {
//     return num > 0
// }).forEach(num => {
//     console.log(num);
// })



// includes : boolean -----------------------------------------------------------

let contains = arr.includes(-3)
console.log(contains);

console.log(arr.includes(44));




// every : boolean -----------------------------------------------------------

let all_positives = arr.every(num => {
    return num > 0
})

console.log(all_positives);

// some : boolean -----------------------------------------------------------

let some_are_positives = arr.some(num => {
    return num > 0
})

console.log(some_are_positives);


// map : array ----------------------------------------------------------------

let doubles = arr.filter(num => {
    return num > 0
}).map(num => {
    return num * 2
})

console.log(doubles);

let triples = arr.map(num => {
    return num * 3
})

console.log(triples);
