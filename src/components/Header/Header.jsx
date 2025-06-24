import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/eammu.png';

const Header = () => {
  return (
    <>
      {/* Fixed Notice Bar */}
      <div className="w-full h-10 bg-[#005a31] fixed top-0 left-0 z-50 flex items-center justify-center">
        <p className="text-white text-sm">📢 Important Notice: Check out our latest visa offers!</p>
      </div>

      {/* Fixed Navbar */}
      <div className="w-full fixed top-10 left-0 z-40 bg-base-100 shadow">
        <div className="p-3 container mx-auto">
          <div className="navbar">
            {/* Navbar Start */}
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-52">
                  <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'text-[#005a31] underline' : ''}>Home</NavLink>
                  </li>
                  <li>
                    <a>Our Services</a>
                    <ul className="menu xl:menu-horizontal lg:min-w-max bg-base-200 rounded-box">
                      <li><Link to="/visaservices" className="hover:text-[#005a31]">Visa Services</Link></li>
                      <li><Link to="/airtickets" className="hover:text-[#005a31]">Air Ticket</Link></li>
                      <li><Link to="/tourpackages" className="hover:text-[#005a31]">Tour Packages</Link></li>
                    </ul>
                  </li>
                  <li>
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'text-[#005a31] underline' : ''}>About Us</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-[#005a31] underline' : ''}>Contact Us</NavLink>
                  </li>
                </ul>
              </div>
              <a href="https://eammu.com/">
                <img className="w-[220px]" src={logo} alt="Eammu Logo" />
              </a>
            </div>

            {/* Navbar Center */}
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <NavLink to="/" className={({ isActive }) => isActive ? 'text-[#005a31] underline' : ''}>Home</NavLink>
                </li>
                <li>
                  <details>
                    <summary>Our Services</summary>
                    <ul className="menu bg-base-200 rounded-box">
                      <li><Link to="/visaservices" className="hover:text-[#005a31]">Visa Services</Link></li>
                      <li><Link to="/airtickets" className="hover:text-[#005a31]">Air Ticket</Link></li>
                      <li><Link to="/tourpackages" className="hover:text-[#005a31]">Tour Packages</Link></li>
                    </ul>
                  </details>
                </li>
                <li>
                  <NavLink to="/about" className={({ isActive }) => isActive ? 'text-[#005a31] underline' : ''}>About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-[#005a31] underline' : ''}>Contact Us</NavLink>
                </li>
              </ul>
            </div>

            {/* Navbar End */}
            <div className="navbar-end">
              <Link to="/contact">
                <span className="btn bg-[#005a31] text-white hover:bg-white hover:text-[#005a31] hover:shadow-md hover:border-2 hover:border-[#005a31]">
                  Enroll Now
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to prevent overlap */}
      <div className="h-[122px]"></div>
    </>
  );
};

export default Header;
