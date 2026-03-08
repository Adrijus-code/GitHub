
const boxes = document.querySelectorAll(".box")
const input = document.querySelector("input")

// input.addEventListener("input", func)

// function func(){
//     console.log(input.value)
// }

for (let box of boxes){
    box.addEventListener("click", handleClick)
}




  
let currentLetter = Math.random() > 0.5 ? "X" : "O"

// let currentLetter = ""
// if(Math.random() > 0.5){
//     currentLetter = "X"
// }else{
//     currentLetter = "O"
// }

let is_game_over = false

function handleClick(e){
    if(e.target.innerHTML !== "" || is_game_over == true){
        return
    }

    e.target.innerHTML = currentLetter;
    gameOver()
    currentLetter = currentLetter == "X" ? "O":"X"
    
}

function gameOver(){
    let winningCombinations = [[0,1,2], [3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    winningCombinations.forEach(combination => {
        check(combination[0], combination[1], combination[2])
    })

}

function check(a,b,c){
    if (boxes[a].innerHTML == currentLetter && boxes[b].innerHTML == currentLetter && boxes[c].innerHTML == currentLetter){
        alert(`${currentLetter} won`)
        is_game_over = true
    }
}



[32, 65, 87, 12].forEach(num => {
    console.log(num);
})