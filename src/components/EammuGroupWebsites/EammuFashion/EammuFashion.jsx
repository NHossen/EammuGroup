

const EammuFashion = () => {
  return (
    <div className="px-4 container mx-auto py-12">
      {/* Page Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#005a31] mb-4">
          Welcome to Eammu Fashion
        </h1>
        <p className="text-gray-600 text-lg">
          Discover the perfect blend of tradition and modern trends with Eammu Fashion — your upcoming go-to destination for quality clothing in Bangladesh and beyond.
        </p>
      </div>

      {/* Introduction */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#005a31] mb-2">Who We Are</h2>
        <p className="text-gray-700">
          Eammu Fashion is the latest vertical under Eammu Group, dedicated to delivering premium fashion for men, women, and youth. From classic Panjabi styles to contemporary Western wear, our mission is to promote elegance, comfort, and style — affordably.
        </p>
      </section>

      {/* Our Vision */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#005a31] mb-2">Our Vision</h2>
        <p className="text-gray-700">
          We aim to become one of Bangladesh’s most loved fashion brands — known for quality, creativity, and cultural relevance. We blend local craftsmanship with international style, keeping you fashionable and confident.
        </p>
      </section>

      {/* What to Expect */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#005a31] mb-2">Coming Soon at Eammu Fashion</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Men's Wear: Panjabi, Kabli, Formal Shirts, T-Shirts</li>
          <li>Women's Wear: Casual, Festive, Hijab, Kurtis</li>
          <li>Kids Fashion: Traditional & Western Blends</li>
          <li>Premium Fabric Collection with Custom Tailoring</li>
          <li>Exclusive Eid, Pohela Boishakh & Winter Collections</li>
        </ul>
      </section>

      {/* Business Expansion */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#005a31] mb-2">Where You'll Find Us</h2>
        <p className="text-gray-700">
          Eammu Fashion will be launching both online and offline stores:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mt-2">
          <li>🛍️ Flagship Store in Cumilla Cantonment (Coming 2025)</li>
          <li>🌐 E-commerce Website with Nationwide Delivery</li>
          <li>📱 Mobile App for Android and iOS</li>
        </ul>
      </section>

      {/* Social Media */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#005a31] mb-2">Follow Us</h2>
        <p className="text-gray-700">
          Be the first to get updates on launches, offers, and new arrivals:
        </p>
        <ul className="list-disc pl-6 text-blue-600 mt-2">
          <li><a href="[Facebook Link]" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="[Instagram Link]" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="[TikTok Link]" target="_blank" rel="noopener noreferrer">TikTok</a></li>
        </ul>
      </section>

      {/* Call to Action */}
      <div className="text-center mt-10">
        <p className="text-xl font-semibold text-gray-800 mb-4">
          Stay tuned — the Eammu Fashion experience is almost here!
        </p>
        <button className="bg-[#005a31] text-white px-6 py-2 rounded-full hover:bg-[#003e24] transition">
          Notify Me on Launch
        </button>
      </div>
    </div>
  );
};

export default EammuFashion;
