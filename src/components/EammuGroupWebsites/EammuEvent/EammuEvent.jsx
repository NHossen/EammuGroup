import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  Users, 
  Music, 
  Camera, 
  Utensils, 
  Gem, 
  PhoneCall, 
  CheckCircle2, 
  Sparkles,
  MapPin
} from "lucide-react";

const EammuEvent = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* SEO Meta Tags (Unchanged as requested) */}
      <Helmet>
        <title>
          Event Management Company Bangladesh | Wedding, Corporate & Cultural Event Planner in Dhaka - Eammu
        </title>
        <meta
          name="description"
          content="Eammu Event Management offers professional wedding planning, corporate events, cultural programs, photography, catering, and full event solutions across Bangladesh."
        />
        <meta
          name="keywords"
          content="Eammu Event Management, Wedding Planner Bangladesh,Wedding Planner Cumilla, Corporate Event Organizer Dhaka, Cultural Events Bangladesh, Cumilla Event Planner, Event Management Company Dhaka"
        />
        <link rel="canonical" href="https://www.eammu.com/eammuevent" />

        <meta property="og:title" content="Eammu Event Management | Make Your Event Memorable" />
        <meta
          property="og:description"
          content="From weddings to corporate conferences — Eammu Event Management delivers creative, reliable & premium event solutions across Bangladesh."
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1470&q=80"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 overflow-hidden bg-white">
        <div className="container mx-auto px-4 text-center">
          <span className="bg-orange-100 text-orange-600 px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 inline-block">
            Excellence in Every Detail
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-[#005a31] mb-6 tracking-tight">
            Eammu <span className="text-orange-500">Event Management</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Crafting Extraordinary Experiences. From Royal Weddings to Corporate Summits, 
            We Turn Your Vision Into a Flawless Celebration.
          </p>

          <div className="relative mt-12 max-w-5xl mx-auto">
            <div className="absolute -inset-4 bg-green-900/5 rounded-[2.5rem] -rotate-1"></div>
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1470&q=80"
              alt="Eammu Event Management Banner"
              className="relative z-10 rounded-[2rem] shadow-2xl w-full h-[450px] object-cover border-8 border-white"
            />
          </div>
        </div>
      </section>

      {/* Offline Booking Notice - Premium Styled */}
      <section className="container mx-auto px-4 -mt-20 relative z-20">
        <div className="bg-[#005a31] text-white p-8 md:p-12 rounded-[3rem] shadow-2xl overflow-hidden relative group">
          <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
             <Gem size={200} />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <PhoneCall className="text-orange-400" size={32} />
                <h2 className="text-3xl font-bold italic">Offline Booking & Consultation</h2>
              </div>
              <p className="text-green-50 text-lg leading-relaxed mb-8 opacity-90">
                To ensure high-end quality and bespoke planning, our experts provide 
                **Personalized One-on-One Consultations**. We believe your event deserves 
                undivided attention and precise execution.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <BookingPoint text="Custom Budgeting" />
                 <BookingPoint text="Theme Design" />
                 <BookingPoint text="End-to-End Logistics" />
                 <BookingPoint text="Cumilla & Nationwide" />
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
               <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                 <MapPin className="text-orange-400" /> Current Service Hub
               </h3>
               <p className="text-sm opacity-80 leading-relaxed">
                 Strategically located in **Cumilla**, our team manages premium event logistics 
                 across all major cities in Bangladesh, ensuring vendor coordination and on-site 
                 management with perfection.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-[#005a31] uppercase tracking-tighter mb-4">
            Our Signature Services
          </h2>
          <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ServiceCard icon={<Sparkles />} title="Wedding Planning" desc="Royal stages & luxury decor." />
            <ServiceCard icon={<Users />} title="Corporate Events" desc="Seminars & Grand Summits." />
            <ServiceCard icon={<Calendar />} title="Private Parties" desc="Birthdays & Anniversaries." />
            <ServiceCard icon={<Music />} title="Cultural Shows" desc="Concerts & Festivals." />
            <ServiceCard icon={<Camera />} title="Photography" desc="Pro Videography & Coverage." />
            <ServiceCard icon={<Utensils />} title="Premium Catering" desc="Gourmet Food & Hospitality." />
          </div>

          <div className="relative">
            <img
              src="https://cdn.greenvelope.com/blog/wp-content/uploads/outdoor-wedding-aisle.jpeg"
              alt="Wedding Event Setup"
              className="rounded-[3rem] shadow-2xl w-full h-[550px] object-cover border-4 border-white"
            />
            <div className="absolute top-10 -left-10 bg-white p-6 rounded-3xl shadow-xl hidden lg:block">
               <p className="text-[#005a31] font-black text-3xl">100+</p>
               <p className="text-xs font-bold uppercase text-gray-400">Successful Events</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <h2 className="text-4xl font-black uppercase tracking-tight text-orange-400">
              Why Choose <br /> Eammu Event?
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Precision, Creativity, and Flawless Execution. We handle the stress of planning, 
              coordinating, and managing so you can live in the moment.
            </p>
            <div className="space-y-4">
              <CheckItem text="Expert Vendor Coordination & Management" />
              <CheckItem text="Innovative & Creative Stage Concepts" />
              <CheckItem text="Transparent Budgeting with No Hidden Fees" />
              <CheckItem text="On-site Management for Seamless Flow" />
            </div>
          </div>

          <div className="relative">
            <img
              src="https://windowsonthelake.com/wp-content/uploads/2022/09/christening-1499314_1920-1-1024x683.jpg"
              alt="Corporate & Cultural Event"
              className="rounded-[3rem] shadow-2xl w-full h-[400px] object-cover opacity-80"
            />
          </div>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="py-24 container mx-auto px-4">
        <div className="bg-green-50 rounded-[4rem] p-12 md:p-20 text-center">
          <h2 className="text-3xl font-black text-[#005a31] mb-12 uppercase tracking-widest">The Future of Eammu Event</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FutureCard title="Online Booking" desc="Instant quotation system." />
            <FutureCard title="Live Gallery" desc="Browse our event case studies." />
            <FutureCard title="Video Log" desc="BTS of our creative process." />
            <FutureCard title="Event App" desc="Plan your event via mobile." />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black text-[#005a31] mb-8 uppercase tracking-tighter">
            Let’s Plan Your Next <br /> Big Moment
          </h2>
          <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto">
            Ready for a free event consultation? Our experts are just one message away.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="https://wa.me/8801631312524?text=Hello%20Eammu%20Event%20Team%2C%20I%20want%20to%20book%20an%20event%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#005a31] text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-orange-500 transition-all duration-300 shadow-2xl"
            >
              <PhoneCall size={20} />
              Book Free Consultation
            </a>

            <Link
              to="/"
              className="flex items-center justify-center border-2 border-[#005a31] text-[#005a31] px-10 py-5 rounded-full text-lg font-bold hover:bg-green-100 transition-all"
            >
              ⬅ Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper Components
const ServiceCard = ({ icon, title, desc }) => (
  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
    <div className="text-orange-500 mb-4 group-hover:scale-110 transition-transform">{icon}</div>
    <h3 className="text-xl font-bold text-[#005a31] mb-2">{title}</h3>
    <p className="text-sm text-gray-500">{desc}</p>
  </div>
);

const BookingPoint = ({ text }) => (
  <div className="flex items-center gap-2 text-green-100 font-medium">
    <CheckCircle2 size={18} className="text-orange-400" />
    <span>{text}</span>
  </div>
);

const CheckItem = ({ text }) => (
  <div className="flex items-center gap-3">
    <div className="bg-orange-500/20 p-1 rounded-full">
      <CheckCircle2 size={20} className="text-orange-500" />
    </div>
    <span className="text-lg text-gray-300">{text}</span>
  </div>
);

const FutureCard = ({ title, desc }) => (
  <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-green-100">
    <h4 className="text-orange-600 font-black mb-2">{title}</h4>
    <p className="text-xs text-gray-500 font-bold uppercase">{desc}</p>
  </div>
);

export default EammuEvent;