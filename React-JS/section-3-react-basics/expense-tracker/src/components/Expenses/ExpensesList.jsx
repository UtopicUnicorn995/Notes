import './ExpensesList.css'
import ExpenseItem from './ExpenseItem';

const ExpensesList = props => {
  
    if(props.items.length === 0){
      return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }

    return (
      <ul className="expenses-list">
        {
          props.items.map(data => {
          // Key prop we could add to any HTML element -> help react identify unique value
          // map method can add index in cases your data doesn't have one
          return <ExpenseItem title={data.title} amount={data.amount} date={data.date} key={data.id}/>
          })
        }
      </ul>
    )
  
}

export default ExpensesList