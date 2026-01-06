import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Users, 
  ShieldCheck, 
  Target, 
  GraduationCap, 
  Briefcase, 
  MapPin, 
  Plane, 
  Headphones, 
  FileText 
} from 'lucide-react';

const About_Eammu_Immigration = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* SEO Helmet (Unchanged as requested) */}
      <Helmet>
        <title>Bangladesh Visa Application Centre |Global Visa, Student Visa and Tourist Visa | Travel Bangladesh- Eammu Holidays </title>
        <meta
          name="description"
          content="Learn about Eammu Holidays — your trusted partner for student visas, work permits, and relocation support across Canada, UK, UAE, Europe, and beyond."
        />
        <meta
          name="keywords"
          content="Eammu Holidays, visa consultant Bangladesh, study abroad, Canada Visa From Bangladesh, UAE visa, work visa, student visa agency, green card, migration help,Travel Agency In Bangladesh, Top Travel Agency Bangladesh"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-white border-b pt-16 pb-20">
        <div className="container mx-auto px-4 text-center space-y-8">
          <div className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-widest">
            Since 2022 • Trusted by Thousands
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-green-800 tracking-tight leading-tight">
            Empowering Your Global <span className="text-orange-500">Aspirations</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Founded in 2022, <strong>Eammu Holidays</strong> has emerged as one of Bangladesh’s fastest-growing global visa consultancies. 
            With a network of over 50 local & international offices, we transform the dream of studying, working, and living abroad into reality.
          </p>
          <div className="relative max-w-5xl mx-auto group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-orange-400 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <img
              src="https://res.klook.com/image/upload/fl_lossy.progressive,q_60/Mobile/City/afmqgg5h0jl9wnr1dfmf.jpg"
              alt="Eammu Immigration"
              className="relative rounded-[2rem] shadow-2xl w-full object-cover border-4 border-white"
            />
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ValueCard 
            icon={<Globe className="text-green-600" size={32} />}
            title="Global Reach"
            desc="Strategically located in UAE, Canada, UK, Australia & Bangladesh to provide seamless local support."
          />
          <ValueCard 
            icon={<Users className="text-blue-600" size={32} />}
            title="1M+ Global Clients"
            desc="Over a million satisfied applicants successfully served for diverse migration and travel goals."
          />
          <ValueCard 
            icon={<ShieldCheck className="text-orange-600" size={32} />}
            title="Legal Assurance"
            desc="Our services are fully backed by legal contracts, refund policies, and verified immigration experts."
          />
          <ValueCard 
            icon={<Target className="text-purple-600" size={32} />}
            title="Results-Focused"
            desc="We prioritize your success with milestone-based service fees and minimal upfront costs."
          />
        </div>
      </section>

      {/* What We Help You With */}
      <section className="py-24 bg-green-900 text-white rounded-[4rem] mx-4">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase leading-tight text-orange-400">What We Help <br /> You With</h2>
              <p className="text-green-100/80 text-lg">Comprehensive immigration solutions tailored for your unique profile.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceItem icon={<GraduationCap />} title="Student Visa" list="Canada, UK, Russia, Australia, UAE & Europe" />
            <ServiceItem icon={<Briefcase />} title="Work Permits" list="Skilled Worker Migration & Global Permits" />
            <ServiceItem icon={<ShieldCheck />} title="Business Migration" list="Investor Visas & Entrepreneur Migration" />
            <ServiceItem icon={<Users />} title="Family Visas" list="Spouse Sponsorship & Family Reunification" />
            <ServiceItem icon={<Plane />} title="Tourist Visas" list="Holiday Itineraries & Visit Visa Support" />
            <ServiceItem icon={<FileText />} title="Full Documentation" list="SOP, CV, Cover Letters & Embassy Guidelines" />
          </div>
        </div>
      </section>

      {/* Why Clients Trust Us */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-green-900 uppercase tracking-tighter mb-4">Why Clients Trust Eammu</h2>
          <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TrustCard 
            title="Comprehensive Travel & Study Planning" 
            desc="From initial university selection to flight booking and post-arrival accommodation, we are with you at every single step." 
          />
          <TrustCard 
            title="Dedicated Legal Advisors" 
            desc="We collaborate with licensed immigration consultants to ensure 100% compliant documentation according to embassy rules." 
          />
          <TrustCard 
            title="24/7 Personal Support" 
            desc="Real-time assistance via WhatsApp, phone, or in-person visits at our Bangladesh and UAE corporate offices." 
          />
          <TrustCard 
            title="Affordable & Transparent Fees" 
            desc="No hidden charges. We offer clear service packages and flexible installment plans for all types of applicants." 
          />
        </div>
      </section>

      {/* Contact & CTA Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="bg-white rounded-[3rem] shadow-2xl border border-green-50 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 md:p-16 space-y-8 bg-[#f4fdf7]">
              <h2 className="text-3xl md:text-4xl font-black text-green-900 leading-tight">
                Connect with Eammu <br /> Holidays Experts
              </h2>
              <p className="text-gray-600 text-lg">
                Your journey to a new life starts with a simple conversation. Book a free consultation and build your path abroad today.
              </p>
              
              <div className="space-y-4">
                <ContactInfo icon={<Headphones className="text-green-600" />} label="Phone/WhatsApp" val="+8801701699743, +971507078334" isLink tel />
                <ContactInfo icon={<FileText className="text-green-600" />} label="Primary Email" val="info@eammu.com" isLink mail />
                <ContactInfo icon={<Globe className="text-green-600" />} label="Official Website" val="www.eammu.com" isLink web />
              </div>
            </div>

            <div className="p-10 md:p-16 flex flex-col justify-center items-center text-center space-y-8">
              <div className="space-y-4 w-full">
                <a
                  href="https://wa.me/8801631312524?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-800 text-white text-lg font-bold py-5 rounded-2xl hover:bg-green-900 transition-all shadow-xl hover:-translate-y-1"
                >
                  Chat on WhatsApp
                </a>
                <Link
                  to="/"
                  className="block w-full bg-white border-2 border-green-800 text-green-800 text-lg font-bold py-5 rounded-2xl hover:bg-green-50 transition-all"
                >
                  ⬅ Back to Home
                </Link>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                 <MapPin size={16} />
                 <span>Head Office: Dhaka, Bangladesh | Branch: Dubai, UAE</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper Components
const ValueCard = ({ icon, title, desc }) => (
  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
    <div className="mb-6 bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center">{icon}</div>
    <h3 className="text-xl font-bold text-green-900 mb-3">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

const ServiceItem = ({ icon, title, list }) => (
  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl group hover:bg-white hover:text-green-900 transition-all duration-500">
    <div className="text-orange-400 mb-6 group-hover:text-green-700 transition-colors">
      {React.cloneElement(icon, { size: 40 })}
    </div>
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-sm opacity-80 leading-relaxed font-medium">{list}</p>
  </div>
);

const TrustCard = ({ title, desc }) => (
  <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border-l-8 border-green-800 hover:shadow-lg transition-all">
    <h3 className="text-xl font-bold text-green-800 mb-3">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
  </div>
);

const ContactInfo = ({ icon, label, val, isLink, tel, mail, web }) => (
  <div className="flex items-center gap-4">
    <div className="p-3 bg-white rounded-xl shadow-sm">{icon}</div>
    <div>
      <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">{label}</p>
      {tel && <a href={`tel:${val.split(',')[0]}`} className="text-green-900 font-bold hover:underline">{val}</a>}
      {mail && <a href={`mailto:${val}`} className="text-green-900 font-bold hover:underline">{val}</a>}
      {web && <a href="https://eammu.com" className="text-green-900 font-bold hover:underline">{val}</a>}
    </div>
  </div>
);

export default About_Eammu_Immigration;