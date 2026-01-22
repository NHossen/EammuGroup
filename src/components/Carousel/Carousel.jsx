import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPassport, FaPlaneDeparture, FaSuitcaseRolling, FaStar } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

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
    <>
    <Helmet>
        <title>Eammu | Visa, Student Visa, Immigration & Travel Services</title>
        <meta
          name="description"
          content="Explore visa, immigration, and travel services to USA, UK, Canada, Europe, Japan, UAE and more. Trusted by thousands globally."
        />
        <meta
          name="keywords"
          content="best travel agency in Bangladesh, trusted travel agency Bangladesh, reliable travel agency Bangladesh, student visa consultant in Dhaka, best student visa consultant in Dhaka, education consultant near Dhaka, student visa processing in Bangladesh, how to apply student visa from Bangladesh, travel agency for Europe visa Bangladesh, visa appointment service in Bangladesh, Albania visa processing Bangladesh,best travel agency dubai , best travel agency india"
        />
        <meta name="author" content="Eammu Holidays" />
        <meta property="og:title" content="Eammu - Trusted Visa & Immigration Services" />
        <meta property="og:description" content="Work, study, or travel — we help you get there. 98% visa success rate. Expert support in Dubai And Bangladesh." />
        <meta property="og:image" content="https://eammu.com/eammuicon.jpg" />
        <meta property="og:url" content="https://eammu.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Eammu | Work, Study & Travel Visas" />
        <meta name="twitter:description" content="From UAE to Europe — let Eammu manage your visa and travel goals." />
        <meta name="twitter:image" content="https://eammu.com/es.jpg" />
      </Helmet>
    <div className="relative w-full h-[90vh] overflow-hidden">
      <div
        ref={carouselRef}
        className="carousel w-full h-full flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth scrollbar-hide"
      >
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item w-full h-full snap-center relative flex-shrink-0">
          <img
            src="/eammu_banner.webp"
            className="object-cover w-full h-full"
            alt="Welcome to Eammu - Your Travel Partner"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white text-center px-6">
            <div>
              <h1 className="text-5xl font-bold mb-4">Welcome to Eammu</h1>
              <p className="text-lg font-bold mb-6">Connecting You To The World — Your Travel And Global Mobility Partner.</p>
              <Link 
                to="/our-services" 
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
            src="https://ben.edu/wp-content/uploads/2023/08/Ben-Headers-7.png.webp"
            className="object-cover w-full h-full"
            alt="Why Choose Eammu - Trusted Immigration Partner"
            loading="lazy"
          />
           <div className="absolute bg-black/30 inset-0 flex flex-col items-center justify-center text-white text-center px-6">
            <div>
              <h1 className="text-4xl font-bold mb-4 ">Target IELTS & Immigration Center - TIIC</h1>
              <p className="text-lg font-bold mb-6 ]">TIIC is recognized as the best language academy for IELTS, PTE, and Spoken English.</p>
              <Link 
                to="/target-ielts-and-immigration-center" 
                className="btn bg-white text-[#005a31] hover:bg-[#005a31] hover:text-white border border-[#005a31]"
                style={{ pointerEvents: 'auto', position: 'relative', zIndex: 10 }}
              >
                Explore More
              </Link>
              
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
            src="/eammu_travel_final.webp"
            className="object-cover w-full h-full"
            alt="Global Visa Destinations - Eammu Holidays"
            loading="eager"
          />
          <div className="absolute inset-0  flex items-center justify-center text-white px-6 text-center">
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
            src="/eammu_banner_four.webp"
            className="object-cover w-full h-full"
            alt="Client Testimonials - Real Success Stories"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white px-6 text-center">
            <div>
              
             <div className='mt-48'>
              <Link to="/testimonials" className="btn bg-white text-[#005a31] hover:bg-[#005a31] hover:text-white border border-[#005a31] mt-4">
                Customer Review
              </Link>
             </div>
              
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

export default Carousel;
