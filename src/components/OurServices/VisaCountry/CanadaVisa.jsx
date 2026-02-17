import React from "react";
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, ClipboardList, Send, Globe, ShieldCheck, 
  FileText, Landmark, GraduationCap, HelpCircle, Clock, Wallet, Info, 
  Briefcase, Coffee, MapPin, TrendingUp, PlayCircle, Image as ImageIcon, Compass, Map
} from 'lucide-react';

const CanadaVisa = () => {
  return (
    <>
          <Helmet>

  <title>Canada Visa Application And Requirements | Get Visa Assistance - Eammu Holidays</title>

  <meta 

    name="description" 

    content="Get expert assistance for Canada tourist visa, student visa, work permit, and permanent residency. Eammu Holidays provides step-by-step guidance for applicants from Bangladesh and UAE." 

  />

  <meta 

    name="keywords" 

    content="Canada visa, Canada tourist visa, Canada student visa, Canada work permit, Canada PR, visa consultancy Canada, Eammu Holidays" 

  />

  <meta name="robots" content="index, follow" />

  <link rel="canonical" href="https://eammu.com/canada-visa" />



  {/* Open Graph */}

  <meta property="og:title" content="Canada Visa & Immigration Services | Eammu Holidays" />

  <meta 

    property="og:description" 

    content="Eammu Holidays provides professional Canada visa consultancy including tourist, student, work visas, and permanent residency. Trusted support for applicants from Bangladesh and UAE." 

  />

  <meta property="og:type" content="website" />

  <meta property="og:url" content="https://eammu.com/canada-visa" />

  <meta 

    property="og:image" 

    content="https://www.eammu.com/images/canada-visa-banner.jpg" 

  />



  {/* Twitter Card */}

  <meta name="twitter:card" content="summary_large_image" />

  <meta name="twitter:title" content="Canada Visa & Immigration Services | Eammu Holidays" />

  <meta 

    name="twitter:description" 

    content="Professional Canada visa support by Eammu Holidays. Apply for tourist, student, work visas or permanent residency hassle-free with our expert guidance." 

  />

  <meta 

    name="twitter:image" 

    content="https://www.eammu.com/images/canada-visa-banner.jpg" 

  />



  {/* JSON-LD Structured Data */}

  <script type="application/ld+json">

    {JSON.stringify({

      "@context": "https://schema.org",

      "@type": "GovernmentService",

      "name": "Canada Visa & Immigration Services",

      "provider": {

        "@type": "TravelAgency",

        "name": "Eammu Holidays",

        "url": "https://eammu.com/canada-visa",

        "logo": "https://www.eammu.com/images/logo.png",

        "sameAs": [

          "https://www.facebook.com/eammu",

          "https://www.instagram.com/eammu",

          "https://www.linkedin.com/company/eammu"

        ],

        "contactPoint": {

          "@type": "ContactPoint",

          "contactType": "customer support",

          "telephone": "+8801701699743",

          "email": "info@eammu.com"

        }

      },

      "serviceType": "Visa Consultancy & Immigration Services",

      "areaServed": "CA",

      "description": "Step-by-step guidance for Canada tourist visa, student visa, work permit, and permanent residency by Eammu Holidays. Trusted consultancy for applicants from Bangladesh and UAE."

    })}

  </script>

</Helmet>

      <main className="bg-white min-h-screen font-sans text-slate-900">
        
        {/* --- HERO SECTION --- */}
        <section className="bg-[#005a31] py-24 px-6 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 flex items-center justify-center">
             <GraduationCap size={500} className="text-white" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="flex justify-center gap-2 mb-6">
                <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                    IRCC Portal Specialist
                </span>
                <span className="bg-white/20 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                    2026 Policy Compliant
                </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase leading-tight">
              Begin Your <span className="text-orange-500">Canadian</span> Journey
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto font-light leading-relaxed">
              Navigating the IRCC complexity with precision. Professional guidance for Visitor Visas, Study Permits, and Permanent Residency.
            </p>
          </div>
        </section>

        {/* --- VIDEO TUTORIALS SECTION --- */}
        <section className="bg-slate-50 py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-12">
              <div className="flex items-center gap-3 mb-4">
                <PlayCircle className="text-orange-500" size={32} />
                <h2 className="text-4xl font-black text-[#005a31] uppercase">Canada Process Videos</h2>
              </div>
              <p className="text-gray-500 text-center max-w-2xl italic">Visual walk-throughs of the 2026 Canada immigration and visa landscape.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <VideoCard 
                id="wI8690U6YTo" 
                title="Visitor Visa 2026 Guide" 
                desc="How to prepare a winning Letter of Explanation (SOP) for your tourist application."
              />
              <VideoCard 
                id="l-T4e2H5oIs" 
                title="Study Permit Framework" 
                desc="Understanding the new 2026 caps and PAL (Provincial Attestation Letter) requirements."
              />
              <VideoCard 
                id="7X8eWp4RjA0" 
                title="VFS Biometrics Walkthrough" 
                desc="What to expect during your appointment at VFS Global centers worldwide."
              />
            </div>
          </div>
        </section>

        {/* --- VISA CATEGORIES POSTERS --- */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-12 border-b border-gray-100 pb-6">
              <ImageIcon className="text-orange-500" size={32} />
              <h2 className="text-4xl font-black text-[#005a31] uppercase">Entry Categories</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PosterCard 
                image="https://images.unsplash.com/photo-1517935707175-e990b0c212c1?q=80&w=800" 
                badge="Tourist" 
                title="Visitor Visa" 
                detail="Up to 10 Years Validity"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800" 
                badge="Education" 
                title="Study Permit" 
                detail="DLI Approved Assistance"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1521737706096-31500397bd08?q=80&w=800" 
                badge="Career" 
                title="Work Permit" 
                detail="LMIA & Open Work Permits"
              />
              <PosterCard 
                image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800" 
                badge="Migration" 
                title="Express Entry" 
                detail="PR & Provincial Nominees"
              />
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          
          <div className="lg:col-span-2 space-y-24">
            
            {/* Quick Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <MetricBox label="Avg. Processing" value="4 - 12 Weeks" icon={<Clock size={20}/>} />
                <MetricBox label="Visa Fee" value="100 CAD" icon={<Wallet size={20}/>} />
                <MetricBox label="Biometrics" value="85 CAD" icon={<ShieldCheck size={20}/>} />
                <MetricBox label="Sticker Type" value="Counterfoil" icon={<Globe size={20}/>} />
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
                  title="Profile Audit" 
                  desc="We conduct a rigorous review of your ties to your home country, financial health, and travel history to ensure you meet IRCC's admissibility criteria." 
                />
                <StepItem 
                  number="02" 
                  title="Documentation & SOP" 
                  desc="Our team helps draft a compelling Statement of Purpose (SOP) and compiles all IMM forms, ensuring they are consistent and accurate." 
                />
                <StepItem 
                  number="03" 
                  title="Biometrics & Medicals" 
                  desc="After submission, we coordinate your Biometric Instruction Letter (BIL) and upfront medicals (if required) at approved panel physicians." 
                />
                <StepItem 
                  number="04" 
                  title="Decision & PPR" 
                  desc="Once the Passport Request (PPR) is received, we manage the logistics of sending your passport to the Visa Office for the final stamp." 
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
                <RequirementCard text="Valid Passport (6+ months)" />
                <RequirementCard text="Digital Photo (35x45mm, White BG)" />
                <RequirementCard text="Letter of Explanation (LOE/SOP)" />
                <RequirementCard text="6 Months Bank Statement" />
                <RequirementCard text="Employment Letter / Trade License" />
                <RequirementCard text="Invitation Letter (If Applicable)" />
                <RequirementCard text="Family Information Form (IMM 5645)" />
                <RequirementCard text="Proof of Assets (Property/FDR)" />
                <RequirementCard text="Travel History (Old Passports)" />
                <RequirementCard text="LOA / Provincial Attestation (Students)" />
              </div>
            </section>

            {/* FAQ Section */}
            <section>
                <div className="flex items-center gap-4 mb-10">
                    <HelpCircle size={32} className="text-orange-500" />
                    <h2 className="text-3xl font-black text-[#005a31] uppercase tracking-tight">Canada Visa FAQ</h2>
                </div>
                <div className="divide-y divide-gray-100">
                    <FAQItem 
                        question="How much balance is required for a Visitor Visa?" 
                        answer="There is no fixed amount, but you should show enough to cover your trip (usually 10,000 - 15,000 CAD per person) plus proof that you have significant liquid assets to return to."
                    />
                    <FAQItem 
                        question="Can I convert a Visitor Visa to a Work Permit?" 
                        answer="Under current 2026 public policies, certain visitors with a valid job offer and LMIA may be eligible to apply for a work permit from within Canada. Contact us for a case-by-case review."
                    />
                    <FAQItem 
                        question="Do I need an IELTS for a Tourist Visa?" 
                        answer="No, IELTS is not required for a Visitor Visa. However, it is mandatory for most Study Permits and all Express Entry (PR) categories."
                    />
                </div>
            </section>

          </div>

          {/* Sidebar */}
          <aside className="space-y-8 lg:sticky lg:top-10">
            <div className="bg-[#005a31] text-white p-10 rounded-[3rem] shadow-2xl overflow-hidden relative group">
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-white/5 rounded-full group-hover:scale-125 transition-transform duration-1000"></div>
              <h3 className="text-2xl font-black mb-8 border-b border-white/10 pb-4 italic text-orange-400">Canada Support</h3>
              <div className="space-y-8 text-sm">
                <ContactLink label="Armenia Office" href="tel:+37494810585" text="+374 94 810585" />
                <ContactLink label="UAE Desk" href="tel:+971507078334" text="+971 50 707 8334" highlight />
                <ContactLink label="Bangladesh Hotline" href="tel:+8801701699743" text="+880 1701 699 743" />
                <ContactLink label="Official Email" href="mailto:info@eammu.com" text="info@eammu.com" />
              </div>
              <a href="https://wa.me/37494810585" className="mt-12 block w-full bg-orange-500 text-white text-center py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-[#005a31] transition-all duration-500 shadow-xl">
                Chat on WhatsApp
              </a>
            </div>
            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center">
              <ShieldCheck size={40} className="text-[#005a31] mb-4" />
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Authorized Consultancy</p>
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

export default CanadaVisa;