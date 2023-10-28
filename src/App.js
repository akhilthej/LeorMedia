import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar,NavbarMobile, Footer, PrivacyPolicy, TermsnConditions, Disclaimer, ShippingandDelivery, ReturnPolicy, Error404, 
         Home,Aboutus, Contact } from './routes/Routesmap';
          
         /* DigitalCreativeMedia */
import { LogoDesigning,GraphicDesigning,WebsiteDesigning,ContentCreation,VideoCreation,DigitalCreativeMedia, 

 /* Branding */
Branding,BrandAudit,BrandIdentity,
BrandStatergy,InfilmBranding,CorporateBranding,
Labeling,BrandPosition,

/* Advertising */
GoogleAds,FacebookAds,InstagramAds,InfluencerMarketing,
ContentMarketing,Emailmarketing,SearchEngineOptimization,
    SMM,ATL,BTL,Advertising,

/* Events */
    AllEvents,AudioLaunches,AwardNights,CorporateEvents,CulturalNight,FashionShow,ProductLaunches,
    DestinationWedding,Engagement,Mehandi,Pellikokuku,Pillikuturu,Receptions,Sangeeth,Wedding, } from './routes/Routesmap';



const routes = [
  { path: '/', element: <Home /> },
  { path: '/*', element: <Error404 /> },
  { path: '/aboutus', element: <Aboutus /> },
  { path: '/contact', element: <Contact /> },
  { path: '/privacypolicy', element: <PrivacyPolicy /> },
  { path: '/terms&conditions', element: <TermsnConditions /> },
  { path: '/returnpolicy', element: <ReturnPolicy /> },
  { path: '/shipping&delivery', element: <ShippingandDelivery /> },
  { path: '/disclaimer', element: <Disclaimer /> },

  /* DigitalCreativeMedia */
{ path: '/logo-designing', element: <LogoDesigning /> },
{ path: '/graphic-designing', element: <GraphicDesigning /> },
{ path: '/website-designing', element: <WebsiteDesigning /> },
{ path: '/content-creation', element: <ContentCreation /> },
{ path: '/video-creation', element: <VideoCreation /> },
{ path: '/digital-creative-media', element: <DigitalCreativeMedia /> },

 /* Branding */
{ path: '/branding-agency-in-vizag', element: <Branding /> },
{ path: '/brand-audit', element: <BrandAudit /> },
{ path: '/brand-identity', element: <BrandIdentity /> },
{ path: '/brand-strategy', element: <BrandStatergy /> },
{ path: '/infilm-branding', element: <InfilmBranding /> },
{ path: '/corporate-branding', element: <CorporateBranding /> },
{ path: '/labeling', element: <Labeling /> },
{ path: '/brand-position', element: <BrandPosition /> },

/* Advertising */
{ path: '/advertising-company-in-vizag', element: <Advertising /> },
{ path: '/google-ads', element: <GoogleAds /> },
{ path: '/facebook-ads', element: <FacebookAds /> },
{ path: '/instagram-ads', element: <InstagramAds /> },
{ path: '/influencer-marketing', element: <InfluencerMarketing /> },
{ path: '/content-marketing', element: <ContentMarketing /> },
{ path: '/email-marketing', element: <Emailmarketing /> },
{ path: '/search-engine-optimization', element: <SearchEngineOptimization /> },
{ path: '/social-media-marketing', element: <SMM /> },
{ path: '/atl-advertising', element: <ATL /> },
{ path: '/btl-advertising', element: <BTL /> },

/* Events */
{ path: '/best-event-management-company-vizag', element: <AllEvents /> },
{ path: '/audio-launches', element: <AudioLaunches /> },
{ path: '/award-nights', element: <AwardNights /> },
{ path: '/corporate-events', element: <CorporateEvents /> },
{ path: '/cultural-night', element: <CulturalNight /> },
{ path: '/fashion-show', element: <FashionShow /> },
{ path: '/product-launches', element: <ProductLaunches /> },
{ path: '/destination-wedding', element: <DestinationWedding /> },
{ path: '/engagement', element: <Engagement /> },
{ path: '/mehandi', element: <Mehandi /> },
{ path: '/pellikokuku', element: <Pellikokuku /> },
{ path: '/pillikuturu', element: <Pillikuturu /> },
{ path: '/receptions', element: <Receptions /> },
{ path: '/sangeeth', element: <Sangeeth /> },
{ path: '/wedding', element: <Wedding /> }

];

export function App() {
  const location = useLocation();

  return (
    <>
      <Navbar /><NavbarMobile />
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
