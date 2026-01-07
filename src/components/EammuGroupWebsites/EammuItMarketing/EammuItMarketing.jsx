import React from "react";
import { Helmet } from "react-helmet-async";
import { 
  Code2, 
  Smartphone, 
  Search, 
  Share2, 
  Palette, 
  ShoppingCart, 
  Lock, 
  Cpu, 
  BarChart3, 
  MessageSquare, 
  ChevronRight, 
  Rocket 
} from "lucide-react";

const EammuItMarketing = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* SEO Helmet (Unchanged as requested) */}
      <Helmet>
        <title>Digital Marketing Solutions Bangladesh | Marketing and Branding Dhaka by Eammu </title>
        <meta
          name="description"
          content="Eammu IT & Marketing offers web development, SEO, branding, social media management World Wide, and full digital growth solutions tailored for businesses in Bangladesh and globally."
        />
        <meta
          name="keywords"
          content="Eammu IT, Digital Marketing Europe,Digital Marketing Dubai, Web Development Bangladesh, SEO Bangladesh, Branding Services Dubai, Social Media Marketing, Marketing Agency Bangladesh"
        />
        <meta property="og:title" content="Eammu IT & Marketing Solutions" />
        <meta
          property="og:description"
          content="Grow your business with Eammu IT & Marketing — your one-stop solution for websites, marketing, branding, and more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.eammu.com/eammumarketing" />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1470&q=80"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 bg-slate-50 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 inline-block">
              Technology & Innovation
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-[#005a31] mb-6 tracking-tight leading-tight">
              Eammu <span className="text-orange-500">IT & Marketing</span> Solutions
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Empowering businesses through cutting-edge technology, creative design, 
              and data-driven digital strategies. We build brands that dominate the digital landscape.
            </p>
            
            <div className="mt-12 relative group max-w-5xl mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#005a31] to-orange-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <img
                className="relative rounded-3xl shadow-2xl w-full h-[450px] object-cover"
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1470&q=80"
                alt="Digital Solutions"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-[#005a31] uppercase tracking-tighter mb-4">Our Core Services</h2>
          <div className="w-20 h-1.5 bg-orange-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceBox icon={<Code2 />} title="Web Development" desc="Responsive, fast, and SEO-friendly websites tailored to your business." />
          <ServiceBox icon={<Smartphone />} title="App Development" desc="High-performance Android & iOS apps with seamless UX." />
          <ServiceBox icon={<Search />} title="SEO Optimization" desc="Rank higher on Google and attract organic traffic globally." />
          <ServiceBox icon={<Share2 />} title="Social Media" desc="Engaging content and management across all digital platforms." />
          <ServiceBox icon={<Palette />} title="Graphic Design" desc="Creative branding, logos, and visual identity that stand out." />
          <ServiceBox icon={<ShoppingCart />} title="E-commerce" desc="Build your online store with secure payment integrations." />
          <ServiceBox icon={<Lock />} title="Cybersecurity" desc="Protecting your business assets with advanced IT consulting." />
          <ServiceBox icon={<BarChart3 />} title="Digital Strategy" desc="Data-backed growth plans to scale your business ROI." />
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="group overflow-hidden rounded-[2rem] shadow-xl relative">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1470&q=80"
                alt="Website Development"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#005a31]/80 to-transparent flex items-end p-8">
                <h3 className="text-white text-2xl font-bold">Innovation in Web</h3>
              </div>
            </div>
            <div className="group overflow-hidden rounded-[2rem] shadow-xl relative">
              <img
                src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1470&q=80"
                alt="Marketing Strategy"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-600/80 to-transparent flex items-end p-8">
                <h3 className="text-white text-2xl font-bold">Strategic Marketing</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision - Coming Soon */}
      <section className="py-24 container mx-auto px-4">
        <div className="bg-[#005a31] rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden">
          <div className="absolute -bottom-10 -right-10 opacity-10">
            <Cpu size={300} />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-black mb-10 flex items-center gap-3">
              <Rocket className="text-orange-400" /> Coming Soon
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FutureCard icon={<Cpu size={20} />} title="AI Marketing" desc="AI-driven targeted campaigns." />
              <FutureBox icon={<BarChart3 size={20} />} title="Analytics Dashboard" desc="Real-time business insights." />
              <FutureBox icon={<MessageSquare size={20} />} title="Smart Chatbots" desc="24/7 automated customer care." />
              <FutureBox icon={<ChevronRight size={20} />} title="ERP Tools" desc="Custom SME business solutions." />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 leading-tight">
              Want to grow your online presence? <br /> 
              <span className="text-orange-500">Let's build your brand together!</span>
            </p>
          
            <a href="https://wa.me/8801631312524" className="inline-flex items-center gap-3 bg-[#005a31] text-white px-12 py-5 rounded-2xl font-black shadow-2xl hover:bg-orange-500 transition-all">
                          Request a Free Quote
                       </a>
          </div>
        </div>
      </section>
    </div>
  );
};

// Sub-components
const ServiceBox = ({ icon, title, desc }) => (
  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300 group">
    <div className="bg-slate-50 w-14 h-14 rounded-2xl flex items-center justify-center text-[#005a31] mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
      {React.cloneElement(icon, { size: 28 })}
    </div>
    <h3 className="text-xl font-bold text-[#005a31] mb-3">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

const FutureBox = ({ icon, title, desc }) => (
  <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl">
    <div className="text-orange-400 mb-4">{icon}</div>
    <h4 className="font-bold mb-2">{title}</h4>
    <p className="text-xs text-green-100/70 leading-relaxed">{desc}</p>
  </div>
);

const FutureCard = ({ icon, title, desc }) => (
  <div className="bg-orange-500 p-6 rounded-2xl shadow-lg">
    <div className="text-white mb-4">{icon}</div>
    <h4 className="font-bold text-white mb-2">{title}</h4>
    <p className="text-xs text-orange-50/80 leading-relaxed">{desc}</p>
  </div>
);

export default EammuItMarketing;