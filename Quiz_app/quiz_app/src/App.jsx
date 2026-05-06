import { useState } from 'react'
import './App.css'
import StartComp from './components/StartComp'
import QuestionComp from './components/QuestionComp'


function App() {
  const [IsGameStarted, setIsGameStarted] = useState(false)

  function startGame(){
    setIsGameStarted(true)
  }

  return (
    <>
      {!IsGameStarted && <section className='first-screen-section'>
         <StartComp startGame={startGame}/>
      </section>}
      {IsGameStarted && <section className='second-screen-section'>
         <QuestionComp/>
         <QuestionComp/>
         <QuestionComp/>
         <QuestionComp/>
         <QuestionComp/>
         <button className='check-answers-btn'>Check answers</button>
      </section>}
    </>
  )
}

export default App
