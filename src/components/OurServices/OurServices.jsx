import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FaGlobe, FaPlane, FaUniversity, FaTags, FaPassport, FaSuitcaseRolling } from "react-icons/fa";

const services = [
  {
    icon: <FaPassport className="text-4xl text-[#005a31]" />,
    title: "Visa Processing",
    description: "Student, tourist, business, and family visas for multiple countries including USA, UK, Canada, and Schengen zone.",
  },
  {
    icon: <FaUniversity className="text-4xl text-[#005a31]" />,
    title: "Study Abroad",
    description: "Expert guidance for university admission, scholarship support, SOP, and visa applications.",
  },
  {
    icon: <FaPlane className="text-4xl text-[#005a31]" />,
    title: "Air Ticketing",
    description: "We offer affordable international and domestic flight tickets with 24/7 customer service.",
  },
  {
    icon: <FaGlobe className="text-4xl text-[#005a31]" />,
    title: "Tour Packages",
    description: "Umrah, group tours, and honeymoon packages tailored to your budget and schedule.",
  },
  {
    icon: <FaTags className="text-4xl text-[#005a31]" />,
    title: "Special Offers",
    description: "Seasonal discounts and exclusive service combos to save money on your travel journey.",
  },
  {
    icon: <FaSuitcaseRolling className="text-4xl text-[#005a31]" />,
    title: "Tourist Visa Application",
    description: "We assist in processing tourist visas with proper documentation and consultation for a smooth journey.",
  },
];

const OurServices = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 container mx-auto pt-6 pb-12 bg-gradient-to-b from-[#f0fdf4] to-white">
      <Helmet>
        <title>Our Services | Eammu Immigration & Travel Solutions</title>
        <meta
          name="description"
          content="Explore the full range of services by Eammu Immigration Services. Visa support, study abroad guidance, tour packages, and more from Bangladesh and UAE."
        />
        <link rel="canonical" href="https://eammu.com/ourServices" />
      </Helmet>

      <h1 className="text-4xl md:text-5xl font-bold text-center text-[#005a31] mb-10">
        Our Services
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-md border-l-4 border-[#005a31] p-6 hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-[#005a31] mb-2">
              {service.title}
            </h3>
            <p className="text-gray-700">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
