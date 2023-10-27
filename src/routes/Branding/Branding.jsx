import React from 'react';
import { Link } from 'react-router-dom';

const branding_agency_in_vizag = () => {
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
              WE CREATE BRANDS,
              </h1>
              <p className="text-white sm:text-sm text-xs text-center sm:ml-0">
              which build a great difference and value
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

 


    <section className="py-10 bg-gray-200">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4 ">BRANDING AGENCY IN VISAKHAPATNAM</h2>
                <p className="text-lg text-gray-700">
                    Leor media the team of experienced branding agency that builds brands and platforms that helps businesses to succeed in the digital culture. We are the Vizag most happening branding agency known for building powerful brands having great ideas.
                    <br /><br />
                    A brand is not what it says, but what it conveys. A business brand is that which speaks on everything that your business is and delivers a promise to your customers in the form of your brand identity vision and philosophy. Building a powerful business brand is something that makes you stand out of the world and beyond your competitors. And everything happens with the solid branding strategies and eye-catchy visuals.
                    <br /><br />
                    We are the one among the best branding agencies in Vizag with the team of Creative branding experts who can build a perfect branding strategy by deeply understanding your branch voice. We at Leor Media, are very clear at understanding the importance of a strong brand identity and offer high-end creative branding services.
                </p>
            </div>
        </section>


        {/* Section -2 */}
<section className="boxed-about-home">
  <div className="about-homeimages">
    <div className="column left-column">
      <img className="rounded-2xl shadow-xl" src="https://drive.google.com/uc?id=1YOJ-Sjp3oiidK-JivRLm10UzunYuryOg" alt='brand-about'/>      
    </div>
    <div className="column right-column">
      <h3>BRAND AUDIT</h3>
      <p>We get started by determining the strength of your brand. An ideal brand audit creates the best opportunities for improvements and new developments.</p>
      <h3>BRAND STRATEGY</h3>
      <p>We are experts in building a long-term plan or a brand strategy for successful brand development in order to achieve your business goals.</p>
     
 </div>
  </div>
</section>

     {/* Section -2 */}
     <section className="boxed-about-home">
  <div className="about-homeimages">
    <div className="column left-column">
      <img className="rounded-2xl shadow-xl" src="https://drive.google.com/uc?id=1YOJ-Sjp3oiidK-JivRLm10UzunYuryOg" alt='brand-about'/>      
    </div>
    <div className="column right-column">
      <h3>BRAND IDENTITY</h3>
      <p>Give your brand a voice to speak and vision to reflect the value of your business. And that includes components like Brand name, logo design, Business cards, Letterheads, Envelope designs, etc.</p>
      <h3>BRAND POSITIONING</h3>
      <p>The main objective of the business is to own a place in the customer’s minds. We analyze and create a unique and successful positioning of your brand.</p>
       
 </div>
  </div>
</section>


        </main>
  )
}

export default branding_agency_in_vizag