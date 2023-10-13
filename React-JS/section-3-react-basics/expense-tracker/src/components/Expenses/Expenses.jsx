import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from '../NewExpense/ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = ({items}) => {
  // const [items, setItems] = useState(props.items)
  // the variable below is not a good practice -> uses the same condition as what's used above
  // const [filterInfoText, setFilterInfoText] = useState()

  // The let variable below is a better practice because it updates when the state above is changed
  // let filteredInfoText = '2019, 2021 & 2022'

  // if(filteredYear === '2019'){
  //   filteredInfoText = '2020, 2021 & 2022'
  // }else if(filteredYear === '2021'){
  //   filteredInfoText = '2019, 2020 & 2022'
  // }else{
  //   filteredInfoText = '2019, 2020 & 2021'
  // }
  
  // gives data to the ExpensesFilter component
  const [filteredYear, setFilteredYear] = useState('2023')
  const [filteredExpenses, setFilteredExpenses] = useState(items)

  // recieves data from the ExpensesFilter component
  const filterExpenseHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
    setFilteredExpenses(items.filter(newArr => newArr.date.getFullYear().toString() === selectedYear))
    // setFilteredExpenses(filteredExpenses.filter((newArr) =>  {
    //   console.log(selectedYear)
    //  console.log(newArr.date.getFullYear() == selectedYear)
    //  return newArr.date.getFullYear() == selectedYear
    // }))
  }

  return (
    <>
    <Card className="expenses" >
    {/* ExpenseFilter component has a two way binding -> recieves data from the component and gives data to the component */}
    <ExpensesFilter selected={filteredYear} expenses={filterExpenseHandler}/>
    {expenseContent}
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
      <ExpensesList items={filteredExpenses}/>
    </Card>
    </>
  );
}

export default Expenses;