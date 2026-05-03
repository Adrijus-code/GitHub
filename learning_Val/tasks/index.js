// // Task 1: Basic Reference Check
const obj1 = {name: "Alive"};
const obj2 = obj1;

obj2.name = "Bob";

// console.log(obj1.name)
// //It logs out Bob, because when you copy an object it only copies the reference to the value in memory, not the actual content

// //Task 2: Comparing Objects
// const a = {value:10}
// const b = {value:10}

// console.log(a===b)
// //It logs out false, because its comparing the references which are in memory and not the actual content

// //Task 3: Function Mutation
// function changeUser(user){
//     user.name = "Charlie"
// }

// const user1 = {name: "Alice"}
// changeUser(user1)

// console.log(user1.name)
// //It logs out Charlie, because the function is getting the reference to the object in memory
// //it goes to it and changes the name propery

// //Task 4:Reassignment vs Mutation

// function update(obj){
//     obj = {updated:true}
// }

// const data = {updated:false}
// update(data)

// console.log(data.updated)
// //It logs out false, because the function is trying to reassign 
// // the object which severs the original link to the memory address
// //and creates a completely new address in memory

// //Task 5: Shallow Copy Pitfall
// //const original = {nested: {count:1}}
// //const copy = {...original}

// copy.nested.count = 99

// console.log(original.nested.count)
// //It logs out 99, because when using the spread operator it only copies the top level properties,
// //nested properties still point to the original memory content

// //Task 6:Array Reference Behavior

// const arr1 = [1,2,3]
// const arr2 = arr1

// arr2.push(4)

// console.log(arr1)
// //It logs out [1,2,3,4], because in JS arrays are also objects so it points to the same memory location and updates it

// //Task 7:Object.freeze Trap
// const obj = Object.freeze({nested:{value:1}})

// obj.nested.value = 2

// console.log(obj.nested.value)
//It logs out 2, because it only freezes top level properties and not the nested ones

//Task 8: Deep Clone Practice
const original = { a:1, nested:{ b:2 } }

//const deepCopy = structuredClone(original)
const deepCopy = JSON.parse(JSON.stringify(original))

deepCopy.nested.b = 999

//console.log(original.nested.b)

//Task 9: Reference Loss

let obj = {value:1}
let ref = obj

obj = {value:2}

console.log(ref.value)

//Task 10: Nested Function Side Effects

function increment(obj){
    obj.count++
}
const counter = {count:0}
increment(counter)
increment(counter)

console.log(counter.count)
