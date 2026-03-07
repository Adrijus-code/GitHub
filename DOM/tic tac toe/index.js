const boxes = document.querySelectorAll(".box")


for(let box of boxes){
    box.addEventListener("click", something)
}

let current_letter  = "X"

function something(e){
    
    // if its not empty do nothing
    if(e.target.innerHTML != ""){
        return
    }

    // change the targets content to current letter
    e.target.innerHTML = current_letter
    checkGameOver()
                            //condition
    // if current letter is x change it to O if not then change to X
    current_letter =   current_letter == "X" ?    "O" : "X"
    
}

// checkGameOver()
// function checkGameOver(){

// }











function checkGameOver(){
    const winnerp = document.getElementById("winner")
    const winningCombos = [[0,1,2],[3,4,5],[6,7,8],
                            [0,3,6], [1,4,7], [2,5,8],
                            [0,4,8],[2,4,6]]

    for(let i = 0; i < winningCombos.length; i++){
        let combo = winningCombos[i]
        let a = combo[0]
        let b = combo[1]
        let c = combo[2]
        if(boxes[a].innerHTML === current_letter && boxes[b].innerHTML === current_letter && boxes[c].innerHTML === current_letter){
            winnerp.textContent = `${current_letter} won`
        }
    }
}