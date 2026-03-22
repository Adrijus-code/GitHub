let arr = [31, 42, -6,  13, 84]
// let arr = [2, 42, -6,  13, 84] true 
// let arr = [5, 42, -6,  13, 2] true 
// let arr = [5, 42, -6,  13, 3] true 
// let arr = [5, 42, -6,  13, 8] false 




function sameFirstLast (arr){
    return arr[0] === arr[arr.length - 1]
}

function hasTwoOrThree(arr){
    return arr[0]  === 3 || arr[arr.length - 1] === 3 || arr[0]  === 2 || arr[arr.length - 1] === 2
}

console.log(sameFirstLast(arr))
console.log(sameFirstLast([12, 54, 2, 54, 12]))





























let nums =  [2, 76, 45, 5]
// [3, 76, 45, 2] true 
// [8, 76, 45, 2] false 
// [2, 76, 45, 2] false 

function checkTwoAndThree(arr){
    return arr[0] === 2  && arr[arr.length - 1] === 3 || arr[0] === 3  && arr[arr.length - 1] === 2
}

console.log(checkTwoAndThree(nums))