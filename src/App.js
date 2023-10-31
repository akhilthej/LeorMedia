import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer, PrivacyPolicy, TermsnConditions, Disclaimer, ShippingandDelivery, ReturnPolicy, Error404, 
         Home,Aboutus, Contact } from './routes/Routesmap';
          
         
import { 

/*Digital marketing */
DigitalMarketing,SearchEngineOptimization,ContentMarketing,SocialMediaMarketing,EmailMarketing,
PayPerClickAdvertising,AffiliateMarketing,AnalyticsandDataAnalysis,ConversionRateOptimization,
MobileMarketing,VideoMarketing,LocalSEOandMarketing,EcommerceMarketing,MarketingAutomation,RemarketingRetargeting,InfluencerMarketing,

/*Graphic Designing */
MultiMedia,LogoDesign,BrandIdentityDesign,PrintDesign,WebDesign,UserInterfaceDesign,UserExperienceDesign,PackagingDesign,
PosterandFlyerDesign,BrochureDesign,BannerDesign,IllustrationServices,InfographicDesign,SocialMediaGraphics,eBookandPrintBookCoverDesign,
TshirtandMerchandiseDesign,SignageandBillboardDesign,BusinessCardandStationeryDesign,RenderingandVisualization,
MotionGraphicsandAnimation,PhotoEditingandRetouching,

/*Advertising*/
Advertising,DisplayAdvertising,VideoAdvertising,NativeAdvertising,ProgrammaticAdvertising,
OutdoorAdvertising,PrintAdvertising,RadioAdvertising,TVAdvertising,IngameAdvertising,
TheaterAdvertising,

/*Branding*/
BrandServices,
BrandIdentityDesignExclusive,BrandLogoDesign,BrandGuidelines,BrandPositioning,BrandStorytelling,
BrandNaming,VisualIdentityDesign,BrandMessaging,BrandExperienceDesign,BrandAwarenessCampaigns,
RebrandingServices,BrandResearchandAnalysis,BrandTrackingandPerformanceEvaluation,


/* Events */
    AllEvents,OtherEvents,AudioLaunches,AwardNights,CorporateEvents,CulturalNight,FashionShow,ProductLaunches,
    DestinationWedding,Engagement,Mehandi,Pellikokuku,Pillikuturu,Receptions,Sangeeth,Wedding,
    Birthdays, } from './routes/Routesmap';



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

        /*---------Multimedia---------*/
        { path: '/digital-creative-media-company-in-vizag', element: <MultiMedia /> },
        { path: '/graphic-designing-company-in-vizag', element: <MultiMedia /> },
        { path: '/best-graphic-designing-in-vizag', element: <MultiMedia /> },
        { path: '/best-poster-designing-company', element: <MultiMedia /> },
      
        { path: '/logo-design', element: <LogoDesign /> },
        { path: '/logo-design-company-in-vizag', element: <LogoDesign /> },
        { path: '/brand-identity-design', element: <BrandIdentityDesign /> },
        { path: '/print-design', element: <PrintDesign /> },
        { path: '/web-design', element: <WebDesign /> },
        { path: '/user-interface-design', element: <UserInterfaceDesign /> },
        { path: '/user-experience-design', element: <UserExperienceDesign /> },
        { path: '/packaging-design', element: <PackagingDesign /> },
        { path: '/poster-and-flyer-design', element: <PosterandFlyerDesign /> },
        { path: '/brochure-design', element: <BrochureDesign /> },
        { path: '/banner-design', element: <BannerDesign /> },
        { path: '/illustration-services', element: <IllustrationServices /> },
        { path: '/infographic-design', element: <InfographicDesign /> },
        { path: '/social-media-graphics', element: <SocialMediaGraphics /> },
        { path: '/ebook-and-print-book-cover-design', element: <eBookandPrintBookCoverDesign /> },
        { path: '/t-shirt-and-merchandise-design', element: <TshirtandMerchandiseDesign /> },
        { path: '/signage-and-billboard-design', element: <SignageandBillboardDesign /> },
        { path: '/business-card-and-stationery-design', element: <BusinessCardandStationeryDesign /> },
        { path: '/rendering-and-visualization', element: <RenderingandVisualization /> },
        { path: '/motion-graphics-and-animation', element: <MotionGraphicsandAnimation /> },
        { path: '/photo-editing-and-retouching', element: <PhotoEditingandRetouching /> },
              /*---------GraphicDesigning End---------*/
      
              /*---------DigitalMarketing---------*/
        { path: '/digital-marketing-company-in-vizag', element: <DigitalMarketing /> },
        { path: '/best-digital-marketing-company-in-vizag', element: <DigitalMarketing /> },
        { path: '/social-media-marketing-company', element: <DigitalMarketing /> },
      
        { path: '/search-engine-optimization', element: <SearchEngineOptimization /> },
        { path: '/content-marketing', element: <ContentMarketing /> },
        { path: '/social-media-marketing', element: <SocialMediaMarketing /> },
        { path: '/email-marketing', element: <EmailMarketing /> },
        { path: '/pay-per-click-advertising', element: <PayPerClickAdvertising /> },
        { path: '/affiliate-marketing', element: <AffiliateMarketing /> },
        { path: '/analytics-and-data-analysis', element: <AnalyticsandDataAnalysis /> },
        { path: '/conversion-rate-optimization', element: <ConversionRateOptimization /> },
        { path: '/mobile-marketing', element: <MobileMarketing /> },
        { path: '/video-marketing', element: <VideoMarketing /> },
        { path: '/local-seo-and-marketing', element: <LocalSEOandMarketing /> },
        { path: '/ecommerce-marketing', element: <EcommerceMarketing /> },
        { path: '/marketing-automation', element: <MarketingAutomation /> },
        { path: '/remarketing-retargeting', element: <RemarketingRetargeting /> },
        { path: '/influencer-marketing', element: <InfluencerMarketing /> },
              /*---------DigitalMarketing End---------*/
      
              /*---------BrandServices---------*/
        { path: '/branding-agency-in-vizag', element: <BrandServices /> },
        { path: '/brand-services-company-in-vizag', element: <BrandServices /> },
        { path: '/best-brand-services-company-in-vizag', element: <BrandServices /> },
      
        { path: '/brand-identity-design-exclusive', element: <BrandIdentityDesignExclusive /> },
        { path: '/brand-logo-design', element: <BrandLogoDesign /> },
        { path: '/brand-guidelines', element: <BrandGuidelines /> },
        { path: '/brand-positioning', element: <BrandPositioning /> },
        { path: '/brand-storytelling', element: <BrandStorytelling /> },
        { path: '/brand-naming', element: <BrandNaming /> },
        { path: '/visual-identity-design', element: <VisualIdentityDesign /> },
        { path: '/brand-messaging', element: <BrandMessaging /> },
        { path: '/brand-experience-design', element: <BrandExperienceDesign /> },
        { path: '/brand-awareness-campaigns', element: <BrandAwarenessCampaigns /> },
        { path: '/rebranding-services', element: <RebrandingServices /> },
        { path: '/brand-research-and-analysis', element: <BrandResearchandAnalysis /> },
        { path: '/brand-tracking-and-performance-evaluation', element: <BrandTrackingandPerformanceEvaluation /> },
              /*---------BrandServices End---------*/
      
              /*---------Advertising---------*/
        { path: '/best-advertising-company', element: <Advertising /> },
        { path: '/advertising-company-in-vizag', element: <Advertising /> },
        { path: '/best-advertising-company-in-vizag', element: <Advertising /> },
      
        { path: '/display-advertising', element: <DisplayAdvertising /> },
        { path: '/video-advertising', element: <VideoAdvertising /> },
        { path: '/native-advertising', element: <NativeAdvertising /> },
        { path: '/programmatic-advertising', element: <ProgrammaticAdvertising /> },
        { path: '/outdoor-advertising', element: <OutdoorAdvertising /> },
        { path: '/print-advertising', element: <PrintAdvertising /> },
        { path: '/radio-advertising', element: <RadioAdvertising /> },
        { path: '/tv-advertising', element: <TVAdvertising /> },
        { path: '/ingame-advertising', element: <IngameAdvertising /> },
        { path: '/theater-advertising', element: <TheaterAdvertising /> },
              /*---------Advertising End---------*/

/* Events */
{ path: '/best-event-management-company-vizag', element: <AllEvents /> },
{ path: '/best-wedding-event-management-company-vizag', element: <AllEvents /> },
{ path: '/best-event-management-services-vizag', element: <AllEvents /> },
{ path: '/event-management-company-vizag', element: <AllEvents /> },
{ path: '/commercial-events-in-vizag', element: <OtherEvents /> },
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
{ path: '/pellikuthuru-event-planners-in-vizag', element: <Pillikuturu /> },
{ path: '/bride-event-planners-in-vizag', element: <Pillikuturu /> },
{ path: '/best-pellikuthuru-event-decors-in-vizag', element: <Pillikuturu /> },
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
