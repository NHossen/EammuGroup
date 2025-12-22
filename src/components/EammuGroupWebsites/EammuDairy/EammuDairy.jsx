import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const EammuDairy = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* ✅ SEO META */}
      <Helmet>
        <title>Dairy and Poultry Farm Bangladesh | Fresh Milk, Eggs & Poultry Dhaka | Eammu</title>
        <meta
          name="description"
          content="Eammu Dairy & Poultry in Bangladesh offers fresh organic cow milk, free-range eggs, and local poultry. Farm-fresh, chemical-free, and trusted by local families."
        />
        <meta
          name="keywords"
          content="Eammu Dairy, Poultry Farm Dhaka,Poultry Farm Bangladesh, Fresh Milk Bangladesh, Organic Eggs, Local Chicken, Dairy Farm Cumilla, Dairy Farm Dhaka , Fresh Vegetables Dhaka"
        />
        <link rel="canonical" href="https://www.eammu.com/eammudairy" />
        <meta property="og:title" content="Eammu Dairy & Poultry | Farm Fresh from Cumilla" />
        <meta
          property="og:description"
          content="Pure cow milk, fresh eggs & poultry directly from Eammu Dairy Farm in Cumilla."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://static.vecteezy.com/system/resources/previews/047/547/980/non_2x/dairy-products-horizontal-banner-with-nature-landscape-summer-rural-landscape-with-set-of-milk-products-from-farm-and-herd-cows-design-elements-for-infographics-websites-and-print-media-vector.jpg" />
      </Helmet>

      {/* 🌿 HERO */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#005a31] mb-4">
          Eammu Dairy & Poultry 🌿
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          From our Cumilla farm to your home — fresh, organic, and chemical-free dairy & poultry you can trust.
        </p>

        <img
          src="https://static.vecteezy.com/system/resources/previews/047/547/980/non_2x/dairy-products-horizontal-banner-with-nature-landscape-summer-rural-landscape-with-set-of-milk-products-from-farm-and-herd-cows-design-elements-for-infographics-websites-and-print-media-vector.jpg"
          alt="Eammu Dairy Farm Cumilla"
          className="mt-8 w-full h-72 object-cover rounded-xl shadow-lg"
          loading="lazy"
        />
      </motion.div>

      {/* 🥛 WHAT WE OFFER */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold text-[#005a31] mb-6">
          What We Offer
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <ul className="space-y-3 text-gray-700 text-lg">
            <li>🐄 Fresh Organic Cow Milk (Daily Collected)</li>
            <li>🥚 Free-range Chicken Eggs</li>
            <li>🐓 Deshi & Broiler Poultry Meat</li>
            <li>🌾 Natural Feed & Open Grazing</li>
            <li>🧀 Dairy Products – Coming Soon</li>
          </ul>

          <img
            src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/191027931/original/924f102a9334b3b5161fea2ce1c15dddabacb5e0/provide-veterinary-services-poultry-and-dairy-farming-ideas.jpg"
            alt="Dairy and Poultry Products"
            className="rounded-xl shadow-md w-full h-64 object-cover"
            loading="lazy"
          />
        </div>
      </motion.section>

      {/* 🌾 OUR FARM */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold text-[#005a31] mb-6">
          Our Farm in Cumilla
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <p className="text-gray-700 text-lg leading-relaxed">
            Eammu Dairy & Poultry is based in rural Cumilla where clean air, green fields,
            and ethical farming come together. We follow traditional Bangladeshi farming
            combined with modern hygiene standards — no hormones, no shortcuts.
          </p>

          <img
            src="https://content.jdmagicbox.com/comp/def_content/dairy-farms/f0ea72cad1-dairy-farms-5-tv2jg.jpg"
            alt="Cumilla Dairy Farm"
            className="rounded-xl shadow-md w-full h-64 object-cover"
            loading="lazy"
          />
        </div>
      </motion.section>

      {/* 🚀 UPCOMING */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold text-[#005a31] mb-6">
          What’s Coming Next
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <ul className="space-y-3 text-gray-700 text-lg">
            <li>🧈 Butter & Ghee Production</li>
            <li>🛵 Home Delivery Service</li>
            <li>📱 Monthly Dairy Subscription</li>
          </ul>

          <img
            src="https://t4.ftcdn.net/jpg/05/48/62/95/360_F_548629586_cDOlrTXotOkYIENXcXBQ1CaGg5W4yK00.jpg"
            alt="Future Dairy Services"
            className="rounded-xl shadow-md w-full h-64 object-cover"
            loading="lazy"
          />
        </div>
      </motion.section>

      {/* 📞 CTA */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center bg-green-50 p-8 rounded-xl"
      >
        <p className="text-xl font-semibold text-gray-800 mb-6">
          Farm-fresh food. Zero compromise. Pure quality.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://wa.me/8801631312524"
            className="bg-[#005a31] text-white px-8 py-3 rounded-full hover:bg-[#003e24] transition"
          >
            📞 Contact on WhatsApp
          </a>

          <Link
            to="/"
            className="border border-[#005a31] text-[#005a31] px-8 py-3 rounded-full hover:bg-green-100 transition"
          >
            ⬅ Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default EammuDairy;
