import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes,Route, BrowserRouter} from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Gallery from './Components/Gallery'
import Contact from './Components/Contact'
import About from './Components/About'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/gallery' element={<Gallery />}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
