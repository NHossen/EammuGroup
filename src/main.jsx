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

      // ===== TIIC =====
      {path: "target-ielts-and-immigration-center",element: <TIICPage />},

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
