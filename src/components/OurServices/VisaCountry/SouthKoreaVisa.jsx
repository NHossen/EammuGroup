import React from "react";
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, ClipboardList, Send, Globe, ShieldCheck, 
  FileText, TowerControl, HelpCircle, Clock, Wallet, Info, 
  TrendingUp, PlayCircle, Image as ImageIcon, Camera, Landmark
} from 'lucide-react';

const SouthKoreaVisa = () => {
  return (
    <>
      <Helmet>
        <title>South Korea Visa 2026 | K-ETA & KVAC Requirements - Eammu Holidays</title>
        <meta name="description" content="Apply for South Korea tourist, business, and K-ETA permits. Expert assistance for KVAC submissions, document translation, and fast processing for 2026." />
        <link rel="canonical" href="https://eammu.com/south-korea-visa-application" />
      </Helmet>

      <main className="bg-white min-h-screen font-sans text-slate-900">
        
        {/* --- 1. HERO SECTION --- */}
        <section className="bg-[#005a31] py-24 px-6 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 flex items-center justify-center">
             <TowerControl size={500} className="text-white" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="flex justify-center gap-2 mb-6">
                <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                    Premium K-Visa Hub
                </span>
                <span className="bg-white/20 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                    K-ETA Authorized
                </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase leading-tight">
              South <span className="text-orange-500">Korea</span> 2026
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto font-light leading-relaxed">
              From the neon streets of Seoul to the serenity of Jeju Island. We make the Korean visa process as innovative as the country itself.
            </p>
          </div>
        </section>

        {/* --- 2. QUICK METRIC BOXES --- */}
        <section className="max-w-7xl mx-auto -mt-12 px-6 relative z-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <MetricBox label="Processing" value="5 - 10 Working Days" icon={<Clock size={20}/>} />
                <MetricBox label="Entry Type" value="K-ETA or Sticker" icon={<Globe size={20}/>} />
                <MetricBox label="Validity" value="90 Days / Multi" icon={<TrendingUp size={20}/>} />
                <MetricBox label="Format" value="Visa Grant Notice" icon={<FileText size={20}/>} />
            </div>
        </section>

        {/* --- 3. VIDEO TUTORIALS --- */}
        <section className="bg-slate-50 py-24 px-6 mt-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-12">
              <div className="flex items-center gap-3 mb-4">
                <PlayCircle className="text-orange-500" size={32} />
                <h2 className="text-4xl font-black text-[#005a31] uppercase">K-Visa Video Guides</h2>
              </div>
              <p className="text-gray-500 text-center max-w-2xl italic font-medium">Step-by-step visuals on navigating the Korea Visa Application Center (KVAC) and electronic travel authorizations.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <VideoCard 
                id="K_ETA_EXPLAINED" 
                title="K-ETA Application" 
                desc="A complete walkthrough for nationalities eligible for the Korea Electronic Travel Authorization in 2026."
              />
              <VideoCard 
                id="SOUTH_KOREA_STICKER" 
                title="Sticker Visa Process" 
                desc="How to prepare your physical documents for submission at the KVAC or Embassy."
              />
              <VideoCard 
                id="KOREA_BANK_DOCS" 
                title="Financial Proofs" 
                desc="Understanding the strict bank certificate and statement requirements for South Korean immigration."
              />
            </div>
          </div>
        </section>

        {/* --- 4. CATEGORY POSTERS --- */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-12 border-b border-gray-100 pb-6">
              <ImageIcon className="text-orange-500" size={32} />
              <h2 className="text-4xl font-black text-[#005a31] uppercase">Visa Categories</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PosterCard 
                image="https://images.unsplash.com/photo-1517154421773-0529f29ea451" 
                badge="C-3-9" 
                title="Tourist Visa" 
                detail="General Sightseeing"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1521791136064-7986c2920216" 
                badge="C-3-4" 
                title="Business Visa" 
                detail="Meetings & Contracts"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1544005313-94ddf0286df2" 
                badge="F-3" 
                title="Family Visit" 
                detail="Dependent & Relatives"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1523240795612-9a054b0db644" 
                badge="D-2 / D-4" 
                title="Study Visa" 
                detail="Korean Language/Uni"
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
                <h2 className="text-3xl font-black text-[#005a31] uppercase tracking-tight">The Roadmap to Seoul</h2>
              </div>
              
              <div className="space-y-10">
                <StepItem 
                  number="01" 
                  title="Eligibility Check" 
                  desc="We determine if your citizenship allows for a K-ETA or if a full C-3 sticker visa submission is necessary." 
                />
                <StepItem 
                  number="02" 
                  title="Document Standardization" 
                  desc="Translation and formatting of bank certificates, NOCs, and business docs to meet South Korean MOJ standards." 
                />
                <StepItem 
                  number="03" 
                  title="KVAC Submission" 
                  desc="We manage the appointment and submission at the Korea Visa Application Center (KVAC), handling all logistics." 
                />
                <StepItem 
                  number="04" 
                  title="Grant Notice Retrieval" 
                  desc="Korea no longer issues physical stickers for many categories. We retrieve your digital 'Visa Grant Notice' for travel." 
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
                <h2 className="text-3xl font-black text-[#005a31] uppercase tracking-tight">Documentation Checklist</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <RequirementCard text="Valid Passport (At least 6 months remaining)" />
                <RequirementCard text="Visa Application Form (Korean/English)" />
                <RequirementCard text="Biometric Rectangular Photos (3.5x4.5cm)" />
                <RequirementCard text="Bank Certificate (Current Balance Proof)" />
                <RequirementCard text="6 Months Bank Statements (Stamped)" />
                <RequirementCard text="Employment Certificate or Trade License" />
                <RequirementCard text="Confirmed Hotel Reservation" />
                <RequirementCard text="Day-by-Day Travel Itinerary" />
                <RequirementCard text="Residence Visa Copy (For UAE/Armenia)" />
                <RequirementCard text="Income Tax Returns (If applicable)" />
              </div>

              {/* Photo Note */}
              <div className="mt-12 p-6 bg-white rounded-2xl border border-orange-100 flex gap-4 items-start">
                <Camera className="text-orange-500 flex-shrink-0" size={24} />
                <div>
                    <p className="text-sm font-bold text-[#005a31] uppercase">South Korea Biometric Standards</p>
                    <p className="text-xs text-gray-500 mt-1">
                        Photos must be **rectangular** and have **full width and height** inside the box. White background is strictly required, with the face taking up 70-80% of the frame.
                    </p>
                </div>
              </div>
            </section>

            {/* 7. FAQ SECTION */}
            <section>
                <div className="flex items-center gap-4 mb-10">
                    <HelpCircle size={32} className="text-orange-500" />
                    <h2 className="text-3xl font-black text-[#005a31] uppercase tracking-tight">Korean Visa Insights</h2>
                </div>
                <div className="divide-y divide-gray-100">
                    <FAQItem 
                        question="Is the K-ETA the same as a visa?" 
                        answer="No. K-ETA is an electronic travel authorization for visa-exempt nationalities. If your country is not on the list, you must apply for a C-3 sticker visa."
                    />
                    <FAQItem 
                        question="How much balance do I need in my bank account?" 
                        answer="While there is no fixed amount, your balance should comfortably cover your travel expenses (usually $3,000 - $5,000+) and reflect your income level."
                    />
                    <FAQItem 
                        question="Do I get a sticker in my passport?" 
                        answer="Most Korean embassies and KVACs now issue a 'Visa Grant Notice' (PDF) instead of a physical sticker. You must print this and carry it with you."
                    />
                </div>
            </section>

          </div>

          {/* --- 8. SIDEBAR --- */}
          <aside className="space-y-8 lg:sticky lg:top-10">
            <div className="bg-[#005a31] text-white p-10 rounded-[3rem] shadow-2xl overflow-hidden relative group">
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-white/5 rounded-full group-hover:scale-125 transition-transform duration-1000"></div>
              <h3 className="text-2xl font-black mb-8 border-b border-white/10 pb-4 italic text-orange-400">Expert Desk</h3>
              <div className="space-y-8 text-sm">
                <ContactLink label="UAE & GCC Support" href="tel:+971507078334" text="+971 50 707 8334" highlight />
                <ContactLink label="Armenia Office" href="tel:+37494810585" text="+374 94 810585" />
                <ContactLink label="BD Hotline" href="tel:+8801701699743" text="+880 1701 699 743" />
                <ContactLink label="Corporate Email" href="mailto:info@eammu.com" text="info@eammu.com" />
              </div>
              <a href="https://wa.me/971507078334" className="mt-12 block w-full bg-orange-500 text-white text-center py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-[#005a31] transition-all duration-500 shadow-xl">
                Chat with Specialist
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

export default SouthKoreaVisa;