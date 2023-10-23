import React from 'react';
import "./WebDesigning.css"

const WebDesigning = () => {
  return (
    <main>
    <section>
  <div className="website-cover">
    <div className="webhero-content">
      <h3>We Build creative websites that really work's</h3>
      <h1>Build you business online today</h1>
      <p>A One-Stop for all your web Problems</p>
      <div>
        <button className='bg-orange-500  hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded mt-4 mx-2 items-center'>Contact Now</button>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded mt-4 mx-2 items-center">Get Quotation</button>
      </div>
    </div>
  </div>
</section>


<section>
<div className=" flex justify-center items-center">
      <div className="max-w-3xl p-6 rounded-lg ">
        <h1 className="text-3xl font-bold mb-4 ">WEB DESIGN & DEVELOPMENT</h1>
        <p className="text-gray-700 mb-6">
          We are the web design company focused on creating quality websites that put you ahead of your competitors!
        </p>
        <p className="text-gray-700 mb-6">
          Whether you are planning to build your business online presence or start a new one, all you need is a website. A website that can compete in today’s modern business world. A website is the best opportunity to showcase your brand and a means to attract visitors, demonstrate what to do, and encourage them to take action.
        </p>
        <p className="text-gray-700 mb-6">
          We are a full-service web design company in Visakhapatnam with a team of professional web designers who have expertise in developing websites as per your requirements using the latest technologies and frameworks. Get a complete website that can engage your audience and generate leads for your business. We design the best mobile-friendly websites optimized for any screen resolution, enabling you to reach all your business goals and stand out from your competitors.
        </p>
      </div>
    </div>
</section>


{/*Section -5*/}
<section className="boxed-about-home">
  <div className="about-homeimages">
    <div className="column left-column  ">
      <img className="rounded-2xl shadow-md"src={require('./website2.jpeg')} alt='websitedesign'/>      
    </div>
    <div className="column right-column flex flex-col justify-center">
      <h3>Our services in Web Design include:</h3>
      <li>Static Web Designing</li>
      <li>Dynamic Web Designing</li>
      <li>Website Redesign</li>
      <li>Landing page Designing</li>
      <li>Responsive Web Designing</li>
      <li>E-commerce website designing</li>
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

export default WebDesigning