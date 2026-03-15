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
  { name: "Ethan", age: 40, image: "https://randomuser.me/api/portraits/men/5.jpg", alive: true },
  { name: "Fiona", age: 31, image: "https://randomuser.me/api/portraits/women/6.jpg", alive: true },
  { name: "George", age: 47, image: "https://randomuser.me/api/portraits/men/7.jpg", alive: false },
  { name: "Hannah", age: 26, image: "https://randomuser.me/api/portraits/women/8.jpg", alive: true },
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
  { name: "Tina", age: 25, image: "https://randomuser.me/api/portraits/women/20.jpg", alive: true },
];

console.log(people);

const container = document.querySelector('#container')
const min_age_input = document.querySelector("#min_age_input")
const max_age_input = document.querySelector("#max_age_input")
const filter_btn = document.querySelector("#filter_btn")
const name = document.querySelector("#name")

// container.innerText = "<p>Lorem ipsum dolor <br> sit amet consectetur adipisicing elit. Necessitatibus alias ex quibusdam illo expedita. Iusto vel, qui amet aspernatur facilis quam reprehenderit? Natus quas sunt veritatis rem in ex suscipit.</p>"
//container.innerHTML = "<p>Lorem ipsum dolor <br> sit amet consectetur adipisicing elit. Necessitatibus alias ex quibusdam illo expedita. Iusto vel, qui amet aspernatur facilis quam reprehenderit? Natus quas sunt veritatis rem in ex suscipit.</p>"

// looking for people between 20 and 30 years old

// filter_btn.addEventListener('click', ()=> displayPeople(min_age_input.value, max_age_input.value))
filter_btn.addEventListener('click', displayPeople)
console.log("Adrijus".includes("dr"));

function displayPeople(){
    let containers = ""
    people.filter(person =>{
        return person.age >= min_age_input.value && person.age <= max_age_input.value && person.name.includes(name.value)
    }).forEach(person =>{
        containers += displayPerson(person)
    })
    min_age_input.value = ""
    max_age_input.value = ""
    
    container.innerHTML = containers
}

people.forEach(person =>{
    container.innerHTML += displayPerson(person)
})

function displayPerson(person){
    // return `My name is ${person.f_name} im ${person.age} i speak ${person.languages.length} languages and i am ${person.alive ? "alive" : "dead"}`
    return `<div class="person">
                <h3 class="person-name">${person.name}</h3>
                <img class="person-img" src=${person.image}>
                <p class="person-age">${person.age}</p>
                <p class="person-alive">${person.alive == true ? "Alive":"Dead"}</p>
            </div>`
}
