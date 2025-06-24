
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPassport, FaPlaneDeparture, FaSuitcaseRolling, FaStar } from 'react-icons/fa';

const Carousel = () => {
  const carouselRef = useRef(null);

  // Auto-scroll every 8 seconds
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
    }, 10000);

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

  const serviceLinks = [
    { icon: <FaPassport />, title: 'Visa Services', link: '/visaservices' },
    { icon: <FaPlaneDeparture />, title: 'Air Tickets', link: '/airtickets' },
    { icon: <FaSuitcaseRolling />, title: 'Tour Packages', link: '/tourpackages' },
    { icon: <FaStar />, title: 'Special Offers', link: '/offers' },
  ];

  return (
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
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white text-center px-6">
            <div>
              <h1 className="text-5xl font-bold mb-4">Welcome to Eammu</h1>
              <p className="text-lg mb-6">Your partner in digital innovation and global mobility.</p>
              <Link to="/about" className="btn bg-white text-[#005a31] hover:bg-[#005a31] hover:text-white border border-[#005a31]">
                Explore More
              </Link>

              {/* Service Links */}
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                {serviceLinks.map((service, idx) => (
                  <Link
                    key={idx}
                    to={service.link}
                    className="group flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow transition-colors duration-300 hover:bg-[#005a31]"
                  >
                    <span className="text-2xl text-[#005a31] transition-colors duration-300 group-hover:text-white">
                      {service.icon}
                    </span>
                    <span className="mt-2 font-medium text-sm md:text-base text-[#005a31] transition-colors duration-300 group-hover:text-white">
                      {service.title}
                    </span>
                  </Link>
                ))}
              </div>
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
  );
};

export default Carousel;
