import React from "react";
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle, Globe, Plane, ShieldCheck, MapPin, PhoneCall, MessageCircle, Mail, Clock, Briefcase, Landmark, GraduationCap } from 'lucide-react';

const TravelAgencyGeorgia = () => {
  const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  return (
    <>
      <Helmet>
        <title>Top Travel Agency in Georgia | Eammu Holidays Tbilisi Office</title>
        <meta name="description" content="Eammu Holidays Georgia: Best travel agency in Tbilisi. Specializing in Business Visas, TRC assistance, Student Consultancy, and luxury tours across Georgia." />
        <meta name="keywords" content="travel agency in Georgia, Tbilisi travel agent, Eammu Holidays Georgia, Georgia visa for foreigners, study in Georgia, Georgia business visa, TRC Georgia" />
        <link rel="canonical" href="https://eammu.com/travel-agency-georgia" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            "name": "Eammu Holidays Georgia",
            "image": "https://i.ibb.co/YF7bmqfg/logo.jpg",
            "url": "https://eammu.com/travel-agency-georgia",
            "telephone": "+995574446218",
            "email": "georgia@eammu.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Floor 5, Levan Gotua Street #3",
              "addressLocality": "Tbilisi",
              "addressCountry": "GE"
            }
          })}
        </script>
      </Helmet>

      <main className="bg-white text-slate-900 overflow-hidden pb-20">
        
        {/* Unique Split Hero Section */}
        <section className="relative min-h-[75vh] flex flex-col lg:flex-row items-center border-b border-slate-100">
          <div className="w-full lg:w-1/2 bg-[#005a31] p-8 md:p-16 lg:p-24 flex flex-col justify-center">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <span className="text-orange-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Your Bridge to Tbilisi</span>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                Trusted Travel <br/> Partner in <span className="text-orange-400">Georgia</span>
              </h1>
              <p className="text-lg text-white/80 mb-10 max-w-lg leading-relaxed">
                Navigating Georgia's tourism and business landscape made easy. Visit Eammu Holidays at Levan Gotua Street for expert visa and tour solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-orange-500 hover:bg-white hover:text-[#005a31] text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg">
                  View Services
                </button>
                <a href="https://wa.me/995574446218" className="border-2 border-white/30 text-white hover:bg-white hover:text-[#005a31] px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2">
                  <MessageCircle size={20}/> WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
          
          <div className="w-full lg:w-1/2 h-[350px] lg:h-[75vh] relative">
            <img 
              src="https://visitgeorgia.ge/wp-content/uploads/2-4.png" 
              alt="Old Tbilisi Georgia" 
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Tbilisi Office Contact Quick-View */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                 <div className="p-4 bg-[#005a31] text-white rounded-xl"><MapPin size={24}/></div>
                 <div><h4 className="text-xs uppercase font-bold text-gray-500">Tbilisi Office</h4><p className="font-bold text-[#005a31] leading-tight text-sm">Floor 5, Levan Gotua St #3, Tbilisi</p></div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                 <div className="p-4 bg-orange-500 text-white rounded-xl"><PhoneCall size={24}/></div>
                 <div><h4 className="text-xs uppercase font-bold text-gray-500">Hotline</h4><p className="font-bold text-slate-800">+995 574 446 218</p></div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                 <div className="p-4 bg-[#005a31] text-white rounded-xl"><Mail size={24}/></div>
                 <div><h4 className="text-xs uppercase font-bold text-gray-500">Email Us</h4><p className="font-bold text-slate-800">georgia@eammu.com</p></div>
              </div>
           </div>
        </section>

        {/* Specialized Services for Georgia */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#005a31] mb-4 uppercase tracking-tighter">Georgia Specialist Services</h2>
            <div className="w-20 h-1.5 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceBlock icon={<Briefcase/>} title="Business Visa" desc="End-to-end support for business formation and commercial visas in Georgia." />
            <ServiceBlock icon={<GraduationCap/>} title="Study in Georgia" desc="Top-tier consultancy for international students seeking admission in Tbilisi." />
            <ServiceBlock icon={<Landmark/>} title="TRC Assistance" desc="Expert guidance for Temporary Residence Permits and legal stay in Georgia." />
            <ServiceBlock icon={<Globe/>} title="Batumi Tours" desc="Explore the beauty of the Black Sea and the mountains with our guided tours." />
          </div>
        </section>

        {/* SEO Authoritative Content */}
        <section className="bg-[#fcfcfc] py-24 px-6 border-y border-slate-100">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-start">
            <div className="lg:w-1/2">
              <h3 className="text-xl font-bold text-orange-500 mb-4 uppercase tracking-widest">About Eammu Holidays Georgia</h3>
              <h2 className="text-4xl font-black text-[#005a31] mb-8 leading-tight">Connecting the World via <span className="text-orange-500">Tbilisi</span></h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                As a prominent <strong>travel agency in Georgia</strong>, Eammu Holidays understands the local legalities and tourism landscape. We help international clients navigate visa requirements, residency permits, and discover the breathtaking landscapes of Tbilisi, Batumi, and Kazbegi. 
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Floor 5 Corporate Office", "Business License Support", "TRC & Residency Experts", "Multilingual Support Staff"].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 font-bold text-[#005a31]">
                    <CheckCircle className="text-orange-500" size={18}/> {text}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Georgia Specific FAQ */}
            <div className="lg:w-1/2 bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
               <h4 className="text-2xl font-bold text-[#005a31] mb-8 border-b-2 border-orange-500 pb-2 inline-block">Georgia Travel FAQ</h4>
               <div className="space-y-8">
                  <div className="group">
                    <h5 className="font-black text-slate-800 group-hover:text-orange-500 transition-colors cursor-pointer">Can I get a residence permit in Georgia?</h5>
                    <p className="text-slate-600 text-sm mt-2">Yes, through investment or business. Our Tbilisi team specializes in TRC (Temporary Residence Card) processing.</p>
                  </div>
                  <div className="group pt-6 border-t border-slate-100">
                    <h5 className="font-black text-slate-800 group-hover:text-orange-500 transition-colors cursor-pointer">Where is your office located?</h5>
                    <p className="text-slate-600 text-sm mt-2">We are at Floor 5, Levan Gotua Street #3, Tbilisi. You can reach us on +995 574 446 218.</p>
                  </div>
               </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

const ServiceBlock = ({ icon, title, desc }) => (
  <div className="group bg-white p-10 rounded-2xl border border-slate-100 hover:border-orange-500 hover:shadow-2xl transition-all">
    <div className="w-12 h-12 bg-[#005a31] text-white rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
      {React.cloneElement(icon, { size: 24 })}
    </div>
    <h3 className="text-xl font-bold text-[#005a31] mb-3">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default TravelAgencyGeorgia;