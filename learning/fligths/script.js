
const people = [
    {
        firstName:"James",
        lastName:"Bond",
        age: 50,
        phoneNumber: 69333420,
        father : {
            name :"dad", 
            age : 80
        }
    },
    {
        firstName:"Donald",
        lastName:"Trum",
        age: 99,
        phoneNumber: 5555552    
    },
    {
        firstName:"Johm",
        lastName:"Krasinski",
        age: 45,
        phoneNumber: 99888762
    },
    {
        firstName:"Mark",
        lastName:"Karck",
        age: 10,
        phoneNumber: 6455545746
    },
    {
        firstName:"Salah",
        lastName:"Mohamed",
        age: 30,
        phoneNumber: 5
    }
]

const tableBody = document.querySelector('tbody')

function displayPerson(person){
    return `<tr>
                    <td>${person.firstName}</td>
                    <td>${person.lastName}</td>
                    <td>${person.age}</td>
                    <td>${person.phoneNumber}</td>
                </tr>`
}
// function displayPerson({firstName, lastName, age, phoneNumber }){
//     return `<tr>
//                     <td>${firstName}</td>
//                     <td>${lastName}</td>
//                     <td>${age}</td>
//                     <td>${phoneNumber}</td>
//                 </tr>`
// }

people.forEach(person =>{
    tableBody.innerHTML += displayPerson(person)
})

// console.log(people[0].father.name);


let person1 = {
    firstName:"Salah",
    lastName:"Mohamed",
    age: 30,
    phoneNumber: 5
}

let {age, firstName : f_name, lastName: l_name} = person1
