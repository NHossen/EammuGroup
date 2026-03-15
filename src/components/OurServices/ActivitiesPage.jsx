import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const ActivitiesPage = () => {
  const whatsappNumber = "+8801631312524";
  
  // State for Hero, Tabs, and Pagination
  const [heroIndex, setHeroIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of items to show in Media Hub per page
  
  const scrollRef = useRef(null);

  // --- 1. DATA: HERO SLIDES ---
  const heroSlides = [
    { url: 'https://sunsetdesertsafari.com/wp-content/uploads/2025/01/Dubai-Desert-Safari.jpg', title: 'DUBAI ADVENTURES', sub: 'Desert Safaris & City Tours' },
    { url: 'https://d1i3enf1i5tb1f.cloudfront.net/assets/SmallWebsite/images/mydesertsafari/Desert-Safari.jpg', title: 'GEORGIA EXPLORATION', sub: 'Caucasus Mountains & Wine Tours' },
    { url: 'https://dubaitaliaexperiences.com/assets/w=1500&h=740&fit=fill&f=center___images.ctfassets.net_7dc7gq8ix1ml_diJdY07KlurPDhaqroXkW_817cee95a371ba25b2af488f1953df14_cover_mongolfiere.jpg', title: 'ARMENIA HERITAGE', sub: 'Ancient Temples & History' }
  ];

  // --- 2. DATA: TOP ACTIVITIES ---
  const topActivities = [
    { title: 'SYLHET TOUR', image: 'https://ttg.com.bd/uploads/tours/plans/207_ratargul_swamp_forest_sylhetjpg.jpg', waMsg: 'I want to book the Sylhet Tour' },
    { title: 'DHAKA TOUR', image: 'https://res.klook.com/images/w_1200,h_630,c_fill,q_65/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/wxekabbs9sdnofxhjgqe/Dhaka%20Fantasy%20Kingdom%20Tour.jpg', waMsg: 'I want to book the Dhaka Tour' },
    { title: 'DESERT SAFARI', image: 'https://cdn.hotairballoonindubai.com/wp-content/uploads/2022/06/Morning-Bliss-Balloon-Ride-Home-Page-thumbnail-820x520.jpg', waMsg: 'I want to book the Desert Safari' },
    { title: 'ARMENIA CITY', image: 'https://southtravels.com/public/uploads/MZcyf88tObOWPA5x3wSCXBHA0t3jxXpKyJYC7Bji.jpeg', waMsg: 'I want to book the Armenia City Tour' },
    { title: 'GEORGIA WINE', image: 'https://cdn.yourholiday.me/static/dynimg/itinerary/64/600x300/2969418-2969417_georgia.jpg', waMsg: 'I want to book the Georgia Wine Tour' },
  ];

  // --- 3. DATA: GALLERY ---
  const galleryData = [
    { id: 1, type: 'photos', title: 'Dubai Desert', url: 'https://saharadesertdubai.com/storage/tours/images/zaZMzdB3X3AuvUKjX66iMDIB6igNc8Y2PN0dYIEn.jpg' },
    { id: 2, type: 'videos', title: 'Georgia Vlog', url: 'https://www.youtube.com/embed/411I3K-Zagc', isYoutube: true },
    { id: 3, type: 'photos', title: 'Bangladesh Greenery', url: 'https://ttg.com.bd/uploads/tours/plans/207_ratargul_swamp_forest_sylhetjpg.jpg' },
    { id: 4, type: 'videos', title: 'Africa Wildlife', url: 'https://www.youtube.com/embed/RzFUYcs7oeg', isYoutube: true },
    { id: 5, type: 'photos', title: 'India Taj Mahal', url: 'https://static.wixstatic.com/media/055605_65e20a7fcbc54e2e8720adfc2544c35e~mv2.jpg/v1/fill/w_1800,h_1082,al_c,q_85/taj_new_contant_edited.jpg' },
    { id: 6, type: 'photos', title: 'Armenia Nights', url: 'https://www.afcholidays.com/afccms/uploads/tour-gallery/faa700fc-de92-4e1f-9e85-e9323d1a24ed.webp' },
    { id: 7, type: 'photos', title: 'Dubai Sky', url: 'https://sunsetdesertsafari.com/wp-content/uploads/2025/01/Dubai-Desert-Safari.jpg' },
    { id: 8, type: 'videos', title: 'Travel Experience', url: 'https://www.youtube.com/embed/411I3K-Zagc', isYoutube: true },
  ];

  // Logic: Hero Auto-fade
  useEffect(() => {
    const heroTimer = setInterval(() => {
      setHeroIndex((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(heroTimer);
  }, [heroSlides.length]);

  // Logic: Top Activities Auto-scroll (Mobile Responsive)
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    const autoScroll = setInterval(() => {
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      if (scrollContainer.scrollLeft >= maxScroll - 10) {
        scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        const step = window.innerWidth < 768 ? 320 : 450;
        scrollContainer.scrollBy({ left: step, behavior: 'smooth' });
      }
    }, 4000);
    return () => clearInterval(autoScroll);
  }, []);

  // --- LOGIC: PAGINATION & FILTERING ---
  const filteredList = activeTab === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.type === activeTab);

  const totalPages = Math.ceil(filteredList.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMediaItems = filteredList.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
    // Scroll to gallery top when page changes
    document.getElementById('media-hub').scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = (msg) => {
    window.open(`https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="bg-white min-h-screen font-sans overflow-x-hidden">
      <Helmet>
        <title>Activities & Tours | Eammu Holidays</title>
        <meta name="description" content="Explore global activities with Eammu Holidays." />
      </Helmet>

      {/* SECTION 1: HERO (Responsive Height) */}
      <section className="relative w-full h-[45vh] md:h-[50vh] bg-black overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={heroIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${heroSlides[heroIndex].url})` }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
              <h1 className="text-4xl md:text-7xl font-black mb-4 tracking-tighter drop-shadow-2xl uppercase">
                {heroSlides[heroIndex].title}
              </h1>
              <p className="text-lg md:text-2xl font-medium opacity-90 drop-shadow-md">
                {heroSlides[heroIndex].sub}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {heroSlides.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setHeroIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${heroIndex === i ? 'w-12 bg-[#e7d000]' : 'w-4 bg-white/40'}`}
            />
          ))}
        </div>
      </section>

      {/* SECTION 2: TOP ACTIVITIES (Mobile Responsive Carousel) */}
      <section className="py-12 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-black text-[#005a31] mb-8 uppercase tracking-tight flex items-center gap-3">
            Top Activities 
            <span className="h-1 w-20 bg-green-600 rounded-full"></span>
          </h2>
          
          <div className="relative">
            <div 
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory touch-pan-x"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {topActivities.map((act, index) => (
                <div 
                  key={index}
                  onClick={() => openWhatsApp(act.waMsg)}
                  className="w-[85%] sm:w-[350px] md:w-[420px] h-[180px] md:h-[200px] relative rounded-[2rem] overflow-hidden cursor-pointer snap-center flex-shrink-0 group shadow-lg"
                >
                  <img src={act.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={act.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-[10px] font-bold text-green-400 mb-1 tracking-widest uppercase">Premium Choice</p>
                    <h3 className="font-black text-xl uppercase tracking-wider">{act.title}</h3>
                  </div>
                </div>
              ))}
            </div>
            {/* Auto-moving Progress Bar */}
            <div className="mt-4 w-full h-1 bg-gray-200 rounded-full relative overflow-hidden max-w-[200px] mx-auto">
              <motion.div 
                animate={{ x: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                className="absolute left-0 top-0 h-full bg-[#005a31] w-1/3 rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: MEDIA HUB (Working Pagination) */}
      <section id="media-hub" className="py-20 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#005a31] mb-6 uppercase tracking-tighter">Media Hub</h2>
          <div className="flex justify-center flex-wrap gap-3 mb-12">
            {['all', 'photos', 'videos'].map((tab) => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setCurrentPage(1); }}
                className={`px-8 py-3 rounded-full font-black uppercase text-xs transition-all border-2 
                  ${activeTab === tab ? 'bg-[#005a31] text-white border-[#005a31] shadow-lg' : 'bg-white text-gray-400 border-gray-100 hover:border-[#005a31]'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* MEDIA GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {currentMediaItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative h-[250px] md:h-80 rounded-[2.5rem] overflow-hidden shadow-xl bg-gray-100 group"
              >
                {item.isYoutube ? (
                  <iframe className="w-full h-full" src={item.url} title={item.title} frameBorder="0" allowFullScreen></iframe>
                ) : (
                  <div onClick={() => openWhatsApp(`Hi Eammu Holidays! I'm interested in viewing more of ${item.title}`)} className="cursor-pointer h-full w-full">
                    <img src={item.url} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                      <span className="text-white font-black px-6 py-2 border-2 border-white rounded-full uppercase text-xs">Explore</span>
                    </div>
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black uppercase text-[#005a31] z-20">
                  {item.type}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* PAGINATION UI (Now Functional) */}
        {totalPages > 1 && (
          <div className="mt-16 flex justify-center items-center gap-4">
            <button 
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className={`w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center transition-all ${currentPage === 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#005a31] hover:text-white'}`}
            >
              ‹
            </button>
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`w-10 h-10 flex items-center justify-center rounded-full font-black transition-all ${currentPage === i + 1 ? 'bg-[#005a31] text-white' : 'text-gray-400 hover:text-[#005a31]'}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button 
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              className={`w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center transition-all ${currentPage === totalPages ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#005a31] hover:text-white'}`}
            >
              ›
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default ActivitiesPage;