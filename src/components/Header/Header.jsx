import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/eammu.png';
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Button,
} from 'flowbite-react';
import { useState } from 'react';

const Header = () => {
  const [langOpen, setLangOpen] = useState(false);

  return (
    <>
      {/* 🔹 Fixed Notice Bar */}
      <div className="w-full fixed top-0 left-0 z-50 bg-[#005a31] flex items-center justify-center px-2 py-2">
        <p className="text-white text-sm text-center leading-snug sm:text-base sm:px-4">
          📢
          Enjoy <span className="text-yellow-300 font-bold">20% OFF</span> +
          <span className="text-blue-200 font-semibold"> FREE Visa Assistance</span>.
          One place for everything — <span className="text-yellow-300 font-bold">With Eammu</span> !
          
        </p>
        {/* 🔥 Translation Toggle Button */}
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="px-2 py-1 border border-[#ffffff] text-[#ffffff] rounded hover:bg-[#005a31] hover:text-white text-sm"
              >
                🌐Langguage
              </button>

              {/* 🔥 Translation Dropdown */}
              {langOpen && (
                <div className="absolute right-0 top-10 bg-white shadow-lg rounded p-2 w-32 z-[2000]">
                  <button className="block w-full text-left px-2 py-1 hover:bg-gray-100">English</button>
                  <button className="block w-full text-left px-2 py-1 hover:bg-gray-100">বাংলা</button>
                  <button className="block w-full text-left px-2 py-1 hover:bg-gray-100">Հայերեն</button>
                  <button className="block w-full text-left px-2 py-1 hover:bg-gray-100">Русский</button>
                </div>
              )}
      </div>

      <div className="w-full fixed left-0 z-40 bg-white shadow-md top-[65px] sm:top-[40px]">
  <Navbar className="min-w-0">
    
    {/* Logo */}
    <NavbarBrand href="/">
      <img
        src={logo}
        className="h-9 min-[370px]:h-10 mr-1 min-[370px]:mr-3"
        alt="Eammu Logo"
      />
    </NavbarBrand>

    {/* RIGHT SIDE ACTIONS */}
    <div className="flex md:order-2 items-center gap-1 min-[370px]:gap-2 relative">

      {/* CTA Button */}
      <Link to="/contact">
        <Button
          size="xs"
          className="
            bg-[#005a31] text-white
            hover:bg-white hover:text-[#005a31]
            hover:border hover:border-[#005a31]
            px-2 min-[370px]:px-4
            text-xs min-[370px]:text-sm
            whitespace-nowrap
          "
        >
          <span className="hidden min-[370px]:inline">Enroll Now</span>
          <span className="inline min-[370px]:hidden">Enroll</span>
        </Button>
      </Link>

      {/* Mobile Menu Toggle */}
      <NavbarToggle />
    </div>

    {/* Navigation Links */}
    <NavbarCollapse>
      <NavbarLink as={NavLink} to="/" className="text-[#005a31] hover:underline">
        Home
      </NavbarLink>

      <NavbarLink as={NavLink} to="/about" className="text-[#005a31] hover:underline">
        About Us
      </NavbarLink>

      <NavbarLink as={NavLink} to="/contact" className="text-[#005a31] hover:underline">
        Contact Us
      </NavbarLink>

      <NavbarLink as={NavLink} to="/blogs" className="text-[#005a31] hover:underline">
        Blogs
      </NavbarLink>
    </NavbarCollapse>

  </Navbar>
</div>


      {/* OFFSET FOR PAGE CONTENT */}
      <div className="pt-[100px] sm:pt-[100px]"></div>
    </>
  );
};

export default Header;
