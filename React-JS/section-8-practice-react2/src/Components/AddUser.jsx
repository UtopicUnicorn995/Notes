import '../CSS/addUsers.css'
import Button from './Button.jsx'
import Card from './Card.jsx'

export default function AddUser(){
    const addUserHandler = (event) => {
        event.preventDefault()
    }

    return(
        <Card>
        <form className='input' onSubmit={addUserHandler}>
            <label>Username</label>
            <input type="text" />
            <label>Age (Years)</label>
            <input type="number" />
            <Button>Add User</Button>
        </form>
        </Card>
    )
}