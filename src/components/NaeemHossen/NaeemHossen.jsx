import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const NaeemHossen = () => {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Naeem Hossen | Founder & CEO of Eammu Holidays</title>
        <meta
          name="description"
          content="Naeem Hossen is the Founder & CEO of Eammu Holidays. Expert in global visas, air ticketing, tourism, and immigration consulting."
        />
        <meta
          name="keywords"
          content="Naeem Hossen, Eammu CEO, visa consultant Bangladesh, immigration expert, travel agency founder, Eammu Holidays"
        />
        <link rel="canonical" href="https://eammu.com/naeem-hossen" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <img
            src="https://i.ibb.co/jkfRFd4Z/IMG-0450.jpg"
            alt="Naeem Hossen Founder of Eammu"
            className="w-36 h-36 mx-auto rounded-full object-cover border-4 border-[#005a31] mb-6"
          />

          <h1 className="text-4xl font-bold text-[#005a31] mb-2">
            Naeem Hossen
          </h1>

          <h2 className="text-lg font-medium text-gray-700 mb-4">
            Founder & CEO — Eammu Holidays
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Entrepreneur, global visa consultant, and travel industry professional
            with hands-on experience in visas, air ticketing, tourism, and
            international immigration services.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-14">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-[#005a31] mb-4">
            About Naeem Hossen
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Naeem Hossen is the Founder & CEO of <strong>Eammu Holidays</strong>, leading companies providing
            global visa assistance, student visas, tour packages, and air ticketing
            solutions.
          </p>

          <p className="text-gray-700 leading-relaxed">
            With professional experience across the UAE, Armenia, and South Asia,
            Naeem has successfully guided hundreds of clients for tourist visas,
            student visas, work permits, and international travel planning.
          </p>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="bg-gray-50 py-14">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-[#005a31] mb-6">
            Areas of Expertise
          </h2>

          <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
            <li>✔ Global Tourist & Business Visas</li>
            <li>✔ Student Visa Consulting</li>
            <li>✔ Air Ticketing & GDS Systems</li>
            <li>✔ Immigration Strategy & Documentation</li>
            <li>✔ Travel Agency Operations</li>
            <li>✔ Client Advisory & Case Handling</li>
          </ul>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-14 bg-gray-50">
  <div className="container mx-auto px-4 max-w-4xl">
    <h2 className="text-2xl font-bold text-[#005a31] mb-6">
      Eammu Group of Companies
    </h2>

    <ul className="space-y-4 text-gray-700 leading-relaxed">
      <li>
        🌍 <strong>Eammu Holidays</strong> — International tour packages, air
        tickets, destination management, and holiday planning.
      </li>
      <li>
        💻 <strong>Eammu IT & Marketing Solutions</strong> — Website development,
        SEO, digital marketing, branding, and online growth solutions.
      </li>

      <li>
        🎉 <strong>Eammu Event Management</strong> — Corporate events, promotions,
        exhibitions, and special event planning services.
      </li>

      <li>
        🐄 <strong>Eammu Dairy & Poultry Farm</strong> — Agricultural business
        focused on dairy production and poultry farming.
      </li>

      <li>
        👗 <strong>Eammu Fashion</strong> — Fashion products, apparel branding,
        and lifestyle-focused clothing initiatives.
      </li>

      <li>
        🧵 <strong>Eammu Textile & Industry</strong> — Textile sourcing, production,
        and industry-based manufacturing projects.
      </li>

      <li>
        ✈️ <strong>Flyzoo</strong> — Travel-focused brand associated with flight
        booking solutions and aviation-related services.
      </li>
    </ul>
  </div>
</section>


      {/* CTA */}
      <section className="bg-[#005a31] py-14 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">
            Work With Naeem Hossen
          </h2>

          <p className="mb-6 text-gray-100">
            Need expert guidance for visas, immigration, or international travel?
          </p>

          <a
            href="https://wa.me/8801631312524"
            className="inline-block bg-white text-[#005a31] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >
            📞 Contact via WhatsApp
          </a>
        </div>
      </section>

     
    </>
  );
};

export default NaeemHossen;
