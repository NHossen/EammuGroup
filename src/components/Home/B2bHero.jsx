import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Palmtree, FileText, Car, Mail, Moon, Plane, Hotel } from 'lucide-react';

const B2BPortal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const promoCards = [
    { id: 1, img: "https://images.unsplash.com/photo-1582672097782-aa07b0d5466a?auto=format&fit=crop&w=800&q=80", title: "Dubai Miracle Garden", price: "AED 75", color: "from-blue-600/40" },
    { id: 2, img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80", title: "Dubai City Tour", price: "AED 35", color: "from-cyan-500/40" },
    { id: 3, img: "https://images.unsplash.com/photo-1551882547-ff43c63faf76?auto=format&fit=crop&w=800&q=80", title: "Medical Services", price: "Inquire", color: "from-emerald-600/40" },
    { id: 4, img: "https://images.unsplash.com/photo-1523394664531-12c85b1bd0c4?auto=format&fit=crop&w=800&q=80", title: "Luxury Desert Stay", price: "AED 450", color: "from-orange-600/40" },
  ];

  const navItems = [
    { icon: <ShieldCheck size={28} className="text-teal-600" />, label: "INSURANCE" },
    { icon: <Palmtree size={28} className="text-cyan-500" />, label: "HOLIDAYS" },
    { icon: <FileText size={28} className="text-blue-500" />, label: "VISA" },
    { icon: <Car size={28} className="text-red-500" />, label: "CAR" },
    { icon: <Mail size={28} className="text-orange-400" />, label: "NEWSLETTER" },
    { icon: <Moon size={28} className="text-yellow-500" />, label: "UMRAH" },
    { icon: <Plane size={28} className="text-blue-600" />, label: "FLIGHT" },
    { icon: <Hotel size={28} className="text-orange-800" />, label: "HOTEL" },
  ];

  // Auto-slide logic: updates the index every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === promoCards.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [promoCards.length]);

  return (
    <div className="w-full bg-white font-sans overflow-hidden">
      {/* HERO SECTION */}
      <div className="relative min-h-[580px] bg-[#1a121d] pt-16 pb-24 px-4 flex flex-col items-center overflow-hidden">
        
        {/* Islamic Geometric Pattern Background */}
        <div className="absolute inset-0 opacity-[0.12] pointer-events-none" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l2.5 7.5L40 10l-7.5 2.5L30 20l-2.5-7.5L20 10l7.5-2.5z' fill='%23ffffff' fill-opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}>
        </div>

        {/* Header Text */}
        <div className="relative z-10 text-center mb-12">
          <h2 className="text-yellow-500 font-serif italic text-2xl md:text-3xl mb-2">Want to Become</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <h1 className="text-white text-4xl md:text-6xl font-black tracking-tighter uppercase">A Travel Agent?</h1>
            <button className="bg-[#cc3300] hover:bg-red-700 text-white px-10 py-3.5 rounded-lg font-black uppercase text-sm transition-all shadow-2xl">
              Register Now
            </button>
          </div>
        </div>

        {/* CAROUSEL CARDS */}
        <div className="relative z-10 w-full max-w-6xl px-4 overflow-hidden">
          <motion.div 
            className="flex gap-6"
            animate={{ x: `-${currentIndex * (100 / (window.innerWidth < 768 ? 1 : 3.1))}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {promoCards.map((card) => (
              <div 
                key={card.id} 
                className="min-w-full md:min-w-[calc(33.33%-1rem)] group relative h-48 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shrink-0"
              >
                <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className={`absolute inset-0 bg-gradient-to-t ${card.color} via-black/30 to-transparent p-6 flex flex-col justify-end`}>
                  <p className="text-white text-[10px] font-black uppercase tracking-[0.2em] mb-1">{card.title}</p>
                  <h3 className="text-cyan-400 font-black text-xl tracking-tighter uppercase leading-none">
                    Starting From <span className="text-white">{card.price}</span>
                  </h3>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-10">
            {promoCards.map((_, i) => (
              <button 
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${currentIndex === i ? 'w-10 bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]' : 'w-2 bg-gray-600 hover:bg-gray-400'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* FLOATING NAVIGATION */}
      <div className="relative z-20 max-w-7xl mx-auto -mt-12 px-4 pb-12">
        <div className="bg-[#f0f9ff] rounded-t-[3rem] rounded-b-2xl shadow-2xl p-8 md:p-10 border-b-4 border-blue-100">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8">
            {navItems.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center group cursor-pointer">
                <div className="mb-4 transform group-hover:scale-110 group-hover:-translate-y-1 transition-all">
                  {item.icon}
                </div>
                <span className="text-[#001f3f] text-[10px] md:text-[11px] font-black tracking-[0.15em] text-center uppercase">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default B2BPortal;