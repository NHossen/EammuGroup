import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const offices = [
  {
    location: "Cumilla, Bangladesh",
    address: "Office No-178, 1st Floor, Gomoti Tower, Cantonment, Cumilla",
    phone: ["+8801631312524", "+8801701699743"],
    whatsapp: "+8801631312524",
    email: ["bangladesh@eammu.com", "info@eammu.com"],
    map: "https://www.google.com/maps?q=Gomoti+Tower,+Cumilla&output=embed",
  },
  {
    location: "Business Bay, Dubai, UAE",
    address: "Business Bay, Dubai, United Arab Emirates",
    phone: ["+971507078334"],
    whatsapp: "+971507078334",
    email: ["dubai@eammu.com", "info@eammu.com"],
    map: "https://www.google.com/maps?q=Business+Bay,+Dubai&output=embed",
  },
  {
    location: "Lambron 39, Yerevan, Armenia",
    address: "Eammu Holidays, Lambron 39, Yerevan",
    phone: ["+37494810585"],
    whatsapp: "+37494810585",
    email: ["armenia@eammu.com", "info@eammu.com"],
    map: "https://www.google.com/maps?q=Lambron+39,+Yerevan&output=embed",
  },
  {
    location: "Tbilisi, Georgia",
    address: "Eammu , Floor 5 ,Levan Gotua Street #3, Tbilisi,Georgia",
    phone: ["+995574446218"],
    whatsapp: "+995574446218",
    email: ["georgia@eammu.com", "info@eammu.com"],
    map: "https://www.google.com/maps?q=Tbilisi,+Georgia&output=embed",
  },
];

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Online Travel Agency Bangladesh | Student Visa, Tourist Visa , Tour Packages |Contact Eammu Holidays </title>
        <meta
          name="description"
          content="Get in touch with Eammu Holidays For student visas, tech support, and global travel services. Reach us via phone, email, or WhatsApp. Travel Agency Based On Bangladesh, Contact With Us For Visa , Flight , Tour Packages"
        />
        <meta
          name="keywords"
          content="Eammu Holidays contact, visa support, flight Tickets, Travel Agency Bangladesh, study abroad consultant, Travel Agency Dubai, Dubai, Travel Agency Armenia, Travel Agency Georgia"
        />
        <link rel="canonical" href="https://eammu.com/contact" />
      </Helmet>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">

        {/* Contact Heading */}
        <motion.section
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl font-extrabold mb-4 text-green-800">Contact Eammu</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We’re here to assist you — whether you’re planning to study abroad, apply for a visa, need IT consultation,
            or want to collaborate with our team.
          </p>
        </motion.section>

        {/* Contact Info & Form Grid */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {/* Office Info */}
          <div className="space-y-8">
            {offices.map((office, idx) => (
              <div key={idx} className="bg-[#f4fdf7] rounded-lg p-6 shadow-md">
                <h2 className="text-2xl font-bold mb-2">{office.location}</h2>
                <p className="text-gray-700 mb-2">{office.address}</p>
                <p className="text-gray-700 mb-2">
                  <strong>Phone:</strong>{" "}
                  {office.phone.map((p, i) => (
                    <span key={i}>
                      <a href={`tel:${p}`} className="hover:underline">{p}</a>{i < office.phone.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>WhatsApp:</strong>{" "}
                  <a href={`https://wa.me/${office.whatsapp.replace(/\D/g,'')}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {office.whatsapp}
                  </a>
                </p>
                {office.email && office.email.length > 0 && (
                  <p className="text-gray-700 mb-2">
                    <strong>Email:</strong>{" "}
                    {office.email.map((em, i) => (
                      <span key={i}>
                        <a href={`mailto:${em}`} className="hover:underline">{em}</a>
                        {i < office.email.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </p>
                )}
                <div className="w-full h-48 mt-2 rounded overflow-hidden border">
                  <iframe
                    src={office.map}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map - ${office.location}`}
                  ></iframe>
                </div>
              </div>
            ))}

            {/* Follow Us */}
            <div>
              <p className="text-gray-800 font-semibold">Follow Us:</p>
              <div className="flex flex-wrap gap-4 mt-2">
                <a href="https://facebook.com/eammutourism" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Facebook
                </a>
                <a href="https://instagram.com/eammuholidays" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline">
                  Instagram
                </a>
                <a href="https://linkedin.com/company/eammu-immigration-services" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline">
                  LinkedIn
                </a>
                <a href="https://www.youtube.com/@Eammutour" target="_blank" rel="noopener noreferrer" className="text-red-800 hover:underline">
                  Youtube
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
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
                className="w-full bg-green-800 text-white px-6 py-3 rounded-md hover:bg-green-900 transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </motion.section>

        {/* Final CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <a
            href="https://wa.me/8801631312524"
            className="w-full sm:w-auto text-center bg-green-800 text-white px-6 py-3 rounded-full hover:bg-green-900 transition"
          >
            📞 WhatsApp/Call Now
          </a>

          <Link
            to="/"
            className="w-full sm:w-auto text-center bg-white border border-green-800 text-green-800 px-6 py-3 rounded-full hover:bg-green-100 transition"
          >
            ⬅ Back to Home
          </Link>
        </motion.div>
      </main>
    </>
  );
};

export default Contact;
