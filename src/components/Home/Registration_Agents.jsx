
import { Link } from 'react-router-dom';

const Registration_Agents = () => {


  return (
    <div className="py-12 px-4 container mx-auto">
    
      {/* Main Modern Card Container */}
      <div className="relative overflow-hidden bg-white border border-slate-100 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] flex flex-col lg:flex-row min-h-[550px]">
        
        {/* Left Side: Rectangular Photo (Full Height/Width in its box) */}
        <div className="w-full lg:w-2/5 min-h-[350px] lg:min-h-full relative overflow-hidden bg-slate-200">
          <img
            src="eammu-agent-travel-agency-bangladesh-dhaka.webp"
            alt="Eammu Holidays Agent Registration"
            loading="eager"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          {/* Subtle gradient to help text contrast on mobile if needed */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent hidden lg:block"></div>
        </div>

        {/* Right Side: Content Area */}
        <div className="w-full lg:w-3/5 p-8 lg:p-14 flex flex-col justify-center">
          {/* Brand Accent */}
          <div className="flex items-center space-x-2 mb-6">
            <span className="w-12 h-1 bg-[#d33232] rounded-full"></span>
            <span className="text-[#d33232] font-bold tracking-widest uppercase text-xs sm:text-sm">
              Business Partnership
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#005a31] leading-tight mb-6">
            Eammu Holidays Gives <br />
            <span className="text-slate-900">Agentship in Bangladesh</span>
          </h2>

          <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
            <p className="font-bold text-slate-900 text-xl leading-snug">
              বেকার বসে আছেন? ৫০% এজেন্টশিপে ট্রাভেল এজেন্সী ব্যবসা করুন কোন ইনভেস্ট ছাড়াই!
            </p>
            
            <p className="text-slate-600">
              🚀 ট্রাভেল এজেন্সী ব্যবসায় একটি ভালো ক্যারিয়ারের স্বপ্ন দেখছেন? আপনার সুযোগ এখানেই!
              ইয়াম্মু হলিডেজ এর সাথে সর্বোচ্চ কমিশনে টিকেট এবং ভিসা করুন 🔥
            </p>

            <div className="bg-green-50/50 border-l-4 border-[#005a31] p-5 rounded-r-xl">
              <p className="text-[#005a31] font-semibold italic">
                Eammu Holidays কোনো ইনভেস্ট ছাড়াই উল্লেখযোগ্য 50% কমিশন সহ ব্যক্তিদের 
                এজেন্ট হিসেবে আমাদের সাথে যোগদান করার জন্য একটি সীমিত সুযোগ দিচ্ছে! 🔥
              </p>
            </div>
          </div>

          {/* Action Buttons & Status */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            {/* Primary CTA */}
            <a
              href="https://rb.gy/si1vi9"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-8 py-4 bg-[#005a31] text-white font-bold text-lg rounded-xl hover:bg-[#072504] transition-all transform hover:-translate-y-1 hover:shadow-xl active:scale-95"
            >
              Register Now
            </a>
            
            {/* Secondary CTA */}
            <Link 
              to="/b2b_agent"
              className="w-full sm:w-auto text-center px-8 py-4 border-2 border-[#005a31] text-[#005a31] font-bold text-lg rounded-xl hover:bg-slate-50 transition-all hover:shadow-md active:scale-95"
            >
              Explore More
            </Link>

            {/* Micro-Copy */}
            <div className="text-center sm:text-left sm:ml-4">
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Limited Slots</p>
              <p className="text-lg font-black text-[#d33232]">শীঘ্রই রেজিস্ট্রেশন করুন</p>
            </div>
          </div>
        </div>
      </div>

      {/* Aesthetic Footer Detail */}
      <div className="mt-8 flex items-center justify-center space-x-3 opacity-30">
        <hr className="w-16 border-slate-300" />
        <p className="text-xs font-medium text-slate-500 uppercase tracking-widest">Authorized Registration Portal</p>
        <hr className="w-16 border-slate-300" />
      </div>
    </div>
  );
};

export default Registration_Agents;