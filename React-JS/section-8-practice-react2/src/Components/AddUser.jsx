import '../CSS/addUsers.css'
import { useState } from 'react'
import Button from './Button.jsx'
import Card from './Card.jsx'
import ErrorModal from './ErrorModal.jsx'

export default function AddUser(props){

    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [hasError, setHasError] = useState()

    const addUserHandler = (event) => {
        event.preventDefault()
        if(enteredAge.trim().length < 1 || enteredUsername.trim().length < 1 || !isNaN(enteredUsername)){
            setHasError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values)'
            })
            return
        }
        if(+enteredAge < 1){
            setHasError({
                title: 'Invalid age',
                message: 'Please enter a valid age (age > 1)'
            })
            return
        }
        props.onAddUser(enteredUsername, enteredAge)
        resetHandler(null)
    }

    const closeModal = () => {
        setHasError()
    }

    const resetHandler = () => {
        setEnteredUsername('')
        setEnteredAge('')
    }
    


    const userNameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    }

    const userAgeChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    

    return(
        <div>
            {hasError && <ErrorModal title={hasError.title} message={hasError.message} closeModal={closeModal}/>}
            <Card className='input'>
            <form  onSubmit={addUserHandler}>
                <label>Username</label>
                <input type="text" value={enteredUsername} onChange={userNameChangeHandler}/>
                <label>Age (Years)</label>
                <input type="number" value={enteredAge} onChange={userAgeChangeHandler}/>
                <Button type='submit'>Add User</Button>
            </form>
            </Card>
        </div>
    )
}