import React from 'react'
import { Link } from 'react-router-dom'

const emailmarketing = () => {
  return (
    <main>
   {/* Title Card */}
 <section
        className="py-28 sm:py-40"
        style={{
          backgroundImage:
            'url("https://drive.google.com/uc?id=1YOJ-Sjp3oiidK-JivRLm10UzunYuryOg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-center md:flex-row justify-center">
          <div className="md:w-1/2 md:pr-10"></div>
          <div className="md:w-1/2 px-5">
            <div className="text-right md:text-left">
              {" "}
              {/* Align titles to the right on mobile, left on larger screens */}
              <h1 className="text-2xl pb-5 md:text-6xl fade-in-down font-extrabold text-center text-white tracking-tight">
              Get in Touch
              </h1>
              <p className="text-white sm:text-sm text-xs text-center sm:ml-0">
              Need more information?
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link to="/aboutus">
                  <a className="transform rounded-md bg-white px-5 py-3 font-medium text-black transition-colors hover:bg-black hover:text-white">
                    Learn More
                  </a>
                </Link>

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

<section>
<div className=" flex justify-center items-center">
      <div className="max-w-3xl p-6 rounded-lg ">
        <h1 className="text-3xl font-bold mb-4 ">EMAIL MARKETING</h1>
        <p className="text-gray-700 mb-6">
        Leor helps vendors / Organizers to communicate to the audience about the Brand or about the Products we sell, Email Marketing is one of the cost-efficient ways to provide mass audiences. Leor provides proper tools and support systems you need with a wide range of features for everything from automation to Tracking to optimizing your emails. We got you covered from the start line to finish line.
         </p>

      </div>
    </div>
</section>


{/*Section -5*/}
<section className="boxed-about-home">
  <div className="about-homeimages">
    <div className="column left-column  ">
      <img className="rounded-2xl shadow-md"src="https://drive.google.com/uc?id=1YOJ-Sjp3oiidK-JivRLm10UzunYuryOg" alt='websitedesign'/>      
    </div>
    <div className="column right-column flex flex-col justify-center">
      <h3>Our Email Marketing services include:</h3>
      <li>Creating beautiful campaigns</li>
      <li>A/B Test</li>
      <li>Sent time optimization</li>
      <li>Advanced Reports</li>
      <li>Building Landing pages</li>
      <li>Unlimited contacts</li>
      <div className="flex justify-center">
        <a href="/contact">
        <button  className="bg-orange-500 flex hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded mt-4 items-center">
        Get Quotation</button>
        </a>
</div>

    </div>
  </div>
</section>


    </main>
  )
}

export default emailmarketing