import React, { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const TravelServices = () => {
  // Data for Visa Section
  const visaData = [
    { id: 1, title: "Tourist Visa Assistance with Eammu", img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80", link: "/visa-services", type: "Tourist Visa" },
    { id: 2, title: "Study Abroad with Eammu Holidays", img: "https://www.unidirection.com/wp-content/uploads/2019/10/study-abroad.png", link: "/student-visa-application-from-bangladesh", type: "Study Abroad" },
    { id: 3, title: "IELTS And Visa Interview with Eammu", img: "https://www.ilmprep.com/blog/wp-content/uploads/2024/02/IELTS-Coaching-Dubai.jpg", link: "/usa-visa-interview-prep", type: "IELTS And Visa Interview" },
    { id: 4, title: "Golden Visa UAE Services", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80", link: "/visa-services", type: "Golden Visa" },
  ];

  // Data for Special Offers (Airlines)
  const offerData = [
    { id: 1, title: "Fly to New Destinations with Up Up To 62% Off", logo: "https://hblimg.mmtcdn.com/content/hubble/img/bangkok/mmt/destination/m_Bangkok-landscape_l_400_640.jpg", color: "bg-blue-900", link: "/offers" },
    { id: 2, title: "Get Up to 22% Discount on Selected European Routes", logo: "https://img.freepik.com/free-photo/beautiful-girl-standing-boat-looking-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-province-thailand_335224-849.jpg?semt=ais_user_personalization&w=740&q=80", color: "bg-orange-700", link: "/offers" },
    { id: 3, title: "Fly to Top Destinations with Up to 48% Off This Eid", logo: "https://media.istockphoto.com/id/1011241694/photo/thai-traditional-wooden-longtail-boat-and-beautiful-sand-beach.jpg?s=612x612&w=0&k=20&c=3Al0xNJgX7LXSiNFbbZFLG2DcHIEtO_XDdgvvRBImUk=", color: "bg-blue-800", link: "/offers" },
    { id: 4, title: "Fly to Top Destinations with Up to 48% Off This Eid", logo: "https://img.freepik.com/premium-photo/dubai-skyline-evening_114775-22.jpg?semt=ais_user_personalization&w=740&q=80", color: "bg-blue-800", link: "/offers" },
  ];

  const visaRef = useRef(null);
  const offerRef = useRef(null);

  // Automatic Smooth Slide Logic
  useEffect(() => {
    const autoScroll = (ref) => {
      if (ref.current) {
        const { scrollLeft, scrollWidth, clientWidth } = ref.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          ref.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          ref.current.scrollBy({ left: 340, behavior: 'smooth' });
        }
      }
    };

    const interval = setInterval(() => {
      autoScroll(visaRef);
      autoScroll(offerRef);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleManualScroll = (ref, direction) => {
    const offset = direction === 'left' ? -340 : 340;
    ref.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <div className="w-full py-16 space-y-20 px-4 md:px-10">
      
      {/* ================= SPECIAL OFFERS SECTION ================= */}
      <section className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-8 border-b border-gray-200 pb-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-950">Special Offers</h2>
          <div className="hidden md:flex gap-2 mb-1">
            {['All', 'Airlines', 'Tours', 'Others'].map(tab => (
              <span key={tab} className="text-xs font-bold px-3 py-1 bg-white rounded-full border border-gray-200 cursor-pointer hover:text-red-600">{tab}</span>
            ))}
          </div>
        </div>

        <div className="relative group">
          <div ref={offerRef} className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory">
            {offerData.map((item) => (
              <div key={item.id} className="min-w-[300px] md:min-w-[380px] snap-start bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
                <a href={item.link} className={`h-44 overflow-hidden relative`}>
                  <img src={item.logo} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" alt="brand" />
                </a>
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <p className="text-blue-900 font-bold text-sm md:text-base mb-6 line-clamp-2">{item.title}</p>
                  <div className="flex justify-end">
                    <a href={item.link} className="bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-black text-[10px] py-2 px-4 rounded-lg flex items-center gap-2 uppercase transition-all">
                      Learn More <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <ScrollArrows onLeft={() => handleManualScroll(offerRef, 'left')} onRight={() => handleManualScroll(offerRef, 'right')} />
        </div>
      </section>

      {/* ================= VISA SERVICES SECTION ================= */}
      <section className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-8 border-b border-gray-200 pb-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-950">Visa Services</h2>
        </div>

        <div className="relative group">
          <div ref={visaRef} className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory">
            {visaData.map((visa) => (
              <div key={visa.id} className="min-w-[300px] md:min-w-[380px] snap-start bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
                <a href={visa.link} className="h-44 overflow-hidden relative">
                  <img src={visa.img} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" alt={visa.type} />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <span className="text-white font-black text-2xl drop-shadow-lg">{visa.type}</span>
                  </div>
                </a>
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <p className="text-blue-900 font-bold text-sm md:text-base mb-6 line-clamp-2">{visa.title}</p>
                  <div className="flex justify-end">
                    <a href={visa.link} className="bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-black text-[10px] py-2 px-4 rounded-lg flex items-center gap-2 uppercase transition-all">
                      Learn More <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <ScrollArrows onLeft={() => handleManualScroll(visaRef, 'left')} onRight={() => handleManualScroll(visaRef, 'right')} />
        </div>
      </section>

    </div>
  );
};

// Reusable Arrow Component
const ScrollArrows = ({ onLeft, onRight }) => (
  <>
    <button onClick={onLeft} className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition hidden lg:block border border-gray-100">
      <ChevronLeft size={24} className="text-blue-900" />
    </button>
    <button onClick={onRight} className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition hidden lg:block border border-gray-100">
      <ChevronRight size={24} className="text-blue-900" />
    </button>
  </>
);

export default TravelServices;