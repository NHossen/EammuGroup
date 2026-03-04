import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  CheckCircle,
  GraduationCap,
  BookOpen,
  Users,
  Award,
  Globe,
  MessageCircle,
  PhoneCall,
  MapPin,
  ChevronRight,
  Star,
  Clock,
  Laptop,
  Check
} from "lucide-react";

const TIICPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <HelmetProvider>
      <div className="bg-[#fcfcfc] text-slate-900 font-sans overflow-x-hidden">
        <Helmet>
          <title>IELTS Coaching Center in Cumilla | Travel Agency Cumilla | Education Consultancy Bangladesh</title>
          <meta name="description" content="Target IELTS & Immigration Center (TIIC) offers premium IELTS, PTE & Spoken English coaching in Cumilla. Expert study abroad guidance for Bangladesh & Dubai students." />
          
          <link rel="canonical" href="https://eammu.com/target-ielts-and-immigration-center" />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Target IELTS & Immigration Center (TIIC)",
              "parentOrganization": { "name": "Eammu Holidays" },
              "address": { "addressLocality": "Cumilla", "addressCountry": "BD" }
            })}
          </script>
        </Helmet>

        {/* 🎓 HERO SECTION - Dynamic Layout */}
        <section className="relative min-h-[90vh] flex flex-col lg:flex-row items-stretch">
          <div className="lg:w-1/2 bg-[#005a31] p-8 md:p-20 flex items-center relative overflow-hidden">
            {/* Abstract background circle */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="relative z-10 w-full">
              <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest mb-8">
                <Star size={14} fill="currentColor" /> A Premium Unit of Eammu Holidays
              </div>

              <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tighter">
                Elevate Your <br />
                <span className="text-orange-400 italic">Future at TIIC</span>
              </h1>

              <p className="text-white/80 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-medium">
                The most trusted IELTS & Study Abroad academy in Cumilla. 
                Empowering students from <span className="text-white font-bold">Bangladesh and Dubai</span> with world-class education pathways.
              </p>

              <div className="flex flex-col sm:flex-row gap-5">
                <a href="https://wa.me/8801701699743" className="bg-orange-500 hover:bg-white hover:text-orange-500 text-white px-10 py-5 rounded-2xl font-black transition-all flex justify-center items-center gap-3 shadow-xl shadow-black/20 text-sm md:text-base">
                  <MessageCircle size={20} /> FREE ASSESSMENT
                </a>
                <a href="tel:+8801701699743" className="border-2 border-white/30 hover:bg-white/10 text-white px-10 py-5 rounded-2xl font-black text-center transition-all text-sm md:text-base">
                  CALL ACADEMY
                </a>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 relative min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1470"
              alt="IELTS students"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#005a31]/60 to-transparent lg:hidden"></div>
            {/* Floating Review Card */}
            <div className="absolute bottom-10 left-10 right-10 md:left-auto md:right-10 md:w-72 bg-white p-6 rounded-[2rem] shadow-2xl border border-slate-100">
                <div className="flex gap-1 text-orange-500 mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 text-sm font-bold">"Best PTE coaching in Cumilla! Got my desired score in 4 weeks."</p>
                <p className="text-[#005a31] text-xs font-black mt-3 uppercase tracking-widest">— Nafis Ahmed</p>
            </div>
          </div>
        </section>

        {/* 📊 TRUST STATS - Glassmorphism style */}
        <section className="relative -mt-12 z-20 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <StatCard icon={<Users />} title="5000+" desc="Students Trained" />
            <StatCard icon={<Award />} title="8.5" desc="Highest Band" />
            <StatCard icon={<Globe />} title="50+" desc="Partner Uni" />
            <StatCard icon={<CheckCircle />} title="98%" desc="Visa Success" />
          </div>
        </section>

        {/* 📚 COURSES SECTION - Interactive Cards */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#005a31] uppercase tracking-tighter italic">
              Premium Learning Programs
            </h2>
            <div className="w-24 h-2 bg-orange-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <CourseCard
              icon={<GraduationCap size={40} />}
              title="IELTS Academic & General"
              color="border-blue-100 text-blue-600"
              points={[
                "British Council exam pattern",
                "Weekly full mock tests",
                "Exclusive Band 8+ strategy",
                "Personalized feedback"
              ]}
            />
            <CourseCard
              icon={<Laptop size={40} />}
              title="PTE Academic Training"
              color="border-purple-100 text-purple-600"
              points={[
                "AI-based practice software",
                "Real exam environment",
                "Fast-track 30-day batches",
                "Scoring techniques"
              ]}
            />
            <CourseCard
              icon={<BookOpen size={40} />}
              title="Spoken English"
              color="border-orange-100 text-orange-600"
              points={[
                "Daily conversation drills",
                "Grammar & Lexical resource",
                "Job interview preparation",
                "Public speaking confidence"
              ]}
            />
          </div>
        </section>

        {/* 🌍 STUDY ABROAD - Corporate Section */}
        <section className="bg-slate-50 py-24 px-6 border-y border-slate-200">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
                <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1471" 
                    alt="Consultancy" 
                    className="rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                />
            </div>
            <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-5xl font-black text-[#005a31] mb-8 uppercase tracking-tighter italic">
                  Global Study Solutions
                </h2>
                <p className="text-gray-500 text-lg mb-8 leading-relaxed font-medium">
                  Operating under <span className="text-[#005a31] font-bold">Eammu Holidays</span>, TIIC bridges the gap between Bangladeshi students and global universities. Whether you are in <strong>Cumilla or Dubai</strong>, our experts handle the heavy lifting.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                    {["USA & Canada Experts", "UK & Australia Specialists", "Scholarship Assistance", "Visa Interview Prep"].map((text, i) => (
                        <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100">
                            <Check className="text-green-600 bg-green-50 rounded-full p-1" size={24} />
                            <span className="font-bold text-gray-700 text-sm">{text}</span>
                        </div>
                    ))}
                </div>
                <a href="https://eammu.com" className="inline-flex items-center gap-2 text-orange-500 font-black uppercase tracking-widest text-sm border-b-2 border-orange-500 pb-1 hover:text-[#005a31] hover:border-[#005a31] transition-all">
                    Explore Eammu Holidays <ChevronRight size={18} />
                </a>
            </div>
          </div>
        </section>

        {/* 🪜 PROCESS SECTION */}
        <section className="py-24 px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-[#005a31] mb-16 text-center italic tracking-tighter uppercase">Your Road to Success</h2>
          <div className="grid gap-6">
            <Step num="01" title="Free Diagnostic Assessment" desc="Find your current level before you start." />
            <Step num="02" title="Customized Study Plan" desc="Tailored modules based on your strengths." />
            <Step num="03" title="Unlimited Mock Exams" desc="Practice until you are perfect for the real test." />
            <Step num="04" title="Visa & University Support" desc="Seamless transition to your study destination." />
          </div>
        </section>

        {/* 📍 CONTACT & LOCATION */}
        <section className="bg-[#005a31] mx-4 md:mx-10 mb-12 rounded-[3rem] md:rounded-[5rem] overflow-hidden py-20 px-8 text-white relative shadow-2xl">
          <div className="absolute top-0 right-0 p-20 opacity-10">
            <GraduationCap size={300} />
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-6 italic tracking-tighter">JOIN THE TIIC ACADEMY</h2>
            <p className="text-white/70 text-lg mb-12 font-medium">
              Gomoti Tower (1st Floor), Cumilla, Bangladesh. <br />
              <span className="text-orange-400">Trusted by students across Bangladesh & UAE.</span>
            </p>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                    <MapPin className="mx-auto mb-4 text-orange-400" />
                    <p className="font-black text-sm uppercase tracking-widest mb-1 text-white">Cumilla Head Office</p>
                    <p className="text-white/60">Gomoti Tower, Cantonment</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                    <Clock className="mx-auto mb-4 text-orange-400" />
                    <p className="font-black text-sm uppercase tracking-widest mb-1 text-white">Office Hours</p>
                    <p className="text-white/60">Sat - Thu: 10:00 AM - 7:00 PM</p>
                </div>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
                 <a href="tel:+8801701699743" className="bg-white text-[#005a31] px-10 py-5 rounded-2xl font-black flex items-center gap-2 hover:bg-orange-500 hover:text-white transition-all">
                    <PhoneCall size={18} /> CALL: +880 1701 699743
                 </a>
            </div>
          </div>
        </section>
        
        <footer className="py-12 text-center text-gray-400 font-black text-xs uppercase tracking-[0.4em]">
            Target IELTS & Immigration Center — 2026
        </footer>
      </div>
    </HelmetProvider>
  );
};

// --- SUB-COMPONENTS ---

const StatCard = ({ icon, title, desc }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white/80 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-slate-100 shadow-xl text-center flex flex-col items-center"
  >
    <div className="text-orange-500 mb-4 bg-orange-50 p-3 rounded-2xl">{icon}</div>
    <h3 className="text-2xl md:text-3xl font-black text-[#005a31]">{title}</h3>
    <p className="text-gray-500 text-xs font-black uppercase tracking-widest mt-1">{desc}</p>
  </motion.div>
);

const CourseCard = ({ title, points, icon, color }) => (
  <div className={`bg-white p-8 md:p-10 rounded-[3rem] border-2 shadow-lg shadow-slate-200/50 group hover:border-[#005a31] transition-all duration-500 ${color}`}>
    <div className="mb-6 group-hover:scale-110 transition-transform duration-500">{icon}</div>
    <h3 className="font-black text-2xl text-slate-800 mb-6 leading-tight">{title}</h3>
    <ul className="space-y-4">
      {points.map((p, i) => (
        <li key={i} className="flex gap-3 text-gray-500 font-medium text-sm md:text-base items-start">
          <CheckCircle size={18} className="text-orange-500 flex-shrink-0 mt-0.5" /> <span>{p}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Step = ({ num, title, desc }) => (
  <div className="flex flex-col md:flex-row gap-6 items-center md:items-start group p-6 rounded-3xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100">
    <div className="text-4xl font-black text-slate-100 group-hover:text-orange-500 transition-colors italic leading-none">{num}</div>
    <div>
        <h4 className="font-black text-xl text-slate-800 mb-2 text-center md:text-left">{title}</h4>
        <p className="text-gray-500 text-sm md:text-base text-center md:text-left font-medium">{desc}</p>
    </div>
  </div>
);

export default TIICPage;