import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const EammuDairy = () => {
  return (
    <div className="px-4 container mx-auto py-10">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Eammu Dairy & Poultry | Fresh Milk, Organic Eggs & Local Produce</title>
        <meta
          name="description"
          content="Explore Eammu Dairy & Poultry — providing fresh milk, eggs, poultry, and natural produce from our farm to your table. 100% organic and local."
        />
        <meta
          name="keywords"
          content="Eammu Dairy, Poultry, Organic Milk, Fresh Eggs, Cumilla Farm, Local Chicken, Cow Milk Bangladesh, Free Range"
        />
        <meta property="og:title" content="Eammu Dairy & Poultry | Farm Fresh in Bangladesh" />
        <meta
          property="og:description"
          content="Buy organic milk, farm eggs, local poultry, and more from Eammu Dairy — your trusted local farm."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.eammu.com/dairy" />
        <meta property="og:image" content="https://yourdomain.com/images/eammu-dairy-preview.jpg" />
      </Helmet>

      {/* Page Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#005a31] mb-4">Eammu Dairy & Poultry</h1>
        <p className="text-gray-600 text-lg">
          Bringing fresh, organic, and locally sourced dairy and poultry products from our Cumilla farm to your table.
        </p>
        <img
          src="https://static.vecteezy.com/system/resources/previews/047/547/980/non_2x/dairy-products-horizontal-banner-with-nature-landscape-summer-rural-landscape-with-set-of-milk-products-from-farm-and-herd-cows-design-elements-for-infographics-websites-and-print-media-vector.jpg"
          alt="Eammu Dairy Farm"
          className="mt-6 rounded-lg shadow-md w-full h-72 object-cover"
        />
      </div>

      {/* What We Offer */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#005a31] mb-4">What We Offer</h2>
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <ul className="list-disc pl-6 text-gray-700 space-y-2 text-lg">
            <li>🐄 Fresh Cow Milk — 100% pure & organic</li>
            <li>🥚 Free-range Chicken Eggs</li>
            <li>🐓 Local Poultry Meat (Deshi & Broiler)</li>
            <li>🌾 Natural Cow Feed & Local Grass</li>
            <li>🧀 Dairy-based Products (Coming Soon)</li>
          </ul>
          <img
            src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/191027931/original/924f102a9334b3b5161fea2ce1c15dddabacb5e0/provide-veterinary-services-poultry-and-dairy-farming-ideas.jpg"
            alt="Dairy and Poultry Offerings"
            className="rounded-lg shadow-md w-full h-60 object-cover"
          />
        </div>
      </section>

      {/* Our Farm */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#005a31] mb-4">Our Farm</h2>
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <p className="text-gray-700 text-lg">
            Located in the green heart of Cumilla, our farm is built on traditional Bangladeshi farming with modern hygiene standards.
            We prioritize animal welfare, sustainability, and zero-chemical production to ensure clean, nutritious food for our community.
          </p>
          <img
            src="https://content.jdmagicbox.com/comp/def_content/dairy-farms/f0ea72cad1-dairy-farms-5-tv2jg.jpg"
            alt="Farm in Cumilla"
            className="rounded-lg shadow-md w-full h-60 object-cover"
          />
        </div>
      </section>

      {/* Upcoming Services */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#005a31] mb-4">Upcoming Services</h2>
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <ul className="list-disc pl-6 text-gray-700 space-y-2 text-lg">
            <li>🧈 Butter & Ghee Production</li>
            <li>🛒 Online Order & Delivery Across Bangladesh</li>
            <li>📱 Mobile App for Dairy Subscription</li>
          </ul>
          <img
            src="https://t4.ftcdn.net/jpg/05/48/62/95/360_F_548629586_cDOlrTXotOkYIENXcXBQ1CaGg5W4yK00.jpg"
            alt="Upcoming Dairy Services"
            className="rounded-lg shadow-md w-full h-60 object-cover"
          />
        </div>
      </section>

      {/* CTA */}
      <div className="text-center mt-10">
        <p className="text-xl font-semibold text-gray-800 mb-4">
          Stay tuned — Eammu Dairy & Poultry is growing fast to serve you better!
        </p>
        <button className="bg-[#005a31] text-white px-6 py-2 rounded-full hover:bg-[#003e24] transition">
          Get Notified on Launch
        </button>

        {/* Back to Home Button */}
        <div className="mt-6">
          <Link
            to="/"
            className="inline-block bg-white border border-green-800 text-green-800 px-6 py-3 rounded-full hover:bg-green-100 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EammuDairy;
