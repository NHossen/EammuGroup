import React from "react";
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, ClipboardList, Send, Globe, ShieldCheck, 
  FileText, Landmark, HelpCircle, Clock, Wallet, Info, 
  TrendingUp, PlayCircle, Image as ImageIcon, Camera, Palmtree
} from 'lucide-react';

const SaudiVisa = () => {
  return (
    <>
      <Helmet>
        <title>Saudi Arabia Visa Application From Dubai | Umrah & Tourist e-Visa 2026</title>
        <meta name="description" content="Apply for your Saudi Arabia e-Tourist visa, Umrah permit, or Business visa in 2026. Expert consultancy for MOFA processing, insurance, and fast-track approval." />
        <link rel="canonical" href="https://eammu.com/saudi-visa-application" />
      </Helmet>

      <main className="bg-white min-h-screen font-sans text-slate-900">
        
        {/* --- 1. HERO SECTION --- */}
        <section className="bg-[#005a31] py-24 px-6 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 flex items-center justify-center">
             <Palmtree size={500} className="text-white" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="flex justify-center gap-2 mb-6">
                <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                    Vision 2030 Partner
                </span>
                <span className="bg-white/20 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                    MOFA & Nusuk Specialist
                </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase leading-tight">
              Saudi <span className="text-orange-500">Arabia</span> Visa Application
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto font-light leading-relaxed">
              Experience the Kingdom's transformation. From spiritual Umrah journeys to the sands of AlUla, we manage your e-Visa with absolute precision.
            </p>
          </div>
        </section>

        {/* --- 2. QUICK METRIC BOXES --- */}
        <section className="max-w-7xl mx-auto -mt-12 px-6 relative z-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <MetricBox label="Decision Time" value="5 - 24 Hours" icon={<Clock size={20}/>} />
                <MetricBox label="Visa Category" value="e-Tourist / Umrah" icon={<FileText size={20}/>} />
                <MetricBox label="New Rule 2026" value="Insurance Integration" icon={<Globe size={20}/>} />
                <MetricBox label="System" value="MOFA / KSA Visa" icon={<Landmark size={20}/>} />
            </div>
        </section>

        {/* --- 3. VIDEO TUTORIALS --- */}
        <section className="bg-slate-50 py-24 px-6 mt-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-12">
              <div className="flex items-center gap-3 mb-4">
                <PlayCircle className="text-orange-500" size={32} />
                <h2 className="text-4xl font-black text-[#005a31] uppercase">KSA Visa Insights</h2>
              </div>
              <p className="text-gray-500 text-center max-w-2xl italic font-medium">Expert tutorials on the KSAVisa.sa portal, Nusuk registration, and the 2026 insurance requirements.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <VideoCard 
                id="KSA_TOURIST_EVISA" 
                title="The e-Tourist Guide" 
                desc="A complete breakdown of the 1-year multiple entry visa for GCC residents and tourists."
              />
              <VideoCard 
                id="UMRAH_NUSUK_2026" 
                title="Umrah via Nusuk" 
                desc="How to link your visa with the Nusuk app for Rawdah and Umrah permit bookings."
              />
              <VideoCard 
                id="KSA_BUSINESS_VISIT" 
                title="Business Visit Portal" 
                desc="The process for obtaining a MOFA invitation letter for professional and commercial visits."
              />
            </div>
          </div>
        </section>

        {/* --- 4. CATEGORY POSTERS --- */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-12 border-b border-gray-100 pb-6">
              <ImageIcon className="text-orange-500" size={32} />
              <h2 className="text-4xl font-black text-[#005a31] uppercase">Kingdom Pathways</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PosterCard 
                image="https://images.unsplash.com/photo-1586724230411-45b95fdfec2d" 
                badge="Tourism" 
                title="e-Tourist Visa" 
                detail="1 Year / Multiple"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa" 
                badge="Spiritual" 
                title="Umrah Visa" 
                detail="90 Days Duration"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1551041777-ed071d335f0b" 
                badge="Professional" 
                title="Business Visit" 
                detail="MOFA Approved"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1543739225-011b44a8446c" 
                badge="Transit" 
                title="Stopover Visa" 
                detail="96-Hour Entry"
              />
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          
          <div className="lg:col-span-2 space-y-20">
            
            {/* 5. PROCEDURE SECTION */}
            <section id="procedure">
              <div className="flex items-center gap-4 mb-10 border-b border-gray-100 pb-4">
                <div className="bg-orange-500 p-3 rounded-2xl text-white">
                  <Send size={28} />
                </div>
                <h2 className="text-3xl font-black text-[#005a31] uppercase tracking-tight">The Application Loop</h2>
              </div>
              
              <div className="space-y-10">
                <StepItem 
                  number="01" 
                  title="MOFA Profile Setup" 
                  desc="Creation of your digital profile on the Unified National Visa Platform (KSA Visa)." 
                />
                <StepItem 
                  number="02" 
                  title="Digital Scanning" 
                  desc="Uploading your passport and biometrics. We ensure the image meets the Enjaz technical standards." 
                />
                <StepItem 
                  number="03" 
                  title="Insurance Issuance" 
                  desc="Automated selection and payment of the mandatory COVID-covered medical insurance required for entry." 
                />
                <StepItem 
                  number="04" 
                  title="Instant Approval" 
                  desc="Receiving your e-Visa PDF. Most tourist e-Visas for GCC residents are issued within hours." 
                />
              </div>
            </section>

            {/* 6. REQUIREMENTS SECTION */}
            <section className="bg-slate-50 p-10 md:p-14 rounded-[3rem] border border-slate-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <FileText size={120} className="text-[#005a31]" />
              </div>
              <div className="flex items-center gap-4 mb-10">
                <div className="bg-[#005a31] p-3 rounded-2xl text-white shadow-lg">
                  <ClipboardList size={28} />
                </div>
                <h2 className="text-3xl font-black text-[#005a31] uppercase tracking-tight">Requirement Checklist</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <RequirementCard text="Passport (valid for at least 6 months)" />
                <RequirementCard text="UAE Residency (valid for at least 3 months)" />
                <RequirementCard text="Current Job/Profession Proof" />
                <RequirementCard text="Return Flight Confirmation" />
                <RequirementCard text="Confirmed Hotel/Accommodation" />
                <RequirementCard text="2 Rectangular Biometric Photos" />
                <RequirementCard text="Mandatory Saudi Medical Insurance" />
                <RequirementCard text="Invitation Letter (For Business only)" />
                <RequirementCard text="Sponsor ID (For Family Visit visas)" />
                <RequirementCard text="Digital Payment Method for MOFA fees" />
              </div>

              {/* Photo Note */}
              <div className="mt-12 p-6 bg-white rounded-2xl border border-orange-100 flex gap-4 items-start">
                <Camera className="text-orange-500 flex-shrink-0" size={24} />
                <div>
                    <p className="text-sm font-bold text-[#005a31] uppercase">MOFA Photo Standards</p>
                    <p className="text-xs text-gray-500 mt-1">
                        Photos must be **rectangular** and have **full width and height** within the frame. Eyes must be open, no glasses, and white background is mandatory.
                    </p>
                </div>
              </div>
            </section>

            {/* 7. FAQ SECTION */}
            <section>
                <div className="flex items-center gap-4 mb-10">
                    <HelpCircle size={32} className="text-orange-500" />
                    <h2 className="text-3xl font-black text-[#005a31] uppercase tracking-tight">Saudi Visa FAQ</h2>
                </div>
                <div className="divide-y divide-gray-100">
                    <FAQItem 
                        question="Can I perform Umrah on a Tourist Visa?" 
                        answer="Yes. The Saudi e-Tourist visa allows you to perform Umrah. However, you must book your slot via the Nusuk app."
                    />
                    <FAQItem 
                        question="Who is eligible for the e-Visa?" 
                        answer="GCC residents with a valid residency of at least 3 months and certain professions are eligible for instant e-Visas."
                    />
                    <FAQItem 
                        question="What is the 90-day stay rule?" 
                        answer="The 1-year multiple entry visa allows you to stay up to 90 days per visit. Overstaying results in heavy daily fines."
                    />
                </div>
            </section>

          </div>

          {/* --- 8. SIDEBAR --- */}
          <aside className="space-y-8 lg:sticky lg:top-10">
            <div className="bg-[#005a31] text-white p-10 rounded-[3rem] shadow-2xl overflow-hidden relative group">
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-white/5 rounded-full group-hover:scale-125 transition-transform duration-1000"></div>
              <h3 className="text-2xl font-black mb-8 border-b border-white/10 pb-4 italic text-orange-400">Saudi Desk</h3>
              <div className="space-y-8 text-sm">
                <ContactLink label="UAE Liaison" href="tel:+971507078334" text="+971 50 707 8334" highlight />
                <ContactLink label="Armenia Office" href="tel:+37494810585" text="+374 94 810585" />
                <ContactLink label="BD Support" href="tel:+8801701699743" text="+880 1701 699 743" />
                <ContactLink label="Official Mail" href="mailto:info@eammu.com" text="info@eammu.com" />
              </div>
              <a href="https://wa.me/971507078334" className="mt-12 block w-full bg-orange-500 text-white text-center py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-[#005a31] transition-all duration-500 shadow-xl">
                Chat on WhatsApp
              </a>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center">
              <ShieldCheck size={40} className="text-[#005a31] mb-4" />
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Global Travel Partner</p>
              <p className="text-[#005a31] font-black text-xl italic tracking-tighter uppercase">Eammu Holidays</p>
            </div>
          </aside>
        </section>
      </main>
    </>
  );
};

// --- Helper Components ---
const VideoCard = ({ id, title, desc }) => (
  <div className="bg-white rounded-3xl overflow-hidden shadow-lg group hover:-translate-y-2 transition-all duration-300">
    <div className="relative aspect-video">
      <iframe className="w-full h-full border-0" src={`https://www.youtube.com/embed/${id}`} title={title} allowFullScreen></iframe>
    </div>
    <div className="p-6">
      <h3 className="font-black text-[#005a31] uppercase mb-2 text-sm">{title}</h3>
      <p className="text-gray-500 text-xs font-medium leading-relaxed">{desc}</p>
    </div>
  </div>
);

const PosterCard = ({ image, badge, title, detail }) => (
  <div className="relative rounded-3xl overflow-hidden aspect-[3/4] group cursor-pointer shadow-md">
    <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
    <div className="absolute top-4 left-4"><span className="bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">{badge}</span></div>
    <div className="absolute bottom-6 left-6"><h3 className="text-white font-black text-xl leading-tight uppercase">{title}</h3><p className="text-orange-400 font-bold text-xs uppercase tracking-widest">{detail}</p></div>
  </div>
);

const StepItem = ({ number, title, desc }) => (
  <div className="flex gap-6 group">
    <div className="text-4xl font-black text-slate-200 group-hover:text-orange-500 transition-all duration-300 leading-none">{number}</div>
    <div className="pt-1">
      <h4 className="text-xl font-black text-[#005a31] mb-2 uppercase tracking-tight">{title}</h4>
      <p className="text-gray-500 leading-relaxed text-base font-medium">{desc}</p>
    </div>
  </div>
);

const RequirementCard = ({ text }) => (
  <div className="flex items-start gap-3 group">
    <div className="bg-orange-100 p-1 rounded-full group-hover:bg-[#005a31] transition-colors"><CheckCircle size={14} className="text-orange-600 group-hover:text-white" /></div>
    <span className="text-gray-700 font-bold text-[13px] leading-tight">{text}</span>
  </div>
);

const MetricBox = ({ label, value, icon }) => (
    <div className="bg-white p-6 rounded-3xl border border-slate-100 flex flex-col items-center justify-center text-center shadow-xl shadow-slate-200/50">
        <div className="text-orange-500 mb-2">{icon}</div>
        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{label}</span>
        <span className="text-[#005a31] font-black text-sm">{value}</span>
    </div>
);

const FAQItem = ({ question, answer }) => (
    <div className="py-6">
        <h4 className="text-lg font-black text-[#005a31] mb-3 uppercase tracking-tight flex items-center gap-2">
            <span className="text-orange-500">Q.</span> {question}
        </h4>
        <p className="text-gray-600 leading-relaxed pl-6 border-l-2 border-orange-200 font-medium">{answer}</p>
    </div>
);

const ContactLink = ({ label, href, text, highlight }) => (
  <div className={`flex flex-col ${highlight ? 'border-l-2 border-orange-500 pl-4' : ''}`}>
    <span className="text-orange-400 text-[10px] font-black uppercase tracking-widest mb-1">{label}</span>
    <a href={href} className="text-lg font-bold hover:text-orange-300 transition-colors">{text}</a>
  </div>
);

export default SaudiVisa;