import React from "react";
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, ClipboardList, Send, Globe, ShieldCheck, 
  FileText, Landmark, HelpCircle, Clock, Wallet, Info, 
  TrendingUp, PlayCircle, Image as ImageIcon, Camera, Palmtree
} from 'lucide-react';

const SpainVisa = () => {
  return (
    <>
      <Helmet>
        <title>Schengen Visa from India | Europe Visa Application Agency India | Study Spain From Dhaka</title>
        <meta name="description" content="Apply for Spain Schengen visa for 2026. Expert assistance for BLS appointments, travel insurance, and flight itineraries for tourist and business visits." />
        <link rel="canonical" href="https://eammu.com/visa-services/spain-visa-application" />
      </Helmet>

      <main className="bg-white min-h-screen font-sans text-slate-900">
        
        {/* --- 1. HERO SECTION --- */}
        <section className="bg-[#005a31] py-24 px-6 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 flex items-center justify-center">
             <Palmtree size={500} className="text-white" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="flex justify-center gap-2 mb-6">
                <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                    Schengen Specialist
                </span>
                <span className="bg-white/20 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                    BLS Appointment Support
                </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase leading-tight">
              Spain <span className="text-orange-500">Visa</span> Application guide
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto font-light leading-relaxed">
              From the architecture of Barcelona to the beaches of Costa del Sol. Your gateway to Spain and the entire Schengen Zone begins here.
            </p>
          </div>
        </section>

        {/* --- 2. QUICK METRIC BOXES --- */}
        <section className="max-w-7xl mx-auto -mt-12 px-6 relative z-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <MetricBox label="SpainProcessing Time" value="15 - 45 Days" icon={<Clock size={20}/>} />
                <MetricBox label="SpainVisa Type" value="Schengen (Type C)" icon={<Globe size={20}/>} />
                <MetricBox label="Stay Limit" value="90 Days in 180" icon={<TrendingUp size={20}/>} />
                <MetricBox label="Spain Visa Submission" value="BLS International" icon={<Landmark size={20}/>} />
            </div>
        </section>

        {/* --- 3. VIDEO TUTORIALS --- */}
        <section className="bg-slate-50 py-24 px-6 mt-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-12">
              <div className="flex items-center gap-3 mb-4">
                <PlayCircle className="text-orange-500" size={32} />
                <h2 className="text-4xl font-black text-[#005a31] uppercase">Spain and Schengen Application Visa Masterclass</h2>
              </div>
              <p className="text-gray-500 text-center max-w-2xl italic font-medium">Visual guides on securing Spain appointments and meeting the strict European documentation standards for 2026.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <VideoCard 
                id="SPAIN_BLS_GUIDE" 
                title="BLS Appointment Tips" 
                desc="How to navigate the BLS International booking system for Spain and manage your biometric visit."
              />
              <VideoCard 
                id="SCHENGEN_INSURANCE" 
                title="Insurance Compliance" 
                desc="A guide to the specific €30,000 coverage requirements for Spanish visa approval."
              />
              <VideoCard 
                id="SPAIN_COVER_LETTER" 
                title="The Perfect Cover Letter" 
                desc="Learn how to draft a winning itinerary and cover letter for the Spanish Consulate."
              />
            </div>
          </div>
        </section>

        {/* --- 4. CATEGORY POSTERS --- */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-12 border-b border-gray-100 pb-6">
              <ImageIcon className="text-orange-500" size={32} />
              <h2 className="text-4xl font-black text-[#005a31] uppercase">Spain Visa Paths</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PosterCard 
                image="https://images.unsplash.com/photo-1543783232-178598c9802d" 
                badge="Tourism" 
                title="Short Stay" 
                detail="Schengen Type C"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1559298770-829277058022" 
                badge="Commerce" 
                title="Business Visa" 
                detail="Trade & Conferences"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1511739001486-6bfe10ce785f" 
                badge="EU Family" 
                title="Family Visit" 
                detail="Reunification Support"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1" 
                badge="Education" 
                title="Student Visa" 
                detail="Study Over 90 Days"
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
                <h2 className="text-3xl font-black text-[#005a31] uppercase tracking-tight">How to Apply Spain Visa</h2>
              </div>
              
              <div className="space-y-10">
                <StepItem 
                  number="01" 
                  title="Appointment Retrieval" 
                  desc="We assist in monitoring and securing slots at BLS International, which can be highly competitive for Spain." 
                />
                <StepItem 
                  number="02" 
                  title="Documentation Suite" 
                  desc="Preparation of the Harmonised Schengen Form, flight reservations, hotel vouchers, and employment letters." 
                />
                <StepItem 
                  number="03" 
                  title="Financial Verification" 
                  desc="Ensuring your bank statements show sufficient funds according to the daily IPREM (Spanish minimum wage) standards." 
                />
                <StepItem 
                  number="04" 
                  title="Biometrics & Interview" 
                  desc="Assistance for your personal appearance at the visa center for fingerprinting and final document submission." 
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
                <h2 className="text-3xl font-black text-[#005a31] uppercase tracking-tight">Spain Visa Application Checklist 2026</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <RequirementCard text="Original Passport (Valid for 6 months beyond stay)" />
                <RequirementCard text="Schengen Visa Form (Accurately Filled)" />
                <RequirementCard text="2 Rectangular Biometric Photos (3.5x4.5cm)" />
                <RequirementCard text="Travel Medical Insurance (€30,000 Minimum)" />
                <RequirementCard text="Confirmed Round-trip Flight Itinerary" />
                <RequirementCard text="Proof of Accommodation (Hotel or Invitation)" />
                <RequirementCard text="3 - 6 Months Recent Bank Statements" />
                <RequirementCard text="Salary Certificate / NOC from Employer" />
                <RequirementCard text="Trade License (For Self-Employed Applicants)" />
                <RequirementCard text="Previous Schengen Visas (If applicable)" />
              </div>

              {/* Photo Note */}
              <div className="mt-12 p-6 bg-white rounded-2xl border border-orange-100 flex gap-4 items-start">
                <Camera className="text-orange-500 flex-shrink-0" size={24} />
                <div>
                    <p className="text-sm font-bold text-[#005a31] uppercase">Spanish Photo Protocol</p>
                    <p className="text-xs text-gray-500 mt-1">
                        Photos must be **rectangular** with **full width and height** utilized inside the frame. Ensure a matte finish, white background, and no shadows on the face.
                    </p>
                </div>
              </div>
            </section>

            {/* 7. FAQ SECTION */}
            <section>
                <div className="flex items-center gap-4 mb-10">
                    <HelpCircle size={32} className="text-orange-500" />
                    <h2 className="text-3xl font-black text-[#005a31] uppercase tracking-tight">Common Questions</h2>
                </div>
                <div className="divide-y divide-gray-100">
                    <FAQItem 
                        question="Can I enter other countries with a Spain visa?" 
                        answer="Yes, a Spanish Schengen visa allows you to travel freely across all 29 Schengen member states, provided Spain is your primary destination or first point of entry."
                    />
                    <FAQItem 
                        question="How much money should I have in my bank?" 
                        answer="For 2026, Spain requires proof of approximately €115 per person per day of stay, with a minimum total of roughly €1,000 per applicant."
                    />
                    <FAQItem 
                        question="What if my visa is refused?" 
                        answer="Spanish law allows for an 'Appeal for Reversal' (Recurso de Reposición) within one month. We provide specialist support for refusal analysis and re-application."
                    />
                </div>
            </section>

          </div>

          {/* --- 8. SIDEBAR --- */}
          <aside className="space-y-8 lg:sticky lg:top-10">
            <div className="bg-[#005a31] text-white p-10 rounded-[3rem] shadow-2xl overflow-hidden relative group">
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-white/5 rounded-full group-hover:scale-125 transition-transform duration-1000"></div>
              <h3 className="text-2xl font-black mb-8 border-b border-white/10 pb-4 italic text-orange-400">Spain Desk</h3>
              <div className="space-y-8 text-sm">
                <ContactLink label="UAE Support" href="tel:+971507078334" text="+971 50 707 8334" highlight />
                <ContactLink label="Armenia Office" href="tel:+37494810585" text="+374 94 810585" />
                <ContactLink label="BD Hotline" href="tel:+8801701699743" text="+880 1701 699 743" />
                <ContactLink label="Official Email" href="mailto:info@eammu.com" text="info@eammu.com" />
              </div>
              <a href="https://wa.me/971507078334" className="mt-12 block w-full bg-orange-500 text-white text-center py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-[#005a31] transition-all duration-500 shadow-xl">
                Consult via WhatsApp
              </a>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center">
              <ShieldCheck size={40} className="text-[#005a31] mb-4" />
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Certified Partner</p>
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

export default SpainVisa;