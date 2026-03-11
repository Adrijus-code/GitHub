let people = [ 
    {
        f_name : "salah",
        age : 30,
        languages : ["ar","fr","en","sp"],
        alive : true
    }
    ,
    {
        f_name : "anis",
        age : 31,
        languages : ["ar","fr"],
        alive : true
    }
    , 
    {
        f_name : "Adrijus",
        age : 26,
        languages : ["ar","fr","ru"],
        alive : true
    },
    {
        f_name : "salah",
        age : 30,
        languages : ["ar","fr","en","sp"],
        alive : true
    }
    ,
    {
        f_name : "anis",
        age : 31,
        languages : ["ar","fr"],
        alive : false
    }
    , 
    {
        f_name : "Adrijus",
        age : 26,
        languages : ["ar","fr","ru"],
        alive : true
    },
    {
        f_name : "salah",
        age : 30,
        languages : ["ar","fr","en","sp"],
        alive : true
    }
    ,
    {
        f_name : "anis",
        age : 31,
        languages : ["ar","fr"],
        alive : true
    }
    , 
    {
        f_name : "Adrijus",
        age : 26,
        languages : ["ar","fr","ru"],
        alive : true
    },
    {
        f_name : "salah",
        age : 30,
        languages : ["ar","fr","en","sp"],
        alive : true
    }
    ,
    {
        f_name : "anis",
        age : 31,
        languages : ["ar","fr"],
        alive : true
    }
    , 
    {
        f_name : "Adrijus",
        age : 26,
        languages : ["ar","fr","ru"],
        alive : true
    }
]

const container = document.querySelector('#container')

function displayPerson(person){
    return `My name is ${person.f_name} im ${person.age} i speak ${person.languages.length} languages and i am ${person.alive ? "alive" : "dead"}`
}

people.filter(person =>{
    return person.languages.length > 2 && person.alive == true
}).forEach(trilangual_person =>{
    container.innerHTML += `<p>  ${displayPerson(trilangual_person)} </p>`
    // container.innerHTML += "<p>"+ displayPerson(trilangual_person) +"</p>"
})