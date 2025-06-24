import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <>
      <Helmet>
        <title> Eammu | Global Immigration, IT, Events & Innovation</title>
        <meta
          name="description"
          content="Learn about Eammu's global services including immigration, IT solutions, fashion, agriculture, and events. Established in 2022, Eammu leads with innovation across industries."
        />
        <meta
          name="keywords"
          content="Eammu, Eammu Immigration Services, Eammu Fashion, Eammu IT, event management, digital marketing, poultry farm, textile industry, global visa, study abroad, Bangladesh immigration company"
        />
      </Helmet>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-20">

        {/* Header */}
        <section className="space-y-8">
          <h1 className="text-4xl font-extrabold text-center text-green-800">
            About Eammu — Shaping the Future with Innovation
          </h1>
          <p className="text-lg text-center text-gray-700 max-w-4xl mx-auto">
            Welcome to Eammu — a visionary brand transforming the global landscape through smart solutions in immigration,
            technology, events, agriculture, and fashion. Established in 2022, our mission is to deliver impactful, ethical,
            and sustainable services that empower individuals and businesses across borders.
          </p>
        </section>

        {/* Company Values */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Why Eammu?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
            <li>🌍 Global Presence: Serving clients in Bangladesh, UAE, Canada, UK, and beyond</li>
            <li>💡 Innovation First: Always adapting, always improving</li>
            <li>🤝 Transparency & Trust: Our brand is built on results and reliability</li>
            <li>🚀 Empowering Youth: Creating opportunities for students, workers, and entrepreneurs</li>
          </ul>
        </section>

        {/* Core Divisions */}
        <section className="space-y-10">
          <h2 className="text-3xl font-bold mb-6 text-green-700">Our Key Divisions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-800 text-base">

            <div className="bg-white shadow-md rounded p-6">
              <h3 className="text-xl font-semibold mb-2">Eammu Immigration Services</h3>
              <p>
                Trusted by thousands, our immigration experts assist with student visas, work permits, visit visas, PR, and
                business migration. We specialize in Canada, UK, UAE, Australia, and Europe immigration programs with guaranteed
                documentation support.
              </p>
            </div>

            <div className="bg-white shadow-md rounded p-6">
              <h3 className="text-xl font-semibold mb-2">Eammu IT & Marketing</h3>
              <p>
                From website and app development to digital marketing, SEO, and lead generation — our IT division empowers
                businesses with smart tech. Tailored solutions for travel, education, retail, and startups.
              </p>
            </div>

            <div className="bg-white shadow-md rounded p-6">
              <h3 className="text-xl font-semibold mb-2">Eammu Event Management</h3>
              <p>
                Whether it's a wedding, corporate seminar, or product launch — our team delivers stunning events with branding,
                logistics, decoration, and full coordination. We believe in moments that matter.
              </p>
            </div>

            <div className="bg-white shadow-md rounded p-6">
              <h3 className="text-xl font-semibold mb-2">Eammu Fashion</h3>
              <p>
                A modern apparel brand that blends tradition and trend. Our collections include ethnic wear, formal and street
                styles designed in Bangladesh and Dubai, crafted for elegance and affordability.
              </p>
            </div>

            <div className="bg-white shadow-md rounded p-6">
              <h3 className="text-xl font-semibold mb-2">Eammu Dairy & Poultry</h3>
              <p>
                Committed to food quality, we produce farm-fresh milk, eggs, and poultry with ethical farming practices and
                sustainable operations in rural Bangladesh.
              </p>
            </div>

            <div className="bg-white shadow-md rounded p-6">
              <h3 className="text-xl font-semibold mb-2">Eammu Textile & Industry</h3>
              <p>
                As part of Bangladesh’s export backbone, our textile unit delivers premium fabrics for garments, home
                furnishings, and uniforms — maintaining eco-friendly production standards.
              </p>
            </div>
          </div>
        </section>

        {/* Our Vision */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-green-700">Our Vision</h2>
          <p className="text-lg text-gray-700 max-w-4xl">
            To become a globally admired brand that drives growth for individuals and enterprises. Through innovation, teamwork,
            and service, we empower our clients to achieve their dreams — be it migration, career growth, entrepreneurship, or
            lifestyle upgrade.
          </p>
        </section>

        {/* Immigration Contact Block */}
        <section className="bg-[#f4fdf7] rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-bold">Contact Eammu Immigration Services</h2>
          <p>Need a visa or expert immigration help? We're here 24/7.</p>
          <ul className="space-y-2 text-gray-700 text-base">
            <li><strong>📞 Call/WhatsApp:</strong> +8801701699743, +971507078334</li>
            <li><strong>📧 Email:</strong> eammuimmigration@gmail.com</li>
            <li><strong>🌐 Website:</strong> <a href="https://www.eammu.com" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">www.eammu.com</a></li>
          </ul>
          <button className="bg-green-800 text-white px-6 py-3 rounded-full hover:bg-green-900 transition">
            Start Your Journey Now
          </button>
        </section>
      </main>
    </>
  );
};

export default About;
