import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  CheckCircle,
  GraduationCap,
  BookOpen,
  Users,
  Award,
  Globe,
  MessageCircle,
  PhoneCall,
  MapPin,
  ChevronRight,
  Star,
} from "lucide-react";

const TIICPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Target IELTS & Immigration Center (TIIC)",
    url: "https://eammu.com/tiic-academy",
    parentOrganization: {
      "@type": "Organization",
      name: "Eammu Holidays",
      url: "https://eammu.com",
    },
    areaServed: ["Bangladesh", "United Arab Emirates"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cumilla",
      addressCountry: "BD",
    },
    description:
      "TIIC is a leading IELTS, PTE & study abroad academy in Cumilla, Bangladesh, operating under Eammu Holidays.",
  };

  return (
    <>
     <Helmet>
  {/* Primary SEO */}
  <title>
    IELTS Coaching Center in Cumilla | Travel Agency Near me – Eammu Holidays
  </title>

  <meta
    name="description"
    content="Target IELTS & Immigration Center (TIIC) offers premium IELTS, PTE & Spoken English coaching in Cumilla, Bangladesh. Study abroad consultancy for students from Bangladesh & Dubai under Eammu Holidays."
  />

  <meta
    name="keywords"
    content="IELTS coaching Cumilla, TIIC IELTS, IELTS academy Bangladesh, Dubai study visa, PTE training Cumilla, English speaking courses, study abroad consultancy, Eammu Holidays academy"
  />

  <link rel="canonical" href="https://eammu.com/target-ielts-and-immigration-center" />

  {/* Open Graph / Social */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="TIIC IELTS Coaching & Study Abroad Consultancy – Eammu Holidays" />
  <meta
    property="og:description"
    content="Enroll at Target IELTS & Immigration Center (TIIC) for IELTS, PTE & English courses. Expert study abroad guidance for students from Bangladesh & Dubai."
  />
  <meta property="og:url" content="https://eammu.com/target-ielts-and-immigration-center" />
  <meta property="og:site_name" content="Eammu Holidays" />
  <meta property="og:image" content="https://eammu.com/seo/tiic-ielts.jpg" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="TIIC IELTS Coaching & Study Abroad – Eammu Holidays" />
  <meta
    name="twitter:description"
    content="Target IELTS & Immigration Center (TIIC) in Cumilla provides IELTS, PTE & Spoken English coaching with expert study abroad consultancy for Bangladesh & Dubai students."
  />
  <meta name="twitter:image" content="https://eammu.com/seo/tiic-ielts.jpg" />

  {/* Geo & Local SEO */}
  <meta name="geo.region" content="BD" />
  <meta name="geo.placename" content="Cumilla, Bangladesh" />
  <meta name="geo.position" content="23.4607;91.1809" />
  <meta name="ICBM" content="23.4607,91.1809" />

  {/* Trust & Indexing */}
  <meta name="author" content="Eammu Holidays" />
  <meta name="publisher" content="Eammu Holidays" />
  <meta name="robots" content="index, follow, max-image-preview:large" />

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Target IELTS & Immigration Center (TIIC)",
      "url": "https://eammu.com/target-ielts-and-immigration-center",
      "parentOrganization": {
        "@type": "Organization",
        "name": "Eammu Holidays",
        "url": "https://eammu.com"
      },
      "areaServed": ["Bangladesh", "United Arab Emirates"],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Gomoti Tower, Cumilla",
        "addressLocality": "Cumilla",
        "addressCountry": "BD"
      },
      "description": "TIIC is a leading IELTS, PTE & English coaching academy in Cumilla, Bangladesh, providing study abroad consultancy under Eammu Holidays.",
      "sameAs": [
        "https://www.facebook.com/eammutourism",
        "https://www.instagram.com/eammutours",
        "https://www.linkedin.com/company/eammu",
        "https://www.youtube.com/@eammutour"
      ]
    })}
  </script>
