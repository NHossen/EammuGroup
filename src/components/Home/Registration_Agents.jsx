import { Helmet } from 'react-helmet-async';

const Registration_Agents = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Eammu Holidays",
    "url": "https://eammu.com",
    "logo": "https://eammu.com/images/logo.png",
    "description": "Join Eammu Holidays as a registered travel agent in Bangladesh. Start your visa and ticketing business with 50% commission and no investment.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+8801631312524",
      "contactType": "customer service",
      "areaServed": "BD",
      "email": "info@eammu.com"
    },
    "sameAs": [
      "https://www.facebook.com/eammutourism",
      "https://www.instagram.com/eammuholidays",
      "https://www.linkedin.com/company/eammu",
      "https://www.youtube.com/@Eammutour"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Agent Registration Program",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Travel Agent Registration",
            "description": "Become an Eammu Holidays agent in Bangladesh with 50% commission and no investment."
          }
        }
      ]
    }
  };

  return (
    <div className="mb-12 px-4 container mx-auto">
      <Helmet>
        <title>Become a Travel Agent in Bangladesh | Eammu Holidays</title>
        <meta
          name="description"
          content="Join Eammu Holidays as a registered travel agent in Bangladesh. Start your visa and ticketing business with 50% commission and no investment. Limited slots available!"
        />
        <meta
          name="keywords"
          content="become travel agent Bangladesh, visa agent partnership, travel agency commission, Eammu Holidays agentship, start travel business Bangladesh"
        />
        <meta name="robots" content="index, follow" />
         <meta
    property="og:image"
    content="https://eammu.com/eammuicon.jpg"
  />
        <link rel="canonical" href="https://eammu.com/agent-registration" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="eammu-agent-travel-agency-bangladesh-dhaka.webp"
            alt="Eammu Holidays Agent Registration"
            loading="eager"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold text-[#005a31]">
            Eammu Holidays Gives Agentship in Bangladesh
          </h2>
          <p className="mt-6 text-gray-700 leading-relaxed">
            বেকার বসে আছেন? ৫০% এজেন্টশিপে ট্রাভেল এজেন্সী ব্যবসা করুন কোন ইনভেস্ট ছাড়াই! <br /><br />
            🚀 ট্রাভেল এজেন্সী ব্যবসায় একটি ভালো ক্যারিয়ারের স্বপ্ন দেখছেন? আপনার সুযোগ এখানেই!🚀 <br /><br />
            ইয়াম্মু হলিডেজ এর সাথে সর্বোচ্চ কমিশনে টিকেট এবং ভিসা করুন 🔥 <br />
            Eammu Holidays কোনো ইনভেস্ট ছাড়াই উল্লেখযোগ্য 50% কমিশন সহ ব্যক্তিদের
            এজেন্ট হিসেবে আমাদের সাথে যোগদান করার জন্য একটি সীমিত সুযোগ দিচ্ছে! 🔥
          </p>
          <p className="text-2xl font-bold text-[#005a31] mt-4">
            শীঘ্রই রেজিস্ট্রেশন করুন
          </p>
          <div className="card-actions justify-end mt-4">
            <a
              href="https://rb.gy/si1vi9"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:shadow-[#005a31] hover:shadow-lg btn text-lg hover:bg-[#005a31] hover:text-white bg-white text-[#072504] border-[1.5px] border-[#072504]"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration_Agents;
