import { Helmet } from "react-helmet-async";

const TargetUsaInterview = () => {
  return (
    <div className="px-4 container mx-auto">
      <div className="min-h-screen">
        {/* ✅ SEO Tags */}
        <Helmet>
          <title>Target USA Visa Interview Preparation | Eammu Immigration Services</title>
          <meta
            name="description"
            content="Prepare for your USA visa interview with Eammu's Target USA program. Get expert guidance on F1, B1/B2, document support, mock interviews, and more."
          />
          <meta
            name="keywords"
            content="USA visa interview, F1 visa coaching, B2 visa support, mock visa interview, Eammu Immigration, Target USA program, USA visa preparation, student visa USA, US embassy coaching"
          />
          <meta name="author" content="Eammu Immigration Services" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://www.eammu.com/targetusavisainterview" />

          {/* Open Graph */}
          <meta property="og:title" content="Target USA Visa Interview Preparation" />
          <meta
            property="og:description"
            content="Expert support from Eammu to crack your US visa interview. Get dress code tips, question patterns, document arrangement, and more."
          />
          <meta property="og:image" content="https://www.eammu.com/eammuicon.jpg" />
          <meta property="og:url" content="https://www.eammu.com/targetusavisainterview" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Eammu Immigration Services" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Target USA Interview Preparation | Eammu Immigration" />
          <meta
            name="twitter:description"
            content="Join Eammu’s proven interview training program for USA F1, B1/B2 visas and secure your future abroad."
          />
          <meta name="twitter:image" content="https://www.eammu.com/eammuicon.jpg" />
          <meta name="twitter:site" content="@eammuimmigration" />
        </Helmet>

        {/* Navigation Bar */}
        <nav className="p-4">
          <div className="container mx-auto text-center">
            <span className="text-3xl font-bold">Target USA Visa Interview Preparation</span>
          </div>
        </nav>

        {/* Main Content */}
        <div className="container mx-auto mt-8 p-8">
          <section className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Welcome to Target USA Visa Interview Preparation</h1>
            <p className="text-gray-700">
              Your premier education consultancy dedicated to preparing students for successful visa interviews in the United States.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Services</h2>
            <ul className="list-disc ml-8 space-y-2">
              <li><strong>Interview Preparation:</strong> We help students prepare for F1, F2, B1, and B2 interviews with specific question patterns and types.</li>
              <li><strong>Dress Up Guidance:</strong> We provide professional dress code guidance for visa interviews.</li>
              <li><strong>Document Arrangement Assistance:</strong> Our team provides PDF checklists and supports students with visa documents.</li>
              <li><strong>Interview Q&A Bank:</strong> Access 50+ commonly asked visa questions with ideal answers.</li>
              <li><strong>Private Batch Classes:</strong> One-on-one attention through focused small group sessions.</li>
              <li><strong>Mock Interviews:</strong> Practice interviews to simulate real US embassy scenarios.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Why Choose Target USA Visa Interview Preparation?</h2>
            <div className="space-y-4">
              <p><strong>🎓 Education Consultancy:</strong> Complete education visa support.</p>
              <p><strong>✈️ Travel Planning:</strong> Hassle-free visa journey.</p>
              <p><strong>📋 Expert Guidance:</strong> Pro interview tips & support.</p>
              <p><strong>⏰ 24/7 Support:</strong> Always available for your queries.</p>
              <p><strong>🌍 Online Presence:</strong> Connect via social media & website.</p>
              <p><strong>📞 Contact Options:</strong> Phone, WhatsApp, Email, and more.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">About Eammu Immigration Services</h2>
            <p className="text-gray-700">
              Target USA Visa Interview Preparation is a service under Eammu Immigration Services, a leading name in global education and immigration consulting.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p><strong>📞 Call/WhatsApp:</strong> +8801701699743, +8801631312524, +971507078334</p>
            <p><strong>📧 Email:</strong> eammuimmigration@gmail.com</p>
            <p><strong>🌐 Website:</strong> <a className="text-blue-500" href="https://www.eammu.com">www.eammu.com</a></p>
            <p><strong>🏢 Office Address:</strong> Office No: 178-1st Floor, Gomoti Tower, Cantoment, Cumilla</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Follow Us on Social Media</h2>
            <ul className="list-disc ml-8 space-y-1">
              <li><a href="#" className="text-blue-600">LinkedIn</a></li>
              <li><a href="#" className="text-blue-600">Facebook</a></li>
              <li><a href="#" className="text-blue-600">Instagram</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TargetUsaInterview;
