import React, { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion ,AnimatePresence} from "framer-motion";
import { 
  FaUniversity, FaFileSignature, 
  FaAward,FaUserGraduate,
  FaArrowRight, FaBookOpen,
  FaClock, FaHeadset, FaMapMarkerAlt, FaSearchLocation,
  FaBriefcase, FaHandHoldingUsd, FaFileContract
} from "react-icons/fa";


const StudentVisaBangladesh = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.7 }
  };

  const countries = [
    { name: "USA", desc: "F1 Visa support for Top-tier Universities.", icon: "🇺🇸", color: "bg-blue-50 text-blue-600" },
    { name: "UK", desc: "Fast-track CAS and Student Route Visa.", icon: "🇬🇧", color: "bg-red-50 text-red-600" },
    { name: "Canada", desc: "Study Permit & PGWP Guidance.", icon: "🇨🇦", color: "bg-orange-50 text-orange-600" },
    { name: "Australia", desc: "Subclass 500 Visa support.", icon: "🇦🇺", color: "bg-green-50 text-green-600" },
  ];
  const [currentHero, setCurrentHero] = useState(0);

const heroSlides = [
  { id: 1, image: "https://etias.com/assets/uploads/imagery/blog/study-abroad-safety-guide-hero.jpg" },
  { id: 2, image: "https://www.universityliving.com/blog/wp-content/uploads/2022/10/Banner-Image-1.webp" }, // Ensure you have a second image path
  { id: 3, image: "https://www.applyboard.com/wp-content/uploads/2023/01/Quiz_-Which-Destination-Country-Should-I-Study-Abroad-In.png" } // Ensure you have a third image path
];

useEffect(() => {
  const timer = setInterval(() => {
    setCurrentHero((prev) => (prev + 1) % heroSlides.length);
  }, 4000); // Switches every 5 seconds
  return () => clearInterval(timer);
}, []);

  return (
    <HelmetProvider>
    <div className="bg-[#fcfcfc] min-h-screen font-sans overflow-x-hidden">
      <Helmet>
        {/* Primary SEO */}
        <title>Student Visa Application Bangladesh | Education Consultancy Bangladesh</title>
        <meta name="description" content="Looking for the best student visa consultant in Bangladesh? Eammu Holidays provides expert guidance for USA, UK, Canada, and Australia student visas. Trusted study abroad advisors since 2018." />
        <link rel="canonical" href="https://eammu.com/visa-services/student-visa-application-from-bangladesh" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Eammu Holidays",
            "url": "https://eammu.com",
            "logo": "https://eammu.com/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Gomoti Tower, 1st Floor, Cantonment",
              "addressLocality": "Cumilla",
              "addressCountry": "BD"
            }
          })}
        </script>
      </Helmet>

     {/* 🚀 Hero Section - Mobile Optimized with Automatic Carousel */}
<section className="relative min-h-[50vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
  
  {/* --- CAROUSEL BACKGROUND LAYER --- */}
  <div className="absolute inset-0 z-0">
    <AnimatePresence mode="wait">
      <motion.div
        key={currentHero} // Ensure this state is defined at the top of your component
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1.05 }}
        exit={{ opacity: 0, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <img 
          src={heroSlides[currentHero].image} 
          alt="Students Abroad" 
          className="w-full h-full object-cover"
        />
      </motion.div>
    </AnimatePresence>
    
    {/* Gradient Overlay - Preserved your exact colors */}
    <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-tr from-[#005f05] via-[#9bb81a]/30 to-transparent z-10"></div>
  </div>

  {/* --- CONTENT LAYER (STAYS EXACTLY THE SAME) --- */}
  <div className="container mx-auto px-6 relative z-20 grid lg:grid-cols-2 gap-10 items-center pt-24 pb-12 md:py-0">
    <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="text-center md:text-left">
      <span className="bg-orange-500 text-white px-5 py-2 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest mb-6 inline-flex items-center gap-2 shadow-lg">
        <FaAward /> Trusted Education Partner Bangladesh
      </span>
      <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-[1.1]">
        Study Abroad <br /> 
        <span className="text-orange-400 drop-shadow-md italic">From Bangladesh</span>
      </h1>
      <p className="text-white/90 max-w-xl mb-10 leading-relaxed text-base md:text-xl font-medium">
        Start your journey to global education with expert <strong>student visa consultancy</strong>. We help Bangladeshi students secure admissions in the <strong>UK, USA, Canada, & Australia</strong>.
      </p>
      <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
        <a href="https://wa.me/8801631312524" className="bg-white text-[#005a31] px-10 py-4 rounded-2xl font-black hover:bg-orange-500 hover:text-white transition-all shadow-2xl flex items-center justify-center gap-2 text-sm md:text-base uppercase tracking-tighter">
          Apply for 2026 Intake <FaArrowRight />
        </a>
      </div>
    </motion.div>
    
    <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="hidden lg:block">
        <div className="bg-white/10 backdrop-blur-xl p-10 rounded-[4rem] border border-white/20 shadow-2xl">
          <div className="grid grid-cols-2 gap-8">
              <StatCard count="500+" label="Student Placed" />
              <StatCard count="150+" label="Universities" />
              <StatCard count="95%" label="Visa Success" />
              <StatCard count="100%" label="Support" />
          </div>
        </div>
    </motion.div>
  </div>

  {/* Progress Bar Indicators */}
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
    {heroSlides.map((_, i) => (
      <div 
        key={i} 
        className={`h-1 rounded-full transition-all duration-700 ${
          i === currentHero ? 'w-12 bg-orange-400' : 'w-4 bg-white/30'
        }`} 
      />
    ))}
  </div>
</section>

      {/* 🏛️ Services & Expertise */}
      <section className="py-16 md:py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-[#005a31] mb-4">Complete Study Abroad Guidance</h2>
          <div className="w-24 h-2 bg-orange-500 mx-auto rounded-full"></div>
          <p className="text-gray-500 max-w-2xl mx-auto mt-6 text-sm md:text-base font-medium leading-relaxed">
            We provide end-to-end support for Bangladeshi students, from selecting the right program to securing your visa and finding accommodation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<FaUniversity />} 
            title="University Selection" 
            desc="Expert mapping of your academic profile with global universities that offer the best ROI and scholarships."
          />
          <ServiceCard 
            icon={<FaBookOpen />} 
            title="SOP & Essay Support" 
            desc="Professional drafting of Statements of Purpose and Admission Essays that stand out to international boards."
          />
          <ServiceCard 
            icon={<FaFileSignature />} 
            title="Visa Filing Support" 
            desc="Meticulous documentation and financial proof preparation to ensure your student visa is approved quickly."
          />
        </div>
      </section>

      {/* 🌎 Study Destinations - Detailed View */}
      <section className="py-20 bg-slate-50 border-y border-slate-200 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-black text-[#005a31] mb-8 uppercase tracking-tighter italic leading-tight">
                Top Destinations For <br /> Bangladeshi Students
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {countries.map((c, i) => (
                  <div key={i} className="p-6 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                    <div className={`w-12 h-12 ${c.color} rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                        {c.icon}
                    </div>
                    <h4 className="font-black text-gray-800 text-xl mb-2">{c.name}</h4>
                    <p className="text-sm text-gray-500 font-medium leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-[#005a31]/5 rounded-[3.5rem] rotate-3 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Students Success" 
                className="rounded-[3rem] shadow-2xl w-full object-cover h-[450px] md:h-[600px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ✅ Why Choose Us (The "Trust" Section) */}
      <section className="py-20 container mx-auto px-6">
        <div className="bg-[#005a31] rounded-[3rem] md:rounded-[5rem] p-10 md:p-24 text-white relative overflow-hidden shadow-[0_30px_60px_rgba(0,90,49,0.3)]">
          <FaUserGraduate className="absolute -bottom-20 -right-20 text-white/5 text-[25rem] hidden md:block" />
          <div className="relative z-10 max-w-4xl">
            <h2 className="text-3xl md:text-6xl font-black mb-12 tracking-tighter italic">Why Eammu Holidays?</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <TrustItem icon={<FaBriefcase />} title="Pre-Departure Briefing" desc="Essential orientation on cultural adjustment, part-time work laws, and academic systems abroad." />
              <TrustItem icon={<FaHandHoldingUsd />} title="Scholarship Hunter" desc="We help students identify 50% to 100% scholarship opportunities based on merit." />
              <TrustItem icon={<FaFileContract />} title="Mock Interviews" desc="Intensive training for US (F1) and UK embassy interviews to boost confidence." />
              <TrustItem icon={<FaSearchLocation />} title="Post-Arrival Support" desc="Guidance on finding student accommodation and navigating the local city upon arrival." />
            </div>
          </div>
        </div>
      </section>

      {/* 📑 Student FAQ Section */}
      <section className="py-20 container mx-auto px-6">
         <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-[#005a31] mb-12 text-center tracking-tighter italic">Common Questions</h2>
            <div className="space-y-4">
                <FAQItem question="What is the minimum IELTS score for the UK?" answer="Usually, a 6.0 overall with no band less than 5.5 is required for Bachelor's, while Masters programs may require 6.5." />
                <FAQItem question="Can I study in Canada without a huge bank balance?" answer="Canada requires proof of GIC (Guaranteed Investment Certificate) and tuition fee payment, alongside supporting financial documents." />
                <FAQItem question="Does Eammu Holidays help with spouses?" answer="Yes, we process dependent visas for spouses and children for countries that allow student dependents like the UK and Canada." />
            </div>
         </div>
      </section>

      {/* 📑 Contact & Office Section */}
      <section className="py-12 md:py-24 container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 bg-white shadow-2xl rounded-[3rem] md:rounded-[4rem] p-8 md:p-16 border border-slate-100">
          <div className="flex-1 w-full">
            <div className="bg-orange-500 text-white px-5 py-2 rounded-xl text-[10px] font-black mb-6 inline-block uppercase tracking-widest">Counseling Center</div>
            <h3 className="text-3xl md:text-5xl font-black text-[#005a31] mb-6">Let's Talk About <br /> Your Future</h3>
            <div className="space-y-6">
              <ContactInfo icon={<FaMapMarkerAlt />} text="Gomoti Tower, Cantonment, Cumilla" />
              <ContactInfo icon={<FaClock />} text="Open: Sat - Thu (10 AM - 7 PM)" />
              <ContactInfo icon={<FaHeadset />} text="Expert Help: +8801631312524" />
            </div>
          </div>
          <div className="flex-1 w-full bg-slate-50 h-72 md:h-[400px] rounded-[3rem] md:rounded-[4rem] flex items-center justify-center border-4 border-white shadow-inner relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#005a31]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="text-slate-400 font-black italic text-center px-10 text-sm md:text-base tracking-widest uppercase">Office Location Map</span>
          </div>
        </div>
      </section>

      {/* 🏠 Footer CTA */}
      <footer className="py-20 text-center px-6">
        <motion.div whileHover={{ scale: 1.02 }}>
           <a href="https://wa.me/8801631312524" className="inline-flex items-center gap-4 bg-[#005a31] text-white px-10 md:px-20 py-5 md:py-7 rounded-[2rem] md:rounded-[3rem] text-lg md:text-2xl font-black shadow-[0_25px_50px_rgba(0,90,49,0.3)] hover:bg-orange-500 transition-all uppercase tracking-tighter">
             Book Free Counseling <FaArrowRight />
           </a>
        </motion.div>
        <p className="mt-12 text-gray-400 font-black uppercase text-[10px] md:text-xs tracking-[0.3em]">Excellence in Study Abroad Since 2018</p>
      </footer>
    </div>
    </HelmetProvider>
  );
};

// --- SUB-COMPONENTS ---

const ServiceCard = ({ icon, title, desc }) => (
  <motion.div 
    whileHover={{ y: -15 }}
    className="bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-50 group hover:border-green-100 transition-all duration-500"
  >
    <div className="w-16 h-16 bg-green-50 text-[#005a31] rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-[#005a31] group-hover:text-white transition-all duration-500 shadow-sm">
      {icon}
    </div>
    <h3 className="text-2xl font-black text-gray-800 mb-4">{title}</h3>
    <p className="text-gray-500 leading-relaxed text-sm font-medium">{desc}</p>
  </motion.div>
);

const TrustItem = ({ icon, title, desc }) => (
  <div className="flex gap-6">
    <div className="mt-1 text-orange-400 text-3xl flex-shrink-0">{icon}</div>
    <div>
      <h4 className="font-black text-xl md:text-2xl mb-2">{title}</h4>
      <p className="text-green-100/70 text-sm md:text-base leading-relaxed font-medium">{desc}</p>
    </div>
  </div>
);

const StatCard = ({ count, label }) => (
    <div className="text-center p-4">
        <h4 className="text-4xl md:text-5xl font-black text-orange-400 mb-1">{count}</h4>
        <p className="text-white text-[10px] uppercase font-bold tracking-widest">{label}</p>
    </div>
);

const FAQItem = ({ question, answer }) => (
    <div className="bg-white p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-md transition-all">
        <h4 className="text-lg md:text-xl font-black text-[#005a31] mb-3 flex items-start gap-3">
            <span className="bg-orange-100 text-orange-600 w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">Q</span> {question}
        </h4>
        <p className="text-gray-600 text-sm md:text-base font-medium leading-relaxed ml-9">{answer}</p>
    </div>
);

const ContactInfo = ({ icon, text }) => (
    <div className="flex items-center gap-5 group">
        <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all shadow-sm">{icon}</div>
        <span className="font-black text-gray-700 text-base md:text-xl">{text}</span>
    </div>
);

export default StudentVisaBangladesh;