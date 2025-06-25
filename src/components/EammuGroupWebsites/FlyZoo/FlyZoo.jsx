

import { Helmet } from "react-helmet-async";

const FlyZoo = () => {
  return (
    <div className="px-4 container mx-auto py-12">
      {/* Helmet SEO Meta */}
      <Helmet>
        <title>FlyZoo | Holiday Packages & Flight Deals by Eammu Group</title>
        <meta
          name="description"
          content="FlyZoo, a sub-organization of Eammu Group, will soon offer unbeatable flight deals and holiday packages worldwide. Launching soon — stay tuned!"
        />
        <meta
          name="keywords"
          content="FlyZoo, Eammu Travel, Flight Deals, Cheap Tickets, Holiday Packages, Travel Offers, Dubai Tours, Bangladesh Travel Agency, Eammu Holidays"
        />
        <meta property="og:title" content="FlyZoo | Holidays & Fly Deals by Eammu Group" />
        <meta
          property="og:description"
          content="Plan your dream vacation or find the best air ticket deals with FlyZoo — powered by Eammu Group. Official launch coming soon!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.eammu.com/flyzoo" />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1470&q=80"
        />
      </Helmet>

      {/* Page Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#005a31] mb-4">FlyZoo — Holidays & Fly Deals</h1>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          FlyZoo is the next big travel & tourism brand under Eammu Group, designed to offer affordable
          international holiday packages and unbeatable air ticket deals across the globe.
        </p>
        <img
          className="rounded-lg mt-6 mx-auto w-full max-w-3xl"
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1470&q=80"
          alt="FlyZoo Holiday Preview"
        />
      </div>

      {/* Upcoming Features */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#005a31] mb-4">Coming Soon with</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>✈️ Discounted Flight Tickets to Dubai, Malaysia, Singapore, Europe, USA & more</li>
          <li>🌍 Budget & Luxury Holiday Packages (including family & honeymoon options)</li>
          <li>📱 API-based booking platform for real-time airline deals</li>
          <li>🧳 Travel insurance & visa assistance for every trip</li>
          <li>💼 B2B Travel Agent Solutions for agencies in Bangladesh & UAE</li>
        </ul>
      </section>

      {/* Our Promise */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#005a31] mb-4">Why Choose FlyZoo?</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>✔️ Lowest Price Guarantee on Air Tickets</li>
          <li>✔️ Flexible Payment Options (including EMI)</li>
          <li>✔️ Expert support team for custom itinerary design</li>
          <li>✔️ Seamless booking experience on mobile & web</li>
        </ul>
      </section>

      {/* Launch CTA */}
      <div className="text-center mt-12">
        <p className="text-xl font-semibold text-gray-800 mb-4">
          FlyZoo is taking off soon. Stay connected and grab the first launch offers!
        </p>
        <button className="bg-[#005a31] text-white px-6 py-2 rounded-full hover:bg-[#003e24] transition">
          Get Notified on Launch
        </button>
      </div>
    </div>
  );
};

export default FlyZoo;
