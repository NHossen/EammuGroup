import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppFloatingButton = () => {
  const phoneNumber = "8801631312524";
  const message = encodeURIComponent("Hello! I'd like to chat.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-8 right-8 z-[999] flex flex-col items-end gap-2">
      
      {/* 1. Elegant Tooltip Label */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.4, ease: "easeOut" }}
        className="relative group"
      >
        <div className="bg-white text-slate-800 px-4 py-2 rounded-xl text-sm font-medium shadow-xl border border-emerald-50/50 backdrop-blur-sm">
          <span className="relative z-10">Chat with us!</span>
          {/* Subtle arrow */}
          <div className="absolute -bottom-1 right-5 w-2 h-2 bg-white rotate-45 border-r border-b border-emerald-50/50" />
        </div>
      </motion.div>

      <div className="relative group">
        
        {/* 2. Soft "Liquid" Pulse Rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 1 }}
              animate={{ 
                opacity: [0, 0.4, 0], 
                scale: [1, 2],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                delay: i * 1.5,
                ease: "easeInOut" 
              }}
              className="absolute h-full w-full bg-emerald-400 rounded-full"
            />
          ))}
        </div>

        {/* 3. The Main Button with Magnetic Effect */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          // Hover: Slight lift and glow
          whileHover={{ 
            y: -5,
            scale: 1.05,
            boxShadow: "0 20px 25px -5px rgba(16, 185, 129, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="relative z-10 flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-lg overflow-hidden"
        >
          {/* Animated Shine Sweep */}
          <motion.div 
            animate={{ x: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear", repeatDelay: 1 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12"
          />

          {/* WhatsApp Icon */}
          <motion.svg
            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-8 h-8 fill-white z-10"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.4-11.3 2.5-2.4 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.5 5.5-9.3 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.7 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </motion.svg>
        </motion.a>

        {/* 4. Refined Online Status Indicator */}
        <div className="absolute top-0 right-0 z-20">
          <span className="flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-emerald-500 border-[3px] border-white shadow-sm"></span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppFloatingButton;