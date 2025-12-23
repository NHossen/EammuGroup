import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const TargetUsaInterview = () => {
  return (
    <div className="px-4 container mx-auto py-10">
      <Helmet>
        <title>Travel Agency Dhaka | Visa Interview Preparation Bangladesh | Visa , Flight , Hotel </title>
        <meta
          name="description"
          content="Prepare for your visa interview with Eammu's Target USA program. Get expert guidance on F1, B1/B2,Europe Visa, Canada Visa, USA, document support, mock interviews, and more."
        />
        <meta
          name="keywords"
          content="USA visa interview Preparation, F1 visa coaching, B2 visa support, mock visa interview, Eammu Holidays, Target USA program, USA visa preparation, student visa USA, Travel Agency Bangladesh , Tourist Visa Preparation , Work Permit Bangladesh , Travel Agency Dhaka , Travel Agency Sylhet , Travel Agency Chittagong"
        />
        <meta name="author" content="Eammu Holidays" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.eammu.com/targetusavisainterview" />
        <meta property="og:title" content="Visa Interview Preparation" />
        <meta
          property="og:description"
          content="Expert support from Eammu to crack your US visa interview. Get dress code tips, question patterns, document arrangement, and more."
        />
        <meta property="og:image" content="https://www.eammu.com/eammuicon.jpg" />
        <meta property="og:url" content="https://www.eammu.com/targetusavisainterview" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Eammu Holidays" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Target USA Interview Preparation | Eammu Holidays" />
        <meta
          name="twitter:description"
          content="Join Eammu’s proven interview training program for USA F1, B1/B2 visas and secure your future abroad."
        />
        <meta name="twitter:image" content="https://www.eammu.com/eammuicon.jpg" />
        <meta name="twitter:site" content="@eammuimmigration" />
      </Helmet>

      {/* Heading */}
      <header className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800">
          Target USA Visa Interview Preparation Bangladesh
        </h1>
        <p className="text-gray-600 mt-2">
          By Eammu Holidays — Cumilla’s trusted name in visa success
        </p>
        <img
          src="https://www.jobberman.com/discover/wp-content/uploads/2016/10/Jobberman_Preparing_for_Interviews.png" // Placeholder
          alt="USA Visa Interview"
          className="w-full max-w-3xl mx-auto mt-6 rounded-lg shadow"
        />
      </header>

      {/* Services */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-green-700 mb-4">What We Offer</h2>
        <ul className="list-disc pl-5 space-y-3 text-gray-700">
          <li><strong>🎤 Interview Coaching:</strong> For F1, B1/B2, F2 – with updated 2025 question sets</li>
          <li><strong>👔 Dress Code Tips:</strong> First impressions matter – dress like a winner</li>
          <li><strong>🗂️ Document Checklist:</strong> We prepare your entire folder – including PDF support</li>
          <li><strong>📚 50+ Visa Questions:</strong> Most asked with high-success sample answers</li>
          <li><strong>🧑‍🏫 Mock Sessions:</strong> Practice with real-time feedback & embassy simulation</li>
          <li><strong>👥 Private Groups:</strong> Individual care with group strategy via Zoom or in-office</li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="mb-10 bg-[#f0fdf4] p-6 rounded shadow">
        <h2 className="text-2xl font-bold text-green-800 mb-4">Why Trust Target USA Program?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
          <div>
            <h3 className="font-semibold">✅ Education + Immigration</h3>
            <p>We combine expert consultancy with personal career guidance.</p>
          </div>
          <div>
            <h3 className="font-semibold">✅ 24/7 Advisor Access</h3>
            <p>Call, message or WhatsApp any time — even the night before your interview!</p>
          </div>
          <div>
            <h3 className="font-semibold">✅ Legal Transparency</h3>
            <p>We maintain clear fee structures and proper contracts for each applicant.</p>
          </div>
          <div>
            <h3 className="font-semibold">✅ Global Offices</h3>
            <p>Get support in Bangladesh & UAE — online or walk-in.</p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Contact Us Travel Agency Bangladesh</h2>
        <ul className="space-y-2 text-gray-700 text-base">
          <li><strong>📞 Call/WhatsApp:</strong> <a href="tel:+8801701699743" className="text-blue-600">+8801701699743</a>, <a href="tel:+971507078334" className="text-blue-600">+971507078334</a></li>
          <li><strong>📧 Email:</strong> <a href="mailto:info@eammu.com" className="text-blue-600">info@eammu.com</a></li>
          <li><strong>📧 Email:</strong> <a href="mailto:support@eammu.com" className="text-blue-600">support@eammu.com</a></li>
          <li><strong>🌐 Website:</strong> <a href="https://eammu.com" className="text-blue-600" target="_blank" rel="noreferrer">www.eammu.com</a></li>
          <li><strong>🏢 Office:</strong> Office 178, 1st Floor, Gomoti Tower, Cantonment, Cumilla</li>
        </ul>
      </section>

      {/* Social Media */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Follow Us</h2>
        <div className="flex gap-4 flex-wrap">
          <a href="https://www.facebook.com/TargetUSAInterviewPreparation" className="text-blue-600 hover:underline">Facebook</a>
          <a href="#" className="text-pink-600 hover:underline">Instagram</a>
          <a href="#" className="text-blue-800 hover:underline">LinkedIn</a>
        </div>
      </section>

      {/* Back to Home */}
      <div className="text-center mt-12">
        <Link
          to="/"
          className="bg-green-800 text-white px-6 py-3 rounded-full hover:bg-green-900 transition"
        >
          ⬅ Back to Home
        </Link>
      </div>
    </div>
  );
};

export default TargetUsaInterview;
