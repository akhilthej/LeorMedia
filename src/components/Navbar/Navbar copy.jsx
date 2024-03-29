import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";

import NavbarLogo from "./csdv2Logonavbar.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  return (
    <section class=" sticky top-0 z-50 bg-white/90 drop-shadow-lg  ">
      <div className=" sm:px-2 w-full h-17 flex justify-between items-center text-black ">
        <Link to="/">
          <img
            class="pl-2 h-auto w-44  lg:w-52"
            src={NavbarLogo}
            alt="csd_logo"/>
        </Link>
        <div class=" justify-end ">
          <ul className="flex items-center">
            <Menu as="div" className="relative inline-block text-left ">
              <div>
                <Menu.Button className="lg:inline-flex font-semibold antialiased hidden justify-center w-full rounded-md  px-4 py-2  text-sm text-black hover:bg-yellow-500  focus:outline-none  ">
                  <Link to="/digital-creative-media-in-vizag">Digital Media Creative</Link>
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 mt-0.5 ml-1"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-300 ring-1 ring-black ring-opacity-5 divide-y divide-gray-400 focus:outline-none z-50">
                  <Menu.Item>
                    {({ active }) => (
                      <Link to="/logo-designing-in-vizag">
                        <a
                          className={classNames(
                            active ? "bg-yellow-500 text-white" : "text-black",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          <div className="flex items-center">
                            <div>
                            Logo Designing
                              <p className="text-xs text-gray-700">
                                Let's Build Your Business Online.
                              </p>
                            </div>
                          </div>
                        </a>
                      </Link>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <Link to="/graphic-designing-in-vizag">
                        <a
                          className={classNames(
                            active
                              ? " bg-yellow-500 text-white"
                              : " text-black",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Graphic Designing
                          <p className="text-xs text-gray-700">
                            Expand Your Business on a Global Scale.
                          </p>
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to="/web-design-in-vizag">
                        <a
                          className={classNames(
                            active ? "bg-yellow-500 text-white" : "text-black",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Website Designing
                          <p className="text-xs text-gray-700">
                            Transform Your Vision into a Mobile App Reality.
                          </p>
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to="/content-creation-in-vizag">
                        <a
                          className={classNames(
                            active ? "bg-yellow-500 text-white" : "text-black",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Content Creation
                          <p className="text-xs text-gray-700">
                            Unlock Creativity and Inspire with Stunning Graphic
                            Designs.
                          </p>
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to="/video-creation-in-vizag">
                        <a
                          className={classNames(
                            active ? "bg-yellow-500 text-white" : "text-black",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Video Creation
                          <p className="text-xs text-gray-700">
                            Crafting Your Brand Identity for Success.
                          </p>
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>


            <Menu as="div" className="relative inline-block text-left ">
              <div>
                <Menu.Button className="lg:inline-flex font-semibold antialiased hidden justify-center w-full rounded-md  px-4 py-2  text-sm text-black hover:bg-yellow-500  focus:outline-none  ">
                  <Link to="/branding-agency-in-vizag">Branding</Link>
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 mt-0.5 ml-1"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-300 ring-1 ring-black ring-opacity-5 divide-y divide-gray-400 focus:outline-none z-50">
                  <Menu.Item>
                    {({ active }) => (
                      <Link to="/brand-audit-services-in-vizag">
                        <a
                          className={classNames(
                            active ? "bg-yellow-500 text-white" : "text-black",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          <div className="flex items-center">
                            <div>
                            Brand Audit
                              <p className="text-xs text-gray-700">
                                Let's Build Your Business Online.
                              </p>
                            </div>
                          </div>
                        </a>
                      </Link>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <Link to="/brand-identity-in-vizag">
                        <a
                          className={classNames(
                            active
                              ? " bg-yellow-500 text-white"
                              : " text-black",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Brand Identity
                          <p className="text-xs text-gray-700">
                            Expand Your Business on a Global Scale.
                          </p>
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to="/brand-strategy-services">
                        <a
                          className={classNames(
                            active ? "bg-yellow-500 text-white" : "text-black",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Brand Statergy
                          <p className="text-xs text-gray-700">
                            Transform Your Vision into a Mobile App Reality.
                          </p>
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to="/infilm-branding-in-vizag">
                        <a
                          className={classNames(
                            active ? "bg-yellow-500 text-white" : "text-black",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Infilm Branding
                          <p className="text-xs text-gray-700">
                            Unlock Creativity and Inspire with Stunning Graphic
                            Designs.
                          </p>
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to="/corporate-branding-company-in-vizag">
                        <a
                          className={classNames(
                            active ? "bg-yellow-500 text-white" : "text-black",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Corporate Branding
                          <p className="text-xs text-gray-700">
                            Crafting Your Brand Identity for Success.
                          </p>
                        </a>
                      </Link>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <Link to="/labeling-in-vizag">
                        <a
                          className={classNames(
                            active ? "bg-yellow-500 text-white" : "text-black",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Labeling
                          <p className="text-xs text-gray-700">
                            Crafting Your Brand Identity for Success.
                          </p>
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to="/brand-position-in-vizag">
                        <a
                          className={classNames(
                            active ? "bg-yellow-500 text-white" : "text-black",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Brand Position
                          <p className="text-xs text-gray-700">
                            Crafting Your Brand Identity for Success.
                          </p>
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to="/logo-designing-in-vizag">
                        <a
                          className={classNames(
                            active ? "bg-yellow-500 text-white" : "text-black",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Logo Designing
                          <p className="text-xs text-gray-700">
                            Crafting Your Brand Identity for Success.
                          </p>
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>

            <Menu as="div" className="relative inline-block text-left ">
              <div>
                <Menu.Button className="lg:inline-flex font-semibold antialiased hidden justify-center w-full rounded-md  px-4 py-2  text-sm text-black hover:bg-yellow-500  focus:outline-none  ">
                  <Link to="/best-event-management-company-vizag">Events</Link>
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 mt-0.5 ml-1"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-300 ring-1 ring-black ring-opacity-5 divide-y divide-gray-400 focus:outline-none z-50">
                  <Menu.Item>
                    {({ active }) => (
                      <Link to="/birthday-event-organisers-in-vizag">
                        <a
                          className={classNames(
                            active ? "bg-yellow-500 text-white" : "text-black",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          <div className="flex items-center">
                            <div>
                            Birthday
                              <p className="text-xs text-gray-700">
                                Let's Build Your Business Online.
                              </p>
                            </div>
                          </div>
                        </a>
                      </Link>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <Link to="/wedding-planners-in-vizag">
                        <a
                          className={classNames(
                            active
                              ? " bg-yellow-500 text-white"
                              : " text-black",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Weddings
                          <p className="text-xs text-gray-700">
                            Expand Your Business on a Global Scale.
                          </p>
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to="/commercial-events-in-vizag">
                        <a
                          className={classNames(
                            active ? "bg-yellow-500 text-white" : "text-black",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Other Events
                          <p className="text-xs text-gray-700">
                            Transform Your Vision into a Mobile App Reality.
                          </p>
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                
                </Menu.Items>
              </Transition>
            </Menu>

            <Menu as="div" className="relative inline-block text-left ">
              <div>
                <Menu.Button className="lg:inline-flex font-semibold antialiased hidden justify-center w-full rounded-md  px-4 py-2  text-sm text-black hover:bg-yellow-500  focus:outline-none  ">
                  <Link to="/advertising-company-in-vizag">Advertising</Link>
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 mt-0.5 ml-1"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-300 ring-1 ring-black ring-opacity-5 divide-y divide-gray-400 focus:outline-none z-50">
                  <Menu.Item>
                    {({ active }) => (
                      <Link to="/atl-advertising-in-vizag">
                        <a
                          className={classNames(
                            active ? "bg-yellow-500 text-white" : "text-black",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          <div className="flex items-center">
                            <div>
                            ATL/BTL
                              <p className="text-xs text-gray-700">
                                Let's Build Your Business Online.
                              </p>
                            </div>
                          </div>
                        </a>
                      </Link>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <Link to="/google-ads-services-in-vizag">
                        <a
                          className={classNames(
                            active
                              ? " bg-yellow-500 text-white"
                              : " text-black",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Google Ads
                          <p className="text-xs text-gray-700">
                            Expand Your Business on a Global Scale.
                          </p>
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to="/facebook-ads-services-in-vizag">
                        <a
                          className={classNames(
                            active ? "bg-yellow-500 text-white" : "text-black",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Facebook Ads
                          <p className="text-xs text-gray-700">
                            Transform Your Vision into a Mobile App Reality.
                          </p>
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to="/instagram-ads-services-in-vizag">
                        <a
                          className={classNames(
                            active ? "bg-yellow-500 text-white" : "text-black",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Instagram Ads
                          <p className="text-xs text-gray-700">
                            Unlock Creativity and Inspire with Stunning Graphic
                            Designs.
                          </p>
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to="/influencer-marketing-services-in-vizag">
                        <a
                          className={classNames(
                            active ? "bg-yellow-500 text-white" : "text-black",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Influncer Marketing
                          <p className="text-xs text-gray-700">
                            Crafting Your Brand Identity for Success.
                          </p>
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to="/content-marketing-company-in-vizag">
                        <a
                          className={classNames(
                            active ? "bg-yellow-500 text-white" : "text-black",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Content Marketing
                          <p className="text-xs text-gray-700">
                            Crafting Your Brand Identity for Success.
                          </p>
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to="/email-marketing-services-in-vizag">
                        <a
                          className={classNames(
                            active ? "bg-yellow-500 text-white" : "text-black",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Email Marketing
                          <p className="text-xs text-gray-700">
                            Crafting Your Brand Identity for Success.
                          </p>
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to="/search-engine-optimization">
                        <a
                          className={classNames(
                            active ? "bg-yellow-500 text-white" : "text-black",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Search Engine Optimization
                          <p className="text-xs text-gray-700">
                            Crafting Your Brand Identity for Success.
                          </p>
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to="/social-media-marketing-services-in-vizag">
                        <a
                          className={classNames(
                            active ? "bg-yellow-500 text-white" : "text-black",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Socail Media Management
                          <p className="text-xs text-gray-700">
                            Crafting Your Brand Identity for Success.
                          </p>
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>


            <li className="p-4 text-sm hidden lg:block font-medium antialiased rounded-md  px-4 py-2   text-black hover:bg-yellow-500  focus:outline-none">
              <Link to="/clients">Clients</Link>
            </li>
            
            <li className="p-4">
              <Menu as="div" className="relative inline-block text-left  ">
                <div>
                  <Menu.Button className=" text-3xl">
                  ☰
                  
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-300 ring-1 ring-black ring-opacity-5 divide-y divide-gray-400 focus:outline-none z-50">
                    <div className="block lg:hidden">
                      <Menu.Item>
                        {({ active }) => (
                          <Link to="/digital-creative-media-in-vizag">
                            <a
                              className={classNames(
                                active
                                  ? "bg-yellow-500 text-white"
                                  : "text-black",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Digital Media Creative
                            </a>
                          </Link>
                        )}
                      </Menu.Item>

                      
                      <Menu.Item>
                        {({ active }) => (
                          <Link to="/best-event-management-company-vizag">
                            <a
                              className={classNames(
                                active
                                  ? "bg-yellow-500 text-white"
                                  : "text-black",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Events
                            </a>
                          </Link>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <Link to="/branding-agency-in-vizag">
                            <a
                              className={classNames(
                                active
                                  ? "bg-yellow-500 text-white"
                                  : "text-black",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Branding
                            </a>
                          </Link>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <Link to="/advertising-company-in-vizag">
                            <a
                              className={classNames(
                                active
                                  ? "bg-yellow-500 text-white"
                                  : "text-black",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Advertising
                            </a>
                          </Link>
                        )}
                      </Menu.Item>



                   
                    

                    

                    <Menu.Item>
                        {({ active }) => (
                          <Link to="/clients">
                            <a
                              className={classNames(
                                active
                                  ? "bg-yellow-500 text-white"
                                  : "text-black",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Clients
                            </a>
                          </Link>
                        )}
                      </Menu.Item></div>

                      
                      <Menu.Item>
                      {({ active }) => (
                        <Link to="/blogs">
                          <a
                            className={classNames(
                              active
                                ? "bg-yellow-500 text-white"
                                : "text-black",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Blogs
                          </a>
                        </Link>
                      )}
                    </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <Link to="/aboutus">
                            <a
                              className={classNames(
                                active
                                  ? "bg-yellow-500 text-white"
                                  : "text-black",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              About us
                            </a>
                          </Link>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <Link to="/contact">
                            <a
                              className={classNames(
                                active
                                  ? "bg-yellow-500 text-white"
                                  : "text-black",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Contact us
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
          </ul>
        </div>
      </div>
    </section>

  );
};




export default Navbar;
