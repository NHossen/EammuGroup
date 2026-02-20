import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";
import { 
  FaPassport, FaCheckCircle, FaFileAlt, 
  FaGlobeAmericas, FaClock, FaHeadset,
  FaArrowRight, FaMapMarkerAlt, FaSuitcase,
  FaUserShield, FaHandHoldingHeart, FaPlaneDeparture
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
    { title: "Submission", desc: "Error-free application and slot booking." },
    { title: "Visa Approval", desc: "Receive your passport with a valid visa." }
  ];

  return (
    <HelmetProvider>
    <div className="bg-[#fcfcfc] min-h-screen font-sans overflow-x-hidden">
      <Helmet>
        {/* Primary SEO */}
        <title>Tourist Visa Application from Bangladesh | Best Travel Agency Dhaka & Cumilla – Eammu Holidays</title>
        <meta name="description" content="Apply for a tourist visa from Bangladesh to USA, UK, Canada, Australia, and Schengen countries. Eammu Holidays provides expert documentation support, consultation, and high visa approval rates." />
        <meta name="keywords" content="tourist visa Application Bangladesh, USA tourist visa Dhaka, UK tourist Application visa Bangladesh, Canada visitor visa Application, Schengen visa Application Bangladesh, Eammu Holidays visa agency, travel agency Bangladesh" />
        <link rel="canonical" href="https://eammu.com/tourist-visa-application-from-bangladesh" />

        {/* Social SEO */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tourist Visa from Bangladesh | Eammu Holidays" />
        <meta property="og:description" content="Eammu Holidays helps Bangladeshi travelers get tourist visas for USA, UK, Canada, Australia, and Europe." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            "name": "Eammu Holidays",
            "url": "https://eammu.com",
            "logo": "https://eammu.com/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Gomoti Tower, 1st Floor, Cantonment",
              "addressLocality": "Cumilla",
              "addressCountry": "BD"
            },
            "contactPoint": [
              { "@type": "ContactPoint", "telephone": "+8801631312524", "contactType": "customer service" }
            ]
          })}
        </script>
      </Helmet>

      {/* 🚀 Hero Section - Mobile Optimized */}
      <section className="relative min-h-[85vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="World Travel Background" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-tr from-[#005a31] via-[#005a31]/80 to-black/20"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-10 items-center pt-20 pb-12 md:py-0">
          <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="text-center md:text-left">
            <span className="bg-orange-500 text-white px-4 py-1.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest mb-6 inline-block shadow-lg">
              Authorized Visa Consultant
            </span>
            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1]">
              Tourist Visa <br /> 
              <span className="text-orange-400 drop-shadow-md">Solutions for Bangladeshis</span>
            </h1>
            <p className="text-white/90 max-w-xl mb-10 leading-relaxed text-base md:text-lg font-medium">
              Apply for your <strong>tourist visa from Bangladesh</strong> with the country's most reliable agency. 
              Personalized support for <strong>USA, UK, Canada, Australia, and Asia</strong>.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a href="https://wa.me/8801631312524" className="bg-white text-[#005a31] px-8 py-4 rounded-2xl font-black hover:bg-orange-500 hover:text-white transition-all shadow-2xl flex items-center justify-center gap-2 text-sm md:text-base">
                Start Application <FaArrowRight />
              </a>
              <a href="#services" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-2xl font-black hover:bg-white/20 transition-all text-sm md:text-base">
                Explore Services
              </a>
            </div>
          </motion.div>
          
          {/* Stats Grid - Hidden on very small mobile, visible on tablet+ */}
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="hidden sm:block">
             <div className="bg-white/10 backdrop-blur-xl p-6 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] border border-white/20 shadow-2xl">
                <div className="grid grid-cols-2 gap-4 md:gap-8">
                    <div className="text-center">
                        <h4 className="text-3xl md:text-5xl font-black text-orange-400">98%</h4>
                        <p className="text-white text-[10px] md:text-xs uppercase font-bold tracking-widest">Visa Approval</p>
                    </div>
                    <div className="text-center">
                        <h4 className="text-3xl md:text-5xl font-black text-orange-400">25+</h4>
                        <p className="text-white text-[10px] md:text-xs uppercase font-bold tracking-widest">Countries</p>
                    </div>
                    <div className="text-center">
                        <h4 className="text-3xl md:text-5xl font-black text-orange-400">10k+</h4>
                        <p className="text-white text-[10px] md:text-xs uppercase font-bold tracking-widest">Clients</p>
                    </div>
                    <div className="text-center">
                        <h4 className="text-3xl md:text-5xl font-black text-orange-400">24/7</h4>
                        <p className="text-white text-[10px] md:text-xs uppercase font-bold tracking-widest">Support</p>
                    </div>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 🌍 Content & Detail Section */}
      <section id="services" className="py-16 md:py-24 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-black text-[#005a31] mb-6 leading-tight">
              Best Tourist Visa Support <br className="hidden md:block" /> in <span className="text-orange-500">Dhaka & Cumilla</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
              At <strong>Eammu Holidays</strong>, we simplify the complex <strong>tourist visa application</strong> process. 
              Our specialists in Dhaka and Cumilla provide one-on-one consultation to ensure your profile matches 
              embassy expectations.
            </p>
            
            {/* Country Links Chips */}
            <div className="flex flex-wrap gap-2 md:gap-3 mb-10">
               {[
                 { name: "USA", link: "/usa-visa-application" },
                 { name: "UK", link: "/uk-visa-application" },
                 { name: "Canada", link: "/canada-visa-application" },
                 { name: "Australia", link: "/australia-visa-application" },
                 { name: "Europe", link: "/spain-visa-application" }
               ].map(country => (
                 <a key={country.name} href={country.link} className="px-4 md:px-6 py-2 bg-[#005a31]/5 border border-[#005a31]/10 rounded-xl text-[#005a31] text-xs md:text-sm font-bold hover:bg-orange-500 hover:text-white transition-all">
                    {country.name}
                 </a>
               ))}
            </div>

            <div className="space-y-4 md:space-y-6">
              {[
                "Customized checklist for all professions",
                "Professional Cover Letter support",
                "Flight & Hotel bookings for Visa",
                "Interview training for USA & Europe"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 p-4 md:p-5 bg-white rounded-2xl shadow-sm border border-slate-50">
                  <FaCheckCircle className="text-green-600 text-lg flex-shrink-0" />
                  <span className="font-bold text-gray-700 text-sm md:text-base">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 mt-10 lg:mt-0">
            <FeatureBox icon={<FaPassport />} title="USA B1/B2" desc="5-10 year multi-entry visa support." color="bg-blue-50 text-blue-600" />
            <FeatureBox icon={<FaGlobeAmericas />} title="Schengen" desc="Access 27 European countries." color="bg-orange-50 text-orange-600" />
            <FeatureBox icon={<FaFileAlt />} title="Canada V-1" desc="Professional visitor file preparation." color="bg-red-50 text-red-600" />
            <FeatureBox icon={<FaPlaneDeparture />} title="Asia Tours" desc="Express e-visas for Thailand & UAE." color="bg-green-50 text-green-600" />
          </div>
        </div>
      </section>

      {/* 📊 Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-5xl font-black text-[#005a31] uppercase tracking-tighter italic">Why Choose Us</h2>
                <div className="w-16 md:w-24 h-2 bg-orange-500 mx-auto mt-4 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
                <ReasonCard icon={<FaUserShield />} title="100% Reliable" desc="IATA certified and government registered agency." />
                <ReasonCard icon={<FaHandHoldingHeart />} title="Expert Support" desc="Analysis for complex cases and rejection recovery." />
                <ReasonCard icon={<FaClock />} title="Fast Processing" desc="Express booking and error-free documentation." />
            </div>
        </div>
      </section>

      {/* 📊 Process Timeline - Mobile Grid Update */}
      <section className="py-16 md:py-24 bg-[#005a31] rounded-[3rem] md:rounded-[5rem] mx-4 my-12 md:my-20 text-white relative shadow-2xl">
        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <h2 className="text-3xl md:text-6xl font-black text-center mb-12 md:mb-20 italic tracking-tighter uppercase">Our Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-orange-500 text-white rounded-2xl md:rounded-[2rem] flex items-center justify-center text-2xl md:text-3xl font-black mx-auto mb-6 shadow-2xl">
                  {idx + 1}
                </div>
                <h3 className="font-bold text-xl md:text-2xl mb-3 text-orange-400 uppercase">{step.title}</h3>
                <p className="text-green-100/80 text-sm font-medium">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 📑 FAQ Section */}
      <section className="py-16 md:py-24 container mx-auto px-6">
         <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-[#005a31] mb-10 text-center">Questions & Answers</h2>
            <div className="space-y-4">
                <FAQItem question="What documents are needed for a tourist visa?" answer="A valid passport, recent photos, 6 months bank statements, NOC for employees, or Trade License for business owners are essential." />
                <FAQItem question="How long is the processing time?" answer="Embassy processing usually takes 5-15 days. However, appointment slots vary by country." />
                <FAQItem question="Do you help with visa rejections?" answer="Yes, we specialize in analyzing previous rejection reasons and re-applying with a stronger profile." />
            </div>
         </div>
      </section>

      {/* 📑 Branch Info - Fully Responsive Layout */}
      <section className="py-12 md:py-24 container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 bg-white shadow-2xl rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16">
          <div className="flex-1 w-full">
            <div className="bg-orange-500 text-white px-5 py-1.5 rounded-xl text-[10px] font-black mb-6 inline-block uppercase">Official Branch</div>
            <h3 className="text-3xl md:text-4xl font-black text-[#005a31] mb-6">Visit Our Office</h3>
            <div className="space-y-6">
              <ContactInfo icon={<FaMapMarkerAlt />} text="Gomoti Tower, Cantonment, Cumilla" />
              <ContactInfo icon={<FaClock />} text="Mon - Sat: 10:00 AM - 7:00 PM" />
              <ContactInfo icon={<FaHeadset />} text="Call: +8801631312524" />
            </div>
          </div>
          <div className="flex-1 w-full bg-slate-100 h-64 md:h-96 rounded-[2rem] md:rounded-[4rem] flex items-center justify-center border-4 border-white shadow-inner">
              <span className="text-slate-400 font-black italic text-center px-10 text-sm md:text-base">Google Map Location Data Loading...</span>
          </div>
        </div>
      </section>

      {/* 🏠 Sticky Footer CTA */}
      <footer className="py-16 md:py-24 text-center bg-slate-50 px-6">
        <motion.div whileHover={{ scale: 1.02 }}>
           <h2 className="text-3xl md:text-4xl font-black text-[#005a31] mb-8">Ready to Start?</h2>
           <a href="https://wa.me/8801631312524" className="inline-flex items-center gap-3 bg-[#005a31] text-white px-10 md:px-16 py-5 md:py-6 rounded-2xl md:rounded-[2.5rem] text-lg md:text-xl font-black shadow-2xl hover:bg-orange-500 transition-all w-full md:w-auto justify-center">
             FREE ASSESSMENT <FaArrowRight />
           </a>
        </motion.div>
      </footer>
    </div>
    </HelmetProvider>
  );
};

