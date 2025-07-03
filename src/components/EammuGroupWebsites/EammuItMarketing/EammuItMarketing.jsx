import { Helmet } from "react-helmet-async";

const EammuItMarketing = () => {
  return (
    <div className="px-4 container mx-auto py-10">
      {/* SEO Helmet */}
      <Helmet>
        <title>Eammu IT & Marketing Solutions | Web, Branding & Digital Growth</title>
        <meta
          name="description"
          content="Eammu IT & Marketing offers web development, SEO, branding, social media management, and full digital growth solutions tailored for businesses in Bangladesh and globally."
        />
        <meta
          name="keywords"
          content="Eammu IT, Digital Marketing, Web Development, SEO Bangladesh, Branding Services, Social Media Marketing, Cumilla Marketing Agency"
        />
        <meta property="og:title" content="Eammu IT & Marketing Solutions" />
        <meta
          property="og:description"
          content="Grow your business with Eammu IT & Marketing — your one-stop solution for websites, marketing, branding, and more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.eammu.com/eammumarketing" />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1470&q=80"
        />
      </Helmet>

      {/* Page Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#005a31] mb-4">Eammu IT & Marketing Solutions</h1>
        <p className="text-gray-600 text-lg">
          Empowering businesses through technology, design, and digital strategy.
        </p>
        <img
          className="rounded-lg mt-6 mx-auto w-full max-w-4xl"
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1470&q=80"
          alt="Digital Solutions"
        />
      </div>

      {/* Services Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#005a31] mb-4">Our Core Services</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>💻 Web Design & Development</li>
          <li>📱 Mobile App Development (Android & iOS)</li>
          <li>📈 Search Engine Optimization (SEO)</li>
          <li>📣 Social Media Marketing & Management</li>
          <li>🎨 Graphic Design & Branding</li>
          <li>🛒 E-commerce Solutions</li>
          <li>🔐 IT Consulting & Cybersecurity</li>
        </ul>
      </section>

      {/* Image Grid */}
      <section className="grid md:grid-cols-2 gap-8 mb-12">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1470&q=80"
          alt="Website Development"
          className="rounded-lg shadow-md"
        />
        <img
          src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1470&q=80"
          alt="Marketing Strategy"
          className="rounded-lg shadow-md"
        />
      </section>

      {/* Future Vision */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#005a31] mb-4">Coming Soon</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>🌐 AI-based Marketing Campaigns</li>
          <li>📊 Business Analytics Dashboard</li>
          <li>🤖 Chatbot & Automation Solutions</li>
          <li>🧾 Invoice & ERP Tools for SMEs</li>
        </ul>
      </section>

      {/* CTA */}
      <div className="text-center mt-10">
        <p className="text-xl font-semibold text-gray-800 mb-4">
          Want to grow your online presence? Let's build your brand together!
        </p>
        <button className="bg-[#005a31] text-white px-6 py-2 rounded-full hover:bg-[#003e24] transition">
          Request a Free Quote
        </button>
      </div>
    </div>
  );
};

export default EammuItMarketing;
