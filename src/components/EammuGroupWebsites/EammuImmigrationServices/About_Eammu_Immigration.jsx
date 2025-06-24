import { Helmet } from 'react-helmet-async';

const About_Eammu_Immigration = () => {
  return (
    <>
      <Helmet>
        <title>About Eammu Immigration Services | Global Visa & Migration Experts</title>
        <meta
          name="description"
          content="Learn about Eammu Immigration Services — your trusted partner for global immigration, student visas, work permits, and relocation support across Canada, UK, UAE, Europe, and beyond."
        />
        <meta
          name="keywords"
          content="Eammu Immigration, visa consultant Bangladesh, study abroad, immigration to Canada, UAE visa, work visa, student visa agency, green card, migration help"
        />
      </Helmet>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-12">
          <h1 className="text-4xl font-extrabold text-green-800 mb-6">
            About Eammu Immigration Services
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            Established in 2018, <strong>Eammu Immigration Services</strong> is a globally recognized name in immigration consultancy,
            guiding thousands toward successful overseas careers. With over 50 offices across Bangladesh, UAE, UK, Canada, and Australia,
            Eammu proudly serves clients with transparency, efficiency, and heart.
          </p>
        </section>

        <section className="space-y-6 mb-12">
          <div className="text-lg text-gray-700 space-y-4">
            <div className="flex flex-col">
              <span className="text-green-600 font-bold">🌍 Global Presence</span>
              <p>
                1500+ team members, 1M+ happy clients, and a reputation built on referrals — our impact spans continents.
              </p>
            </div>

            <div className="flex flex-col">
              <span className="text-blue-600 font-bold">💸 Affordable & Success-Based</span>
              <p>
                We only get paid when you're successful — no hidden fees, no upfront costs. Our results speak for themselves.
              </p>
            </div>

            <div className="flex flex-col">
              <span className="text-purple-600 font-bold">📂 Document Expertise</span>
              <p>
                Whether it's for a green card, student visa, or work permit, our documentation support is unmatched in accuracy and compliance.
              </p>
            </div>

            <div className="flex flex-col">
              <span className="text-yellow-600 font-bold">✅ Trust & Legal Transparency</span>
              <p>
                All agreements are legally backed with clear refund policies, ensuring complete peace of mind.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Why Choose Eammu Immigration Services?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700 text-base">
            {[
              {
                title: 'Comprehensive Travel Support',
                description:
                  'We don’t stop at visas. From booking flights to arranging accommodation — we’ve got you covered.',
              },
              {
                title: 'Seamless Planning',
                description:
                  'Your journey is mapped out in advance — safe, quick, and efficient from start to settlement.',
              },
              {
                title: 'Expert Legal Guidance',
                description:
                  'Our consultants and lawyers advise you on eligibility, legal routes, and documentation success rates.',
              },
              {
                title: '24/7 Support',
                description:
                  'Your concerns are our priority — we’re reachable anytime through phone, WhatsApp, or email.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-bold text-teal-700 mb-1">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 bg-gray-50 p-6 rounded-lg shadow-sm text-center">
          <h2 className="text-2xl font-bold mb-4 text-green-800">
            Connect with Us to Start Your Immigration Journey
          </h2>
          <p className="text-gray-700 mb-6">
            Whether you're applying for a student visa, work permit, PR, or spouse visa — we're here to support you every step of the way.
          </p>
          <div className="text-gray-700 space-y-2 text-base">
            <p><strong>📞 Phone/WhatsApp:</strong> +8801701699743, +971507078334</p>
            <p><strong>📧 Email:</strong> <a href="mailto:eammuimmigration@gmail.com" className="text-blue-600 underline">eammuimmigration@gmail.com</a></p>
            <p><strong>🌐 Website:</strong> <a href="https://www.eammu.com" target="_blank" rel="noreferrer" className="text-blue-600 underline">www.eammu.com</a></p>
          </div>
          <button className="mt-6 bg-green-800 text-white px-6 py-3 rounded-full hover:bg-green-900 transition">
            Get Started
          </button>
        </section>
      </main>
    </>
  );
};

export default About_Eammu_Immigration;
