import React from "react";
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, ClipboardList, Send, Globe, ShieldCheck, 
  FileText, Landmark, HelpCircle, Clock, Wallet, Info, 
  TrendingUp, PlayCircle, Image as ImageIcon, GraduationCap, Briefcase 
} from 'lucide-react';

const GermanyVisa = () => {
  return (
    <>
      <Helmet>
        <title>Germany Visa Application in dubai | Schengen Visa Appointment Dubai | Leading Tour Operator Dubai </title>
        <meta name="description" content="Complete guide for Germany Schengen tourist, business, and Student visas. Expert assistance with VFS appointments, blocked accounts, and document legalization." />
        <link rel="canonical" href="https://eammu.com/germany-visa-application" />
      </Helmet>

      <main className="bg-white min-h-screen font-sans text-slate-900">
        
        {/* --- 1. HERO SECTION --- */}
        <section className="bg-[#005a31] py-24 px-6 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 flex items-center justify-center">
             <Landmark size={500} className="text-white" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="flex justify-center gap-2 mb-6">
                <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                    Schengen Visa Expert
                </span>
                <span className="bg-white/20 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                    2026 Opportunity Card Ready
                </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase leading-tight">
              Germany <span className="text-orange-500">Visa</span> Application Support
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto font-light leading-relaxed">
              From the Brandenburg Gate to the Bavarian Alps—your gateway to the heart of Europe starts with professional immigration guidance.
            </p>
          </div>
        </section>

        {/* --- 2. QUICK METRIC BOXES --- */}
        <section className="max-w-7xl mx-auto -mt-12 px-6 relative z-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <MetricBox label="Germany Visa Appointment VFS" value="15-20 Days" icon={<Clock size={20}/>} />
                <MetricBox label="Germany Visa Approval Rate" value="94% (Schengen)" icon={<TrendingUp size={20}/>} />
                <MetricBox label="Bank Statement Requirement" value="€11,208/Year" icon={<Wallet size={20}/>} />
                <MetricBox label="Jurisdiction" value="Global Support" icon={<Globe size={20}/>} />
            </div>
        </section>

        {/* --- 3. VIDEO GALLERY --- */}
        <section className="bg-slate-50 py-24 px-6 mt-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-12">
              <div className="flex items-center gap-3 mb-4">
                <PlayCircle className="text-orange-500" size={32} />
                <h2 className="text-4xl font-black text-[#005a31] uppercase">Germany Visa Application Guide</h2>
              </div>
              <p className="text-gray-500 text-center max-w-2xl italic font-medium">Step-by-step visual tutorials for German Embassy and VFS Global submissions.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <VideoCard 
                id="GERMANY_SCHENGEN_2026" 
                title="Schengen Visa Checklist" 
                desc="Master the documentation required for a standard short-stay visa for tourism or family visits."
              />
              <VideoCard 
                id="BLOCKED_ACCOUNT_GUIDE" 
                title="Sperrkonto Setup" 
                desc="How to open and fund your German Blocked Account via Fintiba or Expatrio for students."
              />
              <VideoCard 
                id="CHANCENKARTE_EXPLAINED" 
                title="New Opportunity Card" 
                desc="Everything you need to know about the 2026 points-based Job Seeker visa for Germany."
              />
            </div>
          </div>
        </section>

        {/* --- 4. CATEGORY POSTERS --- */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-12 border-b border-gray-100 pb-6">
              <ImageIcon className="text-orange-500" size={32} />
              <h2 className="text-4xl font-black text-[#005a31] uppercase">Germany Visa Application Categories</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PosterCard 
                image="https://images.unsplash.com/photo-1467269204594-9661b134dd2b" 
                badge="Tourism" 
                title="Schengen Visa" 
                detail="90-Day Entry"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1541339907198-e08756ebafe3" 
                badge="Academic" 
                title="Student Visa" 
                detail="D-Type Long Stay"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab" 
                badge="Career" 
                title="Job Seeker" 
                detail="Chancenkarte 2026"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1521791136064-7986c2920216" 
                badge="Corporate" 
                title="Business" 
                detail="Trade & Expo"
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
                <h2 className="text-3xl font-black text-[#005a31] uppercase tracking-tight">The Application Pathway</h2>
              </div>
              
              <div className="space-y-10">
                <StepItem 
                  number="01" 
                  title="Document Legalization" 
                  desc="Academic transcripts and marriage certificates must be translated into German and legalized or Apostilled before the interview." 
                />
                <StepItem 
                  number="02" 
                  title="Blocked Account (If National)" 
                  desc="For students and job seekers, we assist in establishing the 'Sperrkonto' to prove financial self-sufficiency to the German government." 
                />
                <StepItem 
                  number="03" 
                  title="VFS / Embassy Appointment" 
                  desc="We secure the highly-coveted appointment slots and prepare your application forms (Videx) for the biometric submission." 
                />
                <StepItem 
                  number="04" 
                  title="Interview Coaching" 
                  desc="Our experts conduct mock interviews to ensure you can confidently explain your travel intent or study plans in Germany." 
                />
              </div>
            </section>

            {/* 6. EXPANDED REQUIREMENTS SECTION */}
            <section className="bg-slate-50 p-10 md:p-14 rounded-[3rem] border border-slate-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <FileText size={120} className="text-[#005a31]" />
              </div>
              <div className="flex items-center gap-4 mb-10">
                <div className="bg-[#005a31] p-3 rounded-2xl text-white shadow-lg">
                  <ClipboardList size={28} />
                </div>
                <h2 className="text-3xl font-black text-[#005a31] uppercase tracking-tight">Germany Visa Full Document Checklist</h2>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-orange-500 font-black text-sm uppercase mb-4 tracking-widest">Personal & Identity</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <RequirementCard text="Current Passport (valid 3 months beyond stay)" />
                    <RequirementCard text="Old Passports (to show travel history)" />
                    <RequirementCard text="Rectangular Biometric Photo (35x45mm)" />
                    <RequirementCard text="Civil Status Docs (Marriage/Birth Certs)" />
                  </div>
                </div>

                <div>
                  <h3 className="text-orange-500 font-black text-sm uppercase mb-4 tracking-widest">Financial & Travel</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <RequirementCard text="6 Months Personal Bank Statements" />
                    <RequirementCard text="Salary Slips (Last 3 Months)" />
                    <RequirementCard text="Schengen Travel Insurance (€30,000 min)" />
                    <RequirementCard text="Round-trip Flight Reservation" />
                    <RequirementCard text="Confirmed Hotel Bookings / Verpflichtungserklärung" />
                  </div>
                </div>

                <div>
                  <h3 className="text-orange-500 font-black text-sm uppercase mb-4 tracking-widest">Professional / Academic</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <RequirementCard text="NOC from Employer / Trade License" />
                    <RequirementCard text="Motivation Letter (German/English)" />
                    <RequirementCard text="University Degree (ZAB/Anabin recognized)" />
                    <RequirementCard text="Blocked Account Proof (For National Visa)" />
                  </div>
                </div>
              </div>
              
              {/* Photo Note */}
              <div className="mt-12 p-6 bg-white rounded-2xl border border-orange-100 flex gap-4 items-start">
                <Info className="text-orange-500 flex-shrink-0" size={24} />
                <div>
                    <p className="text-sm font-bold text-[#005a31] uppercase">Germany Visa Mandatory Photo Format</p>
                    <p className="text-xs text-gray-500 mt-1">
                        Schengen biometric standards are strict. Your photo must be <strong>rectangular</strong> and have <strong>full width and height</strong> within the designated frame. No white borders or square crops.
                    </p>
                </div>
              </div>
            </section>

            {/* 7. FAQ SECTION */}
            <section>
                <div className="flex items-center gap-4 mb-10">
                    <HelpCircle size={32} className="text-orange-500" />
                    <h2 className="text-3xl font-black text-[#005a31] uppercase tracking-tight">German Visa Application Insights</h2>
                </div>
                <div className="divide-y divide-gray-100">
                    <FAQItem 
                        question="How much money is required for a German Student Visa?" 
                        answer="As of 2026, students must deposit approximately €11,208 into a Blocked Account (Sperrkonto) to cover their first year's living expenses."
                    />
                    <FAQItem 
                        question="Do I need to speak German for a Tourist Visa?" 
                        answer="No, German language skills are not required for short-term Schengen (C-Type) visas. However, A1/B1 is often required for long-term work or family reunion visas."
                    />
                    <FAQItem 
                        question="What is the Anabin/ZAB evaluation?" 
                        answer="It is a process to verify that your foreign degree is equivalent to a German degree. This is mandatory for the Opportunity Card and Blue Card applications."
                    />
                </div>
            </section>

          </div>

          {/* --- 8. SIDEBAR --- */}
          <aside className="space-y-8 lg:sticky lg:top-10">
            <div className="bg-[#005a31] text-white p-10 rounded-[3rem] shadow-2xl overflow-hidden relative group">
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-white/5 rounded-full group-hover:scale-125 transition-transform duration-1000"></div>
              <h3 className="text-2xl font-black mb-8 border-b border-white/10 pb-4 italic text-orange-400">Consultancy</h3>
              <div className="space-y-8 text-sm">
                <ContactLink label="Europe Case Manager" href="tel:+37494810585" text="+374 94 810585" highlight />
                <ContactLink label="UAE Liaison" href="tel:+971507078334" text="+971 50 707 8334" />
                <ContactLink label="Bangladesh Support" href="tel:+8801701699743" text="+880 1701 699 743" />
                <ContactLink label="Email Inquiries" href="mailto:info@eammu.com" text="info@eammu.com" />
              </div>
              <a href="https://wa.me/37494810585" className="mt-12 block w-full bg-orange-500 text-white text-center py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-[#005a31] transition-all duration-500 shadow-xl">
                Chat with an Expert
              </a>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center">
              <ShieldCheck size={40} className="text-[#005a31] mb-4" />
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Premium Schengen Visa Support Bangladesh</p>
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

export default GermanyVisa;