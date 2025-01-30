import React, { useState } from 'react'
import { Link } from 'react-router-dom' 
import { FaBars , FaTimes}  from 'react-icons/fa';

const Navbar = () => {
  const [isopen,SetIsOpen] = useState(false)
  return (
    <>
      <nav className='fixed m-4 top-0 right-0 left-0 shadow-lg z-50 bg-white'>
         <div className='container px-4 flex justify-between items-center h-16'>
            <h3 className='text-2xl font-bold'>    Travel</h3>
                <div className='hidden md:flex space-x-4 text-sm font-bold items-center'>
                    <Link to="/" className='px-6 py-2 hover:bg-gray-600 hover:text-white'> Home </Link>
                    <Link to="/gallery" className='px-6 py-2 hover:bg-gray-600 hover:text-white'> Gallery </Link>
                    <Link to="/contact" className='px-6 py-2 hover:bg-gray-600 hover:text-white'> Contact </Link>
                    <Link to="/about" className='px-6 py-2 hover:bg-gray-600 hover:text-white'> About Us </Link>
                    <button className='px-6 py-2 border bg-gray-300'>Login</button>
                </div>
               <div className='md:hidden'>
                  <button onClick={()=> SetIsOpen(!isopen)}>
                     {
                       isopen? <FaTimes /> : <FaBars/>
                     }
                  </button>
               </div>
         </div>
         {
          isopen &&(
               <div className='md:hidden flex space-y-4 text-sm flex-col bg-white items-center py-4 '>
                    <Link to="/" className='px-6 py-2 hover:bg-gray-600 hover:text-white'> Home </Link>
                    <Link to="/gallery" className='px-6 py-2 hover:bg-gray-600 hover:text-white'> Gallery </Link>
                    <Link to="/contact" className='px-6 py-2 hover:bg-gray-600 hover:text-white'> Contact </Link>
                    <Link to="/about" className='px-6 py-2 hover:bg-gray-600 hover:text-white'> About Us </Link>
                    <button className='px-6 py-2 border bg-gray-300'>Login</button>
                </div>
          )
         }
      </nav>
    </>
  )
}

export default Navbar
