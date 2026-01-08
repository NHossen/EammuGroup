import React, { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

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

const API_BASE_URL = "https://backend-eammu.onrender.com";

const airlineNames = {
  EK: "Emirates", QR: "Qatar Airways", EY: "Etihad Airways", TK: "Turkish Airlines",
  BG: "Biman Bangladesh", BS: "US-Bangla Airlines", SQ: "Singapore Airlines",
  GF: "Gulf Air", J9: "Jazeera Airways", WY: "Oman Air", FZ: "flydubai",
  KU: "Kuwait Airways", RJ: "Royal Jordanian", AI: "Air India", UK: "Vistara",
  OD: "Batik Air", XY: "Flynas Air", SV: "Saudi Arabia", VS: "Virgin Atlantic", MS: "Egypt Air",
};

const formatTime = (dateTimeString) => {
  const date = new Date(dateTimeString);
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

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

  // ১. handleSearch ফাংশন (useCallback সহ)
  const handleSearch = useCallback(async (e) => {
    if (e && e.preventDefault) e.preventDefault();

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


  return (
    <div className=" min-h-screen pb-20 font-sans">
      <Helmet>
        <title>Flight Search Bangladesh | Eammu Holidays</title>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-[#004d2c] pt-8 pb-24 px-4 text-center">
        <h1 className="text-3xl md:text-3xl font-bold text-white mb-4 tracking-tight">
          Your Next Adventure With Eammu Holidays
        </h1>
        <p className="text-white font-bold mb-4">
          Search flights using airport codes for best results —{" "}
          <span className="bg-white text-green-800 px-2 py-1 rounded mx-1">
            DXB
          </span>{" "}
          (Dubai),{" "}
          <span className="bg-white text-green-800 px-2 py-1 rounded mx-1">
            DAC
          </span>{" "}
          (Dhaka),{" "}
          <span className="bg-white text-green-800 px-2 py-1 rounded mx-1">
            EVN
          </span>{" "}
          (Yerevan). Get real-time fares and book instantly with ease.
        </p>

        <div className="max-w-7xl mx-auto bg-white p-6 md:p-8 rounded-[2.5rem] shadow-2xl relative">
          {/* Trip Type Selector */}
          <div className="flex gap-4 mb-6">
            {["one-way", "round-trip"].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => {
                  setTripType(type);
                  setFlights([]);
                }}
                className={`px-8 py-2 rounded-full text-xs font-bold uppercase transition-all shadow-sm ${
                  tripType === type
                    ? "bg-[#004d2c] text-white scale-105"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                {type.replace("-", " ")}
              </button>
            ))}
          </div>

          <form
            onSubmit={handleSearch}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 items-end text-left"
          >
            {/* FROM */}
            <div className="relative">
              <label className="text-[10px] font-bold text-gray-400 uppercase ml-2">
                From
              </label>
              <input
                type="text"
                value={inputNames.from}
                onChange={(e) =>
                  setInputNames({
                    ...inputNames,
                    from: e.target.value.toUpperCase(),
                  })
                }
                placeholder="DAC"
                className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none font-bold focus:ring-2 focus:ring-green-600"
                required
              />
              {suggestions.from.length > 0 && (
                <ul className="absolute z-[999] w-full bg-white shadow-2xl rounded-xl mt-1 max-h-48 overflow-y-auto border border-gray-100">
                  {suggestions.from.map((loc) => (
                    <li
                      key={loc.id}
                      onClick={() => {
                        setInputNames({
                          ...inputNames,
                          from: `${loc.name} (${loc.iataCode})`,
                        });
                        setSuggestions({ ...suggestions, from: [] });
                      }}
                      className="p-3 hover:bg-green-50 cursor-pointer text-sm border-b flex justify-between"
                    >
                      <span className="truncate">{loc.name}</span>{" "}
                      <span className="font-bold text-green-700">
                        {loc.iataCode}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* TO */}
            <div className="relative">
              <label className="text-[10px] font-bold text-gray-400 uppercase ml-2">
                To
              </label>
              <input
                type="text"
                value={inputNames.to}
                onChange={(e) =>
                  setInputNames({
                    ...inputNames,
                    to: e.target.value.toUpperCase(),
                  })
                }
                placeholder="DXB"
                className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none font-bold focus:ring-2 focus:ring-green-600"
                required
              />
              {suggestions.to.length > 0 && (
                <ul className="absolute z-[999] w-full bg-white shadow-2xl rounded-xl mt-1 max-h-48 overflow-y-auto border border-gray-100">
                  {suggestions.to.map((loc) => (
                    <li
                      key={loc.id}
                      onClick={() => {
                        setInputNames({
                          ...inputNames,
                          to: `${loc.name} (${loc.iataCode})`,
                        });
                        setSuggestions({ ...suggestions, to: [] });
                      }}
                      className="p-3 hover:bg-green-50 cursor-pointer text-sm border-b flex justify-between"
                    >
                      <span className="truncate">{loc.name}</span>{" "}
                      <span className="font-bold text-green-700">
                        {loc.iataCode}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

<div>
  <label className="text-[10px] font-bold text-gray-400 uppercase ml-2">
    Departure
  </label>
  <input
    name="departureDate"
    type="date"
    className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none font-bold"
    required
    value={departureDate} // স্টেট যোগ করা হলো
    onChange={(e) => setDepartureDate(e.target.value)} // স্টেট আপডেট
  />
</div>

{tripType === "round-trip" && (
  <div>
    <label className="text-[10px] font-bold text-gray-400 uppercase ml-2">
      Return
    </label>
    <input
      name="returnDate"
      type="date"
      className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none font-bold"
      required
      value={returnDate}
      onChange={(e) => setReturnDate(e.target.value)}
    />
  </div>
)}
{/* Traveler & Class Section */}
  <div className="relative flex-1">
    <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Traveler & Class</label>
    <div 
      onClick={() => setShowTravelerModal(!showTravelerModal)}
      className="bg-white p-3 rounded-xl border border-gray-200 cursor-pointer hover:border-[#004d2c] transition-all"
    >
      <p className="text-sm font-black text-gray-800">
        {travelers.adults + travelers.children + travelers.infants} Traveler
      </p>
      <p className="text-[10px] text-gray-400 font-bold uppercase">{cabinClass}</p>
    </div>

    {showTravelerModal && (
      <div className="absolute top-full left-0 mt-2 w-72 bg-white shadow-2xl rounded-2xl p-5 z-50 border border-gray-100">
        <div className="space-y-4 mb-6">
          {[
            { label: 'Adults', sub: '12 years and above', key: 'adults' },
            { label: 'Children', sub: '2-11 years', key: 'children' },
            { label: 'Infant', sub: 'Below 2 years', key: 'infants' }
          ].map((type) => (
            <div key={type.key} className="flex justify-between items-center">
              <div>
                <p className="text-sm font-bold text-gray-800">{type.label}</p>
                <p className="text-[10px] text-gray-400">{type.sub}</p>
              </div>
              <div className="flex items-center gap-3">
                <button 
                  type="button" // যোগ করা হয়েছে
                  onClick={() => setTravelers({...travelers, [type.key]: Math.max(type.key === 'adults' ? 1 : 0, travelers[type.key] - 1)})}
                  className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50"
                >-</button>
                <span className="font-bold text-sm w-4 text-center">{travelers[type.key]}</span>
                <button 
                  type="button" // যোগ করা হয়েছে
                  onClick={() => setTravelers({...travelers, [type.key]: travelers[type.key] + 1})}
                  className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50"
                >+</button>
              </div>
            </div>
          ))}
        </div>

        {/* Class selection (Radio) */}
        <div className="border-t pt-4 mb-6">
          <p className="text-xs font-bold text-gray-400 uppercase mb-3">Class</p>
          <div className="flex gap-4">
            {['ECONOMY', 'BUSINESS'].map((cls) => (
              <label key={cls} className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="radio" 
                  name="class" 
                  checked={cabinClass === cls}
                  onChange={() => setCabinClass(cls)} // এটি useEffect-কে ট্রিগার করবে
                  className="accent-[#004d2c]"
                />
                <span className="text-sm font-bold text-gray-700 capitalize">{cls.toLowerCase()}</span>
              </label>
            ))}
          </div>
        </div>

        <button 
          type="button" // ফর্ম সাবমিট হওয়া ঠেকাতে
          onClick={() => setShowTravelerModal(false)}
          className="w-full bg-[#004d2c] text-white py-3 rounded-xl font-bold text-sm hover:bg-black transition-all"
        >
          Done
        </button>
      </div>
    )}
  </div>

            <button
              type="submit"
              disabled={loading}
              className="lg:col-span-6 bg-[#004d2c] text-white p-5 rounded-2xl font-bold uppercase hover:bg-gray-500 transition-all mt-4 shadow-lg active:scale-95"
            >
              {loading ? "Searching Flights..." : "Search Flights"}
            </button>
          </form>
        </div>
      </section>

      {/* Flight Results */}
      <main className="max-w-5xl mx-auto px-4 mt-12">
        {loading && (
          <div className="text-center py-10">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-800 mx-auto"></div>
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

                    const message = `Hello, I want to book this flight:
Route: ${flightInfo}
Final Price: ${finalPrice} ${flight.price.currency}
Airlines: ${
                      airlineNames[flight.validatingAirlineCodes[0]] ||
                      flight.validatingAirlineCodes[0]
                    }`;

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

      {/* Visual Section */}
      <section className="px-4 sm:px-6 lg:px-10 container mx-auto py-10">
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <img
            src="https://e3.365dm.com/24/07/1600x900/skynews-plane-cloud_6626642.jpg?20240715110714"
            alt="Plane"
            className="rounded-2xl w-full h-72 object-cover shadow-md"
          />
          <img
            src="https://www.shutterstock.com/image-vector/luggage-blue-air-ticket-float-600nw-2170367829.jpg"
            alt="Tickets"
            className="rounded-2xl w-full h-72 object-cover shadow-md"
          />
        </div>

        {/* Popular Routes */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#005a31] mb-6 text-center">
            Popular Routes & Deals
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {destinations.map((dest, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-all flex flex-col justify-between group"
              >
                <Link to={dest.link} className="relative">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-40 object-cover"
                    loading="lazy"
                  />
                </Link>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-[#005a31]">
                    {dest.name}
                  </h3>
                  <p className="text-gray-700 text-sm mb-3">{dest.price}</p>
                  <a
                    href={`https://wa.me/8801631312524?text=Book flight to ${dest.name}`}
                    className="block bg-[#005a31] text-white py-2 rounded-full hover:bg-black transition"
                  >
                    Check Seats
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center mt-12 bg-green-50 py-10 rounded-[3rem]">
          <p className="text-xl font-medium text-gray-800 mb-6">
            Need expert help? Contact us now.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/8801631312524"
              className="bg-[#005a31] text-white px-10 py-3 rounded-full hover:bg-black transition"
            >
              WhatsApp Booking
            </a>
            <Link
              to="/"
              className="bg-white border border-green-800 text-green-800 px-10 py-3 rounded-full hover:bg-green-50 transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AirTickets;
