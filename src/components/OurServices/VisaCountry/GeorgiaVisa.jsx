import React from "react";
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ClipboardList, Send, Globe, ShieldCheck, FileText, Mountain, MapPin } from 'lucide-react';

const GeorgiaVisa = () => {
  return (
    <>
    <Helmet>
  <title>Georgia Visa Application & Requirements | Eammu Holidays</title>

  <meta
    name="description"
    content="Apply for Georgia tourist and business visa with expert support from Eammu Holidays. Fast processing, document guidance, and high approval assistance for Georgia visa."
  />

  <meta
    name="keywords"
    content="Georgia visa, Georgia tourist visa, Georgia visa Bangladesh, Georgia visa application, Georgia e visa, Georgia travel visa, Georgia business visa, Eammu Holidays"
  />

  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://eammu.com/georgia-visa" />

  {/* Open Graph */}
  <meta property="og:title" content="Georgia Visa Application & Requirements | Eammu Holidays" />
  <meta
    property="og:description"
    content="Professional Georgia visa assistance for tourist and business travel. Apply confidently with Eammu Holidays."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://eammu.com/georgia-visa" />
  <meta
    property="og:image"
    content="https://www.eammu.com/images/georgia-visa-banner.jpg"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Georgia Visa Application | Eammu Holidays" />
  <meta
    name="twitter:description"
    content="Georgia tourist and business visa consultancy with complete document support and expert processing."
  />
  <meta
    name="twitter:image"
    content="https://www.eammu.com/images/georgia-visa-banner.jpg"
  />

  {/* JSON-LD Schema */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "GovernmentService",
      "name": "Georgia Visa Services",
      "description":
        "Complete assistance for Georgia tourist and business visa applications including eligibility check, documentation, and submission support.",
      "provider": {
        "@type": "TravelAgency",
        "name": "Eammu Holidays",
        "url": "https://eammu.com/georgia-visa",
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
        "name": "Georgia"
      },
      "serviceType": "Georgia Visa Consultancy"
    })}
  </script>
</Helmet>


      <main className="bg-white min-h-screen font-sans">
        
        {/* Header Section */}
        <section className="bg-[#005a31] py-20 px-6 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 flex items-center justify-center">
             <Mountain size={400} className="text-white" />
          </div>
          <div className="relative z-10">
            <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-4 inline-block">
              Caucasus Region Expert
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter uppercase">
              Georgia <span className="text-orange-500">Visa</span>
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto font-light">
              Explore the Intersection of Europe and Asia with Seamless Visa Processing
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
                  title="Nationality & Eligibility Check" 
                  desc="We verify if you are eligible for a visa-free entry, an E-Visa, or if you need a sticker visa from the Georgian Consulate." 
                />
                <StepItem 
                  number="02" 
                  title="Portal Submission (E-Visa)" 
                  desc="For eligible citizens, we manage the entire E-Visa portal application, ensuring all documents like travel insurance and photos are correct." 
                />
                <StepItem 
                  number="03" 
                  title="Type D Visa (For Residency)" 
                  desc="If you plan to work or invest, we assist in obtaining the Type D National Visa, which is the precursor to a Georgia Residence Permit." 
                />
                <StepItem 
                  number="04" 
                  title="Travel & Document Support" 
                  desc="We provide verified flight itineraries, hotel bookings, and travel insurance that strictly meet the Georgian Border Police requirements." 
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
                <h2 className="text-3xl font-black text-[#005a31] uppercase tracking-tight">Required Documents</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <RequirementCard text="Valid Passport (at least 6 months validity)" />
                <RequirementCard text="Digital Photograph (High resolution, white background)" />
                <RequirementCard text="Travel Insurance covering the entire stay" />
                <RequirementCard text="Proof of Financial Means (Bank Statement)" />
                <RequirementCard text="Confirmed Accommodation / Hotel Reservation" />
                <RequirementCard text="Return Flight Ticket Reservation" />
                <RequirementCard text="Employment Letter / Business License" />
                <RequirementCard text="Valid Residency Permit (If applying from a third country)" />
                <RequirementCard text="Purpose of Visit Statement (Cover Letter)" />
                <RequirementCard text="Criminal Record Certificate (For Type D Visas)" />
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
                  <span className="text-orange-400 text-[10px] font-black uppercase tracking-widest mb-1">Armenia (Main Office)</span>
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
                Inquire on WhatsApp
              </a>
            </div>

            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center">
              <ShieldCheck size={40} className="text-[#005a31] mb-4" />
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Global Trust</p>
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

export default GeorgiaVisa;