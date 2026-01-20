import React from "react";
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle, Globe, Plane, ShieldCheck, MapPin, PhoneCall, MessageCircle, Mail, Clock } from 'lucide-react';

const TravelAgencyBangladesh = () => {
  const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };

  return (
    <>
      <Helmet>
        <title>Best Travel Agency in Bangladesh | Eammu Holidays - Dhaka and Bangladesh</title>
        <meta name="description" content="Eammu Holidays: Top-rated travel agency in Bangladesh. Expert in Student Visa, Visit Visa & Tours. Visit our Cumilla office at Gomoti Tower for reliable consultancy." />
        <meta name="keywords" content="travel agency in Bangladesh, best travel agency in Cumilla, visa consultant Bangladesh, Eammu Holidays, Gomoti Tower Cumilla travel agency" />
        <link rel="canonical" href="https://eammu.com/travel-agency-bangladesh" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            "name": "Eammu Holidays Bangladesh",
            "image": "https://i.ibb.co/YF7bmqfg/logo.jpg",
            "url": "https://eammu.com/travel-agency-bangladesh",
            "telephone": "+8801701699743",
            "email": "bangladesh@eammu.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Office No-178, 1st Floor, Gomoti Tower, Cantonment",
              "addressLocality": "Cumilla",
              "addressCountry": "BD"
            },
            "openingHours": "Mo-Fr 10:00-19:00",
            "sameAs": [
              "https://www.facebook.com/eammu",
              "https://www.instagram.com/eammu",
              "https://www.linkedin.com/company/eammu",
              "https://www.youtube.com/@eammu"
            ],
            "faq": [
              {
                "@type": "Question",
                "name": "Eammu Holidays কি ধরণের ভিসা সেবা প্রদান করে?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "আমরা Student Visa, Visit Visa, Tourist Visa এবং Work Permit প্রক্রিয়ায় সহায়তা করি।"
                }
              },
              {
                "@type": "Question",
                "name": "আপনার অফিস কোথায়?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "আমাদের অফিস রয়েছে গোমতী টাওয়ার, কুমিল্লা।"
                }
              },
              {
                "@type": "Question",
                "name": "WhatsApp অথবা কল কিভাবে যোগাযোগ করতে পারি?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "WhatsApp: +8801631312524, Hotline: +8801701699743"
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-white relative">
        {/* Hero Section */}
        <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-30">
            <img 
              src="https://images.unsplash.com/photo-1590603740183-980e7f6920eb?auto=format&fit=crop&q=80" 
              alt="Travel Agency in Bangladesh - Eammu Holidays" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#005a31]/70 to-[#005a31]/80 z-10"></div>

          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="relative z-20 text-center px-4 max-w-5xl">
            <span className="bg-orange-500 text-white px-6 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest mb-6 inline-block shadow-xl">
              Trusted Excellence Since 2022
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 sm:mb-8 text-white leading-snug sm:leading-tight">
              Leading Travel Agency <br/><span className="text-orange-500 underline decoration-white">in Bangladesh</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-12 font-light max-w-3xl mx-auto leading-relaxed">
              ভিসা প্রসেসিং থেকে বিশ্বভ্রমণ—আপনার প্রতিটি স্বপ্ন পূরণে <span className="font-bold text-orange-500 italic">Eammu Holidays</span> আছে আপনার পাশে।
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all shadow-2xl">
                প্যাকেজ দেখুন
              </button>
              <a href="tel:+8801701699743" className="bg-white hover:bg-gray-100 text-[#005a31] px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all flex items-center gap-2">
                <PhoneCall size={18}/> কল করুন
              </a>
            </div>
          </motion.div>
        </section>

        {/* Info Cards */}
        <section className="relative z-30 -mt-16 sm:-mt-20 max-w-7xl mx-auto px-4 sm:px-6 mb-16 sm:mb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <InfoCard icon={<MapPin />} title="আমাদের অফিস" desc="গোমতী টাওয়ার, কুমিল্লা।" color="bg-[#005a31]/10 text-[#005a31]" border="border-orange-500" />
            <InfoCard icon={<PhoneCall />} title="হটলাইন" desc="+8801701699743" color="bg-orange-50 text-orange-600" border="border-[#005a31]" />
            <InfoCard icon={<MessageCircle />} title="হোয়াটসঅ্যাপ" desc="+8801631312524" color="bg-green-50 text-green-600" border="border-orange-500" />
          </div>
        </section>

        {/* Features */}
        <section className="max-w-7xl mx-auto py-16 sm:py-20 px-4 sm:px-6 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" variants={fadeIn}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#005a31] mb-4 sm:mb-6 leading-snug sm:leading-tight">
                কেন ইম্মু হলিডেজ বাংলাদেশের <br/> <span className="text-orange-500">সেরা ট্রাভেল এজেন্সি?</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-10 leading-relaxed">
                বাংলাদেশে শতশত ট্রাভেল এজেন্সি থাকলেও, নির্ভুল ফাইল প্রসেসিং এবং শতভাগ সততার জন্য <strong>Eammu Holidays</strong> আজ একটি বিশ্বস্ত নাম। আমরা শুধু বিদেশ পাঠাই না, বরং আপনার ক্যারিয়ার এবং ভ্রমণের প্রতিটি সিদ্ধান্তকে অর্থবহ করে তুলি।
              </p>

              <div className="space-y-4 sm:space-y-6">
                {[
                  { title: "১০০% বিশ্বস্ত ভিসা প্রসেসিং", desc: "দীর্ঘ বছরের অভিজ্ঞতা ও উচ্চ সাফল্যের হার।" },
                  { title: "কাস্টমাইজড ট্যুর প্ল্যান", desc: "আপনার বাজেট অনুযায়ী সেরা ট্যুর প্যাকেজ।" },
                  { title: "অভিজ্ঞ কনসালট্যান্ট", desc: "এক্সপার্টদের সরাসরি তত্ত্বাবধানে ফাইল প্রসেস।" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 sm:gap-5 p-4 sm:p-6 rounded-2xl bg-slate-50 border-l-4 sm:border-l-8 border-[#005a31]">
                    <CheckCircle className="text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-[#005a31] text-lg sm:text-xl">{item.title}</h4>
                      <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <FeatureCard icon={<Globe />} title="Student Visa" desc="USA, UK, Canada ও ইউরোপের সেরা ইউনিভার্সিটিতে ভর্তি।" color="bg-[#005a31]" />
              <FeatureCard icon={<Plane />} title="Air Ticketing" desc="সব এয়ারলাইন্সের টিকিট সাশ্রয়ী মূল্যে দ্রুততম সময়ে।" color="bg-orange-500" />
              <FeatureCard icon={<ShieldCheck />} title="Visit Visa" desc="দুবাই, থাইল্যান্ড ও সিঙ্গাপুরের ভিসা প্রসেসিং।" color="bg-orange-500" />
              <FeatureCard icon={<MapPin />} title="Expert Guide" desc="ট্যুর চলাকালীন প্রতিটি ধাপে প্রফেশনাল গাইড সাপোর্ট।" color="bg-[#005a31]" />
            </motion.div>
          </div>
        </section>

        {/* Popular Bangladesh Tours */}
<section className="py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
  <div className="text-center mb-12 sm:mb-16">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#005a31] mb-3 sm:mb-4">Popular Bangladesh Tours</h2>
    <div className="w-16 sm:w-20 h-1.5 bg-yellow-500 mx-auto"></div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
    {[
      { title: "Sundarbans Mangrove Tour", duration: "2 Days", img: "https://www.yoyotripsindia.com/images/package/eoHG24yCWc/banner3.jpg" },
      { title: "Cox's Bazar Beach Trip", duration: "1 Day", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80" },
      { title: "Srimangal Tea Gardens", duration: "1 Day", img: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/32/d3/98.jpg" },
      { title: "Dhaka Heritage Walk", duration: "1 Day", img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0f/5e/1a/6b.jpg" },
      { title: "Rangamati Hill Tour", duration: "2 Days", img: "https://www.travelmate.com.bd/wp-content/uploads/2018/07/maxresdefault-2.jpg" },
      { title: "Sajek Valley Adventure", duration: "2 Days", img: "https://ttg.com.bd/uploads/tours/destinations/6444446K.jpg" }
    ].map((tour, i) => (
      <div key={i} className="group bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-2xl transition-all">
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <img src={tour.img} alt={tour.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
        </div>
        <div className="p-6 sm:p-8">
          <h3 className="text-lg sm:text-xl font-bold text-[#005a31] mb-2">{tour.title}</h3>
          <p className="text-sm sm:text-base text-gray-500 mb-4">{tour.duration}</p>
          <a 
            href="https://wa.me/880123456789" 
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base transition-all"
          >
            Book Now
          </a>
        </div>
      </div>
    ))}
  </div>
</section>


        {/* Footer CTA */}
        <section className="bg-[#005a31] py-16 sm:py-24 px-4 sm:px-6 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 text-white leading-snug sm:leading-tight">আপনার স্বপ্নের যাত্রা শুরু হোক আজই!</h2>
            <div className="flex flex-wrap justify-center gap-8 sm:gap-12 mb-12 sm:mb-16">
               <div className="flex flex-col items-center gap-2 sm:gap-3">
                  <Mail className="text-orange-500" size={32} />
                  <p className="text-lg sm:text-xl font-medium tracking-wide">bangladesh@eammu.com</p>
               </div>
               <div className="flex flex-col items-center gap-2 sm:gap-3">
                  <Clock className="text-orange-500" size={32} />
                  <p className="text-lg sm:text-xl font-medium tracking-wide">শনি - বৃহস্পতি (১০ AM - ৭ PM)</p>
               </div>
            </div>
            <a href="https://wa.me/8801631312524" className="inline-flex items-center gap-3 sm:gap-4 bg-orange-500 hover:bg-orange-600 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-full font-black text-xl sm:text-2xl transition-all shadow-2xl hover:scale-105">
               <MessageCircle size={28} /> হোয়াটসঅ্যাপে মেসেজ দিন
            </a>
          </div>
        </section>

        {/* Sticky WhatsApp CTA Mobile */}
        <a href="https://wa.me/8801631312524" className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 p-4 sm:p-5 rounded-full shadow-xl flex items-center justify-center z-50 md:hidden transition-all">
          <MessageCircle className="text-white" size={28} />
        </a>
      </main>
    </>
  );
};

const FeatureCard = ({ icon, title, desc, color }) => (
  <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }} className="bg-white p-6 sm:p-10 rounded-[2.5rem] shadow-xl border border-gray-100 group hover:shadow-2xl transition-all">
    <div className={`${color} w-12 sm:w-16 h-12 sm:h-16 rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-8 group-hover:rotate-12 transition-transform shadow-lg`}>
      {React.cloneElement(icon, { size: 24 })}
    </div>
    <h3 className="text-xl sm:text-2xl font-bold text-[#005a31] mb-2 sm:mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{desc}</p>
  </motion.div>
);

const InfoCard = ({ icon, title, desc, color, border }) => (
  <div className={`bg-white p-4 sm:p-8 rounded-3xl shadow-2xl flex items-center gap-4 sm:gap-6 border-b-4 ${border} transform hover:-translate-y-1 sm:hover:-translate-y-2 transition-transform`}>
    <div className={`w-12 sm:w-16 h-12 sm:h-16 ${color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
      {React.cloneElement(icon, { size: 24 })}
    </div>
    <div>
      <h4 className="font-black text-gray-500 uppercase text-xs sm:text-xs tracking-widest mb-1">{title}</h4>
      <p className="text-gray-800 font-bold text-sm sm:text-base leading-tight">{desc}</p>
    </div>
  </div>
);

export default TravelAgencyBangladesh;
