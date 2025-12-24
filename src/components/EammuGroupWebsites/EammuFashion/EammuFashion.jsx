import { Helmet } from 'react-helmet-async';

const EammuFashion = () => {
  return (
    <div className="px-4 container mx-auto py-12">
      {/* SEO Meta Tags */}
    <Helmet>
  {/* Title: Targets Brand + Key Locations */}
  <title>Eammu Fashion | Best Clothing Brand in Cumilla, Dhaka & Bangladesh</title>

  {/* Description: Highlights physical presence and premium quality */}
  <meta 
    name="description" 
    content="Experience premium fashion at Eammu Fashion. The top-rated clothing store in Cumilla and Dhaka offering exclusive Panjabi, T-shirts, and Western wear. Visit us in Cumilla or shop online!" 
  />

  {/* Keywords: Strategic mix of local and national search terms */}
  <meta 
    name="keywords" 
    content="Eammu Fashion Cumilla, best clothing store in Cumilla, fashion brand in Dhaka, top brand shop Cumilla, premium Panjabi store Bangladesh, T-shirt shop Dhaka, Cumilla Kandirpar fashion, best Panjabi brand in Bangladesh, Eammu clothing BD, stylish menswear Cumilla, women's fashion store Cumilla, Eid collection Cumilla 2026, trendy fashion house Dhaka" 
  />

  {/* Local SEO / Geo Tags (Helps Google pinpoint your business location) */}
  <meta name="geo.region" content="BD-13" /> {/* Code for Dhaka/Cumilla region */}
  <meta name="geo.placename" content="Cumilla, Dhaka" />
  <meta name="geo.position" content="23.4607;91.1809" /> {/* Cumilla Coordinates */}
  <meta name="ICBM" content="23.4607, 91.1809" />
</Helmet>

      {/* Page Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#005a31] mb-4">Welcome to Eammu Fashion</h1>
        <p className="text-gray-600 text-lg">
          Discover the perfect blend of tradition and modern trends with Eammu Fashion — your upcoming go-to destination for quality clothing in Bangladesh and beyond.
        </p>
      </div>

      {/* Visual Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2024/SEPTEMBER/9/AqOsZhUa_04de791acf874a8fb4e99f1c018d5835.jpg" alt="Panjabi Style" className="rounded-lg shadow" />
        <img src="https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/29407926/2024/5/7/fe50718e-3bfb-4068-9f29-457b2441f4791715093101854Sarees1.jpg" alt="Women Style" className="rounded-lg shadow" />
        <img src="https://assets.vogue.in/photos/5f214a9d9ffca08d18483816/master/w_1600%2Cc_limit/Neha%2520Mehra%25201.jpg" alt="Kids Wear" className="rounded-lg shadow" />
      </div>

      {/* Who We Are */}
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

      {/* Coming Soon Collection */}
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

      {/* Store Locations */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#005a31] mb-2">Where You'll Find Us</h2>
        <p className="text-gray-700">Eammu Fashion will be launching both online and offline stores:</p>
        <ul className="list-disc pl-6 text-gray-700 mt-2">
          <li>🛍️ Flagship Store in Cumilla Cantonment (Coming 2026)</li>
          <li>🌐 E-commerce Website with Nationwide Delivery</li>
          <li>📱 Mobile App for Android and iOS</li>
        </ul>
      </section>

      {/* Social Media */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#005a31] mb-2">Follow Us</h2>
        <p className="text-gray-700">Be the first to get updates on launches, offers, and new arrivals:</p>
        <ul className="list-disc pl-6 text-blue-600 mt-2">
          <li><a href="https://www.facebook.com/eammufashion/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer">TikTok</a></li>
        </ul>
      </section>

     {/* CTA */}
      <section className="text-center mt-10">
        <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
          Stay tuned — the Eammu Fashion experience is almost here!
        </p>
        <button className="bg-[#005a31] text-white px-8 py-3 rounded-full text-lg hover:bg-[#003e24] transition">
          📢 Notify Me on Launch
        </button>
      </section>

      {/* Suggested Next: Photo Album / Video Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-[#005a31] mb-4 text-center">📸 Fashion Gallery</h2>
        <p className="text-gray-700 text-center mb-6">
          Showcase latest collections, events, and customer styles here. You can use a **carousel or masonry gallery**.
        </p>
        {/* Future: Embed YouTube video testimonial section below this */}
      </section>
    </div>
  );
};

export default EammuFashion;
