import React from "react";
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle, Globe, Award, MapPin, PhoneCall, MessageCircle, Landmark, ShieldCheck } from 'lucide-react';

const TravelAgencyDubai = () => {
  const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };

  return (
    <>
      <Helmet>
        <title>Best Travel Agency in Dubai 2026 | Eammu Holidays Business Bay</title>
        <meta name="description" content="Eammu Holidays Dubai: Leading travel agency in Business Bay. Specializing in UAE Golden Visas, Schengen, USA & UK visa processing, and luxury world tours." />
        <meta name="keywords" content="travel agency in Dubai, best visa consultant Dubai, Eammu Holidays Business Bay, UAE Golden Visa assistance, Schengen visa from Dubai, travel agency near me Dubai" />
        <link rel="canonical" href="https://eammu.com/travel-agency-dubai" />
        
        {/* Advanced JSON-LD for Dubai Market */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            "name": "Eammu Holidays Dubai",
            "image": "https://i.ibb.co/YF7bmqfg/logo.jpg",
            "url": "https://eammu.com/travel-agency-dubai",
            "telephone": "+971507078334",
            "priceRange": "AED",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Business Bay, Office Details Here",
              "addressLocality": "Dubai",
              "addressRegion": "Dubai",
              "addressCountry": "AE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "25.1852",
              "longitude": "55.2726"
            },
            "sameAs": [
              "https://facebook.com/eammuholidays",
              "https://instagram.com/eammuholidays"
            ]
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-[#fcfcfc]">
        {/* Hero Section - Dubai Skyline Theme */}
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80" 
              alt="Dubai Skyline Business Bay" 
              className="w-full h-full object-cover opacity-50 scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-slate-900 z-10"></div>
          
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="relative z-20 text-center px-6 max-w-6xl">
            <div className="flex justify-center mb-6">
               <span className="bg-yellow-500/20 text-yellow-500 border border-yellow-500/50 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                 Premium Travel Solutions
               </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-white leading-tight uppercase">
              Travel Agency <br/><span className="text-yellow-500">in Dubai</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light max-w-3xl mx-auto leading-relaxed">
              Experience seamless global travel and visa processing with <span className="font-bold border-b-2 border-yellow-500">Eammu Holidays</span>. Located in the heart of Business Bay.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 px-10 py-4 rounded-xl font-black text-lg transition-all transform hover:scale-105 shadow-xl shadow-yellow-500/20">
                Book Consultation
              </button>
              <a href="https://wa.me/971507078334" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all flex items-center gap-3">
                <MessageCircle size={22}/> WhatsApp Now
              </a>
            </div>
          </motion.div>
        </section>

        {/* Business Bay Location Card */}
        <section className="relative z-30 -mt-12 max-w-6xl mx-auto px-6">
           <div className="bg-white shadow-2xl rounded-3xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 border border-gray-100">
              <div className="flex items-center gap-4">
                 <div className="p-4 bg-yellow-100 rounded-2xl text-yellow-700"><MapPin size={30}/></div>
                 <div><h4 className="font-black text-slate-900">Location</h4><p className="text-sm text-gray-500">Business Bay, Dubai, UAE</p></div>
              </div>
              <div className="flex items-center gap-4 border-l-0 md:border-l md:pl-8">
                 <div className="p-4 bg-blue-100 rounded-2xl text-blue-700"><PhoneCall size={30}/></div>
                 <div><h4 className="font-black text-slate-900">Contact</h4><p className="text-sm text-gray-500">+971 50 707 8334</p></div>
              </div>
              <div className="flex items-center gap-4 border-l-0 md:border-l md:pl-8">
                 <div className="p-4 bg-green-100 rounded-2xl text-green-700"><Award size={30}/></div>
                 <div><h4 className="font-black text-slate-900">Experience</h4><p className="text-sm text-gray-500">100% Transparency</p></div>
              </div>
           </div>
        </section>

        {/* Details & SEO Content */}
        <section className="max-w-7xl mx-auto py-24 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" variants={fadeIn}>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                Your Trusted Global Partner in <span className="text-yellow-600">Business Bay</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                When searching for a <strong>travel agency in Dubai</strong>, reliability and speed are what matter most. At Eammu Holidays, we bridge the gap between your travel dreams and reality. 
              </p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Whether you are looking for a <strong>UAE Resident Visa</strong>, a luxury holiday in the Maldives, or complex <strong>Schengen, USA, or UK visa</strong> processing, our Business Bay consultants are available 24/7 to assist you.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['100% Success Rate', 'Golden Visa Expert', 'Luxury Tour Planner', '24/7 VIP Support'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 font-bold text-slate-800">
                    <CheckCircle size={20} className="text-yellow-500" /> {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Service Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <DubaiServiceCard 
                icon={<Landmark/>} 
                title="UAE Residency" 
                desc="Assistance for Golden Visa, Investor Visa, and Freelance permits." 
              />
              <DubaiServiceCard 
                icon={<ShieldCheck/>} 
                title="Global Visas" 
                desc="Specialized in Schengen, UK, Canada, and USA visas from Dubai." 
              />
              <DubaiServiceCard 
                icon={<Globe/>} 
                title="Schengen Tours" 
                desc="Exclusive European summer packages for Dubai residents." 
              />
              <DubaiServiceCard 
                icon={<Landmark/>} 
                title="Business Setup" 
                desc="Start your own company in Dubai with our expert legal help." 
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-slate-900 py-20 px-6 text-center">
           <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 underline decoration-yellow-500">Need Expert Advice?</h3>
              <p className="text-gray-400 text-xl mb-10 italic">"Our Business Bay office is always open for your travel needs."</p>
              <div className="flex justify-center gap-6">
                 <a href="tel:+971507078334" className="bg-yellow-500 px-12 py-5 rounded-full font-black text-xl hover:bg-yellow-600 transition-all flex items-center gap-3">
                   <PhoneCall/> Call Now
                 </a>
              </div>
           </div>
        </section>
      </main>
    </>
  );
};

// Reusable Dubai Service Card
const DubaiServiceCard = ({ icon, title, desc }) => (
  <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-50 hover:border-yellow-200 transition-all group">
    <div className="w-14 h-14 bg-slate-900 text-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-500 group-hover:text-slate-900 transition-colors">
      {React.cloneElement(icon, { size: 28 })}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
  </div>
);

export default TravelAgencyDubai;