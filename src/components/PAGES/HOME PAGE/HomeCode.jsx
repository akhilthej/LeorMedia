import React from 'react';
import './Home.css';

import {DigitalCreativeMedia,HeroCoverBG,EventManagement,Branding,Advertising} from '../../data/leordata';

const HeroCode = () => {
  return (
  <main>

{/*Section -1*/}
    <section>
      <div className="hero-cover">
      <div className="hero-content">
        <h3>LARGEST DIGITAL MARKETPLACE</h3>
        <h1>Explore The World of Options And Collectibles.</h1>
        <p>A One-Stop Creative Media For Events, Branding & Advertising Consult & Find Solutions</p>
        <div className='flex'>
        <button >Let's Plan A Event</button>
        <button >Let's Plan A Event</button>
        </div>
      </div>
      </div>
    </section>

{/*Section -2*/}
    <section className="boxed-about-home">
      <div className="about-homeimages">
        <div className="column left-column">
          <img src={require('../../../assets/home/about-home-image.png')} alt='about-home'/>      
        </div>
        <div className="column right-column">
          <h3>About us</h3>
          <p>Leor Media is a one-stop Event Management Company offering cutting edge solutions in Event Management, Creative Media, Branding, Advertising and Digital Marketing helping clients in making memories, improving their business process, business outcome aiming at customer satisfaction while minimizing their operational expenses.</p>
        </div>
      </div>
    </section>

{/*Section -3*/}
    <section>
      {/*MainFeatures */}
      <div style={{
      backgroundImage: `url(${HeroCoverBG})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundPosition: "center",}}>

      <section>
      <div className="pb-10  overflow-hidden">
        <div className=" container m-auto px-6 space-y-8 text-gray-500 md:px-12">
        <div className="bg-black/80 mt-0.5 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
        <div className="relative group  transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block">
        
        
        <div className="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-orange-500 group-hover:border group-hover:scale-90">
          <img
            src={DigitalCreativeMedia}
            className="w-10"
            width={512}
            height={512}
            alt="morefeatures"
          />
          <div className="space-y-2">
            <h5 className="text-xl text-white font-medium transition group-hover:text-white">
              Digital Creative Media
            </h5>
            <p className="text-sm text-white">
            Checkout of services page for more features or contact our support team if your looking for some new ideas.
            </p>
          </div>
          <a
            href="#/services"
            className="flex justify-between items-center group-hover:text-white"
          >
            <span className="text-sm">Read more</span>
            <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              →
            </span>
          </a>
        </div>
      </div>

      <div className="relative group  transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block">
        <div className="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-yellow-500 group-hover:border group-hover:scale-90">
          <img
            src={EventManagement}
            className="w-10"
            width={512}
            height={512}
            alt="morefeatures"
          />
          <div className="space-y-2">
            <h5 className="text-xl text-white font-medium transition group-hover:text-white">
              Event Management
            </h5>
            <p className="text-sm text-white">
            Checkout of services page for more features or contact our support team if your looking for some new ideas.
            </p>
          </div>
          <a
            href="#/services"
            className="flex justify-between items-center group-hover:text-white"
          >
            <span className="text-sm">Read more</span>
            <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              →
            </span>
          </a>
        </div>
      </div>

      <div className="relative group  transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block">
        <div className="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-blue-500 group-hover:border group-hover:scale-90">
          <img
            src={Branding}
            className="w-10"
            width={512}
            height={512}
            alt="morefeatures"
          />
          <div className="space-y-2">
            <h5 className="text-xl text-white font-medium transition group-hover:text-white">
              Branding
            </h5>
            <p className="text-sm text-white">
            Checkout of services page for more features or contact our support team if your looking for some new ideas.
            </p>
          </div>
          <a
            href="#/services"
            className="flex justify-between items-center group-hover:text-white"
          >
            <span className="text-sm">Read more</span>
            <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              →
            </span>
          </a>
        </div>
      </div>

      <div className="relative group  transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block">
        <div className="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-red-500 group-hover:border group-hover:scale-90">
          <img
            src={Advertising}
            className="w-10"
            width={512}
            height={512}
            alt="morefeatures"
          />
          <div className="space-y-2">
            <h5 className="text-xl text-white font-medium transition group-hover:text-white">
              Advertising
            </h5>
            <p className="text-sm text-white">
            Checkout of services page for more features or contact our support team if your looking for some new ideas.
            </p>
          </div>
          <a
            href="#/services"
            className="flex justify-between items-center group-hover:text-white"
          >
            <span className="text-sm">Read more</span>
            <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              →
            </span>
          </a>
        </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      </div>
    </section>

  </main>
  );
};

export default HeroCode;
