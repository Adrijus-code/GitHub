
window.addEventListener('click', handleClick)

function handleClick(e){
    //const body = document.querySelector('body')
    //console.log(e)
    // document.body.innerHTML += `<div class="circle"></div>`
    const div = document.createElement('div')
    div.classList.add("circle")
    let rand_number = Math.floor(Math.random() * 200) + 100


    div.style.width = rand_number+"px"
    div.style.height = rand_number+"px"
    div.style.top = (e.clientY - Math.floor(rand_number / 2)) + "px"
    div.style.left = (e.clientX - Math.floor(rand_number / 2)) + "px"
    document.body.append(div)
    // document.body.style.background = "red"
    console.log(e)
}

