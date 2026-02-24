import React, { useState } from 'react'; // useState যোগ করা হয়েছে
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const destinations = [
  { name: "USA", link: "/visa-services#usa", image: "https://visadone.com/wp-content/uploads/2023/02/USA-VISA.png", price: "From $450" },
  { name: "UK", link: "/visa-services#uk", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkgBKQsFv4LdWUzfgaoMj5srhPn0vAuU9X6Q&s", price: "From $500" },
  { name: "Canada", link: "/visa-services#canada", image: "https://pelicanmigration.com/wp-content/uploads/2024/01/Canada-Visitor-Visa.jpg", price: "From $470" },
  { name: "Europe (Schengen)", link: "/visa-services#europe", image: "https://www.babaaztravels.com/wp-content/uploads/2023/05/Schengen-Visit-Visa-Requirements-Babaaz-Travels.jpeg", price: "From $400" },
  { name: "Australia", link: "/visa-services#australia", image: "https://www.kkday.com/en-sg/blog/wp-content/uploads/Aussie-VTL-1170x680.jpg", price: "From $600" },
  { name: "Japan", link: "/visa-services#japan", image: "https://www.babaaztravels.com/wp-content/uploads/2022/04/japan.jpg", price: "From $550" },
  { name: "Dubai (UAE)", link: "/visa-services#dubai", image: "https://canadiangeographic.ca/wp-content/uploads/2022/10/dubai-skyline-1440x1011.jpg", price: "From $350" },
  { name: "Malaysia", link: "/visa-services#malaysia", image: "https://travelobiz.com/wp-content/uploads/2023/01/Malaysia-eVisa-with-Map.jpg", price: "From $300" },
];

const AirTickets = () => {
  const [flights, setFlights] = useState([]); // লাইভ ফ্লাইট ডাটা রাখার জন্য
  const [loading, setLoading] = useState(false);

  // Flight Search Logic (Amadeus বা অন্য API-এর জন্য)
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);

    // এখানে আপনার API Call হবে। আপাতত একটি ডেমো ডাটা সেট করছি যা API কানেক্ট করলে অটো আপডেট হবে।
    setTimeout(() => {
      const demoFlights = [
        { id: 1, airline: "Emirates", from: "DAC", to: "DXB", price: "$420", time: "10:30 AM" },
        { id: 2, airline: "Qatar Airways", from: "DAC", to: "LHR", price: "$750", time: "02:15 PM" },
        { id: 3, airline: "Biman Bangladesh", from: "DAC", to: "JFK", price: "$1100", time: "11:00 PM" },
      ];
      setFlights(demoFlights);
      setLoading(false);
    }, 1500);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Eammu Holidays",
    "url": "https://eammu.com/air-tickets",
    "description": "Book the cheapest flights with Eammu Holidays."
  };

  return (
    <div className="px-4 sm:px-6 lg:px-10 container mx-auto py-10">
      <Helmet>
        <title>Cheapest Flight Ticket | Eammu Holidays</title>
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#005a31] mb-4">Air Tickets Booking</h1>
        <p className="text-gray-700">Find real-time flight rates and book instantly.</p>
      </div>

      {/* Flight Search Bar */}
      <section className="bg-green-50 p-6 rounded-2xl shadow-md mb-10 border border-green-100">
        <h2 className="text-2xl font-semibold text-[#005a31] mb-4 text-center">Live Flight Search</h2>
        <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-end">
          <div className="flex flex-col">
            <label className="font-medium mb-1">From (Airport Code)</label>
            <input type="text" placeholder="e.g. DAC" className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-600" required />
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-1">To (Airport Code)</label>
            <input type="text" placeholder="e.g. DXB" className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-600" required />
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-1">Departure</label>
            <input type="date" className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-600" required />
          </div>
          <button type="submit" className="bg-[#005a31] text-white px-4 py-3 rounded-lg font-bold hover:bg-[#003e24] transition-all">
            {loading ? "Searching..." : "Search Flights"}
          </button>
        </form>
      </section>

      {/* --- LIVE SEARCH RESULTS --- */}
      {flights.length > 0 && (
        <section className="mb-10 animate-fade-in">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Available Flights</h2>
          <div className="space-y-4">
            {flights.map((flight) => (
              <div key={flight.id} className="bg-white border-l-4 border-green-600 shadow-sm p-6 rounded-xl flex flex-col md:flex-row justify-between items-center hover:shadow-md transition">
                <div className="flex items-center gap-4">
                  <div className="bg-gray-100 p-3 rounded-full font-bold text-green-800 text-xs">✈️ {flight.airline}</div>
                  <div>
                    <p className="text-lg font-bold">{flight.from} → {flight.to}</p>
                    <p className="text-sm text-gray-500">Departure: {flight.time}</p>
                  </div>
                </div>
                <div className="text-center md:text-right mt-4 md:mt-0">
                  <p className="text-2xl font-bold text-green-700 mb-2">{flight.price}</p>
                  <a href={`https://wa.me/8801631312524?text=I'm interested in the ${flight.airline} flight from ${flight.from} to ${flight.to}`} 
                     className="bg-green-800 text-white px-6 py-2 rounded-full text-sm hover:bg-black transition">
                    Book This Flight
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Visual Section */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <img src="https://e3.365dm.com/24/07/1600x900/skynews-plane-cloud_6626642.jpg?20240715110714" alt="Plane" className="rounded-2xl w-full h-72 object-cover shadow-md" />
        <img src="https://www.shutterstock.com/image-vector/luggage-blue-air-ticket-float-600nw-2170367829.jpg" alt="Tickets" className="rounded-2xl w-full h-72 object-cover shadow-md" />
      </div>

      {/* Popular Routes */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-[#005a31] mb-6 text-center">Popular Routes & Deals</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {destinations.map((dest, index) => (
            <div key={index} className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-all flex flex-col justify-between group">
              <Link to={dest.link} className="relative">
                <img src={dest.image} alt={dest.name} className="w-full h-40 object-cover" loading="lazy" />
              </Link>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-[#005a31]">{dest.name}</h3>
                <p className="text-gray-700 text-sm mb-3">{dest.price}</p>
                <a href={`https://wa.me/8801631312524?text=Book flight to ${dest.name}`} className="block bg-[#005a31] text-white py-2 rounded-full hover:bg-black transition">
                  Check Seats
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <div className="text-center mt-12 bg-green-50 py-10 rounded-[3rem]">
        <p className="text-xl font-medium text-gray-800 mb-6">Need expert help? Contact us now.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="https://wa.me/8801631312524" className="bg-[#005a31] text-white px-10 py-3 rounded-full hover:bg-black transition">
            WhatsApp Booking
          </a>
          <Link to="/" className="bg-white border border-green-800 text-green-800 px-10 py-3 rounded-full hover:bg-green-50 transition">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AirTickets;

///



<div
      id="slide1"
      className="carousel-item w-full min-h-screen md:h-screen snap-center relative flex-shrink-0 flex flex-col bg-[#005a31] overflow-x-hidden"
    >
      {/* 1. Background Image + Premium Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/eammu_holidays_bg.webp"
          className="w-full h-full object-cover"
          alt="Eammu Holidays Background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#005a31]/95 via-[#005a31]/85 to-[#01a1d4]/70"></div>
      </div>

      {/* 2. Top Navigation Pill (Sticky-style but relative to prevent overlap) */}
      <div className="relative z-30 w-full pt-4 md:pt-8 px-3 md:px-6 flex justify-center">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-full w-full max-w-5xl px-2 md:px-10 py-3 shadow-2xl flex items-center justify-around md:justify-center gap-1 md:gap-10 border border-white/20">
          {serviceLinks?.map((service, idx) => (
            <Link key={idx} to={service.link} className="flex flex-col items-center group flex-1 md:flex-none">
              <div className="bg-[#cc1d24] w-7 h-7 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white mb-1 transition-transform group-hover:scale-110 shadow-md">
                {/* Ensure your icons are sized correctly for mobile */}
                <span className="scale-75 md:scale-100">{service.icon}</span>
              </div>
              <span className="text-[6.5px] md:text-[11px] font-extrabold text-gray-800 uppercase tracking-tighter md:tracking-tight text-center">
                {service.title}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* 3. Main Hero Content */}
      <div className="relative z-10 flex-grow flex items-center px-4 md:px-20 py-8 md:py-0">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-14 items-center w-full">
          
          {/* Right Image Box (First on Mobile for Visual Impact) */}
          <div className="relative w-full max-w-[320px] md:max-w-xl order-1 md:order-2 mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl md:rounded-[3rem] overflow-hidden border-4 md:border-[12px] border-white/20 shadow-2xl bg-white p-1"
            >
              {/* Maintain perfect rectangular ratio 16:10 */}
              <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl md:rounded-[2.5rem]">
                <img
                  src="/eammu_holidays_bg.webp"
                  className="w-full h-full object-cover"
                  alt="Promotion"
                />
              </div>
            </motion.div>

            {/* Promo Badge */}
            <div className="absolute -bottom-3 -right-3 md:-bottom-6 md:-right-6 bg-[#cc1d24] text-white w-14 h-14 md:w-24 md:h-24 rounded-full flex flex-col items-center justify-center font-black border-4 border-white shadow-xl z-20 animate-pulse">
              <span className="text-[7px] md:text-[10px]">SAVE</span>
              <span className="text-sm md:text-2xl leading-none">20%</span>
            </div>
          </div>

          {/* Left Text Content */}
          <div className="text-white text-center md:text-left order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              <h1 className="text-3xl md:text-6xl font-black leading-tight mb-4 drop-shadow-2xl">
                Eammu Holidays <br />
                <span className="text-yellow-400 text-2xl md:text-5xl">Since 1994</span>
              </h1>

              <p className="text-sm md:text-xl opacity-90 max-w-xl mb-8 leading-relaxed font-medium">
                Your trusted global travel partner in the UAE. 
                Connecting you to the world for over 30 years.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-10">
              <button className="flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-bold shadow-xl hover:scale-105 transition-all text-xs md:text-base">
                <span className="bg-[#25D366] text-white p-1 rounded-full text-lg">💬</span>
                Chat
              </button>
              <button className="flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-bold shadow-xl hover:scale-105 transition-all text-xs md:text-base">
                <span className="bg-[#005a31] text-white p-1 rounded-full text-lg">📞</span>
                Consult
              </button>
              <Link
                to="/our-services"
                className="bg-[#cc1d24] text-white px-8 py-3 rounded-full font-bold shadow-xl hover:bg-red-700 transition-all text-xs md:text-base uppercase tracking-widest"
              >
                Explore More
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 pt-6 border-t border-white/20">
              <div className="text-center">
                <p className="text-lg md:text-2xl font-black">IATA</p>
                <p className="text-[8px] md:text-[10px] opacity-60">Accredited</p>
              </div>
              <div className="text-center">
                <p className="text-lg md:text-2xl font-black">31+</p>
                <p className="text-[8px] md:text-[10px] opacity-60">Years</p>
              </div>
              <div className="text-center">
                <p className="text-yellow-400 text-xs md:text-lg">★★★★★</p>
                <p className="text-[8px] md:text-[10px] opacity-60">4.9/5 Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Improved Bottom Decorative Curve */}
      <div className="relative z-20 w-full mt-auto">
        <svg 
          className="w-full h-[60px] md:h-[120px] drop-shadow-[0_-5px_10px_rgba(0,0,0,0.1)]" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="white"
            transform="rotate(180 600 60)"
          />
        </svg>
      </div>

      {/* 5. Navigation Arrows - Adjusted for touch targets */}
      <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-40">
        <button
          className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black pointer-events-auto transition-all"
          onClick={() => scrollToSlide("slide4")}
        >
          ❮
        </button>
        <button
          className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black pointer-events-auto transition-all"
          onClick={() => scrollToSlide("slide2")}
        >
          ❯
        </button>
      </div>
      {/* 4. Bottom Decorative Curve (White Wave) */}
<div className="relative z-20 w-full mt-auto">
  <svg 
    className="w-full h-[50px] md:h-[110px] block" 
    viewBox="0 0 1200 120" 
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
      fill="white"
      transform="rotate(180 600 60)"
    />
  </svg>
</div>
    </div>
