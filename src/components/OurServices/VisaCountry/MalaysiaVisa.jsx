import React from "react";
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, ClipboardList, Send, Globe, ShieldCheck, 
  FileText, Landmark, Palmtree, HelpCircle, Clock, Wallet, Info, 
  Briefcase, Coffee, MapPin, TrendingUp, PlayCircle, Image as ImageIcon, Compass, Map
} from 'lucide-react';

const MalaysiaVisa = () => {
  return (
    <>
      <Helmet>
        <title>Malaysia Visa 2026: Requirements, MDAC Guide & Fees | Eammu Holidays</title>
        <meta 
          name="description" 
          content="Official 2026 guide for Malaysia e-Visa and MDAC. Apply for Tourist, Social Visit, or Digital Nomad (DE Rantau) visas with Eammu Holidays experts." 
        />
        <meta 
          name="keywords" 
          content="Malaysia visa 2026, Malaysia Digital Arrival Card, MDAC registration, Malaysia e-visa for Indians, Malaysia visa for UAE residents, DE Rantau visa, Eammu Holidays" 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://eammu.com/malaysia-visa-application" />
      </Helmet>

      <main className="bg-white min-h-screen font-sans text-slate-900">
        
        {/* --- HERO SECTION --- */}
        <section className="bg-[#005a31] py-24 px-6 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 flex items-center justify-center">
             <Landmark size={500} className="text-white" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="flex justify-center gap-2 mb-6">
                <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                    Official e-Visa Portal Support
                </span>
                <span className="bg-white/20 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                    MDAC Specialist 2026
                </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase leading-tight">
              Truly <span className="text-orange-500">Malaysia</span> 2026
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto font-light leading-relaxed">
              Navigate the new digital entry requirements with ease. Expert processing for e-Visas, Digital Nomad passes, and mandatory MDAC filing.
            </p>
          </div>
        </section>

        {/* --- VIDEO TUTORIALS SECTION --- */}
        <section className="bg-slate-50 py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-12">
              <div className="flex items-center gap-3 mb-4">
                <PlayCircle className="text-orange-500" size={32} />
                <h2 className="text-4xl font-black text-[#005a31] uppercase">Malaysia Visual Guide</h2>
              </div>
              <p className="text-gray-500 text-center max-w-2xl italic">Essential 2026 tutorials for a smooth journey to Kuala Lumpur and beyond.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <VideoCard 
                id="qH_e6PzP_kM" 
                title="MDAC Registration Guide" 
                desc="How to complete the Malaysia Digital Arrival Card within the mandatory 3-day window."
              />
              <VideoCard 
                id="k-fC_TjE8D0" 
                title="Malaysia e-Visa 2026" 
                desc="A walkthrough of the official portal for Tourist and Social Visit pass applications."
              />
              <VideoCard 
                id="N7X_O5q_W6U" 
                title="DE Rantau Nomad Pass" 
                desc="Exploring the 2026 updates for Malaysia's popular Digital Nomad visa program."
              />
            </div>
          </div>
        </section>

        {/* --- VISA CATEGORIES POSTERS --- */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-12 border-b border-gray-100 pb-6">
              <ImageIcon className="text-orange-500" size={32} />
              <h2 className="text-4xl font-black text-[#005a31] uppercase">Entry Permits & Passes</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PosterCard 
                image="https://images.unsplash.com/photo-1596422846543-75c6fc18a593?q=80&w=800" 
                badge="Tourism" 
                title="e-Visa (Tourist)" 
                detail="30-Day Multiple Entry"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1528181304800-2f140819ad52?q=80&w=800" 
                badge="Nomad" 
                title="DE Rantau" 
                detail="For Remote Professionals"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?q=80&w=800" 
                badge="Family" 
                title="Social Visit" 
                detail="Visiting Friends & Relatives"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=800" 
                badge="New Rule" 
                title="MDAC Card" 
                detail="Mandatory for All Travelers"
              />
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          
          <div className="lg:col-span-2 space-y-24">
            
            {/* Quick Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <MetricBox label="MDAC Window" value="72 Hours" icon={<Clock size={20}/>} />
                <MetricBox label="Visa Processing" value="2-5 Days" icon={<TrendingUp size={20}/>} />
                <MetricBox label="Approval Rate" value="99.1%" icon={<ShieldCheck size={20}/>} />
                <MetricBox label="Format" value="Digital/Paperless" icon={<Globe size={20}/>} />
            </div>

            {/* Application Procedure */}
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
                  title="Category Evaluation" 
                  desc="We check your nationality's current status (Visa-Free or e-Visa required) and the purpose of your trip to Malaysia." 
                />
                <StepItem 
                  number="02" 
                  title="e-Visa Submission" 
                  desc="For required nationalities, we handle the official Malaysian Immigration portal application, including photo editing and fee payment." 
                />
                <StepItem 
                  number="03" 
                  title="MDAC Registration" 
                  desc="Critical Step: Within 3 days of your arrival, we register your details in the Malaysia Digital Arrival Card system to generate your PDF receipt." 
                />
                <StepItem 
                  number="04" 
                  title="Immigration Clearance" 
                  desc="Clear immigration at KLIA/KLIA2 using your e-Visa printout and MDAC receipt. Biometric verification is required upon entry." 
                />
              </div>
            </section>

            {/* Requirements Section */}
            <section className="bg-slate-50 p-10 md:p-14 rounded-[3rem] border border-slate-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <FileText size={120} className="text-[#005a31]" />
              </div>
              <div className="flex items-center gap-4 mb-10">
                <div className="bg-[#005a31] p-3 rounded-2xl text-white shadow-lg">
                  <ClipboardList size={28} />
                </div>
                <h2 className="text-3xl font-black text-[#005a31] uppercase tracking-tight">Requirement Checklist 2026</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <RequirementCard text="Passport (6+ months validity)" />
                <RequirementCard text="Recent Passport Size Photo (Studio)" />
                <RequirementCard text="Confirmed Flight (Return/Onward)" />
                <RequirementCard text="Hotel Booking / Proof of Stay" />
                <RequirementCard text="Malaysia Digital Arrival Card (MDAC)" />
                <RequirementCard text="3 Months Personal Bank Statement" />
                <RequirementCard text="No Objection Certificate (NOC)" />
                <RequirementCard text="Proof of UAE/BD Residence Visa" />
                <RequirementCard text="Evidence of 500 USD available funds" />
                <RequirementCard text="Yellow Fever Cert (if from high-risk zone)" />
              </div>
            </section>

            {/* FAQ Section */}
            <section>
                <div className="flex items-center gap-4 mb-10">
                    <HelpCircle size={32} className="text-orange-500" />
                    <h2 className="text-3xl font-black text-[#005a31] uppercase tracking-tight">Malaysia Visa FAQ</h2>
                </div>
                <div className="divide-y divide-gray-100">
                    <FAQItem 
                        question="Who must register for the MDAC?" 
                        answer="Almost all international travelers are required to register for the Malaysia Digital Arrival Card (MDAC) within 3 days before arriving in Malaysia. Only Singaporeans, Diplomatic Passport holders, and Malaysian Permanent Residents are exempt."
                    />
                    <FAQItem 
                        question="How long can I stay on a Malaysia Tourist e-Visa?" 
                        answer="A standard Tourist e-Visa allows for a stay of up to 30 days. It is usually a single-entry visa, though multiple-entry options are available for specific nationalities."
                    />
                    <FAQItem 
                        question="Can I extend my 30-day e-Visa in Malaysia?" 
                        answer="Generally, e-Visas are non-extendable. However, in cases of emergency or medical reasons, you can apply for a 'Special Pass' at the Malaysian Immigration Department."
                    />
                </div>
            </section>

          </div>

          {/* Sidebar */}
          <aside className="space-y-8 lg:sticky lg:top-10">
            <div className="bg-[#005a31] text-white p-10 rounded-[3rem] shadow-2xl overflow-hidden relative group">
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-white/5 rounded-full group-hover:scale-125 transition-transform duration-1000"></div>
              <h3 className="text-2xl font-black mb-8 border-b border-white/10 pb-4 italic text-orange-400">Malaysia Support</h3>
              <div className="space-y-8 text-sm">
                <ContactLink label="Armenia Office" href="tel:+37494810585" text="+374 94 810585" />
                <ContactLink label="UAE Support" href="tel:+971507078334" text="+971 50 707 8334" highlight />
                <ContactLink label="Bangladesh Desk" href="tel:+8801701699743" text="+880 1701 699 743" />
                <ContactLink label="Global Email" href="mailto:info@eammu.com" text="info@eammu.com" />
              </div>
              <a href="https://wa.me/37494810585" className="mt-12 block w-full bg-orange-500 text-white text-center py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-[#005a31] transition-all duration-500 shadow-xl">
                Chat on WhatsApp
              </a>
            </div>
            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center">
              <ShieldCheck size={40} className="text-[#005a31] mb-4" />
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Premium Consultancy</p>
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
    <div className="p-6"><h3 className="font-black text-[#005a31] uppercase mb-2">{title}</h3><p className="text-gray-500 text-sm">{desc}</p></div>
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
      <p className="text-gray-500 leading-relaxed text-base">{desc}</p>
    </div>
  </div>
);

const RequirementCard = ({ text }) => (
  <div className="flex items-start gap-3 group">
    <div className="bg-orange-100 p-1 rounded-full group-hover:bg-[#005a31] transition-colors"><CheckCircle size={16} className="text-orange-600 group-hover:text-white" /></div>
    <span className="text-gray-700 font-medium text-sm leading-tight">{text}</span>
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
        <p className="text-gray-600 leading-relaxed pl-6 border-l-2 border-orange-200">{answer}</p>
    </div>
);

const ContactLink = ({ label, href, text, highlight }) => (
  <div className={`flex flex-col ${highlight ? 'border-l-2 border-orange-500 pl-4' : ''}`}>
    <span className="text-orange-400 text-[10px] font-black uppercase tracking-widest mb-1">{label}</span>
    <a href={href} className="text-lg font-bold hover:text-orange-300 transition-colors">{text}</a>
  </div>
);

export default MalaysiaVisa;