import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  return (
    <main className=" sticky top-0 z-50 bg-white py-2">
      <div className="w-full h-14 flex justify-between items-center px-4 sm:px-10 md:px-15 text-black">
        <Link to="/">
          <img
            className="h-10 w-auto"
            src={require('../../assets/Common/LEORMEDIA_navbarlogo.png')}
            alt="Leormedia_logo"
          />
        </Link>

        <div className="flex justify-end">
          <ul className="flex items-center text-sm">
            <li className="p-4 hidden md:block"> <Link to="/aboutus">About</Link></li>
            <li className="p-4 hidden md:block"> <Link to="/digital-creative-media">Digital Creative Media</Link></li>
            <li className="p-4 hidden md:block"> <Link to="/branding-agency-in-vizag">Branding</Link></li>
            <li className="p-4 hidden md:block"> <Link to="/best-event-management-company-vizag">Events</Link></li>
            <li className="p-4 hidden md:block"> <Link to="/advertising-company-in-vizag">Advertising</Link></li>
            <li className="p-4 hidden md:block"> <Link to="/contact">Contact</Link></li>

        


        <li className='p-4 block md:hidden'>
        <Menu as='div' className='relative inline-block text-left '>
            <div>
              <Menu.Button className='inline-flex justify-center w-full rounded-md border border-gray-900 shadow-sm px-4 py-2 bg-white text-sm font-medium text-black hover:text-white  hover:bg-black focus:outline-none  '>
                More
                <svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 mt-0.5 ml-1">
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
              <Menu.Items className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-900 focus:outline-none z-50'>

                  <Menu.Item>
                    {({ active }) => (
                      <Link to='/digital-creative-media'><a
                        className={classNames(
                          active
                            ? 'bg-black text-white'
                            : 'text-black',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                      Digital Creative Media
                        
                      </a></Link>
                    )}
                  </Menu.Item>
                  
                  <Menu.Item >
                    {({ active }) => (
                      <Link to='/branding-agency-in-vizag'><a
                        className={classNames(
                          active
                            ? 'bg-black text-white'
                            : 'text-black',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                      Branding
                      </a></Link>
                    )}
                  </Menu.Item>

                  <Menu.Item >
                    {({ active }) => (
                      <Link to='/best-event-management-company-vizag'><a
                        className={classNames(
                          active
                            ? 'bg-black text-white'
                            : 'text-black',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                      Events
                      </a></Link>
                    )}
                  </Menu.Item>
            
              
                  <Menu.Item>
                    {({ active }) => (
                      <Link to='/advertising-company-in-vizag'><a
                      
                        className={classNames(
                          active
                            ? 'bg-black text-white'
                            : 'text-black',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Advertising
                        
                      </a></Link>
                    )}
                  </Menu.Item>
                  
                  
                  <Menu.Item>
                    {({ active }) => (
                      <Link to='/aboutus'><a

                        className={classNames(
                          active
                            ? 'bg-black text-white'
                            : 'text-black',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        About us
                     
                      </a></Link>
                    )}
                  </Menu.Item>

                  <Menu.Item >
                    {({ active }) => (
                      <Link to='/contact'><a
                        className={classNames(
                          active
                            ? 'bg-black text-white'
                            : 'text-black',
                          'block px-4 py-2 text-sm'
                        )} >
                       Contact us
                      </a></Link>
                    )}
                  </Menu.Item>
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