import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./i18n/i18n";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate   // ✅ REQUIRED for redirects
} from "react-router-dom";

import { HelmetProvider } from 'react-helmet-async';

// Page Imports
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import MainRoot from './components/MainRoot/MainRoot.jsx';
import Home from './components/Home/Home.jsx';
import ErrorPage from './components/Errorpage/ErrorPage.jsx';
import OurServices from './components/OurServices/OurServices.jsx';
import VisaServices from './components/OurServices/VisaServices.jsx';
import AirTickets from './components/OurServices/AirTickets.jsx';
import TourPackages from './components/OurServices/TourPackages.jsx';
import Offer from './components/OurServices/Offer.jsx';
import Blogs from './components/Blogs/Blogs.jsx';

import EammuImmigrationServices from './components/EammuGroupWebsites/EammuImmigrationServices/EammuImmigrationServices.jsx';
import TargetUsaInterview from './components/EammuGroupWebsites/EammuImmigrationServices/TargetUsaInterview/TargetUsaInterview.jsx';

import EammuFashion from './components/EammuGroupWebsites/EammuFashion/EammuFashion.jsx';
import EammuItMarketing from './components/EammuGroupWebsites/EammuItMarketing/EammuItMarketing.jsx';
import EammuEvent from './components/EammuGroupWebsites/EammuEvent/EammuEvent.jsx';
import EammuDairy from './components/EammuGroupWebsites/EammuDairy/EammuDairy.jsx';
import EammuTextile from './components/EammuGroupWebsites/EammuTextile/EammuTextile.jsx';
import FlyZoo from './components/EammuGroupWebsites/FlyZoo/FlyZoo.jsx';

import EammuNewsfeeds from './components/EammuUsefulLinks/EammuNewsfeeds/EammuNewsfeeds.jsx';
import EammuTerms from './components/EammuUsefulLinks/EammuTerms/EammuTerms.jsx';
import Careers from './components/EammuUsefulLinks/Careers/Careers.jsx';

import Testimonials from './components/Testimonials/Testimonials.jsx';
import WhyChoiceEammu from './components/Home/WhyChoiceEammu.jsx';
import MessageFromLeadingTeam from './components/Home/MessageFromLeadingTeam.jsx';

import SignUp from './components/SignupLogin/SignUp/SignUp.jsx';
import LogIn from './components/SignupLogin/LogIn/LogIn.jsx';
import Details_More from './components/Home/Services_Card_Section/Student_visa/Details_More.jsx';
import NaeemHossen from './components/NaeemHossen/NaeemHossen.jsx';
import TravelAgencyBangladesh from './components/Country/Bangladesh.jsx';
import TravelAgencyDubai from './components/Country/dubai.jsx';
import TravelAgencyArmenia from './components/Country/armenia.jsx';
import TravelAgencyGeorgia from './components/Country/georgia.jsx';
import TIICPage from './components/OurServices/Tiic.jsx';
import UsaVisa from './components/OurServices/VisaCountry/UsaVisa.jsx';
import UkVisa from './components/OurServices/VisaCountry/UkVisa.jsx';
import EuropeVisa from './components/OurServices/VisaCountry/EuropeVisa.jsx';
import CanadaVisa from './components/OurServices/VisaCountry/CanadaVisa.jsx';
import AustraliaVisa from './components/OurServices/VisaCountry/AustraliaVisa.jsx';
import GermanyVisa from './components/OurServices/VisaCountry/GermanyVisa.jsx';
import PortugalVisa from './components/OurServices/VisaCountry/PortugalVisa.jsx';
import ArmeniaVisa from './components/OurServices/VisaCountry/ArmeniaVisa.jsx';
import GeorgiaVisa from './components/OurServices/VisaCountry/GeorgiaVisa.jsx';
import AlbaniaVisa from './components/OurServices/VisaCountry/AlbaniaVisa.jsx';
import DubaiVisa from './components/OurServices/VisaCountry/DubaiVisa.jsx';
import QatarVisa from './components/OurServices/VisaCountry/QatarVisa.jsx';
import JapanVisa from './components/OurServices/VisaCountry/JapanVisa.jsx';
import ChinaVisa from './components/OurServices/VisaCountry/ChinaVisa.jsx';
import SouthKoreaVisa from './components/OurServices/VisaCountry/SouthKoreaVisa.jsx';
import SpainVisa from './components/OurServices/VisaCountry/SpainVisa.jsx';
import KosovoVisa from './components/OurServices/VisaCountry/KosovoVisa.jsx';
import SerbiaVisa from './components/OurServices/VisaCountry/SerbiaVisa.jsx';
import EammuSocialResponsibility from './components/EammuSocialResponsibility/EammuSocialResponsibility.jsx';


