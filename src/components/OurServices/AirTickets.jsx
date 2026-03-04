import React, { useState, useEffect, useCallback, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from 'framer-motion';
import { toast,Toaster } from 'react-hot-toast';
import Tickets from "../OurServices/Tickets";


const API_BASE_URL = "https://backend-eammu.onrender.com";

const airlineNames = {
  EK: "Emirates", QR: "Qatar Airways", EY: "Etihad Airways", TK: "Turkish Airlines",
  BG: "Biman Bangladesh", BS: "US-Bangla Airlines", SQ: "Singapore Airlines",
  GF: "Gulf Air", J9: "Jazeera Airways", WY: "Oman Air", FZ: "flydubai",
  KU: "Kuwait Airways", RJ: "Royal Jordanian", AI: "Air India", UK: "Vistara",
  OD: "Batik Air", XY: "Flynas Air", SV: "Saudi Arabia", VS: "Virgin Atlantic", MS: "Egypt Air",
  PC: "Pegasus Airlines",LO: "LOT Polish Airlines",CZ: "China Southern Airlines", GQ: "SKY express",
  X1: "Hahnair", SG: "Spicejet" , CX: "Cathay Pacific Airways" , RA : "Nepal Airlines",
  CA: "Air China",
};

const formatTime = (dateTimeString) => {
  const date = new Date(dateTimeString);
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};


// Array for your 3 image slides
  const slides = [
    "/eammu_holidays_bg.webp", // Slide 1
    "/eammu_banner.webp", // Slide 1
    "/flight_eammu.webp", // Slide 2
    
  ];

const AirTickets = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tripType, setTripType] = useState("one-way");
  const [suggestions, setSuggestions] = useState({ from: [], to: [] });
  const [inputNames, setInputNames] = useState({ from: "", to: "" });
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [showTravelerModal, setShowTravelerModal] = useState(false);
  const [travelers, setTravelers] = useState({ adults: 1, children: 0, infants: 0 });
  const [cabinClass, setCabinClass] = useState("ECONOMY");
  // This is the list for your menu to map over
const cabinOptions = ["Economy", "Premium Economy", "Business", "First Class"];
// Also add this to fix the red 'showCabinMenu' line
const [showCabinMenu, setShowCabinMenu] = useState(false);

const departureRef = React.useRef(null);
const returnRef = React.useRef(null);

    const calculateLayover = (arrival, nextDeparture) => {

    if (!arrival || !nextDeparture) return "";

    const arrivalDate = new Date(arrival);

    const departureDate = new Date(nextDeparture);

    const diffMs = departureDate - arrivalDate;

    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));

    const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

    return `${diffHrs}h ${diffMins}m`;

  };

  // এয়ারপোর্ট কোড বের করার ফাংশন (যেমন: Dhaka (DAC) -> DAC)
  const extractCode = (str) => {
    const match = str.match(/\(([^)]+)\)/);
    return match ? match[1] : str;
  };

  const fetchSuggestions = async (keyword, type) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/city-search?keyword=${keyword}`);
      const data = await res.json();
      setSuggestions((prev) => ({ ...prev, [type]: Array.isArray(data) ? data : [] }));
    } catch (err) {
      console.error("Error fetching suggestions:", err.message);
    }
  };

  const resultsRef = useRef(null);

useEffect(() => {
  if (loading && resultsRef.current) {
    const yOffset = -100; // Adjust this number to leave more or less space at the top
    const element = resultsRef.current;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}, [loading]);

  // ১. handleSearch ফাংশন (useCallback সহ)
  const handleSearch = useCallback(async (e) => {
    if (e && e.preventDefault) e.preventDefault();

  // 1. Check if Departure is missing
  if (!departureDate) {
    toast.error("Please select a Departure date!");
    return; // Stop the search here
  }

  // 2. Check if Return is missing (for round trips)
  if (tripType === "round-trip" && !returnDate) {
    toast.error("Please select a Return date!");
    return;
  }

  // 3. Check if Return is BEFORE Departure
  if (tripType === "round-trip" && returnDate < departureDate) {
    toast.error("Return date cannot be earlier than Departure!");
    return;
  }

  // If all is good:
  toast.success("Searching for flights...");
  // ... proceed with your API call or search logic

    if (!inputNames.from || !inputNames.to || !departureDate) return;

    setLoading(true);
    setFlights([]);

    const params = new URLSearchParams({
      origin: extractCode(inputNames.from),
      destination: extractCode(inputNames.to),
      date: departureDate,
      adults: travelers.adults,
      children: travelers.children > 0 ? travelers.children : '',
      infants: travelers.infants > 0 ? travelers.infants : '',
      travelClass: cabinClass.toUpperCase(),
      currencyCode: 'USD'
    });

    if (tripType === "round-trip" && returnDate) {
      params.append("returnDate", returnDate);
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/search-flights?${params.toString()}`);
      const data = await response.json();
      if (response.ok) {
        setFlights(data);
      } else {
        console.error("API Error:", data.detail);
      }
    } catch (error) {
      console.error("Search Error:", error);
    } finally {
      setLoading(false);
    }
  }, [inputNames.from, inputNames.to, departureDate, returnDate, travelers, cabinClass, tripType]);

  // ২. অটো-সার্চ ইফেক্ট
 useEffect(() => {
  if (inputNames.from.includes("(") && inputNames.to.includes("(") && departureDate) {
    handleSearch();
  }
}, [handleSearch, travelers, cabinClass, departureDate, returnDate, inputNames.from, inputNames.to]); 
// উপরে inputNames.from এবং inputNames.to যোগ করা হয়েছে

  // ৩. সাজেশন ইফেক্ট
  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputNames.from.length >= 2 && !inputNames.from.includes("(")) fetchSuggestions(inputNames.from, "from");
      if (inputNames.to.length >= 2 && !inputNames.to.includes("(")) fetchSuggestions(inputNames.to, "to");
    }, 500);
    return () => clearTimeout(timer);
  }, [inputNames.from, inputNames.to]);
