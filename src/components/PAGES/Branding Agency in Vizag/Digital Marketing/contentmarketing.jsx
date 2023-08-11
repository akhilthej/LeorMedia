import React from 'react'

const emailmarketing = () => {
  return (
    <main>
        <section>
  <div className="website-cover">
    <div className="webhero-content">
      <h3>Content Marketing</h3>
      <h1>Content Marketing</h1>
      <p>Boost your business with creative content</p>
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
        <h1 className="text-3xl font-bold mb-4 ">CONTENT MARKETING</h1>
        <p className="text-gray-700 mb-6">
        Whether you might be any industry, business or institution one of the most important things you need for your website is superior quality content. One can never undermine the importance of content in the process of building an online presence.
         </p>
       
        <p className="text-gray-700 mb-6">
        Content is one of the best SEO strategy, good and quality content can create better SEO results for the website. Though content is free of cost and an organic source it requires an expert’s strategy. Worthy and unique content can attract hundreds of visitors to your site as well as search engines. If you are looking for first-class content writing services we can help you. We provide the best content for your website to attract your visitors and improve trust and visibility in search engine rankings. We have a team of professional content writers who can offer the best content writing services for blogs, articles, websites and so on. An expert content can build trust and confidence in your brand and generate loyalty to your customers.
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
      <h3>Our Content Marketing services include:</h3>
      <li>Best content plan</li>
      <li>Content strategy</li>
      <li>Content creation</li>
      <li>Content Distribution</li>
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