import React from 'react'

const seo = () => {
  return (
    <main>
        <section>
  <div className="website-cover">
    <div className="webhero-content">
      <h3>Search Engine Optimization</h3>
      <h1>SEO Services in Vizag</h1>
      <p>List your business organically</p>
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
        <h1 className="text-3xl font-bold mb-4 ">SEO Services in Vizag</h1>
        <p className="text-gray-700 mb-6">
        The main goal of every online business is to get visible on the top page of major search engines but not everyone can get there unless it is done in the right way. It’s all about having a website and a proper SEO strategy that will get you to your target audience. 
        </p>
       
        <p className="text-gray-700 mb-6">
        We are the premium SEO Company in Vizag offering the best <b>SEO services in Vizag</b>. Over the years of experience in Digital Marketing and Search Engine Optimization, we have studied how search engines work in ranking websites. Our expertise helped us to develop the strongest SEO strategies for Search Engine Optimization and we helped a number of clients to secure rankings in major search engines like Google and Bing. At Leor Media, we focus on deriving SEO solutions and multiple aspects of the website that would help to rank better. We believe that a well planned and executed SEO strategy can make your results double that you think. 
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
      <h3>Our custom SEO packages include:</h3>
      <li>Site Health</li>
      <li>Competitive Analysis</li>
      <li>On page/Offpage Optimization</li>
      <li>Link Building</li>
      <li>Monthly Reporting</li>
      <li>Content Marketing</li>
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

export default seo