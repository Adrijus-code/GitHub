
const btnAdd = document.querySelector("#btnAdd")
const btnMin = document.querySelector("#btnMin")
const btnMul = document.querySelector("#btnMul")
const btnDiv = document.querySelector("#btnDiv")
const p = document.querySelector("p")
console.log(p.innerHTML);
p.innerHTML = "hi meee"

const input1 = document.querySelector("#input1")
const input2 = document.querySelector("#input2")


// btnAdd.addEventListener("click", add)
// btnMin.addEventListener("click", minus)
// btnMul.addEventListener("click", multiply)
// btnDiv.addEventListener("click", division)

// function add(){           
//     alert( parseInt(input1.value) + parseInt(input2.value))
//     input1.value= ""
//     input2.value= ""
// }

// function minus(){           
//     alert( parseInt(input1.value) - parseInt(input2.value))
//     input1.value= ""
//     input2.value= ""
    
// }

// function multiply(){           
//     alert( parseInt(input1.value) * parseInt(input2.value))
//     input1.value= ""
//     input2.value= ""
    
// }

// // console.log("2" === 2);


// function division(){
//     if (input2.value === "0"){
//         alert("you cannot devide by 0!")
//         return
//     }           
//     alert( parseInt(input1.value) / parseInt(input2.value))
//     input1.value= ""
//     input2.value= ""

// }
// // console.log( parseInt("123")+4);


btnAdd.addEventListener("click", operation)
btnMin.addEventListener("click", operation)
btnMul.addEventListener("click", operation)
btnDiv.addEventListener("click", operation)
document.body.addEventListener("click", operation)

function operation(e){
    console.log(e)
    // alert(`input 1 : ${input1.value} /// input 2 : ${input2.value}`)
    if(e.target.innerHTML == "+"){
        alert("addition")
    }
    if(e.target.innerHTML == "-"){
        alert("substraction")
    }
    if(e.target.innerHTML == "*"){
        alert("multiplication")
    }
    if(e.target.innerHTML == "/"){
        alert("division")
    }
}