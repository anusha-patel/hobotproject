
import React from 'react';

const Hobot = () => {
    const locations = [
        'Abu Dhabi',
        'Dubai',
        'Sharjah & Ajman',
        'Fujairah',
        'Ras Al Khaimah',
        'Umm Al Quwain',
    ];

    const buttonClass = 'w-[15rem] rounded-md font-poppins m-2 px-2 py-1 border border-orange-600 hover:bg-orange-600 hover:text-white duration-100';

    return (
        <div className='flex flex-col md:flex-row justify-between items-center  w-[85%] mx-auto mt-10 mb-10 '>
            {/* Left Section */}
            <div className='w-full md:w-[50%] mb-5'>
                <h1 className='text-3xl text-black font-poppins font-extrabold mb-2'>
                    Ready to dive into <span className='text-blue-950'>HABOT?</span>
                </h1>
                <p className='leading-6 text-[1rem] font-poppins mb-4'>
                    Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.
                </p>
                <button className='bg-green-900 text-white font-poppins font-semibold p-2 rounded-md'>
                    Sign up Today
                </button>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-[50%] flex flex-wrap justify-center   ">
                {locations.map((location, index) => (
                    <button key={index} className={buttonClass}>
                        {location}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Hobot;
