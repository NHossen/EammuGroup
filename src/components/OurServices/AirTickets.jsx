import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

// পপুলার ডেস্টিনেশন ডাটা
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

// এপিআই বেইস ইউআরএল
const API_BASE_URL = "https://backend-eammu.onrender.com";

// সময় ফরম্যাট করার ফাংশন
const formatTime = (dateTimeString) => {
  const date = new Date(dateTimeString);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

const AirTickets = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tripType, setTripType] = useState('one-way');
  const [suggestions, setSuggestions] = useState({ from: [], to: [] });
  const [inputNames, setInputNames] = useState({ from: '', to: '' });
  //Details Flight Button
  const [selectedFlight, setSelectedFlight] = useState(null);

  // এয়ারপোর্ট সাজেশনের জন্য Debouncing
  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputNames.from.length >= 2 && !inputNames.from.includes('(')) fetchSuggestions(inputNames.from, 'from');
      if (inputNames.to.length >= 2 && !inputNames.to.includes('(')) fetchSuggestions(inputNames.to, 'to');
    }, 500);
    return () => clearTimeout(timer);
  }, [inputNames.from, inputNames.to]);

  const fetchSuggestions = async (keyword, type) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/city-search?keyword=${keyword}`);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setSuggestions(prev => ({ 
        ...prev, 
        [type]: Array.isArray(data) ? data : [] 
      }));
    } catch (err) { 
      console.error("Error fetching suggestions:", err.message); 
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFlights([]);

    const date = e.target.departureDate.value;
    const returnDate = e.target.returnDate ? e.target.returnDate.value : '';
    const adults = e.target.adults.value;
    const children = e.target.childrenCount.value;

    let url = `${API_BASE_URL}/api/search-flights?origin=${inputNames.from}&destination=${inputNames.to}&date=${date}&adults=${adults}&children=${children}`;
    
    if (tripType === 'round-trip' && returnDate) {
      url += `&returnDate=${returnDate}`;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (response.ok) setFlights(data);
      else alert(data.detail || "No flights found.");
    } catch (error) { 
      alert("Server error. Please check backend."); 
    } finally { 
      setLoading(false); 
    }
  };

  return (
    <div className=" min-h-screen pb-20 font-sans">
      <Helmet><title>Flight Search Bangladesh | Eammu Holidays</title></Helmet>

      {/* Hero Section */}
      <section className="bg-[#004d2c] pt-8 pb-24 px-4 text-center">
        <h1 className="text-3xl md:text-3xl font-bold text-white mb-4 tracking-tight">Your Next Adventure With Eammu Holidays</h1>
        <p className="text-white font-bold mb-4">
          Search flights using airport codes for best results —{" "}
          <span className="bg-white text-green-800 px-2 py-1 rounded mx-1">DXB</span> (Dubai),{" "}
          <span className="bg-white text-green-800 px-2 py-1 rounded mx-1">DAC</span> (Dhaka),{" "}
          <span className="bg-white text-green-800 px-2 py-1 rounded mx-1">EVN</span> (Yerevan).
          Get real-time fares and book instantly with ease.
        </p>

        <div className="max-w-7xl mx-auto bg-white p-6 md:p-8 rounded-[2.5rem] shadow-2xl relative">
          {/* Trip Type Selector */}
          <div className="flex gap-4 mb-6">
            {['one-way', 'round-trip'].map((type) => (
              <button 
                key={type} 
                type="button" 
                onClick={() => { setTripType(type); setFlights([]); }}
                className={`px-8 py-2 rounded-full text-xs font-bold uppercase transition-all shadow-sm ${
                  tripType === type ? 'bg-[#004d2c] text-white scale-105' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                {type.replace('-', ' ')}
              </button>
            ))}
          </div>

          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 items-end text-left">
            {/* FROM */}
            <div className="relative">
              <label className="text-[10px] font-bold text-gray-400 uppercase ml-2">From</label>
              <input 
                type="text" value={inputNames.from} 
                onChange={(e) => setInputNames({...inputNames, from: e.target.value.toUpperCase()})} 
                placeholder="DAC" 
                className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none font-bold focus:ring-2 focus:ring-green-600" required 
              />
              {suggestions.from.length > 0 && (
                <ul className="absolute z-[999] w-full bg-white shadow-2xl rounded-xl mt-1 max-h-48 overflow-y-auto border border-gray-100">
                  {suggestions.from.map((loc) => (
                    <li key={loc.id} onClick={() => { setInputNames({...inputNames, from: `${loc.name} (${loc.iataCode})`}); setSuggestions({...suggestions, from: []}); }} className="p-3 hover:bg-green-50 cursor-pointer text-sm border-b flex justify-between">
                      <span className="truncate">{loc.name}</span> <span className="font-bold text-green-700">{loc.iataCode}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* TO */}
            <div className="relative">
              <label className="text-[10px] font-bold text-gray-400 uppercase ml-2">To</label>
              <input 
                type="text" value={inputNames.to} 
                onChange={(e) => setInputNames({...inputNames, to: e.target.value.toUpperCase()})} 
                placeholder="DXB" 
                className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none font-bold focus:ring-2 focus:ring-green-600" required 
              />
              {suggestions.to.length > 0 && (
                <ul className="absolute z-[999] w-full bg-white shadow-2xl rounded-xl mt-1 max-h-48 overflow-y-auto border border-gray-100">
                  {suggestions.to.map((loc) => (
                    <li key={loc.id} onClick={() => { setInputNames({...inputNames, to: `${loc.name} (${loc.iataCode})`}); setSuggestions({...suggestions, to: []}); }} className="p-3 hover:bg-green-50 cursor-pointer text-sm border-b flex justify-between">
                      <span className="truncate">{loc.name}</span> <span className="font-bold text-green-700">{loc.iataCode}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div>
              <label className="text-[10px] font-bold text-gray-400 uppercase ml-2">Departure</label>
              <input name="departureDate" type="date" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none font-bold" required />
            </div>

            {tripType === 'round-trip' ? (
              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase ml-2">Return</label>
                <input name="returnDate" type="date" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none font-bold" required />
              </div>
            ) : (
              <div className="hidden lg:block"></div> 
            )}

            <div>
              <label className="text-[10px] font-bold text-gray-400 uppercase ml-2">Adults</label>
              <select name="adults" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl font-bold outline-none">
                {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} Adult</option>)}
              </select>
            </div>

            <div>
              <label className="text-[10px] font-bold text-gray-400 uppercase ml-2">Children</label>
              <select name="childrenCount" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl font-bold outline-none">
                {[0,1,2,3,4].map(n => <option key={n} value={n}>{n} Child</option>)}
              </select>
            </div>

            <button type="submit" disabled={loading} className="lg:col-span-6 bg-[#004d2c] text-white p-5 rounded-2xl font-bold uppercase hover:bg-gray-500 transition-all mt-4 shadow-lg active:scale-95">
              {loading ? "Searching Flights..." : "Search Flights"}
            </button>
          </form>
        </div>
      </section>

      {/* Flight Results */}
      <main className="max-w-5xl mx-auto px-4 mt-12">
        {loading && <div className="text-center py-10"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-800 mx-auto"></div></div>}
        
        {flights.map((flight, idx) => (
          <div key={idx} className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-gray-100 mb-6 flex flex-col md:flex-row items-center justify-between hover:shadow-xl transition-all border-l-8 border-l-[#004d2c]">
            
            <div className="flex items-center gap-6 w-full md:w-auto">
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center p-2 shadow-inner">
                <img 
                  src={`https://www.gstatic.com/flights/airline_logos/70px/${flight.validatingAirlineCodes[0]}.png`} 
                  alt="airline" 
                  className="w-full h-full object-contain"
                  onError={(e) => { e.target.src = 'https://www.gstatic.com/flights/airline_logos/70px/default.png' }}
                />
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-black text-gray-800">
                  {flight.itineraries[0].segments[0].departure.iataCode} 
                  <span className="mx-2 text-green-600">→</span> 
                  {flight.itineraries[0].segments.at(-1).arrival.iataCode}
                </p>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                  {flight.validatingAirlineCodes[0]} Airline • {flight.itineraries[0].segments.length > 1 ? `${flight.itineraries[0].segments.length - 1} Stop(s)` : 'Direct'}
                </p>
              </div>
            </div>

            <div className="flex gap-4 mt-2 text-gray-600">
              <div>
                <p className="text-[10px] uppercase font-bold text-gray-400">Departure</p>
                <p className="font-bold">{formatTime(flight.itineraries[0].segments[0].departure.at)}</p>
              </div>
              
              <div className="flex flex-col items-center justify-center">
                <div className="h-[1px] w-10 bg-gray-300"></div>
                <p className="text-[9px] text-gray-400 font-bold">{flight.itineraries[0].duration.replace('PT', '').toLowerCase()}</p>
              </div>

              <div>
                <p className="text-[10px] uppercase font-bold text-gray-400">Arrival</p>
                <p className="font-bold">{formatTime(flight.itineraries[0].segments.at(-1).arrival.at)}</p>
              </div>
            </div>

            <div className="text-center md:text-right mt-6 md:mt-0 w-full md:w-auto border-t md:border-0 pt-4 md:pt-0">
              <p className="text-3xl font-black text-[#004d2c]">
                {flight.price.total} <span className="text-sm font-normal text-gray-500">{flight.price.currency}</span>
              </p>
              <div className="flex flex-col sm:flex-row md:flex-col gap-2 mt-4">
                <button
                  onClick={() => window.open(`https://wa.me/8801631312524?text=I want to book flight: ${flight.itineraries[0].segments[0].departure.iataCode} to ${flight.itineraries[0].segments.at(-1).arrival.iataCode}`, "_blank")}
                  className="bg-[#004d2c] text-white px-8 py-3 rounded-full text-[11px] font-bold uppercase hover:bg-black transition-all shadow-md flex-1"
                >
                  Book Now
                </button>

                <button 
                  onClick={() => setSelectedFlight(selectedFlight === idx ? null : idx)}
                  className="bg-gray-100 text-[#004d2c] px-8 py-3 rounded-full text-[11px] font-bold uppercase hover:bg-gray-200 transition-all flex-1 border border-[#004d2c]/10"
                >
                  {selectedFlight === idx ? "Hide Details" : "View Details"}
                </button>
              </div>

              {selectedFlight === idx && (
                <div className="w-full mt-6 p-4 bg-gray-50 rounded-2xl border-t border-dashed border-gray-200 text-left">
                  <h4 className="text-sm font-bold text-gray-700 mb-4">Flight Information</h4>
                  {flight.itineraries[0].segments.map((segment, sIdx) => (
                    <div key={sIdx} className="mb-4 last:mb-0">
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>Flight: {segment.carrierCode} {segment.number}</span>
                        <span>Aircraft: {segment.aircraft.code}</span>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="text-sm">
                          <p className="font-bold">{formatTime(segment.departure.at)}</p>
                          <p className="text-xs text-gray-400">{segment.departure.iataCode}</p>
                        </div>
                        <div className="flex-1 border-b border-gray-300 relative">
                           <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-gray-50 px-2 text-[10px] text-gray-400 uppercase">
                              {segment.duration.replace('PT', '').toLowerCase()}
                           </span>
                        </div>
                        <div className="text-sm text-right">
                          <p className="font-bold">{formatTime(segment.arrival.at)}</p>
                          <p className="text-xs text-gray-400">{segment.arrival.iataCode}</p>
                        </div>
                      </div>
                      
                      {flight.itineraries[0].segments[sIdx + 1] && (
                        <div className="bg-yellow-50 text-[10px] text-center py-1 my-3 rounded-full text-yellow-700 font-bold border border-yellow-100">
                           Layover in {segment.arrival.iataCode}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {!loading && flights.length === 0 && (
          <div className="text-center text-gray-400 py-20">
            <p className="text-xl font-medium">Ready to fly? Enter your details above to find flights.</p>
          </div>
        )}
      </main>

      {/* Visual Section */}
      <section className='px-4 sm:px-6 lg:px-10 container mx-auto py-10'>
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
      </section>
    </div>
  );
};

export default AirTickets;