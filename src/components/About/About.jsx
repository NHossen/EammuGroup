import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Helmet>
        <title>Eammu | Global Immigration, IT, Events & Innovation</title>
        <meta
          name="description"
          content="Learn about Eammu's global services including immigration, IT solutions, fashion, agriculture, and events. Established in 2022, Eammu leads with innovation across industries."
        />
        <meta
          name="keywords"
          content="Eammu, Eammu Immigration Services, Eammu Fashion, Eammu IT, event management, digital marketing, poultry farm, textile industry, global visa, study abroad, Bangladesh immigration company"
        />
        <link rel="canonical" href="https://www.eammu.com/about" />
      </Helmet>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-20">

        {/* Header */}
        <section className="space-y-8 text-center">
          <h1 className="text-4xl font-extrabold text-green-800">
            About Eammu — Shaping the Future with Innovation
          </h1>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Welcome to Eammu — a visionary brand transforming the global landscape through smart solutions in immigration,
            technology, events, agriculture, and fashion. Established in 2022, our mission is to deliver impactful, ethical,
            and sustainable services that empower individuals and businesses across borders.
          </p>
          <img
            src="https://i.ibb.co/VcH0yBHW/473016382-122252070710017871-5970025600395878035-n.jpg"
            alt="Eammu banner"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
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
          <h2 className="text-3xl font-bold text-green-700 mb-6">Our Key Divisions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-800">

            {/* Immigration */}
            <div className="bg-white shadow-md rounded p-4">
              <img
                src="https://i.ibb.co/ymnSDKYb/481769971-122262749468017871-3083837242661680362-n.jpg"
                alt="Immigration Services"
                className="rounded mb-4 w-full h-40 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Eammu Immigration Services</h3>
              <p>
                Trusted by thousands, our immigration experts assist with student visas, work permits, visit visas, PR, and
                business migration. We specialize in Canada, UK, UAE, Australia, and Europe immigration programs with guaranteed
                documentation support.
              </p>
            </div>

            {/* IT & Marketing */}
            <div className="bg-white shadow-md rounded p-4">
              <img
                src="https://www.marenkoeppen.com/wp-content/uploads/marenkoeppen_IT-Marketing_web-1.png"
                alt="IT & Marketing"
                className="rounded mb-4 w-full h-40 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Eammu IT & Marketing</h3>
              <p>
                From website and app development to digital marketing, SEO, and lead generation — our IT division empowers
                businesses with smart tech. Tailored solutions for travel, education, retail, and startups.
              </p>
            </div>

            {/* Events */}
            <div className="bg-white shadow-md rounded p-4">
              <img
                src="https://cdn-cjhkj.nitrocdn.com/krXSsXVqwzhduXLVuGLToUwHLNnSxUxO/assets/images/optimized/rev-d98e8d7/spotme.com/wp-content/uploads/2020/07/Hero-1.jpg"
                alt="Event Management"
                className="rounded mb-4 w-full h-40 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Eammu Event Management</h3>
              <p>
                Whether it's a wedding, corporate seminar, or product launch — our team delivers stunning events with branding,
                logistics, decoration, and full coordination. We believe in moments that matter.
              </p>
            </div>

            {/* Fashion */}
            <div className="bg-white shadow-md rounded p-4">
              <img
                src="https://i1.adis.ws/i/canon/pro-fashion-photography-technique-tips-1-new_e6eef04e6fe9434e9d9427a0220ef27c.jpeg"
                alt="Fashion"
                className="rounded mb-4 w-full h-40 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Eammu Fashion</h3>
              <p>
                A modern apparel brand that blends tradition and trend. Our collections include ethnic wear, formal and street
                styles designed in Bangladesh and Dubai, crafted for elegance and affordability.
              </p>
            </div>

            {/* Dairy & Poultry */}
            <div className="bg-white shadow-md rounded p-4">
              <img
                src="https://img-cdn.krishijagran.com/82661/dairy-schemes.jpg"
                alt="Dairy & Poultry"
                className="rounded mb-4 w-full h-40 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Eammu Dairy & Poultry</h3>
              <p>
                Committed to food quality, we produce farm-fresh milk, eggs, and poultry with ethical farming practices and
                sustainable operations in rural Bangladesh.
              </p>
            </div>

            {/* Textile */}
            <div className="bg-white shadow-md rounded p-4">
              <img
                src="https://media.licdn.com/dms/image/v2/C4E12AQFme5sHmaKbdQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1611920248385?e=2147483647&v=beta&t=2DQAML71MQH_IOrVjnDd_236Gm2agN1GyW9IukvkhJU"
                alt="Textile Industry"
                className="rounded mb-4 w-full h-40 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Eammu Textile & Industry</h3>
              <p>
                As part of Bangladesh’s export backbone, our textile unit delivers premium fabrics for garments, home
                furnishings, and uniforms — maintaining eco-friendly production standards.
              </p>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-green-700">Our Vision</h2>
          <p className="text-lg text-gray-700 max-w-4xl">
            To become a globally admired brand that drives growth for individuals and enterprises. Through innovation, teamwork,
            and service, we empower our clients to achieve their dreams — be it migration, career growth, entrepreneurship, or
            lifestyle upgrade.
          </p>
        </section>

        {/* Immigration Contact Block */}
        <section className="bg-[#f4fdf7] rounded-lg p-6 space-y-4 shadow-md">
          <h2 className="text-2xl font-bold">Contact Eammu Immigration Services</h2>
          <p>Need a visa or expert immigration help? We're here 24/7.</p>
          <ul className="space-y-2 text-gray-700 text-base">
            <li><strong>📞 Call/WhatsApp:</strong> +8801701699743, +971507078334</li>
            <li><strong>📧 Email:</strong> eammuimmigration@gmail.com</li>
            <li><strong>🌐 Website:</strong> <a href="https://www.eammu.com" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">www.eammu.com</a></li>
          </ul>
          <a
            href="https://wa.me/8801701699743"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-800 text-white px-6 py-3 rounded-full hover:bg-green-900 transition"
          >
            Start Your Journey Now
          </a>
        </section>

        {/* Back to Home Button */}
        <div className="text-center mt-12">
          <Link
            to="/"
            className="inline-block bg-white border border-green-800 text-green-800 px-6 py-3 rounded-full hover:bg-green-100 transition"
          >
            Back to Home
          </Link>
        </div>
      </main>
    </>
  );
};

export default About;
