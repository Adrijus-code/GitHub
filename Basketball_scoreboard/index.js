let homeScore = 0
let guestScore = 0

function addOneToHome(){
    let score = homeScore += 1
    document.getElementById("home-score").textContent = score
}

function addTwoToHome(){
    let score = homeScore += 2
    document.getElementById("home-score").textContent = score
}

function addThreeToHome(){
    let score = homeScore += 3
    document.getElementById("home-score").textContent = score
}

function addOneToGuest(){
    let score = guestScore += 1
    document.getElementById("guest-score").textContent = score
}

function addTwoToGuest(){
    let score = guestScore += 2
    document.getElementById("guest-score").textContent = score
}

function addThreeToGuest(){
    let score = guestScore += 3
    document.getElementById("guest-score").textContent = score
}

function reset(){
    homeScore = 0
    document.getElementById("home-score").textContent = homeScore
    guestScore = 0
    document.getElementById("guest-score").textContent = guestScore
}