import React, { useState } from "react";
import {  Routes, Route, useLocation  } from 'react-router-dom';


import {Navbar,Footer,Sitemap,PrivacyPolicy,TermsnConditions,Disclaimer,ShippingandDelivery,ReturnPolicy,Error404,
        Home,Aboutus,
        } from './routes/Routesmap';


import Notification from "./components/Tools/Notifications";        

import DigitalCreativeMedia from "./components/PAGES/Digital Creative Media/digital-creative-media";
import BrandingAgencyInVizag from "./components/PAGES/Branding Agency in Vizag/branding-agency-in-vizag";
        
export function App() {
 

  const location= useLocation();
  window.scrollTo(0, 0); /*---ResetPagelocation---*/

  /*---LogoPreLoager---*/
  const [setLoading] = useState(true);
  const preloader = document.getElementById("preloader");
  if (preloader) {
    setTimeout(() => {
      preloader.style.display = "none";
      setLoading(false);
    }, 5000);
  };

  
  return (
  <>
  <Navbar />
      <Notification/>
      <Routes location ={location} key={location.pathname}>
        
          <Route path='/' element={<Home />} />
          <Route path='/*' element={<Error404 />} />
          <Route path='/sitemap' element={<Sitemap />} />




          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/digital-creative-media' element={<DigitalCreativeMedia />} />
          <Route path='/branding-agency-in-vizag' element={<BrandingAgencyInVizag />} />
          <Route path='/best-event-management-company-vizag' element={<Aboutus />} />
          <Route path='/advertising-in-vizag' element={<Aboutus />} />
          <Route path='/contactus' element={<Aboutus />} />

          <Route path='/privacypolicy' element={<PrivacyPolicy />} /> 
          <Route path='/terms&conditions' element={<TermsnConditions />} />
          <Route path='/returnpolicy' element={<ReturnPolicy />} />
          <Route path='/shipping&delivery' element={<ShippingandDelivery />} />
          <Route path='/disclaimer' element={<Disclaimer />} />
         


      </Routes>
  <Footer />   
</>
    
  );

}

export default App;