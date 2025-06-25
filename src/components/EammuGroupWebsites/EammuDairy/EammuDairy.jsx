import { Helmet } from 'react-helmet-async';

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
      </div>

      {/* Sections to Expand Later */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#005a31] mb-2">What We Offer</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>🐄 Fresh Cow Milk — 100% pure & organic</li>
          <li>🥚 Free-range Chicken Eggs</li>
          <li>🐓 Local Poultry Meat (Deshi & Broiler)</li>
          <li>🌾 Natural Cow Feed & Local Grass</li>
          <li>🧀 Dairy-based Products (Coming Soon)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#005a31] mb-2">Our Farm</h2>
        <p className="text-gray-700">
          Located in the green heart of Cumilla, our farm is built on traditional Bangladeshi farming with modern hygiene standards. We prioritize animal welfare, sustainability, and zero-chemical production.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#005a31] mb-2">Upcoming Services</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>🧈 Butter & Ghee Production</li>
          <li>🛒 Online Order & Delivery Across Bangladesh</li>
          <li>📱 Mobile App for Dairy Subscription</li>
        </ul>
      </section>

      {/* CTA */}
      <div className="text-center mt-10">
        <p className="text-xl font-semibold text-gray-800 mb-4">
          Stay tuned — Eammu Dairy & Poultry is growing fast to serve you better!
        </p>
        <button className="bg-[#005a31] text-white px-6 py-2 rounded-full hover:bg-[#003e24] transition">
          Get Notified on Launch
        </button>
      </div>
    </div>
  );
};

export default EammuDairy;
