import './NewExpense.css'
import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
const newExpense = (props) => {
    const [activeForm, setActiveForm] = useState(false)
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData
            
        }
        console.log(expenseData)
        props.onAddExpense(expenseData)
    }
    
    return (
        <div className='new-expense'>{
            activeForm ? 
            <ExpenseForm activeFunc={setActiveForm} onSaveExpenseData={onSaveExpenseDataHandler}/>
            :
            <button onClick={() => setActiveForm(true)}>Add new Expenses</button>
        }
            
        </div>
    )
}

export default newExpense