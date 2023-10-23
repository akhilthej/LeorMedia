import React from 'react';
import { VscLocation,VscCallIncoming,VscMail,} from "react-icons/vsc";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';


import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <main>

            <Helmet>
                <title>Leor Media - Contact</title>
                <meta name="Description" content='Events Management and Digital Marketing Company'/>
                <link rel="canonical" href="/" />
            </Helmet>
            
            
          
         {/*Section -1*/}
         <section>
  <div className="flex items-center">
    <div
      className="w-full bg-no-repeat bg-cover bg-center flex items-center justify-center h-96 md:h-72 lg:h-[70vh]"
      style={{ backgroundImage: `url('https://drive.google.com/uc?export=view&id=1Ujk3hhII7G3zytgGRBLldGk2ZvGUdboh')` }}
    >
      <div className="container mx-auto text-center text-white">
        <h1 className="text-5xl lg:mt-10 font-bold leading-9 pb-4 md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-400 to-yellow-400">Get in Touch</h1>
        <p className="text-xl mb-12 text-black">Need more information?</p>
      </div>
    </div>
  </div>
</section>



<section className='py-10'>
  <div className='text-center pb-2'><h2>FOLLOW US</h2></div>
  <div className="flex space-x-4 text-center justify-center ">
      <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} className="text-5xl text-blue-600 hover:text-blue-800" />
      </a>
      <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} className="text-pink-600 text-5xl hover:text-pink-800" />
      </a>
      <a href="https://www.linkedin.com/company/yourpage" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className="text-blue-500 text-5xl hover:text-blue-700" />
      </a>
      <a href="https://www.youtube.com/user/yourchannel" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faYoutube} className="text-red-600 text-5xl hover:text-red-800" />
      </a>
    </div>
    </section>


{/*Section -8*/}
<section>
<div className="flex flex-col items-center justify-center bg-orange-500 py-10">
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



<section>
<section className="text-gray-600 body-font relative">
  <div className="absolute inset-0 bg-gray-300">
    <iframe width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Leor%20Media%20-%20Event%20Management%20Company%20in%20Visakhapatnam%20Haritha%20Arcade,%20301,%20beside%20Omni%20RK%20Hospital,%20Ram%20Nagar,%20Visakhapatnam,%20Andhra%20Pradesh%20530002+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" style={{ border: "none" }}></iframe>
  </div>
  <div className="container px-5 py-24 mx-auto flex">
    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font text-center">Get In Touch</h2>
      <p className="leading-relaxed mb-5 text-gray-600 text-center">We are available all the time 24/7 at your support and answer all your queries. Our support team will be happy to serve and assist you regarding any issues.</p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone Number</label>
        <input type="tel" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
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

  {/* ====== Contact Section End */}

  
</main>
            
        
        
    )
}

export default Home
