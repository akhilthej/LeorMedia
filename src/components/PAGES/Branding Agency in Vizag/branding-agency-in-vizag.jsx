import React from 'react';

const branding_agency_in_vizag = () => {
  return (
    <main>

    {/*Section -1*/}
<section>
<div className="flex items-center">
<div className="w-full bg-cover bg-center py-32" style={{ backgroundImage: `url(${require('../../../assets/home/bg01.png')})` }}>
        <div className="container mx-auto text-center text-white">
          <h1 className="text-5xl font-medium mb-6">Welcome to My Agency</h1>
          <p className="text-xl mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio,
            gravida pellentesque urna varius vitae.</p>
          <a href="#" className="bg-blue-500 text-white py-4 px-12 rounded-full hover:bg-blue-600">Demo</a>
        </div>
      </div>
    </div>
</section>

    <section className="py-10 bg-gray-200">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">BRANDING AGENCY IN VISAKHAPATNAM</h2>
                <p className="text-lg text-gray-700">
                    Leor media the team of experienced branding agency that builds brands and platforms that helps businesses to succeed in the digital culture. We are the Vizag most happening branding agency known for building powerful brands having great ideas.
                    <br /><br />
                    A brand is not what it says, but what it conveys. A business brand is that which speaks on everything that your business is and delivers a promise to your customers in the form of your brand identity vision and philosophy. Building a powerful business brand is something that makes you stand out of the world and beyond your competitors. And everything happens with the solid branding strategies and eye-catchy visuals.
                    <br /><br />
                    We are the one among the best branding agencies in Vizag with the team of Creative branding experts who can build a perfect branding strategy by deeply understanding your branch voice. We at Leor Media, are very clear at understanding the importance of a strong brand identity and offer high-end creative branding services.
                </p>
            </div>
        </section>
        </main>
  )
}

export default branding_agency_in_vizag