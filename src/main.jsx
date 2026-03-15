import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./i18n/i18n";

import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';


// =================== LAZY LOAD ALL PAGES ===================

// Main Pages
const About = lazy(() => import('./components/About/About.jsx'));
const Contact = lazy(() => import('./components/Contact/Contact.jsx'));
const MainRoot = lazy(() => import('./components/MainRoot/MainRoot.jsx'));
const Home = lazy(() => import('./components/Home/Home.jsx'));
const ErrorPage = lazy(() => import('./components/Errorpage/ErrorPage.jsx'));
const OurServices = lazy(() => import('./components/OurServices/OurServices.jsx'));
const VisaServices = lazy(() => import('./components/OurServices/VisaServices.jsx'));
const AirTickets = lazy(() => import('./components/OurServices/AirTickets.jsx'));
const TourPackages = lazy(() => import('./components/OurServices/TourPackages.jsx'));
const Offer = lazy(() => import('./components/OurServices/Offer.jsx'));
const Blogs = lazy(() => import('./components/Blogs/Blogs.jsx'));
const ActivitiesPage = lazy(() => import('./components/OurServices/ActivitiesPage.jsx'));

// Group Websites
const EammuImmigrationServices = lazy(() => import('./components/EammuGroupWebsites/EammuImmigrationServices/EammuImmigrationServices.jsx'));
const TargetUsaInterview = lazy(() => import('./components/EammuGroupWebsites/EammuImmigrationServices/TargetUsaInterview/TargetUsaInterview.jsx'));
const EammuFashion = lazy(() => import('./components/EammuGroupWebsites/EammuFashion/EammuFashion.jsx'));
const EammuItMarketing = lazy(() => import('./components/EammuGroupWebsites/EammuItMarketing/EammuItMarketing.jsx'));
const EammuEvent = lazy(() => import('./components/EammuGroupWebsites/EammuEvent/EammuEvent.jsx'));
const EammuDairy = lazy(() => import('./components/EammuGroupWebsites/EammuDairy/EammuDairy.jsx'));
const EammuTextile = lazy(() => import('./components/EammuGroupWebsites/EammuTextile/EammuTextile.jsx'));
const FlyZoo = lazy(() => import('./components/EammuGroupWebsites/FlyZoo/FlyZoo.jsx'));

// Useful Links
const EammuNewsfeeds = lazy(() => import('./components/EammuUsefulLinks/EammuNewsfeeds/EammuNewsfeeds.jsx'));
const EammuTerms = lazy(() => import('./components/EammuUsefulLinks/EammuTerms/EammuTerms.jsx'));
const Careers = lazy(() => import('./components/EammuUsefulLinks/Careers/Careers.jsx'));

// Home Sections
const Testimonials = lazy(() => import('./components/Testimonials/Testimonials.jsx'));
const WhyChoiceEammu = lazy(() => import('./components/Home/WhyChoiceEammu.jsx'));
const MessageFromLeadingTeam = lazy(() => import('./components/Home/MessageFromLeadingTeam.jsx'));

// Auth
const SignUp = lazy(() => import('./components/SignupLogin/SignUp/SignUp.jsx'));
const LogIn = lazy(() => import('./components/SignupLogin/LogIn/LogIn.jsx'));

// CEO
const NaeemHossen = lazy(() => import('./components/NaeemHossen/NaeemHossen.jsx'));

// Country Pages
const TravelAgencyBangladesh = lazy(() => import('./components/Country/Bangladesh.jsx'));
const TravelAgencyDubai = lazy(() => import('./components/Country/dubai.jsx'));
const TravelAgencyArmenia = lazy(() => import('./components/Country/armenia.jsx'));
const TravelAgencyGeorgia = lazy(() => import('./components/Country/georgia.jsx'));

