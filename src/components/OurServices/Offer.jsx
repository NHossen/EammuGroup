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

const OfferPage = () => {
  const [heroIndex, setHeroIndex] = useState(0);
  const scrollRef = useRef(null);

  // --- AUTOMATIC HERO FADE (5 Seconds) ---
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // --- FIXED: AUTOMATIC HORIZONTAL SCROLL FOR FLASH DEALS ---
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const autoScroll = setInterval(() => {
      const scrollAmount = 400; // Speed of each jump
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

      if (scrollContainer.scrollLeft >= maxScroll - 10) {
        // Reset to beginning smoothly if at the end
        scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        // Scroll to the next set of deals
        scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }, 3500); // Moves every 3.5 seconds

    return () => clearInterval(autoScroll);
  }, []);

  // Manual Scroll Buttons
  const scrollManual = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const shift = direction === "left" ? -400 : 400;
      current.scrollBy({ left: shift, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans overflow-x-hidden">
      <Helmet>
        <title>Exclusive Travel Deals 2026 | Special Offers - Eammu Group</title>
        <meta name="description" content="Grab the best travel deals on international flights, tour packages, and student visas. Limited-time offers from Eammu Holidays." />
      </Helmet>

      {/* --- SECTION 1: 60VH HERO SLIDER --- */}
      <section className="relative w-full h-[45vh] bg-black overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={heroIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${offers[heroIndex].image})` }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
              <span className="bg-[#005a31] text-white px-6 py-1 rounded-full text-sm font-black uppercase mb-4 animate-pulse">Hot Deal</span>
              <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter uppercase">{offers[heroIndex].title}</h1>
              <Link to={`/offers/${offers[heroIndex].slug}`} className="bg-white text-[#005a31] px-12 py-4 rounded-full font-black hover:bg-[#005a31] hover:text-white transition-all shadow-2xl">
                Claim Now
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* --- SECTION 2: AUTOMATIC FLASH DEALS SLIDER --- */}
      <section className="py-16 px-6 max-w-[1440px] mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-[#005a31] uppercase tracking-tighter">Flash Deals</h2>
            <p className="text-gray-400 font-bold uppercase text-xs tracking-[0.2em] mt-2">Limited time only</p>
          </div>
          
          {/* Manual Control Arrows */}
          <div className="flex gap-2">
            <button onClick={() => scrollManual("left")} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#005a31] hover:text-white transition-all shadow-sm">‹</button>
            <button onClick={() => scrollManual("right")} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#005a31] hover:text-white transition-all shadow-sm">›</button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-10 scroll-smooth snap-x snap-mandatory hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {offers.map((offer) => (
            <div 
              key={offer.id}
              className="min-w-[300px] md:min-w-[450px] bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-50 flex-shrink-0 snap-start group relative"
            >
              <div className="h-64 overflow-hidden relative">
                <img src={offer.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={offer.title} />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-tight truncate">{offer.title}</h3>
                <p className="text-gray-500 font-bold text-sm mb-8 line-clamp-2 h-10">{offer.description}</p>
                <Link 
                  to={`/offers/${offer.slug}`}
                  className="inline-block w-full text-center py-4 bg-[#005a31] text-white font-black rounded-2xl hover:bg-[#005a31] transition-all uppercase tracking-widest text-xs"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Animated Progress Bar */}
        <div className="w-full h-1 bg-gray-200 rounded-full mt-4 overflow-hidden max-w-sm mx-auto">
            <motion.div 
                animate={{ x: ["-100%", "100%"] }} 
                transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
                className="h-full w-1/3 bg-[#005a31] rounded-full"
            />
        </div>
      </section>

      {/* --- SECTION 3: ALL OFFERS GRID --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-[#005a31] mb-4 uppercase tracking-tighter">Explore More</h2>
            <div className="w-20 h-1.5 bg-[#005a31] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {offers.map((offer) => (
              <div key={offer.id} className="group bg-gray-50 rounded-[3rem] p-5 hover:bg-white hover:shadow-2xl transition-all border border-transparent hover:border-gray-100">
                <div className="h-52 rounded-[2.2rem] overflow-hidden mb-6 shadow-md">
                   <img src={offer.image} className="w-full h-full object-cover" alt={offer.title} />
                </div>
                <h3 className="text-xl font-black text-[#005a31] mb-3 uppercase tracking-tight">{offer.title}</h3>
                <p className="text-gray-600 font-bold text-xs mb-8 uppercase tracking-widest leading-relaxed">{offer.description}</p>
                <div className="flex gap-2">
                    <Link to={`/offers/${offer.slug}`} className="flex-1 bg-white border-2 border-[#005a31] text-[#005a31] py-3 rounded-2xl font-black text-center text-xs uppercase hover:bg-[#005a31] hover:text-white transition-all">Details</Link>
                    <a href="https://wa.me/8801631312524" className="flex-1 bg-[#005a31] text-white py-3 rounded-2xl font-black text-center text-xs uppercase shadow-lg shadow-[#25D366]/20 transition-all">Book</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA FOOTER --- */}
      <footer className="bg-[#005a31] py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-10 uppercase tracking-tighter">Your Offer Awaits</h2>
        <div className="flex justify-center gap-4">
            <Link to="/" className="px-10 py-5 bg-white text-[#005a31] rounded-full font-black uppercase tracking-widest text-sm shadow-xl">Home</Link>
            <a href="https://wa.me/8801631312524" className="px-10 py-5 bg-[#005a31] text-white rounded-full font-black uppercase tracking-widest text-sm shadow-xl">Contact</a>
        </div>
      </footer>
    </div>
  );
};

export default OfferPage;