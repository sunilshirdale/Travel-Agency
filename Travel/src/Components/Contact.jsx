import React from 'react'
import Footer from './Footer'
import heroImage from '../assets/images/hero.png';
import { FaEnvelope, FaLandmark, FaLocationArrow, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';
const Contact = () => {
  return (
    <>
      <div className='relative h-screen bg-cover bg-center' style={{ backgroundImage: `url(${heroImage})` }}>
        <div className='absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center w-full'>
          <h4 className='text-3xl md: text-4xl font-bold text-black mb-4'>Contact Us</h4>
        </div>
      </div>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2'>
          <div className='bg-white rounded-lg shadow-md p-6'>
            <h3 className='text-xl font-bold mb-4'>Contact Detail</h3>
            <div className='flex items-center mb-4'>
              <FaEnvelope className='text-blue-500 mr-2' />
              <p>info@shloktravel.com</p>
            </div>
            <div className='flex items-center mb-4'>
              <FaPhone className='text-blue-500 mr-2' />
              <p>+123 456 789 00</p>
            </div>
            <div className='flex items-center mb-4'>
              <FaMapMarkedAlt className='text-blue-500 mr-2' />
              <p>123 Travel St,City,Country</p>
            </div>
          </div>
          <div className='bg-white rounded-lg shadow-md p-6'>
            <h3 className='text-xl font-bold mb-4'>Get in Touch</h3>
            <form>
              <div className='mb-4'>
                <label htmlFor="Name" className='block text-gray-700 mb-2'>Name</label>
                <input type='text' placeholder='Enter Your Name Here' className='w-full p-2 border border-gray-300 rounded' />
              </div>
              <div className='mb-4'>
                <label htmlFor="Email" className='block text-gray-700 mb-2'>Email</label>
                <input type="email" name="emai" id="email" placeholder='Enter your email address..' className='w-full p-2 border border-gray-300 rounded' />
              </div>
              <div className='mb-4'>
                <label htmlFor="message" className='block text-gray-700 mb-2'>Message</label>
                <textarea name="message" id="message" placeholder='Write your message here..' className='w-full p-2 border border-gray-300 rounded'></textarea>
              </div>
              <div className='mb-4'>
                <button type="submit" className='border rounded py-2 px-4 bg-blue-500 text-white cursor-pointer'>Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact