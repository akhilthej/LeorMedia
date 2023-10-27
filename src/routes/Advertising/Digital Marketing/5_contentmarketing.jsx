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
      <img className="rounded-2xl shadow-md"src="https://drive.google.com/uc?id=1YOJ-Sjp3oiidK-JivRLm10UzunYuryOg" alt='websitedesign'/>      
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