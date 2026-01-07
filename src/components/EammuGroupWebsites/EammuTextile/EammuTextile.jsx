import React from "react";
import { Helmet } from "react-helmet-async";
import { 
  CheckCircle, 
  Globe, 
  Factory, 
  Truck, 
  ShieldCheck, 
  Settings, 
  Recycle, 
  Layers, 
  Award, 
  Users 
} from "lucide-react";

const EammuTextile = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Helmet SEO Tags */}
      <Helmet>
        <title>Bangladesh Textile & Garments Manufacturer | Eammu Textile – Fabric, Garments & Bulk Supply Bangladesh</title>
        <meta
          name="description"
          content="Eammu Textile: Leading Bangladesh Textile Company specializing in high-quality fabrics, RMG (Ready Made Garments), and sustainable export solutions. Wholesale fabric and garment supplier for UK, USA, UAE, and EU markets."
        />
        <meta
          name="keywords"
          content="Eammu Textile Bangladesh, Bangladesh Textile Company, Fabric Exporter Bangladesh, Garment Manufacturer Bangladesh, RMG Bangladesh, Woven, Knitwear Bangladesh, Ready Made Garments Bangladesh, Sustainable Fashion Bangladesh, Bulk Clothing Supplier"
        />
        <meta property="og:title" content="Eammu Textile | Trusted Fabric & Garments Exporter" />
        <meta
          property="og:description"
          content="Based in Bangladesh, Eammu Textile delivers excellence in textile manufacturing, garment exports, and sustainable production."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.eammu.com/eammutextile" />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1581579185169-87926e6cdd5b?auto=format&fit=crop&w=1470&q=80"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-16 text-center">
          <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">
            Export Quality Excellence
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-[#005a31] mb-6 tracking-tight">
            Eammu <span className="text-orange-500">Textile</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            A proud concern of <strong className="text-[#005a31]">Eammu Group</strong>, specializing in high-end fabric production, sustainable garment manufacturing, and global export solutions from the heart of Bangladesh.
          </p>
          <div className="mt-10 max-w-4xl mx-auto">
            <img
              className="rounded-[2rem] shadow-2xl w-full object-cover h-[400px]"
              src="https://curiosityuntamed.com/wp-content/uploads/2021/01/Learn-About.jpg"
              alt="Eammu Textile Industrial Production"
            />
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl font-black text-[#005a31] uppercase tracking-tighter mb-4">Our Core Services</h2>
          <div className="w-20 h-1.5 bg-orange-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<Layers className="text-orange-500" />}
            title="Fabric Manufacturing"
            desc="Specialized in Cotton, Denim, Viscose, Knits & Wovens using advanced weaving technologies."
          />
          <ServiceCard 
            icon={<Settings className="text-orange-500" />}
            title="Garment Production"
            desc="Expert manufacturing of T-Shirts, Shirts, Trousers, Panjabis, and Activewear with precision."
          />
          <ServiceCard 
            icon={<Truck className="text-orange-500" />}
            title="Textile Export"
            desc="Certified quality control and full global logistics support for hassle-free international shipping."
          />
          <ServiceCard 
            icon={<Award className="text-orange-500" />}
            title="Design & Customization"
            desc="In-house studio for embroidery, organic dyeing, and high-definition digital printing."
          />
          <ServiceCard 
            icon={<Factory className="text-orange-500" />}
            title="Bulk & OEM Orders"
            desc="Scalable production lines for global brands, retailers, and private label businesses."
          />
          <ServiceCard 
            icon={<Recycle className="text-orange-500" />}
            title="Sustainable Solutions"
            desc="Eco-friendly production methods reducing water waste and carbon footprint."
          />
        </div>
      </section>

      {/* Why Choose Us & Quality */}
      <section className="bg-[#005a31] text-white py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-orange-400">Why Choose Eammu Textile?</h2>
            <div className="space-y-6">
              <WhyItem text="Ethical & Sustainable Manufacturing Processes" />
              <WhyItem text="In-house State-of-the-art Production Facility in Bangladesh" />
              <WhyItem text="Strict Quality Control (QC) & On-time Global Delivery" />
              <WhyItem text="ISO, OEKO-TEX & GOTS Compliant Standards" />
              <WhyItem text="Highly Competitive Wholesale & Bulk Pricing" />
            </div>
          </div>
          <div className="bg-white/10 p-10 rounded-[3rem] backdrop-blur-sm border border-white/10">
            <ShieldCheck size={60} className="text-orange-400 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Our Quality Commitment</h3>
            <p className="text-gray-200 leading-relaxed mb-6">
              Every yard of fabric and every stitch of garment undergoes a rigorous 4-point inspection system. We ensure that our clients receive unmatched quality that stands out in the international fashion market.
            </p>
            <div className="flex gap-4">
               <div className="px-4 py-2 bg-white/20 rounded-xl text-xs font-bold uppercase tracking-wider">QC Certified</div>
               <div className="px-4 py-2 bg-white/20 rounded-xl text-xs font-bold uppercase tracking-wider">Eco Friendly</div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <Users size={48} className="text-orange-500 mx-auto mb-6" />
          <h2 className="text-3xl font-black text-[#005a31] mb-6">OUR VISION</h2>
          <p className="text-xl text-gray-700 leading-relaxed italic font-light">
            "To become a globally recognized textile powerhouse from Bangladesh, fostering sustainable fashion and empowering local craftsmanship while ensuring clients worldwide receive unmatched excellence in service."
          </p>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-4">
           <div className="flex items-center gap-4 mb-12">
              <Globe className="text-[#005a31]" size={32} />
              <h2 className="text-3xl font-black text-[#005a31]">GLOBAL REACH</h2>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <LocationCard flag="🇬🇧" name="UK" />
              <LocationCard flag="🇺🇸" name="USA" />
              <LocationCard flag="🇦🇪" name="UAE & Middle East" />
              <LocationCard flag="🇪🇺" name="European Union" />
              <LocationCard flag="🇨🇦" name="Canada" />
              <LocationCard flag="🇯🇵" name="Japan" />
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="bg-[#005a31] rounded-[4rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full -mr-20 -mt-20"></div>
          <h2 className="text-3xl md:text-4xl font-black mb-6">Elevate Your Brand with Premium Textile Solutions</h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Interested in partnership, bulk orders, or specific fabric inquiries? Our textile experts are ready to assist you.
          </p>
         
              <a href="https://wa.me/8801631312524" className="inline-flex items-center gap-3 bg-white text-black hover:text-white px-12 py-5 rounded-2xl font-black shadow-2xl hover:bg-orange-500 transition-all">
                          Contact Our Textile Team
                       </a>
        </div>
      </section>
    </div>
  );
};

// Sub-components
const ServiceCard = ({ icon, title, desc }) => (
  <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300">
    <div className="mb-6">{icon}</div>
    <h3 className="text-xl font-bold text-[#005a31] mb-3">{title}</h3>
    <p className="text-gray-500 leading-relaxed text-sm">{desc}</p>
  </div>
);

const WhyItem = ({ text }) => (
  <div className="flex items-center gap-4">
    <CheckCircle className="text-orange-400 flex-shrink-0" size={24} />
    <span className="text-lg font-medium text-white/90">{text}</span>
  </div>
);

const LocationCard = ({ flag, name }) => (
  <div className="bg-white p-6 rounded-3xl text-center shadow-sm hover:scale-105 transition-transform">
    <span className="text-3xl mb-2 block">{flag}</span>
    <span className="text-[#005a31] font-bold text-sm tracking-tight">{name}</span>
  </div>
);

export default EammuTextile;