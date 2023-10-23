import React from 'react'

const emailmarketing = () => {
  return (
    <main>
        <section>
  <div className="website-cover">
    <div className="webhero-content">
      <h3>Email Business</h3>
      <h1>Email Marketing</h1>
      <p>Get in-touch with your customers</p>
      <div>
        <button className='bg-orange-500  hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded mt-4 mx-2 items-center'>Contact Now</button>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded mt-4 mx-2 items-center">Know More</button>
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
      <img className="rounded-2xl shadow-md"src={require('./seo2.jpeg')} alt='websitedesign'/>      
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