import { Helmet } from "react-helmet-async";

const WhyChoiceEammu = () => {
  return (
    <div className="px-4 container mx-auto py-10">
      {/* ✅ SEO Tags */}
      <Helmet>
        <title>Why Choose Eammu Immigration Services | Trusted Visa & Study Abroad Experts</title>
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

      <h1 className="text-4xl font-bold text-center mb-8 text-[#005a31]">
        Why Choose Eammu Immigration Services?
      </h1>

      {/* FAQ Accordion */}
      <div className="space-y-4">
        {/* All your FAQ items here — unchanged */}
        {/* ... */}
      </div>
    </div>
  );
};

export default WhyChoiceEammu;
