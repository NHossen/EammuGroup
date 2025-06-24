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
];

const VisaServices = () => {
  return (
    <div className="px-4 container mx-auto py-10">
      <Helmet>
        <title>Visa Services | Eammu Immigration</title>
        <meta name="description" content="Get professional visa services from Eammu for USA, UK, Europe, Canada, Japan, and more. We also offer Hajj, Umrah, and tourist visas." />
      </Helmet>

      {/* Page Title */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#005a31] mb-4">Visa Services by Eammu</h1>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Eammu Immigration offers expert visa processing services for <strong>Tourist, Student, and Work Visas</strong>. We currently support visa applications for more than 10 countries and provide professional assistance at every step — from documentation to embassy submission.
        </p>
      </div>

      {/* Visa Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {countries.map((country, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={country.image}
              alt={country.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-[#005a31] mb-2">
                {country.name}
              </h2>
              <p className="text-gray-700 text-sm">{country.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Future Feature */}
      <div className="mt-12 bg-[#f4f4f4] p-6 rounded-md text-center">
        <h2 className="text-2xl font-bold text-[#005a31] mb-3">What's Coming Next?</h2>
        <p className="text-gray-700">
          We are working on launching a powerful <strong>Visa Requirements Search API</strong> — where you can select any country and see updated visa requirements instantly. You will also be able to view visa cards, filter by purpose, and apply directly online through Eammu!
        </p>
        <button className="mt-6 bg-[#005a31] text-white px-6 py-2 rounded-md hover:bg-[#003e24] transition">
          Notify Me on Launch
        </button>
      </div>
    </div>
  );
};

export default VisaServices;
