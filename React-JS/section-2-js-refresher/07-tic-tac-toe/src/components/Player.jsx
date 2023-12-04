import { useState } from "react"
export default function Player({name, symbol}){
    const [isEditing, setIsEditing] = useState(false)

    const handleEdit = () => {
        setIsEditing(editing => !editing) // better practice
        // Inverts the value
        // When updatting the state based on the previous state, pass a function to your state
    }

    let playerName = <span className="player-name">{name}</span>
    let btnCaption = 'Edit'

    if(isEditing){
        playerName = <input type="text" required value={name}/>
        btnCaption = "Save"
    }

    return(
        <li>
            <span className="player">
            {playerName}
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEdit}>{btnCaption}</button>
          </li>
    )
}