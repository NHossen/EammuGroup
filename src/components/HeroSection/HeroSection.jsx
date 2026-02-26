import React, { useState, useEffect, useRef} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plane, Gift, Map, CreditCard, 
  Wind, Binoculars, Star, 
  ChevronLeft, ChevronRight,GraduationCap
} from 'lucide-react';
import { Helmet } from 'react-helmet'; // Added for SEO

const HeroSection = () => {
  // Data for background slider
  const bgSlides = [
    "https://eammu.com/eammu_holidays_bg.webp/",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=80",
    "https://www.thailand.go.th/uploads/posts/photo_1684338552_1.jpeg",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
    
    
  ];

  // Data for inner promo carousel
  const promoSlides = [
    { id: 1, title: "SHARJAH & YEREVAN", price1: "799", price2: "1450", img: "https://cms.musafir.com/uploads/temple-of-garni5ee506e413a06dce84b1ff000062a8f2_6aj8h4iejdl.jpg" },
    { id: 2, title: "DUBAI TRIP", price1: "599", price2: "1100", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80" },
    { id: 3, title: "DHAKA TO DUBAI", price1: "699", price2: "1200", img: "https://tripjive.com/wp-content/uploads/2024/09/Khasia-Polli-in-Sylhet-travel-guide-1024x585.jpg" },
    { id: 4, title: "JAPAN TOUR", price1: "2699", price2: "4200", img: "https://japandeluxetours.com/uploads/2025/10/20251009212409_68e827f99d19b.jpg" },
  ];

  // Bottom carousel
  const bottomSlides = [
    { id: 1, title: "MEXICO VISA", img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/70/7b/ac.jpg",link: "/visa-services" },
    { id: 2, title: "SINGAPORE VISA", img: "https://www.agoda.com/wp-content/uploads/2019/06/Singapore-Itinerary-Marina-Bay-Sands.jpg",link: "/singapore-visa-application" },
    { id: 3, title: "THAILAND TOUR", img: "/eammu_evisa_offer.webp" ,link: "/tour-packages" },
    { id: 4, title: "SYLHET TOUR", img: "https://royalbengaltours.com/wp-content/uploads/2017/08/Cycle-through-the-most-beautiful-tea-estates-of-Sreemangal-and-Sylhet-area.webp" ,link: "/tour-packages" },
    { id: 5, title: "DHAKA TOUR", img: "https://toursntripsbd.com/wp-content/uploads/2016/06/PB100664-180x152-1.jpg",link: "/tour-packages" },
    { id: 6, title: "DESERT SAFARI", img: "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1666942368/blog/gu90kcnlehlie93a2mks.jpg",link: "/tour-packages" },
    { id: 7, title: "ARMENIA VISA", img: "https://www.gokite.travel/wp-content/uploads/2021/05/Armenia-tour-packages-from-dubai_11zon-870x480.webp",link: "/armenia-visa-application" },
    { id: 8, title: "EUROPE VISA", img: "https://pmlholidays.com/admin/production/images/blogs/Europe.jpg",link: "/europe-visa-application" },
    { id: 9, title: "EMI Eammu Holidays", img: "/eammu_emi_offer.webp",link: "/offers" },
  ];

  const [bgIndex, setBgIndex] = useState(0);
  const [promoIndex, setPromoIndex] = useState(0);
  const [bottomIndex, setBottomIndex] = useState(0);
  const bottomRef = useRef(null);

  // Auto slide for background, promo, and bottom carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgSlides.length);
      setPromoIndex((prev) => (prev + 1) % promoSlides.length);
      setBottomIndex((prev) => (prev + 1) % bottomSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Scroll bottom carousel to active slide
 useEffect(() => {
  const auto = setInterval(() => {
    setBottomIndex((prev) => {
      const next = (prev + 1) % bottomSlides.length;

      const container = bottomRef.current;
      if (container) {
        const child = container.children[next];
        container.scrollTo({
          left: child.offsetLeft,
          behavior: "smooth",
        });
      }

      return next;
    });
  }, 4000);

  return () => clearInterval(auto);
}, []);

  return (
    <div className="relative w-full overflow-hidden font-sans">
      {/* --- SEO HELMET FOR HOME PAGE --- */}
      <Helmet>
        <title>Travel Agency Comilla | Study Abroad From Bangladesh</title>
        <meta name="description" content="Eammu Holidays is an IATA approved global travel agency in Bangladesh. We offer cheap air tickets, international tour packages, and expert visa processing." />
        <link rel="canonical" href="https://eammu.com" />
        
        {/* Organization Schema for Google Trust */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            "name": "Eammu Holidays",
            "url": "https://eammu.com",
            "logo": "https://eammu.com/logo.png",
            "image": "https://eammu.com/hero-dubai-travel-agency.webp",
            "description": "Leading travel agency in Bangladesh and Dubai providing air tickets, tours, and visa services.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dhaka",
              "addressCountry": "BD"
            },
            "telephone": "+8801631312524",
            "priceRange": "$$"
          })}
        </script>
      </Helmet>

      {/* ================= BACKGROUND SLIDER ================= */}
      <div className="relative w-full h-[115svh] md:h-[87vh] lg:h-[60vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={bgIndex}
            src={bgSlides[bgIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/40" />

        {/* ================= TOP NAV ================= */}
        <div className="absolute my-12 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-20">
          <div className="bg-white rounded-2xl py-3 px-2 grid grid-cols-3 sm:grid-cols-6 gap-2 shadow-2xl">

            <a href="/visa-services">
              <NavItem icon={<CreditCard className="text-[#005a31]" />} label="Global Visa" />
            </a>
            <a href="/air-tickets">
              <NavItem icon={<Plane className="text-[#005a31]" />} label="Flight Tickets" />
            </a>
            <a href="/tour-packages">
              <NavItem icon={<Map className="text-[#005a31]" />} label="Holidays" />
            </a>
            <a href="/activities">
              <NavItem icon={<Wind className="text-[#005a31]" />} label="Activities" />
            </a>
            <a href="/student-visa-application-from-bangladesh">
              <NavItem icon={<GraduationCap className="text-[#005a31]" />} label="Study Abroad" />
            </a>
            <a href="/offer">
              <NavItem icon={<Gift className="text-[#005a31]" />} label="Special Offers" />
            </a>

          </div>
        </div>

        {/* ================= HERO CONTENT ================= */}
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#1b88a8] to-transparent pt-32 pb-10">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            {/* TEXT */}
            <div className="text-white text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Your Trusted Travel Partner <br />
                in the World <span className="text-yellow-400">Since 2022</span>
              </h1>

              <p className="text-sm md:text-base leading-relaxed mb-5 opacity-90">
                Eammu Holidays is a full-service travel company offering flight bookings, 
                worldwide visa assistance, and desert safari. 
                With expert consulting and transparent pricing, we make global travel simple.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-5">
                {/* WhatsApp Button */}
                <a
                  href="/our-services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white text-gray-700 px-5 py-2 rounded-full font-medium shadow-lg hover:bg-gray-100 transition text-sm"
                >
                  <Binoculars className="text-[#005a31] fill-white" /> Explore More
                </a>

                {/* Customer Review Button */}
                <a
                  href="/testimonials"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white text-gray-700 px-5 py-2 rounded-full font-medium shadow-lg hover:bg-gray-100 transition text-sm"
                >
                  <Star className="text-[#005a31] fill-white" /> Customer Review
                </a>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 text-xs">
                <span>🏆 IATA Accredited & Award winning</span>
                <span>📅 6 Years of Excellence</span>
                <span>⭐ Google Review 4.9/5</span>
              </div>
            </div>

            {/* PROMO CARD */}
            <div className="relative w-full max-w-md mx-auto lg:mx-0 h-[300px] sm:h-[250px] md:h-[280px] rounded-2xl overflow-hidden border border-white/30 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={promoIndex}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  className="absolute inset-0 bg-[#005a31] flex flex-col sm:flex-row"
                >
                  <div className="w-full sm:w-1/2 h-[40%] sm:h-full">
                    <img 
                      src={promoSlides[promoIndex].img} 
                      className="w-full h-full object-cover" 
                      alt="Promo"
                    />
                  </div>

                  <div className="w-full sm:w-1/2 p-5 flex flex-col justify-between text-white">
                    <div>
                      <h2 className="text-lg font-bold mb-3 uppercase leading-tight">{promoSlides[promoIndex].title}</h2>

                      <div className="flex gap-2 mb-4 text-[11px]">
                        <div className="flex-1 border border-white/40 p-1.5 rounded bg-white/5">
                          One Way <br/><b>AED {promoSlides[promoIndex].price1}</b>
                        </div>
                        <div className="flex-1 border border-white/40 p-1.5 rounded bg-white/5">
                          Round Trip <br/><b>AED {promoSlides[promoIndex].price2}</b>
                        </div>
                      </div>
                    </div>

                    <a
                      href="/air-tickets"
                      className="bg-white text-[#005a31] font-black py-2.5 px-4 rounded-lg text-sm text-center block shadow-md active:scale-95 transition-transform"
                    >
                      Book Now
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Indicators */}
              <div className="absolute bottom-3 right-3 flex gap-1.5">
                {promoSlides.map((_, i) => (
                  <div key={i} className={`h-1.5 w-1.5 rounded-full transition-all ${i === promoIndex ? 'bg-white w-4' : 'bg-white/40'}`} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ================= BOTTOM CAROUSEL ================= */}
      <div className="bg-white py-10 px-4">

        <div className="max-w-7xl mx-auto relative">
          <div
  ref={bottomRef}
  className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
>
            {bottomSlides.map((slide, index) => (
              <motion.div 
                key={index}
                className="snap-center min-w-[85%] sm:min-w-[60%] md:min-w-[30%] h-48 rounded-xl overflow-hidden relative shadow-md"
                whileHover={{ scale: 1.02 }}
              >
                <a href={slide.link}>
                  <img src={slide.img} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <p className="text-white font-bold">{slide.title}</p>
                </div>
                </a>
              </motion.div>
            ))}
          </div>

          {/* arrows only desktop */}
          <button
            className="hidden md:flex absolute left-[-20px] top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg text-gray-800"
            onClick={() =>
              setBottomIndex((prev) => (prev - 1 + bottomSlides.length) % bottomSlides.length)
            }
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="hidden md:flex absolute right-[-20px] top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg text-gray-800"
            onClick={() =>
              setBottomIndex((prev) => (prev + 1) % bottomSlides.length)
            }
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

// Helper Sub-component
const NavItem = ({ icon, label }) => (
  <div className="flex flex-col items-center cursor-pointer hover:scale-105 transition">
    <div className="p-2 rounded-full bg-red-50 mb-1">{icon}</div>
    <span className="text-[9px] sm:text-[10px] font-bold text-gray-600 text-center">{label}</span>
  </div>
);

export default HeroSection;