import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plane, Gift, Map, CreditCard, 
  Wind, Binoculars, Star, 
  ChevronLeft, ChevronRight, GraduationCap
} from 'lucide-react';

const HeroSection = () => {
  // Data for background slider
  const bgSlides = [
    "https://eammu.com/eammu_holidays_bg.webp/",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=80",
    "https://www.thailand.go.th/uploads/posts/photo_1684338552_1.jpeg",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
    "https://eammu.com/eammu_banner.webp",
  ];

  // Data for inner promo carousel
  const promoSlides = [
    { id: 1, title: "SHARJAH TO YEREVAN", price1: "135", price2: "255", img: "https://cms.musafir.com/uploads/temple-of-garni5ee506e413a06dce84b1ff000062a8f2_6aj8h4iejdl.jpg" },
    { id: 2, title: "DUBAI TO DHAKA", price1: "110", price2: "300", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80" },
    { id: 3, title: "DHAKA TO DUBAI", price1: "300", price2: "355", img: "https://tripjive.com/wp-content/uploads/2024/09/Khasia-Polli-in-Sylhet-travel-guide-1024x585.jpg" },
    { id: 4, title: "JAPAN TO DHAKA", price1: "499", price2: "999", img: "https://japandeluxetours.com/uploads/2025/10/20251009212409_68e827f99d19b.jpg" },
    { id: 5, title: "DHAKA TO MALDIVES", price1: "299", price2: "499", img: "https://afar.brightspotcdn.com/dims4/default/3da8482/2147483647/strip/true/crop/3000x1500+0+369/resize/1440x720!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2Fb2%2Ff4%2F9a1ebe3f427f8e5eb937f8df8998%2Ftravelguides-maldives-videomediastudioeurope-shutterstock.jpg" },
  ];

  // Bottom carousel
  const bottomSlides = [
    { id: 0, title: "Higher Study In USA With 70% Scholarship", img: "https://globalgateways.co.in/wp-content/uploads/2025/01/study-abroad-usa.jpg", link: "/usa-visa-application", },
    { id: 1, title: "ALBANIA VISA", img: "/albania_visa_from_bangladesh.webp",link: "/albania-visa-application" },
    { id: 2, title: "EID PROMO", img: "/eid_offer_2026_eammu.webp",link: "/singapore-visa-application" },
    { id: 3, title: "E-VISA", img: "/eammu_evisa_offer.webp" ,link: "/thailand-visa-application" },
    { id: 4, title: "SYLHET TOUR", img: "https://royalbengaltours.com/wp-content/uploads/2017/08/Cycle-through-the-most-beautiful-tea-estates-of-Sreemangal-and-Sylhet-area.webp" ,link: "/tour-packages" },
    { id: 5, title: "DHAKA TOUR", img: "https://toursntripsbd.com/wp-content/uploads/2016/06/PB100664-180x152-1.jpg",link: "/tour-packages" },
    { id: 6, title: "DESERT SAFARI", img: "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1666942368/blog/gu90kcnlehlie93a2mks.jpg",link: "/tour-packages" },
    { id: 7, title: "ARMENIA VISA", img: "https://www.gokite.travel/wp-content/uploads/2021/05/Armenia-tour-packages-from-dubai_11zon-870x480.webp",link: "/armenia-visa-application" },
    { id: 8, title: "EUROPE VISA", img: "https://pmlholidays.com/admin/production/images/blogs/Europe.jpg",link: "/europe-visa-application" },
    { id: 9, title: "EMI", img: "/eammu_emi_offer.webp",link: "/offers" },
    { id: 10, title: "CANADA VISA", img: "/canada_visa_from_india.webp",link: "/canada-visa-application" },
    { id: 11, title: "SINGAPORE VISA", img: "https://www.agoda.com/wp-content/uploads/2019/06/Singapore-Itinerary-Marina-Bay-Sands.jpg",link: "/singapore-visa-application" },
  ];

  const [bgIndex, setBgIndex] = useState(0);
  const [promoIndex, setPromoIndex] = useState(0);
  const [bottomIndex, setBottomIndex] = useState(0);
  const bottomRef = useRef(null);

  // Auto slide logic for all carousels
  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgSlides.length);
      setPromoIndex((prev) => (prev + 1) % promoSlides.length);
      setBottomIndex((prev) => (prev + 1) % bottomSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Physical scroll handler (Syncs the DOM to the State)
  useEffect(() => {
    const container = bottomRef.current;
    if (container && container.children[bottomIndex]) {
      const activeItem = container.children[bottomIndex];
      container.scrollTo({
        left: activeItem.offsetLeft - container.offsetLeft,
        behavior: "smooth",
      });
    }
  }, [bottomIndex]);

  return (
    <div className="relative w-full overflow-hidden font-sans">

      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full bg-gradient-to-br from-[#0181a8] via-[#074901] to-[#c4da00] overflow-hidden">

        {/* ================= BACKGROUND SLIDER ================= */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={bgIndex}
              src={bgSlides[bgIndex]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        </div>

        {/* ================= CONTENT WRAPPER ================= */}
        <div className="relative z-10 min-h-[520px] sm:min-h-[600px] lg:min-h-[50vh] flex flex-col">

          {/* ================= TOP NAV ================= */}
          <div className="pt-6 sm:pt-10 flex justify-center mt-8">
            <div className="w-[95%] max-w-5xl">
              <div className="bg-white/95 backdrop-blur rounded-2xl py-3 px-2 grid grid-cols-3 sm:grid-cols-6 gap-2 shadow-2xl">
                <a href="/visa-services"><NavItem icon={<CreditCard className="text-[#005a31]" />} label="Global Visa" /></a>
                <a href="/air-tickets"><NavItem icon={<Plane className="text-[#005a31]" />} label="Flight Tickets" /></a>
                <a href="/tour-packages"><NavItem icon={<Map className="text-[#005a31]" />} label="Holidays" /></a>
                <a href="/activities"><NavItem icon={<Wind className="text-[#005a31]" />} label="Activities" /></a>
                <a href="/student-visa-application-from-bangladesh"><NavItem icon={<GraduationCap className="text-[#005a31]" />} label="Study Abroad" /></a>
                <a href="/offer"><NavItem icon={<Gift className="text-[#005a31]" />} label="Special Offers" /></a>
              </div>
            </div>
          </div>

          {/* ================= HERO BODY ================= */}
          <div className="flex-1 flex items-center py-10">
            <div className="max-w-5xl mx-auto px-4 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

              {/* TEXT */}
              <div className="text-white text-center lg:text-left">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                  Your Trusted Travel Partner <br />
                  in the World <span className="text-yellow-400">Since 2022</span>
                </h1>

                <p className="text-sm md:text-base leading-relaxed mb-5 opacity-90">
                  Eammu Holidays is a leading online travel agency offering flight bookings, worldwide visa assistance, Holiday Tour Packages, and exciting desert safari tours. 
                  With expert guidance, we make international travel simple, affordable, and hassle-free
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-5">
                  <a href="/our-services" className="flex items-center gap-2 bg-white text-gray-700 px-5 py-2 rounded-full font-medium shadow-lg hover:bg-gray-100 transition text-sm">
                    <Binoculars className="text-[#005a31]" /> Explore More
                  </a>

                  <a href="/testimonials" className="flex items-center gap-2 bg-white text-gray-700 px-5 py-2 rounded-full font-medium shadow-lg hover:bg-gray-100 transition text-sm">
                    <Star className="text-[#005a31]" /> Customer Review
                  </a>
                </div>

                <div className="flex flex-wrap justify-center lg:justify-start gap-3 text-xs">
                  <span>🏆 IATA Accredited</span>
                  <span>📅 6+ Years Experience</span>
                  <span>⭐ Google Rating 4.9/5</span>
                </div>
              </div>

              {/* ================= PROMO CARD ================= */}
              <div className="w-full flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md h-[300px] sm:h-[260px] rounded-2xl overflow-hidden border border-white/30 shadow-2xl 
                bg-gradient-to-br from-[#006b3c] via-[#005a31] to-[#003d22]">

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={promoIndex}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 flex flex-col sm:flex-row"
                    >
                      {/* Image */}
                      <div className="w-full sm:w-1/2 h-[45%] sm:h-full">
                        <img 
                          src={promoSlides[promoIndex].img} 
                          className="w-full h-full object-cover" 
                          alt="Promo"
                        />
                      </div>

                      {/* Content */}
                      <div className="w-full sm:w-1/2 p-4 flex flex-col justify-between text-white">
                        <div>
                          <h2 className="text-base font-bold mb-2 uppercase leading-tight">
                            {promoSlides[promoIndex].title}
                          </h2>

                          <div className="flex gap-2 mb-3 text-[11px]">
                            <div className="flex-1 border border-white/40 p-1.5 rounded bg-white/5">
                              One Way <br/><b>USD {promoSlides[promoIndex].price1}</b>
                            </div>
                            <div className="flex-1 border border-white/40 p-1.5 rounded bg-white/5">
                              Round Trip <br/><b>USD {promoSlides[promoIndex].price2}</b>
                            </div>
                            <div className='lg:hidden'>
                               <img 
                                src="/eammu_white_logo.webp" 
                                alt="Loading..." 
                                className="h-[40px] w-full object-contain animate-pulse" 
                              />
                            </div>
                          </div>
                        </div>

                        <a
                          href="/air-tickets"
                          className="bg-white text-[#005a31] font-black py-2 px-4 rounded-lg text-sm text-center block shadow-md active:scale-95 transition-transform"
                        >
                          Book Now
                        </a>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Indicators */}
                  <div className="absolute bottom-2 right-3 flex gap-1.5 z-20">
                    {promoSlides.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1.5 w-1.5 rounded-full transition-all ${
                          i === promoIndex ? 'bg-white w-4' : 'bg-white/40'
                        }`}
                      />
                    ))}
                  </div>
                </div>
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
            className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 hide-scrollbar"
          >
            {bottomSlides.map((slide, index) => (
              <motion.div 
                key={index}
                className="snap-center min-w-[85%] sm:min-w-[70%] md:min-w-[40%] h-48 rounded-xl overflow-hidden relative shadow-md"
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
            className="hidden md:flex absolute left-[-20px] top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg text-gray-800 z-30"
            onClick={() =>
              setBottomIndex((prev) => (prev - 1 + bottomSlides.length) % bottomSlides.length)
            }
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="hidden md:flex absolute right-[-20px] top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg text-gray-800 z-30"
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