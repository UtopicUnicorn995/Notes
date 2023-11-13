import { useState } from 'react';
import AddUser from './Components/AddUser.jsx';
import UsersList from './Components/UsersList.jsx';
import './index.css'

// const users = [{name: 'max', age: 31}, {name: 'Ian', age: 24}]
function App() {
  const [usersList, setUsersList] = useState([])

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: userName, age: userAge, id: Math.random().toString()}]
    })
  }

  return (
    <div className="App">
     <AddUser onAddUser={addUserHandler} />
     <UsersList users={usersList}/>
    </div>
  );
}

export default App;
