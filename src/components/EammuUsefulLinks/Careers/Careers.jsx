import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Careers = () => {
  const vacancies = [
    { title: "Immigration Consultant", location: "Cumilla Office", type: "Full-time" },
    { title: "Visa Application Officer", location: "Remote / Office", type: "Full-time" },
    { title: "Content Creator", location: "Digital Team", type: "Freelance" },
    { title: "Digital Marketing Executive", location: "Cumilla Office", type: "Full-time" },
    { title: "Customer Support Agent", location: "Remote", type: "Part-time" },
    { title: "Web Developer / IT", location: "Global Team", type: "Contract" },
  ];

  // JSON-LD structured data for Careers/Job postings
  const jobSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Eammu Holidays",
    "url": "https://eammu.com",
    "logo": "https://eammu.com/images/logo.png",
    "sameAs": [
      "https://www.facebook.com/eammu",
      "https://www.instagram.com/eammu",
      "https://www.linkedin.com/company/eammu",
      "https://www.youtube.com/@Eammutour"
    ],
    "department": {
      "@type": "Organization",
      "name": "Human Resources",
      "employee": vacancies.map((job) => ({
        "@type": "Person",
        "jobTitle": job.title,
        "worksFor": { "@type": "Organization", "name": "Eammu Holidays" },
        "workLocation": job.location,
        "employmentType": job.type
      }))
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-green-100 selection:text-[#005a31]">
      <Helmet>
        <title>Careers at Eammu Holidays | Jobs in Immigration & Travel</title>
        <meta
          name="description"
          content="Explore exciting career opportunities at Eammu Holidays. Join our growing team in immigration, travel, marketing, and IT. Apply for full-time, part-time, and freelance positions."
        />
        <meta
          name="keywords"
          content="Eammu Holidays careers, travel agency jobs Bangladesh, immigration consultant job, visa officer job, content creator job, digital marketing job, web developer job"
        />
        <link rel="canonical" href="https://eammu.com/careers" />
        <script type="application/ld+json">{JSON.stringify(jobSchema)}</script>
      </Helmet>

      {/* --- Hero Banner Section --- */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070"
            alt="Eammu Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-green-800/40"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Build Your Future <br /> with <span className="text-green-500">Eammu.</span>
          </motion.h1>
          <p className="text-green-50 max-w-2xl mx-auto text-lg md:text-xl font-light">
            We are looking for passionate individuals to help us redefine global travel and immigration.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-20">
        {/* --- Why Join Us Section --- */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#005a31] mb-6">Why Join Our Mission?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              At Eammu, we strongly believe in diversity, equal opportunity, and empowering youth. We don't just offer jobs; we provide a platform where your energy meets global opportunities.
            </p>
            <div className="space-y-4">
              {['Global Culture', 'Flexible Working', 'Growth Opportunities'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-[#005a31] rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="font-medium text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-3xl">
            <img
              src="https://files.selar.co/product-images/2024/products/rita-babalola1/career-gps-a-career-clari-selar.co-6664142cc9386.jpeg"
              alt="Eammu Team Culture"
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
        </section>

        {/* --- Open Vacancies Grid --- */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#005a31]">Current Opportunities</h2>
            <div className="w-20 h-1.5 bg-[#005a31] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vacancies.map((job, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border-b-4 border-b-[#005a31]"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-green-600 mb-2 block">{job.type}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{job.title}</h3>
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  {job.location}
                </div>
                <a href="https://forms.gle/a2UU8sNva7FZKp8g6" target="_blank" className="text-green-800 font-bold text-sm flex items-center gap-2 hover:gap-4 transition-all">
                  Apply Now <span>→</span>
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- CV Submission (CTA) --- */}
        <section className="bg-[#005a31] rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-700 rounded-full -mr-32 -mt-32 opacity-50 blur-3xl"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 italic">Don't see a position for you?</h2>
            <p className="text-green-100 mb-10 font-light">
              We are always on the lookout for great talent. Drop your CV in our database and we will contact you when a matching role opens up.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://forms.gle/a2UU8sNva7FZKp8g6"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-800 px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-green-50 transition-all shadow-lg"
              >
                Submit CV to HR
              </a>
              <Link
                to="/"
                className="bg-green-800 text-white border border-green-600 px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-green-600 transition-all"
              >
                Return Home
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* --- Simple Footer --- */}
      <footer className="py-12 border-t border-gray-100 text-center">
        <p className="text-[10px] text-gray-400 uppercase tracking-widest">© 2025 Eammu Holidays • Human Resources</p>
      </footer>
    </div>
  );
};

export default Careers;
