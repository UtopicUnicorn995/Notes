import "./ExpenseItem.css";
import React, {useState} from 'react'
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

// Export function name convention -> use the name of the file
// pull object data using object destructuring instead of props.key
function ExpenseItem(props) {
  //function ExpenseItem({date, title, amount}) {
  //   const expenseDate = new Date(2023, 8, 18);
  //   const expenseTitle = "Restaurant meal";
  //   const expenseAmount = 200;

  // React hook
  // Called directly inside the export function
  // Array destrcuturing
  // managed by react somewhere in memory
  // Per component instance basis -> Whenever this component is created -> It is different from other component like this -> for example, if the state of expense Item is changed, it doesnt affect the other created expense Item
  // under thehood we do not change the value by = sign -> managed by react under the hood
  const [title, setTitle] = useState(props.title)
  // Call component again when the state changes -> thats how the UI changes via useState
 

  // function clickHandler() {
  //   // Doesn't change the title immediately, but updates the value
  //   setTitle('food')
  // }

  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      {/* Javascript will immediately execute the function when the button is parsed if it has (), therefore we could just point the function instead of calling it */}
      {/* <button onClick={clickHandler}>Change title</button> */}
    </Card>
    </li>
  );
}

export default ExpenseItem;
