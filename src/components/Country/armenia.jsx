import React from "react";
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle, Globe, Plane, ShieldCheck, MapPin, PhoneCall, MessageCircle, Mail, Clock, Briefcase, Camera, Building2 } from 'lucide-react';

const TravelAgencyArmenia = () => {
  const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  return (
    <>
      <Helmet>
        <title>Top-Rated Travel Agency in Armenia | Eammu Holidays Yerevan</title>
        <meta name="description" content="Looking for a travel agency in Armenia? Eammu Holidays at Lambron 39, Yerevan offers 24/7 visa consultancy, luxury Caucasus tours, and corporate travel solutions." />
        <meta name="keywords" content="travel agency in Armenia, Armenia visa assistance, Eammu Holidays Yerevan, Yerevan tour operator, study in Armenia, Armenia transit visa" />
        <link rel="canonical" href="https://eammu.com/travel-agency-armenia" />
      </Helmet>

      <main className="bg-white text-slate-900 overflow-hidden pb-20">
        
        {/* Modern Split Hero Section */}
        <section className="relative min-h-[75vh] flex flex-col lg:flex-row items-center border-b border-slate-100">
          <div className="w-full lg:w-1/2 bg-[#005a31] p-8 md:p-16 lg:p-24 flex flex-col justify-center">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <span className="text-orange-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Certified Caucasus Experts</span>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                Premier Travel <br/> Agency in <span className="text-orange-400">Armenia</span>
              </h1>
              <p className="text-lg text-white/80 mb-10 max-w-lg leading-relaxed">
                Experience the magic of Yerevan with Eammu Holidays. From visa processing to luxury tours, we are your 24/7 partner at Lambron 39.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-orange-500 hover:bg-white hover:text-[#005a31] text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg">
                  Explore Tours
                </button>
                <a href="https://wa.me/37494810585" className="border-2 border-white/30 text-white hover:bg-white hover:text-[#005a31] px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2">
                  <MessageCircle size={20}/> WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
          
          <div className="w-full lg:w-1/2 h-[350px] lg:h-[75vh] relative">
            <img 
              src="https://images.unsplash.com/photo-1545062990-4a95e8e4b96d?auto=format&fit=crop&q=80" 
              alt="Yerevan Armenia Skyline" 
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Local Office Contact Details - Replaced the Footer */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                 <div className="p-4 bg-[#005a31] text-white rounded-xl"><MapPin size={24}/></div>
                 <div><h4 className="text-xs uppercase font-bold text-gray-500">Office Location</h4><p className="font-bold text-[#005a31]">Lambron 39, Yerevan, Armenia</p></div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                 <div className="p-4 bg-orange-500 text-white rounded-xl"><PhoneCall size={24}/></div>
                 <div><h4 className="text-xs uppercase font-bold text-gray-500">Phone & WhatsApp</h4><p className="font-bold text-slate-800">+374 94 810585</p></div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                 <div className="p-4 bg-[#005a31] text-white rounded-xl"><Mail size={24}/></div>
                 <div><h4 className="text-xs uppercase font-bold text-gray-500">Email Address</h4><p className="font-bold text-slate-800">armenia@eammu.com</p></div>
              </div>
           </div>
        </section>

        {/* Dynamic Services Section */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#005a31] mb-4">Unmatched Services in Yerevan</h2>
            <div className="w-20 h-1.5 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceBlock icon={<ShieldCheck/>} title="Visa Support" desc="Expert support for Armenia Transit, Visit, and E-visas for all nationalities." />
            <ServiceBlock icon={<Camera/>} title="Armenia Tours" desc="Daily sightseeing tours to Lake Sevan, Garni, and Mount Ararat views." />
            <ServiceBlock icon={<Building2/>} title="Hotel Booking" desc="Access to exclusive hotel and apartment deals in Yerevan city center." />
            <ServiceBlock icon={<Plane/>} title="Air Tickets" desc="Domestic and international air ticketing with major carriers from EVN airport." />
          </div>
        </section>

        {/* SEO Detail Section */}
        <section className="bg-[#fcfcfc] py-24 px-6 border-y border-slate-100">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-start">
            <div className="lg:w-1/2">
              <h3 className="text-xl font-bold text-orange-500 mb-4 uppercase tracking-widest">Why Choose Us</h3>
              <h2 className="text-4xl font-black text-[#005a31] mb-8 leading-tight">Expert Travel Agent in the Heart of Armenia</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                As a leading <strong>travel agency in Armenia</strong>, Eammu Holidays bridges the gap between travelers and local experiences. Whether you are visiting for tourism, business, or education, our team at <strong>Lambron 39, Yerevan</strong> ensures a smooth journey.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["24/7 Local Presence", "Fluent Bengali/English Staff", "Verified Accommodations", "Fast Visa Processing"].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 font-bold text-[#005a31]">
                    <CheckCircle className="text-orange-500" size={18}/> {text}
                  </div>
                ))}
              </div>
            </div>
            
            {/* FAQ / Quick Contact Block */}
            <div className="lg:w-1/2 bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
               <h4 className="text-2xl font-bold text-[#005a31] mb-8 border-b-2 border-orange-500 pb-2 inline-block">Travelers FAQ</h4>
               <div className="space-y-8">
                  <div className="group">
                    <h5 className="font-black text-slate-800 group-hover:text-orange-500 transition-colors cursor-pointer">How long does Armenia visa take?</h5>
                    <p className="text-slate-600 text-sm mt-2">E-visa usually takes 3-5 working days. Our consultants handle the documentation for you.</p>
                  </div>
                  <div className="group pt-6 border-t border-slate-100">
                    <h5 className="font-black text-slate-800 group-hover:text-orange-500 transition-colors cursor-pointer">Do you provide airport transfers?</h5>
                    <p className="text-slate-600 text-sm mt-2">Yes, we provide 24/7 pick-up and drop-off services at Zvartnots International Airport.</p>
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

export default TravelAgencyArmenia;