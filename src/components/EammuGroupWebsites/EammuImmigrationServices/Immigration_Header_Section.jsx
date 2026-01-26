import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Search, Globe, Plane, ShieldCheck } from "lucide-react";

const Immigration_Header_Section = () => {
  return (
    <div className="px-4 container mx-auto py-8">
      {/* SEO Helmet (Unchanged) */}
      <Helmet>
        <title>Eammu Holidays | Global Visa Experts - Travel Agency Bangladesh</title>
        <meta
          name="description"
          content="Explore global visa services by Eammu Holidays. We provide expert support for student, tourist, and work visas for the USA, Canada, UK, Europe, and more."
        />
        <meta
          name="keywords"
          content="Eammu Holidays, Visa Consultancy, Work Visa, Student Visa, Tourist Visa, USA Visa, Canada Immigration, UK Study Visa, Europe Visa Agent"
        />
        <meta property="og:title" content="Eammu Holidays" />
        <meta
          property="og:description"
          content="Reliable visa services for students, tourists, and professionals. Apply confidently with Eammu."
        />
        <meta property="og:url" content="https://www.eammu.com/eammuimmigrationservices" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="/eammu_holidays_Travel_agency.webp"
        />
      </Helmet>

      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-gray-100 mt-4">
        
        {/* Brand & Info Section */}
        <div className="flex-1 space-y-3 text-center md:text-left">
          <Link to="/" className="inline-block group">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="bg-[#005a31] p-2 rounded-xl group-hover:rotate-12 transition-transform">
                <Globe className="text-white" size={28} />
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-[#005a31] tracking-tighter">
                Eammu <span className="text-orange-500">Holidays</span>
              </h1>
            </div>
          </Link>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-gray-500 font-medium">
            <span className="flex items-center gap-1 text-xs bg-slate-100 px-3 py-1 rounded-full text-[#005a31]">
              <Plane size={14} /> Student & Work Visas
            </span>
            <span className="flex items-center gap-1 text-xs bg-slate-100 px-3 py-1 rounded-full text-orange-600">
              <ShieldCheck size={14} /> Trusted Consultancy
            </span>
          </div>
        </div>

        {/* Search & Actions Bar */}
        <div className="w-full md:w-auto flex flex-col sm:flex-row items-center gap-4">
          <div className="relative group w-full sm:w-64">
            <input
              type="text"
              placeholder="Search visas, countries..."
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#005a31] focus:border-transparent outline-none transition-all shadow-sm group-hover:shadow-md"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#005a31]" size={18} />
          </div>

          <a href="https://wa.me/8801631312524" className="inline-flex items-center gap-3 bg-[#005a31] text-white px-12 py-5 rounded-2xl font-black shadow-2xl hover:bg-orange-500 transition-all">
                      GET FREE VISA ASSESSMENT
                    </a>
        </div>

      </div>
    </div>
  );
};

export default Immigration_Header_Section;