// Visa Pages
const UsaVisa = lazy(() => import('./components/OurServices/VisaCountry/UsaVisa.jsx'));
const UkVisa = lazy(() => import('./components/OurServices/VisaCountry/UkVisa.jsx'));
const EuropeVisa = lazy(() => import('./components/OurServices/VisaCountry/EuropeVisa.jsx'));
const CanadaVisa = lazy(() => import('./components/OurServices/VisaCountry/CanadaVisa.jsx'));
const AustraliaVisa = lazy(() => import('./components/OurServices/VisaCountry/AustraliaVisa.jsx'));
const GermanyVisa = lazy(() => import('./components/OurServices/VisaCountry/GermanyVisa.jsx'));
const PortugalVisa = lazy(() => import('./components/OurServices/VisaCountry/PortugalVisa.jsx'));
const ArmeniaVisa = lazy(() => import('./components/OurServices/VisaCountry/ArmeniaVisa.jsx'));
const GeorgiaVisa = lazy(() => import('./components/OurServices/VisaCountry/GeorgiaVisa.jsx'));
const AlbaniaVisa = lazy(() => import('./components/OurServices/VisaCountry/AlbaniaVisa.jsx'));
const DubaiVisa = lazy(() => import('./components/OurServices/VisaCountry/DubaiVisa.jsx'));
const QatarVisa = lazy(() => import('./components/OurServices/VisaCountry/QatarVisa.jsx'));
const JapanVisa = lazy(() => import('./components/OurServices/VisaCountry/JapanVisa.jsx'));
const ChinaVisa = lazy(() => import('./components/OurServices/VisaCountry/ChinaVisa.jsx'));
const SouthKoreaVisa = lazy(() => import('./components/OurServices/VisaCountry/SouthKoreaVisa.jsx'));
const SpainVisa = lazy(() => import('./components/OurServices/VisaCountry/SpainVisa.jsx'));
const KosovoVisa = lazy(() => import('./components/OurServices/VisaCountry/KosovoVisa.jsx'));
const SerbiaVisa = lazy(() => import('./components/OurServices/VisaCountry/SerbiaVisa.jsx'));
const ThailandVisa = lazy(() => import('./components/OurServices/VisaCountry/ThailandVisa.jsx'));
const SingaporeVisa = lazy(() => import('./components/OurServices/VisaCountry/SingaporeVisa.jsx'));
const MalaysiaVisa = lazy(() => import('./components/OurServices/VisaCountry/MalaysiaVisa.jsx'));
const TurkeyVisa = lazy(() => import('./components/OurServices/VisaCountry/TurkeyVisa.jsx'));
const IndonesiaVisa = lazy(() => import('./components/OurServices/VisaCountry/IndonesiaVisa.jsx'));
const IndiaVisa = lazy(() => import('./components/OurServices/VisaCountry/IndiaVisa.jsx'));
const SaudiVisa = lazy(() => import('./components/OurServices/VisaCountry/SaudiVisa.jsx'));
const MoroccoVisa = lazy(() => import('./components/OurServices/VisaCountry/MoroccoVisa.jsx'));
const BrazilVisa = lazy(() => import('./components/OurServices/VisaCountry/BrazilVisa.jsx'));
const SouthAfricaVisa = lazy(() => import('./components/OurServices/VisaCountry/SouthAfricaVisa.jsx'));
const AzerbaijanVisa = lazy(() => import('./components/OurServices/VisaCountry/AzerbaijanVisa.jsx'));
const CyprusVisa = lazy(() => import('./components/OurServices/VisaCountry/CyprusVisa.jsx'));
const SriLankaVisa = lazy(() => import('./components/OurServices/VisaCountry/SriLankaVisa.jsx'));
const RussiaVisa = lazy(() => import('./components/OurServices/VisaCountry/RussiaVisa.jsx'));
const MontenegroVisa = lazy(() => import('./components/OurServices/VisaCountry/MontenegroVisa.jsx'));



// Visa Categories
const TouristVisaBangladesh = lazy(() => import('./components/OurServices/Visa/TouristVisaBangladesh.jsx'));
const StudentVisaBangladesh = lazy(() => import('./components/OurServices/Visa/StudentVisaBangladesh.jsx'));
const WorkVisaBangladesh = lazy(() => import('./components/OurServices/Visa/WorkVisaBangladesh.jsx'));

// TIIC & Store
const TIICPage = lazy(() => import('./components/OurServices/Tiic.jsx'));
const EammuStore = lazy(() => import('./components/EammuGroupWebsites/EammuFashion/OurProduct/EammuStore.jsx'));
const EammuSocialResponsibility = lazy(() => import('./components/EammuSocialResponsibility/EammuSocialResponsibility.jsx'));

