import React from 'react'
import { Link } from 'react-router-dom'

const LogoDesigning = () => {
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
              Logo Designing
              </h1>
              <p className="text-white sm:text-sm text-xs text-center sm:ml-0">
              Need more information?
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link to="/aboutus">
                  <a className="transform rounded-md bg-white px-5 py-3 font-medium text-black transition-colors hover:bg-black hover:text-white">
                    Contact Us
                  </a>
                </Link>

                <a href="https://api.whatsapp.com/send?phone=918143407758&text=Welcome%20to%20leormedia">
                  <a className="transform rounded-md bg-white px-5 py-3 font-medium text-black transition-colors hover:bg-black hover:text-white">
                    WhatsApp
                  </a>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="cursor-default section relative pt-10 pb-8 md:pt-16 md:pb-10">
  <div className="xl:max-w-8xl mx-auto px-4">
    {/* Heading for "Line of Engagement" section */}
    <div className="text-center mx-auto mb-12 lg:px-20">
      <h2 className="py-3 font-extrabold text-transparent text-4xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mt-3 ">
        Create the perfect logo for your business
      </h2>
      <p className="text-sm font-medium text-black">
        Streamline the management of advertising and content for your business, saving you valuable time.
      </p>
    </div>
  </div>
</section>


  

    </main>
  )
}

export default LogoDesigning