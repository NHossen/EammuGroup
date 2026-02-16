import { Helmet } from "react-helmet-async";
import Caresoul_BG_Mix from "./Caresoul_BG_Mix";
import EammuImmigrationHeading_2 from "./EammuImmigrationHeading_2";
import MessageFromLeadingTeam from "./MessageFromLeadingTeam";
import Our_Succsses_State from "./Our_Succsses_State";
import Registration_Agents from "./Registration_Agents";
import TargetUsaSection from "./TargetUsaSection";
import WhyChoiceEammu from "./WhyChoiceEammu";
import Carousel from "../Carousel/Carousel";
import VisaPhotoGallery from "./VisaPhotoGallery";

const Home = () => {
  // Structured Data (JSON-LD) - এটি গুগলের প্রথম পেজে আসার জন্য সবচেয়ে জরুরি
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "@id": "https://eammu.com/#organization",
        "name": "Eammu Holidays",
        "url": "https://eammu.com",
        "logo": "https://eammu.com/emf.jpg",
        "image": "https://eammu.com/eammuicon.jpg",
        "telephone": "+8801631312524",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Gomoti Tower, Cantonment",
          "addressLocality": "Cumilla",
          "postalCode": "3500",
          "addressCountry": "BD"
        },
        "areaServed": ["BD", "AE", "AM", "GE"],
        "sameAs": [
          "https://facebook.com/eammutourism/",
          "https://instagram.com/eammuholidays",
          "https://www.youtube.com/@Eammutour"
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
        {/* প্রধান টাইটেল - কি-ওয়ার্ড দিয়ে অপ্টিমাইজড */}
        <title>Best Travel Agency in Bangladesh & Dubai | Eammu Holidays</title>

        {/* মেটা বিবরণ - কাস্টমারকে আকর্ষণ করার জন্য */}
        <meta
          name="description"
          content="Eammu Holidays: Trusted travel agency in Bangladesh & Dubai. Specialized in Student, Tourist, and Work Visas for USA, Canada, UK, and Europe. Apply with experts!"
        />
        
        <meta name="keywords" content="Travel Agency Bangladesh, Visa Consultant Dubai, Student Visa Experts, Work Permit Visa, USA Visa Help, Eammu Holidays" />
        <link rel="canonical" href="https://eammu.com/" />
        <meta name="robots" content="index, follow" />

        {/* Social Preview (WhatsApp, Messenger, Facebook) */}
        <meta property="og:title" content="Eammu Holidays | first onlinetravel agency in Bangladesh" />
        <meta property="og:description" content="first onlinetravel agency in Bangladesh, Expert visa support for USA, UK, Canada & Europe. Trusted travel agency in Bangladesh & Dubai." />
        <meta property="og:url" content="https://eammu.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://eammu.com/eammuicon.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Structured Data Injection */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Hero Carousel */}
      <Carousel />

      {/* Immigration Services Heading */}
      <EammuImmigrationHeading_2 />

      {/* Agent Registration */}
      <Registration_Agents />

      {/* USA Visa Interview Help */}
      <TargetUsaSection />

      {/* Visa Poster Gallery */}
      <VisaPhotoGallery />

      {/* Leadership Message */}
      <MessageFromLeadingTeam />

      {/* Why Choose Us */}
      <WhyChoiceEammu />

      {/* Background Carousel */}
      <Caresoul_BG_Mix />

      {/* Success States */}
      <Our_Succsses_State />
    </div>
  );
};

export default Home;