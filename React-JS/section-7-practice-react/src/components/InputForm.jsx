import { useState } from "react"

const intialUserInput = {
  'current-savings': 1000,
  'yearly-contribution': 1200,
  'expected-return': 7,
  'duration': 10
}

export default function InputForm(props){
  const [userInput, setUserInput] = useState({
    'current-savings': 1000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    'duration': 10
  })

  const submitHandler = (event) => {
    event.preventDefault()

    props.onCalculate(userInput)
  }

  const resetHandler = () => {
    setUserInput(intialUserInput)
  }

  const inputChangeHandler = (input, value) => {
    setUserInput((prev) => {
      return {
        ...prev, 
        [input]: value
        //Dynamically update value
      }
    })
  }

  console.log(userInput)

    return(
<form className="form" onSubmit={submitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" onChange={(event) => inputChangeHandler('current-savings', event.target.value)} value={userInput['current-savings']}/>
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" onChange={(event) => inputChangeHandler('yearly-contribution', event.target.value)} value={userInput['yearly-contribution']}/>
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" onChange={(event) => inputChangeHandler('expected-return', event.target.value)} value={userInput['expected-return']}/>
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" onChange={(event) => inputChangeHandler('duration', event.target.value)} value={userInput['duration']}/>
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={resetHandler}>
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    )
}
