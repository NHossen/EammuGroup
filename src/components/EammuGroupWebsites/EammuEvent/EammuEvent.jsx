import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const EammuEvent = () => {
  return (
    <div className="px-4 container mx-auto py-12">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>
          Eammu Event Management | Wedding, Corporate & Cultural Event Planner in Bangladesh
        </title>
        <meta
          name="description"
          content="Eammu Event Management offers professional wedding planning, corporate events, cultural programs, photography, catering, and full event solutions across Bangladesh."
        />
        <meta
          name="keywords"
          content="Eammu Event Management, Wedding Planner Bangladesh, Corporate Event Organizer, Cultural Events, Cumilla Event Planner, Event Management Company"
        />
        <link rel="canonical" href="https://www.eammu.com/eammuevent" />

        <meta property="og:title" content="Eammu Event Management | Make Your Event Memorable" />
        <meta
          property="og:description"
          content="From weddings to corporate conferences — Eammu Event Management delivers creative, reliable & premium event solutions across Bangladesh."
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1470&q=80"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#005a31] mb-4">
          Eammu Event Management
        </h1>
        <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
          Professional • Creative • Reliable Event Planning for Weddings, Corporate Programs
          & Cultural Celebrations Across Bangladesh
        </p>

        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1470&q=80"
          alt="Eammu Event Management Banner"
          className="rounded-xl mt-8 mx-auto w-full max-w-5xl h-72 object-cover shadow-lg"
        />
      </section>

      {/* Offline Booking Notice */}
      <section className="mb-14 bg-white p-6 md:p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-[#005a31] mb-4">
          📞 Offline Event Booking & Consultation
        </h2>
        <p className="text-gray-700 text-lg">
          To ensure premium quality and personalized planning, Eammu Event Management
          currently offers <strong>offline booking & consultation</strong>. Our expert team
          works closely with you to design, plan, and execute your event perfectly.
        </p>

        <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
          <li>One-to-one consultation via phone, WhatsApp or in-person</li>
          <li>Customized event planning based on budget & theme</li>
          <li>Vendor coordination, decoration & logistics handled end-to-end</li>
          <li>Based in Cumilla — serving events all over Bangladesh</li>
        </ul>
      </section>

      {/* Services */}
      <section className="mb-14">
        <h2 className="text-3xl font-semibold text-[#005a31] mb-6">
          🎯 Our Event Management Services
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <ul className="list-disc pl-6 text-gray-700 space-y-3 text-lg">
            <li>💍 Wedding Planning, Stage & Venue Decoration</li>
            <li>🏢 Corporate Events, Seminars & Conferences</li>
            <li>🎉 Birthday, Anniversary & Private Celebrations</li>
            <li>🎤 Cultural Programs, Concerts & Shows</li>
            <li>📸 Professional Photography & Videography</li>
            <li>🍽️ Catering & Hospitality Management</li>
          </ul>

          <img
            src="https://cdn.greenvelope.com/blog/wp-content/uploads/outdoor-wedding-aisle.jpeg"
            alt="Wedding Event Setup"
            className="rounded-xl shadow-md w-full h-64 object-cover"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-14">
        <h2 className="text-3xl font-semibold text-[#005a31] mb-6">
          🌟 Why Choose Eammu Event Management?
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <p className="text-gray-700 text-lg leading-relaxed">
            With hands-on experience in weddings, corporate summits, and large cultural
            programs, Eammu Event Management focuses on precision, creativity, and flawless
            execution. From concept to completion, we handle every detail so you can enjoy
            your special day stress-free.
          </p>

          <img
            src="https://windowsonthelake.com/wp-content/uploads/2022/09/christening-1499314_1920-1-1024x683.jpg"
            alt="Corporate & Cultural Event"
            className="rounded-xl shadow-md w-full h-64 object-cover"
          />
        </div>
      </section>

      {/* Future Features */}
      <section className="mb-16 bg-gray-50 p-6 md:p-8 rounded-xl">
        <h2 className="text-3xl font-semibold text-[#005a31] mb-4">
          🚀 What’s Coming Next
        </h2>

        <ul className="list-disc pl-6 text-gray-700 space-y-2 text-lg">
          <li>Online Event Booking & Quotation System</li>
          <li>Live Event Gallery with Photos & Videos</li>
          <li>Client Testimonials & Event Case Studies</li>
          <li>Dedicated Event Planning Mobile App</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center">
        <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
          Planning a wedding, corporate event or celebration With Eammu
        </p>

        <a
          href="https://wa.me/8801631312524?text=Hello%20Eammu%20Event%20Team%2C%20I%20want%20to%20book%20an%20event%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#005a31] text-white px-8 py-3 rounded-full text-lg hover:bg-[#003e24] transition"
        >
          📞 Book a Free Event Consultation
        </a>

        <div className="mt-6">
          <Link
            to="/"
            className="inline-block bg-white border border-green-800 text-green-800 px-6 py-3 rounded-full hover:bg-green-100 transition"
          >
            ⬅ Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EammuEvent;
