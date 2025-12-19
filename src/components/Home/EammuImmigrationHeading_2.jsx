import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const EammuImmigrationHeading_2 = () => {
  return (
    <div className="px-4 py-12 container mx-auto">
      {/* SEO Helmet */}
      <Helmet>
        <title>
          Eammu Immigration Services Cumilla | Study Abroad, Visa & Cheap Air Tickets Experts
        </title>
        <meta
          name="description"
          content="Eammu Immigration Services in Cumilla, Bangladesh provides expert study abroad guidance, student, tourist & work visa support, and the cheapest air tickets worldwide. Trusted consultancy since 2018."
        />
        <meta
          name="keywords"
          content="Eammu Immigration Services, Study Abroad Cumilla, Visa Consultancy Bangladesh, Student Visa, Work Visa, Tourist Visa, Cheap Air Tickets, Flight Booking, Travel Agency"
        />
        <meta name="robots" content="index, follow" />

        {/* Structured Data for LocalBusiness/TravelAgency */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": ["LocalBusiness","TravelAgency"],
            "name": "Eammu Immigration Services",
            "url": "https://eammu.com/eammuimmigrationservices",
            "logo": "https://eammu.com/images/eammu-home-banner.jpg",
            "description": "Study abroad consultancy, visa assistance, and cheapest air tickets in Cumilla, Bangladesh.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Nakheel Center, Deira",
              "addressLocality": "Cumilla",
              "addressRegion": "Bangladesh",
              "postalCode": "0000",
              "addressCountry": "BD"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+880123456789",
              "contactType": "Customer Service",
              "availableLanguage": ["English", "Bengali"]
            },
            "areaServed": [
              { "@type": "Country", "name": "Bangladesh" },
              { "@type": "Country", "name": "United Arab Emirates" },
              { "@type": "Country", "name": "India" },
              { "@type": "Country", "name": "Armenia" }
            ]
          }
          `}
        </script>
      </Helmet>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold text-[#005a31] mb-4">
            Expert Student, Tourist & Work Visa Services by Eammu
          </h1>
          <h2 className="text-lg md:text-xl font-medium text-gray-800 mb-6">
            Premier Study Abroad Agency Dubai , Armenia And Bangladesh | Excellence in Education & Travel Consultancy
          </h2>

          <p className="text-base text-gray-700 leading-relaxed mb-6">
            <strong>Study Abroad:</strong> Guidance to top global universities with scholarships and financial aid.  
            <br /><br />
            <strong>Visa Services:</strong> Complete support for <Link to="/visa-services" className="text-[#005a31] underline">student visas</Link>, <Link to="/visa-services" className="text-[#005a31] underline">work visas</Link>, and <Link to="/visa-services" className="text-[#005a31] underline">tourist visas</Link>.  
            <br /><br />
            <strong>Air Tickets:</strong> Book the <Link to="/air-tickets" className="text-[#005a31] underline">cheapest flights</Link> worldwide for individuals or group travel.  
            <br /><br />
            Whether you plan to study abroad, migrate, or travel, Eammu is your trusted partner turning goals into global opportunities.
          </p>

          <Link to="/eammuimmigrationservices">
            <button className="btn bg-white text-[#005a31] border border-[#005a31] hover:bg-[#005a31] hover:text-white transition">
              Explore More
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://www.usasean.org/sites/default/files/2023-09/AdobeStock_633483820.jpeg"
            alt="Eammu Immigration Banner"
            className="w-full rounded-lg shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default EammuImmigrationHeading_2;
