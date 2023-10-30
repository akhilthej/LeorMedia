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
{ path: '/logo-designing-in-vizag', element: <LogoDesigning /> },
{ path: '/logo-designing-company-in-vizag', element: <LogoDesigning /> },
{ path: '/logo-makers-in-vizag', element: <LogoDesigning /> },
{ path: '/graphic-designing-in-vizag', element: <GraphicDesigning /> },
{ path: '/web-design-in-vizag', element: <WebsiteDesigning /> },
{ path: '/web-design-company-in-vizag', element: <WebsiteDesigning /> },
{ path: '/content-creation-in-vizag', element: <ContentCreation /> },
{ path: '/video-creation-in-vizag', element: <VideoCreation /> },
{ path: '/digital-creative-media-in-vizag', element: <DigitalCreativeMedia /> },
{ path: '/digital-creative-media-company-in-vizag', element: <DigitalCreativeMedia /> },

 /* Branding */
{ path: '/branding-agency-in-vizag', element: <Branding /> },
{ path: '/branding-company-in-vizag', element: <Branding /> },
{ path: '/brand-audit-services-in-vizag', element: <BrandAudit /> },
{ path: '/brand-identity-in-vizag', element: <BrandIdentity /> },
{ path: '/brand-strategy-services', element: <BrandStatergy /> },
{ path: '/infilm-branding-in-vizag', element: <InfilmBranding /> },
{ path: '/corporate-branding-company-in-vizag', element: <CorporateBranding /> },
{ path: '/labeling-in-vizag', element: <Labeling /> },
{ path: '/labeling-companies-in-vizag', element: <Labeling /> },
{ path: '/brand-position-in-vizag', element: <BrandPosition /> },

/* Advertising */
{ path: '/advertising-company-in-vizag', element: <Advertising /> },
{ path: '/online-advertising-company-in-vizag', element: <Advertising /> },
{ path: '/digital-advertising-company-in-vizag', element: <Advertising /> },
{ path: '/best-digital-marketing-services-in-vizag', element: <Advertising /> },
{ path: '/best-digital-marketing-company-in-vizag', element: <Advertising /> },
{ path: '/google-ads-services-in-vizag', element: <GoogleAds /> },
{ path: '/facebook-ads-services-in-vizag', element: <FacebookAds /> },
{ path: '/instagram-ads-services-in-vizag', element: <InstagramAds /> },
{ path: '/influencer-marketing-services-in-vizag', element: <InfluencerMarketing /> },
{ path: '/content-marketing-company-in-vizag', element: <ContentMarketing /> },
{ path: '/email-marketing-services-in-vizag', element: <Emailmarketing /> },
{ path: '/search-engine-optimization', element: <SearchEngineOptimization /> },
{ path: '/best-search-engine-optimization-services-in-vizag', element: <SearchEngineOptimization /> },
{ path: '/best-seo-services-in-vizag', element: <SearchEngineOptimization /> },
{ path: '/social-media-marketing-services-in-vizag', element: <SMM /> },
{ path: '/smm-services-in-vizag', element: <SMM /> },
{ path: '/atl-advertising-in-vizag', element: <ATL /> },
{ path: '/btl-advertising-in-vizag', element: <BTL /> },

/* Events */
{ path: '/best-event-management-company-vizag', element: <AllEvents /> },
{ path: '/best-wedding-event-management-company-vizag', element: <AllEvents /> },
{ path: '/best-event-management-services-vizag', element: <AllEvents /> },
{ path: '/event-management-company-vizag', element: <AllEvents /> },
{ path: '/audio-launch-event-planners-in-vizag', element: <AudioLaunches /> },
{ path: '/award-nights-event-planners-in-vizag', element: <AwardNights /> },
{ path: '/corporate-events-in-vizag', element: <CorporateEvents /> },
{ path: '/corporate-event-organisers-in-vizag', element: <CorporateEvents /> },
{ path: '/best-corporate-events-in-vizag', element: <CorporateEvents /> },
{ path: '/best-corporate-event-planners-in-vizag', element: <CorporateEvents /> },
{ path: '/cultural-night-event-planners-in-vizag', element: <CulturalNight /> },
{ path: '/fashion-show-event-planners-vizag', element: <FashionShow /> },
{ path: '/best-fashion-show-event-planners-vizag', element: <FashionShow /> },
{ path: '/product-launch-event-management-company-in-vizag', element: <ProductLaunches /> },
{ path: '/best-product-launch-event-planners-in-vizag', element: <ProductLaunches /> },
{ path: '/destination-wedding-planners-in-vizag', element: <DestinationWedding /> },
{ path: '/beach-destination-wedding-planners-in-vizag', element: <DestinationWedding /> },
{ path: '/beach-destination-wedding-event-company-in-vizag', element: <DestinationWedding /> },
{ path: '/best-destination-wedding-planners-in-vizag', element: <DestinationWedding /> },
{ path: '/engagement-planners-in-vizag', element: <Engagement /> },
{ path: '/best-engagement-planners-in-vizag', element: <Engagement /> },
{ path: '/mehandi-decor-event-in-vizag', element: <Mehandi /> },
{ path: '/best-mehandi-decor-event-in-vizag', element: <Mehandi /> },
{ path: '/best-mehandi-event-planners-in-vizag', element: <Mehandi /> },
{ path: '/pellikokuku-event-planners-in-vizag', element: <Pellikokuku /> },
{ path: '/groom-event-planners-in-vizag', element: <Pellikokuku /> },
{ path: '/best-pellikoduku-event-decors-in-vizag', element: <Pellikokuku /> },
{ path: '/pellikuthuru-event-planners-in-vizag', element: <Pellikuturu /> },
{ path: '/bride-event-planners-in-vizag', element: <Pellikuturu /> },
{ path: '/best-pellikuthuru-event-decors-in-vizag', element: <Pellikuturu /> },
{ path: '/best-reception-event-planners-in-vizag', element: <Receptions /> },
{ path: '/best-reception-event-decors-in-vizag', element: <Receptions /> },
{ path: '/reception-event-management-company-in-vizag', element: <Receptions /> },
{ path: '/best-sangeeth-event-planners-in-vizag', element: <Sangeeth /> },
{ path: '/best-sangeeth-planners-in-vizag', element: <Sangeeth /> },
{ path: '/sangeeth-event-planners-in-vizag', element: <Sangeeth /> },
{ path: '/wedding-planners-in-vizag', element: <Wedding /> },
{ path: '/best-wedding-planners-in-vizag', element: <Wedding /> },
{ path: '/best-wedding-organisers-in-vizag', element: <Wedding /> },
{ path: '/wedding-organisers-in-vizag', element: <Wedding /> },
{ path: '/wedding-event-decors-in-vizag', element: <Wedding /> },
{ path: '/wedding-event-services-in-vizag', element: <Wedding /> },
{ path: '/top-wedding-planners-in-vizag', element: <Wedding /> },
{ path: '/top-wedding-organisers-in-vizag', element: <Wedding /> },

/* Birthdays */
{ path: '/birthday-event-organisers-in-vizag', element: <Birthdays /> },
{ path: '/birthday-event-planners-in-vizag', element: <Birthdays /> },
{ path: '/best-birthday-event-planners-in-vizag', element: <Birthdays /> },
{ path: '/best-birthday-event-management-company-in-vizag', element: <Birthdays /> },
{ path: '/birthday-theme-event-planners-in-vizag', element: <Birthdays /> },

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
