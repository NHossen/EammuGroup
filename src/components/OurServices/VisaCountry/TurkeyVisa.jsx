import React from "react";
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, ClipboardList, Send, Globe, ShieldCheck, 
  FileText, Landmark, Palmtree, HelpCircle, Clock, Wallet, Info, 
  Briefcase, Coffee, MapPin, TrendingUp, PlayCircle, Image as ImageIcon,
  Navigation
} from 'lucide-react';

const TurkeyVisa = () => {
  return (
    <>
      <Helmet>
        <title>Turkey Visa Application 2026 | E-Visa & Sticker Visa Support</title>
        <meta 
          name="description" 
          content="Apply for your Turkey E-Visa or Sticker Visa. Expert guidance on Turkey visa requirements for Indian, Pakistani, and UAE residents. 24-hour processing available." 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://eammu.com/turkey-visa-application" />

        {/* Open Graph */}
        <meta property="og:title" content="Turkey Visa Guide 2026 | Requirements & Application Process" />
        <meta 
          property="og:description" 
          content="Fast-track your Turkey E-Visa. Professional assistance for tourism, business, and transit visas from the experts at Eammu Holidays." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eammu.com/turkey-visa-application" />
        <meta 
          property="og:image" 
          content="https://www.eammu.com/images/turkey-visa-banner.jpg" 
        />
      </Helmet>

      <main className="bg-white min-h-screen font-sans text-slate-900">
        
        {/* Header Section - Green Theme */}
        <section className="bg-[#006a4e] py-20 px-6 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 flex items-center justify-center">
             <Landmark size={400} className="text-white" />
          </div>
          <div className="relative z-10">
            <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-4 inline-block shadow-lg">
              2026 Updated Turkey Guide
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter uppercase">
              Turkey <span className="text-orange-400">Visa </span>Application 
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 opacity-90">E-Visa & Sticker Visa Process For Global Nationals</h2>

            <p className="text-lg opacity-90 max-w-3xl mx-auto font-light leading-relaxed">
              Explore the bridge between Europe and Asia. <strong>Eammu Holidays</strong> provides seamless processing for 
              <strong> Turkey E-Visas</strong> and <strong>Consular Sticker Visas</strong>. 
              Whether you are a traveler from India, Pakistan, or a resident of the UAE, we manage the complexity for you.
            </p>
          </div>
        </section>

        {/* --- VIDEO GALLERY --- */}
        <section className="bg-slate-50 py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-12">
              <div className="flex items-center gap-3 mb-4">
                <PlayCircle className="text-orange-500" size={32} />
                <h2 className="text-4xl font-black text-[#006a4e] uppercase">Turkey Visa Video Guide</h2>
              </div>
              <p className="text-gray-500 text-center max-w-2xl italic">Essential tips on the Turkish e-visa system and documentation requirements for 2026.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <VideoCard 
                id="Example_ID_1" 
                title="Turkey E-Visa vs Sticker Visa" 
                desc="Understand which visa type you need based on your passport and residence status."
              />
              <VideoCard 
                id="Example_ID_2" 
                title="Dubai to Turkey: Application Steps" 
                desc="A dedicated guide for UAE residents looking to visit Istanbul or Antalya."
              />
              <VideoCard 
                id="Example_ID_3" 
                title="Common Turkey Visa Rejection Reasons" 
                desc="Avoid these frequent mistakes in your bank statements and photo uploads."
              />
            </div>
          </div>
        </section>

        {/* --- POSTER GALLERY --- */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-12 border-b border-gray-100 pb-6">
              <ImageIcon className="text-orange-500" size={32} />
              <h2 className="text-4xl font-black text-[#006a4e] uppercase">Turkey Travel Programs</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PosterCard 
                image="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=800" 
                badge="Tourism" 
                title="Turkey E-Visa" 
                detail="Approved in 24 Hours"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1527838832702-585f237f0673?q=80&w=800" 
                badge="Business" 
                title="Commercial Visa" 
                detail="Multi-Entry Options"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=800" 
                badge="Transit" 
                title="Layover Visa" 
                detail="Airport Exit Permit"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1590001158193-79cd7c0e8674?q=80&w=800" 
                badge="Study/Work" 
                title="Sticker Visa" 
                detail="Long-term Residency"
              />
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          
          <div className="lg:col-span-2 space-y-24">
            
            {/* Quick Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <MetricBox label="E-Visa Processing" value="24-48 Hours" icon={<Clock size={20}/>} />
                <MetricBox label="Approval Rate" value="98.5%" icon={<TrendingUp size={20}/>} />
                <MetricBox label="Visa Validity" value="Up to 180 Days" icon={<Navigation size={20}/>} />
                <MetricBox label="Consultancy" value="Expert Support" icon={<Globe size={20}/>} />
            </div>

            {/* Eligibility Highlights */}
            <section className="bg-emerald-50 p-8 rounded-[3rem] border-2 border-emerald-100">
                <h3 className="text-2xl font-black text-[#006a4e] mb-6 flex items-center gap-3">
                    <ShieldCheck className="text-orange-500" /> TURKEY E-VISA ELIGIBILITY
                </h3>
                <div className="space-y-4 text-gray-700">
                    <p className="font-medium">Many nationalities can apply online if they hold:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Valid <strong>Schengen, US, UK, or Irish Visa</strong> (for certain E-Visa applicants).</li>
                        <li>A valid passport with at least 6 months remaining.</li>
                        <li>Return ticket, hotel reservation, and at least $50 per day of stay.</li>
                        <li>GCC Residents often qualify for simplified E-Visa entry.</li>
                    </ul>
                </div>
            </section>
            
            {/* Procedure Section */}
            <section>
              <div className="flex items-center gap-4 mb-10 border-b border-gray-100 pb-4">
                <div className="bg-orange-500 p-3 rounded-2xl text-white">
                  <Send size={28} />
                </div>
                <h2 className="text-3xl font-black text-[#006a4e] uppercase tracking-tight">How We Help</h2>
              </div>
              
              <div className="space-y-10">
                <StepItem number="01" title="Document Audit" desc="We review your passport, photos, and supporting visas to ensure they meet Turkish immigration standards." />
                <StepItem number="02" title="E-Visa Filing" desc="Error-free submission on the official Turkey portal with instant tracking." />
                <StepItem number="03" title="Sticker Visa Assistance" desc="For those requiring embassy visits, we manage appointments and document sets." />
                <StepItem number="04" title="Travel Briefing" desc="Providing you with the final visa and a checklist for Turkish border control." />
              </div>
            </section>

            {/* Checklist Section */}
            <section className="bg-slate-50 p-10 md:p-14 rounded-[3rem] border border-slate-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <FileText size={120} className="text-[#006a4e]" />
              </div>
              <div className="flex items-center gap-4 mb-10">
                <div className="bg-[#006a4e] p-3 rounded-2xl text-white shadow-lg">
                  <ClipboardList size={28} />
                </div>
                <h2 className="text-3xl font-black text-[#006a4e] uppercase tracking-tight">Required Documents</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <RequirementCard text="Original Passport (6 Months)" />
                <RequirementCard text="Biometric Photos (White Background)" />
                <RequirementCard text="Valid Residence Visa (for expats)" />
                <RequirementCard text="Confirmed Flight & Hotel" />
                <RequirementCard text="Salary Certificate/NOC" />
                <RequirementCard text="3 Months Bank Statement" />
                <RequirementCard text="Travel Insurance (Mandatory)" />
                <RequirementCard text="Supporting Visa (Schengen/US/UK)" />
              </div>
            </section>

            <section className="space-y-8">
                <div className="flex items-center gap-4 mb-6">
                    <HelpCircle size={32} className="text-orange-500" />
                    <h2 className="text-3xl font-black text-[#006a4e] uppercase tracking-tight">Frequently Asked Questions</h2>
                </div>
                <div className="divide-y divide-gray-200">
                    <FAQItem 
                        question="How long can I stay in Turkey with an E-Visa?" 
                        answer="Most E-Visas allow for a stay of 30 to 90 days within a 180-day period, depending on your nationality. We will confirm your specific duration during the application." 
                    />
                    <FAQItem 
                        question="I am an Indian citizen, do I need a sticker visa?" 
                        answer="Indian citizens with a valid Schengen, US, UK, or Ireland visa/residence permit can apply for an E-Visa. Otherwise, a sticker visa via the Gateway Globe center is required." 
                    />
                    <FAQItem 
                        question="Can I work in Turkey on a Tourist Visa?" 
                        answer="No, tourist visas are strictly for leisure and short business meetings. Working requires a specific Work Permit and a different application process." 
                    />
                    <FAQItem 
                        question="What is the E-Visa processing time?" 
                        answer="E-visas are typically processed within 24 hours. However, for sticker visas, it can take 7–15 working days." 
                    />
                </div>
            </section>

          </div>
          
          {/* Sidebar */}
          <aside className="space-y-8 lg:sticky lg:top-10">
            <div className="bg-[#006a4e] text-white p-10 rounded-[3rem] shadow-2xl overflow-hidden relative group">
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-white/5 rounded-full group-hover:scale-125 transition-transform duration-1000"></div>
              <h3 className="text-2xl font-black mb-8 border-b border-white/10 pb-4 italic text-orange-400">Eammu Holidays</h3>
              <div className="space-y-8 text-sm">
                <ContactLink label="UAE Support" href="tel:+971507078334" text="+971 50 707 8334" highlight />
                <ContactLink label="Armenia Office" href="tel:+37494810585" text="+374 94 810585" />
                <ContactLink label="BD Hotline" href="tel:+8801701699743" text="+880 1701 699 743" />
                <ContactLink label="Email Us" href="mailto:info@eammu.com" text="info@eammu.com" />
              </div>
              <a href="https://wa.me/37494810585" className="mt-12 block w-full bg-orange-500 text-white text-center py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-[#006a4e] transition-all duration-500 shadow-xl">
                Apply on WhatsApp
              </a>
            </div>
            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center">
              <ShieldCheck size={40} className="text-[#006a4e] mb-4" />
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Global Immigration</p>
              <p className="text-[#006a4e] font-black text-xl italic tracking-tighter uppercase">Eammu Holidays</p>
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
    <div className="p-6"><h3 className="font-black text-[#006a4e] uppercase mb-2">{title}</h3><p className="text-gray-500 text-sm">{desc}</p></div>
  </div>
);

const PosterCard = ({ image, badge, title, detail }) => (
  <div className="relative rounded-3xl overflow-hidden aspect-[4/3] group cursor-pointer shadow-md">
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
      <h4 className="text-xl font-black text-[#006a4e] mb-2 uppercase tracking-tight">{title}</h4>
      <p className="text-gray-500 leading-relaxed text-base">{desc}</p>
    </div>
  </div>
);

const RequirementCard = ({ text }) => (
  <div className="flex items-start gap-3 group">
    <div className="bg-emerald-100 p-1 rounded-full group-hover:bg-[#006a4e] transition-colors"><CheckCircle size={16} className="text-[#006a4e] group-hover:text-white" /></div>
    <span className="text-gray-700 font-medium text-sm leading-tight">{text}</span>
  </div>
);

const MetricBox = ({ label, value, icon }) => (
    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col items-center justify-center text-center">
        <div className="text-orange-500 mb-2">{icon}</div>
        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{label}</span>
        <span className="text-[#006a4e] font-black text-sm">{value}</span>
    </div>
);

const ContactLink = ({ label, href, text, highlight }) => (
  <div className={`flex flex-col ${highlight ? 'border-l-2 border-orange-500 pl-4' : ''}`}>
    <span className="text-orange-400 text-[10px] font-black uppercase tracking-widest mb-1">{label}</span>
    <a href={href} className="text-lg font-bold hover:text-orange-200 transition-colors">{text}</a>
  </div>
);

const FAQItem = ({ question, answer }) => (
    <div className="py-6">
        <h4 className="text-lg font-black text-[#006a4e] mb-3 uppercase tracking-tight flex items-center gap-2">
            <span className="text-orange-500">Q.</span> {question}
        </h4>
        <p className="text-gray-600 leading-relaxed pl-6 border-l-2 border-emerald-200">{answer}</p>
    </div>);

export default TurkeyVisa;