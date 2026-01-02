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