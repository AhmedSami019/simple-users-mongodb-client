import { Outlet } from 'react-router'
import './App.css'
import Navbar from './Components/Navbar'
import Users from './Components/Users'

// promise

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    </>
  )
}

export default App
