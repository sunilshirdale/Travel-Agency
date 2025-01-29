import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes,Route, BrowserRouter} from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
