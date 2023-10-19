import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  return (
    <main className=" sticky top-0 z-50 bg-white -mb-20 py-2">
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

        <Menu as='div' className='relative  text-left hidden md:inline-block'>
            <div>
              <Menu.Button className='flex justify-center p-4'>
                Branding
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
              leaveTo='transform opacity-0 scale-95' >
              <Menu.Items className='origin-top-right absolute right-0 mt-3 w-56 rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5 divide-y divide-gray-900 focus:outline-none z-50'>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to='/branding-agency-in-vizag'><a
                        className={classNames(
                          active
                            ? 'bg-gray-700 text-white'
                            : 'text-white',
                          'block px-4 py-2 text-sm'
                        )}>
                      Build Your Brand
                      </a></Link>
                    )}
                  </Menu.Item>
                  <Menu.Item >
                    {({ active }) => (
                      <Link to='/web-design-and-development-company'>
                        <a className={classNames(
                          active
                            ? 'bg-gray-700 text-white'
                            : 'text-white',
                          'block px-4 py-2 text-sm'
                        )}>
                      Web Design
                      </a></Link>
                    )}
                  </Menu.Item>

                <Menu as='div'>
              <Menu.Button className='flex justify-center p-4 text-white'>
              Digital Marketing
                <svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 mt-0.5 ml-1">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </Menu.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95' >
              <Menu.Items className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 divide-y divide-gray-900 focus:outline-none z-50'>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to='/seo-services-company-vizag'><a
                        className={classNames(
                          active
                            ? 'bg-gray-700 text-white'
                            : 'text-white',
                          'block px-4 py-2 text-sm'
                        )}>
                      SEO
                      </a></Link>
                    )}
                  </Menu.Item>
                  <Menu.Item >
                    {({ active }) => (
                      <Link to='/social-media-marketing-company'>
                        <a className={classNames(
                          active
                            ? 'bg-gray-700 text-white'
                            : 'text-white',
                          'block px-4 py-2 text-sm'
                        )}>
                      SMM
                      </a></Link>
                    )}
                  </Menu.Item>
                  <Menu.Item >
                    {({ active }) => (
                      <Link to='/content-marketing-services-vizag'>
                        <a className={classNames(
                          active
                            ? 'bg-gray-700 text-white'
                            : 'text-white',
                          'block px-4 py-2 text-sm'
                        )}>
                      Content Marketing
                      </a></Link>
                    )}
                  </Menu.Item>
                  <Menu.Item >
                    {({ active }) => (
                      <Link to='/email-marketing'>
                        <a className={classNames(
                          active
                            ? 'bg-gray-700 text-white'
                            : 'text-white',
                          'block px-4 py-2 text-sm'
                        )}>
                      Email Marketing
                      </a></Link>
                    )}
                  </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
              </Menu.Items>
            </Transition>
        </Menu>

        
        <Menu as='div' className='relative  text-left hidden md:inline-block'>
            <div>
              <Menu.Button className='flex justify-center p-4'>
                Events
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
              leaveTo='transform opacity-0 scale-95' >
              <Menu.Items className='origin-top-right absolute right-0 mt-3 w-56 rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5 divide-y divide-gray-900 focus:outline-none z-50'>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to='/best-event-management-company-vizag'><a
                        className={classNames(
                          active
                            ? 'bg-gray-700 text-white'
                            : 'text-white',
                          'block px-4 py-2 text-sm'
                        )}>
                      All Events
                      </a></Link>
                    )}
                  </Menu.Item>

                  <Menu as='div'>
              <Menu.Button className='flex justify-center p-4 text-white '>
              Wedding
                <svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 mt-0.5 ml-1">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </Menu.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95' >
              <Menu.Items className='origin-top-right absolute right-0   rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 divide-y divide-gray-900 focus:outline-none z-50'>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to='/wedding-planners'><a
                        className={classNames(
                          active
                            ? 'bg-gray-700 text-white'
                            : 'text-white',
                          'block px-4 py-2 text-sm'
                        )}>
                      Wedding Planners
                      </a></Link>
                    )}
                  </Menu.Item>
                  <Menu.Item >
                    {({ active }) => (
                      <Link to='/reception'>
                        <a className={classNames(
                          active
                            ? 'bg-gray-700 text-white'
                            : 'text-white',
                          'block px-4 py-2 text-sm'
                        )}>
                      Reception
                      </a></Link>
                    )}
                  </Menu.Item>
                  <Menu.Item >
                    {({ active }) => (
                      <Link to='/engagement'>
                        <a className={classNames(
                          active
                            ? 'bg-gray-700 text-white'
                            : 'text-white',
                          'block px-4 py-2 text-sm'
                        )}>
                      Engagement
                      </a></Link>
                    )}
                  </Menu.Item>
                  <Menu.Item >
                    {({ active }) => (
                      <Link to='/sangeet-mehandi'>
                        <a className={classNames(
                          active
                            ? 'bg-gray-700 text-white'
                            : 'text-white',
                          'block px-4 py-2 text-sm'
                        )}>
                      Sangeet/Mehandi
                      </a></Link>
                    )}
                  </Menu.Item>
                  <Menu.Item >
                    {({ active }) => (
                      <Link to='/destination-wedding-planners'>
                        <a className={classNames(
                          active
                            ? 'bg-gray-700 text-white'
                            : 'text-white',
                          'block px-4 py-2 text-sm'
                        )}>
                      Destination Wedding
                      </a></Link>
                    )}
                  </Menu.Item>
              </Menu.Items>
            </Transition>
                </Menu>

                  <Menu.Item >
                    {({ active }) => (
                      <Link to='/birthday-party-planners'>
                        <a className={classNames( active ? 'bg-gray-700 text-white' : 'text-white','block px-4 py-2 text-sm')}>
                      Birthdays </a></Link>
                    )}
                  </Menu.Item>
                  <Menu.Item >
                    {({ active }) => (
                      <Link to='/corporate-event-planners'>
                        <a className={classNames( active ? 'bg-gray-700 text-white' : 'text-white','block px-4 py-2 text-sm')}>
                      Corporate Events </a></Link>
                    )}
                  </Menu.Item>
                  <Menu.Item >
                    {({ active }) => (
                      <Link to='/cultural-nights'>
                        <a className={classNames( active ? 'bg-gray-700 text-white' : 'text-white','block px-4 py-2 text-sm')}>
                      Cultural Nights </a></Link>
                    )}
                  </Menu.Item>
                  <Menu.Item >
                    {({ active }) => (
                      <Link to='/audio-launches'>
                        <a className={classNames( active ? 'bg-gray-700 text-white' : 'text-white','block px-4 py-2 text-sm')}>
                      Audio Launches </a></Link>
                    )}
                  </Menu.Item>
                  <Menu.Item >
                    {({ active }) => (
                      <Link to='/award-nights'>
                        <a className={classNames( active ? 'bg-gray-700 text-white' : 'text-white','block px-4 py-2 text-sm')}>
                      Award Nights </a></Link>
                    )}
                  </Menu.Item>
                  <Menu.Item >
                    {({ active }) => (
                      <Link to='/product-launches'>
                        <a className={classNames( active ? 'bg-gray-700 text-white' : 'text-white','block px-4 py-2 text-sm')}>
                      Product Launches </a></Link>
                    )}
                  </Menu.Item>
                  <Menu.Item >
                    {({ active }) => (
                      <Link to='/fashion-shows'>
                        <a className={classNames( active ? 'bg-gray-700 text-white' : 'text-white','block px-4 py-2 text-sm')}>
                      Fashion Shows </a></Link>
                    )}
                  </Menu.Item>


                
              </Menu.Items>
            </Transition>
          </Menu>


        <Menu as='div' className='relative  text-left hidden md:inline-block'>
            <div>
              <Menu.Button className='flex justify-center p-4'>
                Advertising
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
              leaveTo='transform opacity-0 scale-95' >
              <Menu.Items className='origin-top-right absolute right-0 mt-3 w-24 rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5 divide-y divide-gray-900 focus:outline-none z-50'>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to='/atl-advertising'><a
                        className={classNames(
                          active
                            ? 'bg-gray-700 text-white'
                            : 'text-white',
                          'block px-4 py-2 text-sm'
                        )}>
                      ATL
                      </a></Link>
                    )}
                  </Menu.Item>
                  <Menu.Item >
                    {({ active }) => (
                      <Link to='/btl-activities'>
                        <a className={classNames(
                          active
                            ? 'bg-gray-700 text-white'
                            : 'text-white',
                          'block px-4 py-2 text-sm'
                        )}>
                      BTL
                      </a></Link>
                    )}
                  </Menu.Item>

              </Menu.Items>
            </Transition>
          </Menu>
        
        <li className='p-4 hidden md:block'><Link to='/contact'>Contact us</Link></li>




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
                      <Link to='/getquotation'><a
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
                      <Link to='/clients'><a
                        className={classNames(
                          active
                            ? 'bg-black text-white'
                            : 'text-black',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                      Clients
                      </a></Link>
                    )}
                  </Menu.Item>
            
              
                  <Menu.Item>
                    {({ active }) => (
                      <Link to='/technologies'><a
                      
                        className={classNames(
                          active
                            ? 'bg-black text-white'
                            : 'text-black',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Technologies
                        
                      </a></Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to='/reviews'><a
                        className={classNames(
                          active
                            ? 'bg-black text-white'
                            : 'text-black',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Reviews
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