import React from 'react';
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Eammu Travel & Immigration",
    "url": "https://eammu.com/air-tickets",
    "logo": "https://eammu.com/images/eammu-home-banner.jpg",
    "sameAs": [
      "https://www.facebook.com/eammu",
      "https://www.instagram.com/eammu",
      "https://www.linkedin.com/company/eammu"
    ],
    "description": "Book the cheapest domestic and international flights with Eammu. Serving students, tourists, and professionals.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Popular Routes & Deals",
      "itemListElement": destinations.map((dest) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": `Flight to ${dest.name}`,
          "url": `https://eammu.com${dest.link}`,
          "image": dest.image,
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": dest.price.replace("$", ""),
            "priceCurrency": "USD"
          }
        },
        "eligibleRegion": "Worldwide"
      }))
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-10 container mx-auto py-10">
      <Helmet>
        <title>Air Tickets | Eammu - Cheapest Domestic & International Flights</title>
        <meta
          name="description"
          content="Book the cheapest domestic and international air tickets with Eammu. Flights for students, tourists, and professionals. IATA & API booking coming soon."
        />
        <meta
          name="keywords"
          content="Air tickets, Cheap flights, Flight booking, Domestic flights, International flights, USA flights, UK flights, Canada flights, Australia flights, Eammu Travel"
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Page Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#005a31] mb-4">Air Tickets Booking</h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Eammu provides <strong>affordable air tickets</strong> for domestic and international flights. Whether traveling for <strong>study, tourism, or work</strong>, we offer offline booking today and online IATA/API-based booking soon.
        </p>
      </div>

      {/* Flight Search Bar (Future Integration) */}
      <section className="bg-green-50 p-6 rounded-lg shadow-md mb-10">
        <h2 className="text-2xl font-semibold text-[#005a31] mb-4 text-center">Search Your Flights</h2>
        <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-end">
          <div className="flex flex-col">
            <label htmlFor="from" className="font-medium mb-1">From</label>
            <input type="text" id="from" placeholder="City or Airport" className="border rounded p-2" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="to" className="font-medium mb-1">To</label>
            <input type="text" id="to" placeholder="City or Airport" className="border rounded p-2" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="date" className="font-medium mb-1">Departure</label>
            <input type="date" id="date" className="border rounded p-2" />
          </div>
          <button type="submit" className="bg-[#005a31] text-white px-4 py-2 rounded hover:bg-[#003e24] transition">
            Search
          </button>
        </form>
        <p className="mt-3 text-sm text-gray-600 text-center">* Flight search coming soon with real-time rates.</p>
      </section>

      {/* Visual Section */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <img
          src="https://e3.365dm.com/24/07/1600x900/skynews-plane-cloud_6626642.jpg?20240715110714"
          alt="Airplane flying over city"
          className="rounded-lg w-full h-72 object-cover shadow-md"
          loading="lazy"
        />
        <img
          src="https://www.shutterstock.com/image-vector/luggage-blue-air-ticket-float-600nw-2170367829.jpg"
          alt="Airlines banner"
          className="rounded-lg w-full h-72 object-cover shadow-md"
          loading="lazy"
        />
      </div>

      {/* Current Services */}
      <section className="bg-gray-50 p-6 rounded-lg mb-10">
        <h2 className="text-2xl font-semibold text-[#005a31] mb-3">Our Current Services</h2>
        <ul className="list-disc pl-6 text-gray-800 space-y-2">
          <li>📞 Offline booking via phone, WhatsApp, or in-person</li>
          <li>🌐 All major international & domestic airlines supported</li>
          <li>📅 Advance group and individual ticketing available</li>
          <li>💼 Travel itinerary support for visa documentation</li>
        </ul>
      </section>

     {/* Popular Routes & Deals with Hover Animation */}
<section className="mb-10">
  <h2 className="text-2xl font-semibold text-[#005a31] mb-6 text-center">Popular Routes & Deals</h2>
  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
    {destinations.map((dest, index) => (
      <div
        key={index}
        className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col justify-between group"
      >
        <Link to={dest.link} className="relative">
          <img
            src={dest.image}
            alt={`Flight to ${dest.name}`}
            className="w-full h-40 object-cover transition duration-500 group-hover:brightness-90"
            loading="lazy"
          />
          <div className="absolute bottom-2 left-2 bg-[#005a31] text-white px-2 py-1 rounded text-sm font-semibold opacity-0 group-hover:opacity-100 transition">
            Explore {dest.name}
          </div>
        </Link>
        <div className="p-4 text-center flex flex-col gap-2">
          <h3 className="text-lg font-bold text-[#005a31]">{dest.name}</h3>
          <p className="text-gray-700 text-sm">{dest.price}</p>
          <a
            href={`https://wa.me/8801631312524?text=Hello%2C%20I%20want%20to%20book%20a%20flight%20to%20${encodeURIComponent(dest.name)}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#005a31] text-white px-4 py-2 rounded-full hover:bg-[#003e24] transition"
          >
            Book Now
          </a>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Coming Soon: Flight Booking */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-10">
        <h2 className="text-2xl font-semibold text-[#005a31] mb-3">Coming Soon: Online Flight Booking</h2>
        <p className="text-gray-700 mb-4">
          We are developing a <strong>fully integrated air ticket platform</strong> with:
        </p>
        <ul className="list-disc pl-6 text-gray-800 space-y-2">
          <li>🎫 IATA Certified Booking System</li>
          <li>🔌 API Integration with airlines for real-time pricing</li>
          <li>🖥️ Online self-booking portal via Web & Mobile App</li>
          <li>💳 Secure online payment & instant e-tickets</li>
        </ul>
      </section>

      {/* CTA Section */}
      <div className="text-center mt-12">
        <p className="text-xl font-medium text-gray-800 mb-4">
          Need tickets today? Contact our team directly to book your flight!
        </p>
        <a
          href="https://wa.me/8801631312524?text=Hello%2C%20I would like to inquire about your services."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#005a31] text-white px-6 py-2 rounded-full hover:bg-[#003e24] transition mb-4"
        >
          Book Now on WhatsApp
        </a>
        <div className="mt-4">
          <Link
            to="/"
            className="inline-block bg-white border border-green-800 text-green-800 px-6 py-3 rounded-full hover:bg-green-100 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AirTickets;
