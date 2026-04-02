import Groq from "https://esm.sh/groq-sdk";
import { API_KEY } from "./config.js";

const form_submit_btn = document.querySelector('#form-submit-btn')
const user_input_textarea = document.querySelector('#user-input-textarea')
const user_select_language_div = document.querySelector('#user-select-language-div')

form_submit_btn.addEventListener('click', translateInput)

window.process = {
  env: {
    NODE_ENV: 'development'
  }
};

const groq = new Groq({ 
  apiKey: API_KEY,
  dangerouslyAllowBrowser: true
});

const messages = [
  {
    role: "system",
    content: `You're a translation expert. You work in an app.
    You take whatever the user has given you and translate it into the requested
    language. Your translations are precise and concise, you only translate what is given.
    You do not open with any intros or do any outros. Do not use more words than is necessary
    to translate the user input.
    `
  }
]

window.resetText = function(){
  user_input_textarea.value = ""
  user_select_language_div.innerHTML = `
                          <h2 id="user-select-language-h2">Select language 👇</h2>
                        <div id="radio-input-divs">
                            <div class="radio-input">
                                <input type="radio" name="selected_lang" id="french-radio" value="french" class="radio-inp">
                                <label for="french-radio" class="radio-label">French</label>
                                <span><img src="./images/french.png" class="flag"></span>
                            </div>
                            <div class="radio-input">
                                <input type="radio" name="selected_lang" id="spanish-radio" value="spanish" class="radio-inp">
                                <label for="spanish-radio" class="radio-label">Spanish</label>
                                <span><img src="./images/spanish.png" class="flag"></span>
                            </div>
                            <div class="radio-input">
                                <input type="radio" name="selected_lang" id="japanese-radio" value="japanese" class="radio-inp">
                                <label for="japanese-radio" class="radio-label">Japanese</label>
                                <span><img src="./images/japanese.png" class="flag"></span>
                            </div>
                        </div>
                        <button id="form-submit-btn">Translate</button>
      `
}


document.addEventListener('click', (e)=>{
  if(e.target.id === "start-over-btn"){
    resetText()
  }else if (e.target.id === "form-submit-btn"){
    translateInput()
  }
})

async function translateInput(){
  try{

    const selectedLang = document.querySelector('input[name="selected_lang"]:checked').value
    const userPrompt = user_input_textarea.value

    const requestMessages = [
      ...messages,
      {role: "user", content: `Translate ${userPrompt} into ${selectedLang}`}
    ]

    const response = await groq.chat.completions.create({
      model: 'groq/compound',
      messages: requestMessages,
      temperature: 0.8,
      max_completion_tokens: 200,
    })

    if(response.choices[0].message.content){
      user_select_language_div.innerHTML = `
              <h2 id="user-select-language-h2">Your translation 👇</h2>
              <p id="user-translated-p">${response.choices[0].message.content}</p>
              <button id="start-over-btn" onclick="resetText()">Start over</button>
      `
      form_submit_btn.classList.add('hidden')
    }

  }catch(err){
    console.error(err)
    user_select_language_div.innerHTML = "Something went wrong"
  }

}
