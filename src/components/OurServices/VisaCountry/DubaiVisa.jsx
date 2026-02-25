import React from "react";
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, ClipboardList, Send, Globe, ShieldCheck, 
  FileText, Landmark, HelpCircle, Clock, Wallet, Info, 
  Briefcase, MapPin, TrendingUp, PlayCircle, 
  Image as ImageIcon, Compass, Building2, Plane, Camera
} from 'lucide-react';

const DubaiVisa = () => {
  return (
    <>
      <Helmet>
        <title>Online Travel Agent Dubai | Dubai Visa Application From India | Online Travel Agency India</title>
        <meta name="description" content="Apply for Dubai tourist Visa, business Visa, or 5-year multi-entry visas. Official UAE processing partner with 24-72 hour approval for global applicants." />
        <link rel="canonical" href="https://eammu.com/dubai-visa-application" />
      </Helmet>

      <main className="bg-white min-h-screen font-sans text-slate-900">
        
        {/* --- 1. HERO SECTION --- */}
        <section className="bg-[#005a31] py-24 px-6 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 flex items-center justify-center">
             <Building2 size={500} className="text-white" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="flex justify-center gap-2 mb-6">
                <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                    Official UAE Visa Partner
                </span>
                <span className="bg-white/20 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                    GDRFA & ICP Portal Specialist
                </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase leading-tight">
              Dubai <span className="text-orange-500">Visa</span> Application
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto font-light leading-relaxed">
              Experience seamless entry to the UAE. 100% digital processing with 24-72 hour approval, managed directly by Eammu Holidays.
            </p>
          </div>
        </section>

        {/* --- 2. VIDEO GALLERY --- */}
        <section className="bg-slate-50 py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-12">
              <div className="flex items-center gap-3 mb-4">
                <PlayCircle className="text-orange-500" size={32} />
                <h2 className="text-4xl font-black text-[#005a31] uppercase">Dubai Visa Application Guide</h2>
              </div>
              <p className="text-gray-500 text-center max-w-2xl italic font-medium">Watch these tutorials to understand the 2026 digital application process.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <VideoCard 
                id="DUBAI_PORTAL_2026" 
                title="E-Visa Application Guide" 
                desc="A walkthrough of the official GDRFA and ICP portals for tourist applications."
              />
              <VideoCard 
                id="DUBAI_PHOTO_FIX" 
                title="Photo Specification Rules" 
                desc="Critical guide on capturing rectangular photos that meet UAE immigration AI standards."
              />
              <VideoCard 
                id="DUBAI_5YR_GUIDE" 
                title="5-Year Multi-Entry Visa" 
                desc="Everything you need to know about the long-term tourist residency stream."
              />
            </div>
          </div>
        </section>

        {/* --- 3. POSTER GALLERY --- */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-12 border-b border-gray-100 pb-6">
              <ImageIcon className="text-orange-500" size={32} />
              <h2 className="text-4xl font-black text-[#005a31] uppercase">Dubai Visa Category Streams</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PosterCard 
                image="https://images.unsplash.com/photo-1512453979798-5ea266f8880c" 
                badge="Tourist" 
                title="30 Days" 
                detail="Single Entry Visit"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1518684079-3c830dcef090" 
                badge="Business" 
                title="60 Days" 
                detail="Trade & Commerce"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1546412414-e188526159ca" 
                badge="Premium" 
                title="5-Year Multi" 
                detail="Self-Sponsorship"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1580674239581-39bd17a35dc0" 
                badge="Express" 
                title="96H Transit" 
                detail="Stopover Specialist"
              />
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          
          <div className="lg:col-span-2 space-y-24">
            
            {/* Quick Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <MetricBox label="Avg. Processing" value="24 - 72 Hours" icon={<Clock size={20}/>} />
                <MetricBox label="Success Rate" value="99.4%" icon={<TrendingUp size={20}/>} />
                <MetricBox label="Insurance" value="COVID-Inclusive" icon={<ShieldCheck size={20}/>} />
                <MetricBox label="Application" value="100% Digital" icon={<Globe size={20}/>} />
            </div>

            {/* 4. PROCEDURE SECTION */}
            <section id="procedure">
              <div className="flex items-center gap-4 mb-10 border-b border-gray-100 pb-4">
                <div className="bg-orange-500 p-3 rounded-2xl text-white">
                  <Send size={28} />
                </div>
                <h2 className="text-3xl font-black text-[#005a31] uppercase tracking-tight">Application Procedure</h2>
              </div>
              
              <div className="space-y-10">
                <StepItem 
                  number="01" 
                  title="Document Selection" 
                  desc="Identify your travel purpose (30 or 60 days) and send us your clear Passport copy and Digital Photo via WhatsApp or Email." 
                />
                <StepItem 
                  number="02" 
                  title="Portal Submission" 
                  desc="Our Dubai office submits your data directly to the GDRFA or ICP portals, including the mandatory UAE health insurance." 
                />
                <StepItem 
                  number="03" 
                  title="Fast Approval" 
                  desc="UAE Immigration processes the application. Most E-Visas are granted within 48 hours and sent to you as a high-quality PDF." 
                />
                <StepItem 
                  number="04" 
                  title="Entry & Verification" 
                  desc="Print your E-Visa and present it at the airport. The visa is electronically linked to your passport for seamless clearance." 
                />
              </div>
            </section>

            {/* 5. REQUIREMENTS SECTION */}
            <section className="bg-slate-50 p-10 md:p-14 rounded-[3rem] border border-slate-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <FileText size={120} className="text-[#005a31]" />
              </div>
              <div className="flex items-center gap-4 mb-10">
                <div className="bg-[#005a31] p-3 rounded-2xl text-white shadow-lg">
                  <ClipboardList size={28} />
                </div>
                <h2 className="text-3xl font-black text-[#005a31] uppercase tracking-tight">Dubai Visa Requirement Checklist</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <RequirementCard text="Passport Copy (Bio page, 6M+ validity)" />
                <RequirementCard text="Rectangular Photo (Full width/height)" />
                <RequirementCard text="Confirmed Return Flight Ticket" />
                <RequirementCard text="National ID / Residency Proof" />
                <RequirementCard text="Parent's Passport (For Minors)" />
                <RequirementCard text="Previous UAE Visa copy (If any)" />
              </div>
              
              {/* Special Photo Note */}
              <div className="mt-8 p-6 bg-white rounded-2xl border border-orange-100 flex gap-4 items-start">
                <Info className="text-orange-500 flex-shrink-0" size={24} />
                <div>
                    <p className="text-sm font-bold text-[#005a31] uppercase">Critical Photo Requirement</p>
                    <p className="text-xs text-gray-500 mt-1">
                        Dubai immigration AI is very strict. Photos must be <strong>rectangular</strong> and have <strong>full width and height</strong> inside the box. Square crops or cut-off heads will cause immediate rejection.
                    </p>
                </div>
              </div>
            </section>

            {/* 6. FAQ SECTION */}
            <section>
                <div className="flex items-center gap-4 mb-10">
                    <HelpCircle size={32} className="text-orange-500" />
                    <h2 className="text-3xl font-black text-[#005a31] uppercase tracking-tight">Dubai Visa Application FAQs</h2>
                </div>
                <div className="divide-y divide-gray-100">
                    <FAQItem 
                        question="Is a physical interview required for a Dubai visa?" 
                        answer="No. The process is 100% electronic. You do not need to visit an embassy or provide fingerprints for a standard tourist visa."
                    />
                    <FAQItem 
                        question="Does the visa fee include health insurance?" 
                        answer="Yes, at Eammu Holidays, all our quotes include the mandatory UAE-approved medical insurance that covers emergencies and COVID-19."
                    />
                    <FAQItem 
                        question="Can I extend my visa without leaving the UAE?" 
                        answer="Yes, we can process a 'Status Change' or extension while you are inside the UAE. Contact our Dubai office 5 days before your visa expires."
                    />
                </div>
            </section>

          </div>

          {/* --- 7. SIDEBAR (MATCHES AUSTRALIA EXACTLY) --- */}
          <aside className="space-y-8 lg:sticky lg:top-10">
            <div className="bg-[#005a31] text-white p-10 rounded-[3rem] shadow-2xl overflow-hidden relative group">
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-white/5 rounded-full group-hover:scale-125 transition-transform duration-1000"></div>
              <h3 className="text-2xl font-black mb-8 border-b border-white/10 pb-4 italic text-orange-400">Dubai Support</h3>
              <div className="space-y-8 text-sm">
                <ContactLink label="Dubai Office (Direct)" href="tel:+971507078334" text="+971 50 707 8334" highlight />
                <ContactLink label="Bangladesh Branch" href="tel:+8801701699743" text="+880 1701 699 743" />
                <ContactLink label="Armenia Branch" href="tel:+37494810585" text="+374 94 810585" />
                <ContactLink label="Official Email" href="mailto:info@eammu.com" text="info@eammu.com" />
              </div>
              <a href="https://wa.me/971507078334" className="mt-12 block w-full bg-orange-500 text-white text-center py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-[#005a31] transition-all duration-500 shadow-xl">
                Inquire on WhatsApp
              </a>
            </div>
            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center">
              <ShieldCheck size={40} className="text-[#005a31] mb-4" />
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Official Visa Processing Partner</p>
              <p className="text-[#005a31] font-black text-xl italic tracking-tighter uppercase">Eammu Holidays</p>
            </div>
          </aside>
        </section>
      </main>
    </>
  );
};

// --- Helper Components (Same logic as Australia) ---
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
    <div className="bg-orange-100 p-1 rounded-full group-hover:bg-[#005a31] transition-colors"><CheckCircle size={16} className="text-orange-600 group-hover:text-white" /></div>
    <span className="text-gray-700 font-bold text-sm leading-tight">{text}</span>
  </div>
);

const MetricBox = ({ label, value, icon }) => (
    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col items-center justify-center text-center">
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

export default DubaiVisa;