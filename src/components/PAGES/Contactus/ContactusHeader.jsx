import React from 'react';
import {ContactusHeaderimage ,} from '../../data/data';


const ContactusHeader = () => {
  return (
    <>
  {/*Services Title Card*/}
  <section className="mt-20 flex items-center justify-center ">
    <div className="mx-auto max-w-[43rem]">
      <div className="text-center">
        <h1 className="pb-3 text-4xl fade-in-down font-extrabold text-transparent  md:text-6xl bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 tracking-tight">
        Get in touch,<br />we’d love to hear from you.
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-white">
          You can contact us through mail or you can get in touch at our digital office.
        </p>
      </div>
      
      <img className="hero container max-w-screen-lg mx-auto flex w-64 wobble"
            src={ContactusHeaderimage}/> 
    
      
      </div>
     
  </section>
</>
  )
}

export default ContactusHeader


