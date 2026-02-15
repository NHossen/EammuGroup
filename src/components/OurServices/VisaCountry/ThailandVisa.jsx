import React from "react";
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, ClipboardList, Send, Globe, ShieldCheck, 
  FileText, Landmark, Palmtree, HelpCircle, Clock, Wallet, Info, 
  Briefcase, Coffee, MapPin, TrendingUp, PlayCircle, Image as ImageIcon, Compass, Camera
} from 'lucide-react';

const ThailandVisa = () => {
  return (
    <>
      <Helmet>
        <title>Thailand Visa Application | Eammu Holidays - Bangladesh</title>
        <meta 
          name="description" 
          content="Apply for Thailand Tourist Visa, DTV, or Long-Term Residency in 2026. Expert guidance on the new Thailand Digital Arrival Card (TDAC) for UAE and Bangladesh residents." 
        />
        <meta 
          name="keywords" 
          content="Thailand visa 2026, Thailand Digital Arrival Card, TDAC QR code, Thailand 60 day visa exemption, Destination Thailand Visa DTV, Thai e-Visa portal, Eammu Holidays" 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://eammu.com/thailand-visa-application" />
      </Helmet>

      <main className="bg-white min-h-screen font-sans text-slate-900">
        
        {/* Header Section */}
        <section className="bg-[#005a31] py-24 px-6 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 flex items-center justify-center">
             <Landmark size={500} className="text-white" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="flex justify-center gap-2 mb-6">
                <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                    Official e-Visa Partner
                </span>
                <span className="bg-white/20 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                    TDAC Specialist 2026
                </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase leading-tight">
              Visit <span className="text-orange-500">Thailand </span>with Ease
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto font-light leading-relaxed">
              From the 60-day visa-free exemption to the 5-year DTV, Eammu Holidays ensures your entry into the Land of Smiles is seamless.
            </p>
          </div>
        </section>

        {/* --- VIDEO GALLERY --- */}
        <section className="bg-slate-50 py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-12">
              <div className="flex items-center gap-3 mb-4">
                <PlayCircle className="text-orange-500" size={32} />
                <h2 className="text-4xl font-black text-[#005a31] uppercase">Thailand Visual Guide</h2>
              </div>
              <p className="text-gray-500 text-center max-w-2xl italic">Explore our curated video guides on the 2026 entry process and the best of Thai culture.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <VideoCard 
                id="wI8690U6YTo" 
                title="2026 Entry Requirements" 
                desc="A comprehensive look at the new Thailand Digital Arrival Card (TDAC) and visa-free rules."
              />
              <VideoCard 
                id="l-T4e2H5oIs" 
                title="The DTV Explained" 
                desc="How the Destination Thailand Visa works for digital nomads and remote workers."
              />
              <VideoCard 
                id="7X8eWp4RjA0" 
                title="Bangkok & Beyond" 
                desc="A cinematic journey through Thailand's most iconic destinations."
              />
            </div>
          </div>
        </section>

        {/* --- POSTER GALLERY --- */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-12 border-b border-gray-100 pb-6">
              <ImageIcon className="text-orange-500" size={32} />
              <h2 className="text-4xl font-black text-[#005a31] uppercase">Visa Categories 2026</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PosterCard 
                image="https://images.unsplash.com/photo-1528181304800-2f140819ad52?q=80&w=800" 
                badge="Tourist" 
                title="60-Day Exemption" 
                detail="Visa-Free Entry (93 Countries)"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1552423814-c4780dfc7ff1?q=80&w=800" 
                badge="Remote Work" 
                title="DTV Visa" 
                detail="5-Year Multiple Entry"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=800" 
                badge="Long Term" 
                title="LTR Visa" 
                detail="10-Year High Potential"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=800" 
                badge="Retirement" 
                title="Non-Immigrant O" 
                detail="50+ Years Old"
              />
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          
          <div className="lg:col-span-2 space-y-24">
            
            {/* Quick Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <MetricBox label="TDAC Approval" value="Instant/72h" icon={<Clock size={20}/>} />
                <MetricBox label="Success Rate" value="99.2%" icon={<TrendingUp size={20}/>} />
                <MetricBox label="DTV Validity" value="5 Years" icon={<Calendar size={20}/>} />
                <MetricBox label="E-Visa Processing" value="3-10 Days" icon={<Globe size={20}/>} />
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
                  title="Check Eligibility" 
                  desc="We determine if you qualify for the 60-day visa exemption or if you require an e-Tourist (TR) or DTV visa based on your nationality and stay duration." 
                />
                <StepItem 
                  number="02" 
                  title="e-Visa Submission" 
                  desc="For non-exempt citizens, we manage the Thai e-Visa portal application, handling fee payments and document uploads with zero errors." 
                />
                <StepItem 
                  number="03" 
                  title="TDAC Pre-Arrival" 
                  desc="72 hours before your flight, we generate your mandatory Thailand Digital Arrival Card (TDAC) QR code, now required for all air, land, and sea entries." 
                />
                <StepItem 
                  number="04" 
                  title="Entry & Extension" 
                  desc="Clear immigration with your QR code. We also provide assistance for onshore 30-day extensions at Thai Immigration offices." 
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
                <h2 className="text-3xl font-black text-[#005a31] uppercase tracking-tight">Requirement Checklist</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <RequirementCard text="Passport valid for 6+ months" />
                <RequirementCard text="Thailand Digital Arrival Card (TDAC) QR" />
                <RequirementCard text="Confirmed Round-trip Flight Tickets" />
                <RequirementCard text="Confirmed Hotel/Accommodation Proof" />
                <RequirementCard text="Proof of Funds (Min. 10k-20k THB)" />
                <RequirementCard text="Recent Passport Photo (4x6 cm)" />
                <RequirementCard text="Employment Letter / Trade License" />
                <RequirementCard text="Bank Statement (Last 3-6 Months)" />
                <RequirementCard text="500k THB Balance (For DTV Applicants)" />
                <RequirementCard text="Work Portfolio (For Digital Nomads)" />
              </div>
            </section>

            {/* FAQ Section */}
            <section>
                <div className="flex items-center gap-4 mb-10">
                    <HelpCircle size={32} className="text-orange-500" />
                    <h2 className="text-3xl font-black text-[#005a31] uppercase tracking-tight">Thailand Visa FAQs</h2>
                </div>
                <div className="divide-y divide-gray-100">
                    <FAQItem 
                        question="What is the Thailand Digital Arrival Card (TDAC)?" 
                        answer="The TDAC is a mandatory digital form replacing the old paper TM6 card. All travelers must submit it within 72 hours before arrival to receive a QR code for immigration."
                    />
                    <FAQItem 
                        question="Can I work on a Tourist Visa in Thailand?" 
                        answer="Technically no. If you wish to work remotely, you should apply for the Destination Thailand Visa (DTV), which explicitly allows 'Workcations' for up to 180 days per entry."
                    />
                    <FAQItem 
                        question="Is insurance mandatory for entry in 2026?" 
                        answer="While not strictly mandatory for all tourist categories, it is highly recommended and required for certain long-stay visas like the LTR and Retirement (Non-O-A)."
                    />
                </div>
            </section>

          </div>

          {/* Sidebar */}
          <aside className="space-y-8 lg:sticky lg:top-10">
            <div className="bg-[#005a31] text-white p-10 rounded-[3rem] shadow-2xl overflow-hidden relative group">
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-white/5 rounded-full group-hover:scale-125 transition-transform duration-1000"></div>
              <h3 className="text-2xl font-black mb-8 border-b border-white/10 pb-4 italic text-orange-400">Thailand Support</h3>
              <div className="space-y-8 text-sm">
                <ContactLink label="Armenia Branch" href="tel:+37494810585" text="+374 94 810585" />
                <ContactLink label="UAE Branch" href="tel:+971507078334" text="+971 50 707 8334" highlight />
                <ContactLink label="Bangladesh Branch" href="tel:+8801701699743" text="+880 1701 699 743" />
                <ContactLink label="Official Email" href="mailto:info@eammu.com" text="info@eammu.com" />
              </div>
              <a href="https://wa.me/37494810585" className="mt-12 block w-full bg-orange-500 text-white text-center py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-[#005a31] transition-all duration-500 shadow-xl">
                Inquire on WhatsApp
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

// --- Helper Components (Standard across pages) ---
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

const Calendar = ({ size }) => <span style={{ fontSize: size }}>📅</span>;

export default ThailandVisa;