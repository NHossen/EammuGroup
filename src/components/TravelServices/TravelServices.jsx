import React, { useEffect, useRef} from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const TravelServices = () => {
  // Data for Visa Section
  const visaData = [
    { id: 1, title: "Tourist Visa Assistance by Eammu Holidays", img: "https://eam-global.com/wp-content/uploads/2025/03/Tourist-Visa.jpg", link: "/tourist-visa-application-from-bangladesh"},
    { id: 2, title: "Study Abroad From Bangladesh with Eammu", img: "https://www.unidirection.com/wp-content/uploads/2019/10/study-abroad.png", link: "/student-visa-application-from-bangladesh"},
    { id: 3, title: "IELTS And Visa Interview Preparation with Eammu", img: "https://galvanizetestprep.com/wp-content/uploads/2019/12/RAJA-KONDAPALLI-1.png", link: "/target-ielts-and-immigration-center"},
    { id: 4, title: "Higher Study In USA With 70% Scholarship", img: "https://globalgateways.co.in/wp-content/uploads/2025/01/study-abroad-usa.jpg", link: "/student-visa-application-from-bangladesh"},
    { id: 5, title: "Higher Study In Europe With Full Funded Scholarship", img: "https://www.birtamodeducation.edu.np/wp-content/uploads/2023/06/study_in_europe.jpg", link: "/europe-visa-application"},
    { id: 6, title: "Australia Tourist Visa Application By Eammu Holidays", img: "https://static.joonsite.com/careerbrick/2411011532477466.png", link: "/australia-visa-application"},
    { id: 7, title: "Schengen Visa Assistance By Eammu Holidays", img: "https://citizenshipbyinvestment.news/wp-content/uploads/2024/01/SchengenFeatured-1.jpg", link: "/europe-visa-application"},
    { id: 8, title: "Study In Russia With Full Funded Govt. Scholarship", img: "https://www.britannicaoverseas.com/storage/uploads/blogs/2025/09/26/study-in-russia_1742025452.webp", link: "/student-visa-application-from-bangladesh"},
  ];

  // Data for Special Offers (Airlines)
  const offerData = [
    { id: 1, title: "Fly to New Destinations with Up To 33% Off", logo: "https://hblimg.mmtcdn.com/content/hubble/img/bangkok/mmt/destination/m_Bangkok-landscape_l_400_640.jpg", color: "bg-blue-900", link: "/offers" },
    { id: 2, title: "Get Up to 32% Discount on Selected European Routes", logo: "https://img.freepik.com/free-photo/beautiful-girl-standing-boat-looking-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-province-thailand_335224-849.jpg?semt=ais_user_personalization&w=740&q=80", color: "bg-orange-700", link: "/offers" },
    { id: 3, title: "Best airline ticket offers for domestic flights With 15% off", logo: "/airline-discount-offer.webp", color: "bg-blue-800", link: "/offers" },
    { id: 5, title: "Get Exclusive Deals on International Flights", logo: "https://img.freepik.com/premium-photo/airplane-landing-sunset_114775-23.jpg?semt=ais_user_personalization&w=740&q=80", color: "bg-blue-800", link: "/offers" },
    { id: 6, title: "Book cheap flights to top international destinations today.", logo: "/cheapflights_eammu_offer.webp", color: "bg-blue-800", link: "/offers" },
    { id: 7, title: "Fly to new destinations with exclusive travel discounts get Up to 48% Off This Eid", logo: "https://media.istockphoto.com/id/1011241694/photo/thai-traditional-wooden-longtail-boat-and-beautiful-sand-beach.jpg?s=612x612&w=0&k=20&c=3Al0xNJgX7LXSiNFbbZFLG2DcHIEtO_XDdgvvRBImUk=", color: "bg-blue-800", link: "/offers" },
    { id: 8, title: "Travel the world with unbeatable airfare deals with Up to 38% Off This Eid", logo: "https://img.freepik.com/premium-photo/dubai-skyline-evening_114775-22.jpg?semt=ais_user_personalization&w=740&q=80", color: "bg-blue-800", link: "/offers" },
    
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
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleManualScroll = (ref, direction) => {
    const offset = direction === 'left' ? -340 : 340;
    ref.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <div className="w-full py-16 space-y-16 px-4 md:px-10">
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
                    <a href={item.link} className="bg-[#005a31] hover:bg-yellow-500 text-white font-black text-[10px] py-[12px] px-4 rounded-lg flex items-center gap-2 uppercase transition-all">
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
                </a>
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <p className="text-blue-900 font-bold text-sm md:text-base mb-6 line-clamp-2">{visa.title}</p>
                  <div className="flex justify-end">
                    <a href={visa.link} className="bg-[#005a31] hover:bg-yellow-500 text-white font-black text-[10px] py-[12px] px-4 rounded-lg flex items-center gap-2 uppercase transition-all">
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