import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  // can also create one useState instead of creating it multiple times
//   const [userInput, setUserInput] = useState({
//     enteredTitle: "",
//     enteredAmount: "",
//     enteredDate: "",
//   });

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    //Not a good practice
    // both works fine

    // setUserInput((prevState) => {
    //     return {...prevState, enteredTitle: event.target.value}
    //     //safer way to make sure that the previous state is created
    // })
  };

  
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value,
    //   });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value,
    //   });
  };

  //Alternative shared function
  const inputChangeHandler = (identifier, value) => {
    if (identifier === 'title'){
        setEnteredTitle(value)
    }else if(identifier === 'date'){
        setEnteredDate(value)
    }else{
        setEnteredAmount(value)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()

    const expenseData = {
        title: enteredAmount,
        amount: enteredAmount,
        date: new Date(enteredDate)
    }

    props.onSaveExpenseData(expenseData)
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }
  

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* <input type="text" onChange={titleChangeHandler} /> */}
          {/* Value is needed to clear the input fields */}
          <input type="text" value={enteredTitle} onChange={(event) => inputChangeHandler('title', event.target.value)} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={submitHandler}>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
