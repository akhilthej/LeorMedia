import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DropdownItem = ({ children, to }) => {
  return (
    <Link
      to={to}
      className="block px-4 py-2 text-sm text-white hover:bg-yellow-500">
      {children}
    </Link>
  );
};

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-white hover:bg-yellow-500 px-3 py-2 rounded-md text-sm font-medium">
    {children}
  </Link>
);

const Submenu = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="text-white hover:bg-yellow-500 px-3 py-2 rounded-md text-sm font-medium">
        {title}
      </button>
      {isOpen && (
        <div className="origin-top-left absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-orange-600 ring-1 ring-black ring-opacity-5">
          <div className="py-1">{children}</div>
        </div>
      )}
    </div>
  );
};

const Submenulvl1 = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (

    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="block px-4 py-2 text-sm text-white hover:bg-yellow-500">
        {title}
      </button>
      {isOpen && (
        <div className="origin-top-left absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-orange-600 ring-1 ring-black ring-opacity-5">
          <div className="py-1">{children}</div>
        </div>
      )}
    </div>
  );
};


const Navbar = () => {
  return (
    <nav className="bg-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white flex items-center space-x-2">
              <img
                className="h-14 w-auto"
                src={require('../../assets/Common/LEORMEDIA_navbarlogo.png')}
                alt='leor_logo'/>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <NavLink to="/about">About</NavLink>
              <NavLink to="/digital-creative-media">Digital Creative Media</NavLink>
              
              <Submenu title="Branding">
              <DropdownItem to="/branding-agency-in-vizag">Build Your Brand</DropdownItem>
                <DropdownItem to="/web-design-and-development-company">Web Design</DropdownItem>
                
                <Submenulvl1  title="Digital Marketing">
                  <DropdownItem to="/seo-services-company-vizag">SEO</DropdownItem>
                  <DropdownItem to="/social-media-marketing-company">SMM</DropdownItem>
                  <DropdownItem to="/content-marketing-services-vizag">Content Marketing</DropdownItem>
                  <DropdownItem to="/email-marketing">Email Marketing</DropdownItem>
                </Submenulvl1>
              </Submenu>

              <Submenu title="Events">
              <DropdownItem to="/best-event-management-company-vizag">All Events</DropdownItem>
                <Submenulvl1  title="Wedding">
                  <DropdownItem to="/wedding-planners">Wedding Planners</DropdownItem>
                  <DropdownItem to="/reception">Reception</DropdownItem>
                  <DropdownItem to="/engagement">Engagement</DropdownItem>
                  <DropdownItem to="/sangeet-mehandi">Sangeet/Mehandi</DropdownItem>
                  <DropdownItem to="/destination-wedding-planners">Destination Wedding</DropdownItem>
                </Submenulvl1>
                <DropdownItem to="/birthday-party-planners">Birthdays</DropdownItem>
                <DropdownItem to="/corporate-event-planners">Corporate Events</DropdownItem>
                <DropdownItem to="/cultural-nights">Cultural Nights</DropdownItem>
                <DropdownItem to="/audio-launches">Audio Launches</DropdownItem>
                <DropdownItem to="/award-nights">Award Nights</DropdownItem>
                <DropdownItem to="/product-launches">Product Launches</DropdownItem>
                <DropdownItem to="/fashion-shows">Fashion Shows</DropdownItem>
              </Submenu>

              <Submenu title="Advertising">
                <DropdownItem to="/atl-advertising">ATL</DropdownItem>
                <DropdownItem to="/btl-activities">BTL</DropdownItem>
              </Submenu>

              <NavLink to="/contact">Contact</NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
