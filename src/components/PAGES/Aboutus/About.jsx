import React from 'react';
import coverimage from '../../../assets/About/aboutheader.webp';

import {LeormediaLogo, HeroCoverBG} from '../../data/leordata.jsx';

import akilthejreddy from '../../../assets/About/Founder.webp';
import pavanchappa from '../../../assets/About/pavan.webp';
import chaitanya from '../../../assets/About/chaitanya.webp';
import riyavarma from '../../../assets/About/riyavarma.webp'
import srikar from '../../../assets/About/srikar.webp';
import saikiran from '../../../assets/About/saikiran.webp';
import varuntej from '../../../assets/About/varun.webp';



const About = () => {
    return (
        <main>
          {/*for drive visiblity (https://drive.google.com/uc?export=view&id=) */}
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">         
                    <h1 className="text-3xl mt-20 lg:text-4xl lg:mt-10 font-bold leading-9  pb-4  md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-400 to-yellow-400 ">About Us</h1>
                    <p className="font-normal text-base leading-6 text-black pb-4">Leor Media is a successful on-going Event Management Company in Visakhapatnam founded and established in the year 2017. The word ‘Leor’ is derived from the Hebrew language which means “We Have Light” and we feel proud to spread the light for thousands of happy customers in creating their memorable and making them exceptionally special. We are full serviced Event organizers in Visakhapatnam having presence across India. Leor media is a team made of professional event managers, sharp marketers and savvy wedding planners, working together to create amazing content and make sure the world around us appreciates it.
                      </p>
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-400 to-yellow-400">Our Story</h1>
                    <p className="font-normal text-base leading-6 text-balck ">Our story began 6 years ago, when a group of 5 engineers students came together with a shared passion for 
                    web development and digital services. We had all studied computer science and had a keen interest in technology, and we saw an opportunity to use our skills to help local 
                    and international brands grow their online presence.<br/>We started small, working on freelance projects and building our portfolio. We quickly realized that there was a high 
                    demand for our services and that we had a real talent for creating custom websites and web applications that met the unique needs of each of our clients.<br/>As our business 
                    grew, we decided to form a digital agency, and we were able to attract a diverse range of clients, from small startups to large enterprises. We were driven by our desire to 
                    provide high-quality, innovative solutions that would help our clients achieve their goals.<br/>Over the past 6 years, we have built a reputation for delivering exceptional 
                    results, and we have established a loyal customer base. We have a wide range of skills and expertise, including front-end and back-end development, digital marketing, and 
                    project management, which allows us to provide comprehensive services that drive real results for our clients.</p>
                    
                </div>
                <div className="w-full lg:w-8/12 lg:h-3/5">
                    <img className="w-full h-full rounded-2xl shadow-2xl" src= {coverimage} alt="A group of People" />
                    <p className="font-normal text-base leading-6 mt-10 text-black/ ">If you have an event we are here to plan and create the best memories for you that can be cherished forever. We offer all kinds of event management services for any events like Weddings, Birthdays, Corporate events, cultural events, private or social events, etc.., At Leor Media, we believe that trust and respect are the things to be earned and we continuously strive to be as creative and innovative. We tend to take care of each and every concept right from the beginning of the event until the end. We immensely take the pleasure in working with you, visit us and experience the best!</p>
                    
                </div>
            </div>
        </div>

        <div className="border-t border-gray-300 my-4 mx-40"></div>
        {/*About us */}
        <div
            style={{
                backgroundImage: `url(${HeroCoverBG})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
            }} >
            <section className="flex justify-center items-center my-40 px-4 md:px-40">
                <div className="flex flex-col md:flex-row justify-center px-20">
                    <div className="px-5 md:px-10 mb-5 md:mb-0">
                        <span className="text-xl">WHO WE ARE</span>
                        <h2 className="font-bold text-5xl md:text-4xl mt-2 md:mt-0">All Services <br />in one place</h2>
                    </div>
                    <div className="px-5 md:px-10">
                        <p className="font-bold text-xl">✦ Events</p>
                        <p>We have a record of proven strategies for planning and celebrating events. We are the best event management company in Visakhapatnam serving our clients with various Event Management Services and driving solutions so that there would be an everlasting effect on their overall memories.</p>

                        <p className="font-bold text-xl">✦ Branding</p>
                        <p>Leor media is the team of an experienced branding agency that builds brands and platforms that help businesses succeed in the digital culture. We are the most happening branding agency in Vizag known for building powerful brands with great ideas.</p>

                        <p className="font-bold text-xl">✦ Advertising</p>
                        <p>Advertising is a part of us, and we individually develop promotional strategies for every project depending on your goals and the targeted budget. We offer it all.</p>
                    </div>
                </div>
            </section>
        </div>
        <div className="border-t border-gray-300 my-4 mx-40"></div>


{/* Section -2 */}
<section className="boxed-about-home my-40">
  <div className="about-homeimages">
    <div className="column left-column">
      <img src={require('../../../assets/About/about-event-services.jpeg')} alt='about-services'/>      
    </div>
    <div className="column right-column">
      <h3>WHAT WE OFFER</h3>
      <p>Not every event and client is unique in the same way we believe our services should be as well. Everything starts from understanding your requirements, analyzing and customizing the best concept to make your event special and memorable. We help you to plan the event, connect you with the best vendors and produce any aspect of the event.</p>
    </div>
  </div>
</section>


        {/*About us */}
<section className="bg-gray-100 py-10">
  <div className="container mx-auto">
    <div className="flex items-center justify-center">
      <img src={LeormediaLogo} alt="Logo" className="h-auto w-24" />
    </div>
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mt-8">TAKE THE FIRST STEP. WE WILL DO THE REST.</h2>
    <span className="block text-center mt-4 text-xl font-semibold">About Us</span>
    <p className="max-w-3xl mx-auto text-gray-700 text-center mt-4 px-5 sm:px-0">
      Leor Media was founded on the 10th of February, 2016. The word ‘Leor’ comes from Hebrew, which means ‘We have Light’. We take immense pride in living up to our name and spreading this light across every project that we undertake. Be it event management, digital marketing, or branding, Leor Media’s utmost focus on perfection and attention to the minute details has won the hearts through the large number of events that we have organized. The testimonials from our very happy customers speak volumes about our service. In addition to event management, we also provide high-end advertising and digital marketing services. We firmly believe that trust and respect can only be earned, and we continuously strive to be innovative in our work. We are a fast-growing agency, and we take over organizing every event of your life with perfection. In this way, we live up to our motto 
      <br/>‘Memories in Making’.
    </p>
    <div className="flex flex-col md:flex-row justify-center items-center mt-8">
  <div className="flex items-center md:mr-8">
    <span className="text-6xl md:text-7xl lg:text-8xl font-bold text-center">1000+</span>
    <span className="ml-2 text-lg ">customers</span>
  </div>
  <div className="hidden md:block border-r border-gray-600 h-8 mx-6 md:mx-8"></div> {/* Vertical division line */}
  <div className="flex items-center mt-4 md:mt-0">
    <span className="text-6xl md:text-7xl lg:text-8xl font-bold text-center">&lt;1%</span>
    <span className="ml-2 text-lg">client attrition</span>
  </div>
</div>

    <hr className="border-gray-600 my-8" />
    <div className="flex justify-center">
      <div className="flex items-center">
        <span className="text-4xl md:text-5xl lg:text-6xl font-bold">3500+</span>
        <span className="ml-2 text-xl">users</span>
      </div>
    </div>
  </div>
</section>


            {/*.....Owners.....*/}
            <div className="glass py-20">
  <div className="container mx-auto px-6 md:px-12 xl:px-32">
    <div className="mb-16 text-center">
      <h2 className="mb-4 text-center text-2xl  font-bold md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-400 to-yellow-400">
        Leadership Board
      </h2>
      <p className="text-black lg:w-8/12 lg:mx-auto">
        Leor Media is known for its multi-project handeling. we deal with various technology and
         with on development projects,the talent of its people of some of the brightest 
         minds and most experienced executives in business.
      </p>
    </div>
    <div className="grid gap-12 items-center md:grid-cols-3">
      <div className="space-y-4 text-center">
        <img
          className=" w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
          src= {pavanchappa}
          loading="lazy"
          width={640}
          height={805}
        />
        <div>
          <h4 className="text-2xl text-black font-bold">Pavan Kumar</h4>
          <span className="block text-sm text-gray-600">Partner<br/>Chief Operations Officer<br/>( IT Recruiter )</span>
        </div>
      </div>
      <div className="space-y-4 text-center">
        <img
          className=" w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80"
          src={akilthejreddy}
          loading="lazy"
          width={1000}
          height={667}
        />
        <div>
          <h4 className="text-2xl text-black font-bold">Pavan Lohit</h4>
          <span className="block text-sm text-gray-600">
            Founder<br/>Chief Executive Officer<br/>( Full Stack Developer )<br/></span>
        </div>
      </div>
      <div className="space-y-4 text-center">
        <img
          className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
          src={riyavarma}
          loading="lazy"
          width={1000}
          height={667}
        />
        <div>
          <h4 className="text-2xl text-black font-bold">Riya Varma</h4>
          <span className="block text-sm text-gray-600">
          Patner<br/>Chief Technical Officer<br/>( Data Analyst )
          </span>
        </div>
      </div>
    </div>
  </div>
</div>



        {/*...Teams...*/}

        <div className="border-t border-gray-300 my-4 mx-40"></div>
        <section className="glass">
  <div className="container px-6 py-10 mx-auto">
    <h1 className="text-3xl pb-1 font-semibold text-center capitalize lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600">
      Our Team, Friends & Family
    </h1>
    <p className="mx-auto my-6 text-center text-gray-600">
      We have a dedicated team of quick-learners and more than 10 years of experince in each craft.
    </p>
    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
      <div className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-yellow-600 rounded-xl">
        <img
          className="object-cover w-32 h-40 rounded-full ring-4 ring-gray-300"
          src={chaitanya}
        />
        <h1 className="mt-4 text-2xl font-semibold  capitalize text-black group-hover:text-white">
          Chaitanya Teja
        </h1>
        <p className="mt-2  capitalize text-gray-600 group-hover:text-gray-600">
        Front-end Developer
        </p>
        <p className="mt-2  text-sm capitalize text-gray-600 group-hover:text-gray-600">
         Web Developer
        </p>
        <div className="flex mt-3 -mx-2">
          <a
            href="#"
            className="mx-2 text-gray-600 hover:text-gray-600 group-hover:text-white"
            aria-label="Reddit"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z"></path>
            </svg>
          </a>
          <a
            href="#"
            className="mx-2 text-gray-600 hover:text-gray-600 group-hover:text-white"
            aria-label="Facebook"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
            </svg>
          </a>
          <a
            href="#"
            className="mx-2 text-gray-600 hover:text-gray-600 group-hover:text-white"
            aria-label="Github"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-yellow-600 rounded-xl">
        <img
          className="object-cover w-32 h-40 rounded-full ring-4 ring-gray-300"
          src={srikar}
        />
        <h1 className="mt-4 text-2xl font-semibold capitalize text-black group-hover:text-white">
          Srikar
        </h1>
        <p className="mt-2  capitalize text-gray-600 group-hover:text-gray-600">
        Senior AWS cloud
        </p>
        <p className="mt-2  text-sm capitalize text-gray-600 group-hover:text-gray-600">
         devops engineer
        </p>
        <div className="flex mt-3 -mx-2">
          <a
            href="#"
            className="mx-2 text-gray-600 hover:text-gray-600 group-hover:text-white"
            aria-label="Reddit"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z"></path>
            </svg>
          </a>
          <a
            href="#"
            className="mx-2 text-gray-600 hover:text-gray-600 group-hover:text-white"
            aria-label="Facebook"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
            </svg>
          </a>
          <a
            href="#"
            className="mx-2 text-gray-600 hover:text-gray-600 group-hover:text-white"
            aria-label="Github"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
            </svg>
          </a>
        </div>
      </div>
      
      <div className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-yellow-600 rounded-xl">
        <img
          className="object-cover w-32 h-40 rounded-full ring-4 ring-gray-300"
          src={varuntej}
        />
        <h1 className="mt-4 text-2xl font-semibold  capitalize text-black group-hover:text-white">
          Tej Varun
        </h1>
        <p className="mt-2  capitalize text-gray-600 group-hover:text-gray-600">
        Senior Graphic Designer
        </p>
        <p className="mt-2  text-sm capitalize text-gray-600 group-hover:text-gray-600">
         Senior Video Editor
        </p>
        <div className="flex mt-3 -mx-2">
          <a
            href="#"
            className="mx-2 text-gray-600 hover:text-gray-600 group-hover:text-white"
            aria-label="Reddit"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z"></path>
            </svg>
          </a>
          <a
            href="#"
            className="mx-2 text-gray-600 hover:text-gray-600 group-hover:text-white"
            aria-label="Facebook"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
            </svg>
          </a>
          <a
            href="#"
            className="mx-2 text-gray-600 hover:text-gray-600 group-hover:text-white"
            aria-label="Github"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-yellow-600 rounded-xl">
        <img
          className="object-cover w-32 h-40 rounded-full ring-4 ring-gray-300"
          src= {saikiran}
        />
        <h1 className="mt-4 text-2xl font-semibold  capitalize text-black group-hover:text-white">
          Sai Kiran
        </h1>
        <p className="mt-2  capitalize text-gray-600 group-hover:text-gray-600">
          Designer
        </p>
        <div className="flex mt-3 -mx-2">
          <a
            href="#"
            className="mx-2 text-gray-600 hover:text-gray-600 group-hover:text-white"
            aria-label="Reddit"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z"></path>
            </svg>
          </a>
          <a
            href="#"
            className="mx-2 text-gray-600 hover:text-gray-600 group-hover:text-white"
            aria-label="Facebook"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
            </svg>
          </a>
          <a
            href="#"
            className="mx-2 text-gray-600 hover:text-gray-600 group-hover:text-white"
            aria-label="Github"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

        </main>
    );
};

export default About