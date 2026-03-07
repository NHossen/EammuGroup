import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SpecialDayBanner = () => {
  const slides = [
    { id: 1, url: '/eid_offer_2026_eammu.webp', alt: 'Eid Offer 2026' },
    { id: 2, url: '/eid_offer_banner_2.webp', alt: 'Special Eid Deals' },
    { id: 3, url: '/eid_offer_eammu.webp', alt: 'Exclusive Holiday Offer' },
    { id: 4, url: '/eid_ul_fitr_banner.webp', alt: 'Eid-ul-Fitr Special' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Framer Motion Variants for a high-end feel
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.6 }
      }
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.9,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 }
      }
    })
  };

  return (
    <section className="w-full py-4 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Dynamic Aspect Ratio: 350px on desktop, auto-scaling on mobile */}
        <div className="relative h-[180px] sm:h-[250px] md:h-[350px] w-full overflow-hidden rounded-2xl shadow-2xl group border border-white">
          
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 w-full h-full"
            >
              {/* Image Layer - Using 'object-fill' or 'object-stretch' to match your specific banner dimensions */}
              <img
                src={slides[currentIndex].url}
                alt={slides[currentIndex].alt}
                className="w-full h-full object-fill md:object-cover"
                loading="priority"
              />
              
              {/* Subtle Overlay to make the image pop */}
              <div className="absolute inset-0 bg-black/5 pointer-events-none" />
            </motion.div>
          </AnimatePresence>

          {/* Premium Navigation Controls */}
          <div className="absolute inset-0 flex items-center justify-between px-4 z-20 pointer-events-none">
            <button 
              onClick={prevSlide}
              className="pointer-events-auto p-2 md:p-3 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-orange-600 shadow-lg translate-x-[-10px] group-hover:translate-x-0"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={nextSlide}
              className="pointer-events-auto p-2 md:p-3 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-orange-600 shadow-lg translate-x-[10px] group-hover:translate-x-0"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Floating Pagination Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2 bg-black/20 backdrop-blur-md px-3 py-2 rounded-full border border-white/20">
            {slides.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  idx === currentIndex ? 'bg-orange-500 w-6' : 'bg-white/50 w-1.5 hover:bg-white'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialDayBanner;