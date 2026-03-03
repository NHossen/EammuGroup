import React from "react";
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, ClipboardList, Send, Globe, ShieldCheck, 
  FileText, Landmark, HelpCircle, Clock, Wallet, Info, 
  TrendingUp, PlayCircle, Image as ImageIcon, Camera, Map
} from 'lucide-react';

const BrazilVisa = () => {
  return (
    <>
      <Helmet>
        <title>Brazil Visa Application From Dubai | Tourist & Business Visa 2026</title>
        <meta name="description" content="Apply for your Brazil Tourist visa or e-Visa in 2026. Expert consultancy for VFS appointments, document verification, and fast-track processing for Dubai residents." />
        <link rel="canonical" href="https://eammu.com/brazil-visa-application" />
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
                    Consular Partner
                </span>
                <span className="bg-white/20 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                    VFS Global Specialist
                </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase leading-tight">
              Federative Republic of <span className="text-orange-500">Brazil</span> Visa
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto font-light leading-relaxed">
              From the Amazon rainforest to the beaches of Rio. Navigate the Brazilian visa system for tourism, business, or digital nomad stays with expert precision.
            </p>
          </div>
        </section>

        {/* --- 2. QUICK METRIC BOXES --- */}
        <section className="max-w-7xl mx-auto -mt-12 px-6 relative z-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <MetricBox label="Decision Time" value="10 - 15 Working Days" icon={<Clock size={20}/>} />
                <MetricBox label="Visa Category" value="VIVIS / Visitor" icon={<FileText size={20}/>} />
                <MetricBox label="New Rule 2026" value="Reciprocity e-Visa" icon={<Globe size={20}/>} />
                <MetricBox label="Partner" value="VFS Global" icon={<Landmark size={20}/>} />
            </div>
        </section>

        {/* --- 3. VIDEO TUTORIALS --- */}
        <section className="bg-slate-50 py-24 px-6 mt-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-12">
              <div className="flex items-center gap-3 mb-4">
                <PlayCircle className="text-orange-500" size={32} />
                <h2 className="text-4xl font-black text-[#005a31] uppercase">Brazil Visa Insights</h2>
              </div>
              <p className="text-gray-500 text-center max-w-2xl italic font-medium">Expert tutorials on the SCEDV portal, VFS appointment booking, and the 2026 reciprocity visa rules.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <VideoCard 
                id="BRAZIL_VISIT_VISA" 
                title="The VIVIS Guide" 
                desc="A deep dive into the requirements for the standard visitor visa for tourism and short-term business."
              />
              <VideoCard 
                id="BRAZIL_E_VISA_2026" 
                title="Electronic Visa (e-Visa)" 
                desc="Checking eligibility for the online visa system for US, Canadian, and Australian passport holders."
              />
              <VideoCard 
                id="VFS_BRAZIL_DUBAI" 
                title="VFS Submission Process" 
                desc="How to prepare your physical file and what to expect during your biometrics appointment in Dubai."
              />
            </div>
          </div>
        </section>

        {/* --- 4. CATEGORY POSTERS --- */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-12 border-b border-gray-100 pb-6">
              <ImageIcon className="text-orange-500" size={32} />
              <h2 className="text-4xl font-black text-[#005a31] uppercase">Brazilian Pathways</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PosterCard 
                image="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5" 
                badge="Tourism" 
                title="Visitor Visa" 
                detail="Up to 90 Days Stay"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f" 
                badge="Business" 
                title="VIVIS Business" 
                detail="Meetings & Events"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1518112166137-85899efda583" 
                badge="Remote Work" 
                title="Digital Nomad" 
                detail="VITEM XIV Route"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1596739814452-911c42f06f97" 
                badge="Family" 
                title="Family Reunion" 
                detail="VITEM XI Permit"
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
                  title="SCEDV Portal Entry" 
                  desc="Filling the online protocol form and uploading the mandatory document set to the Ministry's system." 
                />
                <StepItem 
                  number="02" 
                  title="VFS Appointment" 
                  desc="Scheduling your slot at VFS Global Dubai for document submission and biometric data capture." 
                />
                <StepItem 
                  number="03" 
                  title="Consular Review" 
                  desc="Your file is transmitted to the Brazilian Consulate for final evaluation and visa stamping." 
                />
                <StepItem 
                  number="04" 
                  title="Passport Retrieval" 
                  desc="Tracking your application status and collecting your passport once the visa sticker is applied." 
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
                <RequirementCard text="Original Passport (valid for 6 months)" />
                <RequirementCard text="Signed Visa Request Form (RER)" />
                <RequirementCard text="UAE Residency (at least 3 months validity)" />
                <RequirementCard text="Personal Bank Statements (Last 3 Months)" />
                <RequirementCard text="NOC Letter from Employer in UAE" />
                <RequirementCard text="Confirmed Round-trip Flight Tickets" />
                <RequirementCard text="Hotel Reservation or Invitation Letter" />
                <RequirementCard text="2 Rectangular Biometric Photos (5x7 or 3.5x4.5)" />
                <RequirementCard text="Yellow Fever Certificate (If applicable)" />
                <RequirementCard text="Birth Certificate (Required for Minors)" />
              </div>

              {/* Photo Note */}
              <div className="mt-12 p-6 bg-white rounded-2xl border border-orange-100 flex gap-4 items-start">
                <Camera className="text-orange-500 flex-shrink-0" size={24} />
                <div>
                    <p className="text-sm font-bold text-[#005a31] uppercase">Brazilian Photo Standards</p>
                    <p className="text-xs text-gray-500 mt-1">
                        Photos must be **rectangular** and have **full width and height** within the frame. The face must occupy 70-80% of the photo with a white background.
                    </p>
                </div>
              </div>
            </section>

            {/* 7. FAQ SECTION */}
            <section>
                <div className="flex items-center gap-4 mb-10">
                    <HelpCircle size={32} className="text-orange-500" />
                    <h2 className="text-3xl font-black text-[#005a31] uppercase tracking-tight">Brazil Visa FAQ</h2>
                </div>
                <div className="divide-y divide-gray-100">
                    <FAQItem 
                        question="Do I need a Yellow Fever vaccine?" 
                        answer="While not always mandatory for entry, it is highly recommended if visiting rural areas or if you are arriving from specific risk zones."
                    />
                    <FAQItem 
                        question="Is there an e-Visa for UAE residents?" 
                        answer="The e-Visa is currently based on nationality (e.g., USA, Australia). Other residents in the UAE must apply via the VFS Global center."
                    />
                    <FAQItem 
                        question="Can I extend my stay in Brazil?" 
                        answer="Visitor visas can typically be extended for an additional 90 days at the Federal Police (Polícia Federal) office within Brazil."
                    />
                </div>
            </section>

          </div>

          {/* --- 8. SIDEBAR --- */}
          <aside className="space-y-8 lg:sticky lg:top-10">
            <div className="bg-[#005a31] text-white p-10 rounded-[3rem] shadow-2xl overflow-hidden relative group">
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-white/5 rounded-full group-hover:scale-125 transition-transform duration-1000"></div>
              <h3 className="text-2xl font-black mb-8 border-b border-white/10 pb-4 italic text-orange-400">Brazil Desk</h3>
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

export default BrazilVisa;