import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WhyChoiceEammu = () => {
  const [activeTab, setActiveTab] = useState("mission");

  const values = [
    { id: "mission", title: "Mission", icon: "🎯", text: "Eammu Holidays provides inbound and outbound tour operate. Inbound tours provide experience guide, standard and any category’s hotel, best tours spot selection and your security. Holidays are meant for relaxation, to rejuvenate your energy moreover to spend your quality time with your loved ones and it is imperative to have the best Tour Operator to be your travel planner, who has got the experience, Infrastructure, commitment and who is a real professional to plan your valuable Tour." },
    { id: "vision", title: "Vision", icon: "👁️", text: "To be the leading ethical travel partner in Bangladesh and the UAE, known for transparency and excellence." },
    { id: "customer", title: "Focus On Customer", icon: "✅", text: "Eammu Holidaysis leading tour operator of Bangladesh. Eammu Holidays is established in 2022 with a view to develop sustainable tours to various destinations in this beautiful Bangladesh and as such you can meet the generous peoples of this country. Our team is committed to give you a new light of tourism experiences which you had never before." },
    { id: "promise", title: "Our Promise", icon: "🤝", text: "We’re your partner in the journey of life abroad. From day one to departure and beyond, Eammu Holidays stands with you." },
  ];

  const features = [
    { title: "6+ Years of Experience", text: "Reliable and ethical visa consulting across Bangladesh and UAE.", icon: "✅" },
    { title: "Student Visa Experts", text: "Secure study permits for Canada, UK, USA, Russia, and more.", icon: "🎓" },
    { title: "Global Tour Planning", text: "Customized tours, Umrah packages, and air ticketing solutions.", icon: "🌍" },
    { title: "Customer Support", text: "Dedicated team for after-service and relationship management.", icon: "📞" },
    { title: "One-Stop Travel Solution", text: "From visa to tickets to accommodation—all in one place.", icon: "🛫" },
    { title: "Multiple Country Visas", text: "Europe, USA, Canada, Australia—certified consultants.", icon: "🌐" },
  ];

  return (
    <section className="px-4 md:px-8 lg:px-16 py-16 min-h-screen">
      <div className="container mx-auto">
        
        {/* SEO Optimized Header */}
        <motion.header 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#005a31] mb-4">
           Best Travel Agency in Bangladesh
          </h1>
          <p className="text-gray-600 max-w-7xl mx-auto text-lg">
           Eammu Holidays is a leading online travel agency in Bangladesh - offering flight bookings, worldwide visa assistance, Holiday Tour Packages, and exciting desert safari tours.professional worldwide visa assistance for travelers, tourists, and business visitors.
          </p>
        </motion.header>

        {/* MODERN CLICKABLE VALUES SECTION */}
        <div className="flex flex-wrap gap-6 justify-center mb-12">
          {values.map((v) => (
            <motion.button
              key={v.id}
              onClick={() => setActiveTab(v.id)}
              className={`flex items-center gap-3 px-5 py-3 rounded-full border-2 transition-all duration-300 ${
                activeTab === v.id 
                ? "border-[#005a31] bg-[#005a31] text-white shadow-lg" 
                : "border-gray-200 bg-white text-gray-700 hover:border-[#005a31]"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={`flex items-center justify-center w-8 h-8 rounded-full border ${activeTab === v.id ? "border-white" : "border-[#005a31]"}`}>
                {v.icon}
              </span>
              <span className="font-bold uppercase tracking-wide text-sm">{v.title}</span>
            </motion.button>
          ))}
        </div>

        {/* DYNAMIC CONTENT DISPLAY */}
        <div className="max-w-7xl mx-auto mb-20 min-h-[100px] text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <p className="text-xl text-gray-700 italic">
                "{values.find(v => v.id === activeTab).text}"
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* FEATURES GRID */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <motion.article
              key={idx}
              className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#005a31] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-[#005a31] transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoiceEammu;