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
    website: "/travel-agency-bangladesh",
  },
  {
    location: "Business Bay, Dubai, UAE",
    address: "Business Bay, Dubai, United Arab Emirates",
    phone: ["+971507078334"],
    whatsapp: "+971507078334",
    email: ["dubai@eammu.com", "info@eammu.com"],
    map: "https://www.google.com/maps?q=Business+Bay,+Dubai&output=embed",
    website: "/travel-agency-dubai",
  },
  {
    location: "Lambron 39, Yerevan, Armenia",
    address: "Eammu Holidays, Lambron 39, Yerevan",
    phone: ["+37494810585"],
    whatsapp: "+37494810585",
    email: ["armenia@eammu.com", "info@eammu.com"],
    map: "https://www.google.com/maps?q=Lambron+39,+Yerevan&output=embed",
    website: "/travel-agency-armenia",
  },
  {
    location: "Tbilisi, Georgia",
    address: "Eammu , Floor 5 ,Levan Gotua Street #3, Tbilisi,Georgia",
    phone: ["+995574446218"],
    whatsapp: "+995574446218",
    email: ["georgia@eammu.com", "info@eammu.com"],
    map: "https://www.google.com/maps?q=Tbilisi,+Georgia&output=embed",
    website: "/travel-agency-georgia",
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "Eammu Holidays Cumilla",
  "alternateName": "Travel Agency Cumilla",
  "url": "https://eammu.com",
  "logo": "https://eammu.com/logo.png",
  "description": "Premium travel agency in Bangladesh providing student visa, tourist visa, and international tour packages.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Office No-178, 1st Floor, Gomoti Tower, Cantonment",
    "addressLocality": "Cumilla",
    "addressRegion": "Chittagong",
    "postalCode": "3500",
    "addressCountry": "BD"
  },
  "telephone": "+8801631312524",
  "sameAs": [
    "https://facebook.com/eammutourism",
    "https://instagram.com/eammuholidays",
    "https://linkedin.com/company/eammu-immigration-services",
    "https://www.youtube.com/@Eammutour"
  ],
  "subOrganization": [
    {
      "@type": "TravelAgency",
      "name": "Eammu Holidays Dubai",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Business Bay",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      },
      "telephone": "+971507078334"
    },
    {
      "@type": "TravelAgency",
      "name": "Eammu Holidays Armenia",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Lambron 39",
        "addressLocality": "Yerevan",
        "addressCountry": "AM"
      },
      "telephone": "+37494810585"
    },
    {
      "@type": "TravelAgency",
      "name": "Eammu Georgia",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Levan Gotua Street #3",
        "addressLocality": "Tbilisi",
        "addressCountry": "GE"
      },
      "telephone": "+995574446218"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where are Eammu Holidays offices located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Eammu Holidays has a global presence with its headquarters in Cumilla, Bangladesh, and branch offices in Business Bay (Dubai), Yerevan (Armenia), and Tbilisi (Georgia)."
      }
    },
    {
      "@type": "Question",
      "name": "How can I apply for a visa through Eammu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can apply by contacting us via WhatsApp at +8801631312524, emailing info@eammu.com, or visiting any of our international offices for a face-to-face consultation."
      }
    },
    {
      "@type": "Question",
      "name": "Which visa categories does Eammu specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We specialize in Student Visas, Tourist Visas, and Work Permits for the USA, UK, Canada, Europe (Schengen), Dubai, and Japan."
      }
    },
    {
      "@type": "Question",
      "name": "Does Eammu offer online air ticket booking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Currently, we offer offline air ticket booking with 24/7 support. Our fully integrated online IATA-certified booking portal is launching soon for global users."
      }
    }
  ]
};

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Leading Travel Agency Bangladesh | Travel Agency Dhaka | Travel Agency Cumilla</title>
        <meta
          name="description"
          content="Bangladesh's leading online travel agency. Book air tickets, hotels, tour packages & more without any hassle at the most affordable rates with Eammu Holidays.Leading travel agency in Cumilla"
        />
        <link rel="canonical" href="https://eammu.com/contact" />

        <script type="application/ld+json">
    {JSON.stringify(schemaData)}
  </script>

  <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <main >
   {/* --- Contact Heading with Background Image --- */}
<motion.section
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="relative py-32 px-4 text-center overflow-hidden"
>
  {/* Background Image Container */}
  <div className="absolute inset-0 z-0">
    <img 
      src="eammu_banner.webp" // Replace with your preferred contact/office image
      alt="Online Travel Agency Cumilla" 
      className="w-full h-full object-cover"
    />
    {/* Overlay to ensure text readability */}
    <div className="absolute inset-0 bg-black/20"></div>
  </div>

  {/* Content Layer */}
  <div className="relative z-10">
    <h1 className="text-4xl md:text-4xl font-extrabold mb-4 text-white drop-shadow-sm">
      Eammu Holidays Contact Information | Our Travel Agency Offices Worldwide  
    </h1>
    <p className="text-lg text-white max-w-2xl mx-auto font-medium leading-relaxed">
  Connect with Eammu Holidays for trusted travel and business support services. Whether you're planning to study abroad, applying for visas, seeking expert IT consultation, or looking for reliable partnership opportunities, our team is ready to assist you with fast, professional, and personalized solutions.
</p>
  </div>
</motion.section>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      

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
                <div className='mt-4'>
                              <a 
        href={office.website} 
        className="bg-green-800 text-white px-4 py-2 rounded"
      >
        🌍 Visit Website
      </a>
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


<section className="mt-20 border-t pt-10">
  <h2 className="text-3xl font-bold text-green-800 text-center mb-8">Frequently Asked Questions</h2>
  <div className="space-y-6 max-w-4xl mx-auto">
    <div className="bg-white p-5 rounded-lg shadow-sm border">
      <h3 className="text-lg font-bold text-gray-800">Where are Eammu Holidays offices located?</h3>
      <p className="text-gray-600 mt-2">We have physical offices in Bangladesh (Cumilla), UAE (Dubai), Armenia (Yerevan), and Georgia (Tbilisi) to serve you globally.</p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow-sm border">
      <h3 className="text-lg font-bold text-gray-800">How can I apply for a visa through Eammu?</h3>
      <p className="text-gray-600 mt-2">Simply reach out via WhatsApp or visit our branch. Our experts handle documentation for Canada, USA, UK, and Europe.</p>
    </div>
  </div>
</section>
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
</div>

      </main>
    </>
  );
};

export default Contact;
