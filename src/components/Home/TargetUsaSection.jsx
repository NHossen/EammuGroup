
import { Link } from "react-router-dom";

const TargetUsaSection = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 lg:py-24">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="mb-12 text-center lg:text-left">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-white uppercase bg-[#d33232] rounded-full">
            Elite Coaching
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
            Target <span className="text-[#d33232]">USA</span> Visa Interview
          </h1>
          <div className="h-1.5 w-24 bg-[#005a31] mt-4 rounded-full mx-auto lg:mx-0"></div>
        </div>

        {/* Main Content Wrapper */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Side: Content Area (Order 2 on mobile, 1 on desktop) */}
          <div className="w-full lg:w-1/2 space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2 text-[#005a31] font-semibold tracking-wide">
              <span className="h-px w-8 bg-[#005a31]"></span>
              <span>Professional Excellence</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-snug">
              Your Journey to America <br /> 
              <span className="text-[#005a31]">Starts with Preparation</span>
            </h2>

            <p className="text-lg leading-relaxed text-slate-600">
              Target USA, a distinguished service under <span className="font-bold text-slate-900">Eammu Holidays</span>, 
              is your premier education consultancy. We don't just coach; we transform your confidence. 
              Our specialists cover everything from precise **dress-code etiquette** to **advanced question patterns**, 
              ensuring you walk into your F1 interview ready to succeed.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                to="/targetusavisainterview"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-[#005a31] rounded-xl hover:bg-[#004626] hover:shadow-xl hover:-translate-y-1 group"
              >
                Explore More
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-slate-200">
              <div className="space-y-1">
                <p className="text-2xl font-black text-[#d33232]">Mock Ready</p>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-tighter">Real-time Simulations</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-black text-[#d33232]">Expert Led</p>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-tighter">Verified Consultants</p>
              </div>
            </div>
          </div>

          {/* Right Side: Rectangular Image (Order 1 on mobile, 2 on desktop) */}
          <div className="w-full lg:w-1/2 group order-1 lg:order-2">
            <div className="relative">
              {/* Decorative soft glow behind image */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#005a31]/20 to-[#d33232]/20 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
                <img
                  src="Target_USA.webp"
                  alt="Visa Interview Coaching Session"
                  className="w-full h-full object-cover aspect-video md:aspect-[16/10] lg:aspect-[4/3] block"
                />
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-500"></div>
              </div>

              {/* Float Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white py-3 px-5 shadow-xl rounded-lg hidden md:block border border-slate-100">
                <p className="text-[#005a31] font-bold text-sm flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                  Booking Open 2026
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -z-10 h-72 w-72 bg-slate-200/50 rounded-full blur-3xl -mr-36 -mt-36"></div>
      <div className="absolute bottom-0 left-0 -z-10 h-72 w-72 bg-red-50/50 rounded-full blur-3xl -ml-36 -mb-36"></div>
    </section>
  );
};

export default TargetUsaSection;