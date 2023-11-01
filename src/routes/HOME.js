import React from 'react';
import { Link } from 'react-router-dom';

import leorlogos from '../assets/leorlogos.jpeg'
import ClientSlider from '../components/ClientSlider';
import ImageSlider from '../components/ImageSlider'

import {documentationicon,analysisicon,socialicon,financeicon,statergyicon,businessreporticon,FixedPrice,TimeManage,OntimeDelivery,HiringModel} from '../components/data/leordata'
import { VscFeedback,VscLocation,VscCallIncoming,VscMail,VscHistory,VscLightbulbAutofix,VscArrowSmallRight, } from "react-icons/vsc";
import {LeorMediaWatermark} from '../components/data/leordata';

const HeroCode = () => {
  
  return (
<main className='overflow-hidden'>


{/*Section -1*/}

<ImageSlider/>



<ClientSlider/>


 {/*about */}
 <section>
          <section>
            <div className="cursor-default container px-6 py-10 mx-auto">
              <div className="lg:flex lg:items-center">
                <div className="w-full space-y-12 lg:w-1/2 ">
                  <div>
                    <h1 className="text-3xl font-semibold text-black capitalize lg:text-4xl ">
                    About us
                    </h1>
                    <div className="mt-2">
                      <span className="inline-block w-40 h-1 rounded-full bg-yellow-500" />
                      <span className="inline-block w-3 h-1 ml-1 rounded-full bg-yellow-500" />
                      <span className="inline-block w-1 h-1 ml-1 rounded-full bg-yellow-500" />
                    </div>
                  </div>
                  <div className="md:flex md:items-start md:-mx-4">
                    
                       
                    <div className="mt-4 md:mx-4 md:mt-0">
                      
                      <p className="mt-3 text-black ">
                      Leor Media is a successful on-going Event Management Company in Visakhapatnam founded and established in the year 2016. We are a team of professional event managers and experienced Wedding planners with 100+ happy customers. We provide the best event management services and manage all types of events like weddings, birthday parties, corporate events, audio launches, cultural nights, product launches and award nights. We are the top-rated wedding planners in Vizag and deliver all types of event management services if you have an event we are here to plan and create the best memories for you that can be cherished forever. On the whole we the team with smart and experienced members working on Events, Branding, and Advertising.
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" lg:flex lg:items-center lg:w-1/2 lg:justify-center">
                  <img
                    className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] "
                    src={require('../assets/home/about-home-image.png')}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
        </section>





{/*Services*/}
    <section>
    <h2 className='text-center text-3xl font-bold pb-4'>Our Services</h2>
      {/*MainFeatures */}
      <div style={{
      backgroundImage: `url(${LeorMediaWatermark})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundPosition: "center",}}>

      <section>
      <div className="pb-10  overflow-hidden">
        <div className=" container m-auto px-6 space-y-8 text-black md:px-12">
        <div className="bg-yellow-500/60 mt-0.5 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
        <div className="relative group  transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block">
        
        
        
        <div className="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-orange-500 group-hover:border group-hover:scale-90">
         
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

{/*Best Wedding Planners in Vizag*/}
<section className="flex flex-col items-center justify-center text-center my-10"> 
  <h3 className="text-4xl font-bold mb-4 mx-10 text-orange-600">Best Wedding Planners in Vizag</h3>
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



 {/*Achivements */}
 <section>
          <section>
            <div className="cursor-default container px-6 py-10 mx-auto">
              <div className="lg:flex lg:items-center">
                <div className="w-full space-y-12 lg:w-1/2 ">
                  <div>
                    <h1 className="text-3xl font-semibold text-black capitalize lg:text-4xl ">
                    Our achievement & success
                    </h1>
                    <div className="mt-2">
                      <span className="inline-block w-40 h-1 rounded-full bg-orange-500" />
                      <span className="inline-block w-3 h-1 ml-1 rounded-full bg-orange-600" />
                      <span className="inline-block w-1 h-1 ml-1 rounded-full bg-orange-700" />
                    </div>
                  </div>
                  <div className="md:flex md:items-start md:-mx-4">
                    
                       
                    <div className="mt-4 md:mx-4 md:mt-0">
                      
                      <p className="mt-3 text-black ">
                      Business is the activity of making one living or making money by producing or buying and selling products. Simply put it is any activity or enterprise entered into for profit.
                      </p>
                      <a href="/contact">
    <button  className="bg-orange-500 flex hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded mt-4 items-center">
        Contact us
        <VscArrowSmallRight size={32} className="ml-1" />
    </button></a>
                    </div>
                  </div>
                </div>
                <div className=" lg:flex lg:items-center lg:w-1/2 lg:justify-center">
                  <img
                    className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] "
                    src={require('../assets/home/about-home-image2.png')}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
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


        {/*Whatdowedo */}
        <section>
          <div className="cursor-default px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="max-w-screen-md mb-8 lg:mb-16">
              <h2 className="font-extrabold text-transparent text-4xl md:text-5xl lg:text-8xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mt-3 text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] leading-[3.5rem] tracking-tight text-black">
                What do we do?
              </h2>
              <p className=" text-black sm:text-xl ">
                How we research our clients requirements and processes.
              </p>
            </div>
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                  <img src={documentationicon} alt="documentation" />
                </div>
                <h3 className="text-black mb-2 text-xl font-bold ">
                  Documentation
                </h3>
                <p className="text-black ">
                  Seems to be a herculean task for a project manager. Project
                  managers are often engaged in delivering high-end complex
                  projects.
                </p>
              </div>
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                  <img src={analysisicon} alt="analysisicon" />
                </div>
                <h3 className="text-black mb-2 text-xl font-bold ">Analyze</h3>
                <p className="text-black ">
                  When executing a project,we analyze it periodically. Failing
                  to do so, would mean unexpected challenges, overlooked
                  critical information, or flaws in the work process that
                  manifest as the project unfolds.
                </p>
              </div>
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                  <img src={socialicon} alt="socialicon" />
                </div>
                <h3 className="text-black mb-2 text-xl font-bold ">
                  Social Media Presents
                </h3>
                <p className="text-black ">
                  A company's social media presence is how they portray
                  themselves online through their social networking accounts and
                  activity. Building a social media presence starts with
                  developing your goals.
                </p>
              </div>
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                  <img src={financeicon} alt="financeicon" />
                </div>
                <h3 className="text-black mb-2 text-xl font-bold ">Finance</h3>
                <p className="text-black ">
                  the funding of long-term projects, such as public
                  infrastructure or services, industrial projects, and others
                  through a specific financial structure.
                </p>
              </div>
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                  <img src={statergyicon} alt="statergyicon" />
                </div>
                <h3 className="text-black mb-2 text-xl font-bold ">Strategy</h3>
                <p className="text-black ">
                  Craft beautiful, delightful experiences for both marketing and
                  product with real cross-company collaboration.
                </p>
              </div>
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                  <img src={businessreporticon} alt="businessreporticon" />
                </div>
                <h3 className="text-black mb-2 text-xl font-bold ">
                  Business Report
                </h3>
                <p className="text-black ">
                  At the end of every project we present our clients with
                  detailed reports .which can help them understand what we did
                  for there project.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*Explore */}
        <section>
          <section>
            <div className="cursor-default container px-6 py-10 mx-auto">
              <div className="lg:flex lg:items-center">
                <div className="w-full space-y-12 lg:w-1/2 ">
                  <div>
                    <h1 className="text-3xl font-semibold text-black capitalize lg:text-4xl ">
                      Why <br /> Choose us
                    </h1>
                    <div className="mt-2">
                      <span className="inline-block w-40 h-1 rounded-full bg-yellow-500" />
                      <span className="inline-block w-3 h-1 ml-1 rounded-full bg-yellow-500" />
                      <span className="inline-block w-1 h-1 ml-1 rounded-full bg-yellow-500" />
                    </div>
                  </div>
                  <div className="md:flex md:items-start md:-mx-4">
                    <span className="inline-block p-2 text-black bg-yellow-500 rounded-xl md:mx-4  ">
                      <svg
                        xmlns="https://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        />
                      </svg>
                    </span>
                    <div className="mt-4 md:mx-4 md:mt-0">
                      <h1 className="text-2xl font-semibold text-black capitalize ">
                        Custom CRM
                      </h1>
                      <p className="mt-3 text-black ">
                        Customer relationship management (CRM) is a technology
                        for managing all your company's relationships and
                        interactions with customers and potential customers. The
                        goal is simple: Improve business relationships.
                      </p>
                    </div>
                  </div>
                  <div className="md:flex md:items-start md:-mx-4">
                    <span className="inline-block p-2 text-black bg-yellow-500 rounded-xl md:mx-4 ">
                      <svg
                        xmlns="https://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                        />
                      </svg>
                    </span>
                    <div className="mt-4 md:mx-4 md:mt-0">
                      <h1 className="text-2xl font-semibold text-black capitalize ">
                        Google Data Maps Mining
                      </h1>
                      <p className="mt-3 text-black ">
                        Data mapping is crucial to the success of many data
                        processes. One misstep in data mapping can ripple
                        throughout your organization, leading to replicated
                        errors, and ultimately, to inaccurate analysis.
                      </p>
                    </div>
                  </div>
                  <div className="md:flex md:items-start md:-mx-4">
                    <span className="inline-block p-2 text-black  bg-yellow-500 rounded-xl md:mx-4 ">
                      <svg
                        xmlns="https://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                        />
                      </svg>
                    </span>
                    <div className="mt-4 md:mx-4 md:mt-0">
                      <h1 className="text-2xl font-semibold text-black capitalize">
                        Custom Testing Tools
                      </h1>
                      <p className="mt-3 text-black ">
                        Testing Tools in software testing can be defined as
                        products that support various test activities starting
                        from planning, requirement gathering, build creation,
                        test execution, defect logging and test analysis.
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" lg:flex lg:items-center lg:w-1/2 lg:justify-center">
                  <img
                    className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] "
                    src={leorlogos}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
        </section>




     
     {/*Line of Engagement */}
 <section id="services" className="cursor-default section relative pt-10 pb-8 md:pt-16 md:pb-10">
  <div className="xl:max-w-8xl mx-auto px-4">
    {/* Heading for "Line of Engagement" section */}

    <section className="text-center mx-auto mb-12 lg:px-20">
      <h2 className="pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mt-3 ">
        Line of Engagement
      </h2>
      <p className="text-sm font-medium text-black">
        Streamline the management of advertising and content for your business, saving you valuable time.
      </p>
    </section>

    {/* "Fixed Price Model" section */}
    <div className="flex flex-wrap flex-row -mx-4 text-center">
      <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/4 lg:px-6 wow fadeInUp"
        data-wow-duration="1s"
        style={{
          visibility: "visible",
          animationDuration: "1s",
          animationName: "fadeInUp"
        }}>
        <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
          <div className="inline-block text-gray-900 mb-4">
            <img
              src={FixedPrice}
              className="w-40 ml-auto"
              alt="illustration"
              loading="lazy"
              width={900}
              height={600} />
          </div>
          <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
            Fixed Price Model
          </h3>
          <p className="text-gray-500 text-sm">
            Under this model, the web development company and the client agree on a fixed price for the entire project scope.
          </p>
        </div>
      </div>

      {/* "Time and Materials Model" section */}
      <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/4 lg:px-6 wow fadeInUp"
        data-wow-duration="1s"
        data-wow-delay=".1s"
        style={{
          visibility: "visible",
          animationDuration: "1s",
          animationDelay: "0.1s",
          animationName: "fadeInUp"
        }}>
        <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
          <div className="inline-block text-gray-900 mb-4">
            <img
              src={TimeManage}
              className="w-40 ml-auto"
              alt="illustration"
              loading="lazy"
              width={900}
              height={600} />
          </div>
          <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
            Time and Materials Model
          </h3>
          <p className="text-gray-500 text-sm">
            The client pays based on the time and resources spent on the project.
          </p>
        </div>
      </div>

      {/* "On-Time Delivery" section */}
      <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/4 lg:px-6 wow fadeInUp"
        data-wow-duration="1s"
        data-wow-delay=".3s"
        style={{
          visibility: "visible",
          animationDuration: "1s",
          animationDelay: "0.3s",
          animationName: "fadeInUp"
        }}>
        <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
          <div className="inline-block text-gray-900 mb-4">
            <img
              src={OntimeDelivery}
              className="w-40 ml-auto"
              alt="illustration"
              loading="lazy"
              width={900}
              height={600} />
          </div>
          <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
            On-Time Delivery
          </h3>
          <p className="text-gray-500 text-sm">
            The web development company commits to delivering projects on or before agreed-upon deadlines.
          </p>
        </div>
      </div>


      {/* "Hiring Model" section */}
      <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/4 lg:px-6 wow fadeInUp"
        data-wow-duration="1s"
        data-wow-delay=".3s"
        style={{
          visibility: "visible",
          animationDuration: "1s",
          animationDelay: "0.3s",
          animationName: "fadeInUp"
        }}>
        <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
          <div className="inline-block text-gray-900 mb-4">
            <img
              src={HiringModel}
              className="w-40 ml-auto"
              alt="illustration"
              loading="lazy"
              width={900}
              height={600} />
          </div>
          <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
          Hiring Model
          </h3>
          <p className="text-gray-500 text-sm">
          if your project requires additional manpower and extra resources, we're ready to scale up and bring in the necessary talent to meet your needs.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>




 {/* "Documentation" section */}
 <section className="text-center mx-auto my-8">
      <h2 className="cursor-default pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mt-3  tracking-tight ">
        Need Help ?
      </h2>
      <p className="cursor-default text-sm font-medium text-black mt-5 mb-10">
        Explore our comprehensive documentation for more information on our services.
      </p>
    
<div className="flex items-center justify-center gap-4 flex-wrap">
<Link to='/contact'>
  <button className="text-xs sm:text-sm transform rounded bg-yellow-500 border border-slate-200 px-20 py-2 font-medium text-black transition-colors hover:bg-slate-50 ">
    FAQ
  </button></Link>
  <Link to='/contact'>
  <button className="text-xs sm:text-sm transform rounded border border-slate-200 px-14 py-2 font-medium text-black transition-colors hover:bg-slate-50 hover:text-black">
    Contact us
  </button></Link>
 </div>
 </section>

</main>
  );
};

export default HeroCode;
