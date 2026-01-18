import React from 'react';
import { Helmet } from 'react-helmet-async';
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
  {
    name: "USA",
    image: "https://visadone.com/wp-content/uploads/2023/02/USA-VISA.png",
  },
  {
    name: "UK",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkgBKQsFv4LdWUzfgaoMj5srhPn0vAuU9X6Q&s",
  },
  {
    name: "Europe (Schengen)",
    image: "https://www.babaaztravels.com/wp-content/uploads/2023/05/Schengen-Visit-Visa-Requirements-Babaaz-Travels.jpeg",
  },
  {
    name: "Canada",
    image: "https://pelicanmigration.com/wp-content/uploads/2024/01/Canada-Visitor-Visa.jpg",
  },
  {
    name: "Japan",
    image: "https://www.babaaztravels.com/wp-content/uploads/2022/04/japan.jpg",
  },
];

const VisaServices = () => {
  const jsonLD = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Visa Services",
    "provider": {
      "@type": "Organization",
      "name": "Eammu Holidays",
      "url": "https://eammu.com",
      "logo": "https://eammu.com/images/logo.png",
      "sameAs": [
        "https://www.facebook.com/eammu",
        "https://www.instagram.com/eammu",
        "https://www.linkedin.com/company/eammu"
      ]
    },
    "areaServed": countries.map(c => ({ "@type": "Country", "name": c.name })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Visa Services Catalog",
      "itemListElement": countries.map(c => ({
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": `${c.name} Visa Services`, "description": c.description }
      }))
    }
  };

  return (
    <div className="px-4 container mx-auto py-10">
      <Helmet>
  {/* Primary SEO */}
  <title>
    Visa Services Worldwide | Tourist, Student & Work Visas – Eammu Holidays
  </title>

  <meta
    name="description"
    content="Eammu Holidays provides expert visa services for Tourist, Student, and Work visas across USA, UK, Europe, Canada, Australia, Japan, UAE, Malaysia, and more. Hajj & Umrah packages available. Apply online now!"
  />

  <meta
    name="keywords"
    content="Visa services Bangladesh, USA tourist visa, UK student visa, Canada visitor visa, Europe work visa, Australia student visa, Japan tourist visa, UAE visa, Malaysia eVisa, Hajj & Umrah packages, Eammu Immigration Services, Travel agency Bangladesh, Best visa consultancy worldwide"
  />

  <link rel="canonical" href="https://eammu.com/visa-services" />

  {/* Open Graph / Social SEO */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Visa Services Worldwide – Eammu Holidays" />
  <meta
    property="og:description"
    content="Professional visa services by Eammu Holidays for Tourist, Student, and Work visas across 25+ countries. Fast, reliable, and approved by IATA."
  />
  <meta property="og:url" content="https://eammu.com/visa-services" />
  <meta property="og:site_name" content="Eammu Holidays" />
  <meta property="og:image" content="https://visadone.com/wp-content/uploads/2023/02/USA-VISA.png" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Visa Services Worldwide – Eammu Holidays" />
  <meta
    name="twitter:description"
    content="Book Tourist, Student & Work visas easily with Eammu Holidays. Serving USA, UK, Europe, Canada, Australia, Japan, UAE, Malaysia, and more."
  />
  <meta name="twitter:image" content="https://visadone.com/wp-content/uploads/2023/02/USA-VISA.png" />

  {/* Geo / Local SEO */}
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
      "@type": "TravelAgency",
      "name": "Eammu Holidays",
      "url": "https://eammu.com",
      "logo": "https://eammu.com/images/logo.png",
      "sameAs": [
        "https://www.facebook.com/eammu",
        "https://www.instagram.com/eammu",
        "https://www.linkedin.com/company/eammu",
        "https://www.youtube.com/@eammu"
      ],
      "telephone": "+8801631312524",
      "email": "info@eammu.com",
      "areaServed": countries.map(c => ({ "@type": "Country", "name": c.name })),
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Visa Services Catalog",
        "itemListElement": countries.map(c => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `${c.name} Visa Services`,
            "description": c.description
          }
        }))
      },
      "description": "Eammu Holidays provides professional Tourist, Student, and Work visa services across 25+ countries including USA, UK, Europe, Canada, Australia, UAE, Japan, Malaysia, China, and more. Hajj & Umrah packages also available."
    })}
  </script>
