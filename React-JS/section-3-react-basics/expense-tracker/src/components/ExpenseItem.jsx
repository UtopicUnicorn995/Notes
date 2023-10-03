import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate'
import Card from './Card'

// Export function name convention -> use the name of the file
// pull object data using object destructuring instead of props.key
function ExpenseItem(props) {
  //function ExpenseItem({date, title, amount}) {
  //   const expenseDate = new Date(2023, 8, 18);
  //   const expenseTitle = "Restaurant meal";
  //   const expenseAmount = 200;
console.log(props)
 

  return (
    <Card className="expense-item">
        <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
    </Card>
  );
}

export default ExpenseItem;