const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds interval
    return () => clearInterval(timer);
  }, [slides.length]);

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className=" min-h-screen pb-20 font-sans">
     <Helmet>
  {/* Primary SEO */}
  <title>Cheapest International Flight Tickets | Flight Tickets Bangladesh | Book Your Flight Tickets</title>
<meta name="description" content="Book cheap international Flight tickets with Eammu, IATA approved global travel agency in Bangladesh. Compare real-time flight prices, airline deals, reissue & cancellation support worldwide."/>
  {/* Canonical */}
  <link rel="canonical" href="https://eammu.com/air-tickets" />

</Helmet>

{/* Hero Section */}
<section 
  className="relative min-h-[50vh] flex items-center justify-center pt-12 pb-24 px-8 text-center overflow-hidden"
>
  <Toaster position="top-center" reverseOrder={false} />
 {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }} // Smooth 1.5s fade
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${slides[currentIndex]}')`,
              // Ensures the image fills the rectangular box fully
              backgroundSize: 'cover', 
              backgroundPosition: 'center'
            }}
          />
        </AnimatePresence>

        {/* Subtle dark overlay to make text and form pop */}
        <div className="absolute inset-0 bg-black/20 z-10"></div>
      </div>

      {/* Content Layer (Example: Search Form or Title) */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4">
    
        <motion.h1 
          key={`title-${currentIndex}`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-3xl md:text-4xl font-bold text-center drop-shadow-lg"
        >
          Eammu Holidays
        </motion.h1>
        
        {/* Your search form would go here */}
<div className="relative z-10 w-full max-w-7xl mx-auto px-4 mt-8">
  <div className="bg-white p-4 md:p-6 rounded-xl shadow-xl relative">

    {/* Trip Type Selector */}
    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
      <div className="flex bg-gray-100 p-1 rounded-lg">
        {["one-way", "round-trip"].map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => {
              setTripType(type);
              setFlights([]);
            }}
            className={`px-4 py-2 rounded-md text-xs font-bold transition-all ${
              tripType === type
                ? "bg-[#005a31] text-white shadow-md"
                : "text-gray-500 hover:bg-gray-200"
            }`}
          >
            {type.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
          </button>
        ))}
      </div>

      {/* Travelers + Class */}
      <div className="flex gap-2 ml-auto">
        <div 
          onClick={() => setShowTravelerModal(!showTravelerModal)}
          className="bg-blue-50 px-4 py-2 rounded-lg border border-blue-100 cursor-pointer flex items-center gap-2"
        >
          <span className="text-[#005a31] font-bold text-xs">
            {travelers.adults + travelers.children + travelers.infants} Traveler
          </span>
        </div>

        <div className="relative">
  <div 
    onClick={() => setShowCabinMenu(!showCabinMenu)}
    className="bg-blue-50 px-4 py-2 rounded-lg border border-blue-100 flex items-center gap-2 cursor-pointer hover:bg-blue-100 transition-all"
  >
    <span className="text-[#005a31] font-bold text-xs uppercase">
      {cabinClass}
    </span>
    {/* Small arrow icon */}
    <span className={`text-[#005a31] transition-transform ${showCabinMenu ? 'rotate-180' : ''}`}>▾</span>
  </div>

  {/* Cabin Class Dropdown Menu */}
  {showCabinMenu && (
    <div className="absolute top-full mt-2 left-0 w-48 bg-white shadow-2xl rounded-xl border border-gray-100 z-[1000] overflow-hidden">
      {cabinOptions.map((option) => (
        <label 
          key={option}
          className="flex items-center gap-3 p-3 hover:bg-blue-50 cursor-pointer transition-colors border-b last:border-0"
        >
          <input
            type="radio"
            name="cabinClass"
            checked={cabinClass === option}
            onChange={() => {
              setCabinClass(option);
              setShowCabinMenu(false);
            }}
            className="w-4 h-4 accent-[#005a31]"
          />
          <span className="text-sm font-medium text-gray-700">{option}</span>
        </label>
      ))}
    </div>
  )}
