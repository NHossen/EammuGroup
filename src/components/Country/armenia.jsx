import React from "react";
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle, Globe, Plane, ShieldCheck, MapPin, PhoneCall, MessageCircle, Mail, Clock, Briefcase, Camera, Building2 } from 'lucide-react';

const TravelAgencyArmenia = () => {
  const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  return (
    <>
    <Helmet>
  <title>Best And Top-Rated Travel Agency in Armenia | Eammu Holidays Yerevan</title>
  <meta 
    name="description" 
    content="Eammu Holidays, a leading travel agency in Yerevan, Armenia, offers 24/7 visa assistance, luxury Caucasus tours, hotel bookings, and corporate travel solutions. Expert support for tourism, business, and study visits." 
  />
  <meta 
    name="keywords" 
    content="travel agency in Armenia, Armenia visa assistance, Eammu Holidays Yerevan, Yerevan tour operator, Armenia tours, hotel booking Yerevan, Armenia transit visa, study in Armenia, Armenia travel services" 
  />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://eammu.com/travel-agency-armenia" />

  {/* Open Graph */}
  <meta property="og:title" content="Top Travel Agency in Armenia | Eammu Holidays Yerevan" />
  <meta 
    property="og:description" 
    content="Experience Armenia with Eammu Holidays. From visa processing to luxury tours, hotel bookings, and air tickets, we ensure seamless travel across Yerevan and beyond." 
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://eammu.com/travel-agency-armenia" />
  <meta 
    property="og:image" 
    content="https://eammu.com/eammuicon.jpg"/>

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Top Travel Agency in Armenia | Eammu Holidays Yerevan" />
  <meta 
    name="twitter:description" 
    content="Eammu Holidays provides expert travel and visa services in Yerevan, Armenia. Book Armenia tours, hotels, and air tickets with trusted local assistance." 
  />
  <meta 
    name="twitter:image" 
    content="https://www.trekgeorgia.com/wp-content/uploads/2019/04/armenia_h_00000220066588.ngsversion.1501784794813.adapt_.1900.1.jpg" 
  />

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "TravelAgency",
      "name": "Eammu Holidays",
      "url": "https://eammu.com/travel-agency-armenia",
      "logo": "https://www.eammu.com/images/logo.png",
      "sameAs": [
        "https://www.facebook.com/eammu",
        "https://www.linkedin.com/company/eammu",
        "https://www.instagram.com/eammu"
      ],
      "description": "Eammu Holidays, a top travel agency in Yerevan, Armenia, offering visa assistance, Armenia tours, hotel bookings, and corporate travel solutions.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Lambron 39",
        "addressLocality": "Yerevan",
        "addressCountry": "AM"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "telephone": "+37494810585",
        "email": "armenia@eammu.com"
      },
      "areaServed": "AM"
    })}
  </script>
