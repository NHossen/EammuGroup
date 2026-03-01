import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';
import { toast, Toaster } from 'react-hot-toast';

const carouselImages = [
  { url: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957", title: "Sylhet Tour" },
  { url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c", title: "Desert Safari" },
  { url: "https://images.unsplash.com/photo-1518684079-3c830dcef090", title: "Dubai Luxury" }
];

const LandingModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);
  const [email, setEmail] = useState('');

  // 1. Auto-open modal after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // 2. Auto-rotate carousel images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      toast.success('Successfully subscribed to Eammu Holidays!', {
        duration: 4000,
        position: 'top-center',
        style: { background: '#005a31', color: '#fff', fontWeight: 'bold' },
        icon: <CheckCircle size={20} />
      });
      // Close modal after success
      setTimeout(() => setIsOpen(false), 2000);
    }
  };

  return (
    <>
      <Toaster />
      <Helmet>
        {/* Dynamic SEO for Home Page Entry */}
        <title>Cumilla Travel Agency | Bangladesh Travel Agency | Dhaka Travel Agency</title>
        <meta name="description" content="Eammu Holidays for exclusive international tour packages, visa assistance, and flight deals. Subscribe now for 2026 holiday offers!" />
        <meta name="keywords" content="Eammu Holidays, Travel Agency Bangladesh, Dubai Tour Packages, Visa Processing Dhaka, Cheap Flights 2026" />
        
        {/* Open Graph for Social Sharing */}
        <meta property="og:title" content="Eammu Holidays - Your Global Travel Partner" />
        <meta property="og:description" content="Sign up today for member-only travel discounts and visa updates." />
        <meta property="og:image" content="https://eammu.com/og-home-image.jpg" />
      </Helmet>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Overlay */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Container */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[500px]"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-50 p-2 bg-white/20 hover:bg-white/40 md:bg-gray-100 md:hover:bg-gray-200 rounded-full transition-all"
              >
                <X size={20} className="text-gray-800" />
              </button>

              {/* LEFT SIDE: Carousel (Hidden on small mobile if needed, or stacked) */}
              <div className="relative w-full md:w-1/2 h-48 md:h-auto overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImg}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                  >
                    <img 
                      src={carouselImages[currentImg].url} 
                      className="w-full h-full object-cover" 
                      alt="Travel" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                      <h3 className="text-white text-2xl font-black uppercase italic tracking-tighter">
                        {carouselImages[currentImg].title}
                      </h3>
                      <p className="text-gray-200 text-sm font-bold">Exclusive Benefits with Eammu Holidays</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
                
                {/* Carousel Indicators */}
                <div className="absolute bottom-4 left-8 flex gap-2">
                  {carouselImages.map((_, i) => (
                    <div key={i} className={`h-1 rounded-full transition-all ${currentImg === i ? 'w-8 bg-[#25D366]' : 'w-2 bg-white/50'}`} />
                  ))}
                </div>
              </div>

              {/* RIGHT SIDE: Login & Subscription */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white">
                <h2 className="text-2xl font-black text-[#001f3f] mb-2">Sign-up / Log-in</h2>
                <p className="text-gray-500 text-sm mb-8 font-bold uppercase tracking-widest">To enjoy member benefits</p>

                {/* Google Login Button */}
                <button className="w-full flex items-center justify-center gap-3 border-2 border-gray-100 py-3 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition-all mb-6">
                  <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-5" alt="google" />
                  Continue with Google
                </button>

                <div className="relative flex items-center mb-6">
                  <div className="flex-grow border-t border-gray-100"></div>
                  <span className="flex-shrink mx-4 text-gray-400 text-xs font-bold uppercase">Or Login with Email</span>
                  <div className="flex-grow border-t border-gray-100"></div>
                </div>

                {/* Subscription Form */}
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div>
                    <label className="text-[10px] font-black uppercase text-gray-400 ml-1">Email or Mobile Number</label>
                    <input 
                      type="text" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter details..."
                      className="w-full border-b-2 border-gray-100 focus:border-[#005a31] py-2 px-1 outline-none font-bold text-gray-800 transition-all"
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-[#005a31] text-white py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-[#25D366] transition-all shadow-lg shadow-[#005a31]/20"
                  >
                    Continue & Subscribe
                  </button>
                </form>

                <p className="text-[9px] text-gray-400 mt-6 text-center leading-relaxed">
                  By signing in, you agree to our <span className="text-blue-500 underline">Privacy Policy</span> and <span className="text-blue-500 underline">Terms of Service</span>.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LandingModal;