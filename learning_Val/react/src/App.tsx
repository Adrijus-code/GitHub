import { useState, useEffect } from 'react'
import User from './User'
import type { UserType } from './types/types'

function App() {
  const [on, setOn] = useState(false)
  const [users, setUsers] = useState<UserType[]>([])
  function switchBool(){
    setOn(prevState=> !prevState)
  }

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((payload) => payload.json())
      .then((data) => {
        setUsers(data)
      });
  },[])
  
  function deleteUser(id:UserType['id']){
      const filteredUsers = users.filter(user=> user.id !== id)
      setUsers(filteredUsers)
  }

  return (
    <>
      <ul>{users.map(user=>
        <User user={user} key={user.id} deleteUser={deleteUser}/>
      )}</ul>
      <button onClick={switchBool}>{on ? 'Turn off': 'Turn on'}</button>
    </>
    
  )
}

export default App
