import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import './Home.css';
import { VscFeedback,VscLocation,VscCallIncoming,VscMail,VscHistory,VscLightbulbAutofix,VscArrowSmallRight, } from "react-icons/vsc";

import {DigitalCreativeMedia,HeroCoverBG,EventManagement,Branding,Advertising} from '../../data/leordata';

const HeroCode = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000, // Set the rotation speed (in milliseconds)
    arrows: false, // Remove arrow navigation
    dots: false, // Remove dot indicators
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Set the number of logos to show at once
    slidesToScroll: 1,
  };
  const brandImages = [
    'https://drive.google.com/uc?export=view&id=1PFV708lGPRVqEblKT6xjKhKG3tK43KNs',
    'https://drive.google.com/uc?export=view&id=13YNsiRGpLOJAHbuaqUkwG8xoOsVsST_E',
    'https://drive.google.com/uc?export=view&id=15ieVVTnsT0PWrJKN1wZ1TYzIHBWM4kWD',
    'https://drive.google.com/uc?export=view&id=1h9l3CHFVMHrKHYr3VyxNoCwMWqqu0zwU',
    'https://drive.google.com/uc?export=view&id=1wTSqKhzxFyeWbnXQpUbvfvMbKwAqkYyH',
    'https://drive.google.com/uc?export=view&id=1TYXyymdlykBDCkxLM9yobmQm5cJTMOv7',
    'https://drive.google.com/uc?export=view&id=1qIa086CvI6GMEL0ArObzKrQa9uCEXDpv',
    'https://drive.google.com/uc?export=view&id=1iKNryfewqXlbQKaS4oDrlx3X8W-P4Mag',
    'https://drive.google.com/uc?export=view&id=1meuHUOe9Ruok4mSZ22tfEqjOXIVS7Aag',
    'https://drive.google.com/uc?export=view&id=1NizCmQHKiBhz7iqWxDwzNvOjcZkCnp3t',
    'https://drive.google.com/uc?export=view&id=1gFgd-h1rv-jQPvL2nLM80_IvjOvh1nS1',
    'https://drive.google.com/uc?export=view&id=1tR9nYqLj01S5HMh5wBX-cfJNzifLZEjl',
    'https://drive.google.com/uc?export=view&id=1VCKHdykXCFIo82ZvhkQgsxbXZpUZZQG7',
    'https://drive.google.com/uc?export=view&id=1JKdL1ahdta38FBiUzeloQzCoEVvE-Lao',
    'https://drive.google.com/uc?export=view&id=1ifWHgw7PrKD0nJY9wvjroD95Y7smkUOo',
    

    // Add more image URLs here
  ];



  return (
<main>

{/*Section -1*/}
<section>

  <div style={{
    position: 'relative',
    width: '100%',
    height: 'auto',
    zIndex: -1,
    padding: '100px 0', // Adding padding for vertical spacing
    backgroundImage: `url('https://drive.google.com/uc?export=view&id=1f1grr3bI8VcFwnFY_l3zxLPpey-1ZHY8')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}>
    <div className="text-center text-white pt-20">
      <h3 className="text-xl font-bold ">LARGEST DIGITAL MARKETPLACE</h3>
      <h1 className="text-2xl font-bold pt-5">Explore The World of Options And Collectibles.</h1>
      <p className="text-xl font-bold ">A One-Stop Creative Media For Events, Branding & Advertising Consult & Find Solutions</p>
      <div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4'>Let's Plan An Event</button>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4'>Let's Plan An Event</button>
      </div>
    </div>
  </div>
</section>


{/*Our Clients*/}
<div className="py-8 bg-gray-100">
<h2 className='text-center font-bold text-2xl pb-10'>CLIENTS</h2>
      <div className="container mx-auto">
        <Slider {...settings}>
          {brandImages.map((imageUrl, index) => (
            <div key={index}>
              <img
                src={imageUrl}
                alt={`Brand Logo ${index + 1}`}
                className="mx-auto h-16 md:h-20 lg:h-24 xl:h-32"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>



{/* Section -2 */}
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
        <div className=" container m-auto px-6 space-y-8 text-black md:px-12">
        <div className="bg-yellow-500/60 mt-0.5 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
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
            <h5 className="text-xl text-black font-medium transition group-hover:text-white">
              Digital Creative Media
            </h5>
            <p className="text-sm text-black">
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
        <div className="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-orange-500 group-hover:border group-hover:scale-90">
          <img
            src={EventManagement}
            className="w-10"
            width={512}
            height={512}
            alt="morefeatures"
          />
          <div className="space-y-2">
            <h5 className="text-xl text-black font-medium transition group-hover:text-white">
              Event Management
            </h5>
            <p className="text-sm text-black">
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
        <div className="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-orange-500 group-hover:border group-hover:scale-90">
          <img
            src={Branding}
            className="w-10"
            width={512}
            height={512}
            alt="morefeatures"
          />
          <div className="space-y-2">
            <h5 className="text-xl text-black font-medium transition group-hover:text-white">
              Branding
            </h5>
            <p className="text-sm text-black">
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
        <div className="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-orange-500 group-hover:border group-hover:scale-90">
          <img
            src={Advertising}
            className="w-10"
            width={512}
            height={512}
            alt="morefeatures"
          />
          <div className="space-y-2">
            <h5 className="text-xl text-black font-medium transition group-hover:text-white">
              Advertising
            </h5>
            <p className="text-sm text-black">
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

{/*Section -4*/}
<section className="flex flex-col items-center justify-center text-center my-10">
  <h3 className="text-4xl font-bold mb-4 mx-10">Best Wedding Planners in Vizag</h3>
  <p className="text-gray-600 mx-6  lg:mx-96 text-xl">
    Whether it is Event Management, Branding or Advertising we strongly 
    believe that there are no shortcuts and quick fixes; everything requires 
    a deep study, understanding the nature of an event or a business, and developing 
    a comprehensive strategy before setting in. And so we are here to present you 
    remarkable events that can be cherished forever and develop proven ethical strategies
     that can reach all your business goals and objectives. Our aim is to find the best 
     solutions for all your event and business needs. We have highly skilled and 
     professional experts who can serve you all the way by understanding your needs 
     and driving best results.
  </p>
  <h4 className="text-2xl font-bold mb-4 mx-10 mt-4">And we have built a healthy relationship so far! Our values rest in....</h4>

  <div className="flex flex-col items-center justify-center mt-4">
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="mx-2 uppercase font-bold h-32 w-48 md:w-full bg-orange-500 hover:bg-yellow-500 text-white rounded-lg flex flex-col items-center justify-center my-2">
          <VscHistory size={32} />
          <span className="mt-2 px-2">Accountability</span>
        </div>
        <div className="mx-2 uppercase font-bold h-32 w-48 md:w-full bg-orange-500 hover:bg-yellow-500 text-white rounded-lg flex flex-col items-center justify-center my-2">
          <VscFeedback size={32} />
          <span className="mt-2 px-2">Customer Centricity</span>
        </div>
        <div className="mx-2 uppercase font-bold h-32 w-48 md:w-full bg-orange-500 hover:bg-yellow-500 text-white rounded-lg flex flex-col items-center justify-center my-2">
          <VscLightbulbAutofix size={32} />
          <span className="mt-2 px-2">Innovative<br/>Ideas</span>
        </div>
      </div>
    </div>
</section>


{/*Section -5*/}
<section className="boxed-about-home">
  <div className="about-homeimages">
    <div className="column left-column">
      <img src={require('../../../assets/home/about-home-image2.png')} alt='about-home'/>      
    </div>
    <div className="column right-column flex flex-col justify-center items-center">
      <h3>Our achievement & success</h3>
      <p>Business is the activity of making one living or making money by producing or buying and selling products. Simply put it is any activity or enterprise entered into for profit.</p>
      <div className="flex justify-center">
        <a href="/contact">
    <button  className="bg-orange-500 flex hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded mt-4 items-center">
        Contact us
        <VscArrowSmallRight size={32} className="ml-1" />
    </button></a>
</div>

    </div>
  </div>
</section>



{/*Section -8*/}
<section>
<div className="flex flex-col items-center justify-center my-10">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
        <div className="flex flex-col items-center">
          <div className="font-bold h-32 w-48 md:w-full bg-black hover:bg-yellow-500 text-white rounded-lg flex flex-col items-center justify-center p-4">
            <VscLocation size={32} />
            <span className="mt-2 text-center">Flat No - 301, Haritha Arcade,<br/> Ramnagar</span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="font-bold h-32 w-48 md:w-full bg-black hover:bg-yellow-500 text-white rounded-lg flex flex-col items-center justify-center p-4">
            <VscCallIncoming size={32} />
            <span className="mt-2 text-center">+(91)9666643456</span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="font-bold h-32 w-48 md:w-full bg-black hover:bg-yellow-500 text-white rounded-lg flex flex-col items-center justify-center p-4">
            <VscMail size={32} />
            <span className="mt-2 text-center">leormedia@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
</section>

{/*Section -7 - Maps*/}
<section>
<section className="text-gray-600 body-font relative">
  <div className="absolute inset-0 bg-gray-300">
    <iframe width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Leor%20Media%20-%20Event%20Management%20Company%20in%20Visakhapatnam%20Haritha%20Arcade,%20301,%20beside%20Omni%20RK%20Hospital,%20Ram%20Nagar,%20Visakhapatnam,%20Andhra%20Pradesh%20530002+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" style={{ border: "none" }}></iframe>
  </div>
  <div className="container px-5 py-24 mx-auto flex">
    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Say hello, on our support</h2>
      <p className="leading-relaxed mb-5 text-gray-600">We are available all the time 24/7 at your support and answer all your queries. Our support team will be happy to serve and assist you regarding any issues.</p>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>
      <p className="text-xs text-gray-500 mt-3">*Terms & Conditions applied.</p>
    </div>
  </div>
</section>
</section>



</main>
  );
};

export default HeroCode;
