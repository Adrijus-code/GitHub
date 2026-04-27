
const display = document.querySelector('#display')
const buttons = document.querySelectorAll('.button')

for(const button of buttons){
    button.addEventListener('click',buttonClicked)
}

let value1 = 0
let value2 = 0
let operator = ''

function buttonClicked(e){
    if("1234567890.".includes(e.target.innerText)){
        
        if(display.innerText == "0"){
            display.innerText = ''
        }
        display.innerHTML += e.target.innerText
    }
    
    else if(e.target.innerText === 'C' || e.target.innerText === 'CE'){
        display.innerText = '0'
        operator = ""
        value1 = 0
        value2 = 0
    }else if(e.target.innerText === 'DEL'){
        let displayStr = display.innerText
        let delLast = displayStr.substring(0, displayStr.length - 1)
        display.innerHTML = delLast
    }else if("+/X-".includes(e.target.innerText)){
        value1 = Number(display.innerText)
        display.innerHTML = ""
        operator  = e.target.innerText
        
    }
    else if(e.target.innerText === "="){
        value2 = Number(display.innerText)
        if(operator == "+"){
            display.innerHTML = value1 + value2
        }
        else if( operator == "-"){
            display.innerHTML = value1 - value2
        
        }
        else if( operator == "X"){
            display.innerHTML = value1 * value2
        }
        else if( operator == "/"){
            display.innerHTML = value1 / value2
        }
    }

}
