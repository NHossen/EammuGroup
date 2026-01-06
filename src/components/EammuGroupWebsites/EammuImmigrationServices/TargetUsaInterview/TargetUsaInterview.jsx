import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  CheckCircle2, 
  Mic2, 
  UserCheck, 
  FileText, 
  GraduationCap, 
  Headphones, 
  Globe, 
  PhoneCall, 
  Mail, 
  MapPin, 
  ArrowRight,
  ShieldCheck,
  Star
} from "lucide-react";

const TargetUsaInterview = () => {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>USA Visa Interview Preparation Bangladesh | Eammu Holidays</title>
        <meta
          name="description"
          content="Prepare for your visa interview with Eammu's Target USA program. Expert guidance on F1, B1/B2, USA, document support, mock interviews, and more."
        />
        <meta
          name="keywords"
          content="USA visa interview Preparation, F1 visa coaching, B2 visa support, mock visa interview, Eammu Holidays, Target USA program"
        />
        <link rel="canonical" href="https://www.eammu.com/targetusavisainterview" />
      </Helmet>

      {/* 🚀 Hero Section */}
      <header className="pt-16 pb-12 px-4 container mx-auto text-center border-b border-gray-100">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-[#005a31] rounded-full text-xs font-bold uppercase tracking-widest mb-6">
          <Star size={14} fill="currentColor" /> Best Interview Coaching in Cumilla
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-[#005a31] leading-tight mb-4">
          Target USA <span className="text-orange-500">Visa Interview</span> <br /> Preparation Bangladesh
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium mb-10">
          By Eammu Holidays — Turning your global dreams into reality through expert coaching and embassy simulation.
        </p>
        
        <div className="relative max-w-4xl mx-auto group">
          <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-orange-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <img
            src="https://www.jobberman.com/discover/wp-content/uploads/2016/10/Jobberman_Preparing_for_Interviews.png"
            alt="USA Visa Interview"
            className="relative w-full rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]"
          />
        </div>
      </header>

      {/* 🎯 Our Core Services */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-[#005a31] uppercase italic">What We Offer</h2>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<Mic2 className="text-white" />} 
            title="Interview Coaching" 
            desc="Personalized training for F1, B1/B2, F2 with 2025's most updated embassy questions." 
          />
          <ServiceCard 
            icon={<UserCheck className="text-white" />} 
            title="Dress Code Tips" 
            desc="Learn the psychology of first impressions. Dress to radiate confidence and professionalism." 
          />
          <ServiceCard 
            icon={<FileText className="text-white" />} 
            title="Document Checklist" 
            desc="Complete folder organization & PDF support to ensure you have every paper ready." 
          />
          <ServiceCard 
            icon={<GraduationCap className="text-white" />} 
            title="50+ Sample Answers" 
            desc="Get access to high-success rate answers tailored to your specific profile and background." 
          />
          <ServiceCard 
            icon={<ShieldCheck className="text-white" />} 
            title="Mock Sessions" 
            desc="Real-time feedback & embassy simulation to remove your fear before the actual day." 
          />
          <ServiceCard 
            icon={<Globe className="text-white" />} 
            title="Private Groups" 
            desc="Individual care through Zoom or in-office sessions for personalized strategy building." 
          />
        </div>
      </section>

      {/* 🏆 Why Trust Section */}
      <section className="py-20 bg-[#005a31] text-white rounded-[3rem] mx-4 mb-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="container mx-auto px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-12 text-center">Why Choose <span className="text-orange-400">Target USA</span>?</h2>
          <div className="grid sm:grid-cols-2 gap-10">
            <TrustItem title="Education + Immigration" desc="We don't just process visas; we provide expert career guidance for your future." />
            <TrustItem title="24/7 Advisor Access" desc="Call or WhatsApp us any time—even the night before your interview for last-minute tips." />
            <TrustItem title="Legal Transparency" desc="Proper contracts and clear fee structures for every applicant. No hidden costs." />
            <TrustItem title="Global Support" desc="Presence in Bangladesh and UAE means you get international standard consultancy." />
          </div>
        </div>
      </section>

      {/* 📞 Contact Section */}
      <section className="py-20 container mx-auto px-4 border-t border-gray-100">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl font-black text-[#005a31]">Let's Start Your <br /> Journey Today</h2>
            <p className="text-gray-600 text-lg">Our experts are ready to guide you. Reach out through any of our channels for a free initial consultation.</p>
            
            <div className="space-y-6">
              <ContactItem icon={<PhoneCall />} title="Call / WhatsApp" value="+8801701699743, +971507078334" />
              <ContactItem icon={<Mail />} title="Email Support" value="info@eammu.com, support@eammu.com" />
              <ContactItem icon={<MapPin />} title="Visit Office" value="Office 178, 1st Floor, Gomoti Tower, Cantonment, Cumilla" />
            </div>
          </div>

          {/* Social Links Card */}
          <div className="lg:w-1/2 w-full bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Connect with Us</h3>
            <div className="grid grid-cols-1 gap-4">
              <SocialLink color="bg-blue-600" name="Facebook" link="https://www.facebook.com/TargetUSAInterviewPreparation" />
              <SocialLink color="bg-pink-600" name="Instagram" link="#" />
              <SocialLink color="bg-blue-800" name="LinkedIn" link="#" />
            </div>
            
            <div className="mt-12 p-6 bg-white rounded-2xl border border-blue-100 italic text-gray-500 text-sm">
              "First impressions are the last impressions. We make sure yours is the best."
            </div>
          </div>
        </div>
      </section>

      {/* 🏠 Footer CTA */}
      <footer className="py-12 text-center">
        <Link
          to="/"
          className="group inline-flex items-center gap-3 bg-[#005a31] text-white px-10 py-4 rounded-2xl font-bold hover:bg-orange-500 transition-all shadow-xl active:scale-95"
        >
          Back to Home <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </footer>
    </div>
  );
};

// --- Helper Components ---

const ServiceCard = ({ icon, title, desc }) => (
  <div className="bg-white p-8 rounded-[2.5rem] shadow-lg shadow-slate-200/50 border border-slate-50 hover:border-green-100 hover:shadow-2xl transition-all group">
    <div className="w-14 h-14 bg-[#005a31] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-900/20 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

const TrustItem = ({ title, desc }) => (
  <div className="flex gap-4">
    <CheckCircle2 className="text-orange-400 flex-shrink-0" size={28} />
    <div>
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="text-green-100/70 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

const ContactItem = ({ icon, title, value }) => (
  <div className="flex gap-5 items-center">
    <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-[#005a31]">
      {React.cloneElement(icon, { size: 20 })}
    </div>
    <div>
      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{title}</p>
      <p className="text-gray-800 font-bold">{value}</p>
    </div>
  </div>
);

const SocialLink = ({ color, name, link }) => (
  <a href={link} target="_blank" rel="noreferrer" className={`${color} text-white p-4 rounded-xl font-bold flex items-center justify-between hover:opacity-90 transition-opacity`}>
    {name} <ArrowRight size={18} />
  </a>
);

export default TargetUsaInterview;