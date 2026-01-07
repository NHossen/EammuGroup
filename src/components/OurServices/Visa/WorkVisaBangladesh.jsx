import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { 
  FaBriefcase, FaUserTie, FaBuilding, 
  FaFileContract, FaHandshake, FaGlobe,
  FaArrowRight, FaClock, FaCheckCircle
} from "react-icons/fa";

const WorkVisaBangladesh = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const industries = [
    { name: "IT & Software", icon: "💻" },
    { name: "Healthcare", icon: "🏥" },
    { name: "Engineering", icon: "🏗️" },
    { name: "Hospitality", icon: "🏨" },
    { name: "Construction", icon: "🧱" },
    { name: "Agriculture", icon: "🚜" },
  ];

  return (
    <div className="bg-white min-h-screen font-sans overflow-x-hidden">
      <Helmet>
        <title>Work Visa & Permit Services | Global Career Solutions - Eammu Holidays</title>
        <meta name="description" content="Apply for skilled and semi-skilled work visas for UK, Canada, Europe, and Middle East. Professional work permit consultancy from Bangladesh with high success rates." />
        <meta name="keywords" content="work visa from bangladesh, Canada work permit Dhaka, UK skilled worker visa, Middle East work visa agent, Romania work visa Bangladesh" />
        <link rel="canonical" href="https://eammu.com/work-visa-application-from-bangladesh" />
      </Helmet>

      {/* 🏗️ Corporate Hero Section */}
      <section className="relative h-[75vh] flex items-center bg-[#004d2a] overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#005a31] skew-x-[-15deg] translate-x-32 hidden lg:block"></div>
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Skyscraper Office" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 tracking-tighter">
              Build Your <span className="text-orange-400">Global Career</span> Today.
            </h1>
            <p className="text-lg md:text-xl text-green-50/80 mb-8 max-w-lg font-medium border-l-4 border-orange-500 pl-6">
              Expert assistance for Skilled Worker Visas, Employer Sponsorships, and Professional Permits across Europe, America, and Asia.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/8801631312524" className="bg-orange-500 text-white px-10 py-4 rounded-xl font-bold shadow-xl hover:bg-white hover:text-[#005a31] transition-all flex items-center gap-3">
                Free Eligibility Check <FaArrowRight />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 bg-white/10 backdrop-blur-md p-8 rounded-[3rem] border border-white/20">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Professional Worker" 
                className="rounded-[2rem] shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-3xl shadow-2xl z-20">
              <p className="text-3xl font-black italic">98%</p>
              <p className="text-xs uppercase font-bold tracking-widest">Success Rate</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 💼 Key Work Visa Services */}
      <section className="py-24 container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-black text-[#005a31] uppercase tracking-tighter mb-4 italic">Skilled Immigration Pathways</h2>
            <p className="text-gray-500">We assist in obtaining legal work authorization for top global economies with complete transparency.</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-green-50 px-6 py-2 rounded-full text-[#005a31] font-bold text-sm shadow-sm flex items-center gap-2 border border-green-100">
               <FaGlobe /> 20+ Countries
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <WorkCard 
            icon={<FaBriefcase />} 
            title="Skilled Worker Visa" 
            desc="For professionals with specialized skills in IT, Engineering, and Healthcare. Pathway to Permanent Residency (PR)."
            tag="UK & Australia"
          />
          <WorkCard 
            icon={<FaBuilding />} 
            title="Employer Sponsored" 
            desc="Guidance for applicants who have job offers and need sponsorship file management and legal documentation."
            tag="Canada & USA"
          />
          <WorkCard 
            icon={<FaHandshake />} 
            title="SME & Blue Collar" 
            desc="Specialized support for manufacturing, construction, and agriculture sectors in European nations."
            tag="Romania & Poland"
          />
        </div>
      </section>

      {/* 🚀 Industry Focus (SEO section) */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-[4rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/3 bg-[#005a31] p-16 text-white flex flex-col justify-center">
              <h3 className="text-3xl font-black mb-6 italic leading-tight">Trending Industries For Work Permits 2026</h3>
              <p className="text-green-100/60 text-sm mb-8 italic">We match your profile with current global labor shortages.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3"><FaCheckCircle className="text-orange-400" /> Professional CV Branding</div>
                <div className="flex items-center gap-3"><FaCheckCircle className="text-orange-400" /> Job Portal Registration</div>
                <div className="flex items-center gap-3"><FaCheckCircle className="text-orange-400" /> Embassy Interview Prep</div>
              </div>
            </div>
            <div className="lg:w-2/3 p-16 grid grid-cols-2 md:grid-cols-3 gap-8 items-center">
              {industries.map((item, idx) => (
                <div key={idx} className="text-center p-6 rounded-3xl border border-slate-100 hover:bg-green-50 transition-all cursor-default group">
                  <div className="text-4xl mb-4 group-hover:scale-125 transition-transform">{item.icon}</div>
                  <p className="font-bold text-gray-800">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 📅 Timeline / Steps */}
      <section className="py-24 container mx-auto px-4 max-w-5xl">
        <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" className="text-center mb-20">
          <h2 className="text-4xl font-black text-[#005a31] mb-4 uppercase italic">How It Works</h2>
          <div className="h-1.5 w-24 bg-orange-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-12">
          <StepBox num="01" title="Profile Assessment" desc="Detailed review of your education and experience to find the best-fit country." />
          <StepBox num="02" title="Contract Verification" desc="Legal verification of your employment contract and employer's credibility." />
          <StepBox num="03" title="Visa Filing" desc="Error-free submission of your application to the respective Embassy or VFS Global." />
          <StepBox num="04" title="Deployment Support" desc="Assistance with ticketing, travel insurance, and post-arrival guidance." />
        </div>
      </section>

      {/* 📞 Footer CTA */}
      <footer className="py-20 border-t border-slate-100 text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-black text-[#005a31] mb-6 tracking-tighter uppercase italic underline decoration-orange-400">Ready to start your work visa application?</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="https://wa.me/8801631312524" className="bg-[#005a31] text-white px-12 py-5 rounded-2xl font-black shadow-xl hover:bg-orange-500 transition-all">
              WHATSAPP US
            </a>
            <a href="tel:+8801701699743" className="bg-slate-100 text-slate-800 px-12 py-5 rounded-2xl font-black hover:bg-slate-200 transition-all border border-slate-200">
              CALL EXPERT
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Component for Service Cards
const WorkCard = ({ icon, title, desc, tag }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-50 relative overflow-hidden group hover:border-[#005a31] transition-all"
  >
    <div className="absolute top-0 right-0 bg-green-50 text-[#005a31] px-4 py-1 text-[10px] font-black uppercase tracking-widest rounded-bl-xl border-b border-l border-green-100">
      {tag}
    </div>
    <div className="w-16 h-16 bg-slate-50 text-[#005a31] rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-[#005a31] group-hover:text-white transition-all duration-500">
      {icon}
    </div>
    <h3 className="text-2xl font-black text-gray-800 mb-4">{title}</h3>
    <p className="text-gray-500 leading-relaxed text-sm">{desc}</p>
  </motion.div>
);

// Component for Step Boxes
const StepBox = ({ num, title, desc }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    className="flex gap-8 items-start group"
  >
    <div className="text-4xl font-black text-slate-200 group-hover:text-orange-500 transition-colors italic tracking-tighter">
      {num}
    </div>
    <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex-1 group-hover:shadow-lg transition-all">
      <h4 className="font-bold text-xl text-gray-800 mb-2">{title}</h4>
      <p className="text-gray-500 text-sm">{desc}</p>
    </div>
  </motion.div>
);

export default WorkVisaBangladesh;