import {useState, useRef} from 'react'

export default function Player() {
  const playerName = useRef()

  const [enteredPlayerName, setEnteredPlayerName] = useState(null)


  function handleClick(){
    // setEnteredPlayerName(playerName.current.value)
    playerName.current.click()
    // playerName.current.value = ''
  }

  // console.log(playerName.current.click())
  // console.log( typeof(enteredPlayerName))

  return (
    <section id="player">
      <h2>Welcome { enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

// a ref in react is a value
// special kind of value managed by react
// refs and state