// --- HELPER COMPONENTS ---

const FeatureBox = ({ icon, title, desc, color }) => (
  <motion.div 
    whileHover={{ y: -8 }}
    className="bg-white p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-xl border border-slate-50 flex flex-col items-center text-center group"
  >
    <div className={`w-16 h-16 md:w-20 md:h-20 ${color} rounded-2xl md:rounded-3xl flex items-center justify-center text-2xl md:text-3xl mb-6 shadow-sm`}>
      {icon}
    </div>
    <h3 className="text-xl md:text-2xl font-black text-gray-800 mb-3 uppercase tracking-tighter">{title}</h3>
    <p className="text-[11px] md:text-xs text-gray-500 leading-relaxed font-bold uppercase tracking-widest">{desc}</p>
  </motion.div>
);

const ReasonCard = ({ icon, title, desc }) => (
    <div className="bg-white p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] text-center shadow-lg border border-white">
        <div className="text-4xl md:text-5xl text-orange-500 mx-auto mb-6 flex justify-center">{icon}</div>
        <h3 className="text-xl md:text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-500 text-sm md:text-base">{desc}</p>
    </div>
);

const FAQItem = ({ question, answer }) => (
    <div className="bg-white p-5 md:p-6 rounded-2xl md:rounded-3xl border border-slate-100 shadow-sm">
        <h4 className="text-base md:text-lg font-black text-[#005a31] mb-2 flex items-start gap-2">
            <span className="bg-orange-100 text-orange-600 w-5 h-5 rounded-full flex items-center justify-center text-[10px] mt-1 flex-shrink-0">Q</span> {question}
        </h4>
        <p className="text-gray-600 text-xs md:text-sm font-medium leading-relaxed ml-7">{answer}</p>
    </div>
);

const ContactInfo = ({ icon, text }) => (
    <div className="flex items-center gap-4 group">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-100 rounded-xl md:rounded-2xl flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">{icon}</div>
        <span className="font-bold text-gray-700 text-sm md:text-base">{text}</span>
    </div>
);

export default TouristVisaBangladesh;