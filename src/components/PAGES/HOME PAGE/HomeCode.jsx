import React from 'react';
import "../HOME PAGE/Home.scss";

const HomeCode = () => {
  return (
    <section >
      <div className="relative flex mx-60 ">
        <img
          src={require('../../../assets/home/bg01.png')}
          alt="Cover Image"
          className="w-full h-full "
        />
        <div className="absolute top-1/2 left-5 transform -translate-y-1/2 text-left">
          <h3 className="text-3xl font-semibold text-white">LARGEST DIGITAL MARKETPLACE</h3>
          <h1 className="text-6xl font-bold text-white mt-2">
            Explore The World of Options And Collectibles.
          </h1>
          <p className="text-lg text-white mt-2">
            A One-Stop Creative Media For Events, Branding & Advertising
            <br />
            Consult & Find Solutions
          </p>
          <div className="mt-4">
            <button className="px-4 py-2 bg-yellow-500 text-white rounded-md mr-2  uppercase">Let's plan a Event</button>
            <button className="px-4 py-2 bg-black text-white rounded-md mr-2 uppercase">Our Intro</button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-md uppercase">Want to promote my Brand</button>
          </div>
        </div>
      </div>
      
    </section>

       
  
    
  );
}

export default HomeCode;
