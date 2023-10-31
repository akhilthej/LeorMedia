import React from 'react'
import { Link } from 'react-router-dom'

import {
    FixedPrice,
    OntimeDelivery,
    TimeManage,
    HiringModel,
  } from "../../components/data/leordata";
import LogoPortfolioSlider from '../../components/ClientSlider'



const LogoDesign = () => {

  const Generalinfo= {
    companyname: 'Cyber Space Digital',
    companyphone: '+91-81434-07758',
    companyemail: 'admin@cyberspacedigital.in',
    companyaddress: 'Visakhapatnam',

    };

  const LogoDesign = {
 
    section1: {
      title: 'Logo Design',
      subtitle: 'Create a Unique Identity for Your Brand',
    },

    section2: {
      title: 'Logo Design',
      subtitle: 'Create a Unique Identity for Your Brand',
    },}


  const faqData = [
    {
      question: 'What services do you offer?',
      answer:
        'We offer a wide range of services, including web development, mobile app development, custom software development, UX/UI design, and digital strategy consulting.',
    },
    {
      question: 'What platforms do you develop apps for?',
      answer:
        'We develop apps for iOS, Android, and cross-platform solutions like React Native and Flutter.',
    },
    {
      question: 'Do you offer both front-end and back-end development?',
      answer:
        'Yes, we provide both front-end and back-end development services to create fully functional web and mobile applications.',
    },

  ];










  return (
    <main>
    {/* Title Card */}
      <section
        className="py-10 sm:py-40"
        style={{
          backgroundImage:
            'url("https://drive.google.com/uc?id=1-RKGIgPQ6gfNDnoW1jr6R_TzB9P_12ge")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }} >
        <div className="flex flex-col items-center md:flex-row justify-center">
          <div className="md:w-1/2 md:pr-10"></div>
          <div className="md:w-1/2 px-5">
            <div className="text-right md:text-left">
              {" "}
              {/* Align titles to the right on mobile, left on larger screens */}
              <h3 className="cursor-default  text-2xl pb-5 md:text-6xl fade-in-down font-extrabold text-center text-white tracking-tight">
                {LogoDesign.section1.title}
              
              </h3>
              <p className="cursor-default text-white sm:text-sm text-xs text-center sm:ml-0">
                {LogoDesign.section1.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="mailto:admin@cyberspacedigital.in">
                  <a className="transform rounded-md bg-white px-5 py-3 font-medium text-black transition-colors hover:bg-black hover:text-white">
                    Email
                  </a>
                </a>
              
                <a href="https://api.whatsapp.com/send?phone=918143407758&text=Welcome%20to%20Cyberspacedigital">
                  <a className="transform rounded-md bg-white px-5 py-3 font-medium text-black transition-colors hover:bg-black hover:text-white">
                    WhatsApp
                  </a>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

 {/* Subtitle section2 */}
  <section className="text-center mx-auto my-8">
          <h2 className="cursor-default pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mt-3  tracking-tight ">
          Create the perfect logo for your business
          </h2>
          <p className="cursor-default text-sm font-medium text-black mt-5 mb-10">
           We have create more than 190+ Business Logos, 220 Commercial Logos and 100+ startup Company Logos.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            
          </div>
  </section>

 {/* Why us for this */}
  <section className="bg-gray-200 ">
  <div className="grid max-w-screen-xl px-16 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div className="mr-auto sm:mr-10 place-self-center lg:col-span-7">
      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
      Why a Great Logo Matters?
      </h1>
      <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
      A great logo is your brand's first impression, leaving a lasting impact and enhancing recognition. It conveys professionalism, setting you apart from the competition. Your logo embodies your brand's identity, fostering deep connections with your audience. It ensures memorability, making your brand stand out, and serves as a trust-building, loyalty-inducing symbol. In summary, a great logo is the cornerstone of your brand's success, speaking volumes with just a glance.
      </p>
      <a
        href="#"
        className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black  "
      >
        Get started
        <svg
          className="w-5 h-5 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </a>
     
    </div>
    <div className=" lg:mt-0 lg:col-span-5 lg:flex rounded-lg">
      <img
        src="https://lp-cms-production.imgix.net/2019-06/554369495_full.jpg"
        alt="mockup"
        className="rounded-lg"
      />
    </div>
  </div>
   </section>


 
 
 
 {/* Process  */}
    <section id="services" className="cursor-default section relative ">
  <div className="xl:max-w-8xl mx-auto px-4">

    <section className="text-center mx-auto mb-12 lg:px-20">
      <h2 className="pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 ">
      Our Process
      </h2>
      <p className="text-sm font-medium text-black">
      "We also add additional features while creating websites."
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
        <div className="py-8 px-12   transform transition duration-300 ease-in-out hover:-translate-y-2">
          <div className="inline-block text-gray-900 ">
            <img
              src={FixedPrice}
              className="w-40 ml-auto"
              alt="illustration"
              loading="lazy"
              width={900}
              height={600} />
          </div>
          <h3 className="text-lg leading-normal  font-semibold text-black">
          Beautiful Website
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
        <div className="py-8 px-12   transform transition duration-300 ease-in-out hover:-translate-y-2">
          <div className="inline-block text-gray-900">
            <img
              src={TimeManage}
              className="w-40 ml-auto"
              alt="illustration"
              loading="lazy"
              width={900}
              height={600} />
          </div>
          <h3 className="text-lg leading-normal font-semibold text-black">
          Website Safety
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
        <div className="py-8 px-12   transform transition duration-300 ease-in-out hover:-translate-y-2">
          <div className="inline-block text-gray-900 ">
            <img
              src={OntimeDelivery}
              className="w-40 ml-auto"
              alt="illustration"
              loading="lazy"
              width={900}
              height={600} />
          </div>
          <h3 className="text-lg leading-normal  font-semibold text-black">
          Fully Mobile Responsive and Quick
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
        <div className="py-8 px-12   transform transition duration-300 ease-in-out hover:-translate-y-2">
          <div className="inline-block text-gray-900 ">
            <img
              src={HiringModel}
              className="w-40 ml-auto"
              alt="illustration"
              loading="lazy"
              width={900}
              height={600} />
          </div>
          <h3 className="text-lg leading-normal font-semibold text-black">
          Intelligent Designer
          </h3>
          <p className="text-gray-500 text-sm">
          if your project requires additional manpower and extra resources, we're ready to scale up and bring in the necessary talent to meet your needs.
          </p>
          
        </div>
      </div>
    </div>
  </div>
  </section>




{/* Portfolio */}
<LogoPortfolioSlider />


{/* Services */}
   <section  className="cursor-default section relative ">
  <div className="xl:max-w-8xl mx-auto px-4">

    <section className="text-center mx-auto mb-12 lg:px-20">
      <h2 className="pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 ">
      Services
      </h2>
      <p className="text-sm  font-medium text-black">
      "We also add additional features while creating websites."
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
        <div className="py-8 px-12   transform transition duration-300 ease-in-out hover:-translate-y-2">
          <div className="inline-block text-gray-900 ">
            <img
              src={FixedPrice}
              className="w-40 ml-auto"
              alt="illustration"
              loading="lazy"
              width={900}
              height={600} />
          </div>
          <h3 className="text-lg leading-normal  font-semibold text-black">
          Beautiful Website
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
        <div className="py-8 px-12   transform transition duration-300 ease-in-out hover:-translate-y-2">
          <div className="inline-block text-gray-900">
            <img
              src={TimeManage}
              className="w-40 ml-auto"
              alt="illustration"
              loading="lazy"
              width={900}
              height={600} />
          </div>
          <h3 className="text-lg leading-normal font-semibold text-black">
          Website Safety
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
        <div className="py-8 px-12   transform transition duration-300 ease-in-out hover:-translate-y-2">
          <div className="inline-block text-gray-900 ">
            <img
              src={OntimeDelivery}
              className="w-40 ml-auto"
              alt="illustration"
              loading="lazy"
              width={900}
              height={600} />
          </div>
          <h3 className="text-lg leading-normal  font-semibold text-black">
          Fully Mobile Responsive and Quick
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
        <div className="py-8 px-12   transform transition duration-300 ease-in-out hover:-translate-y-2">
          <div className="inline-block text-gray-900 ">
            <img
              src={HiringModel}
              className="w-40 ml-auto"
              alt="illustration"
              loading="lazy"
              width={900}
              height={600} />
          </div>
          <h3 className="text-lg leading-normal font-semibold text-black">
          Intelligent Designer
          </h3>
          <p className="text-gray-500 text-sm">
          if your project requires additional manpower and extra resources, we're ready to scale up and bring in the necessary talent to meet your needs.
          </p>
          
        </div>
      </div>
    </div>
  </div>
 </section>




{/* Client Testimonials */}
 <div className="py-16 white">
  <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
    <h2 className="mb-12 text-center text-2xl text-gray-900 font-bold md:text-4xl">
      What's our customers say
    </h2>
    <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
      <div className="row-span-2 p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8">
        <div className="h-full flex flex-col justify-center space-y-4">
          <img
            className="w-20 h-20 mx-auto rounded-full"
            src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/second_user.webp"
            alt="user avatar"
            height={220}
            width={220}
            loading="lazy"
          />
          <p className="text-gray-600 md:text-xl">
            {" "}
            <span className="font-serif">"</span> Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quaerat repellat perspiciatis
            excepturi est. Non ipsum iusto aliquam consequatur repellat
            provident, omnis ut, sapiente voluptates veritatis cum deleniti
            repudiandae ad doloribus. <span className="font-serif">"</span>
          </p>
          <div>
            <h6 className="text-lg font-semibold leading-none">Jane Doe</h6>
            <span className="text-xs text-gray-500">Product Designer</span>
          </div>
        </div>
      </div>
      <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
        <img
          className="w-20 h-20 mx-auto rounded-full"
          src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/first_user.webp"
          alt="user avatar"
          height={220}
          width={220}
          loading="lazy"
        />
        <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
          <p className="text-gray-600">
            {" "}
            <span className="font-serif">"</span> Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quaerat repellat perspiciatis
            excepturi est. Non ipsum iusto aliquam consequatur repellat
            provident, omnis ut, sapiente voluptates veritatis cum deleniti
            repudiandae ad doloribus. <span className="font-serif">"</span>
          </p>
          <div>
            <h6 className="text-lg font-semibold leading-none">Jane Doe</h6>
            <span className="text-xs text-gray-500">Product Designer</span>
          </div>
        </div>
      </div>
      <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
        <img
          className="w-20 h-20 mx-auto rounded-full"
          src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/third_user.webp"
          alt="user avatar"
          height={220}
          width={220}
          loading="lazy"
        />
        <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
          <p className="text-gray-600">
            {" "}
            <span className="font-serif">"</span> Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quaerat repellat perspiciatis
            excepturi est. Non ipsum iusto aliquam consequatur repellat
            provident, omnis ut, sapiente voluptates veritatis cum deleniti
            repudiandae ad doloribus. <span className="font-serif">"</span>
          </p>
          <div>
            <h6 className="text-lg font-semibold leading-none">Jane Doe</h6>
            <span className="text-xs text-gray-500">Product Designer</span>
          </div>
        </div>
      </div>
    </div>
  </div>
 </div>

  



{/* Logo Design Pricing */}
  <section>
  <div className="container max-w-full mx-auto py-24 px-6">
    <h1 className=" text-center pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mt-3  tracking-tight">
      Pricing
    </h1>
    <p className="text-center text-lg text-gray-700 mt-2 px-6">
      We are here to get the best price for you..
    </p>
    <div className="h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded" />
    <div className="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
      <div className="relative block flex flex-col md:flex-row items-center">
        <div className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-mr-4">
          <div className="bg-white text-black rounded-lg shadow-inner shadow-lg overflow-hidden">
            <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
              <h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                Basic
              </h1>
              <h2 className="text-sm text-gray-500 text-center pb-6">2499 INR</h2>
              Stripe offers everything needed to run an online business at
              scale. Get in touch for details.
            </div>
            <div className="flex flex-wrap mt-3 px-6">
              <ul>
                <li className="flex items-center">
                  <div className=" rounded-full p-2 fill-current text-green-700">
                    <svg
                      className="w-6 h-6 align-middle"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg ml-3">3 days classes</span>
                </li>
                <li className="flex items-center">
                  <div className=" rounded-full p-2 fill-current text-green-700">
                    <svg
                      className="w-6 h-6 align-middle"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg ml-3">2 hours session</span>
                </li>
               
              </ul>
            </div>
            <div className="block flex items-center p-8  uppercase">
              <button
                className="mt-3 text-lg font-semibold 
	bg-black w-full text-white rounded-lg 
	px-6 py-3 block shadow-xl hover:bg-gray-700"
              >
                Select
              </button>
            </div>
          </div>
        </div>
        <div className="w-full max-w-md sm:w-2/3 lg:w-1/3 sm:my-5 my-8 relative z-10 bg-white rounded-lg shadow-lg">
          <div className="text-sm leading-none rounded-t-lg bg-gray-200 text-black font-semibold uppercase py-4 text-center tracking-wide">
            Most Popular
          </div>
          <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
            <h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
            Premium
            </h1>
            <h2 className="text-sm text-gray-500 text-center pb-6">
              <span className="text-3xl">15999 INR</span>
            </h2>
            Stripe offers everything needed to run an online business at scale.
            Get in touch for details.
          </div>
          <div className="flex pl-12 justify-start sm:justify-start mt-3">
            <ul>
              <li className="flex items-center">
                <div className="rounded-full p-2 fill-current text-green-700">
                  <svg
                    className="w-6 h-6 align-middle"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <span className="text-gray-700 text-lg ml-3">15 days</span>
              </li>
             
             
            </ul>
          </div>
          <div className="block flex items-center p-8  uppercase">
            <button
              className="mt-3 text-lg font-semibold 
	bg-black w-full text-white rounded-lg 
	px-6 py-3 block shadow-xl hover:bg-gray-700"
            >
              Select
            </button>
          </div>
        </div>
        <div className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-ml-4">
          <div className="bg-white text-black rounded-lg shadow-inner shadow-lg overflow-hidden">
            <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
              <h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                Economic
              </h1>
              <h2 className="text-sm text-gray-500 text-center pb-6">
                7499 INR
              </h2>
              Stripe offers everything needed to run an online business at
              scale. Get in touch for details.
            </div>
            <div className="flex flex-wrap mt-3 px-6">
              <ul>
                <li className="flex items-center">
                  <div className=" rounded-full p-2 fill-current text-green-700">
                    <svg
                      className="w-6 h-6 align-middle"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg ml-3">7 days</span>
                </li>
              </ul>
            </div>
            <div className="block flex items-center p-8  uppercase">
              <button
                className="mt-3 text-lg font-semibold 
	bg-black w-full text-white rounded-lg 
	px-6 py-3 block shadow-xl hover:bg-gray-700"
              >
                Select
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
   </section>

{/* FAQs */}
<div className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-5">
          Frequently Asked Questions
        </h2>
        <div className="grid gap-4">
          {faqData.map((item, index) => (
            <div className="bg-white rounded-lg p-4 shadow-md" key={index}>
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer">
                  <span>{item.question}</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height={24}
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width={24}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                  {item.answer}
                </p>
              </details>
            </div>
          ))}
        </div>
      </div>
    </div>



{/* Contact Us for Your Logo Needs */}
 <section className="text-center mx-auto my-8">
      <h2 className="cursor-default pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mt-3  tracking-tight ">
      Contact Us
      </h2>
      <p className="cursor-default text-sm font-medium text-black mt-5 mb-10">
      Contact Us for Your Logo Needs
      </p>
    
  <div className="flex items-center justify-center gap-4 flex-wrap">

  <a href='https://api.whatsapp.com/send?phone=918143407758' className="text-xs sm:text-sm transform rounded bg-yellow-500 border border-slate-200 px-20 py-2 font-medium text-black transition-colors hover:bg-slate-50 ">
    Whatsapp
  </a>
  <Link to='/contactus'>
  <button className="text-xs sm:text-sm transform rounded border border-slate-200 px-14 py-2 font-medium text-black transition-colors hover:bg-slate-50 hover:text-black">
    Contact us
  </button></Link>
 </div>
 </section>





{/* Blog: Logo Design Tips and Trends */}
  <section className="bg-gray-200 ">
  <div className="grid max-w-screen-xl px-16 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div className="mr-auto sm:mr-10 place-self-center lg:col-span-7">
      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
      Blog
      </h1>
      <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
      A great logo is your brand's first impression, leaving a lasting impact and enhancing recognition. It conveys professionalism, setting you apart from the competition. Your logo embodies your brand's identity, fostering deep connections with your audience. It ensures memorability, making your brand stand out, and serves as a trust-building, loyalty-inducing symbol. In summary, a great logo is the cornerstone of your brand's success, speaking volumes with just a glance.
      </p>
      <a
        href="#"
        className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black  "
      >
        know more
        <svg
          className="w-5 h-5 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </a>
     
    </div>
    <div className=" lg:mt-0 lg:col-span-5 lg:flex rounded-lg">
      <img
        src="https://lp-cms-production.imgix.net/2019-06/554369495_full.jpg"
        alt="mockup"
        className="rounded-lg"
      />
    </div>
   </div>
   </section>

{/* Request a Custom Design */}
 <section className="text-center mx-auto my-8">
      <h2 className="cursor-default pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mt-3  tracking-tight ">
      Request a Custom Logo Design
      </h2>
      <p className="cursor-default text-sm font-medium text-black mt-5 mb-10">
        Explore our comprehensive documentation for more information on our services.
      </p>
    
  <div className="flex items-center justify-center gap-4 flex-wrap">

  <a href='https://api.whatsapp.com/send?phone=918143407758' className="text-xs sm:text-sm transform rounded bg-yellow-500 border border-slate-200 px-20 py-2 font-medium text-black transition-colors hover:bg-slate-50 ">
    Whatsapp
  </a>
  <Link to='/contactus'>
  <button className="text-xs sm:text-sm transform rounded border border-slate-200 px-14 py-2 font-medium text-black transition-colors hover:bg-slate-50 hover:text-black">
    Contact us
  </button></Link>
 </div>
 </section>






    </main>
  )
}

export default LogoDesign