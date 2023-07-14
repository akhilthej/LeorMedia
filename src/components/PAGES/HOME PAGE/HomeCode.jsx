import React from 'react';
import './Home.scss';

import Video1 from "./video1.mp4";

const HomeHero = () => {
  return (
    <div className="relative">
      <video className="background-video h-screen w-screen top-0 absolute z-0 object-cover" autoPlay muted loop>
        <source src={Video1} type="video/mp4" />
        {/* Add additional source tags for different video formats if needed */}
        Your browser does not support the video tag.
      </video>
      <div className='h-screen -mt-24 relative z-10 flex flex-col items-center justify-center'>
        <div className="mx-auto my-auto max-w-[55rem] text-center">
          <h1 className="fade-in-down font-extrabold text-transparent text-2xl md:text-8xl bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 mt-3 text-[3.5rem] leading-[4rem] tracking-tight text-black">
            LEOR MEDIA
          </h1>
          <h2 className="px-4 text-lg leading-relaxed text-white font-bold">
            EVENTS | BRANDING | ADVERTISING
          </h2>
          <span className="px-4 mt-3 text-lg leading-relaxed text-white">
            Crafting Unforgettable Experiences, Elevating Brands, and Igniting Creativity.
          </span>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="/contactus"
              className="transform rounded-md  bg-white px-5 py-3 font-medium text-black transition-colors hover:bg-orange-500 hover:text-white"
            >
              Contact us
            </a>
            <a
              href="/getquotation"
              className="transform rounded-md   px-5 py-3 font-medium text-black transition-colors hover:bg-orange-500 hover:text-white"
            >
              Know More
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full flex justify-between px-6 pb-6 ">
          <div className="overlay-title hidden md:block">
            <a href="/events1" className="text-white font-bold hover:text-orange-500">WEDDING PLANNERS</a>
          </div>
          <div className="overlay-title hidden md:block">
            <a href="/events2" className="text-white font-bold hover:text-orange-500">EVENT PLANNERS</a>
          </div>
          <div className="overlay-title hidden md:block">
            <a href="/events3" className="text-white font-bold hover:text-orange-500">OUTDOOR ADVERTISEMENT</a>
          </div>
          <div className="overlay-title hidden md:block">
            <a href="/events4" className="text-white font-bold hover:text-orange-500">BRANDING & BRAND DESIGNING</a>
          </div>
          <div className="overlay-title hidden md:block">
            <a href="/events6" className="text-white font-bold hover:text-orange-500">DIGITAL MEDIA MARKETING</a>
          </div>
          <div className="overlay-title hidden md:block">
            <a href="/events6" className="text-white font-bold hover:text-orange-500">DIGITAL CREATIVE MEDIA</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
