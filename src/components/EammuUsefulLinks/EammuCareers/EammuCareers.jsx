

import { Helmet } from 'react-helmet-async';

const EammuCareers = () => {
  return (
    <>
      <Helmet>
        <title>Careers at Eammu | Join Our Growing Global Team</title>
        <meta
          name="description"
          content="Explore exciting career opportunities at Eammu. We're hiring in immigration services, marketing, IT, events, and more. Submit your CV today."
        />
        <meta
          name="keywords"
          content="Eammu careers, jobs at Eammu, Eammu hiring, Eammu CV submit, immigration jobs, travel agency jobs, marketing jobs, work in Cumilla"
        />
      </Helmet>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Careers at Eammu</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Eammu is expanding — and we're looking for passionate individuals to join our team. Whether you're interested
            in immigration consulting, digital marketing, IT, travel operations, or customer service — we welcome your skills and energy.
          </p>
        </section>

        {/* Future Job Vacancies */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-green-700">🚀 Upcoming Vacancies</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-base">
            <li>Immigration Consultant (Cumilla Office)</li>
            <li>Visa Application Officer</li>
            <li>Content Creator (YouTube & Facebook)</li>
            <li>Digital Marketing Executive</li>
            <li>Customer Support Agent (Remote + Office)</li>
            <li>Web Developer / IT Support</li>
          </ul>

          <p className="mt-6 text-gray-600">
            We believe in diversity, equal opportunity, and empowering youth. Fresh graduates, freelancers, and women are highly encouraged to apply.
          </p>
        </section>

        {/* Google Form Submission */}
        <section className="bg-gray-100 p-6 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4 text-green-800">📤 Submit Your CV</h2>
          <p className="mb-6 text-gray-700">
            Please submit your CV and basic information through our official Google Form. Shortlisted candidates will be contacted by our HR team.
          </p>

          {/* Placeholder link — replace `your-google-form-link` */}
          <a
            href="https://forms.gle/a2UU8sNva7FZKp8g6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-800 text-white px-6 py-3 rounded-full hover:bg-green-900 transition"
          >
            Apply Now via Google Form
          </a>
        </section>
      </main>
    </>
  );
};

export default EammuCareers;
