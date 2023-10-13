
const ExpensesList = props => {

    let expenseContent = <p>No expenses found.</p>
  
    if(props.items.length > 0){
      expenseContent = props.items.map(data => {
        // Key prop we could add to any HTML element -> help react identify unique value
        // map method can add index in cases your data doesn't have one
       return <ExpenseItem title={data.title} amount={data.amount} date={data.date} key={data.id}/>
      })
    }
  
}

export default ExpensesList