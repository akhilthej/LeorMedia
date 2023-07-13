import React from 'react';
import './Home.scss';
import '../../Tools/Animations.scss';

import Video1 from "./video1.mp4";

const HomeHero = () => {
  return (
    <div className="relative">
      <video className="background-video min-h-screen min-w-screen top-0 absolute z-0 object-cover" autoPlay muted loop>
        <source src={Video1} type="video/mp4" />
        {/* Add additional source tags for different video formats if needed */}
        Your browser does not support the video tag.
      </video>
      <div className='min-h-screen -mt-24 relative z-10 flex items-center justify-center'>
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
          <div className="mt-6 flex items-center justify-center gap-4">
            <a
              href="/contactus"
              className="transform rounded-md border border-slate-600 px-5 py-3 font-medium text-white transition-colors hover:bg-yellow-500 hover:text-white">
              Contact us
            </a>
            <a
              href="/getquotation"
              className="transform rounded-md border border-slate-600 px-5 py-3 font-medium text-white transition-colors hover:bg-orange-500 hover:text-white"
            >
              Know More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
