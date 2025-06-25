import { Helmet } from 'react-helmet-async';

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
          className="rounded-lg mt-6 mx-auto w-full max-w-4xl"
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1470&q=80"
          alt="Event Banner"
        />
      </div>

      {/* Services Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#005a31] mb-4">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>💍 Wedding Planning & Decoration</li>
              <li>🏢 Corporate Events & Conferences</li>
              <li>🎉 Birthday & Anniversary Celebrations</li>
              <li>🎤 Cultural Events & Concerts</li>
              <li>📸 Photography & Videography</li>
              <li>🍽️ Catering & Hospitality Management</li>
            </ul>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1470&q=80"
              alt="Wedding Setup"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#005a31] mb-4">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <p className="text-gray-700">
            At Eammu Event, we bring together creativity, precision, and experience to organize stunning events. Whether it’s your dream wedding, a business conference, or a cultural festival — we handle everything with elegance.
          </p>
          <img
            src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1470&q=80"
            alt="Corporate Event"
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Coming Soon Features */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#005a31] mb-4">Coming Soon</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>🌐 Online Event Booking Portal</li>
          <li>📅 Real-Time Availability Calendar</li>
          <li>📱 Mobile App for Event Planning & Progress Tracking</li>
          <li>🖼️ Event Gallery with Video & Testimonials</li>
        </ul>
      </section>

      {/* Call to Action */}
      <div className="text-center mt-10">
        <p className="text-xl font-semibold text-gray-800 mb-4">
          Planning a wedding, conference or celebration in 2025? Let us help you make it unforgettable.
        </p>
        <button className="bg-[#005a31] text-white px-6 py-2 rounded-full hover:bg-[#003e24] transition">
          Book a Free Consultation
        </button>
      </div>
    </div>
  );
};

export default EammuEvent;
