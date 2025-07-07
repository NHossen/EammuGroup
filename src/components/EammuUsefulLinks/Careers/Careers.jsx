import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Careers = () => {
  return (
    <>
      <Helmet>
        <title>Careers at Eammu | Join Our Growing Global Team</title>
        <meta
          name="description"
          content="Explore exciting career opportunities at Eammu. We're hiring in Travel Expert, Visa Expert, immigration services, marketing, IT, events, and more. Submit your CV today."
        />
        <meta
          name="keywords"
          content="Eammu careers, jobs at Eammu, Eammu hiring, Eammu CV submit, immigration jobs, travel agency jobs, marketing jobs, work in Cumilla"
        />
      </Helmet>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 🔹 Career Banner */}
        <div className="mb-12">
          <img
            src="https://www.shuniah.org/wp-content/uploads/2025/04/Job-Opportunity.jpg"
            alt="Careers at Eammu"
            className="rounded-lg w-full shadow-md"
          />
        </div>

        {/* 🔹 Introduction */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Careers at Eammu</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Eammu is growing — and so is our passionate global team! Whether you're excited about immigration consulting, social media, customer service, or tech, we’re here to welcome your energy and talent.
          </p>
        </section>

        {/* 🔹 Job Vacancies */}
        <section className="bg-white shadow-md rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-green-700">🚀 Upcoming Vacancies</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-base">
            <li>Immigration Consultant (Cumilla Office)</li>
            <li>Visa Application Officer</li>
            <li>Content Creator (YouTube, Facebook & Instagram)</li>
            <li>Digital Marketing Executive</li>
            <li>Customer Support Agent (Remote + Office)</li>
            <li>Web Developer / IT Support</li>
          </ul>

          <p className="mt-6 text-gray-600">
            We strongly believe in diversity, equal opportunity, and empowering youth. Fresh graduates, freelancers, women, and students are highly encouraged to apply.
          </p>

          {/* Optional second image */}
          <div className="mt-8">
            <img
              src="https://files.selar.co/product-images/2024/products/rita-babalola1/career-gps-a-career-clari-selar.co-6664142cc9386.jpeg"
              alt="Eammu Team Culture"
              className="rounded-lg shadow-md mx-auto"
            />
          </div>
        </section>

        {/* 🔹 CV Submission */}
        <section className="bg-green-50 p-8 rounded-lg text-center shadow-inner">
          <h2 className="text-2xl font-bold mb-4 text-green-800">📤 Submit Your CV</h2>
          <p className="mb-6 text-gray-700">
            Want to be part of our mission? Submit your CV and details via our official Google Form. Shortlisted candidates will be contacted directly by Eammu's HR team.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href="https://forms.gle/a2UU8sNva7FZKp8g6"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-800 text-white px-6 py-3 rounded-full hover:bg-green-900 transition"
            >
              Apply Now via Google Form
            </a>

            <Link
              to="/"
              className="bg-white border border-green-800 text-green-800 px-6 py-3 rounded-full hover:bg-green-100 transition"
            >
              Back to Home
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Careers;
