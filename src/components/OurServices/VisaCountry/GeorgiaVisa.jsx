import React from "react";
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, ClipboardList, Send, Globe, ShieldCheck, 
  FileText, HelpCircle, Clock, Wallet, Info, 
  TrendingUp, PlayCircle, Image as ImageIcon, Mountain, MapPin 
} from 'lucide-react';

const GeorgiaVisa = () => {
  return (
    <>
      <Helmet>
        <title>Georgia Visa Application From India | Best Travel Agent India | Tour Operator Georgia </title>
        <meta name="description" content="Apply for Georgia tourist, business, or Type D visas From India and Bangaladesh. Expert Caucasus region processing with high approval for E-Visa and sticker visa streams." />
        <link rel="canonical" href="https://eammu.com/georgia-visa-application" />
      </Helmet>

      <main className="bg-white min-h-screen font-sans text-slate-900">
        
        {/* --- 1. HERO SECTION --- */}
        <section className="bg-[#005a31] py-24 px-6 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 flex items-center justify-center">
             <Mountain size={500} className="text-white" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="flex justify-center gap-2 mb-6">
                <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                    Caucasus Region Expert
                </span>
                <span className="bg-white/20 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                    E-Visa & D-Type Specialist
                </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase leading-tight">
              Georgia <span className="text-orange-500">Visa</span> Application by Eammu Holidays
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto font-light leading-relaxed">
              Discover the intersection of Europe and Asia From India. Professional visa processing for tourists, investors, and digital nomads.
            </p>
          </div>
        </section>

        {/* --- 2. VIDEO GALLERY --- */}
        <section className="bg-slate-50 py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-12">
              <div className="flex items-center gap-3 mb-4">
                <PlayCircle className="text-orange-500" size={32} />
                <h2 className="text-4xl font-black text-[#005a31] uppercase">Georgia Visa Application Visual Guide</h2>
              </div>
              <p className="text-gray-500 text-center max-w-2xl italic font-medium">Watch these tutorials to master the Georgian E-Visa and immigration process.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <VideoCard 
                id="GEORGIA_E_VISA_2026" 
                title="E-Visa Application Guide" 
                desc="A complete walkthrough of the official Georgian electronic visa portal and document upload."
              />
              <VideoCard 
                id="GEORGIA_PHOTO_FIX" 
                title="Digital Photo Standards" 
                desc="Strict guidelines on capturing rectangular photos for the Georgia Ministry of Foreign Affairs."
              />
              <VideoCard 
                id="GEORGIA_D_VISA_GUIDE" 
                title="Type D & Residency" 
                desc="Exploring long-term stay options, work permits, and investment visa pathways."
              />
            </div>
          </div>
        </section>

        {/* --- 3. CATEGORY GALLERY --- */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-12 border-b border-gray-100 pb-6">
              <ImageIcon className="text-orange-500" size={32} />
              <h2 className="text-4xl font-black text-[#005a31] uppercase">Visa Application Georgia Stream Options</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PosterCard 
                image="https://images.unsplash.com/photo-1565008576549-57568a4f2154" 
                badge="Tourist" 
                title="E-Visa" 
                detail="30 Days / 120 Days"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1527004013197-933c4bb611b3" 
                badge="Business" 
                title="Trade Visa" 
                detail="Commercial Visit"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1565967511849-75a6012f33c0" 
                badge="Long Term" 
                title="Type D" 
                detail="Immigration Stream"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1628151241164-f655848737db" 
                badge="Special" 
                title="Digital Nomad" 
                detail="Remote Work Program"
              />
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          
          <div className="lg:col-span-2 space-y-24">
            
            {/* Quick Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <MetricBox label="Avg. Processing" value="5 - 10 Days" icon={<Clock size={20}/>} />
                <MetricBox label="Approval Rate" value="98.2%" icon={<TrendingUp size={20}/>} />
                <MetricBox label="Border Policy" value="Insurance Req." icon={<ShieldCheck size={20}/>} />
                <MetricBox label="Application" value="Digital Hybrid" icon={<Globe size={20}/>} />
            </div>

            {/* 4. PROCEDURE SECTION */}
            <section id="procedure">
              <div className="flex items-center gap-4 mb-10 border-b border-gray-100 pb-4">
                <div className="bg-orange-500 p-3 rounded-2xl text-white">
                  <Send size={28} />
                </div>
                <h2 className="text-3xl font-black text-[#005a31] uppercase tracking-tight">Georgia Application Procedure</h2>
              </div>
              
              <div className="space-y-10">
                <StepItem 
                  number="01" 
                  title="Eligibility Audit" 
                  desc="We check your passport's visa-free status or E-Visa eligibility based on your nationality or existing residency (GCC/Schengen)." 
                />
                <StepItem 
                  number="02" 
                  title="Document Compilation" 
                  desc="Collection of digital assets including your rectangular photo, passport scan, and verified travel insurance." 
                />
                <StepItem 
                  number="03" 
                  title="Official Submission" 
                  desc="Our experts submit your application to the Georgian Ministry of Foreign Affairs (MFA) portal or coordinate with the Consulate." 
                />
                <StepItem 
                  number="04" 
                  title="Electronic Grant" 
                  desc="Once approved, your E-Visa is sent via email. Print this document for presentation to the Georgian Border Police." 
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
                <h2 className="text-3xl font-black text-[#005a31] uppercase tracking-tight">Georgia Requirement Checklist</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <RequirementCard text="Passport Copy (6M+ validity)" />
                <RequirementCard text="Rectangular Digital Photo (Full frame)" />
                <RequirementCard text="Travel Medical Insurance" />
                <RequirementCard text="Proof of Accommodation (Hotel)" />
                <RequirementCard text="Recent Bank Statement" />
                <RequirementCard text="Return Flight Itinerary" />
              </div>
              
              {/* Photo Note */}
              <div className="mt-8 p-6 bg-white rounded-2xl border border-orange-100 flex gap-4 items-start">
                <Info className="text-orange-500 flex-shrink-0" size={24} />
                <div>
                    <p className="text-sm font-bold text-[#005a31] uppercase">Georgia Strict Photo Requirements</p>
                    <p className="text-xs text-gray-500 mt-1">
                        Georgia's E-Visa system is highly automated. Your photo must be <strong>rectangular</strong> and have <strong>full width and height</strong> inside the box. Selfies or square crops will result in automatic rejection.
                    </p>
                </div>
              </div>
            </section>

            {/* 6. FAQ SECTION */}
            <section>
                <div className="flex items-center gap-4 mb-10">
                    <HelpCircle size={32} className="text-orange-500" />
                    <h2 className="text-3xl font-black text-[#005a31] uppercase tracking-tight">Georgia Visa Application FAQs</h2>
                </div>
                <div className="divide-y divide-gray-100">
                    <FAQItem 
                        question="Can I enter Georgia if I have a valid GCC residency?" 
                        answer="Yes, holders of valid residency permits from GCC countries (UAE, Qatar, Saudi, etc.) can often enter Georgia visa-free for 90 days."
                    />
                    <FAQItem 
                        question="What is the validity of a Georgian E-Visa?" 
                        answer="Standard E-Visas are usually valid for 120 days, allowing for a stay of up to 30 days within that period."
                    />
                    <FAQItem 
                        question="Is a bank statement mandatory for a tourist visa?" 
                        answer="Yes, you must show you have sufficient funds (typically $50 USD per day) to cover your stay in Georgia."
                    />
                </div>
            </section>

          </div>

          {/* --- 7. SIDEBAR --- */}
          <aside className="space-y-8 lg:sticky lg:top-10">
            <div className="bg-[#005a31] text-white p-10 rounded-[3rem] shadow-2xl overflow-hidden relative group">
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-white/5 rounded-full group-hover:scale-125 transition-transform duration-1000"></div>
              <h3 className="text-2xl font-black mb-8 border-b border-white/10 pb-4 italic text-orange-400">Expert Support For Georgia Visa Application</h3>
              <div className="space-y-8 text-sm">
                <ContactLink label="Armenia Office (Regional)" href="tel:+37494810585" text="+374 94 810585" highlight />
                <ContactLink label="UAE Support" href="tel:+971507078334" text="+971 50 707 8334" />
                <ContactLink label="Bangladesh Branch" href="tel:+8801701699743" text="+880 1701 699 743" />
                <ContactLink label="Official Email" href="mailto:info@eammu.com" text="info@eammu.com" />
              </div>
              <a href="https://wa.me/37494810585" className="mt-12 block w-full bg-orange-500 text-white text-center py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-[#005a31] transition-all duration-500 shadow-xl">
                Inquire on WhatsApp
              </a>
            </div>
            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center">
              <ShieldCheck size={40} className="text-[#005a31] mb-4" />
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Caucasus Region Leader</p>
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

export default GeorgiaVisa;