import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { 
  FaPassport, FaCheckCircle, FaFileAlt, 
  FaGlobeAmericas, FaClock, FaHeadset,
  FaArrowRight, FaMapMarkerAlt
} from "react-icons/fa";

const TouristVisaBangladesh = () => {
  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const steps = [
    { title: "Consultation", desc: "Expert profile assessment for visa success." },
    { title: "Documentation", desc: "Detailed checklist and file organization." },
    { title: "Submission", desc: "error-free application and slot booking." },
    { title: "Visa Approval", desc: "Receive your passport with a valid visa." }
  ];

  return (
    <div className="bg-[#fcfcfc] min-h-screen font-sans">
      <Helmet>
  {/* Primary SEO */}
  <title>Tourist Visa from Bangladesh | Best Visa Agency Dhaka & Cumilla – Eammu Holidays</title>
  <meta
    name="description"
    content="Apply for a tourist visa from Bangladesh to USA, UK, Canada, Australia, and Schengen countries. Eammu Holidays provides expert documentation support, consultation, and high visa approval rates."
  />
  <meta
    name="keywords"
    content="tourist visa Bangladesh, USA tourist visa Dhaka, UK tourist visa Bangladesh, Canada visitor visa, Schengen visa Bangladesh, Eammu Holidays visa agency, travel agency Bangladesh"
  />
  <link rel="canonical" href="https://eammu.com/tourist-visa-application-from-bangladesh" />

  {/* Open Graph / Social SEO */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Tourist Visa from Bangladesh | Eammu Holidays" />
  <meta
    property="og:description"
    content="Eammu Holidays helps Bangladeshi travelers get tourist visas for USA, UK, Canada, Australia, and Europe with hassle-free documentation and expert consultation."
  />
  <meta property="og:url" content="https://eammu.com/tourist-visa-application-from-bangladesh" />
  <meta property="og:site_name" content="Eammu Holidays" />
  <meta property="og:image" content="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Tourist Visa from Bangladesh | Eammu Holidays" />
  <meta
    name="twitter:description"
    content="Get tourist visas to USA, UK, Canada, Australia, and Schengen countries from Bangladesh with Eammu Holidays. Expert guidance, high approval rates."
  />
  <meta name="twitter:image" content="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" />

  {/* Local SEO */}
  <meta name="geo.region" content="BD" />
  <meta name="geo.placename" content="Cumilla, Bangladesh" />
  <meta name="geo.position" content="23.4607;91.1809" />
  <meta name="ICBM" content="23.4607,91.1809" />

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "TravelAgency",
      "name": "Eammu Holidays",
      "url": "https://eammu.com",
      "logo": "https://eammu.com/images/logo.png",
      "description": "Eammu Holidays provides expert tourist visa services from Bangladesh to USA, UK, Canada, Australia, and Schengen countries. Comprehensive guidance for documentation, invitation letters, and visa approval.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Gomoti Tower, 1st Floor, Cantonment",
        "addressLocality": "Cumilla",
        "addressCountry": "BD"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+8801631312524",
          "contactType": "customer service",
          "areaServed": "BD",
          "email": "info@eammu.com"
        },
        {
          "@type": "ContactPoint",
          "telephone": "+971507078334",
          "contactType": "customer service",
          "areaServed": "UAE",
          "email": "dubai@eammu.com"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/eammu",
        "https://www.instagram.com/eammu",
        "https://www.linkedin.com/company/eammu",
        "https://www.youtube.com/@eammu"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Tourist Visa Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "USA Tourist Visa",
              "description": "B1/B2 visa consultation and documentation support."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "UK Tourist Visa",
              "description": "Visitor visa assistance and guidance for UK travel."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Canada Tourist Visa",
              "description": "High approval rate visitor visa service for Canada."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Schengen Visa",
              "description": "Single visa access to 27 European countries."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Australia Tourist Visa",
              "description": "Assistance with Subclass 600 tourist visa applications."
            }
          }
        ]
      }
    })}
  </script>
