import Navbar from "../components/Navbar/Navbar";
import NavbarMobile from '../components/Navbar/NavbarMobile'
import Footer from '../components/Footer/Footer';

import Aboutus from './About/Aboutus';
import Contact from './Contact/Contact';

import PrivacyPolicy from '../components/Documents/PrivacyPolicy';
import TermsnConditions from '../components/Documents/TermsnConditions';
import ReturnPolicy from '../components/Documents/ReturnsPolicy';
import ShippingandDelivery from '../components/Documents/ShippingandDelivery';
import Disclaimer from '../components/Documents/Disclaimer';

import Error404 from '../components/Tools/Error404';
import Home from './HOME';


/* DigitalCreativeMedia */
import { DigitalCreativeMedia,GraphicDesigning,WebsiteDesigning,ContentCreation,
         VideoCreation,WebDesigning} from "./Digital Creative Media/D_Routes";

/* Branding */
import {Branding,BrandAudit,BrandIdentity,
BrandStatergy,InfilmBranding,CorporateBranding,
Labeling,BrandPosition,LogoDesigning } from './Branding/B_routes';

/* Advertising */
import {GoogleAds,FacebookAds,InstagramAds,InfluencerMarketing,
    ContentMarketing,Emailmarketing,SearchEngineOptimization,
    SMM,ATL,BTL,Advertising} from './Advertising/A_routers';

/* Events */
import { AllEvents,AudioLaunches,AwardNights,CorporateEvents,CulturalNight,FashionShow,ProductLaunches,
          DestinationWedding,Engagement,Mehandi,Pellikokuku,Pillikuturu,Receptions,Sangeeth,Wedding} from './AllEvents/Events_routes'






export {
Navbar,NavbarMobile,Footer,
PrivacyPolicy,TermsnConditions,Disclaimer,ReturnPolicy,ShippingandDelivery,
Error404,

Home,Aboutus,Contact,

/* DigitalCreativeMedia */
LogoDesigning,GraphicDesigning,WebsiteDesigning,ContentCreation,VideoCreation,
WebDesigning,DigitalCreativeMedia,

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
    DestinationWedding,Engagement,Mehandi,Pellikokuku,Pillikuturu,Receptions,Sangeeth,Wedding,


};