</div>
      </div>
    </div>

    {/* Search Form */}
    <form onSubmit={handleSearch} className="flex flex-col lg:flex-row gap-2 items-stretch">

     {/* FROM & TO CONTAINER */}
<div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-0 bg-white rounded-xl border border-emerald-900/20 overflow-hidden shadow-md">
  
  {/* FROM */}
  <div className="relative group p-4 border-r border-gray-100 hover:bg-emerald-50/40 transition-all">
    <span className="text-[10px] font-black text-emerald-800/70 uppercase tracking-[0.15em] block mb-1">From</span>
    <input
      type="text"
      value={inputNames.from}
      onChange={(e) => setInputNames({...inputNames, from: e.target.value.toUpperCase()})}
      placeholder="DAC"
      className="w-full bg-transparent outline-none font-bold text-gray-800 placeholder:text-gray-300 text-lg tracking-tight"
      required
    />

    {suggestions.from.length > 0 && (
      <ul className="absolute left-0 top-full z-[999] w-full bg-white shadow-2xl rounded-xl mt-2 border border-emerald-900/10 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
        {suggestions.from.map((loc) => (
          <li
            key={loc.id}
            onClick={() => {
              setInputNames({...inputNames, from: `${loc.name} (${loc.iataCode})`});
              setSuggestions({...suggestions, from: []});
            }}
            className="p-4 hover:bg-emerald-800 hover:text-white cursor-pointer group/item border-b border-gray-50 flex justify-between items-center transition-colors"
          >
            <div className="flex flex-col">
              <span className="text-sm font-semibold">{loc.name}</span>
              <span className="text-[10px] opacity-70 group-hover/item:text-emerald-100 uppercase tracking-tighter">Airport Terminal</span>
            </div>
            <span className="font-black text-emerald-700 group-hover/item:text-white bg-emerald-50 group-hover/item:bg-emerald-700/50 px-2 py-1 rounded text-xs transition-all">
              {loc.iataCode}
            </span>
          </li>
        ))}
      </ul>
    )}
    <div className="absolute bottom-0 left-0 h-0.5 bg-emerald-800 w-0 group-hover:w-full transition-all duration-500" />
  </div>

  {/* TO */}
  <div className="relative group p-4 hover:bg-emerald-50/40 transition-all">
    <span className="text-[10px] font-black text-emerald-800/70 uppercase tracking-[0.15em] block mb-1">To</span>
    <input
      type="text"
      value={inputNames.to}
      onChange={(e) => setInputNames({...inputNames, to: e.target.value.toUpperCase()})}
      placeholder="DXB"
      className="w-full bg-transparent outline-none font-bold text-gray-800 placeholder:text-gray-300 text-lg tracking-tight"
      required
    />

    {suggestions.to.length > 0 && (
      <ul className="absolute left-0 top-full z-[999] w-full bg-white shadow-2xl rounded-xl mt-2 border border-emerald-900/10 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
        {suggestions.to.map((loc) => (
          <li
            key={loc.id}
            onClick={() => {
              setInputNames({...inputNames, to: `${loc.name} (${loc.iataCode})`});
              setSuggestions({...suggestions, to: []});
            }}
            className="p-4 hover:bg-emerald-800 hover:text-white cursor-pointer group/item border-b border-gray-50 flex justify-between items-center transition-colors"
          >
            <div className="flex flex-col">
              <span className="text-sm font-semibold">{loc.name}</span>
              <span className="text-[10px] opacity-70 group-hover/item:text-emerald-100 uppercase tracking-tighter">Airport Terminal</span>
            </div>
            <span className="font-black text-emerald-700 group-hover/item:text-white bg-emerald-50 group-hover/item:bg-emerald-700/50 px-2 py-1 rounded text-xs transition-all">
              {loc.iataCode}
            </span>
          </li>
        ))}
      </ul>
    )}
    <div className="absolute bottom-0 left-0 h-0.5 bg-emerald-800 w-0 group-hover:w-full transition-all duration-500" />
  </div>
