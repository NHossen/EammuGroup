import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";



const offers = [
  {
    id: 1,
    title: "Summer Special Discount",
    slug: "summer-special-discount",
    description: "Get 15% off on all international tour packages booked before July 31.",
    image: "https://img.freepik.com/premium-vector/summer-sale-template-clipart-poster-summer-promo-limited-time-offer-with-watermelon-ice-cream_572288-4518.jpg?semt=ais_hybrid&w=740",
  },
  {
    id: 2,
    title: "Student Visa Promo",
    slug: "student-visa-promo",
    description: "Flat $100 off on student visa processing fees for select countries.",
    image: "https://www.shutterstock.com/image-vector/limited-offer-banner-sale-clock-600nw-1912324219.jpg",
  },
  {
    id: 3,
    title: "Early Bird Flight Deal",
    slug: "early-bird-flight-deal",
    description: "Book your air tickets 3 months in advance and save up to 20%.",
    image: "/offer-eammu-travel-agency-bangladesh-dhaka.webp",
  },
  {
    id: 4,
    title: "Family Tour Package Offer",
    slug: "family-tour-package",
    description: "Book for 4 or more family members and get special group discounts.",
    image: "https://offercdn.paytm.com/blog/2023/03/friends-family-app.png",
  },
  {
    id: 5,
    title: "Fast Track Travel Offer",
    slug: "fast-track-visa",
    description: "Fast Track Travel Offer visa application with zero extra charge for June.",
    image: "/best-travel-agency-bangladesh-offer.webp",
  },
  {
    id: 6,
    title: "Travel Promo Deals 2026",
    slug: "travel-promo-2026",
    description: "Travel Promo Deals 2026 Offer visa application with zero extra charge for June.",
    image: "/travel-promo-deals-travel-agency-offer-bangladesh.webp",
  },
];

// High-end cinematic background slider images for the Hero Section
const heroOffers = [
  {
    image: "/flight_eammu.webp",
    badge: "Hot Deal",
    title: "Special Travel Offers",
    description: "Explore the world with Eammu Holidays exclusive 2026 packages.",
    buttonText: "Contact Us"
  },
  {
    image: "/sylhet_eammu.webp",
    badge: "Limited Time",
    title: "Eid Ul Fitr Discounts",
    description: "Huge savings on domestic and international flights for the festive season.",
    buttonText: "Claim Offer"
  },
  {
    image: "/bangladesh_europe_couple.webp",
    badge: "Last Minute",
    title: "Visa Support Deals",
    description: "Get up to 20% off on consultancy fees for student and tourist visas.",
    buttonText: "Check Now"
  }
];

