import React, { useState, useRef } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const countries = [
  {
    name: "USA",
    description: "Tourist, Student, and Work visa services for the United States with guidance through DS-160 and I-20 support.",
    image: "https://visadone.com/wp-content/uploads/2023/02/USA-VISA.png",
  },
  {
    name: "United Kingdom",
    description: "Expert support for UK Student visas, Visitor visas, and Skilled Worker routes.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkgBKQsFv4LdWUzfgaoMj5srhPn0vAuU9X6Q&s",
  },
  {
    name: "Europe (Schengen)",
    description: "Multiple Schengen countries covered under one visa – ideal for students, tourists, and job seekers.",
    image: "https://www.babaaztravels.com/wp-content/uploads/2023/05/Schengen-Visit-Visa-Requirements-Babaaz-Travels.jpeg",
  },
  {
    name: "Canada",
    description: "We assist with SDS and Non-SDS streams, visitor visas, and work permits for Canada.",
    image: "https://pelicanmigration.com/wp-content/uploads/2024/01/Canada-Visitor-Visa.jpg",
  },
  {
    name: "Japan",
    description: "Student and visitor visa assistance with high-quality documentation and embassy submission tips.",
    image: "https://www.babaaztravels.com/wp-content/uploads/2022/04/japan.jpg",
  },
  {
    name: "Albania",
    description: "New trending destination for work and student visas. Visa documentation made easy.",
    image: "https://www.shutterstock.com/image-vector/albania-visa-open-stamped-passport-600nw-2615269851.jpg",
  },
  {
    name: "Dubai (UAE)",
    description: "Tourist visas, freelance permits, and employment visas for UAE. Fast processing.",
    image: "https://canadiangeographic.ca/wp-content/uploads/2022/10/dubai-skyline-1440x1011.jpg",
  },
  {
    name: "Malaysia",
    description: "Tourist and student visa processing for Malaysia with university admission help.",
    image: "https://travelobiz.com/wp-content/uploads/2023/01/Malaysia-eVisa-with-Map.jpg",
  },
  {
    name: "Thailand & Singapore",
    description: "Seamless processing for Thailand and Singapore tourist and short-term business visas.",
    image: "https://www.tmtvisaservicephuket.com/wp-content/uploads/2024/10/Living-Or-Working-In-Thailand-Vs-Singapore-tmt-visa-service-thailand.jpg",
  },
  {
    name: "Hajj & Umrah",
    description: "Affordable and premium packages for Umrah and Hajj with all required documents and tickets.",
    image: "https://umrahtransport.com/wp-content/uploads/2025/03/how-long-is-umrah-closed-after-hajj.jpg",
  },
  {
    name: "Australia",
    description: "Student, work, and tourist visa assistance with pathways to permanent residency.",
    image: "https://www.kkday.com/en-sg/blog/wp-content/uploads/Aussie-VTL-1170x680.jpg",
  },
  {
    name: "New Zealand",
    description: "Expert guidance on student, work, and visitor visas for New Zealand.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg",
  },
  {
    name: "South Korea",
    description: "Student exchange, tourist and work visa services with Korean embassy expertise.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg",
  },
  {
    name: "Germany",
    description: "Work, study and tourist visa facilitation for Germany with German consulate support.",
    image: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
  },
  {
    name: "France",
    description: "Visa assistance for French student programs, work permits, and visitor visas.",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
  },
  {
    name: "Netherlands",
    description: "Student visa, work visa, and tourist visa services with embassy-approved procedures.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg",
  },
  {
    name: "Italy",
    description: "Comprehensive visa services for study, work, and tourism in Italy.",
    image: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
  },
  {
    name: "Spain",
    description: "Student, work, and visitor visa services with expert documentation help.",
    image: "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg",
  },
  {
    name: "Sweden",
    description: "Student and work visa assistance for Sweden’s top universities and companies.",
    image: "https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg",
  },
  {
    name: "Norway",
    description: "Tourist, work, and study visa facilitation for Norway with personalized service.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg",
  },
  {
    name: "Ireland",
    description: "Visa services for students, workers, and tourists planning to visit Ireland.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg",
  },
  {
    name: "Portugal",
    description: "Student, work and travel visa support for Portugal with local expertise.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg",
  },
  {
    name: "Belgium",
    description: "Work, study and tourist visa services for Belgium with efficient processing.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg",
  },
  {
    name: "Switzerland",
    description: "Visa guidance for Switzerland’s academic and professional opportunities.",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg",
  },
  {
    name: "Austria",
    description: "Comprehensive visa support for Austrian study, work, and tourist visas.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg",
  },
  {
    name: "Poland",
    description: "Visa facilitation for Poland’s growing student and work visa programs.",
    image: "https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg",
  },
  {
    name: "Czech Republic",
    description: "Work, study and tourist visa assistance for the Czech Republic.",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg",
  },
  {
    name: "Greece",
    description: "Tourist, study, and work visa services with Greek embassy documentation help.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg",
  },
  {
    name: "Hungary",
    description: "Visa support for Hungary’s student and employment permits.",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg",
  },
  {
    name: "Finland",
    description: "Visa services for Finland's academic and workforce opportunities.",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg",
  },
  {
    name: "Denmark",
    description: "Comprehensive support for Denmark’s student, tourist, and work visas.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg",
  },
  {
    name: "Mexico",
    description: "Tourist and business visa assistance for Mexico with streamlined processing.",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",
  },
  {
    name: "Brazil",
    description: "Work, study, and tourist visa services for Brazil with local embassy support.",
    image: "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg",
  },
];