</div>

 {/* DATES CONTAINER */}
<div className="flex-[0.8] grid grid-cols-2 gap-0 bg-white rounded-xl border border-emerald-900/20 overflow-hidden shadow-md">
  
  {/* DEPARTURE CARD */}
  <div 
    onClick={() => departureRef.current.showPicker()} 
    className="group relative flex flex-col justify-center min-h-[70px] p-4 border-r border-gray-100 hover:bg-emerald-50/40 transition-all cursor-pointer"
  >
    <span className="text-[10px] uppercase tracking-[0.15em] font-black text-emerald-800/70 mb-1">Departure</span>
    <p className="font-bold text-gray-900">
      {departureDate ? new Date(departureDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : "Select Date"}
    </p>

    <input 
      ref={departureRef}
      type="date" 
      min={today} 
      value={departureDate}
      onChange={(e) => {
        setDepartureDate(e.target.value);
        // Reset return date if it becomes invalid compared to new departure
        if (returnDate && e.target.value > returnDate) {
          setReturnDate("");
        }
      }}
      className="absolute inset-0 opacity-0 cursor-pointer"
      required
    />
    <div className="absolute bottom-0 left-0 h-0.5 bg-emerald-800 w-0 group-hover:w-full transition-all duration-500" />
  </div>

  {/* RETURN CARD */}
  {tripType === "round-trip" ? (
    <div 
      onClick={() => returnRef.current.showPicker()} 
      className={`group relative flex flex-col justify-center min-h-[70px] p-4 transition-all cursor-pointer ${!departureDate ? 'opacity-50 cursor-not-allowed' : 'hover:bg-emerald-50/40'}`}
    >
      <span className="text-[10px] uppercase tracking-[0.15em] font-black text-emerald-800/70 mb-1">Return</span>
      <p className="font-bold text-gray-900">
        {returnDate ? new Date(returnDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : "Add Return"}
      </p>

      <input 
        ref={returnRef}
        type="date" 
        // RULE: Return min date is tied to Departure Date. 
        // If no departure is selected, it defaults to 'today' to prevent past selection.
        min={departureDate || today} 
        disabled={!departureDate} // Extra protection: can't pick return until departure is set
        value={returnDate}
        onChange={(e) => setReturnDate(e.target.value)}
        className="absolute inset-0 opacity-0 cursor-pointer disabled:cursor-not-allowed"
        required
      />
      
      {/* Visual Indicator of Connection (Premium Touch) */}
      {departureDate && returnDate && (
        <div className="absolute inset-0 bg-emerald-800/5 -z-10" />
      )}
      <div className="absolute bottom-0 left-0 h-0.5 bg-emerald-800 w-0 group-hover:w-full transition-all duration-500" />
    </div>
  ) : (
    <div className="flex items-center justify-center bg-gray-50/50 text-[10px] uppercase tracking-widest font-bold text-gray-400">
      One Way
    </div>
  )}
</div>

      {/* SEARCH */}
      <button
        type="submit"
        disabled={loading}
        className="bg-[#005a31] hover:bg-[#017e46] text-white px-12 rounded-lg flex items-center justify-center shadow-lg transition-all active:scale-95 disabled:bg-gray-300 min-h-[40px]"
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </form>

    
{/* Traveler Modal */}
{showTravelerModal && (
  <div className="absolute top-20 right-4 w-72 bg-white shadow-2xl rounded-2xl p-6 z-[1000] border border-gray-100">
    <div className="space-y-4 mb-6">
      {[
        { label: 'Adults', sub: '12 years+', key: 'adults' },
        { label: 'Children', sub: '2-11 years', key: 'children' },
        { label: 'Infants', sub: 'Below 2 years', key: 'infants' }
      ].map((type) => (
        <div key={type.key} className="flex justify-between items-center">
          <div>
            {/* Added the count beside the label here */}
            <p className="text-xs font-bold text-gray-800">
              {type.label} <span className="text-blue-600">({travelers[type.key]})</span>
            </p>
            <p className="text-[10px] text-gray-400">{type.sub}</p>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() =>
                setTravelers({
                  ...travelers,
                  [type.key]: Math.max(type.key === "adults" ? 1 : 0, travelers[type.key] - 1),
                })
              }
              className="w-6 h-6 rounded-full border border-blue-200 flex items-center justify-center text-blue-500 hover:bg-blue-50"
            >
              -
            </button>

            <span className="font-bold text-xs w-4 text-center">{travelers[type.key]}</span>

            <button
              type="button"
              onClick={() => {
                const total = travelers.adults + travelers.children + travelers.infants;
                if (total < 6) {
                  setTravelers({ ...travelers, [type.key]: travelers[type.key] + 1 });
                } else {
                  toast.error("Total maximum is 6 passengers");
                }
              }}
              className={`w-6 h-6 rounded-full border flex items-center justify-center ${
                (travelers.adults + travelers.children + travelers.infants) >= 6 
                ? "border-gray-200 text-gray-300" 
                : "border-blue-200 text-blue-500 hover:bg-blue-50"
              }`}
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>

    <button
      onClick={() => setShowTravelerModal(false)}
      className="w-full border border-[#005a31] text-[#005a31] py-2 rounded-lg font-bold text-xs hover:bg-green-50 transition-all"
    >
      Done
    </button>
  </div>
)}
  </div>
</div>

      </div>

      {/* Slide Indicators (Optional) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, idx) => (
          <div 
            key={idx}
            className={`h-1.5 transition-all duration-300 rounded-full ${
              idx === currentIndex ? 'bg-white w-6' : 'bg-white/40 w-1.5'
            }`}
          />
        ))}
      </div>
</section>

      {/* Flight Results */}
      <main ref={resultsRef} className="max-w-5xl mx-auto px-4 mt-12">
      {loading && (
  <div className="text-center py-10 flex flex-col items-center justify-center gap-4">
    <div className="relative h-20 w-20">
      {/* Outer spinning ring for extra effect (Optional) */}
      <div className="absolute inset-0 animate-spin rounded-full border-t-2 border-b-2 border-[#fd8403]"></div>
      
      {/* Your Animated Logo */}
      <img 
        src="/eammu_holidays_logo.webp" 
        alt="Loading..." 
        className="h-full w-full object-contain animate-pulse px-2" 
      />
    </div>
    <p className="text-[#005a31] font-bold text-sm animate-bounce">
      Searching for best deals...
    </p>
  </div>
)}

        {flights.map((flight, idx) => (
          <div
            key={idx}
            className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-gray-100 mb-6 flex flex-col md:flex-row items-center justify-between hover:shadow-xl transition-all border-l-8 border-l-[#004d2c]"
          >
            {/* Flight Results new things added on map */}
            <div className="flex items-center gap-6 w-full md:w-auto">
              <div>
                <div className="flex-1 space-y-4">
                  {flight.itineraries.map((itinerary, iIdx) => (
                    <div
                      key={iIdx}
                      className="flex items-center gap-4 py-2 border-b border-gray-50 last:border-0"
                    >
                      {/* এয়ারলাইন লোগো ও নাম */}
                      <div className="flex flex-col items-center w-12 md:w-20">
                        <img
                          src={`https://www.gstatic.com/flights/airline_logos/70px/${itinerary.segments[0].carrierCode}.png`}
                          alt="airline"
                          className="w-8 h-8 object-contain mb-1"
                        />
                        <span className="text-[10px] text-gray-500 font-bold truncate w-full text-center">
                          {airlineNames[itinerary.segments[0].carrierCode] ||
                            itinerary.segments[0].carrierCode}
                        </span>
                      </div>

                      {/* সময় এবং রুট লাইন */}
                      <div className="flex flex-1 items-center justify-between gap-2 md:gap-6 text-center">
                        {/* Departure */}
                        <div className="flex flex-col">
                          <span className="text-lg md:text-xl font-black text-gray-800">
                            {
                              formatTime(
                                itinerary.segments[0].departure.at
                              ).split(" ")[0]
                            }
                          </span>
                          <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                            {itinerary.segments[0].departure.iataCode}
                          </span>
                        </div>

                        {/* Duration & Stops Line */}
                        <div className="flex flex-col flex-1 items-center px-2">
                          <span className="text-[10px] text-gray-400 font-bold">
                            {itinerary.duration.replace("PT", "").toLowerCase()}
                          </span>
                          <div className="relative w-full h-[2px] bg-gray-200 my-1 flex justify-between items-center">
                            <div className="w-2 h-2 rounded-full bg-white border-2 border-green-500 absolute -left-1"></div>
                            <div className="w-2 h-2 rounded-full bg-white border-2 border-green-500 absolute -right-1"></div>
                            {itinerary.segments.length > 1 && (
                              <div className="w-2 h-2 rounded-full bg-green-500 mx-auto"></div>
                            )}
                          </div>
                          <span className="text-[10px] text-green-600 font-bold uppercase">
                            {itinerary.segments.length > 1
                              ? `${itinerary.segments.length - 1} Stop`
                              : "Non Stop"}
                          </span>
                        </div>

                        {/* Arrival */}
                        <div className="flex flex-col">
                          <span className="text-lg md:text-xl font-black text-gray-800">
                            {
                              formatTime(
                                itinerary.segments.at(-1).arrival.at
                              ).split(" ")[0]
                            }
                          </span>
                          <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                            {itinerary.segments.at(-1).arrival.iataCode}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
{/* Details Can Update Bellow This Airline logo */}
           
              </div>
            </div>

            <div className="text-center md:text-right mt-6 md:mt-0 w-full md:w-auto border-t md:border-0 pt-4 md:pt-0">
              {/* এটি আপনার বাটন বা প্রাইস সেকশনে আপডেট করুন */}
              <p className="text-3xl font-black text-[#004d2c]">
                {(Number(flight.price.total) + 50).toFixed(2)}
                <span className="text-sm font-normal text-gray-500 ml-1">
                  {flight.price.currency}
                </span>
              </p>
              <div className="flex flex-col sm:flex-row md:flex-col gap-2 mt-4">
                <button
                  onClick={() => {
                    const finalPrice = (
                      Number(flight.price.total) + 50
                    ).toFixed(2); // কমিশনসহ প্রাইস

                    const flightInfo = flight.itineraries
                      .map(
                        (it) =>
                          `${it.segments[0].departure.iataCode} to ${
                            it.segments.at(-1).arrival.iataCode
                          }`
                      )
                      .join(" & ");

            const message = `
Hello, I want to book this flight:
*Route:* ${flightInfo}
*Airlines:* ${airlineNames[flight.validatingAirlineCodes[0]] || flight.validatingAirlineCodes[0]}
*Final Price:* ${finalPrice} ${flight.price.currency}

*Passenger Details:*
- Adults: ${travelers.adults}
- Children: ${travelers.children}
- Infants: ${travelers.infants}
*Class:* ${cabinClass}

*Travel Date:* ${departureDate}
`.trim();

                    window.open(
                      `https://wa.me/8801631312524?text=${encodeURIComponent(
                        message
                      )}`,
                      "_blank"
                    );
                  }}
                  className="bg-[#004d2c] text-white px-8 py-3 rounded-full text-[11px] font-bold uppercase hover:bg-black transition-all shadow-md w-full"
                >
                  Book Now
                </button>

                {/* Flight Details Button and Card */}
                <button
                  onClick={() =>
                    setSelectedFlight(selectedFlight === idx ? null : idx)
                  }
                  className="bg-gray-100 text-[#004d2c] px-8 py-3 rounded-full text-[11px] font-bold uppercase hover:bg-gray-200 transition-all flex-1 border border-[#004d2c]/10"
                >
                  {selectedFlight === idx ? "Hide Details" : "View Details"}
                </button>
              </div>
              {/* Flight Details Card */}
              {selectedFlight === idx && (
                <div className="w-full mt-4 p-4 bg-gray-50 rounded-3xl border border-gray-100 shadow-inner text-left transition-all duration-300">
                  <h4 className="text-sm font-black text-[#004d2c] mb-6 uppercase tracking-widest border-b pb-2">
                    Flight Information
                  </h4>

                  {/* itineraries.map ব্যবহারের ফলে রিটার্ন ফ্লাইটগুলোও দেখাবে */}
                  {flight.itineraries?.map((itinerary, iIdx) => (
                    <div
                      key={iIdx}
                      className={`${
                        iIdx > 0
                          ? "mt-10 pt-6 border-t-2 border-dashed border-gray-200"
                          : ""
                      }`}
                    >
                      {/* যাত্রার লেবেল: Outbound অথবা Return */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-lg">
                          {iIdx === 0 ? "🛫" : "🛬"}
                        </span>
                        <span className="text-[11px] font-bold uppercase text-gray-500 tracking-wider">
                          {iIdx === 0 ? "Departure Journey" : "Return Journey"}
                        </span>
                        <span className="ml-auto text-[10px] bg-gray-200 px-2 py-0.5 rounded text-gray-600 font-bold">
                          {itinerary.duration?.replace("PT", "").toLowerCase()}
                        </span>
                      </div>

                      {itinerary.segments?.map((segment, sIdx) => (
                        <div key={sIdx} className="mb-6 last:mb-0">
                          {/* ফ্লাইটের নম্বর ও এয়ারক্রাফট */}
                          <div className="flex justify-between text-[10px] font-bold text-gray-400 mb-2 uppercase">
                            <span>
                              {airlineNames[segment.carrierCode] ||
                                segment.carrierCode}{" "}
                              | {segment.carrierCode} {segment.number}
                            </span>
                            <span>
                              Aircraft: {segment.aircraft?.code || "N/A"}
                            </span>
                          </div>

                          {/* সময় ও রুট বক্স - স্পেসিং ফিক্স করার জন্য white background box */}
                          <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                            <div className="text-sm">
                              <p className="font-black text-gray-800">
                                {formatTime(segment.departure?.at)}
                              </p>
                              <p className="text-[11px] text-gray-400 font-bold uppercase">
                                {segment.departure?.iataCode}
                              </p>
                            </div>

                            {/* ডিউরেশন লাইন */}
                            <div className="flex-1 border-b-2 border-dotted border-gray-200 relative">
                              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-2 text-[9px] font-bold text-green-600 border rounded-full shadow-sm uppercase">
                                {segment.duration
                                  ?.replace("PT", "")
                                  .toLowerCase()}
                              </span>
                            </div>

                            <div className="text-sm text-right">
                              <p className="font-black text-gray-800">
                                {formatTime(segment.arrival?.at)}
                              </p>
                              <p className="text-[11px] text-gray-400 font-bold uppercase">
                                {segment.arrival?.iataCode}
                              </p>
                            </div>
                          </div>

                          {/* লে-ওভার বা বিরতির তথ্য - যদি কানেক্টিং ফ্লাইট হয় */}
                          {itinerary.segments[sIdx + 1] && (
                            <div className="flex items-center justify-center gap-2 bg-yellow-50 text-[10px] py-2 my-4 rounded-xl text-yellow-700 font-bold border border-yellow-100 shadow-sm">
                              <span>
                                ⏱️ Layover in {segment.arrival?.iataCode}:
                              </span>
                              <span className="bg-yellow-100 px-2 py-0.5 rounded">
                                {calculateLayover(
                                  segment.arrival?.at,
                                  itinerary.segments[sIdx + 1].departure?.at
                                )}
                              </span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
              {/* Flight Details Card Finish Line */}
            </div>
          </div>
        ))}

        {!loading && flights.length === 0 && (
          <div className="text-center text-gray-400 py-20">
            <p className="text-xl font-medium">
              Ready to fly? Enter your details above to find flights.
            </p>
          </div>
        )}
      </main>
       
   <Tickets />
     
    </div>
  );
};

export default AirTickets;
