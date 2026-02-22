import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import OurServices from "../../OurServices/OurServices";

const FlyZoo = () => {
  return (
    <div className="px-4 container mx-auto py-12">
      {/* Helmet SEO Meta */}
      <Helmet>
        <title>FlyZoo Travel Agency Bangladesh | Holiday Packages Dhaka</title>
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

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#005a31] mb-4">FlyZoo — Holidays & Fly Deals</h1>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          FlyZoo is the next big travel & tourism brand under Eammu Group, designed to offer affordable
          international holiday packages and unbeatable air ticket deals across the globe.
        </p>
        <img
          className="rounded-lg mt-6 mx-auto w-full max-w-3xl shadow-lg"
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1470&q=80"
          alt="FlyZoo Holiday Preview"
        />
      </div>

      <div>
        <OurServices />
      </div>

      {/* Coming Soon Features */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#005a31] mb-4">Coming Soon with:</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 text-base">
          <li>✈️ Discounted Flight Tickets to Dubai, Malaysia, Singapore, Europe, USA & more</li>
          <li>🌍 Budget & Luxury Holiday Packages (family, group, honeymoon options)</li>
          <li>📱 API-based real-time booking platform for flights & hotels</li>
          <li>🧳 Travel Insurance & Visa Assistance Included</li>
          <li>💼 B2B Agent Portal for Bangladesh and UAE-based agencies</li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#005a31] mb-4">Why Choose FlyZoo?</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 text-base">
          <li>✔️ Lowest Price Guarantee on International Air Tickets</li>
          <li>✔️ Flexible Payment Options — including EMI & Pay Later</li>
          <li>✔️ Custom Travel Itinerary Support by Experts</li>
          <li>✔️ Easy Booking via Mobile, Website & WhatsApp</li>
        </ul>
      </section>

      {/* POPULAR ROUTES */}
<section className="mb-16">
  <h2 className="text-3xl font-bold text-[#005a31] mb-6 text-center">
    🌍 Popular International Routes
  </h2>
  <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
    FlyZoo Holidays connects Bangladesh, UAE, Europe, and Asia with the most
    demanded international routes — powered by Eammu Holidays’ global network.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      {
        route: "Dhaka → Dubai",
        desc: "Most booked route for work, visit & tourism",
        price: "Starting from ৳38,000",
      },
      {
        route: "Dhaka → Kuala Lumpur",
        desc: "Top choice for tourists & students",
        price: "Starting from ৳32,000",
      },
      {
        route: "Dhaka → Istanbul",
        desc: "Gateway to Europe & Schengen",
        price: "Starting from ৳45,000",
      },
      {
        route: "Dhaka → London",
        desc: "UK visit, student & family travel",
        price: "Starting from ৳65,000",
      },
      {
        route: "Dhaka → Rome",
        desc: "Europe tourism & business travel",
        price: "Starting from ৳58,000",
      },
      {
        route: "Dhaka → Yerevan",
        desc: "Trending destination for Armenia travel",
        price: "Starting from ৳42,000",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="border border-[#005a31] rounded-xl p-6 bg-white shadow-md hover:shadow-lg transition"
      >
        <h3 className="text-xl font-semibold text-[#005a31] mb-2">
          ✈️ {item.route}
        </h3>
        <p className="text-gray-600 mb-3">{item.desc}</p>
        <p className="text-sm font-semibold text-gray-800">
          {item.price}
        </p>
      </div>
    ))}
  </div>

  {/* CTA */}
  <div className="text-center mt-10">
    <a
      href="https://wa.me/8801631312524"
      className="inline-block bg-[#005a31] text-white px-7 py-3 rounded-full hover:bg-[#003e24] transition"
    >
      📞 Book Popular Route on WhatsApp
    </a>
  </div>
</section>


      {/* Launch CTA */}
      <div className="text-center mt-16">
        <p className="text-xl font-semibold text-gray-800 mb-4">
          ✈️ FlyZoo is taking off soon. Stay connected and grab our launch offers!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-[#005a31] text-white px-6 py-3 rounded-full hover:bg-[#003e24] transition">
            Get Notified on Launch
          </button>
          <Link
            to="/"
            className="bg-white border border-[#005a31] text-[#005a31] px-6 py-3 rounded-full hover:bg-[#f0fdf4] transition"
          >
            ⬅ Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FlyZoo;
