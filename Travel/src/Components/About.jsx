import React from 'react'
import Footer from './Footer'
import heroImage from '../assets/images/hero.png';
const About = () => {
  return (
    <>
      <div className='relative h-screen bg-cover bg-center' style={{ backgroundImage: `url(${heroImage})` }}>
        <div className='absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center w-full'>
          <h4 className='text-3xl md: text-4xl font-bold text-black mb-4'>About Us</h4>
        </div>
      </div>
      <div className='container mx-auto px-2 py-8'>
        <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2'>
          <div className='flex items-center justify-center'>
            <img src={heroImage} alt="About Image" className='rounded-lg shaddow-md w-full h-auto'/>
          </div>
          <div className='flex flex-col justify-center'>
            <h3 className='mb-2 text-black font-bold text-2xl'>Who We Are</h3> 
            <p className='text-gray-700 mb-2'>We are a passionate travel agency commited to providing the best travel experirnces for our clients. Our team of dedicated professional works tirelessaly to ensure your trips are seamless and unforgettable.</p>
            <h3 className='mb-2 text-black font-bold text-2xl'>Our Mission</h3>
            <p className='text-gray-700 mb-2'> We are a passionate travel agency commited to providing the best travel experirnces for our clients. Our team of dedicated professional works tirelessaly to ensure your trips are seamless and unforgettable.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About
