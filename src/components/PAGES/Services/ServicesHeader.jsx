import React from 'react';
import {Link} from 'react-router-dom';

import {LeormediaLogo } from '../../data/data.jsx';

import ServicesHeroImg from '../../../assets/ImagesPage/ServicesHeaderImage.png'

const ServicesHeader = () => {
  return (
    <main>
      {/*Hero */}
  <section>
   <div className="flex items-center justify-center mb-10  sm:mb-0">
    <div className="mx-auto w-full max-w-screen-lg  px-5 ">
      <div className="grid gap-5 md:grid-cols-2 md:gap-10 lg:gap-20">
        <div className="flex justify-center md:justify-end">
          <img
            className="w-full max-w-xl"
            src={ServicesHeroImg}
            alt="Marketing newsletter via computer Illustration in PNG, SVG"
          />
        </div>
        <div className="flex items-center">
          <div className="mx-auto md:mx-0">
            <h3 className="text-4xl fade-in-down font-extrabold text-transparent  md:text-6xl bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 tracking-tight">Distribute your brand from&nbsp;Design to Code</h3>
            <p className="mt-2 text-lg ">
            Specify helps you unify your brand identity by collecting, storing and
            distributing design tokens and assets — automatically.
            </p>
            
            <div class="mt-8 flex flex-wrap justify-center gap-4">
        <Link to= '/contactus'><a
          class="transform rounded-mdpx-6 rounded bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 px-5 py-3 font-medium text-white transition-colors hover:from-pink-600 hover:to-orange-400">
          Get in-touch
        </a></Link>

        <Link to= '/aboutus'><a
          class="transform rounded-md border border-black px-5 py-3 font-medium transition-colors hover:bg-slate-50 hover:text-black">
          Learn More
        </a></Link>
      </div>
           
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>


{/*service section -title*/}
  <section>
  <div className="text-lg font-semibold mx-auto text-center">
    Main features
  </div>
  <h2 className="mt-4 text-2xl font-bold md:text-4xl text-center mb-0 sm:mb-10">
    Services, We Provide
  </h2>

  <div className="mt-auto flex flex-wrap items-center justify-center">
          <a href="/link1" className="block w-24 h-24 bg-blue-500 hover:bg-blue-700 mx-2 my-2 rounded-lg"></a>
          <a href="/link2" className="block w-24 h-24 bg-green-500 hover:bg-green-700 mx-2 my-2 rounded-lg"></a>
          <a href="/link3" className="block w-24 h-24 bg-red-500 hover:bg-red-700 mx-2 my-2 rounded-lg"></a>
          <a href="/link4" className="block w-24 h-24 bg-yellow-500 hover:bg-yellow-700 mx-2 my-2 rounded-lg"></a>
          <a href="/link5" className="block w-24 h-24 bg-pink-500 hover:bg-pink-700 mx-2 my-2 rounded-lg"></a>
          <a href="/link6" className="block w-24 h-24 bg-purple-500 hover:bg-purple-700 mx-2 my-2 rounded-lg"></a>
        </div>
  </section>

{/*service section -1 */}
<div className="relative ">
  <section className="min-h-screen flex items-center justify-center">
    <div className="flex flex-wrap justify-center">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm m-2">
        <a href="#">
          <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">WEDDING PLANNERS</h5>
          </a>
          <p className="font-normal text-gray-700 mb-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <a href="#" className="text-white bg-orange-500 hover:bg-yellow-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
            know more
            <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>
        </div>
      </div>

      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm m-2">
        <a href="#">
          <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">EVENT PLANNERS</h5>
          </a>
          <p className="font-normal text-gray-700 mb-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <a href="#" className="text-white bg-orange-500 hover:bg-yellow-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
            know more
            <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</div>

{/*service section -2 */}
<div className="relative ">
  <section className="min-h-screen flex items-center justify-center">
    <div className="flex flex-wrap justify-center">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm m-2">
        <a href="#">
          <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">Outdoor Advertisement</h5>
          </a>
          <p className="font-normal text-gray-700 mb-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <a href="#" className="text-white bg-orange-500 hover:bg-yellow-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
            know more
            <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</div>

{/*service section -3 */}
<div className="relative bg-orange-500">
  <section className="min-h-screen flex items-center justify-center">
    <div className="flex flex-wrap justify-center">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm m-2">
        <a href="#">
          <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">BRANDING</h5>
          </a>
          <p className="font-normal text-gray-700 mb-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <a href="#" className="text-white bg-orange-500 hover:bg-yellow-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
            know more
            <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>
        </div>
      </div>

      
    </div>

    
  </section>
</div>


{/*service section -4 */}
<div className="relative ">
  <section className="min-h-screen flex items-center justify-center">
    <div className="flex flex-wrap justify-center">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm m-2">
        <a href="#">
          <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">DIGITAL MEDIA MARKETING</h5>
          </a>
          <p className="font-normal text-gray-700 mb-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <a href="#" className="text-white bg-orange-500 hover:bg-yellow-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
            know more
            <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>
        </div>
      </div>

      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm m-2">
        <a href="#">
          <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">DIGITAL CREATIVE MEDIA</h5>
          </a>
          <p className="font-normal text-gray-700 mb-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <a href="#" className="text-white bg-orange-500 hover:bg-yellow-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
            know more
            <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>

    
  </section>
</div>
  


</main>

  )
}

export default ServicesHeader