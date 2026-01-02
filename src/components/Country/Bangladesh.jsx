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
        <title>Best Travel Agency in Bangladesh 2026 | Eammu Holidays - Cumilla & Dhaka</title>
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
            }
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[98vh] flex items-center justify-center overflow-hidden bg-[#005a31]">
          <div className="absolute inset-0 z-0 opacity-30">
             <img src="https://images.unsplash.com/photo-1590603740183-980e7f6920eb?auto=format&fit=crop&q=80" alt="Travel Agency in Bangladesh" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b z-10"></div>
          
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="relative z-20 text-center px-4 max-w-5xl">
            <span className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-8 inline-block shadow-xl">
              Trusted Excellence Since 2022
            </span>
            <h1 className="text-5xl md:text-5xl font-black mb-8 text-white leading-tight">
              Leading Travel Agency <br/><span className="text-orange-500 underline decoration-white">in Bangladesh</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 font-light max-w-3xl mx-auto leading-relaxed">
               ভিসা প্রসেসিং থেকে শুরু করে বিশ্বভ্রমণ—আপনার প্রতিটি স্বপ্ন পূরণে <span className="font-bold text-orange-500 italic">Eammu Holidays</span> আছে আপনার পাশে।
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-2xl">প্যাকেজ দেখুন</button>
              <a href="tel:+8801701699743" className="bg-white hover:bg-gray-100 text-[#005a31] px-10 py-4 rounded-xl font-bold text-lg transition-all flex items-center gap-2">
                <PhoneCall size={20}/> কল করুন
              </a>
            </div>
          </motion.div>
        </section>

        {/* Info Cards (Spacing Fixed) */}
        <section className="relative z-30 -mt-20 max-w-7xl mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-2xl flex items-center gap-6 border-b-4 border-orange-500 transform hover:-translate-y-2 transition-transform">
               <div className="w-16 h-16 bg-[#005a31]/10 text-[#005a31] rounded-2xl flex items-center justify-center flex-shrink-0"><MapPin size={32}/></div>
               <div><h4 className="font-black text-[#005a31] uppercase text-xs tracking-widest mb-1">আমাদের অফিস</h4><p className="text-gray-800 font-bold leading-tight">গোমতী টাওয়ার, কুমিল্লা।</p></div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-2xl flex items-center gap-6 border-b-4 border-[#005a31] transform hover:-translate-y-2 transition-transform">
               <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0"><PhoneCall size={32}/></div>
               <div><h4 className="font-black text-gray-500 uppercase text-xs tracking-widest mb-1">হটলাইন</h4><p className="text-gray-800 font-bold leading-tight">+8801701699743</p></div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-2xl flex items-center gap-6 border-b-4 border-orange-500 transform hover:-translate-y-2 transition-transform">
               <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center flex-shrink-0"><MessageCircle size={32}/></div>
               <div><h4 className="font-black text-gray-500 uppercase text-xs tracking-widest mb-1">হোয়াটসঅ্যাপ</h4><p className="text-gray-800 font-bold leading-tight">+8801631312524</p></div>
            </div>
          </div>
        </section>

        {/* Content Section with Correct Spacing */}
        <section className="max-w-7xl mx-auto py-24 px-6 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" variants={fadeIn}>
              <h2 className="text-4xl md:text-4xl font-black text-[#005a31] mb-6 leading-tight">
                কেন ইম্মু হলিডেজ বাংলাদেশের <br/> <span className="text-orange-500">সেরা ট্রাভেল এজেন্সি?</span>
              </h2>
              <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                বাংলাদেশে শতশত ট্রাভেল এজেন্সি থাকলেও, নির্ভুল ফাইল প্রসেসিং এবং শতভাগ সততার জন্য **Eammu Holidays** আজ একটি বিশ্বস্ত নাম। আমরা শুধু বিদেশ পাঠাই না, বরং আপনার ক্যারিয়ার এবং ভ্রমণের প্রতিটি সিদ্ধান্তকে অর্থবহ করে তুলি।
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "১০০% বিশ্বস্ত ভিসা প্রসেসিং", desc: "দীর্ঘ বছরের অভিজ্ঞতা ও উচ্চ সাফল্যের হার।" },
                  { title: "কাস্টমাইজড ট্যুর প্ল্যান", desc: "আপনার বাজেট অনুযায়ী সেরা ট্যুর প্যাকেজ।" },
                  { title: "অভিজ্ঞ কনসালট্যান্ট", desc: "এক্সপার্টদের সরাসরি তত্ত্বাবধানে ফাইল প্রসেস।" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-5 p-6 rounded-2xl bg-slate-50 border-l-8 border-[#005a31]">
                    <CheckCircle className="text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-[#005a31] text-xl">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureCard icon={<Globe />} title="Student Visa" desc="USA, UK, Canada ও ইউরোপের সেরা ইউনিভার্সিটিতে ভর্তি।" color="bg-[#005a31]" />
              <FeatureCard icon={<Plane />} title="Air Ticketing" desc="সব এয়ারলাইন্সের টিকিট সাশ্রয়ী মূল্যে দ্রুততম সময়ে।" color="bg-orange-500" />
              <FeatureCard icon={<ShieldCheck />} title="Visit Visa" desc="দুবাই, থাইল্যান্ড ও সিঙ্গাপুরের ভিসা প্রসেসিং।" color="bg-orange-500" />
              <FeatureCard icon={<MapPin />} title="Expert Guide" desc="ট্যুর চলাকালীন প্রতিটি ধাপে প্রফেশনাল গাইড সাপোর্ট।" color="bg-[#005a31]" />
            </motion.div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="bg-[#005a31] py-24 px-6 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white leading-tight">আপনার স্বপ্নের যাত্রা শুরু হোক আজই!</h2>
            <div className="flex flex-wrap justify-center gap-12 mb-16">
               <div className="flex flex-col items-center gap-3">
                  <Mail className="text-orange-500" size={40} />
                  <p className="text-xl font-medium tracking-wide">bangladesh@eammu.com</p>
               </div>
               <div className="flex flex-col items-center gap-3">
                  <Clock className="text-orange-500" size={40} />
                  <p className="text-xl font-medium tracking-wide">শনি - বৃহস্পতি (১০ AM - ৭ PM)</p>
               </div>
            </div>
            <a href="https://wa.me/8801631312524" className="inline-flex items-center gap-4 bg-orange-500 hover:bg-orange-600 text-white px-12 py-6 rounded-full font-black text-2xl transition-all shadow-2xl hover:scale-105">
               <MessageCircle size={32}/> হোয়াটসঅ্যাপে মেসেজ দিন
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

const FeatureCard = ({ icon, title, desc, color }) => (
  <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }} className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 group hover:shadow-2xl transition-all">
    <div className={`${color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:rotate-12 transition-transform shadow-lg`}>
      {React.cloneElement(icon, { size: 32 })}
    </div>
    <h3 className="text-2xl font-bold text-[#005a31] mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed text-base">{desc}</p>
  </motion.div>
);

export default TravelAgencyBangladesh;