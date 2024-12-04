import React from 'react';
import Searchbar from '../Searchbar/Searchbar';

const Hero = () => {
    return (
        <>
            <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url('heroimage.png')` }}>
                <div className="relative z-10 flex items-center justify-center w-full h-full">
                    <div className="text-center text-white ">
                        <h1 className="text-xl  md:text-6xl font-bold  mb-4">Are You a Supplier?</h1>
                        <p className="mb-6 font-poppins text-xl md:text-5xl">Explore Matching Opportunities.</p>
                    
                        <Searchbar/>
                        <p > <span className='font-bold text-sm md:text-xl'>Are you a buyer?</span> <span className='text-sm md:text-xl underline'>Click here if you are looking to post a requirements </span></p>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Hero