import React from 'react'
import Card from './Card'

const Works = () => {
  return (
    <div className='w-[90%] mx-auto'>
    <div className=''>
        <h1 className='text-xl md:text-4xl  lg:text-6xl text-center font-poppins font-extrabold'>How it works?</h1>
        <p className='text-[18px] text-center '>Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.</p>
    </div>
    <div className=''>
        <Card/>

    </div>
    </div>
    
  )
}

export default Works