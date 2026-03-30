let all_questions = []
let user_answers_arr = []
let the_title = ""
const page_title = document.querySelector('#page-title')
const buttons_container = document.querySelector('#buttons-container')
const question_num = document.querySelector('.question-num')
const question_p = document.querySelector('.question-p')
const question_display_div = document.querySelector('#question-display-div')
const answer_div = document.querySelector('.answer-div')


async function loadData(){
    const res = await fetch("./questions.json")
    const {title, questions} = await res.json()
    all_questions = questions
    the_title = title
    
}

await loadData()


window.displayQuestion = function(nbr){
    const {questionText, choices, answer} = all_questions[nbr-1]
    question_num.innerText = `Question #${nbr}`
    question_p.innerText = `${questionText}`
    let answers = ""
    choices.forEach((choice, i)=>{
        answers += `
        <div>
            <label for="answer-option-${i}">${choice}</label>
            <input type="radio" onclick="radioClick('${choice}', ${nbr})" name="radio_answer" id="answer-option-${i}">
        </div>
    `
    })
    answer_div.innerHTML = answers
  
}

// user chose Washington as answer for question 1
// user chose Earth as answer for question 2
// user chose Au as answer for question 3


// [ "Washing DC" , "earth", "frere",  "grtrh","thhty" , "reer", "feez"]
window.radioClick = function(choice, i){
    // console.log(`user chose ${choice} as answer for question ${i}`)
    user_answers_arr[i-1] = choice

    // console.log(user_answers_arr);
    // console.log(user_answers_arr.length);
    
    
}

function displayButtons(arr){

    for(let i=1; i<=arr.length; i++){
        buttons_container.innerHTML += `
            <button onclick="displayQuestion(${i})" class="question-btn">question ${i}</button>
        `
    }
}



function init(){
    displayButtons(all_questions)
    page_title.innerText = the_title
}

init()
