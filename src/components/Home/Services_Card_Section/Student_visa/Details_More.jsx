import React from "react";

const Details_More = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        
        {/* Main Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-[#005a31] mb-4">
            Visa & Immigration Services — Details & Support
          </h1>
          <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Services & About */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-slate-50 p-8 rounded-2xl border-l-8 border-[#005a31] shadow-sm">
              <p className="text-lg text-gray-700 leading-relaxed">
                Welcome to <span className="font-bold text-[#005a31]">Eammu Immigration Services</span>, your trusted partner in global migration. Whether you're planning to study abroad, work overseas, or explore new countries—our experienced team is here to support you every step of the way.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border border-gray-100 rounded-xl shadow-sm hover:border-[#005a31] transition-all">
                <h3 className="text-xl font-bold text-[#005a31] mb-2">🌍 Our Core Services</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li><strong>• Student Visas:</strong> Top universities worldwide.</li>
                  <li><strong>• Work Visas:</strong> Legal international job help.</li>
                  <li><strong>• Tourist Visas:</strong> USA, Dubai, Japan, UK.</li>
                  <li><strong>• Immigration:</strong> PR & family sponsorship.</li>
                </ul>
              </div>

              <div className="p-6 border border-gray-100 rounded-xl shadow-sm hover:border-[#005a31] transition-all">
                <h3 className="text-xl font-bold text-[#005a31] mb-2">🤝 Why Choose Eammu?</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• 6+ years of global success.</li>
                  <li>• Dedicated expert for each country.</li>
                  <li>• Transparent process & refund policy.</li>
                  <li>• 24/7 client support desk.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Box */}
          <div className="lg:col-span-5">
            <div className="bg-[#005a31] text-white p-8 rounded-3xl shadow-xl">
              <h2 className="text-2xl font-bold mb-6 border-b border-white/20 pb-4">📞 Contact Our Team</h2>
              
              <div className="space-y-5">
                <div>
                  <p className="text-orange-400 text-xs font-bold uppercase tracking-wider">Armenia Office</p>
                  <a href="tel:+37494810585" className="text-lg font-semibold hover:text-orange-300">+374 94 810585</a>
                </div>
                
                <div>
                  <p className="text-orange-400 text-xs font-bold uppercase tracking-wider">UAE Office</p>
                  <a href="tel:+971507078334" className="text-lg font-semibold hover:text-orange-300">+971 50 707 8334</a>
                </div>

                <div>
                  <p className="text-orange-400 text-xs font-bold uppercase tracking-wider">BD Office</p>
                  <a href="tel:+8801701699743" className="text-lg font-semibold hover:text-orange-300">+880 1701 699 743</a>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-orange-400 text-xs font-bold uppercase tracking-wider">Email Address</p>
                  <a href="mailto:info@eammu.com" className="text-base font-medium hover:text-orange-300 block">info@eammu.com</a>
                  <a href="mailto:eammuimmigration@gmail.com" className="text-sm opacity-70 hover:text-orange-300 block">eammuimmigration@gmail.com</a>
                </div>

                <div className="pt-2">
                  <p className="text-orange-400 text-xs font-bold uppercase tracking-wider">Website</p>
                  <a href="https://eammu.com" target="_blank" rel="noreferrer" className="text-base font-medium hover:underline">www.eammu.com</a>
                </div>
              </div>

              <a
                href="https://wa.me/37494810585"
                target="_blank"
                rel="noreferrer"
                className="mt-8 w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-bold text-center block transition-all shadow-lg"
              >
                Contact Now on WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Details_More;