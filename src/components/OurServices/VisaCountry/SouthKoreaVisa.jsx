import React from "react";
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ClipboardList, Send, Globe, ShieldCheck, FileText, Landmark, TowerControl } from 'lucide-react';

const SouthKoreaVisa = () => {
  return (
    <>
  <Helmet>
  <title>South Korea Visa Application & Requirements | Tourist & Business Visa – Eammu Holidays</title>

  <meta
    name="description"
    content="Apply for South Korea visa with expert assistance from Eammu Holidays. Tourist, business, family visit, and work visa support with fast processing and complete documentation."
  />

  <meta
    name="keywords"
    content="South Korea visa, Korea tourist visa, South Korea business visa, Korea visit visa, South Korea visa Bangladesh, South Korea visa UAE, Korea work visa, Eammu Holidays"
  />

  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://eammu.com/south-korea-visa" />

  {/* Open Graph */}
  <meta property="og:title" content="South Korea Visa Application & Requirements | Eammu Holidays" />
  <meta
    property="og:description"
    content="Professional South Korea visa consultancy for tourists, business travelers, and family visits with expert document handling."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://eammu.com/south-korea-visa" />
  <meta
    property="og:image"
    content="https://www.eammu.com/images/south-korea-visa-banner.jpg"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="South Korea Visa Application | Eammu Holidays" />
  <meta
    name="twitter:description"
    content="Apply South Korea tourist, business, or visit visa with trusted experts. Fast processing and full support by Eammu Holidays."
  />
  <meta
    name="twitter:image"
    content="https://www.eammu.com/images/south-korea-visa-banner.jpg"
  />

  {/* JSON-LD Schema */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "GovernmentService",
      "name": "South Korea Visa Application Services",
      "description":
        "Complete South Korea visa consultancy including tourist, business, visit, and work visas with documentation and submission support.",
      "provider": {
        "@type": "TravelAgency",
        "name": "Eammu Holidays",
        "url": "https://eammu.com/south-korea-visa",
        "logo": "https://www.eammu.com/images/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+8801701699743",
          "contactType": "Customer Support",
          "email": "info@eammu.com"
        }
      },
      "areaServed": {
        "@type": "Country",
        "name": "South Korea"
      },
      "serviceType": "South Korea Tourist, Business & Visit Visa"
    })}
  </script>
