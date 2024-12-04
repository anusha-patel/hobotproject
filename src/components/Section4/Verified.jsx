import React from 'react'

const Verified = () => {
  return (
    <div className='flex mx-auto justify-between items-center bg-[#E8FBFF]  md:h-[10rem] px-10 md:px-20 mb-10'>
        <h1 className=' font-poppins font-bold text-sm md:text-4xl '>Let Suppliers <span className='underline underline-offset-8 decoration-orange-600'> Find You</span> </h1>
        <button className='bg-orange-600 text-sm md:text-lg border-2 text-white  font-extrabold px-3  md:px-10 py-2 rounded-md hover:bg-white hover:text-orange-600 hover:border-orange-600 '>Get Verified</button>
    </div>
  )
}

export default Verified