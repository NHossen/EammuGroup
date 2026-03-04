import React from "react";
import { motion } from "framer-motion";

const WhyChoiceEammu = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 container mx-auto py-12 min-h-screen">

      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-10 text-[#005a31]"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Why Choose Eammu Holidays?
      </motion.h1>

      <motion.div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {[...Array(12)].map((_, idx) => {
          const features = [
            {
              title: "✅ 6+ Years of Experience",
              text: "We’ve been serving clients across Bangladesh and UAE with reliable and ethical visa consulting."
            },
            {
              title: "🎓 Student Visa Experts",
              text: "We help students secure study permits in top countries like Canada, UK, USA, Russia, and more."
            },
            {
              title: "🌍 Global Tour Planning",
              text: "We organize customized tours, Umrah packages, and international air ticketing solutions."
            },
            {
              title: "📞 Customer Support",
              text: "Dedicated team for after-service, case updates, and customer relationships management."
            },
            {
              title: "🛫 One-Stop Travel Solution",
              text: "From visa to tickets to accommodation—we simplify every travel need in one place."
            },
            {
              title: "🧾 Transparent Process",
              text: "No hidden charges, no false promises—only clear consultation and step-by-step guidance."
            },
            {
              title: "🧠 Personalized Counselling",
              text: "Every client is different, so we listen first—then guide based on your unique goal and background."
            },
            {
              title: "🌐 Multiple Country Visas",
              text: "Europe Schengen, USA, Canada, Australia, UK, and Asian countries — get assistance from certified consultants."
            },
            {
              title: "📊 Real-Time Case Tracking",
              text: "Track your visa or admission case online or get updates directly via WhatsApp."
            },
            {
              title: "💼 Corporate & Business Visa",
              text: "Professionals trust Eammu for business setup, conferences, and multi-entry visas."
            },
            {
              title: "🌟 5-Star Client Satisfaction",
              text: "We’re proud to serve returning clients who trust Eammu again and again."
            },
            {
              title: "🇧🇩 🇦🇪 Local Office Support",
              text: "Physical offices in Bangladesh and UAE mean we’re always within reach."
            }
          ];

          return (
            <motion.div
              key={idx}
              className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-[#005a31] hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-[#005a31]">{features[idx].title}</h3>
              <p>{features[idx].text}</p>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        className="mt-12 bg-[#005a31] text-white p-8 rounded-xl text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold mb-4">🎯 Our Promise</h2>
        <p className="text-lg">We are not just a travel agent — we’re your partner in the journey of life abroad. From day one to departure and beyond, Eammu Holidays stands with you.</p>
      </motion.div>
    </div>
  );
};

export default WhyChoiceEammu;
