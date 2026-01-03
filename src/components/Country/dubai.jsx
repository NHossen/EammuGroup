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
            ],
            "openingHours": "Mo-Su 10:00-19:00"
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-[#fcfcfc]">
        {/* Hero Section */}
        <section className="relative h-[95vh] flex items-center justify-center overflow-hidden bg-slate-900">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80" 
              alt="Dubai Skyline Business Bay" 
              className="w-full h-full object-cover opacity-50 scale-105"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-slate-900 z-10"></div>

          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="relative z-20 text-center px-4 sm:px-6 max-w-6xl">
            <div className="flex justify-center mb-4 sm:mb-6">
               <span className="bg-yellow-500/20 text-yellow-500 border border-yellow-500/50 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest">
                 Premium Travel Solutions
               </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-white leading-snug sm:leading-tight uppercase">
              Travel Agency <br/><span className="text-yellow-500">in Dubai</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-10 font-light max-w-3xl mx-auto leading-relaxed">
              Experience seamless global travel and visa processing with <span className="font-bold border-b-2 border-yellow-500">Eammu Holidays</span>. Located in the heart of Business Bay.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-black text-base sm:text-lg transition-all transform hover:scale-105 shadow-xl shadow-yellow-500/20">
                Book Consultation
              </button>
              <a href="https://wa.me/971507078334" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all flex items-center gap-2 sm:gap-3">
                <MessageCircle size={20}/> WhatsApp Now
              </a>
            </div>
          </motion.div>
        </section>

        {/* Info Cards */}
        <section className="relative z-30 -mt-10 sm:-mt-12 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-white shadow-2xl rounded-3xl p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 border border-gray-100">
            <DubaiInfoCard icon={<MapPin/>} title="Location" desc="Business Bay, Dubai, UAE" color="bg-yellow-100 text-yellow-700"/>
            <DubaiInfoCard icon={<PhoneCall/>} title="Contact" desc="+971 50 707 8334" color="bg-blue-100 text-blue-700"/>
            <DubaiInfoCard icon={<Award/>} title="Experience" desc="100% Transparency" color="bg-green-100 text-green-700"/>
          </div>
        </section>

        {/* Services & SEO Content */}
        <section className="max-w-7xl mx-auto py-16 sm:py-20 px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" variants={fadeIn}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-4 sm:mb-6 leading-snug sm:leading-tight">
                Your Trusted Global Partner in <span className="text-yellow-600">Business Bay</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                When searching for a <strong>travel agency in Dubai</strong>, reliability and speed are key. Eammu Holidays bridges your travel dreams with reality.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-10 leading-relaxed">
                From <strong>UAE Resident Visa</strong> to luxury tours and complex <strong>Schengen, USA, UK visas</strong>, our Business Bay consultants are ready to assist 24/7.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {['100% Success Rate', 'Golden Visa Expert', 'Luxury Tour Planner', '24/7 VIP Support'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 sm:gap-3 font-bold text-slate-800 text-sm sm:text-base">
                    <CheckCircle size={16} className="text-yellow-500"/> {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Service Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <DubaiServiceCard icon={<Landmark/>} title="UAE Residency" desc="Assistance for Golden Visa, Investor Visa, and Freelance permits."/>
              <DubaiServiceCard icon={<ShieldCheck/>} title="Global Visas" desc="Specialized in Schengen, UK, Canada, and USA visas from Dubai."/>
              <DubaiServiceCard icon={<Globe/>} title="Schengen Tours" desc="Exclusive European summer packages for Dubai residents."/>
              <DubaiServiceCard icon={<Landmark/>} title="Business Setup" desc="Start your own company in Dubai with our expert legal help."/>
            </div>
          </div>
        </section>

        {/* Popular Dubai Tours */}
<section className="py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
  <div className="text-center mb-12 sm:mb-16">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#005a31] mb-3 sm:mb-4">Popular Dubai Tours</h2>
    <div className="w-16 sm:w-20 h-1.5 bg-yellow-500 mx-auto"></div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
    {[
      { title: "Burj Khalifa & Dubai Mall", duration: "Half Day", img: "https://climatecontrol.imiplc.com/_next/image?url=https%3A%2F%2Fcdn.tessa.imihy.eimed-project.de%2F621346%2FWeb_Header%2FBurj_Khalifa_Tower.webp&w=3840&q=75" },
      { title: "Desert Safari Adventure", duration: "1 Day", img: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/13/bb/6a/7b.jpg" },
      { title: "Dubai Marina Cruise", duration: "Evening", img: "https://www.pelago.com/img/products/AE-United%20Arab%20Emirates/dubai-marina-dhow-cruise-dinner-with-entertainment/036dfefa-c682-4f9e-8d85-72fda3b852f7_dubai-marina-dhow-cruise-dinner-with-entertainment.jpg" },
      { title: "Palm Jumeirah Tour", duration: "Half Day", img: "https://res.klook.com/image/upload/w_750,h_469,c_fill,q_85/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/f9cxlacfjbuydsfrl4ke.jpg" },
      { title: "Global Village Experience", duration: "Evening", img: "https://faredxb.com/wp-content/uploads/2024/10/1-12.jpg" },
      { title: "Abu Dhabi Day Trip", duration: "Full Day", img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/11/f7/6d/f8.jpg" }
    ].map((tour, i) => (
      <div key={i} className="group bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-2xl transition-all">
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <img src={tour.img} alt={tour.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
        </div>
        <div className="p-6 sm:p-8">
          <h3 className="text-lg sm:text-xl font-bold text-[#005a31] mb-2">{tour.title}</h3>
          <p className="text-sm sm:text-base text-gray-500 mb-4">{tour.duration}</p>
          <a 
            href="https://wa.me/971507078334" 
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base transition-all"
          >
            Book Now
          </a>
        </div>
      </div>
    ))}
  </div>
</section>


        {/* CTA */}
        <section className="bg-slate-900 py-16 sm:py-20 px-4 sm:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 underline decoration-yellow-500">Need Expert Advice?</h3>
            <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-10 italic">"Our Business Bay office is always open for your travel needs."</p>
            <div className="flex justify-center gap-4 sm:gap-6">
              <a href="tel:+971507078334" className="bg-yellow-500 px-8 sm:px-12 py-3 sm:py-5 rounded-full font-black text-lg sm:text-xl hover:bg-yellow-600 transition-all flex items-center gap-2 sm:gap-3">
                <PhoneCall size={20}/> Call Now
              </a>
            </div>
          </div>
        </section>

        {/* Sticky WhatsApp CTA Mobile */}
        <a href="https://wa.me/971507078334" className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 p-4 sm:p-5 rounded-full shadow-xl flex items-center justify-center z-50 md:hidden transition-all">
          <MessageCircle className="text-white" size={24}/>
        </a>
      </main>
    </>
  );
};

// Dubai Service Card
const DubaiServiceCard = ({ icon, title, desc }) => (
  <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-50 hover:border-yellow-200 transition-all group">
    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-900 text-yellow-500 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-yellow-500 group-hover:text-slate-900 transition-colors">
      {React.cloneElement(icon, { size: 24 })}
    </div>
    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">{title}</h3>
    <p className="text-sm sm:text-base text-gray-500 leading-relaxed">{desc}</p>
  </div>
);

// Dubai Info Card
const DubaiInfoCard = ({ icon, title, desc, color }) => (
  <div className={`flex items-center gap-3 sm:gap-4`}>
    <div className={`p-3 sm:p-4 ${color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
      {React.cloneElement(icon, { size: 22 })}
    </div>
    <div>
      <h4 className="font-bold text-slate-900 text-sm sm:text-base">{title}</h4>
      <p className="text-gray-500 text-xs sm:text-sm">{desc}</p>
    </div>
  </div>
);

export default TravelAgencyDubai;
