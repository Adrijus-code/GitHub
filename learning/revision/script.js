const search_input = document.querySelector('.search-input')
const min_age_input = document.querySelector('.min-age-input')
const max_age_input = document.querySelector('.max-age-input')
const isAlive = document.querySelector('#isAlive')
const container = document.querySelector('.container')

search_input.addEventListener('input',search)
isAlive.addEventListener('input',search)

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

console.log(`${people[0].name} is ${people[0].age} and she ${people[0].alive === true ? "alive":"dead"}`)

function display(person){
    const {name,age=1,image, alive} = person
    return `
        <div>
            <h1>${name}</h1>
            <img src=${image} alt="">
            <p>${age}</p>
            <p>${alive === true ? "is alive": "dead"}</p>
        </div>`
}

console.log(display(people[0]))

// people.forEach(p =>{
//     console.log(display(p));
// })

// const oldPeople = people.filter(person =>  person.age > 40 )

const oldPeople = people.filter(person => {
    return person.age > 40
})

const namesOfPeople = people.map(person=>{
    return person.name
})

const evenAges = people.map(person=>{
    return person.age
}).filter(age =>{
    return age % 2 === 0 && age > 40
})

// ["diana","ethan","Fiona"]
const namesWithFive = people.filter(person=>{
    return person.name.length === 5
}).map(person=>{
    return person.name
})

const firstThreeLetters = people.map(person=>{
    return person.name.substring(0,3)
})



// document.body.innerHTML = 'Hello'
// document.body.innerHTML += '<br>Hi'

function displayInTheDom(arr){
    let str = ''
    arr.forEach(person => {
        str += `<p>${display(person)}</p>`
    });
    document.body.innerHTML += str
}

// cosole.log( people.map(person=>{
//     return person.age
// }))

function displayPeople(peopleArr){
    let str = ""
    peopleArr.forEach(person=>{
        str += display(person)
    })
    container.innerHTML = str
}

function search(){    
    
    const search_input_value = search_input.value
    const min_age_input_value = min_age_input.value || 0
    const max_age_input_value = max_age_input.value || 130

    const filteredArr = people.filter(person=>{
        return person.name.toLowerCase().includes(search_input_value.toLowerCase()) 
        && person.age > Number(min_age_input_value) 
        && person.age < Number(max_age_input_value)
        && person.alive === isAlive.checked
    })
    displayPeople(filteredArr)
    
}


// console.log(people)
// console.log(namesOfPeople)