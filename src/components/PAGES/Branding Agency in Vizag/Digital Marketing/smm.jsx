import React from 'react'

const smm = () => {
  return (
    <main>
        <section>
  <div className="website-cover">
    <div className="webhero-content">
      <h3>SOCIAL MEDIA MARKETING</h3>
      <h1>Social Media Marketing</h1>
      <p>Boost your business</p>
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
        <h1 className="text-3xl font-bold mb-4 ">SOCIAL MEDIA MARKETING</h1>
        <p className="text-gray-700 mb-6">
        You might be surprised to know how Social Media Marketing can create wonders for your business and we make all this possible. We help our clients by creating top-performing social media marketing services for small, medium as well as large businesses. At Leor Media, our social media experts manage all social media networks such as Facebook, Twitter, Instagram, Linkedin for our clients as per their requirement and their business objectives. We offer the best SMO services to help the business to create better visibility on all social media platforms.
         </p>
       
        <p className="text-gray-700 mb-6">
        Social Media is a tremendous opportunity for small, medium and large scale businesses to market their products and services. Our SMO services help you in gaining the attention of your targeted audience and generate leads that can be easily converted into sales opportunities. Just creating an online presence by creating social media pages and listing business on various social media sites is not enough. It requires an expert social media marketing agency to create awareness, generate audience and build a reputation for the organization.
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
      <h3>Our SMM services include:</h3>
      <li>Facebook promotion/Facebook Ads</li>
      <li>Twitter promotion</li>
      <li>Instagram promotion</li>
      <li>Linkedin Promotion</li>
      <li>Pinterest promotion</li>
      <li>Youtube promotion</li>
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

export default smm