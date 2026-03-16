import React from "react";
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, ClipboardList, Send, Globe, ShieldCheck, 
  FileText, Flower, HelpCircle, Clock, Wallet, Info, 
  TrendingUp, PlayCircle, Image as ImageIcon, Map, Camera
} from 'lucide-react';

const JapanVisa = () => {
  return (
    <>
      <Helmet>
        <title>Japan Visa Application From Bangladesh | Study Japan From Bangladesh | Study in Japan</title>
        <meta name="description" content="Apply for Japan tourist and Student visas From Bangladesh. Professional assistance with Koteihyo (Itinerary) preparation, E-Visa portal, and embassy submissions for 2026." />
        <link rel="canonical" href="https://eammu.com/visa-services/japan-visa-application" />
      </Helmet>

      <main className="bg-white min-h-screen font-sans text-slate-900">
        
        {/* --- 1. HERO SECTION --- */}
        <section className="bg-[#005a31] py-24 px-6 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 flex items-center justify-center">
             <Flower size={500} className="text-white" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="flex justify-center gap-2 mb-6">
                <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                    Japan Travel Specialist
                </span>
                <span className="bg-white/20 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                    E-Visa & Sticker Support
                </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase leading-tight">
              Japan <span className="text-orange-500">Visa</span> Application
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto font-light leading-relaxed">
              Experience the perfect harmony of ancient tradition and futuristic technology with our expert Japan visa consultancy From India and Bangladesh.
            </p>
          </div>
        </section>

        {/* --- 2. QUICK METRIC BOXES --- */}
        <section className="max-w-7xl mx-auto -mt-12 px-6 relative z-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <MetricBox label="Japan Visa Processing Time" value="10 - 15 Days" icon={<Clock size={20}/>} />
                <MetricBox label="Japan Visa Approval Rate" value="97.8%" icon={<TrendingUp size={20}/>} />
                <MetricBox label="Japan E-Visa Status" value="Available" icon={<Globe size={20}/>} />
                <MetricBox label="Japan Visa Service Fee" value="Competitive" icon={<Wallet size={20}/>} />
            </div>
        </section>

        {/* --- 3. VIDEO GALLERY --- */}
        <section className="bg-slate-50 py-24 px-6 mt-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-12">
              <div className="flex items-center gap-3 mb-4">
                <PlayCircle className="text-orange-500" size={32} />
                <h2 className="text-4xl font-black text-[#005a31] uppercase">Japan Visa Application Guide</h2>
              </div>
              <p className="text-gray-500 text-center max-w-2xl italic font-medium">Watch our tutorials on filling the Japan Visa Application form and preparing your daily travel itinerary.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <VideoCard 
                id="JAPAN_E_VISA_2026" 
                title="E-Visa Portal Walkthrough" 
                desc="A complete guide for UAE and international residents applying via the Japan E-Visa system."
              />
              <VideoCard 
                id="KOTEIHYO_EXPLAINED" 
                title="Itinerary Preparation" 
                desc="How to write a professional 'Schedule of Stay' (Koteihyo) that satisfies the Japanese Embassy."
              />
              <VideoCard 
                id="JAPAN_DOCS_2026" 
                title="Financial Requirements" 
                desc="Understanding the bank statement and income certificate standards for Japan tourist visas."
              />
            </div>
          </div>
        </section>

        {/* --- 4. CATEGORY POSTERS --- */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-12 border-b border-gray-100 pb-6">
              <ImageIcon className="text-orange-500" size={32} />
              <h2 className="text-4xl font-black text-[#005a31] uppercase">Japan Visa Application Categories</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PosterCard 
                image="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e" 
                badge="Tourism" 
                title="Sightseeing" 
                detail="15/30 Day Entry"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1526481280693-3bfa756160f7" 
                badge="Corporate" 
                title="Business" 
                detail="Meetings & Trade"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1545569341-9eb8b30979d9" 
                badge="Family" 
                title="Visit Visa" 
                detail="Invite from Japan"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d" 
                badge="Special" 
                title="Cultural" 
                detail="Art & Training"
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
                <h2 className="text-3xl font-black text-[#005a31] uppercase tracking-tight">Japan Application Procedure</h2>
              </div>
              
              <div className="space-y-10">
                <StepItem 
                  number="01" 
                  title="Route Selection" 
                  desc="We determine if you qualify for the Japan E-Visa (residents of UAE, USA, UK, etc.) or if a physical sticker visa via the Embassy is required." 
                />
                <StepItem 
                  number="02" 
                  title="Itinerary (Koteihyo) Crafting" 
                  desc="The Japanese Embassy requires a day-by-day plan. We create a professional Schedule of Stay that matches your flight and hotel bookings." 
                />
                <StepItem 
                  number="03" 
                  title="Document Review" 
                  desc="Our team audits your financial proof and NOC to ensure they meet the specific 'Rising Sun' standards of accuracy." 
                />
                <StepItem 
                  number="04" 
                  title="Submission & Monitoring" 
                  desc="We handle the submission through the E-Visa portal or at the authorized Japan Visa Application Centre (JVAC)." 
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
                <h2 className="text-3xl font-black text-[#005a31] uppercase tracking-tight">Japan Visa Document Checklist</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <RequirementCard text="Original Passport (6M+ validity)" />
                <RequirementCard text="Japan Visa Application Form (Duly signed)" />
                <RequirementCard text="Rectangular Color Photo (2x2 inch)" />
                <RequirementCard text="Personal Bank Statement (6 Months)" />
                <RequirementCard text="Detailed Schedule of Stay (Koteihyo)" />
                <RequirementCard text="Employment Letter / NOC" />
                <RequirementCard text="Flight Itinerary (Reservation)" />
                <RequirementCard text="Hotel Confirmation (Voucher)" />
                <RequirementCard text="Valid Residency Copy (For Non-Nationals)" />
                <RequirementCard text="Proof of Income / Tax Documents" />
              </div>

              {/* Photo Note */}
              <div className="mt-12 p-6 bg-white rounded-2xl border border-orange-100 flex gap-4 items-start">
                <Camera className="text-orange-500 flex-shrink-0" size={24} />
                <div>
                    <p className="text-sm font-bold text-[#005a31] uppercase">Japan Visa Photo Standards</p>
                    <p className="text-xs text-gray-500 mt-1">
                        Ensure your photo is <strong>rectangular</strong> and shows your <strong>full face</strong> with clarity. The Japanese Ministry is very specific about head dimensions; we will assist in formatting this correctly.
                    </p>
                </div>
              </div>
            </section>

            {/* 7. FAQ SECTION */}
            <section>
                <div className="flex items-center gap-4 mb-10">
                    <HelpCircle size={32} className="text-orange-500" />
                    <h2 className="text-3xl font-black text-[#005a31] uppercase tracking-tight">Japan Visa Application FAQs</h2>
                </div>
                <div className="divide-y divide-gray-100">
                    <FAQItem 
                        question="Who is eligible for the Japan E-Visa?" 
                        answer="Currently, residents of several countries including the UAE, Saudi Arabia, UK, and USA can apply for a Japan tourist visa online (E-Visa) for 90 days."
                    />
                    <FAQItem 
                        question="What is the 'Koteihyo' and why is it important?" 
                        answer="It is a mandatory daily travel plan. It must list every activity, city, and contact number for each day of your stay. We help prepare this professionally."
                    />
                    <FAQItem 
                        question="How much balance should I maintain in my bank statement?" 
                        answer="While there is no fixed rule, it is recommended to show enough to cover your flights, hotels, and roughly $100-$150 per day of your stay."
                    />
                </div>
            </section>

          </div>

          {/* --- 8. SIDEBAR --- */}
          <aside className="space-y-8 lg:sticky lg:top-10">
            <div className="bg-[#005a31] text-white p-10 rounded-[3rem] shadow-2xl overflow-hidden relative group">
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-white/5 rounded-full group-hover:scale-125 transition-transform duration-1000"></div>
              <h3 className="text-2xl font-black mb-8 border-b border-white/10 pb-4 italic text-orange-400">Japan Experts</h3>
              <div className="space-y-8 text-sm">
                <ContactLink label="UAE & GCC Support" href="tel:+971507078334" text="+971 50 707 8334" highlight />
                <ContactLink label="Armenia (Main Office)" href="tel:+37494810585" text="+374 94 810585" />
                <ContactLink label="Bangladesh Hotline" href="tel:+8801701699743" text="+880 1701 699 743" />
                <ContactLink label="Email Inquiries" href="mailto:info@eammu.com" text="info@eammu.com" />
              </div>
              <a href="https://wa.me/37494810585" className="mt-12 block w-full bg-orange-500 text-white text-center py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-[#005a31] transition-all duration-500 shadow-xl">
                Contact via WhatsApp
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

export default JapanVisa;