import { useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/Eammu_logo.png';

const Header = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const slides = carouselRef.current?.querySelectorAll('.carousel-item');
      if (!slides?.length) return;

      const container = carouselRef.current;
      const currentIndex = [...slides].findIndex(
        (slide) => slide.offsetLeft >= container.scrollLeft
      );

      const nextIndex = (currentIndex + 1) % slides.length;
      if (container && slides[nextIndex]) {
        container.scrollTo({
          left: slides[nextIndex].offsetLeft,
          behavior: 'smooth',
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSlide = (id) => {
    const el = document.getElementById(id);
    const container = carouselRef.current;
    if (el && container) {
      container.scrollTo({
        left: el.offsetLeft,
        behavior: 'smooth',
      });
    }
  };

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
                    <NavLink
                      to="/"
                      className={({ isActive }) => (isActive ? 'text-[#005a31] underline' : '')}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <a>Our Services</a>
                    <ul className="menu xl:menu-horizontal lg:min-w-max bg-base-200 rounded-box">
                      <li><Link to="/visaservices" className="hover:text-[#005a31]">Visa Services</Link></li>
                      <li><a className="hover:text-[#005a31]">Air Ticket</a></li>
                      <li><a className="hover:text-[#005a31]">Tour Packages</a></li>
                    </ul>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className={({ isActive }) => (isActive ? 'text-[#005a31] underline' : '')}
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact"
                      className={({ isActive }) => (isActive ? 'text-[#005a31] underline' : '')}
                    >
                      Contact Us
                    </NavLink>
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
                  <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? 'text-[#005a31] underline' : '')}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <details>
                    <summary>Our Services</summary>
                    <ul className="menu bg-base-200 rounded-box">
                      <li><a className="hover:text-[#005a31]">Visa Services</a></li>
                      <li><a className="hover:text-[#005a31]">Air Ticket</a></li>
                      <li><a className="hover:text-[#005a31]">Tour Packages</a></li>
                    </ul>
                  </details>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) => (isActive ? 'text-[#005a31] underline' : '')}
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) => (isActive ? 'text-[#005a31] underline' : '')}
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Navbar End */}
            <div className="navbar-end">
              <Link to="/contact">
                <a className="btn bg-[#005a31] text-white hover:bg-white hover:text-[#005a31] hover:shadow-md hover:border-2 hover:border-[#005a31]">
                  Enroll Now
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-[122px]"></div>

      {/* Carousel */}
      <div className="relative w-full h-[90vh] overflow-hidden">
        <div
          ref={carouselRef}
          className="carousel w-full h-full flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth scrollbar-hide"
        >
          {/* Slide 1 */}
          <div id="slide1" className="carousel-item w-full h-full snap-center relative flex-shrink-0">
            <img
              src="https://i.ibb.co/bj2Wpwzy/green-plane-ecofriendly-environment.jpg"
              className="object-cover w-full h-full"
              alt="Welcome"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white text-center px-6">
              <div>
                <h1 className="text-5xl font-bold mb-4">Welcome to Eammu</h1>
                <p className="text-lg mb-6">Your partner in digital innovation and global mobility.</p>
                <Link to="/about" className="btn bg-white text-[#005a31] hover:bg-[#005a31] hover:text-white border border-[#005a31]">
                  Explore More
                </Link>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2">
              <button className="btn btn-circle" onClick={() => scrollToSlide("slide4")}>❮</button>
              <button className="btn btn-circle" onClick={() => scrollToSlide("slide2")}>❯</button>
            </div>
          </div>

          {/* Slide 2 */}
          <div id="slide2" className="carousel-item w-full h-full snap-center relative flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=1170&auto=format&fit=crop"
              className="object-cover w-full h-full"
              alt="Services"
            />
            <div className="absolute inset-0 bg-[#005a31]/30 flex items-center justify-center text-white text-center px-6">
              <div>
                <h2 className="text-4xl font-semibold mb-4">Our Services</h2>
                <ul className="text-lg space-y-2">
                  <li>🌍 Immigration & Visa Support</li>
                  <li>💻 Web & Marketing Solutions</li>
                  <li>✈️ Global Tour Packages</li>
                </ul>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2">
              <button className="btn btn-circle" onClick={() => scrollToSlide("slide1")}>❮</button>
              <button className="btn btn-circle" onClick={() => scrollToSlide("slide3")}>❯</button>
            </div>
          </div>

          {/* Slide 3 */}
          <div id="slide3" className="carousel-item w-full h-full snap-center relative flex-shrink-0">
            <img
              src="https://plus.unsplash.com/premium_photo-1661963475189-e022934dceb7?q=80&w=1384&auto=format&fit=crop"
              className="object-cover w-full h-full"
              alt="Testimonials"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white px-6 text-center">
              <div>
                <h2 className="text-3xl font-semibold mb-2">What Our Clients Say</h2>
                <p className="italic mb-4">"Eammu helped me get my student visa smoothly. Their service is excellent and transparent!"</p>
                <span>- Mahira Aleen, Bangladesh</span>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2">
              <button className="btn btn-circle" onClick={() => scrollToSlide("slide2")}>❮</button>
              <button className="btn btn-circle" onClick={() => scrollToSlide("slide4")}>❯</button>
            </div>
          </div>

          {/* Slide 4 */}
          <div id="slide4" className="carousel-item w-full h-full snap-center relative flex-shrink-0">
            <img
              src="https://plus.unsplash.com/premium_photo-1661963591821-a7787fd6a4f7?q=80&w=1170&auto=format&fit=crop"
              className="object-cover w-full h-full"
              alt="CTA"
            />
            <div className="absolute inset-0 bg-[#005a31]/30 flex items-center justify-center text-white px-6 text-center">
              <div>
                <h2 className="text-4xl font-bold mb-3">Let’s Get Started!</h2>
                <p className="mb-6">Ready to transform your future with Eammu?</p>
                <Link to="/contact" className="btn bg-white text-[#005a31] hover:bg-[#005a31] hover:text-white border border-[#005a31]">
                  Contact Us Now
                </Link>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2">
              <button className="btn btn-circle" onClick={() => scrollToSlide("slide3")}>❮</button>
              <button className="btn btn-circle" onClick={() => scrollToSlide("slide1")}>❯</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
