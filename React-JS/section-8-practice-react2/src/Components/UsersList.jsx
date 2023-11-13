import Card from "./Card";
import '../CSS/usersList.css'

const list = ['Max (31 Years old)', "Max (32 Years old)"]

export default function UsersList(){
    return(
        <Card >
            <div className="users"> 
            <ul>
            {list.map(lest => (
                <li>{lest}</li>
        ))}
        </ul>
        </div>
        </Card>
    )
}