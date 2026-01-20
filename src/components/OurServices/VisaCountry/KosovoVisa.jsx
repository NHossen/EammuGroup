import React from "react";
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ClipboardList, Send, Globe, ShieldCheck, FileText, Landmark, Map } from 'lucide-react';

const KosovoVisa = () => {
  return (
    <>
   <Helmet>
  <title>Kosovo Visa Application & Requirements | Tourist & Business Visa – Eammu Holidays</title>

  <meta
    name="description"
    content="Apply for Kosovo tourist, business, and visit visas with expert guidance from Eammu Holidays. Get complete document preparation, eligibility check, and professional visa consultancy."
  />

  <meta
    name="keywords"
    content="Kosovo visa, Kosovo visa application, Kosovo tourist visa, Kosovo business visa, Kosovo visa Bangladesh, Kosovo visa UAE, Eammu Holidays"
  />

  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://eammu.com/kosovo-visa" />

  {/* Open Graph */}
  <meta property="og:title" content="Kosovo Visa Application & Requirements | Eammu Holidays" />
  <meta
    property="og:description"
    content="Professional Kosovo visa assistance for tourist, business, and visit purposes. Apply confidently with Eammu Holidays."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://eammu.com/kosovo-visa" />
  <meta
    property="og:image"
    content="https://www.eammu.com/images/kosovo-visa-banner.jpg"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Kosovo Visa Application | Eammu Holidays" />
  <meta
    name="twitter:description"
    content="Kosovo tourist and business visa consultancy with full documentation and embassy submission support."
  />
  <meta
    name="twitter:image"
    content="https://www.eammu.com/images/kosovo-visa-banner.jpg"
  />

  {/* JSON-LD Schema */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "GovernmentService",
      "name": "Kosovo Visa Application Services",
      "description":
        "Professional Kosovo visa consultancy including document preparation, eligibility assessment, and embassy submission guidance.",
      "provider": {
        "@type": "TravelAgency",
        "name": "Eammu Holidays",
        "url": "https://eammu.com/kosovo-visa",
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
        "name": "Kosovo"
      },
      "serviceType": "Kosovo Tourist & Business Visa Consultancy"
    })}
  </script>
</Helmet>


      <main className="bg-white min-h-screen font-sans">
        
        {/* Header Section */}
        <section className="bg-[#005a31] py-20 px-6 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 flex items-center justify-center">
             <Map size={400} className="text-white" />
          </div>
          <div className="relative z-10">
            <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-4 inline-block">
              Balkan Peninsula Gateway
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter uppercase">
              Kosovo <span className="text-orange-500">Visa</span>
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto font-light">
              Explore the Heart of the Balkans with Expert Visa Facilitation
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
                  title="Visa Necessity Check" 
                  desc="We verify if you need a visa or if you can enter visa-free (holders of valid multi-entry Schengen, UK, or US visas are often exempt for up to 15 days)." 
                />
                <StepItem 
                  number="02" 
                  title="Document Legalization" 
                  desc="Preparing your application for the Consulate of Kosovo. We assist with the translation of documents into Albanian or Serbian as required." 
                />
                <StepItem 
                  number="03" 
                  title="Consular Appointment" 
                  desc="We schedule your interview and submission appointment at the nearest Kosovo Diplomatic Mission (usually in Istanbul or Sofia if no local embassy exists)." 
                />
                <StepItem 
                  number="04" 
                  title="Visa Processing & Collection" 
                  desc="The standard processing time is 15 days. We monitor your application status and guide you through the passport collection process." 
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
                <h2 className="text-3xl font-black text-[#005a31] uppercase tracking-tight">Mandatory Checklist</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <RequirementCard text="Valid Passport (at least 6 months validity)" />
                <RequirementCard text="One Completed Visa Application Form" />
                <RequirementCard text="Recent Biometric Photo (35x45mm)" />
                <RequirementCard text="Travel Medical Insurance (Min. €30,000 coverage)" />
                <RequirementCard text="Proof of Accommodation (Hotel booking or Invitation)" />
                <RequirementCard text="Round-trip Flight Reservation" />
                <RequirementCard text="Proof of Sufficient Financial Means (Bank Statement)" />
                <RequirementCard text="Employment Letter / NOC / Business Registration" />
                <RequirementCard text="Visa Fee Payment Receipt" />
                <RequirementCard text="Criminal Record Certificate (If requested)" />
              </div>
            </section>

          </div>

          {/* Sidebar (Right) */}
          <aside className="space-y-8 lg:sticky lg:top-10">
            <div className="bg-[#005a31] text-white p-10 rounded-[3rem] shadow-2xl overflow-hidden relative group">
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-white/5 rounded-full group-hover:scale-125 transition-transform duration-1000"></div>
              
              <h3 className="text-2xl font-black mb-8 border-b border-white/10 pb-4 italic text-orange-400">
                Contact Experts
              </h3>

              <div className="space-y-8">
                <div className="flex flex-col">
                  <span className="text-orange-400 text-[10px] font-black uppercase tracking-widest mb-1">Armenia (HQ)</span>
                  <a href="tel:+37494810585" className="text-xl font-bold hover:text-orange-300 transition-colors">+374 94 810585</a>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-orange-400 text-[10px] font-black uppercase tracking-widest mb-1">UAE Office</span>
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
                Inquire on WhatsApp
              </a>
            </div>

            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center">
              <ShieldCheck size={40} className="text-[#005a31] mb-4" />
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Global Solutions</p>
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

export default KosovoVisa;