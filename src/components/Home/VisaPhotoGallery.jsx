import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';

const marketingMaterials = [
  { id: 1, src: "/visa-poster/europe_visa_poster.webp", title: "Europe Visa" },
  { id: 2, src: "/visa-poster/Qatar Visa.webp", title: "Qatar Visa" },
  { id: 3, src: "/visa-poster/Canada Visa 2.webp", title: "Canada Tourist Visa" },
  { id: 4, src: "/visa-poster/China Visa.webp", title: "China Visa Application" },
  { id: 5, src: "/path-to/Malaysia-Visa.jpg", title: "Malaysia Visa Service" },
  { id: 6, src: "/path-to/UK-Visa.jpg", title: "UK Work Permit" },
  { id: 7, src: "/path-to/Canada-Visa.jpg", title: "Canada Visa Application" },
  { id: 8, src: "/path-to/Thailand-Visa.jpg", title: "Thailand Visa Guide" },
  { id: 9, src: "/path-to/Singapore-Visa.jpg", title: "Singapore Visa Guide" },
  { id: 10, src: "/path-to/Japan-Visa.jpg", title: "Japan Visa Application" },
];

const PosterGallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImg, setSelectedImg] = useState(null); // For Full-Size View
  const itemsPerPage = 4;

  const totalPages = Math.ceil(marketingMaterials.length / itemsPerPage);
  const currentItems = marketingMaterials.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="py-20 px-4 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - Kept Clean */}
        <div className="mb-16 text-left border-l-8 border-[#005a31] pl-6">
          <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">
            Global Visa Assistance
          </h2>
          <p className="text-slate-500 font-medium mt-2">Professional Visa Application By Eammu Holidays</p>
        </div>

        {/* Grid - Alternating 5:5 and 5:7 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-end">
          <AnimatePresence mode="wait">
            {currentItems.map((item, index) => {
              const isFlyer = index % 2 !== 0; // Alternating Logic

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col cursor-pointer"
                  onClick={() => setSelectedImg(item)} // Open Full Size
                >
                  <div 
                    className={`relative group w-full overflow-hidden rounded-xl shadow-lg bg-white border-2 border-slate-100
                    ${isFlyer ? 'aspect-[5/7]' : 'aspect-[5/5]'}`}
                  >
                    <img 
                      src={item.src} 
                      alt={item.title}
                      className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Hover Overlay with "View Full Size" Icon */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                       <div className="bg-white/90 p-4 rounded-full text-blue-600 scale-50 group-hover:scale-100 transition-transform duration-300 shadow-2xl">
                          <Maximize2 size={28} />
                       </div>
                    </div>
                  </div>
                  
                  <h3 className="mt-4 font-bold text-slate-800 text-sm uppercase tracking-wide">
                    {item.title}
                  </h3>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Pagination - Modified for better usability */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-16 gap-4">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md border border-slate-200 hover:bg-blue-600 hover:text-white transition-all disabled:opacity-30"
              disabled={currentPage === 1}
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex items-center gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 rounded-lg font-bold transition-all ${
                    currentPage === i + 1 
                    ? "bg-[#005a31] text-white shadow-lg" 
                    : "bg-white text-slate-400 hover:bg-slate-100"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md border border-slate-200 hover:bg-blue-600 hover:text-white transition-all disabled:opacity-30"
              disabled={currentPage === totalPages}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}

        {/* Full Size View Modal (Lightbox) */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
              onClick={() => setSelectedImg(null)}
            >
              <button 
                className="absolute top-6 right-6 text-white bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all"
                onClick={() => setSelectedImg(null)}
              >
                <X size={32} />
              </button>
              
              <motion.img 
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                src={selectedImg.src} 
                alt={selectedImg.title}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
              
              <div className="absolute bottom-10 left-0 right-0 text-center">
                 <p className="text-white text-2xl font-bold uppercase tracking-widest">{selectedImg.title}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PosterGallery;