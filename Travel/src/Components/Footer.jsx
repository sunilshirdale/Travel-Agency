import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className='bg-gray-800 text-white py-8'>
        <div className='container mx-auto px-4'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
              <div className='text-white'>
                <h2 className='capitalize text-2xl font-bold mb-4'>travel agency</h2>
                <p className='italic  mb-4'>Your trusted partner for unforgettable travel experience. Explore the world with us</p>
              </div>
              <div className='flex flex-col md:items-center'>
                <h2 className='capitalize text-white text-lg font-semibold'>quick links</h2>
                <div className='flex flex-col mt-4 space-y-2'>
                  <Link to='/'>Home</Link>
                  <Link to="/gallery"> Gallery </Link>
                  <Link to="/contact"> Contact </Link>
                  <Link to="/about" >About Us </Link>
                </div>
              </div>
              <div className=''>
                <h2 className='capitalize text-xl font-bold mb-4'>follow us</h2>
                <div className='flex space-x-4 mb-4'>
                  <FaFacebookF size={24} className='text-blue-500 hover:text-blue-600'/>
                  <FaTwitter size={24} className='text-blue-500 hover:text-blue-600' />
                  <FaInstagram size={24} className='text-blue-400 hover:text-blue-500' />
                  <FaYoutube  size={24}  className='text-blue-500 hover:text-blue-600'/>
                </div>
                <form action="" method="post" className='flex items-center justify-center mt-8'>
                  <input type="email" placeholder='Enter your email address here' 
                  className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600'
                  />
                  <button className='bg-blue-600 text-white px-4 py-2 rounded-r-lg border border-blue-600 '>Subscribe</button>
                </form>
              </div>
            </div>
            <div className='flex justify-between border-t mt-8 pt-4 border-blue-700'>
              <p>@2025 Shlok Travel </p>
              <div className='flex space-x-4 mt-4 md:mt-0'>
                <Link to="/contact"> Privacy Policy </Link>
                <Link to="/about" >Terms Of Services </Link>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Footer