</Helmet>


      <main className="bg-white min-h-screen font-sans">
        
        {/* Header Section */}
        <section className="bg-[#005a31] py-20 px-6 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 flex items-center justify-center">
             <TowerControl size={400} className="text-white" />
          </div>
          <div className="relative z-10">
            <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-4 inline-block">
              Premium K-Visa Consultancy
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter uppercase">
              South <span className="text-orange-500">Korea</span>
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto font-light">
              Experience the Dynamic Blend of Tradition and High-Tech Innovation
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          
          {/* Main Content (Left) */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Procedure Section */}
            <section>
              <div className="flex items-center gap-4 mb-10 border-b border-gray-100 pb-4">
                <div className="bg-orange-500 p-3 rounded-2xl text-white">
                  <Send size={28} />
                </div>
                <h2 className="text-3xl font-black text-[#005a31] uppercase tracking-tight">Application Procedure</h2>
              </div>
              
              <div className="space-y-10">
                <StepItem 
                  number="01" 
                  title="Visa Category & K-ETA Check" 
                  desc="We analyze if you need a sticker visa or if you are eligible for the Korea Electronic Travel Authorization (K-ETA) based on your citizenship." 
                />
                <StepItem 
                  number="02" 
                  title="Document Compilation" 
                  desc="Our experts help you prepare the visa application form and organize financial and professional documents as per the Korean Consulate's standards." 
                />
                <StepItem 
                  number="03" 
                  title="KVAC / Embassy Submission" 
                  desc="We manage the submission process through the Korea Visa Application Center (KVAC) or the Embassy, ensuring all biometric requirements are met." 
                />
                <StepItem 
                  number="04" 
                  title="Visa Issuance & E-Visa Collection" 
                  desc="Once approved, the South Korean visa is often issued as a 'Visa Grant Notice' (digital format) which we track and deliver to you." 
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
                <RequirementCard text="Original Passport (valid for more than 6 months)" />
                <RequirementCard text="Visa Application Form (Completed & Signed)" />
                <RequirementCard text="One Color Photo (3.5cm x 4.5cm, white background)" />
                <RequirementCard text="Personal Bank Statement (Last 6 Months with Bank Seal)" />
                <RequirementCard text="Bank Certificate (Showing current balance)" />
                <RequirementCard text="NOC from Employer or Trade License for Business owners" />
                <RequirementCard text="Detailed Travel Itinerary & Round-trip Flight Booking" />
                <RequirementCard text="Hotel Confirmation in South Korea" />
                <RequirementCard text="Copy of Residence Permit (For UAE/Armenia applicants)" />
                <RequirementCard text="Company Registration & Tax Docs (For Business Visa)" />
              </div>
            </section>

          </div>

          {/* Sidebar (Right) */}
          <aside className="space-y-8 lg:sticky lg:top-10">
            <div className="bg-[#005a31] text-white p-10 rounded-[3rem] shadow-2xl overflow-hidden relative group">
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-white/5 rounded-full group-hover:scale-125 transition-transform duration-1000"></div>
              
              <h3 className="text-2xl font-black mb-8 border-b border-white/10 pb-4 italic text-orange-400">
                South Korea Support
              </h3>

              <div className="space-y-8">
                <div className="flex flex-col">
                  <span className="text-orange-400 text-[10px] font-black uppercase tracking-widest mb-1">Armenia Office</span>
                  <a href="tel:+37494810585" className="text-xl font-bold hover:text-orange-300 transition-colors">+374 94 810585</a>
                </div>
                
                <div className="flex flex-col border-l-2 border-orange-500 pl-4">
                  <span className="text-orange-400 text-[10px] font-black uppercase tracking-widest mb-1">UAE Support</span>
                  <a href="tel:+971507078334" className="text-xl font-bold hover:text-orange-300 transition-colors">+971 50 707 8334</a>
                </div>

                <div className="flex flex-col">
                  <span className="text-orange-400 text-[10px] font-black uppercase tracking-widest mb-1">BD Hotline</span>
                  <a href="tel:+8801701699743" className="text-xl font-bold hover:text-orange-300 transition-colors">+880 1701 699 743</a>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <span className="text-orange-400 text-[10px] font-black uppercase tracking-widest mb-1">Official Email</span>
                  <a href="mailto:info@eammu.com" className="text-lg font-medium hover:text-orange-300 transition-colors break-all">info@eammu.com</a>
                </div>
              </div>

              <a 
                href="https://wa.me/37494810585" 
                target="_blank" 
                rel="noreferrer" 
                className="mt-12 block w-full bg-orange-500 text-white text-center py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-[#005a31] transition-all duration-500 shadow-xl"
              >
                Inquire via WhatsApp
              </a>
            </div>

            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center">
              <ShieldCheck size={40} className="text-[#005a31] mb-4" />
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Global Immigration</p>
              <p className="text-[#005a31] font-black text-xl italic tracking-tighter">EAMMU HOLIDAYS</p>
            </div>
          </aside>

        </section>
      </main>
    </>
  );
};

// Helper Components
const StepItem = ({ number, title, desc }) => (
  <div className="flex gap-6 group">
    <div className="text-4xl font-black text-slate-200 group-hover:text-orange-500 transition-all duration-300 leading-none">
      {number}
    </div>
    <div className="pt-1">
      <h4 className="text-xl font-black text-[#005a31] mb-2 uppercase tracking-tight">{title}</h4>
      <p className="text-gray-500 leading-relaxed text-base">{desc}</p>
    </div>
  </div>
);

const RequirementCard = ({ text }) => (
  <div className="flex items-start gap-3 group">
    <div className="bg-orange-100 p-1 rounded-full group-hover:bg-[#005a31] transition-colors">
      <CheckCircle size={16} className="text-orange-600 group-hover:text-white" />
    </div>
    <span className="text-gray-700 font-medium text-sm leading-tight">{text}</span>
  </div>
);

export default SouthKoreaVisa;