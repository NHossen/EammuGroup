import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FaGlobe, FaPlane, FaUniversity, 
  FaTags, FaPassport, FaSuitcaseRolling, 
  FaArrowRight, FaShieldAlt 
} from "react-icons/fa";

const services = [
  {
    icon: <FaPassport />,
    title: "Visa Processing",
    description: "Comprehensive visa consultancy for F1, B1/B2, and work permits for USA, UK, Canada, and Schengen countries.",
    link: "/visa-services",
    keywords: "Student Visa, Tourist Visa, Work Permit"
  },
  {
    icon: <FaPlane />,
    title: "Air Ticketing",
    description: "Global flight booking with exclusive deals on major airlines. 24/7 re-issuance and cancellation support.",
    link: "/air-tickets",
    keywords: "Cheap Flights, International Tickets"
  },
  {
    icon: <FaSuitcaseRolling />,
    title: "Tour Packages",
    description: "Customized holiday deals, Umrah packages, and luxury group tours tailored to your preferences.",
    link: "/tour-packages",
    keywords: "Honeymoon Packages, Group Tours"
  },
  {
    icon: <FaTags />,
    title: "Special Offers",
    description: "Limited-time travel discounts and bundle deals on flights and hotels for seasonal travelers.",
    link: "/offers",
    keywords: "Travel Discounts, Cheap Hotel Deals"
  },
  {
    icon: <FaShieldAlt />,
    title: "USA Interview Prep",
    description: "Expert coaching to crack the USA Visa Interview. Specialized 'Target USA' program for success.",
    link: "/usa-visa-interview-prep",
    keywords: "Visa Interview Coaching, USA Mock Interview"
  },
  {
    icon: <FaUniversity />,
    title: "IELTS & Immigration",
    description: "Official support for IELTS preparation and immigration consultancy for Canada and Australia.",
    link: "/target-ielts-and-immigration-center",
    keywords: "Study Abroad, Immigration Support"
  },
];

const OurServices = () => {
  return (
    <div className="min-h-screen bg-[#fcfcfc] pb-24 font-sans">
      <Helmet>
        <title>Our Services | Best Travel Agency Dhaka | Visa, Flight & Hotel</title>
        <meta name="description" content="Eammu Holidays offers expert Visa processing, cheap Air ticketing, USA Interview preparation, and International Tour packages from Bangladesh and UAE." />
        <meta name="keywords" content="Travel Agency Dhaka, Visa Processing Bangladesh, Cheap Air Tickets, USA Visa Interview Prep, Study Abroad Consultant" />
        <link rel="canonical" href="https://eammu.com/ourServices" />
      </Helmet>

      {/* 🚀 Hero Section with Background Image */}
      <section className="relative py-28 text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Travel and Aviation Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#005a31]/85 to-[#005a31]/40 shadow-inner"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase italic">
              Premium <span className="text-orange-400">Travel Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-green-50/90 max-w-3xl mx-auto font-medium leading-relaxed">
              Professional immigration consultancy and global travel management 
              designed to provide seamless experiences for students, tourists, and business travelers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 🌐 Services Grid - SEO Optimized Layout */}
      <div className="container mx-auto px-4 md:px-8 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/60 border border-slate-100 flex flex-col justify-between hover:shadow-2xl hover:border-green-200 transition-all group"
            >
              <div>
                <header className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 bg-green-50 text-[#005a31] rounded-2xl flex items-center justify-center text-3xl group-hover:bg-[#005a31] group-hover:text-white transition-all duration-500 shadow-sm">
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest pt-2">
                    Eammu Exclusive
                  </span>
                </header>
                
                <h2 className="text-2xl font-black text-gray-800 mb-4 group-hover:text-[#005a31] transition-colors">
                  {service.title}
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  {service.description}
                </p>

                {/* Hidden SEO Keywords for Semantic Context */}
                <p className="hidden">{service.keywords}</p>
              </div>

              <Link
                to={service.link}
                className="inline-flex items-center gap-2 text-[#005a31] font-extrabold text-sm uppercase tracking-tighter group-hover:gap-4 transition-all"
              >
                Learn More <FaArrowRight className="text-orange-500" />
              </Link>
            </motion.article>
          ))}
        </div>

        {/* 🛡️ Professional Trust Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex flex-col md:flex-row items-center justify-between bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-lg"
        >
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-black text-[#005a31] mb-2">Ready to plan your next journey?</h3>
            <p className="text-gray-500 font-medium">Get a free initial consultation from our certified advisors.</p>
          </div>
          <div className="flex gap-4">
            <a href={`https://wa.me/8801631312524?text=Hello%2C%20I%20would%20like%20to%20book%20a%20%20Services`} className="bg-[#005a31] text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-500 transition-all shadow-md">
              Talk to Expert
            </a>
            <Link to="/contact" className="bg-slate-50 text-slate-600 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all border border-slate-200">
              Support Center
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurServices;