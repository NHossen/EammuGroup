import React from "react";
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ClipboardList, Send, Globe, ShieldCheck, FileText, Landmark, Sun } from 'lucide-react';

const SpainVisa = () => {
  return (
    <>
  <Helmet>
  <title>Spain Visa Application And Requirements | Get Visa Assistance – Eammu Holidays</title>

  <meta
    name="description"
    content="Apply for Spain visa with expert assistance from Eammu Holidays. Tourist, business, family visit, and work visa support with fast processing and complete documentation."
  />

  <meta
    name="keywords"
    content="Spain visa, Spain tourist visa, Spain business visa, Spain visit visa, Spain visa Bangladesh, Spain visa UAE, Spain work visa, Eammu Holidays"
  />

  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://eammu.com/spain-visa-application" />

  {/* Open Graph */}
  <meta property="og:title" content="Spain Visa Application & Requirements | Eammu Holidays" />
  <meta
    property="og:description"
    content="Professional Spain visa consultancy for tourists, business travelers, and family visits with expert document handling."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://eammu.com/spain-visa-application" />
  <meta
    property="og:image"
    content="https://www.eammu.com/images/spain-visa-banner.jpg"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Spain Visa Application | Eammu Holidays" />
  <meta
    name="twitter:description"
    content="Apply Spain tourist, business, or visit visa with trusted experts. Fast processing and full support by Eammu Holidays."
  />
  <meta
    name="twitter:image"
    content="https://www.eammu.com/images/spain-visa-banner.jpg"
  />

  {/* JSON-LD Schema */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "GovernmentService",
      "name": "Spain Visa Application Services",
      "description":
        "Complete Spain visa consultancy including tourist, business, visit, and work visas with documentation and submission support.",
      "provider": {
        "@type": "TravelAgency",
        "name": "Eammu Holidays",
        "url": "https://eammu.com/spain-visa-application",
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
        "name": "Spain"
      },
      "serviceType": "Spain Tourist, Business & Visit Visa"
    })}
  </script>
</Helmet>


      <main className="bg-white min-h-screen font-sans">
        
        {/* Header Section */}
        <section className="bg-[#005a31] py-20 px-6 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 flex items-center justify-center">
             <Sun size={400} className="text-white" />
          </div>
          <div className="relative z-10">
            <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-4 inline-block">
              Schengen Area Specialist
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter uppercase">
              Spain <span className="text-orange-500">Visa</span> Application – Requirements, Process & Fees
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto font-light">
              Your Gateway to the Mediterranean – Professional Immigration & Visa Services
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
                  title="Profile Evaluation" 
                  desc="We assess your purpose of visit—be it tourism, business, or the new Digital Nomad residency—to ensure you meet the Schengen criteria." 
                />
                <StepItem 
                  number="02" 
                  title="BLS Appointment Booking" 
                  desc="We manage your appointment at BLS International (the official partner for Spain) and prepare your application file to perfection." 
                />
                <StepItem 
                  number="03" 
                  title="Documentation & Insurance" 
                  desc="Assisting with Schengen-standard travel insurance, flight itineraries, and hotel vouchers that comply with Spanish Consulate rules." 
                />
                <StepItem 
                  number="04" 
                  title="Biometrics & Interview" 
                  desc="Guidance for your biometric enrollment and potential interview. We track your application until the visa decision is made." 
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
                <RequirementCard text="Valid Passport (at least 6 months remaining)" />
                <RequirementCard text="Two Recent Biometric Photos (White background)" />
                <RequirementCard text="Schengen Travel Insurance (Min. €30,000 coverage)" />
                <RequirementCard text="Personal Bank Statement (Last 6 Months)" />
                <RequirementCard text="NOC from Employer or Trade License for Business" />
                <RequirementCard text="Confirmed Round-trip Flight Reservation" />
                <RequirementCard text="Hotel Booking or Letter of Invitation (Acta de Invitación)" />
                <RequirementCard text="Covering Letter & Detailed Travel Itinerary" />
                <RequirementCard text="Income Tax Returns / Salary Slips" />
                <RequirementCard text="Residence Permit Copy (For UAE/Armenia applicants)" />
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
                  <span className="text-orange-400 text-[10px] font-black uppercase tracking-widest mb-1">Armenia HQ</span>
                  <a href="tel:+37494810585" className="text-xl font-bold hover:text-orange-300 transition-colors">+374 94 810585</a>
                </div>
                
                <div className="flex flex-col border-l-2 border-orange-500 pl-4">
                  <span className="text-orange-400 text-[10px] font-black uppercase tracking-widest mb-1">UAE Office</span>
                  <a href="tel:+971507078334" className="text-xl font-bold hover:text-orange-300 transition-colors">+971 50 707 8334</a>
                </div>

                <div className="flex flex-col">
                  <span className="text-orange-400 text-[10px] font-black uppercase tracking-widest mb-1">BD Hotline</span>
                  <a href="tel:+8801701699743" className="text-xl font-bold hover:text-orange-300 transition-colors">+880 1701 699 743</a>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <span className="text-orange-400 text-[10px] font-black uppercase tracking-widest mb-1">Inquiry Email</span>
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
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Verified Consultant</p>
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

export default SpainVisa;