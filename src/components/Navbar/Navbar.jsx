import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const [isDarkBackground, setIsDarkBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const threshold = 100; // Adjust the threshold value as needed
      setIsDarkBackground(scrollTop > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className='sticky top-0 z-50'>
      <div
        className={`w-full h-24 flex justify-between items-center pl-10 md:pl-15 ${
          isDarkBackground ? 'text-white' : 'text-black'
        }`}
      >
        <Link to='/'>
          <img
            className="h-auto w-20"
            src={require('../../assets/Common/LEORMEDIA_navbarlogo.png')}
            alt='leor_logo'
          />
        </Link>

        <div className="justify-end">
          <ul className='flex items-center'>
            <li className='p-4 hidden md:block'>
              <Link to='/services'>Services</Link>
            </li>
            <li className='p-4 hidden md:block'>
              <Link to='/clients'>Clients</Link>
            </li>
            <li className='p-4 hidden md:block'>
              <Link to='/getquotation'>Get Quotation</Link>
            </li>
            <li className='p-4 hidden md:block'>
              <Link to='/aboutus'>About us</Link>
            </li>
            <li className='p-4 hidden md:block'>
              <Link to='/contactus'>Contact us</Link>
            </li>
            <li className='p-4'>
              <Menu as='div' className='relative inline-block text-left'>
                <div>
                  <Menu.Button
                    className={`md:hidden inline-flex justify-center w-full rounded-md border border-gray-900 shadow-sm px-4 py-2 bg-white text-sm font-medium ${
                      isDarkBackground ? 'text-black hover:bg-black hover:text-white' : 'text-black hover:bg-white hover:text-black'
                    } focus:outline-none`}
                  >
                    
                    <svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 mt-0.5 ml-1">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <Menu.Items className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-900 focus:outline-none z-50 ${isDarkBackground ? 'text-black' : 'text-black'}`}>
                    <div className='py-1 md:hidden'>
                      <Menu.Item>
                        {({ active }) => (
                          <Link to='/services'>
                            <a
                              className={classNames(
                                active ? 'bg-gray-700 text-black' : 'text-black',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Services
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link to='/getquotation'>
                            <a
                              className={classNames(
                                active ? 'bg-gray-700 text-black' : 'text-black',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Get Quotation
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link to='/clients'>
                            <a
                              className={classNames(
                                active ? 'bg-gray-700 text-black' : 'text-black',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Clients
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                    </div>

                    <div className='py-1 md:hidden'>
                      <Menu.Item>
                        {({ active }) => (
                          <Link to='/aboutus'>
                            <a
                              className={classNames(
                                active ? 'bg-gray-700 text-black' : 'text-black',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              About us
                            </a>
                          </Link>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <Link to='/contactus'>
                            <a
                              className={classNames(
                                active ? 'bg-gray-700 text-black' : 'text-black',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Contact us
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                    </div>

                    {/*---Payments--- */}
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
