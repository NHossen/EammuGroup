import React from "react";
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, ClipboardList, Send, Globe, ShieldCheck, 
  FileText, Landmark, TowerControl, HelpCircle, Clock, Wallet, Info, 
  Briefcase, Coffee, MapPin, TrendingUp, PlayCircle, Image as ImageIcon, Compass, Ship
} from 'lucide-react';

const SingaporeVisa = () => {
  return (
    <>
      <Helmet>
        <title>Singapore Visa 2026: Requirements, SGAC Guide & Fees | Eammu Holidays</title>
        <meta 
          name="description" 
          content="Apply for Singapore Tourist & Business e-Visas in 2026. Expert guide on SG Arrival Card (SGAC), Form 14A, and visa processing for UAE & Bangladesh residents." 
        />
        <meta 
          name="keywords" 
          content="Singapore visa 2026, SG Arrival Card QR, Singapore e-visa Dubai, Singapore visa Bangladesh, Form 14A Singapore, Singapore business visa, Eammu Holidays" 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://eammu.com/singapore-visa-application" />
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
                    Authorized e-Visa Partner
                </span>
                <span className="bg-white/20 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                    SGAC QR Specialist 2026
                </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase leading-tight">
              Explore <span className="text-orange-500">Singapore</span>
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto font-light leading-relaxed">
              Fast-track your entry to the Lion City with our expert handling of e-Visas and the mandatory 2026 SG Arrival Card (SGAC).
            </p>
          </div>
        </section>

        {/* --- VIDEO TUTORIALS SECTION --- */}
        <section className="bg-slate-50 py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-12">
              <div className="flex items-center gap-3 mb-4">
                <PlayCircle className="text-orange-500" size={32} />
                <h2 className="text-4xl font-black text-[#005a31] uppercase">Visa Video Guides</h2>
              </div>
              <p className="text-gray-500 text-center max-w-2xl italic">Watch our step-by-step breakdowns for a 100% success rate in 2026.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <VideoCard 
                id="bZTWBMf3YME" 
                title="SG Arrival Card (SGAC) 2026" 
                desc="How to generate your mandatory QR code 72 hours before you land at Changi."
              />
              <VideoCard 
                id="A__fXlP5rCs" 
                title="E-Visa Application Process" 
                desc="A walkthrough of the Form 14A and supporting document uploads for 2026."
              />
              <VideoCard 
                id="eVFtRdyq_aY" 
                title="Changi Airport Entry" 
                desc="What happens at immigration: Biometrics and the new digital e-Pass system."
              />
            </div>
          </div>
        </section>

        {/* --- VISA CATEGORIES POSTERS --- */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-12 border-b border-gray-100 pb-6">
              <ImageIcon className="text-orange-500" size={32} />
              <h2 className="text-4xl font-black text-[#005a31] uppercase">Available Visa Types</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PosterCard 
                image="https://images.unsplash.com/photo-1525625232767-4b0812ad2dfa?q=80&w=800" 
                badge="Tourism" 
                title="Entry e-Visa" 
                detail="30 Days (Multiple/Single)"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1562618956-4309b4698204?q=80&w=800" 
                badge="Business" 
                title="Corporate Visa" 
                detail="Meetings & Networking"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=800" 
                badge="Talent" 
                title="ONE Pass" 
                detail="5-Year High Earners"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800" 
                badge="Work" 
                title="EP / S Pass" 
                detail="COMPASS Points System"
              />
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          
          <div className="lg:col-span-2 space-y-24">
            
            {/* Quick Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <MetricBox label="Approval Time" value="3-5 Days" icon={<Clock size={20}/>} />
                <MetricBox label="Success Rate" value="98.7%" icon={<TrendingUp size={20}/>} />
                <MetricBox label="ICA Fee" value="30 SGD" icon={<Wallet size={20}/>} />
                <MetricBox label="Entry Format" value="e-Visa PDF" icon={<Globe size={20}/>} />
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
                  title="Document Preparation" 
                  desc="Submit your Form 14A, passport copy, and UAE/Bangladesh residency proofs. Our team reviews every detail to ensure ICA compliance." 
                />
                <StepItem 
                  number="02" 
                  title="SAVE Portal Submission" 
                  desc="As an authorized agency, we submit your application through the ICA SAVE system and settle the non-refundable processing fees." 
                />
                <StepItem 
                  number="03" 
                  title="Mandatory SGAC Filing" 
                  desc="3 days before your departure, we process your SG Arrival Card health declaration to generate the QR code required for boarding." 
                />
                <StepItem 
                  number="04" 
                  title="e-Visa & e-Pass Delivery" 
                  desc="Upon approval, your e-Visa is sent via PDF. When you land, your 'e-Pass' (digital stay permit) is sent directly to your email." 
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
                <h2 className="text-3xl font-black text-[#005a31] uppercase tracking-tight">Document Checklist 2026</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <RequirementCard text="Passport (6+ months validity)" />
                <RequirementCard text="Duly signed Form 14A" />
                <RequirementCard text="35x45mm Photo (White BG)" />
                <RequirementCard text="NOC from Current Employer" />
                <RequirementCard text="Confirmed Flight & Hotel" />
                <RequirementCard text="Letter of Introduction (LOI V39A)" />
                <RequirementCard text="3 Months Bank Statement" />
                <RequirementCard text="Yellow Fever Cert (Specific Countries)" />
                <RequirementCard text="Valid Residence Visa (UAE/BD)" />
                <RequirementCard text="Business Profile (For Corporate)" />
              </div>
            </section>

            {/* FAQ Section */}
            <section>
                <div className="flex items-center gap-4 mb-10">
                    <HelpCircle size={32} className="text-orange-500" />
                    <h2 className="text-3xl font-black text-[#005a31] uppercase tracking-tight">Singapore Visa FAQ</h2>
                </div>
                <div className="divide-y divide-gray-100">
                    <FAQItem 
                        question="Do I need a physical stamp on my passport?" 
                        answer="No, Singapore is fully digital in 2026. You receive an e-Visa for entry and an e-Pass (sent via email) upon arrival that confirms your stay duration."
                    />
                    <FAQItem 
                        question="When should I apply for the SG Arrival Card (SGAC)?" 
                        answer="The SGAC must be submitted within 3 days (72 hours) PRIOR to your arrival in Singapore. It is a mandatory requirement for all travelers, including those who are visa-exempt."
                    />
                    <FAQItem 
                        question="What is the Letter of Introduction (LOI)?" 
                        answer="The V39A form is a letter issued by a Singapore citizen or permanent resident to support your application. We can assist if you do not have a local sponsor."
                    />
                </div>
            </section>

          </div>

          {/* Sidebar */}
          <aside className="space-y-8 lg:sticky lg:top-10">
            <div className="bg-[#005a31] text-white p-10 rounded-[3rem] shadow-2xl overflow-hidden relative group">
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-white/5 rounded-full group-hover:scale-125 transition-transform duration-1000"></div>
              <h3 className="text-2xl font-black mb-8 border-b border-white/10 pb-4 italic text-orange-400">Singapore Support</h3>
              <div className="space-y-8 text-sm">
                <ContactLink label="Armenia Office" href="tel:+37494810585" text="+374 94 810585" />
                <ContactLink label="UAE Helpdesk" href="tel:+971507078334" text="+971 50 707 8334" highlight />
                <ContactLink label="Bangladesh Desk" href="tel:+8801701699743" text="+880 1701 699 743" />
                <ContactLink label="Global Email" href="mailto:info@eammu.com" text="info@eammu.com" />
              </div>
              <a href="https://wa.me/37494810585" className="mt-12 block w-full bg-orange-500 text-white text-center py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-[#005a31] transition-all duration-500 shadow-xl">
                Chat on WhatsApp
              </a>
            </div>
            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center">
              <ShieldCheck size={40} className="text-[#005a31] mb-4" />
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Global Compliance</p>
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

export default SingaporeVisa;