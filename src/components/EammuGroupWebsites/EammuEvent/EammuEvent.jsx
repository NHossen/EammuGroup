import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const EammuEvent = () => {
  return (
    <div className="px-4 container mx-auto py-10">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Eammu Event Management | Wedding, Corporate & Cultural Events</title>
        <meta
          name="description"
          content="Eammu Event Management organizes weddings, corporate events, cultural functions, and more — creatively & professionally across Bangladesh."
        />
        <meta
          name="keywords"
          content="Eammu Event, Event Planning, Wedding Organizer, Corporate Events, Cultural Shows, Bangladesh Event Management"
        />
        <meta property="og:title" content="Eammu Event Management" />
        <meta
          property="og:description"
          content="Plan your wedding, tour launch, business conference or festival with Eammu Event — expert event planners based in Cumilla."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.eammu.com/events" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1470&q=80" />
      </Helmet>

      {/* Page Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#005a31] mb-4">Eammu Event Management</h1>
        <p className="text-gray-600 text-lg">
          Professional, Creative & Memorable — Your Event, Our Responsibility.
        </p>
        <img
          className="rounded-lg mt-6 mx-auto w-full max-w-4xl h-64 object-cover"
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1470&q=80"
          alt="Event Banner"
        />
      </div>

      {/* Offline Services Info */}
      <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-[#005a31] mb-4">📞 We’re Offering Offline Services</h2>
        <p className="text-gray-700 text-lg">
          Currently, our bookings and event planning are handled offline to ensure customized attention. Whether it’s a wedding,
          brand launch, religious function, or private celebration — our Cumilla-based team is ready to serve.
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
          <li>🤝 Meet in person or discuss via WhatsApp/Phone</li>
          <li>📋 Personalized quotes based on your event size</li>
          <li>🧠 Creative theme proposals with budget matching</li>
          <li>📍 Based in Cumilla, operating all over Bangladesh</li>
        </ul>
      </section>

      {/* Services Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#005a31] mb-4">🎯 Our Services</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>💍 Wedding Planning & Decoration</li>
            <li>🏢 Corporate Events & Conferences</li>
            <li>🎉 Birthday & Anniversary Celebrations</li>
            <li>🎤 Cultural Events & Concerts</li>
            <li>📸 Photography & Videography</li>
            <li>🍽️ Catering & Hospitality Management</li>
          </ul>
          <img
            src="https://cdn.greenvelope.com/blog/wp-content/uploads/outdoor-wedding-aisle.jpeg"
            alt="Wedding Setup"
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#005a31] mb-4">🌟 Why Choose Eammu?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <p className="text-gray-700 text-lg">
            At Eammu Event, we blend precision with imagination. With a background in executing corporate summits,
            cultural festivals, and family events — we understand how to handle big expectations with small details.
            Let us manage your logistics, vendors, stage design, and more.
          </p>
          <img
            src="https://windowsonthelake.com/wp-content/uploads/2022/09/christening-1499314_1920-1-1024x683.jpg"
            alt="Corporate Event"
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Coming Soon */}
      <section className="mb-12 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-[#005a31] mb-4">🚀 Coming Soon</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 text-base">
          <li>🌐 Online Event Booking Portal</li>
          <li>📅 Real-Time Availability Calendar</li>
          <li>📱 Mobile App for Event Planning & Progress Tracking</li>
          <li>🖼️ Event Gallery with Video & Testimonials</li>
        </ul>
      </section>

      {/* CTA */}
      <div className="text-center mt-10">
        <p className="text-xl font-semibold text-gray-800 mb-4">
          Planning a wedding, conference, or celebration in 2025? Let us help you make it unforgettable.
        </p>
        <a
          href="https://wa.me/8801631312524?text=Hello%20Eammu%20Event%20Team%2C%20I%27m%20interested%20in%20booking%20a%20service."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#005a31] text-white px-6 py-2 rounded-full hover:bg-[#003e24] transition"
        >
          Book a Free Consultation
        </a>

        {/* Back to Home */}
        <div className="mt-6">
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

export default EammuEvent;
