const btn = document.getElementById("unit-btn")
const lengthEle = document.getElementById("length-p")
const volumeEle = document.getElementById("volume-p")
const massEle = document.getElementById("mass-p")


btn.addEventListener("click", function(){
    const input = document.getElementById("unit")
    let numberValue = Number(input.value)
    let feet = (numberValue * 3.2808399).toFixed(3)
    let meters = (numberValue * 0.3048).toFixed(3)
    let gallons = (numberValue * 0.264172052).toFixed(3)
    let litters = (numberValue * 3.78541178).toFixed(3)
    let pounds = (numberValue * 2.20462262).toFixed(3)
    let kilos = (numberValue * 0.45359237).toFixed(3)
    
    if (numberValue > 0){
        lengthEle.textContent = `${numberValue} meters = ${feet} feet | ${numberValue} feet = ${meters} meters`
        volumeEle.textContent = `${numberValue} liters = ${gallons} gallons | ${numberValue} gallons = ${litters} litters`
        massEle.textContent = `${numberValue} kilos = ${pounds} pounds | ${numberValue} pounds = ${kilos} kilos`
        input.value = ""
    } else{
        input.value = ""
        lengthEle.textContent = ""
        volumeEle.textContent = ""
        massEle.textContent = ""
    }
})