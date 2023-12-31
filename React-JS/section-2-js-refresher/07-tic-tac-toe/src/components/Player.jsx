import { useState } from "react"


export default function Player({initialName, symbol, isActive, onChangeName}){
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false)

    const handleEdit = () => {
        setIsEditing(editing => !editing) // better practice -> avoids unexpected behaviors
        // Inverts the value
        // When updatting the state based on the previous state, pass a function to your state
        // Two way binding
        if(isEditing){
            onChangeName(symbol, playerName)
        }
        console.log(isEditing)
    }

    const handleChange = (event) => {
        setPlayerName(event.target.value)
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>
    let btnCaption = 'Edit'

    if(isEditing){
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>
        btnCaption = "Save"
    }

    return(
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
            {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEdit}>{btnCaption}</button>
        </li>
    )
}