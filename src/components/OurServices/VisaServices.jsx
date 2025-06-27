import React from 'react';
import { Helmet } from 'react-helmet-async';

const countries = [
  {
    name: "USA",
    description: "Tourist, Student, and Work visa services for the United States with guidance through DS-160 and I-20 support.",
    image: "https://visadone.com/wp-content/uploads/2023/02/USA-VISA.png",
  },
  {
    name: "United Kingdom",
    description: "Expert support for UK Student visas, Visitor visas, and Skilled Worker routes.",
    image: "https://visaguy.ae/wp-content/uploads/2021/08/1920x1080-uk.jpg",
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

const VisaServices = () => {
  return (
    <div className="px-4 container mx-auto py-10">
      <Helmet>
        {/* Basic SEO */}
        <title>Visa Services | Eammu Immigration - USA, UK, Europe & More</title>
        <meta
          name="description"
          content="Professional visa services by Eammu Immigration for Tourist, Student, and Work visas across USA, UK, Europe, Canada, Japan, and more. Hajj and Umrah packages also available."
        />
        <meta
          name="keywords"
          content="Visa services, Tourist visa, Student visa, Work visa, USA visa, UK visa, Europe visa, Canada visa, Japan visa, Hajj visa, Umrah visa, immigration, Eammu Immigration"
        />
        <meta name="author" content="Eammu Immigration Services" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Visa Services | Eammu Immigration" />
        <meta
          property="og:description"
          content="Expert visa processing for Tourist, Student, Work visas with Eammu Immigration. Serving USA, UK, Europe, Canada, Japan, and more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.eammu.com/visa-services" />
        <meta
          property="og:image"
          content="https://visadone.com/wp-content/uploads/2023/02/USA-VISA.png"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Visa Services | Eammu Immigration" />
        <meta
          name="twitter:description"
          content="Professional visa services by Eammu Immigration for Tourist, Student, and Work visas worldwide."
        />
        <meta
          name="twitter:image"
          content="https://visadone.com/wp-content/uploads/2023/02/USA-VISA.png"
        />
      </Helmet>

      {/* Page Title */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#005a31] mb-4">Visa Services by Eammu Immigration</h1>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Eammu Immigration offers expert visa processing services for{' '}
          <strong>Tourist, Student, and Work Visas</strong>. We currently support visa applications for more than 25 countries and provide professional assistance at every step — from documentation to embassy submission.
        </p>
      </header>

      {/* Visa Cards Section */}
      <section aria-label="Visa service countries" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {countries.map((country, index) => (
          <article
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
            tabIndex={0}
            aria-labelledby={`country-title-${index}`}
          >
            <img
              src={country.image}
              alt={`Flag and representation of ${country.name}`}
              className="h-48 w-full object-cover"
              loading="lazy"
              width="400"
              height="240"
            />
            <div className="p-4">
              <h2
                id={`country-title-${index}`}
                className="text-xl font-bold text-[#005a31] mb-2"
              >
                {country.name}
              </h2>
              <p className="text-gray-700 text-sm">{country.description}</p>
            </div>
          </article>
        ))}
      </section>

      {/* Future Feature */}
      <section className="mt-12 bg-[#f4f4f4] p-6 rounded-md text-center" aria-live="polite">
        <h2 className="text-2xl font-bold text-[#005a31] mb-3">What's Coming Next?</h2>
        <p className="text-gray-700 max-w-xl mx-auto">
          We are working on launching a powerful <strong>Visa Requirements Search API</strong> — where you can select any country and see updated visa requirements instantly. You will also be able to view visa cards, filter by purpose, and apply directly online through Eammu!
        </p>
        <a
    href="https://wa.me/8801631312524?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-[#005a31] text-white px-6 py-2 rounded-full hover:bg-[#003e24] transition"
  >
    Book Now on WhatsApp
  </a>
      </section>
    </div>
  );
};

export default VisaServices;