// =================== ROUTER SETUP ===================
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot />,
    errorElement: <ErrorPage />,
    children: [

      // ===== MAIN =====
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/blogs", element: <Blogs /> },

      // ===== SERVICES =====
      { path: "/our-services", element: <OurServices /> },
      { path: "/visa-services", element: <VisaServices /> },
      { path: "/air-tickets", element: <AirTickets /> },
      { path: "/tour-packages", element: <TourPackages /> },
      { path: "/offers", element: <Offer /> },
      { path: "/activities", element: <ActivitiesPage /> },


      // ===== IMMIGRATION =====
      { path: "/immigration-services", element: <EammuImmigrationServices /> },
      { path: "/usa-visa-interview-prep", element: <TargetUsaInterview /> },

      // ===== GROUP SITES =====
      { path: "/eammufashion", element: <EammuFashion /> },
      { path: "/eammumarketing", element: <EammuItMarketing /> },
      { path: "/eammuevent", element: <EammuEvent /> },
      { path: "/eammudairy", element: <EammuDairy /> },
      { path: "/eammutextile", element: <EammuTextile /> },
      { path: "/flyzoo", element: <FlyZoo /> },

      // ===== TRUST / LINKS =====
      { path: "/newsfeeds", element: <EammuNewsfeeds /> },
      { path: "/careers", element: <Careers /> },
      { path: "/testimonials", element: <Testimonials /> },
      { path: "/why-choose-eammu", element: <WhyChoiceEammu /> },
      { path: "/message-from-leadership", element: <MessageFromLeadingTeam /> },
      { path: "/terms-and-conditions", element: <EammuTerms /> },

      // ===== AUTH =====
      { path: "/signup", element: <SignUp /> },
      { path: "/login", element: <LogIn /> },

      // ===== CEO =====
      { path: "/naeem-hossen", element: <NaeemHossen /> },

      // ===== COUNTRY PAGES =====
      { path: "/travel-agency-bangladesh", element: <TravelAgencyBangladesh /> },
      { path: "/travel-agency-dubai", element: <TravelAgencyDubai /> },
      { path: "/travel-agency-armenia", element: <TravelAgencyArmenia /> },
      { path: "/travel-agency-georgia", element: <TravelAgencyGeorgia /> },

      // ===== VISA PAGES =====
      { path: "/visa-services/usa-visa-application", element: <UsaVisa /> },
      { path: "/visa-services/uk-visa-application", element: <UkVisa /> },
      { path: "/visa-services/europe-visa-application", element: <EuropeVisa /> },
      { path: "/visa-services/canada-visa-application", element: <CanadaVisa /> },
      { path: "/visa-services/australia-visa-application", element: <AustraliaVisa /> },
      { path: "/visa-services/germany-visa-application", element: <GermanyVisa /> },
      { path: "/visa-services/portugal-visa-application", element: <PortugalVisa /> },
      { path: "/visa-services/armenia-visa-application", element: <ArmeniaVisa /> },
      { path: "/visa-services/georgia-visa-application", element: <GeorgiaVisa /> },
      { path: "/visa-services/albania-visa-application", element: <AlbaniaVisa /> },
      { path: "/visa-services/dubai-visa-application", element: <DubaiVisa /> },
      { path: "/visa-services/qatar-visa-application", element: <QatarVisa /> },
      { path: "/visa-services/japan-visa-application", element: <JapanVisa /> },
      { path: "/visa-services/china-visa-application", element: <ChinaVisa /> },
      { path: "/visa-services/south-korea-visa-application", element: <SouthKoreaVisa /> },
      { path: "/visa-services/spain-visa-application", element: <SpainVisa /> },
      { path: "/visa-services/kosovo-visa-application", element: <KosovoVisa /> },
      { path: "/visa-services/serbia-visa-application", element: <SerbiaVisa /> },
      { path: "/visa-services/thailand-visa-application", element: <ThailandVisa /> },
      { path: "/visa-services/singapore-visa-application", element: <SingaporeVisa />},
      { path: "/visa-services/malaysia-visa-application", element: <MalaysiaVisa /> },
      { path: "/visa-services/turkey-visa-application", element: <TurkeyVisa /> },
      { path: "/visa-services/indonesia-visa-application", element: <IndonesiaVisa /> },
      { path: "/visa-services/india-visa-application", element: <IndiaVisa /> },
      { path: "/visa-services/saudi-arabia-visa-application", element: <SaudiVisa /> },
      { path: "/visa-services/morocco-visa-application", element: <MoroccoVisa /> },
      { path: "/visa-services/brazil-visa-application", element: <BrazilVisa /> },
      { path: "/visa-services/south-africa-visa-application", element: <SouthAfricaVisa /> },
      { path: "/visa-services/azerbaijan-visa-application", element: <AzerbaijanVisa /> },
      { path: "/visa-services/cyprus-visa-application", element: <CyprusVisa /> },
      { path: "/visa-services/srilanka-visa-application", element: <SriLankaVisa /> },
      { path: "/visa-services/russia-visa-application", element: <RussiaVisa /> },
      { path: "/visa-services/montenegro-visa-application", element: <MontenegroVisa /> },
      

      // ===== VISA CATEGORIES =====
      { path: "/visa-services/tourist-visa-application-from-bangladesh", element: <TouristVisaBangladesh /> },
      { path: "/visa-services/student-visa-application-from-bangladesh", element: <StudentVisaBangladesh /> },
      { path: "/visa-services/work-visa-application-from-bangladesh", element: <WorkVisaBangladesh /> },

      // ===== TIIC & STORE =====
      { path: "/target-ielts-and-immigration-center", element: <TIICPage /> },
      { path: "/eammu-store", element: <EammuStore /> },
      { path: "/eammu-social-responsibility", element: <EammuSocialResponsibility /> },

      // ===== OLD URL REDIRECTS =====
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
    ]
  }
]);

// =================== RENDER ===================
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Suspense fallback={  <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <div className="text-center py-10 flex flex-col items-center justify-center gap-4">
    <div className="relative h-28 w-28">
      {/* Outer spinning ring for extra effect (Optional) */}
      <div className="absolute inset-0 animate-spin rounded-full border-t-2 border-b-2 border-[#fd8403]"></div>
      
      {/* Your Animated Logo */}
      <img 
        src="/eammu_holidays_logo.webp" 
        alt="Loading..." 
        className="h-full w-full object-contain animate-pulse px-2" 
      />
    </div>
    <p className="text-[#005a31] font-bold text-lg animate-bounce">
      Welcome To Eammu ...
    </p>
  </div>
  </div>}>
        <RouterProvider router={router} />
      </Suspense>
    </HelmetProvider>
  </React.StrictMode>
);
