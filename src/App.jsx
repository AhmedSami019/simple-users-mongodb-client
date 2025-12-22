import './App.css'
import Users from './Components/Users'

// promise
const usersPromise = fetch('http://localhost:3002/users').then(res => res.json())

function App() {

  return (
    <>
      
      <h1>simple  CRUD</h1>
      <Users usersPromise={usersPromise}></Users>
     
    </>
  )
}

export default App
