import React from 'react'
import { customer } from '../DataContent'
const Testomonial = () => {
    return (
        <>
            <div className='py-12 bg-gray-100'>
                <div className='container mx-auto px-4'>
                    <h2 className='text-3xl font-bold text-center mb-8'>What Our Client Says!</h2>
                    <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 overflow-hidden'>
                        {
                            customer.map((customer, index) => (
                                <div key={index} className='bg-white rounded-lg shadow-md text-center cursor-pointer p-4 transform transition duration-300 hover:scale-110'>
                                    <img src={customer.img} alt={customer.name} className='w-24 h-24 rounded-full mx-auto transform transition duration-300 hover:scale-110'/>
                                    <div className='p-4'>
                                        <h4 className='text-xl font-bold mb-2'>{customer.name}</h4>
                                        <p className='text-gray-600 italic mb-2'>{customer.location}</p>
                                        <p className='text-gray-600 italic'>{customer.text}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testomonial