const OfferPage = () => {
  const [heroIndex, setHeroIndex] = useState(0);
  const scrollRef = useRef(null);

  // --- Background Slider Logic (3 Slides) ---
  useEffect(() => {
  const timer = setInterval(() => {
    setHeroIndex((prev) => (prev + 1) % heroOffers.length);
  }, 5000); // Transitions every 6 seconds
  return () => clearInterval(timer);
}, []);

  // --- Flash Deals Auto-Scroll ---
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const autoScroll = setInterval(() => {
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      if (scrollContainer.scrollLeft >= maxScroll - 10) {
        scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        const step = window.innerWidth < 768 ? 320 : 450;
        scrollContainer.scrollBy({ left: step, behavior: 'smooth' });
      }
    }, 4000);

    return () => clearInterval(autoScroll);
  }, []);

  const scrollManual = (direction) => {
    if (scrollRef.current) {
      const shift = direction === "left" ? -350 : 350;
      scrollRef.current.scrollBy({ left: shift, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen font-sans overflow-x-hidden">
      <Helmet>
        <title>Exclusive Travel Deals 2026 | Travel Deals in Bangladesh</title>
      </Helmet>

    {/* SECTION 1: 3-BACKGROUND HERO SLIDER WITH SYNCED TEXT */}
<section className="relative w-full h-[45vh] md:h-[50vh] bg-black overflow-hidden">
<AnimatePresence mode="wait">
  <motion.div
    key={heroIndex}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="absolute inset-0"
  >
    {/* Background - Layer 0 */}
    <div 
      className="absolute inset-0 z-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroOffers[heroIndex].image})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
    </div>
    
    {/* Content - Layer 10 (Higher than background) */}
    <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
       <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
       >
          <span className="bg-[#e7d000] text-black px-4 py-1 rounded-full text-[10px] font-black uppercase mb-4 inline-block">
            {heroOffers[heroIndex].badge}
          </span>
          <h1 className="text-4xl md:text-7xl font-black mb-6 uppercase">
            {heroOffers[heroIndex].title}
          </h1>
          <p className="text-sm md:text-lg font-bold opacity-80 mb-8 max-w-2xl mx-auto">
            {heroOffers[heroIndex].description}
          </p>
       </motion.div>
    </div>
  </motion.div>
</AnimatePresence>

  {/* Slide Indicators */}
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
    {heroOffers.map((_, i) => (
      <button 
        key={i} 
        onClick={() => setHeroIndex(i)} 
        className={`h-1.5 transition-all duration-700 rounded-full ${heroIndex === i ? 'w-12 bg-[#e7d000]' : 'w-4 bg-white/40'}`} 
      />
    ))}
  </div>
</section>

     {/* SECTION 2: FLASH DEALS (Clickable Images Only) */}
<section className="py-12 md:py-12 px-4 md:px-6 max-w-[1440px] mx-auto overflow-hidden">
  <div className="flex items-end justify-between mb-10">
    <div>
      <h2 className="text-3xl md:text-4xl font-black text-[#005a31] uppercase tracking-tighter">Flash Deals</h2>
      <p className="text-gray-400 font-bold uppercase text-[10px] tracking-[0.3em] mt-2">Limited Time Offers</p>
    </div>
    <div className="hidden md:flex gap-3">
      <button onClick={() => scrollManual("left")} className="w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center hover:bg-[#005a31] hover:text-white transition-all shadow-sm">‹</button>
      <button onClick={() => scrollManual("right")} className="w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center hover:bg-[#005a31] hover:text-white transition-all shadow-sm">›</button>
    </div>
  </div>

  <div 
    ref={scrollRef}
    className="flex gap-5 md:gap-8 overflow-x-auto pb-10 scrollbar-hide snap-x snap-mandatory touch-pan-x"
    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
  >
    {offers.map((offer) => (
      <motion.div 
        key={offer.id}
        whileHover={{ y: -10 }}
        className="w-[80%] sm:w-[350px] md:w-[450px] flex-shrink-0 snap-center"
      >
        <Link 
          to={`/offers/${offer.slug}`} 
          className="block aspect-[16/8] overflow-hidden rounded-[2rem] md:rounded-[3rem] relative group"
        >
          <img 
            src={offer.image} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
            alt={offer.title} 
          />
          {/* Subtle Overlay on Hover */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
             <span className="bg-white/20 backdrop-blur-md text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest border border-white/30">
                View Offer
             </span>
          </div>
        </Link>
      </motion.div>
    ))}
  </div>
</section>

      {/* SECTION 3: EXPLORE GRID (Clickable Images) */}
      <section className="py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#005a31] uppercase tracking-tighter">Explore More</h2>
            <div className="w-24 h-2 bg-[#005a31] mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {offers.map((offer) => (
              <div key={offer.id} className="group bg-white rounded-[3rem] p-5 hover:shadow-3xl transition-all border border-transparent hover:border-gray-100">
                {/* Clickable Image */}
                <Link to={`/offers/${offer.slug}`} className="block h-56 rounded-[2.5rem] overflow-hidden mb-8 shadow-inner">
                   <img src={offer.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={offer.title} />
                </Link>
                <h3 className="text-xl font-black text-[#005a31] mb-3 uppercase tracking-tight">{offer.title}</h3>
                <p className="text-gray-500 font-bold text-[11px] mb-10 uppercase tracking-widest leading-relaxed line-clamp-3">
                  {offer.description}
                </p>
                <div className="flex gap-3">
                    <a href="https://wa.me/8801631312524" className="flex-1 bg-[#005a31] text-white py-4 rounded-2xl font-black text-center text-[10px] uppercase shadow-lg hover:bg-black transition-all">Book Now</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OfferPage;