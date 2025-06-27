import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const EammuImmigrationHeading_2 = () => {
  return (
    <div className="px-4 py-12 container mx-auto">
      <Helmet>
        <title>Eammu Immigration Services | Study Abroad & Visa Expert Cumilla</title>
        <meta
          name="description"
          content="Eammu Immigration Services is a trusted study abroad and visa agency in Cumilla, guiding students to global universities since 2018 with scholarship, visa, and travel support."
        />
        <meta
          name="keywords"
          content="Eammu Immigration Services, study abroad Cumilla, visa consultancy Bangladesh, education consultancy, tourist visa, air ticketing"
        />
      </Helmet>

      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold text-[#005a31] mb-4">
            Eammu Immigration Services
          </h1>
          <h2 className="text-lg md:text-xl font-medium text-gray-800 mb-6">
            Premier Study Abroad Agency Cumilla, Bangladesh | Excellence in Education Consultancy Services
          </h2>
          <p className="text-base text-gray-700 leading-relaxed mb-6">
            Eammu Immigration Services, based in Cumilla, Bangladesh, is a trusted educational consultancy firm with over six years of experience. Since 2012, we’ve been guiding students to top global universities, securing scholarships and financial aid.
            <br /><br />
            We provide the cheapest airfares, visa documentation support, and customized group tour packages — creating seamless and memorable travel experiences.
            <br /><br />
            Whether you are planning to study abroad, migrate, or travel, we are your trusted partner. At Eammu, we turn your goals into global opportunities.
          </p>
          <Link to="/eammuimmigrationservices">
            <button className="btn bg-white text-[#005a31] border border-[#005a31] hover:bg-[#005a31] hover:text-white transition">
              Explore More
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://www.usasean.org/sites/default/files/2023-09/AdobeStock_633483820.jpeg"
            alt="Eammu Immigration Banner"
            className="w-full rounded-lg shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default EammuImmigrationHeading_2;
