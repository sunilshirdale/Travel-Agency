import React from 'react'
import Footer from './Footer'
import heroImage from '../assets/images/hero.png';
const galImg=[
  'src/assets/images/gal1.jpg',
  'src/assets/images/gal2.jpg',
  'src/assets/images/gal3.png',
  'src/assets/images/gal4.jpg',
  'src/assets/images/gal5.webp',
  'src/assets/images/gal6.webp',
];

const Gallery = () => {
  return (
    <>
      <div className='relative h-screen bg-cover bg-center' style={{ backgroundImage: `url(${heroImage})` }}>
        <div className='absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center w-full'>
          <h4 className='text-3xl md: text-4xl font-bold text-black mb-4'>Gallery</h4>
        </div>
      </div>
      <div className='container mx-auto px-4 py-12 '>
         <div className='grid gap-6 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
           {
              galImg.map(image=>(
                <div className='rounded-lg shadow-md overflow-hidden cursor-pointer'>
                  <img src={image} key={image} className='w-full h-48 object-cover transform transition duration-300 hover:scale-110'/>
                </div>
              ))
           }
         </div>
      </div>
      <Footer />
    </>
  )
}

export default Gallery
