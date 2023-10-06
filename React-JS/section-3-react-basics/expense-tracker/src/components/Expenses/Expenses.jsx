import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from '../NewExpense/ExpensesFilter';

const Expenses = (props) => {
  const [items, setItems] = useState(props.items)
  
  // gives data to the ExpensesFilter component
  const [filteredYear, setFilteredYear] = useState('2023')

  // recieves data from the ExpensesFilter component
  const filterExpenseHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  return (
    <>
    <Card className="expenses" >
    {/* ExpenseFilter component has a two way binding -> recieves data from the component and gives data to the component */}
    <ExpensesFilter selected={filteredYear} expenses={filterExpenseHandler}/>
    {items.map(data => {
     return <ExpenseItem title={data.title} amount={data.amount} date={data.date} key={data.id}/>
    })}
      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}
    </Card>
    </>
  );
}

export default Expenses;