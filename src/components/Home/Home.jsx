import { Helmet } from "react-helmet-async";
import Caresoul_BG_Mix from "./Caresoul_BG_Mix";
import EammuImmigrationHeading_2 from "./EammuImmigrationHeading_2";
import MessageFromLeadingTeam from "./MessageFromLeadingTeam";
import Our_Succsses_State from "./Our_Succsses_State";
import Registration_Agents from "./Registration_Agents";
import TargetUsaSection from "./TargetUsaSection";
import WhyChoiceEammu from "./WhyChoiceEammu";
import VisaPhotoGallery from "./VisaPhotoGallery";
import HeroSection from "../HeroSection/HeroSection";
import TravelServices from "../TravelServices/TravelServices";

const Home = () => {
  // ✅ Structured Data (Google-compliant JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://eammu.com/#organization",
        "name": "Eammu Holidays",
        "url": "https://eammu.com",
        "logo": "https://eammu.com/emf.jpg",
        "image": "https://eammu.com/eammuicon.jpg",
        "telephone": "+8801631312524",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Gomoti Tower, Cantonment",
          "addressLocality": "Cumilla",
          "postalCode": "3500",
          "addressCountry": "Bangladesh"
        },
        "areaServed": [
          "Bangladesh",
          "United Arab Emirates",
          "Armenia",
          "Georgia"
        ],
        "sameAs": [
          "https://facebook.com/eammutourism/",
          "https://instagram.com/eammuholidays",
          "https://www.youtube.com/@Eammutour",
          "https://linkedin.com/company/eammu-immigration-services/"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://eammu.com/#website",
        "url": "https://eammu.com/",
        "name": "Eammu Holidays",
        "publisher": { "@id": "https://eammu.com/#organization" }
      }
    ]
  };

  return (
    <div>
      <Helmet>
        {/* ================= SEO ================= */}
        <title>
          online Visa Support Bangladesh | First travel agency in Bangladesh
        </title>

        <meta
          name="description"
          content="Eammu Holidays is the first and one of the leading online travel agency in Bangladesh, established in 2012 with a fully functional digital info structure. We are providing expert visa support for USA, UK, Canada & Europe. Trusted travel agency in Bangladesh & Dubai."
        />
        
        <meta name="keywords" content="Travel Agency Bangladesh, Visa Consultant Dubai, Student Visa Experts, Work Permit Visa, USA Visa Help, Eammu Holidays" />
        <link rel="canonical" href="https://eammu.com/" />
        <meta name="robots" content="index, follow" />

        {/* ================= Open Graph ================= */}
        <meta
          property="og:title"
          content="Eammu Holidays | Trusted Visa, Travel & Immigration Experts Worldwide"
        />
        <meta
          property="og:description"
          content="Trusted visa, travel and immigration services worldwide. Student visa, tourist visa, work permits and Europe Schengen support from Bangladesh and Dubai."
        />
        <meta property="og:url" content="https://eammu.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://eammu.com/eammuicon.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* ================= Twitter ================= */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Eammu Holidays | Trusted Visa, Travel & Immigration Experts Worldwide"
        />
        <meta
          name="twitter:description"
          content="Trusted visa, travel and immigration services worldwide. Student visa, tourist visa, work permits and Europe Schengen support from Bangladesh and Dubai."
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
      {/* Hero Carousel */}
      <HeroSection />
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
    </div>
  );
};

export default Home;