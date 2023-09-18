import "./ExpenseItem.css";
// Export function name convention -> use the name of the file
function ExpenseItem(props) {
  const expenseDate = new Date(2023, 8, 18);
  const expenseTitle = "Restaurant meal";
  const expenseAmount = 200;

  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  );
}

export default ExpenseItem;