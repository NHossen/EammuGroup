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

const Header = () => {
  return (
    <>
      {/* Fixed Notice Bar */}
      <div className="w-full h-10 bg-[#005a31] fixed top-0 left-0 z-50 flex items-center justify-center">
        <p className="text-white text-sm">
  📢 <strong className="text-yellow-400">Important Notice:</strong> We're <span className="text-green-200 font-semibold">open now</span>! Enjoy <span className="text-yellow-300 font-bold">20% OFF</span> + <span className="text-blue-200 font-semibold">FREE Visa Assistance</span>. One place for everything — <span className="underline">Tourist Visas</span>, <span className="underline">Student Visas</span>, and the <span className="underline">Cheapest Air Tickets</span>!
</p>


      </div>

      {/* Main Navbar */}
      <div className="w-full fixed top-10 left-0 z-40 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <Navbar fluid rounded>
            {/* Brand */}
            <NavbarBrand href="/">
              <img src={logo} className="h-10 mr-3" alt="Eammu Logo" />
            </NavbarBrand>

            {/* Right Side */}
            <div className="flex md:order-2">
              <Link to="/contact">
                <Button className="bg-[#005a31] hover:bg-white hover:text-[#005a31] hover:border hover:border-[#005a31] text-white">
                  Enroll Now
                </Button>
              </Link>
              <NavbarToggle />
            </div>

            {/* Links */}
            <NavbarCollapse>
              <NavbarLink as={NavLink} to="/" className="text-[#005a31] hover:underline">
                Home
              </NavbarLink>

              {/* Responsive Dropdown */}
              <div className="relative group hidden">
                <NavbarLink as="div" className="text-[#005a31] cursor-pointer">
                  Our Services
                </NavbarLink>
                <div className="lg:absolute lg:top-6 lg:left-0 hidden lg:group-hover:block bg-white rounded shadow-md z-50">
                  <ul className="py-2 px-4 space-y-1 lg:w-48">
                    <li>
                      <Link to="/visaservices" className="block text-[#005a31] hover:underline">
                        Visa Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/airtickets" className="block text-[#005a31] hover:underline">
                        Air Ticket
                      </Link>
                    </li>
                    <li>
                      <Link to="/tourpackages" className="block text-[#005a31] hover:underline">
                        Tour Packages
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Mobile dropdown manually shown */}
                <div className="block lg:hidden mt-2 space-y-1">
                  <Link to="/visaservices" className="block text-[#005a31] pl-4 hover:underline">Visa Services</Link>
                  <Link to="/airtickets" className="block text-[#005a31] pl-4 hover:underline">Air Ticket</Link>
                  <Link to="/tourpackages" className="block text-[#005a31] pl-4 hover:underline">Tour Packages</Link>
                </div>
              </div>

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
      </div>

      {/* Spacer to push content below navbar */}
      <div className="h-[100px]"></div>
    </>
  );
};

export default Header;
