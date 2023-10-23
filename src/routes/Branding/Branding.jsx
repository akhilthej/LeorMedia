import React from 'react';

const branding_agency_in_vizag = () => {
  return (
    <main>

    {/*Section -1*/}
    <section>
    <div className="flex items-center">
        <div className="w-full bg-fill bg-orange-400 bg-no-repeat bg-center py-32" style={{ backgroundImage: `url(${require('./branding-cover.png')})` }}>
            <div className="container mx-auto text-right text-white">
                <h1 className="text-3xl mt-20 lg:text-4xl lg:mt-10 font-bold leading-9  pb-4  md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-400 to-yellow-400 ">WE CREATE BRANDS,</h1>
                <p className="text-xl mb-12 text-yellow-100">which build a great difference and value</p>
                <a href="/contact" className="bg-blue-500 text-white py-4 px-12 rounded-full hover:bg-blue-600">Reach us</a>
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
      <img className="rounded-2xl shadow-xl" src={require('./brand-development.jpeg')} alt='brand-about'/>      
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
      <img className="rounded-2xl shadow-xl" src={require('./branding1.jpg')} alt='brand-about'/>      
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