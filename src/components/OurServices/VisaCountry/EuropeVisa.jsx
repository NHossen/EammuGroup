import React from "react";
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, ClipboardList, Send, Globe, ShieldCheck, 
  FileText, HelpCircle, Clock, Wallet, Info, 
  TrendingUp, PlayCircle, Image as ImageIcon, Map, Building2 
} from 'lucide-react';

const EuropeVisa = () => {
  return (
    <>
      <Helmet>
        <title>Europe Visa Application From India | Schengen Visa Application Bangladesh</title>
        <meta name="description" content="Apply for Schengen tourist Visa, business, or family visas for 2026. Expert guidance for 27 European countries with VFS & Embassy appointment support From India." />
        <link rel="canonical" href="https://eammu.com/europe-visa-application" />
      </Helmet>

      <main className="bg-white min-h-screen font-sans text-slate-900">
        
        {/* --- 1. HERO SECTION --- */}
        <section className="bg-[#005a31] py-24 px-6 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 flex items-center justify-center">
             <Map size={500} className="text-white" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="flex justify-center gap-2 mb-6">
                <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                    Schengen Area Specialist
                </span>
                <span className="bg-white/20 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                    VFS Global & Embassy Expert
                </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase leading-tight">
              Europe <span className="text-orange-500">Visa</span> Application Steps
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto font-light leading-relaxed">
              One visa, 27 countries. Navigate the complexities of European immigration with our premium documentation and appointment services by Eammu Holidays From Bangladesh.
            </p>
          </div>
        </section>

        {/* --- 2. VIDEO GALLERY --- */}
        <section className="bg-slate-50 py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-12">
              <div className="flex items-center gap-3 mb-4">
                <PlayCircle className="text-orange-500" size={32} />
                <h2 className="text-4xl font-black text-[#005a31] uppercase">Schengen Visual Guide</h2>
              </div>
              <p className="text-gray-500 text-center max-w-2xl italic font-medium">Step-by-step tutorials on mastering the 2026 Schengen application process.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <VideoCard 
                id="SCHENGEN_VFS_2026" 
                title="VFS Appointment Guide" 
                desc="How to successfully book and prepare for your biometrics appointment at VFS Global."
              />
              <VideoCard 
                id="EUROPE_PHOTO_RULES" 
                title="Biometric Photo Standards" 
                desc="Critical guide on capturing rectangular, full-frame photos for EU visa compliance."
              />
              <VideoCard 
                id="SOP_WRITING_TIPS" 
                title="SOP & Itinerary Planning" 
                desc="How to write a high-approval Statement of Purpose and day-by-day travel plan."
              />
            </div>
          </div>
        </section>

        {/* --- 3. CATEGORY GALLERY --- */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-12 border-b border-gray-100 pb-6">
              <ImageIcon className="text-orange-500" size={32} />
              <h2 className="text-4xl font-black text-[#005a31] uppercase">Europe Visa Categories</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PosterCard 
                image="https://images.unsplash.com/photo-1467269204594-9661b134dd2b" 
                badge="Tourism" 
                title="Short Stay" 
                detail="90/180 Days Rule"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1520967824495-b529aeba26df" 
                badge="Business" 
                title="MICE / Trade" 
                detail="Corporate Stream"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1493134630715-9c44583b3d5a" 
                badge="Family" 
                title="Visitor Visa" 
                detail="Private Invitation"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1527631746610-bca00a040d60" 
                badge="Multi-Entry" 
                title="Frequent Flyer" 
                detail="1 to 5 Year Validity"
              />
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          
          <div className="lg:col-span-2 space-y-24">
            
            {/* Quick Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <MetricBox label="Avg. Processing" value="15 - 30 Days" icon={<Clock size={20}/>} />
                <MetricBox label="Approval Rate" value="High Guidance" icon={<TrendingUp size={20}/>} />
                <MetricBox label="Insurance" value="€30,000 Min." icon={<ShieldCheck size={20}/>} />
                <MetricBox label="Territory" value="27 Countries" icon={<Globe size={20}/>} />
            </div>

            {/* 4. PROCEDURE SECTION */}
            <section id="procedure">
              <div className="flex items-center gap-4 mb-10 border-b border-gray-100 pb-4">
                <div className="bg-orange-500 p-3 rounded-2xl text-white">
                  <Send size={28} />
                </div>
                <h2 className="text-3xl font-black text-[#005a31] uppercase tracking-tight">Schengen Application Procedure</h2>
              </div>
              
              <div className="space-y-10">
                <StepItem 
                  number="01" 
                  title="Country Selection" 
                  desc="Identify your main destination to determine the correct Embassy jurisdiction for your application." 
                />
                <StepItem 
                  number="02" 
                  title="Document Preparation" 
                  desc="We compile your bank statements, NOC, travel insurance, and hotel/flight bookings into a professional file." 
                />
                <StepItem 
                  number="03" 
                  title="Biometric Appointment" 
                  desc="We secure your slot at VFS Global or the Embassy and prepare you for the finger-printing process." 
                />
                <StepItem 
                  number="04" 
                  title="Visa Issuance" 
                  desc="The Consulate processes your passport. Once approved, you can travel freely across the entire Schengen zone." 
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
                <h2 className="text-3xl font-black text-[#005a31] uppercase tracking-tight">Schengen Requirement Checklist</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <RequirementCard text="Original Passport (6M+ validity)" />
                <RequirementCard text="Rectangular Biometric Photo (White BG)" />
                <RequirementCard text="Personal & Company Bank Statements" />
                <RequirementCard text="Job NOC or Business Trade License" />
                <RequirementCard text="Travel Health Insurance (€30k Cover)" />
                <RequirementCard text="Detailed Day-to-Day Itinerary" />
              </div>
              
              {/* Photo Note */}
              <div className="mt-8 p-6 bg-white rounded-2xl border border-orange-100 flex gap-4 items-start">
                <Info className="text-orange-500 flex-shrink-0" size={24} />
                <div>
                    <p className="text-sm font-bold text-[#005a31] uppercase"> Schengen Photo Compliance Warning</p>
                    <p className="text-xs text-gray-500 mt-1">
                        Schengen scanners are extremely sensitive. Photos must be <strong>rectangular</strong> and have <strong>full width and height</strong> inside the frame. Ensure no shadows and a neutral expression.
                    </p>
                </div>
              </div>
            </section>

            {/* 6. FAQ SECTION */}
            <section>
                <div className="flex items-center gap-4 mb-10">
                    <HelpCircle size={32} className="text-orange-500" />
                    <h2 className="text-3xl font-black text-[#005a31] uppercase tracking-tight">Schengen Visa FAQs</h2>
                </div>
                <div className="divide-y divide-gray-100">
                    <FAQItem 
                        question="How early can I apply for a Schengen visa?" 
                        answer="You can apply up to 6 months before your intended travel date. We recommend applying at least 45 days in advance."
                    />
                    <FAQItem 
                        question="Which country should I apply to?" 
                        answer="You must apply to the country where you will spend the most nights. If spending equal time, apply to the country of first entry."
                    />
                    <FAQItem 
                        question="Is health insurance mandatory?" 
                        answer="Yes, it is a strict requirement. The policy must cover at least €30,000 for medical emergencies and repatriation across all Schengen states."
                    />
                </div>
            </section>

          </div>

          {/* --- 7. SIDEBAR --- */}
          <aside className="space-y-8 lg:sticky lg:top-10">
            <div className="bg-[#005a31] text-white p-10 rounded-[3rem] shadow-2xl overflow-hidden relative group">
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-white/5 rounded-full group-hover:scale-125 transition-transform duration-1000"></div>
              <h3 className="text-2xl font-black mb-8 border-b border-white/10 pb-4 italic text-orange-400">Europe Visa Support</h3>
              <div className="space-y-8 text-sm">
                <ContactLink label="Armenia Branch (Direct)" href="tel:+37494810585" text="+374 94 810585" highlight />
                <ContactLink label="UAE Office" href="tel:+971507078334" text="+971 50 707 8334" />
                <ContactLink label="Bangladesh Branch" href="tel:+8801701699743" text="+880 1701 699 743" />
                <ContactLink label="Official Email" href="mailto:info@eammu.com" text="info@eammu.com" />
              </div>
              <a href="https://wa.me/37494810585" className="mt-12 block w-full bg-orange-500 text-white text-center py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-[#005a31] transition-all duration-500 shadow-xl">
                Inquire on WhatsApp
              </a>
            </div>
            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center">
              <ShieldCheck size={40} className="text-[#005a31] mb-4" />
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Global Expertise Partner</p>
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

export default EuropeVisa;