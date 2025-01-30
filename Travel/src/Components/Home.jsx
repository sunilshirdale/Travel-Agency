import React from 'react'
import heroImage from '../assets/images/hero.png';
import Destination from './Destination';
import OurService from './OurService';
const Home = () => {
  return (
    <>
      <div className='relative h-screen bg-cover bg-center'  style={{ backgroundImage: `url(${heroImage})` }}>
        <div className='absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center w-full'>
            <h1 className='text-3xl md: text-4xl font-bold text-black mb-4'>Explore the world with us</h1>
            <p className='text-lg md:text-2xl text-black mb-8'>Discover amazing places at exclusive deals</p>
            <button className='border text-white px-6 py-2 rounded-full text-lg md:text-xl hover:bg-blue-500 transform transition duration-300 hover:scale-105 capitalize'>get started</button>
           
        </div>
      </div>
      <Destination/>
      <OurService/>
    </>
  )
}

export default Home
