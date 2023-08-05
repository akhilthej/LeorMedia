import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 0.1 * window.innerHeight;
      setIsScrolled(!isTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`sticky top-0 z-50 -mb-24 bg-white`}>
      <div className='w-full h-24 flex justify-between items-center pl-10 md:pl-15 text-black'>
        <Link to='/'>
          <img className="h-auto w-20" src={require('../../assets/Common/LEORMEDIA_navbarlogo.png')} alt='leor_logo' />
        </Link>

        <div className="md:justify-end">
          <ul className='flex items-center space-x-4 md:space-x-8'>
            <NavItem to='/services'>Services</NavItem>
            <NavItem to='/clients'>Clients</NavItem>
            <NavItem to='/getquotation'>Get Quotation</NavItem>
            <NavItem to='/aboutus'>About us</NavItem>
            <NavItem to='/contactus'>Contact us</NavItem>
            <li className='p-4'>
              <DropdownMenu />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ to, children }) => (
  <li className='p-4 hidden md:block'>
    <Link to={to}>{children}</Link>
  </li>
);

const DropdownMenu = () => (
  <Menu as='div' className='relative inline-block text-left'>
    <div>
      <Menu.Button className='md:hidden inline-flex justify-center w-full rounded-md border border-gray-900 shadow-sm px-4 py-2 bg-white text-sm font-medium text-black hover:bg-black hover:text-white focus:outline-none'>
        More
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
      <Menu.Items className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-900 focus:outline-none z-50'>
        <div className='py-1 md:hidden'>
          {menuItems.map((item) => (
            <Menu.Item key={item.to}>
              {({ active }) => (
                <Link to={item.to}>
                  <a className={classNames(
                    active ? 'bg-gray-700 text-black' : 'text-black',
                    'block px-4 py-2 text-sm'
                  )}>
                    {item.label}
                  </a>
                </Link>
              )}
            </Menu.Item>
          ))}
        </div>
        {/* Other menu items */}
      </Menu.Items>
    </Transition>
  </Menu>
);

const menuItems = [
  { to: '/services', label: 'Services' },
  { to: '/getquotation', label: 'Get Quotation' },
  { to: '/clients', label: 'Clients' },
  { to: '/aboutus', label: 'About us' },
  { to: '/contactus', label: 'Contact us' },
];

export default Navbar;