</Helmet>


      {/* 🚀 Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="World Travel Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#005a31]/90 to-[#005a31]/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.span 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block"
          >
            Explore the World with Ease
          </motion.span>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-7xl font-black mb-6 tracking-tight leading-tight"
          >
            Tourist Visa <br /> <span className="text-orange-400 italic">Solutions for Bangladeshis</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center gap-4"
          >
            <a href="https://wa.me/8801631312524" className="bg-white text-[#005a31] px-8 py-3 rounded-xl font-bold hover:bg-orange-500 hover:text-white transition-all shadow-xl">
              Start Application
            </a>
          </motion.div>
        </div>
      </section>

      {/* 🌍 Content & SEO Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-black text-[#005a31] mb-8 leading-tight">
              Get Your Tourist Visa <br /> <span className="text-orange-500 underline decoration-2">Hassle-Free</span>
            </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
  At Eammu Holidays, we specialize in processing tourist visas for individual travelers and families. 
  Whether you are planning a holiday in the{" "}
  <strong>
    <a href="/usa-visa-application" className="bg-yellow-400 text-black px-2 py-0.5 rounded mr-1 hover:bg-orange-500 hover:text-white transition">
      USA
    </a>,{" "}
    <a href="/uk-visa-application" className="bg-yellow-400 text-black px-2 py-0.5 rounded mr-1 hover:bg-orange-500 hover:text-white transition">
      UK
    </a>,{" "}
    <a href="/canada-visa-application" className="bg-yellow-400 text-black px-2 py-0.5 rounded mr-1 hover:bg-orange-500 hover:text-white transition">
      Canada
    </a>,{" "}
    <a href="/australia-visa-application" className="bg-yellow-400 text-black px-2 py-0.5 rounded mr-1 hover:bg-orange-500 hover:text-white transition">
      Australia
    </a>
  </strong>
  , or the{" "}
  <strong>
    <a href="/spain-visa-application" className="bg-yellow-400 text-black px-2 py-0.5 rounded hover:bg-orange-500 hover:text-white transition">
      Schengen Zone
    </a>
  </strong>, 
  our dedicated team ensures your documentation is perfect to maximize approval chances.
</p>

            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <FaCheckCircle className="text-green-500 text-xl" />
                <span className="font-bold text-gray-700">Detailed Document Checklist per Embassy</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <FaCheckCircle className="text-green-500 text-xl" />
                <span className="font-bold text-gray-700">Invitation Letter & Cover Letter Support</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <FaCheckCircle className="text-green-500 text-xl" />
                <span className="font-bold text-gray-700">Flight & Hotel Reservation for Visa</span>
              </div>
            </div>
          </motion.div>

          {/* Feature Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            <FeatureBox icon={<FaPassport />} title="USA B1/B2" desc="Expert guidance for 5-10 year multi-entry visas." color="bg-blue-50 text-blue-600" />
            <FeatureBox icon={<FaGlobeAmericas />} title="Schengen" desc="Access 27 European countries with one visa." color="bg-yellow-50 text-yellow-600" />
            <FeatureBox icon={<FaFileAlt />} title="Canada" desc="Visitor visa processing with high success rates." color="bg-red-50 text-red-600" />
            <FeatureBox icon={<FaSuitcase />} title="Asia Tours" desc="Sticker & E-visas for Thailand, Vietnam, & Dubai." color="bg-green-50 text-green-600" />
          </div>

        </div>
      </section>

      {/* 📊 Process Timeline Animation */}
      <section className="py-24 bg-[#005a31] rounded-[4rem] mx-4 mb-20 text-white overflow-hidden">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16 italic uppercase tracking-tighter">Our 4-Step Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="relative text-center p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm"
              >
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center font-black mx-auto mb-4">
                  {idx + 1}
                </div>
                <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                <p className="text-sm text-green-100/70 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 📑 Local SEO Location Data */}
      <section className="py-24 container mx-auto px-4 border-t border-slate-100">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h3 className="text-3xl font-black text-[#005a31] mb-4">Visit Our Main Office</h3>
            <p className="text-gray-600 mb-6">If you are looking for the <strong>Best Tourist Visa Agency in Dhaka or Cumilla</strong>, Eammu Holidays is your one-stop destination.</p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3"><FaMapMarkerAlt className="text-orange-500" /> Gomoti Tower, Cantonment, Cumilla</li>
              <li className="flex items-center gap-3"><FaClock className="text-orange-500" /> Mon - Sat: 10:00 AM - 7:00 PM</li>
              <li className="flex items-center gap-3"><FaHeadset className="text-orange-500" /> 24/7 Dedicated Visa Advisor</li>
            </ul>
          </div>
          <div className="flex-1 w-full bg-slate-200 h-64 rounded-[3rem] shadow-inner flex items-center justify-center text-slate-400 font-black italic">
             Local Map / Location Data
          </div>
        </div>
      </section>

      {/* 🏠 Footer CTA */}
      <footer className="py-20 text-center border-t border-slate-50">
        <motion.div whileHover={{ scale: 1.05 }}>
           <a href="https://wa.me/8801631312524" className="inline-flex items-center gap-3 bg-[#005a31] text-white px-12 py-5 rounded-2xl font-black shadow-2xl hover:bg-orange-500 transition-all">
             GET FREE VISA ASSESSMENT <FaArrowRight />
           </a>
        </motion.div>
      </footer>
    </div>
  );
};

// Sub-component for Service Features
const FeatureBox = ({ icon, title, desc, color }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-[2.5rem] shadow-lg shadow-slate-200/50 border border-slate-50 flex flex-col items-center text-center group"
  >
    <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center text-2xl mb-6 transition-all duration-500 group-hover:scale-110`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-3 uppercase tracking-tighter">{title}</h3>
    <p className="text-xs text-gray-500 leading-relaxed font-medium">{desc}</p>
  </motion.div>
);

const FaSuitcase = () => <FaPassport />; // Fallback icon

export default TouristVisaBangladesh;