import { Helmet } from "react-helmet-async";

const WhyChoiceEammu = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 container mx-auto py-12">
      {/* ✅ SEO Tags */}
      <Helmet>
        <title>Eammu | Trusted Visa & Study Abroad Experts | Apply for Europe, USA, UK & Tourist Visas with Eammu</title>
        <meta
          name="description"
          content="Discover why Eammu Immigration Services is the top choice for visa processing, study abroad consulting, group tours, and international travel support. 6+ years of trusted service from Bangladesh and UAE."
        />
        <meta
          name="keywords"
          content="Why Eammu, Eammu Immigration Services, best visa consultancy Bangladesh, visa agency UAE, travel agency Bangladesh, Eammu reviews, education consultancy, student visa help"
        />
        <meta name="author" content="Eammu Immigration Services" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.eammu.com/whychooseus" />

        {/* Open Graph for Facebook/LinkedIn */}
        <meta property="og:title" content="Why Choose Eammu Immigration Services" />
        <meta property="og:description" content="Explore what makes Eammu your trusted immigration and travel partner. Proven success in visas, tours, and student guidance." />
        <meta property="og:image" content="https://www.eammu.com/eammuicon.jpg" />
        <meta property="og:url" content="https://www.eammu.com/whychooseus" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Eammu Immigration Services" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Why Eammu? | Trusted Visa & Travel Services" />
        <meta name="twitter:description" content="See why thousands trust Eammu Immigration for study, work, and travel visa support." />
        <meta name="twitter:image" content="https://www.eammu.com/eammuicon.jpg" />
        <meta name="twitter:site" content="@eammuimmigration" />
      </Helmet>

      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-[#005a31]">
        Why Choose Eammu Immigration Services?
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-[#005a31]">
          <h3 className="text-xl font-semibold mb-2 text-[#005a31]">✅ 6+ Years of Experience</h3>
          <p>We’ve been serving clients across Bangladesh and UAE with reliable and ethical visa consulting.</p>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-[#005a31]">
          <h3 className="text-xl font-semibold mb-2 text-[#005a31]">🎓 Student Visa Experts</h3>
          <p>We help students secure study permits in top countries like Canada, UK, USA, Russia, and more.</p>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-[#005a31]">
          <h3 className="text-xl font-semibold mb-2 text-[#005a31]">🌍 Global Tour Planning</h3>
          <p>We organize customized tours, Umrah packages, and international air ticketing solutions.</p>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-[#005a31]">
          <h3 className="text-xl font-semibold mb-2 text-[#005a31]">📞 Customer Support</h3>
          <p>Dedicated team for after-service, case updates, and customer relationships management.</p>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-[#005a31]">
          <h3 className="text-xl font-semibold mb-2 text-[#005a31]">🛫 One-Stop Travel Solution</h3>
          <p>From visa to tickets to accommodation—we simplify every travel need in one place.</p>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-[#005a31]">
          <h3 className="text-xl font-semibold mb-2 text-[#005a31]">🧾 Transparent Process</h3>
          <p>No hidden charges, no false promises—only clear consultation and step-by-step guidance.</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoiceEammu;