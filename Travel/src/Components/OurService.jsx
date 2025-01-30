import React from 'react'
import { service } from '../DataContent'
const OurService = () => {
    return (
        <>
            <div className='py-12 bg-gray-100'>
                <div className='container mx-auto px-4'>
                    <h2 className='text-3xl font-bold text-center mb-8'>Our Services</h2>
                    <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {
                            service.map((serviced, index) => (
                                <div key={index} className='bg-white rounded-lg shadow-md flex flex-col p-6 items-center cursor-pointer transform transition duration-300 hover:scale-110'>
                                    <div className='mb-4'>{serviced.icon}</div>
                                    <div className='p-4'>
                                        <h4 className='text-xl font-bold mb-2'>{serviced.title}</h4>
                                        <p className='text-gray-600'>{serviced.description}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurService
