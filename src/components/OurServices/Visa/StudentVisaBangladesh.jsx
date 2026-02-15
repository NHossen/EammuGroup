import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { 
  FaGraduationCap, FaUniversity, FaFileSignature, 
  FaAward, FaGlobeEurope, FaUserGraduate,
  FaArrowRight, FaBookOpen, FaCheckDouble
} from "react-icons/fa";

const StudentVisaBangladesh = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.7 }
  };

  const countries = [
    { name: "USA", desc: "F1 Visa support for Top-tier Universities.", icon: "🇺🇸" },
    { name: "UK", desc: "Fast-track CAS and Student Route Visa.", icon: "🇬🇧" },
    { name: "Canada", desc: "Study Permit & Post-Graduation Work Permit.", icon: "🇨🇦" },
    { name: "Australia", desc: "Subclass 500 Visa with Substantial Support.", icon: "🇦🇺" },
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      <Helmet>
  {/* Primary SEO */}
  <title>Student Visa Application Bangladesh | Study Abroad From Bangladesh – Eammu Holidays</title>
  <meta
    name="description"
    content="Looking for the best student visa consultant in Bangladesh? Eammu Holidays provides expert guidance for USA, UK, Canada, and Australia student visas. Trusted study abroad advisors since 2018."
  />
  <meta
    name="keywords"
    content="student visa consultant Bangladesh, study abroad Bangladesh, USA student visa from Bangladesh, UK student visa consultant, Canada study permit Dhaka, Australia student visa agent, study abroad consultancy, Eammu Holidays student visa"
  />
  <link rel="canonical" href="https://eammu.com/student-visa-application-from-bangladesh" />

  {/* Open Graph / Social SEO */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Student Visa Consultant Bangladesh | Eammu Holidays" />
  <meta
    property="og:description"
    content="Eammu Holidays provides professional student visa consultancy for USA, UK, Canada, and Australia. From university selection to visa approval, we support every step."
  />
  <meta property="og:url" content="https://eammu.com/student-visa-application-from-bangladesh" />
  <meta property="og:site_name" content="Eammu Holidays" />
  <meta property="og:image" content="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Student Visa Consultant Bangladesh | Eammu Holidays" />
  <meta
    name="twitter:description"
    content="Apply for student visas to USA, UK, Canada, and Australia easily with Eammu Holidays. Trusted Bangladeshi study abroad consultants."
  />
  <meta name="twitter:image" content="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" />

  {/* Geo / Local SEO */}
  <meta name="geo.region" content="BD" />
  <meta name="geo.placename" content="Cumilla, Bangladesh" />
  <meta name="geo.position" content="23.4607;91.1809" />
  <meta name="ICBM" content="23.4607,91.1809" />

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Eammu Holidays",
      "url": "https://eammu.com",
      "logo": "https://eammu.com/images/logo.png",
      "sameAs": [
        "https://www.facebook.com/eammu",
        "https://www.instagram.com/eammu",
        "https://www.linkedin.com/company/eammu",
        "https://www.youtube.com/@eammu"
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+8801631312524",
          "contactType": "customer service",
          "areaServed": "BD",
          "email": "info@eammu.com"
        }
      ],
      "description": "Eammu Holidays provides expert student visa consultancy services from Bangladesh to study in USA, UK, Canada, and Australia. Full support from university selection, SOP, application, to visa approval.",
      "hasCourse": countries.map(c => ({
        "@type": "Course",
        "name": `${c.name} Student Visa Support`,
        "provider": {
          "@type": "EducationalOrganization",
          "name": "Eammu Holidays",
          "sameAs": "https://eammu.com"
        },
        "description": c.desc
      }))
    })}
  </script>
</Helmet>


     {/* 🎓 Premium Hero Section with Background Image */}
      <section className="relative min-h-[75vh] flex items-center pt-24 pb-20 overflow-hidden">
        {/* Background Image Wrapper */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Group of Students Studying" 
            className="w-full h-full object-cover shadow-2xl"
          />
          {/* Green Overlay - Adjust opacity from /90 to /70 to see more image */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#005a31]/75 via-[#005a31]/65 to-[#005a31]/40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8 shadow-lg shadow-orange-500/20"
            >
              <FaAward /> Trusted Education Partner Bangladesh
            </motion.div>
            
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 tracking-tighter"
            >
              
                Study Abroad from Bangladesh <br /> 
              <span className="text-orange-400 italic">Global Education Opportunities</span>
            
              
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-green-50 mb-12 leading-relaxed max-w-6xl font-medium"
            >
            Start your journey to global education with trusted study abroad services from Bangladesh. Explore top universities worldwide, get expert guidance on student visas, scholarships, admissions, and career-focused courses, and turn your dream of international education into reality. We help Bangladeshi students study in the UK, USA, Canada, Australia, Europe, and Asia with complete support from application to visa approval.
            </motion.p>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-5"
            >
               <a href="https://wa.me/8801631312524" className="bg-orange-500 text-white px-10 py-4 rounded-xl font-bold shadow-xl hover:bg-white hover:text-[#005a31] transition-all flex items-center gap-3">
                              Apply for 2026 Intake <FaArrowRight />
                            </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🏛️ Services & Expertise */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-[#005a31] mb-4">Complete Study Abroad Guidance from Bangladesh</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">We offer complete study abroad guidance from Bangladesh, covering admissions, student visas, scholarships, documentation, and pre-departure support—helping Bangladeshi students start their global education journey with confidence. 🌍🎓</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
  <ServiceCard 
    icon={<FaUniversity />} 
    title={<h3>University Admission Guidance</h3>} 
    desc="Expert guidance for selecting the right course and university based on your academic background, budget, and study abroad goals."
  />
  
  <ServiceCard 
    icon={<FaBookOpen />} 
    title={<h3>SOP & Admission Essay Support</h3>} 
    desc="Professional help to write strong Statements of Purpose and admission essays that improve your chances of university acceptance."
  />
  
  <ServiceCard 
    icon={<FaFileSignature />} 
    title={<h3>Student Visa Documentation Support</h3>} 
    desc="Accurate visa filing, financial documentation, and compliance support to maximize student visa approval success."
  />
</div>
      </section>

      {/* 🌎 Study Destinations */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" className="lg:w-1/2">
              <h2 className="text-4xl font-black text-[#005a31] mb-6 uppercase tracking-tighter">Top Study Abroad Destinations <br /> For Bangladeshi Students</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether it's the high-tech labs of the <strong>USA</strong>, the heritage universities of the <strong>UK</strong>, or the immigration-friendly policies of <strong>Canada</strong>, we cover it all.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {countries.map((c, i) => (
                  <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-[#005a31] transition-all">
                    <span className="text-3xl mb-2 block">{c.icon}</span>
                    <h4 className="font-bold text-gray-800">{c.name}</h4>
                    <p className="text-xs text-gray-500">{c.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute -inset-4 bg-orange-100 rounded-[3rem] rotate-3 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Students Success" 
                className="rounded-[2.5rem] shadow-2xl w-full object-cover h-[500px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ✅ Why Choose Us (SEO Rich Section) */}
      <section className="py-24 container mx-auto px-4">
        <div className="bg-[#005a31] rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden">
          <FaUserGraduate className="absolute -bottom-10 -right-10 text-white/5 text-[20rem]" />
          <div className="relative z-10 max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-black mb-10">Why Eammu Holidays for <br /> Your Student Visa?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <TrustItem title="Pre-Departure Briefing" desc="Get ready for your life abroad with our cultural and academic orientation." />
              <TrustItem title="Scholarship Assistance" desc="We help students identify and apply for fully funded and partial scholarships." />
              <TrustItem title="Mock Interview Prep" desc="Exclusive 'Target USA' sessions for US Embassy interviews." />
              <TrustItem title="Post-Arrival Support" desc="Assistance in finding accommodation and part-time job guidance." />
            </div>
          </div>
        </div>
      </section>

      {/* 📞 Footer CTA */}
      <footer className="py-24 text-center">
        <motion.div whileHover={{ scale: 1.02 }} className="inline-block">
          <a href="https://wa.me/8801631312524" className="bg-[#005a31] text-white px-12 py-5 rounded-2xl font-black text-lg shadow-2xl flex items-center gap-4 hover:bg-orange-500 transition-all uppercase tracking-tighter">
            Book Free Assessment Session <FaArrowRight />
          </a>
        </motion.div>
        <p className="mt-8 text-gray-400 font-bold uppercase text-xs tracking-[0.2em]">Excellence in Global Education Since 2018</p>
      </footer>
    </div>
  );
};

// Sub-components
const ServiceCard = ({ icon, title, desc }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-50 group hover:border-green-100 transition-all"
  >
    <div className="w-16 h-16 bg-green-50 text-[#005a31] rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-[#005a31] group-hover:text-white transition-all duration-500 shadow-sm">
      {icon}
    </div>
    <h3 className="text-2xl font-black text-gray-800 mb-4">{title}</h3>
    <p className="text-gray-500 leading-relaxed text-sm">{desc}</p>
  </motion.div>
);

const TrustItem = ({ title, desc }) => (
  <div className="flex gap-4">
    <div className="mt-1 text-orange-400 text-xl"><FaCheckDouble /></div>
    <div>
      <h4 className="font-bold text-xl mb-1">{title}</h4>
      <p className="text-green-100/70 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default StudentVisaBangladesh;