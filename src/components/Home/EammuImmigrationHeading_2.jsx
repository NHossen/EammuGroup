import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { GraduationCap, Plane, ShieldCheck, Ticket, ChevronRight } from "lucide-react";

const EammuImmigrationHeading_2 = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* SEO Helmet (Unchanged as requested) */}
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

      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-50"></div>

      <div className="px-4 py-16 md:py-16 container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-xs font-bold uppercase tracking-widest border border-orange-100">
              <ShieldCheck size={14} /> Trusted Since 2022
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-black text-[#005a31] leading-[1.1] tracking-tight">
                Expert <span className="text-orange-500">Immigration</span> & Study Abroad Services
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
                Premier Agency in <span className="border-b-2 border-orange-400">Dubai</span>, Armenia & Bangladesh
              </h2>
            </div>

            {/* Features/Services List */}
            <div className="grid grid-cols-1 gap-6 py-4">
              <ServiceFeature 
                icon={<GraduationCap className="text-white" />} 
                title="Global Study Abroad" 
                desc="Expert guidance to top universities with scholarships and financial aid support." 
              />
              <ServiceFeature 
                icon={<Plane className="text-white" />} 
                title="Visa Assistance" 
                desc="Seamless processing for Student, Work, and Tourist visas worldwide." 
              />
              <ServiceFeature 
                icon={<Ticket className="text-white" />} 
                title="Cheapest Air Tickets" 
                desc="Guaranteed lowest flight fares for individual and group travel." 
              />
            </div>

            <p className="text-gray-600 leading-relaxed border-l-4 border-[#005a31] pl-4 italic">
              "Whether you plan to study abroad, migrate, or travel, Eammu is your trusted partner turning goals into global opportunities."
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/eammuimmigrationservices">
                <button className="flex items-center gap-2 bg-[#005a31] text-white px-8 py-4 rounded-2xl font-bold hover:bg-orange-500 transition-all shadow-xl shadow-green-900/10 active:scale-95">
                  Explore More <ChevronRight size={18} />
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-8 py-4 rounded-2xl font-bold text-[#005a31] border-2 border-[#005a31] hover:bg-green-50 transition-all">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="w-full lg:w-1/2 relative group">
            {/* Image Overlay/Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-2xl z-20 hidden md:block border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  ✓
                </div>
                <div>
                  <p className="text-sm font-black text-[#005a31]">98% SUCCESS</p>
                  <p className="text-xs text-gray-500 font-medium">Visa Rate History</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-[#005a31]/20 to-transparent pointer-events-none"></div>
              <img
                src="https://www.usasean.org/sites/default/files/2023-09/AdobeStock_633483820.jpeg"
                alt="Eammu Immigration Banner"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// Helper Component for Features
const ServiceFeature = ({ icon, title, desc }) => (
  <div className="flex items-start gap-4 group">
    <div className="flex-shrink-0 w-12 h-12 bg-[#005a31] rounded-xl flex items-center justify-center group-hover:bg-orange-500 transition-colors shadow-lg shadow-green-900/10">
      {icon}
    </div>
    <div>
      <h3 className="font-bold text-gray-900 text-lg">{title}</h3>
      <p className="text-gray-500 text-sm leading-snug">{desc}</p>
    </div>
  </div>
);

export default EammuImmigrationHeading_2;