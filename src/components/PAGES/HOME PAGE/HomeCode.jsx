import React from 'react';

import './Home.scss';
import {CSDbothome,HeroCoverBG } from '../../data/data.jsx';
import '../../Tools/Animations.scss';

import {codeing ,graphicsdesign ,digitalmarketing ,mobiledev ,recruitment ,brand ,morefeatures} from '../../data/data.jsx';
import {documentationicon ,socialicon ,analysisicon ,financeicon ,statergyicon ,businessreporticon ,}from '../../data/data.jsx';


const HomeHero = () => {
  return (
  <main>
{/*herosection desktop*/}    
    <header>
  
      <div className='section-1'>
  <section className="flex items-center h-96 py-96 justify-center">
    <div className="mx-auto max-w-[55rem]">
      <div className="text-center">
        <p className="text-lg font-medium leading-8 text-black ">
          MAKE YOUR EVENTS MEMO
        </p>
        <h1 className="fade-in-down pb-8 font-extrabold text-transparent text-2xl md:text-8xl bg-clip-text bg-gradient-to-r from-red-600 to-yellow-400 mt-3 text-[3.5rem]  leading-[4rem] tracking-tight text-black">
          LEOR MEDIA
        </h1>
        <p className="px-4 mt-3 text-lg leading-relaxed text-black">
          We help  your brand to build digital, Providing Gobal Presents.
        </p>
      </div>
      <div className="mt-6 flex items-center justify-center gap-4">
        <a
          href="/contactus"
          className="transform rounded-md border border-slate-600 px-5 py-3 font-medium text-black transition-colors hover:bg-yellow-500 hover:text-white">
          Contact us
        </a>
        <a
          href="/getquotation"
          className="transform rounded-md border border-slate-600 px-5 py-3 font-medium text-black transition-colors hover:bg-red-600 hover:text-white"
        >
          {" "}
          Get Quotation{" "}
        </a>
      </div>
    </div>
  </section></div>
 </header>

  </main>


  )
}

export default HomeHero