// ROUTER SETUP (FINAL)
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot />,
    errorElement: <ErrorPage />,
    children: [

      // ===== MAIN =====
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/blogs", element: <Blogs /> },

      // ===== SEO FRIENDLY URLs =====
      { path: "/our-services", element: <OurServices /> },
      { path: "/visa-services", element: <VisaServices /> },
      { path: "/air-tickets", element: <AirTickets /> },
      { path: "/tour-packages", element: <TourPackages /> },
      { path: "/offers", element: <Offer /> },

      { path: "/immigration-services", element: <EammuImmigrationServices /> },
      { path: "/usa-visa-interview-prep", element: <TargetUsaInterview /> },

      // ===== GROUP SITES =====
      { path: "/eammufashion", element: <EammuFashion /> },
      { path: "/eammumarketing", element: <EammuItMarketing /> },
      { path: "/eammuevent", element: <EammuEvent /> },
      { path: "/eammudairy", element: <EammuDairy /> },
      { path: "/eammutextile", element: <EammuTextile /> },
      { path: "/flyzoo", element: <FlyZoo /> },

      // ===== TRUST =====
      { path: "/newsfeeds", element: <EammuNewsfeeds /> },
      { path: "/careers", element: <Careers /> },
      { path: "/testimonials", element: <Testimonials /> },
      { path: "/why-choose-eammu", element: <WhyChoiceEammu /> },
      { path: "/message-from-leadership", element: <MessageFromLeadingTeam /> },
      { path: "/terms-and-conditions", element: <EammuTerms /> },

      // ===== DETAILS =====
      { path: "/university_details/:id", element: <Details_More /> },

      // ===== AUTH =====
      { path: "/signup", element: <SignUp /> },
      { path: "/login", element: <LogIn /> },
      
      // ===== NAEEM CEO =====
      {path: "naeem-hossen",element: <NaeemHossen />},

      // ===== Country Based Website =====
      {path: "travel-agency-bangladesh",element: <TravelAgencyBangladesh />},
      {path: "travel-agency-dubai",element: <TravelAgencyDubai />},
      {path: "travel-agency-armenia",element: <TravelAgencyArmenia />},
      {path: "travel-agency-georgia",element: <TravelAgencyGeorgia />},

      // ===== Country Based Visa Website =====
      {path: "usa-visa-application",element: <UsaVisa />},
      {path: "uk-visa-application",element: <UkVisa />},
      {path: "europe-visa-application",element: <EuropeVisa />},
      {path: "canada-visa-application",element: <CanadaVisa />},
      {path: "australia-visa-application",element: <AustraliaVisa />},
      {path: "germany-visa-application",element: <GermanyVisa />},
      {path: "portugal-visa-application",element: <PortugalVisa />},
      {path: "armenia-visa-application",element: <ArmeniaVisa />},
      {path: "georgia-visa-application",element: <GeorgiaVisa />},
      {path: "albania-visa-application",element: <AlbaniaVisa />},
      {path: "dubai-visa-application",element: <DubaiVisa />},
      {path: "qatar-visa-application",element: <QatarVisa />},
      {path: "japan-visa-application",element: <JapanVisa />},
      {path: "china-visa-application",element: <ChinaVisa />},
      {path: "south-korea-visa-application",element: <SouthKoreaVisa />},
      {path: "spain-visa-application",element: <SpainVisa />},
      {path: "kosovo-visa-application",element: <KosovoVisa />},
      {path: "serbia-visa-application",element: <SerbiaVisa />},

      // ===== TIIC =====
      {path: "target-ielts-and-immigration-center",element: <TIICPage />},

      // ===== EammuSocialResponsibility =====
      {path: "eammu-social-responsibility",element: <EammuSocialResponsibility />},

      // ===== 🔁 OLD URL REDIRECTS (NO SEO LOSS) =====
      { path: "/ourServices", element: <Navigate to="/our-services" replace /> },
      { path: "/visaservices", element: <Navigate to="/visa-services" replace /> },
      { path: "/airtickets", element: <Navigate to="/air-tickets" replace /> },
      { path: "/tourpackages", element: <Navigate to="/tour-packages" replace /> },
      { path: "/offer", element: <Navigate to="/offers" replace /> },
      { path: "/eammuimmigrationservices", element: <Navigate to="/immigration-services" replace /> },
      { path: "/targetusavisainterview", element: <Navigate to="/usa-visa-interview-prep" replace /> },
      { path: "/eammunewsfeeds", element: <Navigate to="/newsfeeds" replace /> },
      { path: "/whychoiceeammu", element: <Navigate to="/why-choose-eammu" replace /> },
      { path: "/messagefromleadingteam", element: <Navigate to="/message-from-leadership" replace /> },
      { path: "/eammuterms", element: <Navigate to="/terms-and-conditions" replace /> },
    ],
  },
]);


// RENDER
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
