import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Truck, ShoppingBasket, Droplets, Leaf, PhoneCall } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const EammuDairy = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* ✅ SEO META (Unchanged as requested) */}
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
        <link rel="canonical" href="https://eammu.com/eammudairy" />
        <meta property="og:title" content="Eammu Dairy & Poultry | Farm Fresh from Cumilla" />
        <meta
          property="og:description"
          content="Pure cow milk, fresh eggs & poultry directly from Eammu Dairy Farm in Cumilla."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://static.vecteezy.com/system/resources/previews/047/547/980/non_2x/dairy-products-horizontal-banner-with-nature-landscape-summer-rural-landscape-with-set-of-milk-products-from-farm-and-herd-cows-design-elements-for-infographics-websites-and-print-media-vector.jpg" />
      </Helmet>

      {/* 🌿 HERO SECTION */}
      <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="bg-green-100 text-[#005a31] px-5 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-6 inline-block">
              100% Organic & Farm Fresh
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-[#005a31] mb-6 tracking-tight">
              Eammu <span className="text-orange-500">Dairy & Poultry</span> 🌿
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
              From the lush green fields of our Cumilla farm to your dining table — we deliver 
              pure, organic, and chemical-free nutrition that your family deserves.
            </p>

            <div className="relative mt-12 group">
              <div className="absolute inset-0 bg-green-900/10 rounded-[2.5rem] transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
              <img
                src="https://static.vecteezy.com/system/resources/previews/047/547/980/non_2x/dairy-products-horizontal-banner-with-nature-landscape-summer-rural-landscape-with-set-of-milk-products-from-farm-and-herd-cows-design-elements-for-infographics-websites-and-print-media-vector.jpg"
                alt="Eammu Dairy Farm Cumilla"
                className="relative z-10 w-full h-[450px] object-cover rounded-[2.5rem] shadow-2xl"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🥛 WHAT WE OFFER - FEATURE GRID */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-[#005a31] uppercase mb-4">What We Offer</h2>
            <div className="w-20 h-1.5 bg-orange-500 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <OfferCard 
                icon={<Droplets className="text-blue-500" />} 
                title="Organic Cow Milk" 
                desc="Daily collected, non-pasteurized pure milk with zero additives or preservatives." 
              />
              <OfferCard 
                icon={<ShoppingBasket className="text-orange-500" />} 
                title="Free-range Eggs" 
                desc="Rich in protein and Omega-3, collected from happy, open-grazing chickens." 
              />
              <OfferCard 
                icon={<Leaf className="text-green-500" />} 
                title="Deshi Poultry Meat" 
                desc="Antibiotic-free local chicken meat, processed with strict hygiene standards." 
              />
              <OfferCard 
                icon={<CheckCircle className="text-purple-500" />} 
                title="Natural Feed Only" 
                desc="Our livestock is raised on grass and organic grains, ensuring natural growth." 
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/191027931/original/924f102a9334b3b5161fea2ce1c15dddabacb5e0/provide-veterinary-services-poultry-and-dairy-farming-ideas.jpg"
                alt="Dairy and Poultry Products"
                className="rounded-[3rem] shadow-xl w-full h-[500px] object-cover border-8 border-white"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-8 rounded-3xl shadow-lg hidden md:block">
                 <p className="text-3xl font-bold italic">100%</p>
                 <p className="text-sm font-medium uppercase tracking-widest">Chemical Free</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🌾 OUR FARM STORY */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <img
                src="https://content.jdmagicbox.com/comp/def_content/dairy-farms/f0ea72cad1-dairy-farms-5-tv2jg.jpg"
                alt="Cumilla Dairy Farm"
                className="rounded-[3rem] shadow-2xl w-full h-[400px] object-cover"
                loading="lazy"
              />
            </motion.div>

            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-black text-[#005a31] uppercase">
                Our Farm in Cumilla
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Eammu Dairy & Poultry is deeply rooted in the rural landscapes of **Cumilla**, where clean air, vast green fields, 
                and ethical farming practices come together. We reject factory farming and hormones. 
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-2xl border-l-4 border-[#005a31]">
                  <p className="text-[#005a31] font-bold text-xl">Modern Hygiene</p>
                  <p className="text-sm text-gray-600">Global safety standards</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-2xl border-l-4 border-orange-500">
                  <p className="text-orange-600 font-bold text-xl">Zero Hormones</p>
                  <p className="text-sm text-gray-600">No shortcuts, just nature</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 UPCOMING SERVICES */}
      <section className="py-20 bg-green-900 text-white rounded-t-[4rem]">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-4 text-orange-400">What’s Coming Next</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">We are expanding our horizons to bring more organic goodness to your doorstep.</p>
        </div>

        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid gap-6">
            <UpcomingItem title="Butter & Ghee Production" desc="Traditional wood-churned pure ghee and cultured butter." />
            <UpcomingItem title="Home Delivery Service" desc="Fresh delivery in Dhaka and Cumilla within hours of collection." />
            <UpcomingItem title="Monthly Subscription" desc="Never run out of milk; automated daily/weekly supply plans." />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://t4.ftcdn.net/jpg/05/48/62/95/360_F_548629586_cDOlrTXotOkYIENXcXBQ1CaGg5W4yK00.jpg"
              alt="Future Dairy Services"
              className="rounded-[3rem] shadow-2xl w-full h-[350px] object-cover border-4 border-white/20"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* 📞 CTA SECTION */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center bg-slate-50 border border-slate-100 p-12 rounded-[4rem] shadow-inner"
          >
            <h2 className="text-3xl font-black text-[#005a31] mb-6 uppercase">Ready for Farm Freshness?</h2>
            <p className="text-xl font-medium text-gray-600 mb-10">
              Farm-fresh food. Zero compromise. Pure quality.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="https://wa.me/8801631312524"
                className="flex items-center justify-center gap-3 bg-[#005a31] text-white px-10 py-4 rounded-full hover:bg-orange-500 hover:scale-105 transition-all duration-300 shadow-xl font-bold"
              >
                <PhoneCall size={20} />
                WhatsApp Order
              </a>

              <Link
                to="/"
                className="flex items-center justify-center border-2 border-[#005a31] text-[#005a31] px-10 py-4 rounded-full hover:bg-green-100 transition-all font-bold"
              >
                ⬅ Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Helper Components
const OfferCard = ({ icon, title, desc }) => (
  <div className="flex gap-5 p-6 bg-white rounded-3xl shadow-sm border border-gray-50 hover:shadow-md transition-all">
    <div className="bg-slate-50 p-4 rounded-2xl h-fit">{icon}</div>
    <div>
      <h3 className="text-xl font-bold text-[#005a31] mb-1">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

const UpcomingItem = ({ title, desc }) => (
  <div className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/10">
    <div className="w-3 h-3 bg-orange-500 rounded-full flex-shrink-0"></div>
    <div>
      <h4 className="text-lg font-bold text-orange-400">{title}</h4>
      <p className="text-gray-300 text-sm">{desc}</p>
    </div>
  </div>
);

export default EammuDairy;