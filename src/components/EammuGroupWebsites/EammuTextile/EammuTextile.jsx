import { Helmet } from "react-helmet-async";

const EammuTextile = () => {
  return (
    <div className="px-4 container mx-auto py-12">
      {/* Helmet SEO Tags */}
      <Helmet>
        <title>Eammu Textile | Premium Fabric & Garment Manufacturer in Bangladesh</title>
        <meta
          name="description"
          content="Eammu Textile is your trusted partner for high-quality fabrics, readymade garments, and export solutions from Bangladesh. Discover sustainable, customized textile production."
        />
        <meta
          name="keywords"
          content="Eammu Textile, Bangladesh Textile Company, Fabric Exporter, Garment Manufacturer, RMG Bangladesh, Woven, Knitwear, Ready Made Garments"
        />
        <meta property="og:title" content="Eammu Textile | Trusted Fabric & Garments Exporter" />
        <meta
          property="og:description"
          content="Based in Bangladesh, Eammu Textile delivers excellence in textile manufacturing, garment exports, and sustainable production."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.eammu.com/textile" />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1581579185169-87926e6cdd5b?auto=format&fit=crop&w=1470&q=80"
        />
      </Helmet>

      {/* Page Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#005a31] mb-4">Eammu Textile</h1>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Eammu Textile, a proud concern of Eammu Group, specializes in high-quality fabric production,
          sustainable garment manufacturing, and export services to global markets.
        </p>
        <img
          className="rounded-lg mt-6 mx-auto w-full max-w-3xl"
          src="https://curiosityuntamed.com/wp-content/uploads/2021/01/Learn-About.jpg"
          alt="Eammu Textile Production"
        />
      </div>

      {/* Services Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#005a31] mb-4">Our Core Services</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>🧵 <strong>Fabric Manufacturing</strong> – Cotton, Denim, Viscose, Knits & Wovens</li>
          <li>👕 <strong>Garment Production</strong> – T-Shirts, Shirts, Trousers, Panjabis, Activewear</li>
          <li>🌍 <strong>Textile Export</strong> – Certified quality, global logistics support</li>
          <li>🎨 <strong>Design & Customization</strong> – Embroidery, dyeing, digital print</li>
          <li>📦 <strong>Bulk & OEM Orders</strong> – For brands, retailers, and businesses</li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#005a31] mb-4">Why Choose Eammu Textile?</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>✅ Ethical & Sustainable Manufacturing</li>
          <li>✅ In-house Production Facility in Bangladesh</li>
          <li>✅ Strict Quality Control & On-time Delivery</li>
          <li>✅ ISO & OEKO-TEX Compliant Standards</li>
          <li>✅ Competitive Wholesale Pricing</li>
        </ul>
      </section>

      {/* Our Vision */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#005a31] mb-4">Our Vision</h2>
        <p className="text-gray-700 max-w-3xl">
          To become a globally recognized textile exporter from Bangladesh, supporting sustainable fashion and
          empowering local craftsmanship while ensuring clients worldwide receive unmatched quality and service.
        </p>
      </section>

      {/* Where We Serve */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#005a31] mb-4">Global Reach</h2>
        <p className="text-gray-700">
          We serve clients across:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1 mt-2">
          <li>🇬🇧 United Kingdom</li>
          <li>🇺🇸 USA</li>
          <li>🇦🇪 UAE & Middle East</li>
          <li>🇪🇺 European Union</li>
          <li>🇨🇦 Canada</li>
          <li>🇯🇵 Japan</li>
        </ul>
      </section>

      {/* CTA */}
      <div className="text-center mt-12">
        <p className="text-xl font-semibold text-gray-800 mb-4">
          Interested in partnership, bulk orders, or fabric inquiries?
        </p>
        <button className="bg-[#005a31] text-white px-6 py-2 rounded-full hover:bg-[#003e24] transition">
          Contact Our Textile Team
        </button>
      </div>
    </div>
  );
};

export default EammuTextile;
