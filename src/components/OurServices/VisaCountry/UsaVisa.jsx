import React from "react";
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, ClipboardList, Send, Globe, ShieldCheck, 
  FileText, Landmark, HelpCircle, Clock, Wallet, Info, 
  TrendingUp, PlayCircle, Image as ImageIcon, Camera, Flag
} from 'lucide-react';

const USAVisa = () => {
  return (
    <>
      <Helmet>
        <title>USA B1/B2 Visa Application | Study In Usa From Bangladesh | Top Travel Agency dhaka</title>
        <meta name="description" content="Expert assistance for USA B1/B2 visitor visas in 2026 from bangladesh. DS-160 form filling, interview coaching, and appointment scheduling in UAE, Armenia, and Bangladesh." />
        <link rel="canonical" href="https://eammu.com/visa-services/usa-visa-application" />
      </Helmet>

      <main className="bg-white min-h-screen font-sans text-slate-900">
        
        {/* --- 1. HERO SECTION --- */}
        <section className="bg-[#005a31] py-24 px-6 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 flex items-center justify-center">
             <Flag size={500} className="text-white" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="flex justify-center gap-2 mb-6">
                <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                    B1/B2 Specialist
                </span>
                <span className="bg-white/20 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                    Interview Coaching Included
                </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase leading-tight">
              United <span className="text-orange-500">States</span> Visa Application
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto font-light leading-relaxed">
              From the lights of Times Square to the Silicon Valley hubs. We simplify the world's most rigorous visa process with precision and care.
            </p>
          </div>
        </section>

        {/* --- 2. QUICK METRIC BOXES --- */}
        <section className="max-w-7xl mx-auto -mt-12 px-6 relative z-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <MetricBox label="Usa Visa Wait Times" value="Varies by Post" icon={<Clock size={20}/>} />
                <MetricBox label="Usa Visa Fee (MRV)" value="$185 USD" icon={<Wallet size={20}/>} />
                <MetricBox label="USA Visa Max Validity" value="Up to 10 Years" icon={<TrendingUp size={20}/>} />
                <MetricBox label="New for 2026" value="Visa Bonds (Select)" icon={<ShieldCheck size={20}/>} />
            </div>
        </section>

        {/* --- 3. VIDEO TUTORIALS --- */}
        <section className="bg-slate-50 py-24 px-6 mt-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-12">
              <div className="flex items-center gap-3 mb-4">
                <PlayCircle className="text-orange-500" size={32} />
                <h2 className="text-4xl font-black text-[#005a31] uppercase">USA Visa Preparation</h2>
              </div>
              <p className="text-gray-500 text-center max-w-2xl italic font-medium">Visual walkthroughs for the 2026 application cycle, including DS-160 tips and mock interview scenarios.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <VideoCard 
                id="USA_DS160_GUIDE" 
                title="Mastering the DS-160" 
                desc="How to avoid common errors in the online form that lead to administrative processing or refusals."
              />
              <VideoCard 
                id="USA_INTERVIEW_TIPS" 
                title="Consular Interview Secrets" 
                desc="What to say (and what NOT to say) when a Consular Officer asks about your travel intent."
              />
              <VideoCard 
                id="USA_VISA_BOND_2026" 
                title="2026 Visa Bond Update" 
                desc="Critical info for Bangladeshi and 38 other nationalities regarding the potential $15,000 bond requirement."
              />
            </div>
          </div>
        </section>

        {/* --- 4. CATEGORY POSTERS --- */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-12 border-b border-gray-100 pb-6">
              <ImageIcon className="text-orange-500" size={32} />
              <h2 className="text-4xl font-black text-[#005a31] uppercase">USA Visa Application Classes</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PosterCard 
                image="https://images.unsplash.com/photo-1485738422979-f5c462d49f74" 
                badge="B1/B2" 
                title="Visitor Visa" 
                detail="Tourism & Business"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1" 
                badge="F/M/J" 
                title="Student Visa" 
                detail="I-20 Requirements"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1521737711867-e3b97375f902" 
                badge="H-1B / L-1" 
                title="Work Permits" 
                detail="Employment Based"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b" 
                badge="C1/D" 
                title="Transit/Crew" 
                detail="Seafarers & Airline"
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
                <h2 className="text-3xl font-black text-[#005a31] uppercase tracking-tight">The 5-Step Process</h2>
              </div>
              
              <div className="space-y-10">
                <StepItem 
                  number="01" 
                  title="DS-160 Digitization" 
                  desc="We help you complete the complex online form accurately. This is the most critical document for your application." 
                />
                <StepItem 
                  number="02" 
                  title="MRV Fee & Scheduling" 
                  desc="Payment of the $185 visa fee and securing the earliest possible interview slot at the Embassy or Consulate." 
                />
                <StepItem 
                  number="03" 
                  title="Document Preparation" 
                  desc="Compiling your 'Evidence of Ties' including employment records, bank statements, and property deeds." 
                />
                <StepItem 
                  number="04" 
                  title="Biometrics & Interview" 
                  desc="Personal appearance for fingerprinting and the interview. For 2026, most renewals also require an in-person visit." 
                />
                <StepItem 
                  number="05" 
                  title="Passport Retrieval" 
                  desc="Tracking your passport status and coordinating collection through the approved courier partner (e.g., Emirates Post or Aramex)." 
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
                <h2 className="text-3xl font-black text-[#005a31] uppercase tracking-tight">USA Checklist 2026</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <RequirementCard text="Passport (Valid 6+ months from travel)" />
                <RequirementCard text="DS-160 Confirmation Page (Printed)" />
                <RequirementCard text="Interview Appointment Confirmation" />
                <RequirementCard text="MRV Fee Receipt ($185 / AED 685 approx)" />
                <RequirementCard text="2 Rectangular Photos (5x5cm / 2x2in)" />
                <RequirementCard text="6 Months Bank Statements (Self/Company)" />
                <RequirementCard text="Salary Certificate / Employment NOC" />
                <RequirementCard text="Trade License (If Business Owner)" />
                <RequirementCard text="Detailed Travel Itinerary (Dates & Places)" />
                <RequirementCard text="Previous US Visas (On old passports)" />
              </div>

              {/* Photo Note */}
              <div className="mt-12 p-6 bg-white rounded-2xl border border-orange-100 flex gap-4 items-start">
                <Camera className="text-orange-500 flex-shrink-0" size={24} />
                <div>
                    <p className="text-sm font-bold text-[#005a31] uppercase">US Visa Photo Protocol</p>
                    <p className="text-xs text-gray-500 mt-1">
                        Photos must be **rectangular** (5cm x 5cm) with the subject having **full width and height** inside the box. Use a plain white background, neutral expression, and ensure no eyeglasses are worn.
                    </p>
                </div>
              </div>
            </section>

            {/* 7. FAQ SECTION */}
            <section>
                <div className="flex items-center gap-4 mb-10">
                    <HelpCircle size={32} className="text-orange-500" />
                    <h2 className="text-3xl font-black text-[#005a31] uppercase tracking-tight">USA Visa FAQ</h2>
                </div>
                <div className="divide-y divide-gray-100">
                    <FAQItem 
                        question="How long is the wait for an interview?" 
                        answer="Wait times vary by city. For 2026, Dubai averages 9 months, while Abu Dhabi can be longer. We recommend applying at least 10 months before travel."
                    />
                    <FAQItem 
                        question="What is the 2026 'Visa Bond'?" 
                        answer="Nationals of 39 countries (including Bangladesh) may be required to post a bond of up to $15,000 if instructed by a Consular Officer after the interview."
                    />
                    <FAQItem 
                        question="Do I need to book my flights first?" 
                        answer="No. The US Embassy recommends NOT purchasing tickets until you have your visa. A list of intended travel dates and locations is sufficient."
                    />
                </div>
            </section>

          </div>

          {/* --- 8. SIDEBAR --- */}
          <aside className="space-y-8 lg:sticky lg:top-10">
            <div className="bg-[#005a31] text-white p-10 rounded-[3rem] shadow-2xl overflow-hidden relative group">
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-white/5 rounded-full group-hover:scale-125 transition-transform duration-1000"></div>
              <h3 className="text-2xl font-black mb-8 border-b border-white/10 pb-4 italic text-orange-400">USA Desk</h3>
              <div className="space-y-8 text-sm">
                <ContactLink label="UAE Help" href="tel:+971507078334" text="+971 50 707 8334" highlight />
                <ContactLink label="Armenia Office" href="tel:+37494810585" text="+374 94 810585" />
                <ContactLink label="BD Support" href="tel:+8801701699743" text="+880 1701 699 743" />
                <ContactLink label="Official Email" href="mailto:info@eammu.com" text="info@eammu.com" />
              </div>
              <a href="https://wa.me/971507078334" className="mt-12 block w-full bg-orange-500 text-white text-center py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-[#005a31] transition-all duration-500 shadow-xl">
                Consult via WhatsApp
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

export default USAVisa;