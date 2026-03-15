import React, { useState , useEffect} from "react";
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; //

const heroSlides = [
  {
    id: 1,
    image: "/sylhet_eammu.webp",
    badge: "Since 2022",
    highlight: "Eammu Holidays",
    title: "Premium Travel Agency Worldwide",
    boldText: "Eammu Holidays",
    description: "is a professional global travel Agency, tourism, and Visa application services company offering visa assistance, holiday packages, and international relocation solutions.",
    subDescription: "From luxury holidays to global Travel support, Eammu Holidays connects your dreams to destinations worldwide."
  },
  {
    id: 2,
    image: "/flight_eammu.webp",
    badge: "Expert Consultancy",
    highlight: "Student Visa",
    title: "Global Education Support Services",
    boldText: "Apply with Eammu",
    description: "to secure your admission in top universities across UK, USA, Canada, and Australia with professional documentation and interview preparation.",
    subDescription: "Your journey to world-class education starts with trusted guidance from our expert consultants."
  },
  {
    id: 3,
    image: "/bangladesh_europe_couple.webp",
    badge: "Exclusive Deals",
    highlight: "Tour Packages",
    title: "Unforgettable Journeys Across Borders",
    boldText: "Explore the World",
    description: "with our custom-tailored holiday packages, from pristine beaches to historic city tours, designed for comfort and luxury.",
    subDescription: "Discover hidden gems and popular destinations with Eammu's all-inclusive tourism services."
  }
];
// 1. New Helper Component for the FAQ items
const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="border-b border-gray-200"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left group focus:outline-none"
      >
        <span className={`text-lg md:text-xl font-semibold transition-colors ${isOpen ? "text-[#005a31]" : "text-gray-800 group-hover:text-[#005a31]"}`}>
          {question}
        </span>
        <motion.span 
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="text-2xl text-[#005a31] font-light"
        >
          {isOpen ? "✕" : "+"}
        </motion.span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 leading-relaxed text-base md:text-lg">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const About = () => {
  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
  const timer = setInterval(() => {
    setCurrentHero((prev) => (prev + 1) % heroSlides.length);
  }, 5000); // Transitions every 7 seconds
  return () => clearInterval(timer);
}, []);
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
  {/* Primary SEO */}
  <title>Eammu Holidays Bangladesh | Premium Travel Agency Bangladesh | Global Education Consultancy Bangladesh </title>
  <meta
    name="description"
    content="Eammu Holidays is a Premium global travel Agency in Bangladesh - providing visa services, student visas, work permits, holiday packages, tours, and international relocation solutions across Bangladesh, Dubai, Europe, and worldwide.Eammu is the premium travel agency based on bangladesh."
  />

  {/* Canonical & Indexing */}
  <link rel="canonical" href="https://eammu.com/about" />
  <meta name="robots" content="index, follow, max-image-preview:large" />

  {/* Open Graph (Facebook, LinkedIn) */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Eammu Holidays Bangladesh | Premium Travel Agency" />
  <meta
    property="og:description"
    content="Bangladesh Travel agency — your trusted partner for global travel, visa services, immigration solutions, student visas, work permits, and international tours."
  />
  <meta property="og:url" content="https://eammu.com/about" />
  <meta property="og:site_name" content="Eammu Holidays" />
  <meta property="og:image" content="https://eammu.com/emf.jpg" />

  {/* Twitter SEO */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Dhaka Travel Agency | Premium Travel Agency Bangladesh" />
  <meta
    name="twitter:description"
    content="Eammu Holidays provides trusted travel, visa, immigration, student visa, work permit, and global tour services worldwide."
  />
  <meta name="twitter:image" content="https://eammu.com/emf.jpg" />

  {/* App/Branding */}
  <meta name="application-name" content="Eammu Holidays" />
  <meta name="theme-color" content="#166534" />

</Helmet>

      <main className="overflow-hidden">
        {/* --- Hero Section with Animation --- */}
{/* --- Hero Section with 3-Slide Carousel --- */}
<section className="relative min-h-[50vh] flex items-center justify-center py-20 px-4 overflow-hidden">
  
  {/* Background & Content Carousel Layer */}
  <div className="absolute inset-0 z-0">
    <AnimatePresence mode="wait">
      <motion.div
        key={currentHero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        {/* Background Image */}
        <img
          src={heroSlides[currentHero].image} 
          alt="Global Travel Agency"
          className="w-full h-full object-cover scale-105"
        />
        
        {/* Dark overlay to ensure text stays clear */}
        <div className="absolute inset-0 bg-black/20 bg-gradient-to-t from-black/50 via-transparent to-black/30 z-10"></div>

        {/* --- CONTENT LAYER (Moves with the slides) --- */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-7xl mx-auto text-center space-y-8 px-4"
          >
            <span className="inline-block px-4 py-1.5 bg-[#005a31] text-white rounded-full text-sm font-bold tracking-widest uppercase shadow-lg">
              {heroSlides[currentHero].badge}
            </span>

            <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight drop-shadow-lg">
              <span className="text-[#e7d000]">{heroSlides[currentHero].highlight}</span> {heroSlides[currentHero].title}
            </h1>

            <div className="max-w-7xl mx-auto">
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed mt-6">
                <strong className="text-white">{heroSlides[currentHero].boldText}</strong> {heroSlides[currentHero].description}
              </p>

              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mt-4">
                {heroSlides[currentHero].subDescription}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  </div>

  {/* Slide Indicators (Dots) */}
  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
    {heroSlides.map((_, i) => (
      <div 
        key={i} 
        className={`h-1.5 rounded-full transition-all duration-500 ${
          i === currentHero ? 'w-10 bg-[#e7d000]' : 'w-2 bg-white/40'
        }`} 
      />
    ))}
  </div>
</section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 py-20">
          
          {/* --- Stats/Values Section --- */}
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
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

       {/* --- NEW Vision Section (Modernized) --- */}
          <section className="relative rounded-[3rem] bg-[#005a31] text-white p-10 md:p-10 overflow-hidden shadow-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 max-w-3xl space-y-8"
            >
              <div className="space-y-2">
                <span className="uppercase tracking-[0.2em] text-green-300 font-semibold text-sm">Future Roadmap</span>
                <h2 className="text-4xl md:text-5xl font-bold">Our Vision</h2>
              </div>
              
              <p className="text-lg md:text-2xl text-green-50/90 leading-relaxed font-light">
                "Eammu Holidays provides inbound and outbound tour operate. Inbound tours provide experience guide, standard and any category’s hotel, best tours spot selection and your security. Holidays are meant for relaxation, to rejuvenate your energy moreover to spend your quality time with your loved ones and it is imperative to have the best Tour Operator to be your travel planner, who has got the experience, Infrastructure, commitment and who is a real professional to plan your valuable Tour."
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                {["Transparency", "Innovation", "Empowerment"].map((tag) => (
                  <motion.div 
                    key={tag}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                    className="px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-sm font-medium cursor-default transition-all"
                  >
                    {tag}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Decorative Background Animations */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
              transition={{ duration: 15, repeat: Infinity }}
              className="absolute -bottom-20 -right-20 w-96 h-96 bg-green-400 rounded-full blur-[100px] opacity-20"
            />
          </section>

          {/* --- NEW FAQ Section --- */}
          <section className="py-10 max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-3 mb-12">
              <h2 className="text-4xl font-bold text-gray-900">FAQ</h2>
              <span className="text-[#005a31] text-2xl animate-pulse">✨</span>
            </div>

            <div className="space-y-2">
              <FAQItem 
                index={1}
                question="Why Travel With Eammu Holidays?" 
                answer="With years of international experience, we provide ethical, transparent, and comprehensive visa and tour solutions tailored to your unique goals. Our physical presence in Bangladesh and UAE ensures local support."
              />
              <FAQItem 
                index={2}
                question="Customer Help 24/7" 
                answer="Our dedicated support team is available around the clock via WhatsApp and email to assist with urgent travel queries, ticket changes, or immigration updates."
              />
              <FAQItem 
                index={3}
                question="What Can Eammu Holidays Offer?" 
                answer="We offer everything from student visa processing for top-tier countries like Canada and the UK to luxury holiday packages, corporate travel, and sustainable industrial fabric manufacturing."
              />
              <FAQItem 
                index={4}
                question="What Are The Benefits Of Choosing Eammu?" 
                answer="Choosing us means choosing transparency. We offer real-time case tracking, no hidden charges, and a 95% visa success rate backed by professional expertise."
              />
            </div>
          </section>

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
                  <p className="text-sm">+8801631312524,+8801701699743, +971507078334</p>
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