import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { HelmetProvider } from 'react-helmet-async'; // ✅ Add this

// Page Imports
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import MainRoot from './components/MainRoot/MainRoot.jsx';
import Home from './components/Home/Home.jsx';
import ErrorPage from './components/Errorpage/ErrorPage.jsx';
import OurServices from './components/OurServices/OurServices.jsx';
import EammuImmigrationServices from './components/EammuGroupWebsites/EammuImmigrationServices/EammuImmigrationServices.jsx';
import EammuFashion from './components/EammuGroupWebsites/EammuFashion/EammuFashion.jsx';
import TargetUsaInterview from './components/EammuGroupWebsites/EammuImmigrationServices/TargetUsaInterview/TargetUsaInterview.jsx';
import EammuNewsfeeds from './components/EammuUsefulLinks/EammuNewsfeeds/EammuNewsfeeds.jsx';
import EammuCareers from './components/EammuUsefulLinks/EammuCareers/EammuCareers.jsx';
import SignUp from './components/SignupLogin/SignUp/SignUp.jsx';
import LogIn from './components/SignupLogin/LogIn/LogIn.jsx';
import Details_More from './components/Home/Services_Card_Section/Student_visa/Details_More.jsx';
import VisaServices from './components/OurServices/VisaServices.jsx';

// Routing Setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/ourServices', element: <OurServices /> },
      { path: '/visaservices', element: <VisaServices /> },
      { path: '/contact', element: <Contact /> },
      { path: '/eammuimmigrationservices', element: <EammuImmigrationServices /> },
      { path: '/university_details/:id', element: <Details_More /> },

      // Sub-services
      { path: '/targetusavisainterview', element: <TargetUsaInterview /> },
      { path: '/eammufashion', element: <EammuFashion /> },

      // Useful Links
      { path: '/eammunewsfeeds', element: <EammuNewsfeeds /> },
      { path: '/eammucareers', element: <EammuCareers /> },

      // Auth
      { path: '/signup', element: <SignUp /> },
      { path: '/login', element: <LogIn /> },
    ],
  },
]);

// Render App
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
