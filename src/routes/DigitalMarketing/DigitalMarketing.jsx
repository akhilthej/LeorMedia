import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet-async";

import {
    FixedPrice,
    OntimeDelivery,
    TimeManage,
    HiringModel,
  } from "../../components/data/leordata";


  {/*Change here*/}
  const Generalinfo= {
    companyname: 'Leor Media',
    companyphone: '+91-81434-07758',
    companyemail: 'admin@leormedia.com',
    companyaddress: 'Haritha Arcade, 301, beside Omni RK Hospital, Ram Nagar, Visakhapatnam, Andhra Pradesh 530002',
    };

  const Digitalmarketingdata = {
 
    section1: {
      title: 'Logo Design',
      subtitle: 'Create a Unique Identity for Your Brand',
    },

    section2: {
      title: 'Logo Design',
      subtitle: 'Create a Unique Identity for Your Brand',
    },
  }
  const digitalmarketingservices = [
    {
      image: FixedPrice, // Replace with the actual image source
      title: 'Business Websites',
      slug: '/best-website-for-business',
      buttonText: 'Get Quotation',
    },
    
    {
      image: FixedPrice, // Replace with the actual image source
      title: 'E-commerce',
      slug: '/ecommerce-website-india',
      buttonText: 'Get Quotation',
    },
    {
      image: FixedPrice, // Replace with the actual image source
      title: 'Web Revamp',
      slug: '/website-rebuild',
      buttonText: 'Get Quotation',
    },
    {
      image: FixedPrice, // Replace with the actual image source
      title: 'CRM/ERP Panels',
      slug: '/control-center-for-business',
      buttonText: 'Get Quotation',
    },
  ];
  


const Webdevelopment = () => {
  return (
    <main>
     <Helmet>
        <title>Best Web Development Company in India | Web Developers near me | Web Developers Around Me</title>
        <meta
          name="Description"
          content="Best website development company around you, at best prices."
        />
        <link rel="canonical" href="https://cyberspacedigital.in/best-web-developement-company" />
      </Helmet>


 {/* Title Card */}
 <section className="py-10 sm:py-40" style={{ backgroundImage: 'url("https://drive.google.com/uc?id=1YOJ-Sjp3oiidK-JivRLm10UzunYuryOg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
  <div className="flex flex-col items-center md:flex-row justify-center">
    <div className="md:w-1/2 md:pr-10">
     
    </div>
    <div className="md:w-1/2 px-5">
      <div className="text-right md:text-left"> {/* Align titles to the right on mobile, left on larger screens */}
        <h1 className="text-2xl pb-5 md:text-6xl fade-in-down font-extrabold text-center text-white tracking-tight">
        {Digitalmarketingdata.section1.title}
        </h1>
        <p className="text-white sm:text-sm text-xs text-center sm:ml-0">
        {Digitalmarketingdata.section1.subtitle}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/contactus">
            <a className="transform rounded-md bg-white px-5 py-3 font-medium text-black transition-colors hover:bg-black hover:text-white">
              Get in Touch
            </a>
          </Link>

          <a href='https://api.whatsapp.com/send?phone=9666643456&text=Need%20Details%20about.'>
            <a className="transform rounded-md bg-white px-5 py-3 font-medium text-black transition-colors hover:bg-black hover:text-white">
              WhatsApp
            </a>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>







<div className='py-10 ' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
    Business Websites
  </h3>
  <p className="text-gray-500 text-sm">
    Catalyzing Business Success: Our business website solutions are designed to drive growth, enhance visibility, and boost profitability in the digital landscape.
  </p>
  <Link to='/best-website-for-business'>
    <button className="mt-5 text-xs sm:text-sm transform rounded bg-yellow-500 border border-slate-200 px-12 py-2 font-medium text-black transition-colors hover:bg-slate-50">
      Get Quotation
    </button>
  </Link>
</div>

{/*Services */}
<div className="flex flex-wrap flex-row -mx-4 text-center justify-center">
  {digitalmarketingservices.map((item, index) => (
    <div
      className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/6 lg:px-6 "
      data-wow-delay={`.${index}s`}
      key={index}
    >
      <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
        <div className="inline-block text-gray-900 mb-4">
          <img
            src={item.image}
            className="w-40 ml-auto"
            alt="illustration"
            loading="lazy"
            width={900}
            height={600}
          />
        </div>
        <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
          {item.title}
        </h3>
        <Link to={item.slug}>
          <button className="mt-5 text-xs sm:text-sm transform rounded bg-yellow-500 border border-slate-200 px-12 py-2 font-medium text-black transition-colors hover:bg-slate-50">
            {item.buttonText}
          </button>
        </Link>
      </div>
    </div>
  ))}
</div>






<section className="bg-gray-100 py-12">
      <div className="container mx-auto p-4">
        <h2 className="font-extrabold text-transparent text-4xl md:text-5xl lg:text-8xl bg-clip-text bg-gradient-to-r text-center from-yellow-400 to-orange-600 mt-3 text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] leading-[3.5rem] tracking-tight ">{Generalinfo.companyname}</h2>
        <div className="text-center text-gray-600">
          <p className="text-lg mb-4">
            <span className="text-xl font-semibold">Phone:</span> {Generalinfo.companyphone}<br />
            <span className="text-xl font-semibold">Email:</span> {Generalinfo.companyemail}<br />
            <span className="text-xl font-semibold">Address:</span> {Generalinfo.companyaddress}
          </p>
        </div>
      </div>
    </section>

{/*Features */}
     <section id="services" className="cursor-default section relative ">
  <div className="xl:max-w-8xl mx-auto px-4">
 {/* Heading for "Features" section */}

    <section className="text-center mx-auto mb-12 lg:px-20">
      <h2 className="pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 ">
      Additional Features With Each Plan
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



 {/* Help section */}
 <section className="text-center mx-auto my-8">
      <h2 className="cursor-default pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mt-3  tracking-tight ">
        Need Help ?
      </h2>
      <p className="cursor-default text-sm font-medium text-black mt-5 mb-10">
        Explore our comprehensive documentation for more information on our services.
      </p>
    
<div className="flex items-center justify-center gap-4 flex-wrap">

  <a href='https://api.whatsapp.com/send?phone=9666643456&text=Need%20Details%20about.' className="text-xs sm:text-sm transform rounded bg-yellow-500 border border-slate-200 px-20 py-2 font-medium text-black transition-colors hover:bg-slate-50 ">
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

export default Webdevelopment