import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Pages/Shared/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' overflow-hidden bg-black min-h-screen'>
      <Navbar></Navbar>
     <Outlet></Outlet>
     
    </div>
  )
}

export default App
