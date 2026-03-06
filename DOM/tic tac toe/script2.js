
const boxes = document.querySelectorAll(".box")

for (let box of boxes){
    box.addEventListener("click", click)
}

function click(e){
    e.target.innerHTML = "X"
}