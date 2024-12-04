import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full h-[20rem] md:h-60 bg-[#123557] flex  items-center'>
      <div className='w-full relative md:w-[80%] mx-auto h-30 md:h-40 border-t-2 border-b-2 flex flex-col md:flex-row   justify-center'>
        <div className='w-full md:w-[100%]  flex flex-col-reverse md:flex-row justify-start items-start'>
        <div className='flex flex-col md:w-40 mx-auto md:mx-0 h-full justify-center items-center mt-6 md:mt-0'>
          <img src="habotlogo.png" alt="" className='md:w-30 h-10 object-cover' />
          <p className='text-white'>© Mohd Khalid</p>
        </div>
        <div className='w-[40%]  text-white h-full flex space-x-10 items-start ml-10 mt-5 '>
          <div className='flex flex-col  space-y-2 '>
            <h1 className='text-xl  '>company</h1>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">About</a></li>
              <li><a href="#" className="hover:text-gray-400">FAQ</a></li>
            </ul>
          </div>

          <div className='flex flex-col space-y-2'>
            <h1 className='text-xl'>Terms</h1>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Data Privacy</a></li>
              <li><a href="#" className="hover:text-gray-400">Terms</a></li>
              <li><a href="#" className="hover:text-gray-400">Accessibility</a></li>
            </ul>
          </div>

          <div className='flex flex-col space-y-2'>
            <h1 className='text-xl'>Related</h1>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Find Buyer</a></li>
              <li><a href="#" className="hover:text-gray-400">Feedback</a></li>
            </ul>
          </div>

        </div>
        </div>
       
        <div className='flex w-full md:w-[20%]  justify-center'>
        <div className="flex py-2 justify-center text-white  items-center space-x-4  ">
          <a href="#" className="text-xl hover:text-gray-400"><FaFacebookF /></a>
          <a href="#" className="text-xl hover:text-gray-400"><FaTwitter /></a>
          <a href="#" className="text-xl hover:text-gray-400"><FaInstagram /></a>
          <a href="#" className="text-xl hover:text-gray-400"><FaLinkedinIn /></a>
        </div>

        </div>
       

      </div>


    </div>
  )
}

export default Footer



