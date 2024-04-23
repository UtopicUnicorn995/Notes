import { useState } from "react"

import QuizCompleteImg from '../assets/quiz-complete.png'
import QuestionTimer from "./QuestionTimer.jsx"
import QUESTIONS from '../questions.js'


export default function Quiz(){
    const [userAnswers, setUserAnswers] = useState([])
    // Not optimal for Max
    // Best practice -> manage less states as possible; better to derive states as much as possible

    const activeQuestionIndex = userAnswers.length
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length

    function handleSelectAnswer(selectedAnswer){
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer]
        })
    }

    if(quizIsComplete){
        return <div id="summary">
            <img src={QuizCompleteImg} alt="Trophy Icon" />
            <h2>Quiz Completed!</h2>
        </div>
    }

    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers]
    shuffledAnswers.sort(() => Math.random() - 0.5)

    return(
       <div id="quiz">
            <div id="question">
            <QuestionTimer timeout={10000} onTimeout={() => handleSelectAnswer(null)}/>
            <h2>
                {QUESTIONS[activeQuestionIndex].text}
            </h2>
            <ul id="answers">
                {shuffledAnswers.map((answer) => (
                    <li key={{answer}} className="answer">
                        <button onClick={() => handleSelectAnswer(answer)}>
                            {answer}
                        </button>
                    </li>
                ))}
            </ul>
            </div>
       </div>
    )
}