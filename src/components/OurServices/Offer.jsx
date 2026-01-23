import React from "react";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

const offers = [
  {
    id: 1,
    title: "Summer Special Discount",
    description: "Get 15% off on all international tour packages booked before July 31.",
    image: "https://img.freepik.com/premium-vector/summer-sale-template-clipart-poster-summer-promo-limited-time-offer-with-watermelon-ice-cream_572288-4518.jpg?semt=ais_hybrid&w=740",
  },
  {
    id: 2,
    title: "Student Visa Promo",
    description: "Flat $100 off on student visa processing fees for select countries.",
    image: "https://www.shutterstock.com/image-vector/limited-offer-banner-sale-clock-600nw-1912324219.jpg",
  },
  {
    id: 3,
    title: "Early Bird Flight Deal",
    description: "Book your air tickets 3 months in advance and save up to 20%.",
    image: "/offer-eammu-travel-agency-bangladesh-dhaka.webp",
  },
  {
    id: 4,
    title: "Family Tour Package Offer",
    description: "Book for 4 or more family members and get special group discounts.",
    image: "https://offercdn.paytm.com/blog/2023/03/friends-family-app.png",
  },
  {
    id: 5,
    title: "Fast Track Travel Offer",
    description: "Fast Track Travel Offer visa application with zero extra charge for June.",
    image: "/best-travel-agency-bangladesh-offer.webp",
  },
    {
    id: 6,
    title: "Travel Promo Deals 2026",
    description: "Travel Promo Deals 2026 Offer visa application with zero extra charge for June.",
    image: "/travel-promo-deals-travel-agency-offer-bangladesh.webp",
  },
];

const Offer = () => {
  return (
    <div className="px-4 container mx-auto py-10">
      <Helmet>
         {/* Primary SEO */}
  <title>
    Travel Deals & Special Offers | Cheap Flights & Tour Packages – Eammu
  </title>

  <meta
    name="description"
    content="Discover exclusive travel deals with Eammu. Special offers on cheap air tickets, tour packages, hotel deals, and visa services from an IATA approved global travel agency."
  />

  <meta
    name="keywords"
    content="
    travel deals,
    special travel offers,
    cheap flight deals,
    discount tour packages,
    holiday offers worldwide,
    cheap air tickets offer,
    last minute travel deals,
    travel agency discounts,
    flight and hotel deals,
    iata approved travel agency offers
    "
  />

  {/* Canonical */}
  <link rel="canonical" href="https://eammu.com/offers" />

  {/* Geo Targeting */}
  <meta name="geo.region" content="BD" />
  <meta name="geo.placename" content="Cumilla, Bangladesh" />
  <meta name="geo.position" content="23.4607;91.1809" />
  <meta name="ICBM" content="23.4607, 91.1809" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Special Travel Offers & Deals | Eammu Group" />
  <meta
    property="og:description"
    content="Limited-time offers on flights, tours, and visa services. Grab exclusive travel deals with Eammu – trusted, global, IATA approved."
  />
  <meta property="og:url" content="https://eammu.com/offers" />
  <meta property="og:site_name" content="Eammu Group" />
  <meta property="og:image" content="https://eammu.com/seo/travel-offers.jpg" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Cheap Travel Deals & Offers | Eammu" />
  <meta
    name="twitter:description"
    content="Save more on flights and tour packages. Check Eammu’s latest travel offers today."
  />
  <meta name="twitter:image" content="https://eammu.com/seo/travel-offers.jpg" />

  {/* Trust & Indexing */}
  <meta name="author" content="Eammu Group" />
  <meta name="publisher" content="Eammu Group" />
  <meta name="robots" content="index, follow, max-image-preview:large" />

        {/* Structured Data */}
      <script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Eammu Current Offers",
  "description": "Latest discounts and promotional offers from Eammu Holidays",
  "itemListElement": offers.map((offer, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Offer",
      "name": offer.title,
      "description": offer.description,
      "image": offer.image,
      "url": "https://eammu.com/offers",
      "availability": "https://schema.org/InStock"
    }
  }))
})}
</script>


        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How can I book Eammu offers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can book any current offers directly via WhatsApp or by contacting Eammu offices in Dubai, India, Armenia, or Bangladesh."
                }
              },
              {
                "@type": "Question",
                "name": "Are these offers available for all countries?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Offers may vary based on tour package or visa type. Please check the details of each offer before booking."
                }
              },
              {
                "@type": "Question",
                "name": "Can I combine multiple offers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, offers are generally not combinable unless explicitly mentioned."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <h1 className="text-4xl font-bold text-[#005a31] mb-10 text-center">
        ✨ Current Offers
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {offers.map(({ id, title, description, image }) => (
          <div
            key={id}
            className="bg-white rounded-lg overflow-hidden border border-[#005a31] shadow hover:shadow-lg transition duration-300"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-52 object-cover"
              loading="lazy"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-[#005a31] mb-2">{title}</h2>
              <p className="text-gray-700">{description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action & Back to Home */}
      <div className="text-center mt-12">
        <p className="text-xl font-medium text-gray-800 mb-4">
          Need an offer today? Contact our team directly to book your Tour!
        </p>
        <a
          href="https://wa.me/8801631312524?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#005a31] text-white px-6 py-2 rounded-full hover:bg-[#003e24] transition mb-4"
        >
          Book Now on WhatsApp
        </a>
        <div className="mt-4">
          <Link
            to="/"
            className="inline-block bg-white border border-green-800 text-green-800 px-6 py-3 rounded-full hover:bg-green-100 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Offer;
