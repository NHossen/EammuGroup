import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const About_Eammu_Immigration = () => {
  return (
    <>
      <Helmet>
        <title>Eammu Holidays | Global Visa, Student Visa & Migration Experts</title>
        <meta
          name="description"
          content="Learn about Eammu Holidays — your trusted partner for global immigration, student visas, work permits, and relocation support across Canada, UK, UAE, Europe, and beyond."
        />
        <meta
          name="keywords"
          content="Eammu Holidays, visa consultant Bangladesh, study abroad, immigration to Canada, UAE visa, work visa, student visa agency, green card, migration help"
        />
      </Helmet>

      <main className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Header */}
        <section className="text-center space-y-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-green-800">
            About Eammu Holidays
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Founded in 2022, <strong>Eammu Holidays</strong> is one of Bangladesh’s fastest-growing global visa consultancies. With over 50 local & international offices, we proudly help thousands achieve their dreams of studying, working, and living abroad.
          </p>
          <img
            src="https://visaindex.s3.eu-central-1.amazonaws.com/wp-content/uploads/2023/10/13203351/What-is-Smart-Tourism-1200x492.webp"
            alt="Eammu Immigration"
            className="rounded-lg shadow-lg w-full max-w-4xl mx-auto"
          />
        </section>

        {/* Core Values */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: '🌍 Global Reach',
              color: 'text-green-700',
              desc: 'Presence in UAE, Canada, UK, Australia & Bangladesh with local support teams.',
            },
            {
              title: '💼 1M+ Clients',
              color: 'text-blue-700',
              desc: 'Over 1 million satisfied applicants from diverse backgrounds and goals.',
            },
            {
              title: '📑 Legal Assurance',
              color: 'text-yellow-600',
              desc: 'All services are backed by contracts, refund policies, and verified legal teams.',
            },
            {
              title: '🎯 Results-Focused',
              color: 'text-purple-700',
              desc: 'We prioritize success — with minimal upfront cost and milestone-based fees.',
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded shadow p-6 space-y-2">
              <h3 className={`font-bold ${item.color}`}>{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* Services Offered */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-green-700">What We Help You With</h2>
          <ul className="list-disc pl-6 text-gray-700 text-base space-y-2">
            <li>🎓 Student Visa (Canada, UK, Russia, Australia, UAE & Europe)</li>
            <li>🛠️ Skilled Worker Migration & Work Permits</li>
            <li>💼 Business & Investment Migration</li>
            <li>💑 Spouse & Family Visas (Canada Sponsorship, UK Spouse)</li>
            <li>🧳 Tourist & Visit Visas with Travel Itinerary Support</li>
            <li>📜 Full Documentation, SOP, CV, Cover Letter, and Embassy Guidelines</li>
          </ul>
        </section>

        {/* Why Clients Trust Us */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-green-800">Why Clients Trust Eammu</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: 'Comprehensive Travel & Study Planning',
                desc: 'From visa paperwork to accommodation, flight, and university consultation — we assist in every step.',
              },
              {
                title: 'Dedicated Legal Advisors',
                desc: 'We work with licensed consultants, embassy rules, and ensure 100% compliant documentation.',
              },
              {
                title: '24/7 Personal Support',
                desc: 'You’re never alone — our team is ready via WhatsApp, phone, or office in Bangladesh & UAE.',
              },
              {
                title: 'Affordable & Transparent Fees',
                desc: 'No hidden fees — clear service packages and installment plans for all clients.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-5 rounded shadow">
                <h3 className="text-lg font-semibold text-green-700 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact & CTA */}
        <section className="bg-[#f4fdf7] p-6 sm:p-10 rounded-lg shadow text-center">
          <h2 className="text-2xl font-bold mb-4 text-green-800">
            Connect with Eammu Immigration Experts
          </h2>
          <p className="text-gray-700 mb-6">
            Our journey starts with you. Book a free consultation today and let’s build your path abroad.
          </p>
          <div className="text-gray-700 space-y-2 text-base">
            <p><strong>📞 Phone/WhatsApp:</strong> <a href="tel:+8801701699743" className="hover:underline">+8801701699743</a>, <a href="tel:+971507078334" className="hover:underline">+971507078334</a></p>
            <p><strong>📧 Email:</strong> <a href="mailto:eammuimmigration@gmail.com" className="text-blue-600 underline">eammuimmigration@gmail.com</a></p>
            <p><strong>🌐 Website:</strong> <a href="https://www.eammu.com" target="_blank" rel="noreferrer" className="text-blue-600 underline">www.eammu.com</a></p>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/8801631312524?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-800 text-white px-6 py-3 rounded-full hover:bg-green-900 transition"
            >
              Chat on WhatsApp
            </a>
            <Link
              to="/"
              className="bg-white border border-green-800 text-green-800 px-6 py-3 rounded-full hover:bg-green-100 transition"
            >
              ⬅ Back to Home
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default About_Eammu_Immigration;