</Helmet>


      <main className="bg-white text-slate-900 overflow-hidden">
        {/* HERO */}
        <section className="min-h-[90vh] flex flex-col lg:flex-row">
          <div className="lg:w-1/2 bg-[#005a31] p-8 md:p-16 flex items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <span className="bg-orange-500 text-white px-4 py-1 rounded text-xs font-bold">
                A Unit of Eammu Holidays
              </span>

              <h1 className="text-4xl md:text-6xl font-black text-white mt-6 mb-6">
                Target IELTS & <br />
                <span className="text-orange-400">Immigration Center</span>
              </h1>

              <p className="text-white/80 max-w-xl mb-10">
                One of the most trusted IELTS & study abroad academies in
                Cumilla, Bangladesh. Serving students from Bangladesh and Dubai
                with global education solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/8801701699743"
                  className="bg-orange-500 px-8 py-4 rounded-full font-bold text-white flex justify-center items-center gap-2"
                >
                  <MessageCircle size={18} /> Free Assessment
                </a>
                <a
                  href="tel:+8801701699743"
                  className="border border-white px-8 py-4 rounded-full text-white text-center"
                >
                  Call TIIC
                </a>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 h-[400px] lg:h-auto">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
              alt="IELTS coaching students in Cumilla"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* TRUST STATS */}
        <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard title="5000+" desc="Students Trained" />
          <StatCard title="8.5" desc="Highest IELTS Band" />
          <StatCard title="50+" desc="Partner Universities" />
          <StatCard title="98%" desc="Visa Success Rate" />
        </section>

        {/* COURSES */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-[#005a31] mb-12">
            IELTS, PTE & English Courses at TIIC
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Course
              title="IELTS Academic & General"
              points={[
                "British Council exam pattern",
                "Weekly mock tests",
                "Band score improvement strategy",
              ]}
            />
            <Course
              title="PTE Academic Training"
              points={[
                "AI-based test practice",
                "Real exam simulation",
                "Fast-track batches",
              ]}
            />
            <Course
              title="Spoken English Program"
              points={[
                "Daily conversation practice",
                "Grammar & pronunciation",
                "Interview preparation",
              ]}
            />
          </div>
        </section>

        {/* STUDY ABROAD */}
        <section className="bg-slate-50 py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-[#005a31] mb-6">
              Study Abroad Consultancy – Bangladesh & Dubai
            </h2>

            <p className="text-gray-600 mb-6">
              TIIC provides professional study abroad counseling under Eammu
              Holidays for students from Bangladesh and Dubai. We assist with
              university admission, scholarships, visa documentation, and
              pre-departure guidance.
            </p>

            <ul className="grid md:grid-cols-2 gap-4 text-gray-600">
              {[
                "USA, UK, Canada, Australia admissions",
                "European universities",
                "Scholarship guidance",
                "Visa documentation & interview prep",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <CheckCircle className="text-orange-500" size={18} /> {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-24 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-[#005a31] mb-10">
            How TIIC Helps You Succeed
          </h2>

          <div className="space-y-6">
            <Step title="1. Free Assessment" />
            <Step title="2. Personalized Study Plan" />
            <Step title="3. Exam Preparation & Mock Tests" />
            <Step title="4. University & Visa Support" />
          </div>
        </section>

        {/* LOCATION */}
        <section className="bg-[#005a31] py-20 px-6 text-white text-center">
          <h2 className="text-3xl font-black mb-4">
            Visit TIIC in Cumilla
          </h2>
          <p className="text-white/70 mb-6">
            Gomoti Tower, Cumilla, Bangladesh <br />
            Serving Bangladesh & Dubai students
          </p>

          <a
            href="https://eammu.com"
            className="bg-orange-500 px-8 py-4 rounded-full font-bold inline-block"
          >
            Visit Eammu Holidays
          </a>
        </section>
      </main>
    </>
  );
};

const StatCard = ({ title, desc }) => (
  <div className="bg-white p-6 rounded-xl border text-center">
    <h3 className="text-3xl font-black text-[#005a31]">{title}</h3>
    <p className="text-gray-500 text-sm">{desc}</p>
  </div>
);

const Course = ({ title, points }) => (
  <div className="bg-white p-8 rounded-2xl border">
    <h3 className="font-bold text-xl text-[#005a31] mb-4">{title}</h3>
    <ul className="space-y-2 text-gray-600">
      {points.map((p, i) => (
        <li key={i} className="flex gap-2">
          <CheckCircle size={16} className="text-orange-500" /> {p}
        </li>
      ))}
    </ul>
  </div>
);

const Step = ({ title }) => (
  <div className="flex gap-3 text-gray-700">
    <ChevronRight className="text-orange-500" />
    <span>{title}</span>
  </div>
);

export default TIICPage;
