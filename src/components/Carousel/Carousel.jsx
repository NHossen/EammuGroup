import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPassport, FaPlaneDeparture, FaSuitcaseRolling, FaStar } from 'react-icons/fa';

const Carousel = () => {
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
    { icon: <FaStar />, title: 'Special Offers', link: '/offer' },
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
            alt="Welcome to Eammu - Your Travel Partner"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white text-center px-6">
            <div>
              <h1 className="text-5xl font-bold mb-4">Welcome to Eammu</h1>
              <p className="text-lg font-bold mb-6">Connecting You To The World — Your Travel And Global Mobility Partner.</p>
              <Link 
                to="/about" 
                className="btn bg-white text-[#005a31] hover:bg-[#005a31] hover:text-white border border-[#005a31]"
                style={{ pointerEvents: 'auto', position: 'relative', zIndex: 10 }}
              >
                Explore More
              </Link>
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
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
            className="object-cover w-full h-full"
            alt="Why Choose Eammu - Trusted Immigration Partner"
          />
          <div className="absolute inset-0 bg-[#005a31]/40 flex items-center justify-center text-white text-center px-6">
            <div>
              <h2 className="text-4xl font-semibold mb-4">Trusted by Thousands — Your Journey Begins Here</h2>
              <ul className="text-lg space-y-2">
                <li className='text-lg font-bold'>🥇 98% Visa Success Rate</li>
                <li className='text-lg font-bold'>🤝 Partnerships with 30+ Countries</li>
                <li className='text-lg font-bold'>📞 24/7 Support in Bengali, English & Arabic</li>
                <li className='text-lg font-bold'>🏆 5+ Years of Immigration Experience</li>
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
            src="https://cdn.ama.ab.ca/amatravelinternal/articles/images/double-decker-london.jpg"
            className="object-cover w-full h-full"
            alt="Global Visa Destinations - Eammu Services"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white px-6 text-center">
            <div>
              <h2 className="text-3xl font-bold mb-2">Work, Study, or Travel — We Take You There</h2>
              <p className="text-lg font-bold mb-4">
                🇺🇸 USA, 🇨🇦 Canada, 🇬🇧 UK, 🇪🇺 Schengen, 🇦🇺 Australia, 🇯🇵 Japan, 🇲🇾 Malaysia<br />
                🕋 Hajj & Umrah (Special Umrah 2025 Offer!)
              </p>
              <Link to="/visaservices" className="btn bg-white text-[#005a31] hover:bg-[#005a31] hover:text-white border border-[#005a31]">
                Explore Countries
              </Link>
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
            src="https://images.unsplash.com/photo-1747276737245-b10e95175577?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="object-cover w-full h-full"
            alt="Client Testimonials - Real Success Stories"
          />
          <div className="absolute inset-0 bg-[#005a31]/40 flex items-center justify-center text-white px-6 text-center">
            <div>
              <h2 className="text-4xl font-bold mb-3">Real Stories. Real Success.</h2>
              <ul className="text-lg space-y-2">
                <li className='text-lg font-bold'>🎓 Students Visa Approved</li>
                <li className='text-lg font-bold'>👷 Workers Departing to Europe & UAE</li>
                <li className='text-lg font-bold'>✈️ Group Tour to Thailand | Photos & Memories</li>
                <li className='text-lg font-bold'>📸 See Our Client Testimonials & Video Stories</li>
              </ul>
              <Link to="/testimonials" className="btn bg-white text-[#005a31] hover:bg-[#005a31] hover:text-white border border-[#005a31] mt-4">
                Customer Review
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
