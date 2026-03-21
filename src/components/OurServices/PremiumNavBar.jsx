import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { 
  Globe, 
  Plane, 
  Map, 
  Wind, 
  GraduationCap, 
  Gift 
} from "lucide-react";

const menuItems = [
  { id: 0, label: "Visa", icon: Globe, path: "/visa" },
  { id: 1, label: "Flights", icon: Plane, path: "/flights" },
  { id: 2, label: "Holidays", icon: Map, path: "/holidays" },
  { id: 3, label: "Activities", icon: Wind, path: "/activities" },
  { id: 4, label: "Abroad", icon: GraduationCap, path: "/study-abroad" },
  { id: 5, label: "Offers", icon: Gift, path: "/offers" },
];

const PremiumNavBar = () => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const currentIndex = menuItems.findIndex(item => item.path === location.pathname);
    if (currentIndex !== -1) setActiveIndex(currentIndex);
  }, [location.pathname]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % menuItems.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center w-full p-2 sm:p-6">
      <nav className="relative flex items-center justify-around w-full max-w-4xl h-[65px] sm:h-[80px] 
                    bg-[#ffcc00] rounded-[25px] sm:rounded-[35px] shadow-2xl overflow-visible">
        
        {/* LIQUID INDICATOR UNIT */}
        <motion.div
          className="absolute top-0 h-full flex justify-center pointer-events-none"
          animate={{ x: `${activeIndex * 100}%` }} 
          transition={{ type: "spring", stiffness: 220, damping: 28 }}
          style={{ width: `${100 / menuItems.length}%`, left: 0 }}
        >
         {/* REMOVED DEEP CURVE SVG - Container now transparent */}
  <div className="relative w-[120px] -top-[1.2px] pointer-events-none bg-transparent">
     {/* SVG removed as per request */}
  </div>

          {/* FLOATING CIRCLE LINK */}
          <Link
            to={menuItems[activeIndex].path}
            className="absolute -top-8 sm:-top-12 w-14 h-14 sm:w-20 sm:h-20 bg-[#005a31] rounded-full 
                       border-[8px] sm:border-[8px] border-[#e8ede7] flex items-center justify-center 
                       shadow-[0_10px_20px_rgba(0,0,0,0.3)] z-30 pointer-events-auto"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="text-[#ffffff]"
              >
                {React.createElement(menuItems[activeIndex].icon, {
                  size: window.innerWidth < 640 ? 22 : 32,
                  strokeWidth: 2.5,
                })}
              </motion.div>
            </AnimatePresence>
          </Link>
        </motion.div>

        {/* MENU ITEMS */}
        {menuItems.map((item, index) => {
          const isActive = activeIndex === index;
          const Icon = item.icon;

          return (
            <Link
              key={item.id}
              to={item.path}
              onClick={() => setActiveIndex(index)}
              className="relative z-10 flex flex-col items-center justify-center w-full h-full no-underline"
            >
              <div className={`transition-all duration-700 ease-in-out 
                ${isActive ? "opacity-0 -translate-y-12 sm:-translate-y-16 scale-50" : "opacity-40 hover:opacity-100"}`}>
                <Icon size={window.innerWidth < 640 ? 20 : 24} className="text-white" />
              </div>

              <span className={`text-[8px] xs:text-[10px] sm:text-xs font-bold transition-all duration-500
                ${isActive ? "text-white translate-y-1 sm:translate-y-2" : "text-gray-500 translate-y-2 sm:translate-y-4"}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default PremiumNavBar;