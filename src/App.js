import React from "react";
import {  Routes, Route, useLocation  } from 'react-router-dom';


import {Navbar,Footer,Sitemap,PrivacyPolicy,TermsnConditions,Disclaimer,ShippingandDelivery,ReturnPolicy,Error404,
        Home,Aboutus,Contact,WebDesigning, ATL, BTL,AllEvents,
        } from './routes/Routesmap';


import Notification from "./components/Tools/Notifications";        

import DigitalCreativeMedia from "./routes/Digital Creative Media/DigitalCreativeMedia";
import Branding from "./routes/Branding/Branding";

        
export function App() {
 

  const location= useLocation();
  window.scrollTo(0, 0); /*---ResetPagelocation---*/



  
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

          <Route path='/branding-agency-in-vizag' element={<Branding />} />
          <Route path='/web-design-and-development-company' element={< WebDesigning/>} />

          <Route path="/best-event-management-company-vizag" element={<AllEvents/>} />


          <Route path='/atl-advertising' element={<ATL />} />
          <Route path='/btl-activities' element={<BTL />} />

          <Route path='/contact' element={<Contact />} />

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