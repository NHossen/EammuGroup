import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/eammu_logo.webp';
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Button,
} from 'flowbite-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [langOpen, setLangOpen] = useState(false);

  // হোভার এবং ডার্ক মোড কালার ফিক্স করার জন্য এই ক্লাসগুলো ব্যবহার করা হয়েছে
  const navLinkClass = "!text-[#005a31] dark:!text-[#005a31] hover:!text-[#005a31] dark:hover:!text-[#005a31] md:hover:!bg-transparent dark:hover:!bg-transparent hover:underline";

  return (
    <>
      {/* 🔹 Fixed Notice Bar */}
      <div className="w-full fixed top-0 left-0 z-50 bg-[#005a31] dark:bg-[#005a31] flex items-center justify-center px-2 py-2">
        <p className="text-white dark:text-white text-sm text-center leading-snug sm:text-base sm:px-4">
          📢 Enjoy <span className="text-[#ffcc00] font-bold">20% OFF</span> +
          <span className="text-blue-200 font-semibold"> FREE Visa Assistance</span>.
          One place for everything — <span className="text-[#ffcc00] font-bold">With Eammu</span> !
        </p>
        
        <button
          onClick={() => setLangOpen(!langOpen)}
          className="px-2 py-1 border border-[#ffffff] text-[#ffffff] rounded hover:bg-[#005a31] hover:text-white text-sm"
        >
          🌐Language
        </button>

        {langOpen && (
          <div className="absolute right-0 top-10 bg-white dark:bg-white shadow-lg rounded p-2 w-32 z-[2000]">
            <button className="block w-full text-left px-2 py-1 hover:bg-gray-100 text-black dark:text-black">English</button>
            <button className="block w-full text-left px-2 py-1 hover:bg-gray-100 text-black dark:text-black">বাংলা</button>
            <button className="block w-full text-left px-2 py-1 hover:bg-gray-100 text-black dark:text-black">Հայերեն</button>
            <button className="block w-full text-left px-2 py-1 hover:bg-gray-100 text-black dark:text-black">Русский</button>
          </div>
        )}
      </div>

      {/* 🔹 Fixed Navbar Below Notice */}
      <div className="w-full fixed left-0 z-40 bg-white dark:bg-white shadow-md top-[65px] sm:top-[40px] pt-[6px]">
        <Navbar className="!bg-white dark:!bg-white">
          <NavbarBrand href="/">
            <img src={logo} className="h-10 mr-3" alt="Eammu Logo" />
          </NavbarBrand>

        <div className="flex md:order-2 items-center gap-1 sm:gap-2 flex-wrap">
  <Link to="/contact">
    <motion.button
      // Framer Motion Logic
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      
      // Your Specific Modern Gradient Classes
      className="relative flex items-center gap-2 px-6 py-2.5 rounded-[10px] font-bold text-sm text-white 
                 shadow-[0_10px_20px_-10px_rgba(0,90,49,0.6)] 
                 bg-gradient-to-r from-[#005a31] via-[#00a45a] to-[#005a31] bg-[length:200%_auto]
                 hover:bg-right transition-all duration-500 overflow-hidden group"
    >
      {/* The Text with a subtle nudge animation */}
      <span className="relative z-10">Contact Us</span>

      {/* Glossy Overlay (Glass Reflection) */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.button>
  </Link>
  <NavbarToggle className="dark:!text-[#005a31]" />
</div>

          <NavbarCollapse className="dark:!bg-white">
            <NavbarLink as={NavLink} to="/" className={navLinkClass}>
              Home
            </NavbarLink>

            <NavbarLink as={NavLink} to="/about" className={navLinkClass}>
              About Us
            </NavbarLink>

            <NavbarLink as={NavLink} to="/contact" className={navLinkClass}>
              Contact Us
            </NavbarLink>

            <NavbarLink as={NavLink} to="/blogs" className={navLinkClass}>
              Blogs
            </NavbarLink>
          </NavbarCollapse>
        </Navbar>
      </div>

      <div className="pt-[100px] sm:pt-[100px]"></div>
    </>
  );
};

export default Header;

