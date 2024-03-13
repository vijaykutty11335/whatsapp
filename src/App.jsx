import { useState } from 'react'
import './App.css'
import Messages from './Components/Messages'
import Navbar from './Components/Navbar'

function App() {
  
  const [home,setHome] = useState(true)

  return (
    <div className='App'>
      <Navbar/>
      <Messages/>
    </div>
  )
}
export default App