const popularRoutes = [
  { name: "USA", image: "https://visadone.com/wp-content/uploads/2023/02/USA-VISA.png" },
  { name: "UK", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkgBKQsFv4LdWUzfgaoMj5srhPn0vAuU9X6Q&s" },
  { name: "Europe (Schengen)", image: "https://www.babaaztravels.com/wp-content/uploads/2023/05/Schengen-Visit-Visa-Requirements-Babaaz-Travels.jpeg" },
  { name: "Canada", image: "https://pelicanmigration.com/wp-content/uploads/2024/01/Canada-Visitor-Visa.jpg" },
  { name: "Japan", image: "https://www.babaaztravels.com/wp-content/uploads/2022/04/japan.jpg" },
];

const VisaServices = () => {
  const ITEMS_PER_PAGE = 3;

  // Category Filtering
  const categories = {
    america: ["USA", "Canada", "Mexico", "Brazil"],
    europe: ["United Kingdom", "Europe (Schengen)", "Albania", "Germany", "France", "Netherlands", "Italy", "Spain", "Sweden", "Norway", "Ireland", "Portugal", "Belgium", "Switzerland", "Austria", "Poland", "Czech Republic", "Greece", "Hungary", "Finland", "Denmark"],
    asia: ["Japan", "Malaysia", "Thailand & Singapore", "South Korea"],
    middleEast: ["Dubai (UAE)", "Hajj & Umrah"],
    oceania: ["Australia", "New Zealand"]
  };

  // Pagination State
  const [pages, setPages] = useState({ america: 1, europe: 1, asia: 1, middleEast: 1, oceania: 1 });

  // Refs for Smooth Scrolling
  const refs = {
    america: useRef(null),
    europe: useRef(null),
    asia: useRef(null),
    middleEast: useRef(null),
    oceania: useRef(null),
    popular: useRef(null)
  };

  const scrollTo = (ref) => ref.current?.scrollIntoView({ behavior: 'smooth' });

  // Pagination Logic
  const getPaginatedData = (catKey) => {
    const list = countries.filter(c => categories[catKey].includes(c.name));
    const start = (pages[catKey] - 1) * ITEMS_PER_PAGE;
    return {
      data: list.slice(start, start + ITEMS_PER_PAGE),
      total: Math.ceil(list.length / ITEMS_PER_PAGE)
    };
  };

  const Pagination = ({ catKey }) => {
    const { total } = getPaginatedData(catKey);
    if (total <= 1) return null;
    return (
      <div className="flex justify-center items-center gap-2 mt-8">
        {[...Array(total)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPages({ ...pages, [catKey]: i + 1 })}
            className={`w-9 h-9 rounded-lg font-bold transition-all ${
              pages[catKey] === i + 1 ? "bg-[#005a31] text-white" : "border border-gray-300 text-gray-600 hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    );
  };

  return (
    <HelmetProvider>
      <div className="bg-gray-50 min-h-screen">
        <Helmet>
          <title>Visa Services Worldwide | Tourist, Student & Work Visas – Eammu Holidays</title>
          <meta name="description" content="Eammu Holidays provides expert visa services for Tourist, Student, and Work visas across USA, UK, Europe, Canada, Australia, Japan, UAE, Malaysia, and more." />
          <meta name="keywords" content="Visa services Bangladesh, USA tourist visa, UK student visa, Canada visitor visa, Europe work visa, Hajj & Umrah packages" />
          <link rel="canonical" href="https://eammu.com/visa-services" />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Eammu Holidays",
              "url": "https://eammu.com",
              "logo": "https://eammu.com/images/logo.png",
              "telephone": "+8801631312524",
              "email": "info@eammu.com",
              "areaServed": countries.map(c => ({ "@type": "Country", "name": c.name })),
            })}
          </script>
        </Helmet>

     {/* --- PREMIUM HERO SECTION --- */}
<header className="relative w-full py-24 px-4 overflow-hidden min-h-[500px] flex items-center">
  
  {/* Background Image Layer - Full Width & Height */}
  <div className="absolute inset-0 z-0">
    <img 
      src="/flight_eammu.webp" 
      alt="Eammu Flight Background" 
      className="w-full h-full object-cover"
    />
    {/* Dark overlay to make the text and category buttons pop */}
    <div className="absolute inset-0 bg-black/10 bg-gradient-to-b from-[#005a31]/30 to-black/40"></div>
  </div>

  <div className="container mx-auto text-center relative z-10">
    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-lg">
      World-Class Visa Services
    </h1>
    
    <p className="max-w-4xl mx-auto text-gray-100 text-lg mb-10 leading-relaxed drop-shadow-md">
      Assisting you with <strong className="text-white">Tourist, Student, and Work Visas</strong> across 25+ countries. 
      Our expert team ensures high-quality documentation and embassy submission tips.
    </p>
    
    <div className="flex flex-wrap justify-center gap-3">
      {['Asia', 'Europe', 'America', 'MiddleEast', 'Oceania', 'Popular'].map(cat => (
        <button 
          key={cat}
          onClick={() => scrollTo(refs[cat.toLowerCase()])}
          className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-[#005a31] px-6 py-2.5 rounded-full transition-all font-bold text-sm text-white"
        >
          {cat === 'MiddleEast' ? 'Middle East' : cat}
        </button>
      ))}
    </div>
  </div>
</header>

        <div className="container mx-auto px-4 py-12">
          
          {/* QUICK LINKS SECTION (From Original) */}
          <div className="bg-white p-8 rounded-3xl shadow-sm mb-16 border border-gray-100">
            <h2 className="text-center text-gray-500 font-semibold mb-6 uppercase tracking-widest text-xs">Direct Visa Application Links</h2>
            <div className="flex flex-wrap justify-center gap-2">
              <a href="/tourist-visa-application-from-bangladesh" className="bg-[#005a31] text-white px-4 py-1.5 rounded-full text-sm hover:bg-gray-800 transition">Tourist Visa</a>
              <a href="/student-visa-application-from-bangladesh" className="bg-[#005a31] text-white px-4 py-1.5 rounded-full text-sm hover:bg-gray-800 transition">Student Visa</a>
              <a href="/work-visa-application-from-bangladesh" className="bg-[#005a31] text-white px-4 py-1.5 rounded-full text-sm hover:bg-gray-800 transition">Work Visa</a>
              {[ "USA", "UK", "Europe", "Canada", "Australia", "Germany", "Portugal", "Armenia", "Georgia", "Albania", "Dubai", "Qatar", "Japan", "China", "South Korea", "Spain", "Kosovo", "Serbia", "Thailand", "Singapore", "Malaysia" ].map((name) => (
                <Link key={name} to={`/${name.toLowerCase().replace(' ', '-')}-visa-application`} className="px-4 py-1.5 bg-gray-50 border border-gray-200 text-gray-700 rounded-full text-sm hover:border-[#005a31] hover:text-[#005a31] transition">
                  {name}
                </Link>
              ))}
            </div>
          </div>

          {/* ASIA SECTION */}
          <section ref={refs.asia} className="mb-24">
            <div className="border-b border-gray-200 pb-4 mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Asia Visa Services</h2>
              <p className="text-gray-500">Fast processing for major Asian hubs</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {getPaginatedData('asia').data.map((country, i) => (
                <VisaCardItem key={i} country={country} />
              ))}
            </div>
            <Pagination catKey="asia" />
          </section>

          {/* EUROPE SECTION */}
          <section ref={refs.europe} className="mb-24">
            <div className="border-b border-gray-200 pb-4 mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Europe & Schengen</h2>
              <p className="text-gray-500">Expert guidance for UK and 26+ Schengen countries</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {getPaginatedData('europe').data.map((country, i) => (
                <VisaCardItem key={i} country={country} />
              ))}
            </div>
            <Pagination catKey="europe" />
          </section>

          {/* AMERICA SECTION */}
          <section ref={refs.america} className="mb-24">
            <div className="border-b border-gray-200 pb-4 mb-8">
              <h2 className="text-3xl font-bold text-gray-800">North & South America</h2>
              <p className="text-gray-500">Assisting with USA DS-160 and Canada SDS streams</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {getPaginatedData('america').data.map((country, i) => (
                <VisaCardItem key={i} country={country} />
              ))}
            </div>
            <Pagination catKey="america" />
          </section>

          {/* MIDDLE EAST SECTION */}
          <section ref={refs.middleeast} className="mb-24">
            <div className="border-b border-gray-200 pb-4 mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Middle East & Umrah</h2>
              <p className="text-gray-500">Quick UAE tourist visas and dedicated Hajj services</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {getPaginatedData('middleEast').data.map((country, i) => (
                <VisaCardItem key={i} country={country} />
              ))}
            </div>
            <Pagination catKey="middleEast" />
          </section>

          {/* OCEANIA SECTION */}
          <section ref={refs.oceania} className="mb-24">
            <div className="border-b border-gray-200 pb-4 mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Oceania Regions</h2>
              <p className="text-gray-500">Explore pathways to Australia and New Zealand</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {getPaginatedData('oceania').data.map((country, i) => (
                <VisaCardItem key={i} country={country} />
              ))}
            </div>
            <Pagination catKey="oceania" />
          </section>

          {/* POPULAR ROUTES SECTION (From Original) */}
          <section ref={refs.popular} className="mt-12 bg-gray-100 p-10 rounded-[3rem]">
            <h2 className="text-3xl font-bold text-[#005a31] text-center mb-10">Popular Routes & Best Deals</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularRoutes.map((route, index) => (
                <div key={index} className="bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-xl transition-all group border border-gray-200">
                  <img src={route.image} alt={route.name} className="h-56 w-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{route.name}</h3>
                    <a href={`https://wa.me/8801631312524?text=Hello%2C%20I%20want%20the%20${route.name}%20visa%20deal.`} className="block w-full text-center bg-[#005a31] text-white py-3 rounded-2xl font-bold hover:bg-black transition">Get Deal Now</a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* BOTTOM CTA SECTION */}
          <section className="mt-20 bg-[#005a31] text-white p-12 rounded-[3.5rem] text-center relative overflow-hidden">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Book Your Visa Consultation Today</h2>
            <p className="text-green-50 max-w-2xl mx-auto mb-10 text-lg">
              End-to-end support for <strong>student, work, and tourist visas</strong>, Hajj & Umrah, and group travel. Fast, reliable, and affordable.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/8801631312524" className="bg-white text-[#005a31] px-10 py-4 rounded-full font-bold shadow-xl hover:bg-green-50 transition">WhatsApp Consultation</a>
              <Link to="/" className="bg-transparent border-2 border-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition">Back to Home</Link>
            </div>
          </section>

        </div>
      </div>
    </HelmetProvider>
  );
};

// Reusable Card Component to keep code clean
const VisaCardItem = ({ country }) => (
  <article className="bg-white shadow-sm border border-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col group">
    <div className="h-52 overflow-hidden relative">
      <img src={country.image} alt={country.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-[#005a31] text-xs font-bold shadow-sm">Official Service</div>
    </div>
    <div className="p-6 flex flex-col flex-1">
      <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-[#005a31] transition-colors">{country.name} Visa Services</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-1">{country.description}</p>
      <a
        href={`https://wa.me/8801631312524?text=Hello%2C%20I%20want%20to%20apply%20for%20${encodeURIComponent(country.name)}%20visa.`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-[#005a31] text-white text-center py-3.5 rounded-2xl font-bold hover:bg-black transition-all shadow-md active:scale-95"
      >
        Book Now
      </a>
    </div>
  </article>
);

export default VisaServices;