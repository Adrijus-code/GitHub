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
                            //condition
    // if current letter is x change it to O if not then change to X
    current_letter =   current_letter == "X" ?    "O" : "X"

}

// checkGameOver()
// function checkGameOver(){

// }