import React from 'react'
import { Link } from 'react-router-dom'
import { BirthdayData } from '../EventsData';

const Birthdays = () => {
  return (
    <div> 
        
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
             Birthdays
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
     

     <div className="my-5">
      <h1 className="text-center pb-2 cursor-default text-2xl md:text-4xl fade-in-down font-bold  tracking-tight">
        Birthday Gallery
      </h1>
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 pl-5 pr-5">
        {BirthdayData.map((event) => (
          <div key={event.id} className="relative">
              <div className="thumbnail-container">
                <img src={event.thumbnail} alt={event.name} />
                <div className="overlay"></div> {/* Black color overlay */}
              </div>

<div className='text-black'> 
            <h1 className=" text-center">{event.name}</h1>
            <h3 className=" text-center text-sm">{event.event_title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>

     </div>
  )
}

export default Birthdays