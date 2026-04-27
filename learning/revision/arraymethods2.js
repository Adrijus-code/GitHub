
const people = [
    { 
        name: "Alice", 
        age: 28, 
        image: "https://randomuser.me/api/portraits/women/1.jpg", 
        alive: true 
    },
    { 
        name: "Bob", 
        age: 35, 
        image: "https://randomuser.me/api/portraits/men/2.jpg",
        alive: true 
    },
  { name: "Charlie", age: 50, image: "https://randomuser.me/api/portraits/men/3.jpg", alive: false },
  { name: "Diana", age: 22, image: "https://randomuser.me/api/portraits/women/4.jpg", alive: true },
  { name: "Diko", age: 22, image: "https://randomuser.me/api/portraits/women/4.jpg", alive: true },
  { name: "Ethan", age: 40, image: "https://randomuser.me/api/portraits/men/5.jpg", alive: true },
  { name: "Fiona", age: 31, image: "https://randomuser.me/api/portraits/women/6.jpg", alive: true },
  { name: "George", age: 47, image: "https://randomuser.me/api/portraits/men/7.jpg", alive: false },
  { name: "Hannahd", age: 26, image: "https://randomuser.me/api/portraits/women/8.jpg", alive: true },
  { name: "Ian", age: 34, image: "https://randomuser.me/api/portraits/men/9.jpg", alive: true },
  { name: "Julia", age: 29, image: "https://randomuser.me/api/portraits/women/10.jpg", alive: true },
  { name: "Kevin", age: 55, image: "https://randomuser.me/api/portraits/men/11.jpg", alive: false },
  { name: "Laura", age: 24, image: "https://randomuser.me/api/portraits/women/12.jpg", alive: true },
  { name: "Michael", age: 38, image: "https://randomuser.me/api/portraits/men/13.jpg", alive: true },
  { name: "Nina", age: 33, image: "https://randomuser.me/api/portraits/women/14.jpg", alive: true },
  { name: "Oscar", age: 41, image: "https://randomuser.me/api/portraits/men/15.jpg", alive: true },
  { name: "Paula", age: 27, image: "https://randomuser.me/api/portraits/women/16.jpg", alive: true },
  { name: "Quentin", age: 49, image: "https://randomuser.me/api/portraits/men/17.jpg", alive: false },
  { name: "Rachel", age: 30, image: "https://randomuser.me/api/portraits/women/18.jpg", alive: true },
  { name: "Steve", age: 36, image: "https://randomuser.me/api/portraits/men/19.jpg", alive: true },
  { name: "Tina", image: "https://randomuser.me/api/portraits/women/20.jpg", alive: true },
];

// Steve is 36 and is alive

console.log(people.map(person=>{
    return person.name
}))

// Option1
let filtered =  people.map(person=>{
    return person.age % 2 === 0
})
console.log(filtered)

// Option2
console.log(
    people.map(person=>{
        return person.age % 2 === 0
    })
)


people.forEach(person=>{
    // console.log( "hii")
    console.log( `${person.name} is ${person.age} and ${person.alive ? "is alive":"dead"}`)
})
// console.log(people.map(person=>{
//     return `${person.name} is ${person.age} and ${person.alive ? "is alive":"dead"}`
// }))
// even_ages = [true, false]