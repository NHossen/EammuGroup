import React from "react";
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ClipboardList, Send, Globe, ShieldCheck, FileText, Landmark } from 'lucide-react';

const UkVisa = () => {
  return (
    <>
      <Helmet>
        <title>UK Visa Requirements & Application Procedure | Eammu Immigration</title>
        <meta name="description" content="Expert UK Visa assistance for Standard Visitor and Student visas. Learn about the UK visa application procedure and mandatory documents with Eammu Immigration." />
      </Helmet>

      <main className="bg-white min-h-screen font-sans">
        
        {/* Header Section */}
        <section className="bg-[#005a31] py-20 px-6 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 flex items-center justify-center">
             <Landmark size={400} className="text-white" />
          </div>
          <div className="relative z-10">
            <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-4 inline-block">
              British Council Certified Partners
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter">
              UK <span className="text-orange-500">VISA</span>
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto font-light">
              Expert Solutions for Standard Visitor, Student, and Family Visas
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
                  title="Profile Assessment" 
                  desc="We review your travel history, financial stability, and ties to your home country to build a strong case for the UKVI." 
                />
                <StepItem 
                  number="02" 
                  title="Online Application Submission" 
                  desc="We assist you in filling out the official UK Government visa application form, ensuring all details align with your supporting documents." 
                />
                <StepItem 
                  number="03" 
                  title="Document Upload & IHS Payment" 
                  desc="We manage the digital scanning and uploading of your documents to the VFS Global portal and handle IHS (Healthcare) payments for students." 
                />
                <StepItem 
                  number="04" 
                  title="Biometric Enrollment" 
                  desc="We schedule your appointment at VFS Global for fingerprinting and facial photograph. No physical interview is usually required for visitor visas." 
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
                <RequirementCard text="Original Passport (valid for at least 6 months)" />
                <RequirementCard text="Previous Passports (to show global travel history)" />
                <RequirementCard text="Personal Bank Statement (Last 6 Months) with seal" />
                <RequirementCard text="Solvency Certificate from Bank" />
                <RequirementCard text="Income Tax Returns / Professional Tax Docs" />
                <RequirementCard text="NOC from Employer or Trade License for Business" />
                <RequirementCard text="Proof of Accommodation & Flight Itinerary" />
                <RequirementCard text="Cover Letter explaining the purpose of visit" />
                <RequirementCard text="CAS Letter (For UK Student Visa only)" />
                <RequirementCard text="TB Test Result (From IOM, if applicable)" />
              </div>
            </section>

          </div>

          {/* Sidebar (Right) */}
          <aside className="space-y-8 lg:sticky lg:top-10">
            <div className="bg-[#005a31] text-white p-10 rounded-[3rem] shadow-2xl overflow-hidden relative group">
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-white/5 rounded-full group-hover:scale-125 transition-transform duration-700"></div>
              
              <h3 className="text-2xl font-black mb-8 border-b border-white/10 pb-4 italic text-orange-400">
                UK Visa Support
              </h3>

              <div className="space-y-8">
                <div className="flex flex-col">
                  <span className="text-orange-400 text-[10px] font-black uppercase tracking-widest mb-1">Armenia Branch</span>
                  <a href="tel:+37494810585" className="text-xl font-bold hover:text-orange-300 transition-colors">+374 94 810585</a>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-orange-400 text-[10px] font-black uppercase tracking-widest mb-1">UAE Branch</span>
                  <a href="tel:+971507078334" className="text-xl font-bold hover:text-orange-300 transition-colors">+971 50 707 8334</a>
                </div>

                <div className="flex flex-col">
                  <span className="text-orange-400 text-[10px] font-black uppercase tracking-widest mb-1">Bangladesh Branch</span>
                  <a href="tel:+8801701699743" className="text-xl font-bold hover:text-orange-300 transition-colors">+880 1701 699 743</a>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <span className="text-orange-400 text-[10px] font-black uppercase tracking-widest mb-1">Support Email</span>
                  <a href="mailto:info@eammu.com" className="text-lg font-medium hover:text-orange-300 transition-colors break-all">info@eammu.com</a>
                </div>
              </div>

              <a 
                href="https://wa.me/37494810585" 
                target="_blank" 
                rel="noreferrer" 
                className="mt-12 block w-full bg-orange-500 text-white text-center py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-[#005a31] transition-all duration-500 shadow-xl"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center">
              <ShieldCheck size={40} className="text-[#005a31] mb-4" />
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Authorized Consultancy</p>
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

export default UkVisa;