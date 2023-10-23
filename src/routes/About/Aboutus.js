import React from 'react';
import coverimage from '../../assets/About/aboutheader.webp';

import {LeormediaLogo, LeorMediaWatermark} from '../../components/data/leordata';

import pavanlohit from '../../assets/About/pavanlohit.webp';
import akilthejreddy from '../../assets/About/Founder.webp';
import pavanchappa from '../../assets/About/pavan.webp';
import chaitanya from '../../assets/About/chaitanya.webp';
import riyavarma from '../../assets/About/riyavarma.webp'
import srikar from '../../assets/About/srikar.webp';
import saikiran from '../../assets/About/saikiran.webp';
import varuntej from '../../assets/About/varun.webp';

import { Helmet } from 'react-helmet-async';



const Aboutus = () => {
  return (
    <main>
      <Helmet>
            <title>Leor Media - About</title>
            <meta name="description" content='Know more about our Company and our team Cyber Space Digital.'/>
            <link rel="canonical" href="/aboutus" />
      </Helmet>
    
      
          {/*for drive visiblity (https://drive.google.com/uc?export=view&id=) */}
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">         
                    <h1 className="text-3xl mt-20 lg:text-4xl lg:mt-10 font-bold leading-9  pb-4  md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-400 to-yellow-400 ">About Us</h1>
                    <p className="font-normal text-base leading-6 text-black pb-4">Leor Media is a successful on-going Event Management Company in Visakhapatnam founded and established in the year 2017. The word ‘Leor’ is derived from the Hebrew language which means “We Have Light” and we feel proud to spread the light for thousands of happy customers in creating their memorable and making them exceptionally special. We are full serviced Event organizers in Visakhapatnam having presence across India. Leor media is a team made of professional event managers, sharp marketers and savvy wedding planners, working together to create amazing content and make sure the world around us appreciates it.
                      </p>
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-400 to-yellow-400 ">We are here</h1>
                    <p>If you have an event we are here to plan and create the best memories for you that can be cherished forever. We offer all kinds of event management services for any events like Weddings, Birthdays, Corporate events, cultural events, private or social events, etc.., At Leor Media, we believe that trust and respect are the things to be earned and we continuously strive to be as creative and innovative. We tend to take care of each and every concept right from the beginning of the event until the end. We immensely take the pleasure in working with you, visit us and experience the best!</p>
                    
                    
                </div>
                <div className="w-full lg:w-8/12 lg:h-3/5">
                    <img className="w-full h-full rounded-2xl shadow-2xl" src= {coverimage} alt="A group of People" />
                </div>
            </div>
        </div>

        <div className="border-t border-gray-300 my-4 mx-40"></div>
        {/*About us */}
        <div
            style={{
                backgroundImage: `url(${LeorMediaWatermark})`,
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
      <img src={require('../../assets/About/about-event-services.jpeg')} alt='about-services'/>      
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
          <h4 className="text-2xl text-black font-bold">name </h4>
          <span className="block text-sm text-gray-600">Partner<br/>Chief Operations Officer</span>
        </div>
      </div>
      <div className="space-y-4 text-center">
        <img
          className=" w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80"
          src={pavanlohit}
          loading="lazy"
          width={1000}
          height={667}
        />
        <div>
          <h4 className="text-2xl text-black font-bold">Pavan Lohit</h4>
          <span className="block text-sm text-gray-600">
            Founder<br/>Chief Executive Officer</span>
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
          <h4 className="text-2xl text-black font-bold">name</h4>
          <span className="block text-sm text-gray-600">
          Patner<br/>Chief Technical Officer
          </span>
        </div>
      </div>
    </div>
  </div>
</div>



  

        </main>


  )
}

export default Aboutus