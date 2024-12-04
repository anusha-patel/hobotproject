// import React, { useState } from 'react'
// import { FaCheckCircle } from "react-icons/fa";

// const Youtube = () => {
//     const [activeTab, setActiveTab] = useState(1);

//     const tabData = [
//         {
//             id: 1,
//             title: 'Buyer',
//             content: [
//                 'Post your requirements.',
//                 'Sit back for multiple suppliers to contact you.',
//                 'Choose among the suppliers based on the ratings and reviews.',
//             ],
//         },
//         {
//             id: 2,
//             title: 'Supplier',
//             content: [
//                 'Select suppliers based on their ratings and feedback.',
//                 'Relax while multiple suppliers reach out to you',
//                 'Share your requirements and wait for responses.',
//             ],
//         },
//     ];
//     return (
//         <>
//             <div className='bg-blue-950 w-[90%] mx-auto mt-20 mb-10 flex p-10 items-center justify-between'>
//                 <div className='relative flex justify-center items-center w-[50%]'>
//                     <img className='w-full h-auto' src="youtubeimage.png" alt="" srcset="" />
//                     <a href="https://www.youtube.com/watch?v=IZLp-TZyDkQ" target="_blank" rel="noopener noreferrer" className='absolute'>
//                         <img className='' src="youtubeicon.png" alt="" srcset="" />
//                     </a>
//                 </div>
//                 <div className='w-[50%] ml-10'>
//                     <div className='flex space-x-3 mb-6'>
//                         {tabData.map((tab) => (
//                             <button
//                                 key={tab.id}
//                                 className={`relative px-4 py-2 outline-none font-semibold flex flex-col items-center ${activeTab === tab.id
//                                     ? 'text-orange-600'
//                                     : ' text-white'
//                                     }`}
//                                 onClick={() => setActiveTab(tab.id)}
//                             >
//                                 {tab.title}
//                                 <span
//                                     className={`h-[2px] w-[16rem] transition-all duration-300 ${activeTab === tab.id ? 'bg-orange-600' : 'bg-transparent'
//                                         }`}
//                                 ></span>
//                             </button>
//                         ))}
//                     </div>
//                     {/* Tab Content */}
//                     <div className=' text-white font-poppins font-semibold p-4 rounded-md '>
//                         <ul className=' ml-6'>
//                             {tabData
//                                 .find((tab) => tab.id === activeTab)
//                                 .content.map((item, index) => (
//                                     <li key={index} className='mb-2 flex items-center'>
//                                         <FaCheckCircle className='text-green-600  mr-4'/>
//                                         {item}
//                                     </li>
//                                 ))}
//                         </ul>
//                     </div>


//                 </div>

//             </div>

//         </>
//     )
// }

// export default Youtube

import React, { useState } from 'react';
import { FaCheckCircle } from "react-icons/fa";

const Youtube = () => {
    const [activeTab, setActiveTab] = useState(1);

    const tabData = [
        {
            id: 1,
            title: 'Buyer',
            content: [
                'Post your requirements.',
                'Sit back for multiple suppliers to contact you.',
                'Choose among the suppliers based on the ratings and reviews.',
            ],
        },
        {
            id: 2,
            title: 'Supplier',
            content: [
                'Select suppliers based on their ratings and feedback.',
                'Relax while multiple suppliers reach out to you.',
                'Share your requirements and wait for responses.',
            ],
        },
    ];

    return (
        <>
            <div className='bg-blue-950 w-full md:w-[90%] md:mx-auto mt-20 mb-10 flex flex-col md:flex-row p-10 items-center justify-between'>
                <div className='relative flex justify-center items-center w-full md:w-[50%] mb-6 md:mb-0'>
                    <img className='w-full h-auto' src="youtubeimage.png" alt="YouTube" />
                    <a href="https://www.youtube.com/watch?v=IZLp-TZyDkQ" target="_blank" rel="noopener noreferrer" className='absolute'>
                        <img className='w-10 h-10 md:w-full' src="youtubeicon.png" alt="YouTube Icon" />
                    </a>
                </div>
                <div className='w-full md:w-[50%] ml-0 md:ml-10'>
                    <div className='flex space-x-3 mb-6 justify-center md:justify-start'>
                        {tabData.map((tab) => (
                            <button
                                key={tab.id}
                                className={`relative px-4 py-2 outline-none font-semibold flex flex-col items-center ${activeTab === tab.id
                                    ? 'text-orange-600'
                                    : ' text-white'
                                    }`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.title}
                                <span
                                    className={`h-[2px] w-10  md:w-[8rem] transition-all duration-300 ${activeTab === tab.id ? 'bg-orange-600' : 'bg-transparent'
                                        }`}
                                ></span>
                            </button>
                        ))}
                    </div>
                    {/* Tab Content */}
                    <div className='text-white font-poppins font-semibold p-2 rounded-md '>
                        <ul className='ml-6'>
                            {tabData
                                .find((tab) => tab.id === activeTab)
                                .content.map((item, index) => (
                                    <li key={index} className='mb-2 flex items-center text-[14px]'>
                                        <FaCheckCircle className='text-green-600 mr-4' />
                                        {item}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Youtube;
