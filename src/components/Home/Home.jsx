import { Helmet } from "react-helmet-async";
import { lazy, Suspense } from "react";

import HeroSection from "../HeroSection/HeroSection"; // LCP element (not lazy)

/* ================= Lazy Load Components ================= */

const Caresoul_BG_Mix = lazy(() => import("./Caresoul_BG_Mix"));
const EammuImmigrationHeading_2 = lazy(() => import("./EammuImmigrationHeading_2"));
const Our_Succsses_State = lazy(() => import("./Our_Succsses_State"));
const WhyChoiceEammu = lazy(() => import("./WhyChoiceEammu"));
const VisaPhotoGallery = lazy(() => import("./VisaPhotoGallery"));
const TravelServices = lazy(() => import("../TravelServices/TravelServices"));
const LandingModal = lazy(() => import("../LandingModal/LandingModal"));
const SpecialDayBanner = lazy(() => import("../SpecialDay/SpecialDay"));

const Home = () => {


// ✅ Advanced Structured Data (Homepage Optimized)
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TravelAgency",
      "@id": "https://eammu.com/#travelagency",
      "name": "Eammu Holidays Travel Agency Bangladesh",
      "url": "https://eammu.com/",
      "logo": "https://eammu.com/emf.jpg",
      "image": "https://eammu.com/eammuicon.jpg",
      "description": "Eammu Holidays is a leading online travel agency in Bangladesh providing visa consultancy, work permits, student visas, air tickets and international tour packages.",
      "telephone": "+8801631312524",
      "email": "info@eammu.com",
      "foundingDate": "2012",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Gomoti Tower, Cantonment",
        "addressLocality": "Cumilla",
        "postalCode": "3500",
        "addressCountry": "BD"
      },
      "areaServed": [
        {
          "@type": "Country",
          "name": "Bangladesh"
        },
        {
          "@type": "Country",
          "name": "United Arab Emirates"
        },
        {
          "@type": "Country",
          "name": "Armenia"
        },
        {
          "@type": "Country",
          "name": "Georgia"
        }
      ],
      "sameAs": [
        "https://facebook.com/eammutourism/",
        "https://instagram.com/eammuholidays",
        "https://www.youtube.com/@Eammutour",
        "https://linkedin.com/company/eammu-immigration-services/"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+8801631312524",
        "contactType": "customer support",
        "areaServed": "Worldwide",
        "availableLanguage": ["English", "Bengali"]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://eammu.com/#website",
      "url": "https://eammu.com/",
      "name": "Eammu Holidays",
      "publisher": {
        "@id": "https://eammu.com/#travelagency"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://eammu.com/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ]
};


  return (
    <div>

     <Helmet>

  {/* ================= PRIMARY SEO ================= */}

  <title>
  Premium Travel Agency Bangladesh | Online Travel Agency Bangladesh | Tour operator in Bangladesh - Dhaka
  </title>

  <meta
    name="description"
    content="Eammu Holidays is a leading online travel agency in Bangladesh providing visa consultancy, work permits, student visas, air tickets and international tour packages. Trusted travel experts serving Bangladesh, UAE and worldwide clients.Trusted Education Consultancy in Bangladesh , We are Helps Student to Study abraod from Bangladesh. We are the best travel agency in Bangladesh. We are the best travel agency in Dhaka, Cumilla, Chittagong, Sylhet, Khulna, Barishal, Rajshahi, Rangpur and all over Bangladesh."
  />

  <meta name="robots" content="index, follow" />

  <link rel="canonical" href="https://eammu.com/" />

  {/* ================= Open Graph ================= */}

  <meta
    property="og:title"
    content="Eammu Holidays Travel Agency In Bangladesh | Trusted Education Consultancy in Bangladesh"
  />

  <meta
    property="og:description"
    content="Professional visa consultancy, immigration support, air ticket booking and tour packages. Serving clients from Bangladesh, UAE and beyond."
  />

  <meta property="og:url" content="https://eammu.com/" />

  <meta property="og:type" content="website" />

  <meta property="og:image" content="https://eammu.com/eammuicon.jpg" />

  <meta property="og:image:width" content="1200" />

  <meta property="og:image:height" content="630" />


  {/* ================= Twitter ================= */}

  <meta name="twitter:card" content="summary_large_image" />

  <meta
    name="twitter:title"
    content="Eammu Holidays | Travel Agency Bangladesh | Visa Consultancy Bangladesh"
  />

  <meta
    name="twitter:description"
    content="Online travel agency in Bangladesh offering visa processing, immigration support, work permits and air ticket booking worldwide."
  />

  <meta
    name="twitter:image"
    content="https://eammu.com/eammuicon.jpg"
  />


  {/* ================= Structured Data ================= */}

  <script type="application/ld+json">
    {JSON.stringify(structuredData)}
  </script>

</Helmet>


{/* ================= PAGE SECTIONS ================= */}

<Suspense>

      <LandingModal />

      {/* Hero Carousel */}
      <HeroSection />

      <SpecialDayBanner />

      {/* Travel Services */}
      <TravelServices />

      {/* Visa Poster Gallery */}
      <VisaPhotoGallery />

      {/* Immigration Services Heading */}
      <EammuImmigrationHeading_2 />

      {/* Why Choose Us */}
      <WhyChoiceEammu />

      {/* Background Carousel */}
      <Caresoul_BG_Mix />

      {/* Success Statistics */}
      <Our_Succsses_State />

</Suspense>

    </div>
  );
};

export default Home;