</Helmet>


      <main className="bg-white text-slate-900 overflow-hidden pb-20">
        
        {/* Hero Section */}
        <section className="relative flex flex-col lg:flex-row items-center min-h-[75vh] border-b border-slate-100">
          <div className="w-full lg:w-1/2 bg-[#005a31] p-6 sm:p-12 lg:p-24 flex flex-col justify-center">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <span className="text-orange-500 font-bold tracking-widest uppercase text-xs mb-3 sm:mb-4 block">Certified Caucasus Experts</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 leading-snug sm:leading-tight">
                Premier Travel <br/> Agency in <span className="text-orange-400">Armenia</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-white/80 mb-6 sm:mb-10 max-w-md sm:max-w-lg leading-relaxed">
                Experience the magic of Yerevan with Eammu Holidays. From visa processing to luxury tours, we are your 24/7 partner at Lambron 39.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <button className="bg-orange-500 hover:bg-white hover:text-[#005a31] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold transition-all shadow-lg">
                  Explore Tours
                </button>
                <a href="https://wa.me/37494810585" className="border-2 border-white/30 text-white hover:bg-white hover:text-[#005a31] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold transition-all flex items-center gap-2">
                  <MessageCircle size={20}/> WhatsApp
                </a>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[75vh] relative">
            <img 
              src="https://www.trekgeorgia.com/wp-content/uploads/2019/04/armenia_h_00000220066588.ngsversion.1501784794813.adapt_.1900.1.jpg" 
              alt="Yerevan Armenia Skyline" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </section>

        {/* Office Contact Section */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <InfoCard icon={<MapPin/>} title="Office Location" desc="Lambron 39, Yerevan, Armenia" color="bg-[#005a31] text-white"/>
            <InfoCard icon={<PhoneCall/>} title="Phone & WhatsApp" desc="+374 94 810585" color="bg-orange-500 text-white"/>
            <InfoCard icon={<Mail/>} title="Email Address" desc="armenia@eammu.com" color="bg-[#005a31] text-white"/>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#005a31] mb-3 sm:mb-4">Unmatched Services in Yerevan</h2>
            <div className="w-16 sm:w-20 h-1.5 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <ServiceBlock icon={<ShieldCheck/>} title="Visa Support" desc="Expert support for Armenia Transit, Visit, and E-visas for all nationalities." />
            <ServiceBlock icon={<Camera/>} title="Armenia Tours" desc="Daily sightseeing tours to Lake Sevan, Garni, and Mount Ararat views." />
            <ServiceBlock icon={<Building2/>} title="Hotel Booking" desc="Access to exclusive hotel and apartment deals in Yerevan city center." />
            <ServiceBlock icon={<Plane/>} title="Air Tickets" desc="Domestic and international air ticketing with major carriers from EVN airport." />
          </div>
        </section>

        {// Add this section just after the Services Section
}
{/* Popular Armenia Tours */}
<section className="py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
  <div className="text-center mb-12 sm:mb-16">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#005a31] mb-3 sm:mb-4">Popular Armenia Tours</h2>
    <div className="w-16 sm:w-20 h-1.5 bg-orange-500 mx-auto"></div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
    {[
      { title: "Yerevan City Tour", duration: "1 Day", img: "https://visityerevan.am/media/images/7.JPG" },
      { title: "Lake Sevan & Dilijan", duration: "2 Days", img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/96/70/09.jpg" },
      { title: "Garni & Geghard Monastery", duration: "1 Day", img: "https://janarmenia.com/uploads/0000/687/2024/01/04/garni2.webp" },
      { title: "Mount Ararat View", duration: "1 Day", img: "https://app.conciergetravel.am/storage/uploads/2BQWKJpgB1nO4N1E6hfolAEOz7ymxy3paQe7WIGc.jpg" },
      { title: "Khor Virap & Areni Wine Tour", duration: "2 Days", img: "https://www.bidfortrip.com/uploads/0000/83/2021/07/17/khor-virap1.jpg" },
      { title: "Caucasus Adventure Tour", duration: "3 Days", img: "https://www.trekgeorgia.com/wp-content/uploads/2019/04/armenia_h_00000220066588.ngsversion.1501784794813.adapt_.1900.1.jpg" }
    ].map((tour, i) => (
      <div key={i} className="group bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-2xl transition-all">
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <img src={tour.img} alt={tour.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
        </div>
        <div className="p-6 sm:p-8">
          <h3 className="text-lg sm:text-xl font-bold text-[#005a31] mb-2">{tour.title}</h3>
          <p className="text-sm sm:text-base text-gray-500 mb-4">{tour.duration}</p>
          <a 
            href="https://wa.me/37494810585" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base transition-all"
          >
            Book Now
          </a>
        </div>
      </div>
    ))}
  </div>
</section>


        {/* SEO & FAQ Section */}
        <section className="bg-[#fcfcfc] py-16 sm:py-24 px-4 sm:px-6 border-y border-slate-100">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 sm:gap-20 items-start">
            <div className="lg:w-1/2">
              <h3 className="text-sm sm:text-base font-bold text-orange-500 mb-2 sm:mb-4 uppercase tracking-widest">Why Choose Us</h3>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#005a31] mb-6 sm:mb-8 leading-snug sm:leading-tight">Expert Travel Agent in the Heart of Armenia</h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                As a leading <strong>travel agency in Armenia</strong>, Eammu Holidays bridges the gap between travelers and local experiences. Whether visiting for tourism, business, or education, our team ensures a smooth journey from Lambron 39, Yerevan.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {["24/7 Local Presence", "Fluent Bengali/English Staff", "Verified Accommodations", "Fast Visa Processing"].map((text, i) => (
                  <div key={i} className="flex items-center gap-2 sm:gap-3 font-bold text-[#005a31] text-sm sm:text-base">
                    <CheckCircle className="text-orange-500" size={16}/> {text}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 bg-white p-6 sm:p-10 rounded-3xl shadow-xl border border-slate-100">
              <h4 className="text-xl sm:text-2xl font-bold text-[#005a31] mb-6 sm:mb-8 border-b-2 border-orange-500 pb-2 inline-block">Travelers FAQ</h4>
              <div className="space-y-6 sm:space-y-8">
                <div className="group">
                  <h5 className="font-bold text-slate-800 group-hover:text-orange-500 transition-colors cursor-pointer text-sm sm:text-base">How long does Armenia visa take?</h5>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1 sm:mt-2">E-visa usually takes 3-5 working days. Our consultants handle the documentation for you.</p>
                </div>
                <div className="group pt-4 sm:pt-6 border-t border-slate-100">
                  <h5 className="font-bold text-slate-800 group-hover:text-orange-500 transition-colors cursor-pointer text-sm sm:text-base">Do you provide airport transfers?</h5>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1 sm:mt-2">Yes, we provide 24/7 pick-up and drop-off services at Zvartnots International Airport.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky WhatsApp Button Mobile */}
        <a href="https://wa.me/37494810585" className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 p-4 sm:p-5 rounded-full shadow-xl flex items-center justify-center z-50 md:hidden transition-all">
          <MessageCircle className="text-white" size={24}/>
        </a>
      </main>
    </>
  );
};

const ServiceBlock = ({ icon, title, desc }) => (
  <div className="group bg-white p-6 sm:p-10 rounded-2xl border border-slate-100 hover:border-orange-500 hover:shadow-2xl transition-all">
    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#005a31] text-white rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-orange-500 transition-colors">
      {React.cloneElement(icon, { size: 24 })}
    </div>
    <h3 className="text-lg sm:text-xl font-bold text-[#005a31] mb-2 sm:mb-3">{title}</h3>
    <p className="text-slate-500 text-sm sm:text-base leading-relaxed">{desc}</p>
  </div>
);

const InfoCard = ({ icon, title, desc, color }) => (
  <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-slate-50 rounded-2xl border border-slate-100">
    <div className={`p-3 sm:p-4 ${color} rounded-xl flex items-center justify-center flex-shrink-0`}>
      {React.cloneElement(icon, { size: 20 })}
    </div>
    <div>
      <h4 className="text-xs sm:text-sm font-bold text-gray-500">{title}</h4>
      <p className="font-bold text-sm sm:text-base">{desc}</p>
    </div>
  </div>
);

export default TravelAgencyArmenia;