</Helmet>


      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#005a31] mb-4">Visa Services by Eammu Holidays</h1>
        <p className="text-gray-700 text-md max-w-7xl mx-auto">
          Eammu Holidays provides assistance for  <strong> <br />
    <a href="/tourist-visa-application-from-bangladesh" className="bg-[#005a31] text-white px-1 py-1 rounded mr-1 hover:bg-gray-400 hover:text-black">
      Tourist Visa
    </a>
    <a href="/student-visa-application-from-bangladesh" className="bg-[#005a31] text-white px-1 py-1 rounded mr-1 hover:bg-gray-400 hover:text-black">
      Student Visa
    </a>
    <a href="/work-visa-application-from-bangladesh" className="bg-[#005a31] text-white px-1 py-1 rounded hover:bg-gray-400 hover:text-black">
      Work Visa
    </a>
  </strong> <br /> across over 25 countries including 
          <Link to="/usa-visa-application" className="text-[#005a31] underline"> USA</Link>, 
          <Link to="/uk-visa-application" className="text-[#005a31] underline"> UK</Link>, 
          <Link to="/europe-visa-application" className="text-[#005a31] underline"> Europe</Link>, 
          <Link to="/canada-visa-application" className="text-[#005a31] underline"> Canada</Link>,
          <Link to="/australia-visa-application" className="text-[#005a31] underline"> Australia</Link>,
          <Link to="/germany-visa-application" className="text-[#005a31] underline"> Germany</Link>,
          <Link to="/portugal-visa-application" className="text-[#005a31] underline"> Portugal</Link>,
          <Link to="/armenia-visa-application" className="text-[#005a31] underline"> Armenia</Link>,
          <Link to="/georgia-visa-application" className="text-[#005a31] underline"> Georgia</Link>,
          <Link to="/albania-visa-application" className="text-[#005a31] underline"> Albania</Link>,
          <Link to="/dubai-visa-application" className="text-[#005a31] underline"> Dubai</Link>,
          <Link to="/qatar-visa-application" className="text-[#005a31] underline"> Qatar</Link>,
          <Link to="/japan-visa-application" className="text-[#005a31] underline"> Japan</Link>,
          <Link to="/china-visa-application" className="text-[#005a31] underline"> China</Link>,
          <Link to="/south-korea-visa-application" className="text-[#005a31] underline"> South Korea</Link>,
          <Link to="/spain-visa-application" className="text-[#005a31] underline"> Spain</Link>,
          <Link to="/kosovo-visa-application" className="text-[#005a31] underline"> Kosovo</Link>,
          <Link to="/serbia-visa-application" className="text-[#005a31] underline"> Serbia</Link>, 
          and more.
        </p>
      </header>

      {/* Visa Cards with Book Now */}
      <section aria-label="Visa service countries" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {countries.map((country, index) => (
          <article
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 flex flex-col justify-between hover:-translate-y-1"
            tabIndex={0}
            aria-labelledby={`country-title-${index}`}
          >
            <img
              src={country.image}
              alt={`${country.name} visa services`}
              className="h-48 w-full object-cover"
              loading="lazy"
              width="400"
              height="240"
            />
            <div className="p-4 flex flex-col justify-between flex-1">
              <div>
                <h2 id={`country-title-${index}`} className="text-xl font-bold text-[#005a31] mb-2">{country.name} Visa Services</h2>
                <p className="text-gray-700 text-sm mb-4">{country.description}</p>
              </div>
              <a
                href={`https://wa.me/8801631312524?text=Hello%2C%20I%20would%20like%20to%20book%20a%20${encodeURIComponent(country.name)}%20visa%20service.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#005a31] text-white text-center px-4 py-2 rounded-full hover:bg-[#003e24] transition transform hover:scale-105"
              >
                Book Now
              </a>
            </div>
          </article>
        ))}
      </section>

      {/* Popular Routes & Deals */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-[#005a31] text-center mb-6">Popular Routes & Deals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularRoutes.map((route, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col">
              <img
                src={route.image}
                alt={`${route.name} visa`}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-4 flex flex-col flex-1 justify-between">
                <h3 className="text-xl font-semibold text-[#005a31] mb-2">{route.name}</h3>
                <a
                  href={`https://wa.me/8801631312524?text=Hello%2C%20I%20would%20like%20to%20book%20a%20${encodeURIComponent(route.name)}%20visa%20service.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#005a31] text-white text-center px-4 py-2 rounded-full hover:bg-[#003e24] transition transform hover:scale-105"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mt-12 bg-[#f4f4f4] p-6 rounded-md text-center" aria-live="polite">
        <h2 className="text-2xl font-bold text-[#005a31] mb-3">Book Your Visa Consultation Today</h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-4">
          Get your visa processed with expert guidance. We provide end-to-end support for <strong>student, work, and tourist visas</strong>, Hajj & Umrah, and group travel visas. Fast, reliable, and affordable.
        </p>
        <a
          href="https://wa.me/8801631312524?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20visa%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#005a31] text-white px-6 py-2 rounded-full hover:bg-[#003e24] transition mb-4"
        >
          Contact on WhatsApp
        </a>
        <div className="mt-4">
          <Link
            to="/"
            className="inline-block bg-white border border-green-800 text-green-800 px-6 py-3 rounded-full hover:bg-green-100 transition"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default VisaServices;
