import Card from "./Card";
import '../CSS/usersList.css'

export default function UsersList(props){
    return(
        <Card className='users'> 
            <ul>
            {props.users.map(user => (
                <li key={user.id}>{user.name} ({user.age} Years old)</li>
            ))}
            </ul>
        </Card>
    )
}