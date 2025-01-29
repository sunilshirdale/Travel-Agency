import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <nav className='fixed m-4 top-0 right-0 left-0 shadow-lg z-50 bg-white'>
         <div className='container px-4 flex justify-between items-center h-16'>
            <h3 className='text-2xl font-bold'>    Travel</h3>
                <div className='flex space-x-4 text-sm font-bold items-center'>
                    <Link to="/"> Home </Link>
                    <Link to="/gallery"> Gallery </Link>
                    <Link to="/contact"> Contact </Link>
                    <Link to="/about"> About Us </Link>
                </div>
            
         </div>
      </nav>
    </>
  )
}

export default Navbar
