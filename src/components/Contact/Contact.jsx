import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Eammu | Immigration, IT & Travel Services</title>
        <meta
          name="description"
          content="Get in touch with Eammu for immigration, student visas, tech support, and global travel services. Reach us via phone, email, or WhatsApp."
        />
        <meta
          name="keywords"
          content="Eammu contact, visa support, immigration help, contact Eammu, study abroad consultant, Cumilla immigration office"
        />
      </Helmet>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">

        {/* Contact Heading */}
        <section className="text-center">
          <h1 className="text-4xl font-extrabold mb-4 text-green-800">Contact Eammu</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We’re here to assist you — whether you’re planning to study abroad, apply for a visa, need IT consultation,
            or want to collaborate with our team.
          </p>
        </section>

        {/* Contact Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-2">Reach Us Directly</h2>

            <div className="text-gray-700 space-y-4">
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:eammuimmigration@gmail.com" className="text-blue-600 underline">
                  eammuimmigration@gmail.com
                </a>
              </p>

              <p>
                <strong>WhatsApp & Phone:</strong><br />
                <a href="tel:+8801631312524" className="hover:underline">+880 16 3131-2524</a><br />
                <a href="tel:+8801701699743" className="hover:underline">+880 17 0169-9743</a><br />
                <a href="tel:+971507078334" className="hover:underline">+971 50 707 8334 (UAE Office)</a>
              </p>

              <p>
                <strong>Address:</strong><br />
                Office No-178, 1st Floor, Gomoti Tower, Cantonment, Cumilla, Bangladesh
              </p>

              <p>
                <strong>Business Hours:</strong><br />
                Sunday – Thursday: 10:00 AM – 6:00 PM<br />
                Friday: Closed<br />
                Saturday: 11:00 AM – 3:00 PM
              </p>
            </div>

            <div>
              <p className="text-gray-800 font-semibold">Follow Us:</p>
              <div className="flex gap-4 mt-2">
                <a href="https://facebook.com/eammuimmigrationservices" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Facebook
                </a>
                <a href="https://instagram.com/eammutour" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline">
                  Instagram
                </a>
                <a href="https://linkedin.com/company/eammu-immigration-services" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full mt-1 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-700"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full mt-1 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-700"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full mt-1 border rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-green-700"
                  placeholder="Enter your message"
                />
              </div>

              <button
                type="submit"
                className="bg-green-800 text-white px-6 py-3 rounded-md hover:bg-green-900 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Optional Map or CTA */}
        <section className="text-center mt-20">
          <h2 className="text-2xl font-bold mb-4">Looking for our office?</h2>
          <p className="text-gray-600 mb-6">Visit us in Cumilla, Bangladesh or reach our UAE branch for fast-track support.</p>
          <a
            href="https://www.google.com/maps?q=Gomoti+Tower,+Cumilla"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            View on Google Maps
          </a>
        </section>

        {/* Final CTA Buttons */}
        <div className="text-center mt-12 space-x-4">
          <a
            href="tel:+8801631312524"
            className="inline-block bg-green-800 text-white px-6 py-3 rounded-full hover:bg-green-900 transition"
          >
            📞 Call Now
          </a>

          <Link
            to="/"
            className="inline-block bg-white border border-green-800 text-green-800 px-6 py-3 rounded-full hover:bg-green-100 transition"
          >
            ⬅ Back to Home
          </Link>
        </div>
      </main>
    </>
  );
};

export default Contact;
