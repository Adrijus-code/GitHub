let all_questions = []
let user_answers_arr = []
let the_title = ""
const page_title = document.querySelector('#page-title')
const buttons_container = document.querySelector('#buttons-container')
const question_num = document.querySelector('.question-num')
const question_p = document.querySelector('.question-p')
const question_display_div = document.querySelector('#question-display-div')
const answer_div = document.querySelector('.answer-div')
const submit_btn = document.querySelector('.submit-btn')
const score_display_h3 = document.querySelector('.score-display-h3')
const tbody = document.querySelector("tbody")


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
submit_btn.addEventListener('click', checkAnswers)

function checkAnswers(){
    for(let answer of user_answers_arr){
        if(!answer || user_answers_arr.length < all_questions.length){
            alert("Must answer all questions first")
            return
        }
    }
    // console.log(all_questions)
    let score = 0
    let str = ""
    const all_correct_answers = all_questions.map(question =>{
        // return question.answer
        return question.choices[question.answer]
    })
    
    for (let i = 0; i < all_correct_answers.length; i++){
        if(user_answers_arr[i] === all_correct_answers[i]){
            score++
        }
        str += `
                    <tr>
                        <td>question ${i + 1}</td>
                        <td>${all_questions[i].questionText}</td>
                        <td>${all_correct_answers[i]}</td>
                        <td>${user_answers_arr[i]}</td>
                        <td>${user_answers_arr[i] === all_correct_answers[i] ? "1":"0"}</td>
                    </tr>`
    }
    score_display_h3.innerHTML = `Your score is ${score}/${all_questions.length}`
    tbody.innerHTML = str
    // console.log(all_correct_answers);
    // console.log(user_answers_arr);
    
    
}

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
