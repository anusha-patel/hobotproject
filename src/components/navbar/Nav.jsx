import React, { useState, useEffect } from 'react';

const Nav = () => {
  const [expanded, setExpanded] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Close the dropdown if the user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest('.dropdown') === null) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white fixed w-full z-20 ">
      <div className="max-w-7xl  mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center ">
            <a href="#home" className="flex-shrink-0">
              <img className='w-20 md:w-full' src="habotlogo.png" alt="Logo" />
            </a>
          </div>
          <div className='flex items-center space-x-10'>
          <div className="hidden md:block">
              <div className=" flex items-baseline">
                <a
                  href="#FindSuppliers"
                  className=" px-2 py-2 rounded-md font-poppins text-[1rem] text-gray-600 duration-200 hover:text-white hover:bg-gray-700"
                >
                  Find Suppliers
                </a>
                <div className="relative dropdown">
                  <a
                    href="#FindService"
                    className="ml-2 px-2 py-2 rounded-md font-poppins text-[1rem] text-gray-600 duration-200 hover:text-white hover:bg-gray-700 "
                    onClick={toggleDropdown}
                  >
                    Find Service Tags
                  </a>
                  {dropdownOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-gray-800 text-white rounded-md shadow-lg">
                      <ul className="space-y-2 p-2">
                        <li>
                          <a
                            href="#tag1"
                            className="block px-4 py-2 text-sm hover:bg-gray-700"
                          >
                            Service Tag 1
                          </a>
                        </li>
                        <li>
                          <a
                            href="#tag2"
                            className="block px-4 py-2 text-sm hover:bg-gray-700"
                          >
                            Service Tag 2
                          </a>
                        </li>
                        <li>
                          <a
                            href="#tag3"
                            className="block px-4 py-2 text-sm hover:bg-gray-700"
                          >
                            Service Tag 3
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
               
              
              </div>
         
          </div>
           <button className="font-semibold text-xs md:text-xl rounded-md text-green-800 border border-green-900 py-1  px-3 ml-auto hover:bg-green-800 hover:text-white">
                  Login / SignUp
            </button>

          </div>

          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              <svg
                className="block h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    expanded
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${expanded ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#FindSuppliers"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900"
          >
            Find Suppliers
          </a>
          <div className="relative dropdown">
            <a
              href="#FindService"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 bg-gray-900"
              onClick={toggleDropdown}
            >
              Find Service Tags
            </a>
            {dropdownOpen && (
              <div className="absolute w-full  left-0 mt-2  bg-gray-800 text-white rounded-md shadow-lg">
                <ul className="space-y-2 p-2">
                  <li>
                    <a
                      href="#tag1"
                      className="block px-4 py-2 text-sm hover:bg-gray-700"
                    >
                      Service Tag 1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#tag2"
                      className="block px-4 py-2 text-sm hover:bg-gray-700"
                    >
                      Service Tag 2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#tag3"
                      className="block px-4 py-2 text-sm hover:bg-gray-700"
                    >
                      Service Tag 3
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Nav;
