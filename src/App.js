import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer, PrivacyPolicy, TermsnConditions, Disclaimer, ShippingandDelivery, ReturnPolicy, Error404, Home, 
          Aboutus, Contact, 
          WebDesigning, ATL, BTL, AllEvents, Advertising, } from './routes/Routesmap';

import DigitalCreativeMedia from "./routes/Digital Creative Media/DigitalCreativeMedia";
import Branding from "./routes/Branding/Branding";

const routes = [
  { path: '/', element: <Home /> },
  { path: '/aboutus', element: <Aboutus /> },
  { path: '/digital-creative-media', element: <DigitalCreativeMedia /> },
  { path: '/branding-agency-in-vizag', element: <Branding /> },
  { path: '/web-design-and-development-company', element: <WebDesigning /> },
  { path: '/best-event-management-company-vizag', element: <AllEvents /> },
  { path: '/advertising-company-in-vizag', element: <Advertising /> },
  { path: '/atl-advertising', element: <ATL /> },
  { path: '/btl-activities', element: <BTL /> },
  { path: '/contact', element: <Contact /> },
  { path: '/privacypolicy', element: <PrivacyPolicy /> },
  { path: '/terms&conditions', element: <TermsnConditions /> },
  { path: '/returnpolicy', element: <ReturnPolicy /> },
  { path: '/shipping&delivery', element: <ShippingandDelivery /> },
  { path: '/disclaimer', element: <Disclaimer /> },
];

export function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Routes location={location} key={location.pathname}>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
