import React from "react";
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // অ্যানিমেশনের জন্য
import Testimonials from '../Testimonials/Testimonials';

const About = () => {
  // অ্যানিমেশন ভেরিয়েন্ট
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>About Eammu | Leading Travel & Immigration Agency in Bangladesh</title>
        <meta
          name="description"
          content="Eammu global services including immigration, student & work visas, travel & tour packages. Established in 2022, serving clients in Dubai, Bangladesh, and Europe."
        />
        <meta
          name="keywords"
          content="best travel agency in Bangladesh, trusted travel agency Bangladesh, student visa consultant in Dhaka, visa appointment service in Bangladesh, Eammu Holidays About"
        />
        <link rel="canonical" href="https://eammu.com/about" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Eammu Holidays",
            "url": "https://eammu.com",
            "logo": "https://i.ibb.co/YF7bmqfg/521388962-122289260780017871-6426815952586296550-n.jpg",
            "sameAs": [
              "https://facebook.com/eammutourism/",
              "https://instagram.com/eammuholidays",
              "https://youtube.com/@eammutour/"
            ]
          })}
        </script>
      </Helmet>

      <main className="overflow-hidden">
        {/* --- Hero Section with Animation --- */}
        <section className="relative bg-gradient-to-b from-green-50 to-white py-20 px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-7xl mx-auto text-center space-y-8"
          >
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-bold tracking-widest uppercase">
              Since 2022
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              About <span className="text-green-700">Eammu</span> — Your Trusted <br />
              Global Immigration Partner
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Eammu is a global leader in professional immigration, visa assistance, and diversified business solutions. We bridge the gap between your dreams and global opportunities.
            </p>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
              <img
                src="https://i.ibb.co/YF7bmqfg/521388962-122289260780017871-6426815952586296550-n.jpg"
                alt="Eammu Global Business Presence"
                className="w-full h-[300px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </motion.div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 py-20">
          
          {/* --- Stats/Values Section --- */}
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              { label: "Global Offices", val: "4+", icon: "🌍" },
              { label: "Visa Success", val: "95%", icon: "✅" },
              { label: "Years Experience", val: "3+", icon: "🚀" },
              { label: "Happy Clients", val: "10k+", icon: "🤝" },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeIn} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <h4 className="text-3xl font-bold text-green-700">{stat.val}</h4>
                <p className="text-gray-500 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.section>

          {/* --- Core Services Grid --- */}
          <section className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Multi-Industrial Services</h2>
              <div className="w-20 h-1 bg-green-600 mx-auto rounded-full"></div>
            </div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {[
                { 
                  title: "Immigration & Visa", 
                  img: "https://i.ibb.co/ymnSDKYb/481769971-122262749468017871-3083837242661680362-n.jpg", 
                  link: "/", 
                  desc: "Expert assistance for student visas, PR, and work permits for UAE, Canada, and Europe.",
                  btn: "Explore Visa Options"
                },
                { 
                  title: "IT & Digital Marketing", 
                  img: "https://www.marenkoeppen.com/wp-content/uploads/marenkoeppen_IT-Marketing_web-1.png", 
                  link: "/eammumarketing", 
                  desc: "Cutting-edge web development, SEO, and lead generation for global startups.",
                  btn: "Get IT Support"
                },
                { 
                  title: "Event Management", 
                  img: "https://onewayeventproductions.com/wp-content/uploads/2019/05/1WAYAVBestPracticesEventManagment.jpeg", 
                  link: "/eammuevent", 
                  desc: "Creating unforgettable corporate events and luxury weddings globally.",
                  btn: "Book Consultation"
                },
                { 
                  title: "Fashion & Lifestyle", 
                  img: "https://i1.adis.ws/i/canon/pro-fashion-photography-technique-tips-1-new_e6eef04e6fe9434e9d9427a0220ef27c.jpeg", 
                  link: "/eammufashion", 
                  desc: "Premium apparel blending traditional Bangladeshi craft with Dubai style.",
                  btn: "Shop Collection"
                },
                { 
                  title: "Dairy & Agro", 
                  img: "https://img-cdn.krishijagran.com/82661/dairy-schemes.jpg", 
                  link: "/eammudairy", 
                  desc: "Ethical and sustainable farming providing fresh organic produce.",
                  btn: "Order Fresh"
                },
                { 
                  title: "Textile & Industry", 
                  img: "https://curiosityuntamed.com/wp-content/uploads/2021/01/Learn-About-1536x865.jpg", 
                  link: "/eammutextile", 
                  desc: "Sustainable manufacturing of premium fabrics and eco-friendly garments.",
                  btn: "Bulk Inquiry"
                },
              ].map((service, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeIn}
                  whileHover={{ y: -10 }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent"></div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-green-700 transition-colors">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.desc}</p>
                    <Link to={service.link} className="mt-auto inline-flex items-center text-green-700 font-bold text-sm uppercase tracking-wider group-hover:underline">
                      {service.btn}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* --- Vision Section with Background Card --- */}
          <section className="relative rounded-[3rem] bg-[#005a31] text-white p-10 md:p-20 overflow-hidden">
             <div className="relative z-10 max-w-3xl space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold">Our Vision</h2>
                <p className="text-lg md:text-xl text-green-50 leading-relaxed">
                  To be a globally recognized brand driving growth and empowerment through innovation, teamwork, and top-quality services in immigration, travel, business, and lifestyle.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                   <div className="px-5 py-2 bg-white/10 rounded-full border border-white/20 text-sm">Transparency</div>
                   <div className="px-5 py-2 bg-white/10 rounded-full border border-white/20 text-sm">Innovation</div>
                   <div className="px-5 py-2 bg-white/10 rounded-full border border-white/20 text-sm">Empowerment</div>
                </div>
             </div>
             {/* Decorative Circles */}
             <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-green-700 rounded-full blur-3xl opacity-30"></div>
          </section>

          <Testimonials />

          {/* --- Contact / CTA Section --- */}
          <section className="bg-white border-2 border-green-100 rounded-[2.5rem] p-8 md:p-16 text-center space-y-8 shadow-sm relative overflow-hidden">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">Contact Eammu Holidays</h2>
              <p className="text-gray-600 max-w-xl mx-auto">Need visa assistance or immigration consultation? Our experts are available 24/7 to guide you.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
              <div className="flex items-start gap-4 p-6 bg-green-50 rounded-2xl">
                <span className="text-2xl">📞</span>
                <div>
                  <h4 className="font-bold text-green-900">Call/WhatsApp</h4>
                  <p className="text-sm">+8801701699743, +971507078334</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-green-50 rounded-2xl">
                <span className="text-2xl">📧</span>
                <div>
                  <h4 className="font-bold text-green-900">Email Support</h4>
                  <p className="text-sm">info@eammu.com, support@eammu.com</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/8801701699743"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#005a31] text-white px-10 py-4 rounded-2xl font-bold hover:bg-green-800 transition shadow-lg shadow-green-200"
              >
                Start Your Journey Now
              </a>
              <Link
                to="/"
                className="w-full sm:w-auto bg-white border-2 border-green-700 text-green-700 px-10 py-4 rounded-2xl font-bold hover:bg-green-50 transition"
              >
                Back to Home
              </Link>
            </div>
          </section>

        </div>
      </main>
    </>
  );
};

export default About;