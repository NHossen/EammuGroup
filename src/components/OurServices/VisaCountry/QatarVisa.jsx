import React from "react";
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, ClipboardList, Send, Globe, ShieldCheck, 
  FileText, Landmark, HelpCircle, Clock, Wallet, Info, 
  TrendingUp, PlayCircle, Image as ImageIcon, Camera, Building
} from 'lucide-react';

const QatarVisa = () => {
  return (
    <>
      <Helmet>
        <title>Qatar Visa Application | Online Travel Agency Qatar | Qatar Visa From Bangladesh </title>
        <meta name="description" content="Apply for Qatar tourist Visa, business Visa, and visit visas via the Hayya portal. Expert assistance for mandatory health insurance, Discover Qatar bookings, and fast processing." />
        <link rel="canonical" href="https://eammu.com/visa-services/qatar-visa-application" />
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
                    GCC Visa Authority
                </span>
                <span className="bg-white/20 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                    Hayya Portal Expert
                </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase leading-tight">
              Qatar <span className="text-orange-500">Visa</span> Application by Hayya Portal
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto font-light leading-relaxed">
              Experience the pinnacle of Arabian hospitality. We provide seamless digital visa solutions for the State of Qatar.
            </p>
          </div>
        </section>

        {/* --- 2. QUICK METRIC BOXES --- */}
        <section className="max-w-7xl mx-auto -mt-12 px-6 relative z-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <MetricBox label="Qatar Visa Processing time" value="2 - 5 Working Days" icon={<Clock size={20}/>} />
                <MetricBox label="Qatar Visa Platform" value="Hayya / MOI" icon={<Globe size={20}/>} />
                <MetricBox label="Qatar Stay Period" value="Up to 30/90 Days" icon={<TrendingUp size={20}/>} />
                <MetricBox label="Insurance" value="QAR 50 Mandatory" icon={<ShieldCheck size={20}/>} />
            </div>
        </section>

        {/* --- 3. VIDEO GALLERY --- */}
        <section className="bg-slate-50 py-24 px-6 mt-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-12">
              <div className="flex items-center gap-3 mb-4">
                <PlayCircle className="text-orange-500" size={32} />
                <h2 className="text-4xl font-black text-[#005a31] uppercase">Qatar Digital Visa Guides</h2>
              </div>
              <p className="text-gray-500 text-center max-w-2xl italic font-medium">Step-by-step video tutorials on navigating Qatar's electronic systems and health insurance portals.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <VideoCard 
                id="HAYYA_WITH_EAMMU" 
                title="Hayya Portal Tutorial" 
                desc="A complete walkthrough on how to register and apply for the Hayya Entry Permit for 2026."
              />
              <VideoCard 
                id="QATAR_HEALTH_INSURANCE" 
                title="Mandatory Insurance" 
                desc="How to purchase the official QAR 50 health insurance required for all visitors entering Qatar."
              />
              <VideoCard 
                id="DISCOVER_QATAR_BOOKING" 
                title="Hotel Verification" 
                desc="Understanding the Discover Qatar hotel booking requirements for specific nationalities."
              />
            </div>
          </div>
        </section>

        {/* --- 4. CATEGORY POSTERS --- */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-12 border-b border-gray-100 pb-6">
              <ImageIcon className="text-orange-500" size={32} />
              <h2 className="text-4xl font-black text-[#005a31] uppercase">Qatar Visa Categories</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PosterCard 
                image="https://images.unsplash.com/photo-1594913785202-58389bbc3379" 
                badge="Leisure" 
                title="A1 Tourist" 
                detail="Hayya Entry Permit"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1551044321-3642353347c6" 
                badge="Corporate" 
                title="Business Visa" 
                detail="72-Hour / 1 Month"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1582719508461-905c673771fd" 
                badge="Social" 
                title="Family Visit" 
                detail="Relative Sponsorship"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab" 
                badge="Career" 
                title="Work Entry" 
                detail="Pre-Work Permit"
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
                <h2 className="text-3xl font-black text-[#005a31] uppercase tracking-tight">The Digital Workflow</h2>
              </div>
              
              <div className="space-y-10">
                <StepItem 
                  number="01" 
                  title="Profile Verification" 
                  desc="We verify your nationality's eligibility for Visa-on-Arrival or if an E-Visa via the Hayya Portal is required." 
                />
                <StepItem 
                  number="02" 
                  title="Insurance Compliance" 
                  desc="Assistance in obtaining the mandatory Qatari health insurance from accredited providers like MOPH/Mano." 
                />
                <StepItem 
                  number="03" 
                  title="Digital Submission" 
                  desc="Our experts upload and manage your application on the Hayya platform, ensuring high-res document scans for MOI approval." 
                />
                <StepItem 
                  number="04" 
                  title="Permit Issuance" 
                  desc="Once approved, your entry permit is sent via email and linked to your passport. We provide a final check for border compliance." 
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
                <h2 className="text-3xl font-black text-[#005a31] uppercase tracking-tight">Qatar Visa Essential Documents</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <RequirementCard text="Clear Passport Scan (Min. 6 months validity)" />
                <RequirementCard text="Biometric Rectangular Photo (4x6 cm)" />
                <RequirementCard text="Qatari Health Insurance Policy" />
                <RequirementCard text="Confirmed Hotel or Host Address" />
                <RequirementCard text="Round-trip Flight Ticket" />
                <RequirementCard text="Proof of Profession (For Business/Visit)" />
                <RequirementCard text="Bank Statement (For specific nationalities)" />
                <RequirementCard text="Discover Qatar Hotel Voucher (If mandatory)" />
              </div>

              {/* Photo Note */}
              <div className="mt-12 p-6 bg-white rounded-2xl border border-orange-100 flex gap-4 items-start">
                <Camera className="text-orange-500 flex-shrink-0" size={24} />
                <div>
                    <p className="text-sm font-bold text-[#005a31] uppercase">Biometric Photo Standard</p>
                    <p className="text-xs text-gray-500 mt-1">
                        Photos must be **rectangular** and have **full width and height** inside the frame. White background is mandatory, and the face must be clearly visible without shadows.
                    </p>
                </div>
              </div>
            </section>

            {/* 7. FAQ SECTION */}
            <section>
                <div className="flex items-center gap-4 mb-10">
                    <HelpCircle size={32} className="text-orange-500" />
                    <h2 className="text-3xl font-black text-[#005a31] uppercase tracking-tight">Qatar Entry Insights</h2>
                </div>
                <div className="divide-y divide-gray-100">
                    <FAQItem 
                        question="Is health insurance mandatory for all travelers?" 
                        answer="Yes, the Qatar Ministry of Public Health requires all visitors to have a health insurance policy from a registered Qatari company costing QAR 50 per month."
                    />
                    <FAQItem 
                        question="Can I use the Hayya card for multiple entries?" 
                        answer="Most Hayya Entry Permits issued in 2026 allow for multiple entries within the validity period of the visa."
                    />
                    <FAQItem 
                        question="Do I need to book my hotel through Discover Qatar?" 
                        answer="Nationalities that require a visa-on-arrival (non-exempt) are often required to book their accommodation exclusively through the Discover Qatar portal."
                    />
                </div>
            </section>

          </div>

          {/* --- 8. SIDEBAR --- */}
          <aside className="space-y-8 lg:sticky lg:top-10">
            <div className="bg-[#005a31] text-white p-10 rounded-[3rem] shadow-2xl overflow-hidden relative group">
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-white/5 rounded-full group-hover:scale-125 transition-transform duration-1000"></div>
              <h3 className="text-2xl font-black mb-8 border-b border-white/10 pb-4 italic text-orange-400">GCC Support</h3>
              <div className="space-y-8 text-sm">
                <ContactLink label="UAE Hub" href="tel:+971507078334" text="+971 50 707 8334" highlight />
                <ContactLink label="Armenia Liaison" href="tel:+37494810585" text="+374 94 810585" />
                <ContactLink label="BD Desk" href="tel:+8801701699743" text="+880 1701 699 743" />
                <ContactLink label="Support Email" href="mailto:info@eammu.com" text="info@eammu.com" />
              </div>
              <a href="https://wa.me/971507078334" className="mt-12 block w-full bg-orange-500 text-white text-center py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-[#005a31] transition-all duration-500 shadow-xl">
                WhatsApp Inquiry
              </a>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center">
              <ShieldCheck size={40} className="text-[#005a31] mb-4" />
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Global GCC Partner</p>
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

export default QatarVisa;