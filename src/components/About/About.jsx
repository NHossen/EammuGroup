import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Testimonials from '../Testimonials/Testimonials';

const About = () => {
  return (
    <>
      <Helmet>
        <title>Eammu | Global Immigration, Travel, Tours & Business Services</title>
        <meta
          name="description"
          content="Discover Eammu's global services including immigration, student & work visas, travel & tour packages, IT solutions, fashion, agriculture, and event management. Serving clients in Dubai, Bangladesh, Europe, and beyond."
        />
        <meta
          name="keywords"
          content="Eammu, Immigration Services, Student Visa, Work Visa, Tourist Visa, Travel Agency, Tour Packages, IT Solutions, Event Management, Fashion, Agriculture, Bangladesh, Dubai, Europe"
        />
        <link rel="canonical" href="https://eammu.com/about" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": ["Organization", "LocalBusiness"],
            "name": "Eammu Immigration Services And Eammu Holidays",
            "url": "https://eammu.com",
            "logo": "https://i.ibb.co/YF7bmqfg/521388962-122289260780017871-6426815952586296550-n.jpg",
            "description": "Eammu provides global immigration, travel, tour packages, IT, fashion, events, and agriculture services. Offices in Dubai, Bangladesh, Europe, and Armenia.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Nakheel Center, Deira",
              "addressLocality": "Dubai",
              "addressRegion": "Dubai",
              "postalCode": "00000",
              "addressCountry": "UAE"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+8801631312524",
              "contactType": "Customer Service",
              "availableLanguage": ["English", "Arabic", "Bengali"]
            },
            "sameAs": [
              "https://facebook.com/eammuimmigrationservices/",
              "https://instagram.com/eammuholidays",
              "https://youtube.com/@eammuholidays/",
              "https://linkedin.com/company/eammu-immigration-services/"
            ]
          }
          `}
        </script>
      </Helmet>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-20">

        {/* Header */}
        <section className="space-y-8 text-center">
          <h1 className="text-4xl font-extrabold text-green-800">
            About Eammu — Your Trusted Global Immigration & Travel Partner
          </h1>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Established in 2022, Eammu is a leading brand offering professional immigration services, visa assistance, travel and tour packages, IT solutions, event management, fashion, and agricultural ventures. We serve clients in Bangladesh, Dubai, Europe, and around the world with integrity and innovation.
          </p>
          <img
            src="https://i.ibb.co/YF7bmqfg/521388962-122289260780017871-6426815952586296550-n.jpg"
            alt="Eammu Company Overview Banner"
            className="w-full h-40 md:h-[400px] lg:h-[550px] object-cover rounded-lg shadow-md"
          />
        </section>

        {/* Company Values */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Why Choose Eammu?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
            <li>🌍 Global Presence: Serving clients in Bangladesh, UAE, Canada, UK, and Europe</li>
            <li>💡 Innovation First: Advanced solutions in immigration, travel, IT, and events</li>
            <li>🤝 Transparency & Trust: Reliable services with proven results</li>
            <li>🚀 Empowering Youth: Opportunities for students, workers, and entrepreneurs</li>
          </ul>
        </section>

        {/* Core Divisions */}
        <section className="space-y-10">
          <h2 className="text-3xl font-bold text-green-700 mb-6">Our Key Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-800">

            {/* Immigration */}
            <div className="bg-white shadow-md rounded p-4">
              <img
                src="https://i.ibb.co/ymnSDKYb/481769971-122262749468017871-3083837242661680362-n.jpg"
                alt="Eammu Immigration Services"
                className="rounded mb-4 w-full h-40 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Immigration & Visa Services</h3>
              <p>
                Expert assistance for student visas, work permits, visit visas, PR, and business migration. Serving UAE, Canada, UK, Australia, and Europe with reliable documentation support.
              </p>
              <Link
                to="/visa"
                className="text-green-800 font-medium hover:underline mt-2 block"
              >
                Apply for Visa
              </Link>
            </div>

            {/* IT & Marketing */}
            <div className="bg-white shadow-md rounded p-4">
              <img
                src="https://www.marenkoeppen.com/wp-content/uploads/marenkoeppen_IT-Marketing_web-1.png"
                alt="Eammu IT Solutions"
                className="rounded mb-4 w-full h-40 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">IT & Digital Marketing</h3>
              <p>
                Website & app development, SEO, digital marketing, and lead generation for travel, education, and startup businesses.
              </p>
              <Link
                to="/eammumarketing"
                className="text-green-800 font-medium hover:underline mt-2 block"
              >
                Need Assistance
              </Link>
            </div>

            {/* Events */}
            <div className="bg-white shadow-md rounded p-4">
              <img
                src="https://onewayeventproductions.com/wp-content/uploads/2019/05/1WAYAVBestPracticesEventManagment.jpeg"
                alt="Event Management Services"
                className="rounded mb-4 w-full h-40 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Event Management</h3>
              <p>
                Weddings, corporate events, and launches with branding, logistics, decoration, and full coordination services.
              </p>
              <Link
                to="/eammuevent"
                className="text-green-800 font-medium hover:underline mt-2 block"
              >
                Book a Free Consultation
              </Link>
            </div>

            {/* Fashion */}
            <div className="bg-white shadow-md rounded p-4">
              <img
                src="https://i1.adis.ws/i/canon/pro-fashion-photography-technique-tips-1-new_e6eef04e6fe9434e9d9427a0220ef27c.jpeg"
                alt="Eammu Fashion Brand"
                className="rounded mb-4 w-full h-40 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Fashion & Apparel</h3>
              <p>
                Trendy and traditional clothing collections crafted in Bangladesh & Dubai, blending style, elegance, and affordability.
              </p>
              <Link
                to="/eammufashion"
                className="text-green-800 font-medium hover:underline mt-2 block"
              >
                Buy Now
              </Link>
            </div>

            {/* Dairy & Poultry */}
            <div className="bg-white shadow-md rounded p-4">
              <img
                src="https://img-cdn.krishijagran.com/82661/dairy-schemes.jpg"
                alt="Eammu Dairy and Poultry"
                className="rounded mb-4 w-full h-40 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Dairy & Poultry</h3>
              <p>
                Ethical farming for fresh milk, eggs, and poultry. Sustainable operations in Bangladesh for quality produce.
              </p>
              <Link
                to="/eammudairy"
                className="text-green-800 font-medium hover:underline mt-2 block"
              >
                Buy Now
              </Link>
            </div>

            {/* Textile */}
            <div className="bg-white shadow-md rounded p-4">
              <img
                src="https://media.licdn.com/dms/image/v2/C4E12AQFme5sHmaKbdQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1611920248385?e=2147483647&v=beta&t=2DQAML71MQH_IOrVjnDd_236Gm2agN1GyW9IukvkhJU"
                alt="Eammu Textile Industry"
                className="rounded mb-4 w-full h-40 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Textile & Industry</h3>
              <p>
                Premium fabrics and eco-friendly manufacturing for garments, home furnishings, and uniforms.
              </p>
              <Link
                to="/eammutextile"
                className="text-green-800 font-medium hover:underline mt-2 block"
              >
                Request a Free Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-green-700">Our Vision</h2>
          <p className="text-lg text-gray-700 max-w-4xl">
            To be a globally recognized brand driving growth and empowerment through innovation, teamwork, and top-quality services in immigration, travel, business, and lifestyle.
          </p>
        </section>

        <Testimonials />

        {/* Contact */}
        <section className="bg-[#f4fdf7] rounded-lg p-6 space-y-4 shadow-md">
          <h2 className="text-2xl font-bold">Contact Eammu Immigration Services</h2>
          <p>Need a visa or expert immigration help? Contact our team now.</p>
          <ul className="space-y-2 text-gray-700 text-base">
            <li><strong>📞 Call/WhatsApp:</strong> +8801701699743, +971507078334</li>
            <li><strong>📧 Email:</strong> eammuimmigration@gmail.com</li>
            <li><strong>🌐 Website:</strong> <a href="https://eammu.com" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">www.eammu.com</a></li>
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

        {/* Back to Home */}
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
