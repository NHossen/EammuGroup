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
    image: "https://dynamicimagesae.rehlat.com/DynamicImages/DealsAndOffers/DealsInfo/644_202404301235006641.jpg",
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
    image: "https://dynamicimagesae.rehlat.com/DynamicImages/DealsAndOffers/DealsInfo/664_202305100952564008.jpg",
  },
];

const Offer = () => {
  return (
    <div className="px-4 container mx-auto py-10">
      <Helmet>
        {/* Basic SEO */}
        <title>Travel Agency Dhaka | Cheapest Flight and Hotel - Tourist Visa and Student Visa</title>
        <meta
          name="description"
          content="Eammu offers discounted Dubai e-visas, Canada tourist visas, Europe student & work visas. Best travel deals for Armenia and Bangladesh tour packages from Dhaka."
        />
        <meta
          name="keywords"
          content="Eammu, Dubai visa discount, Canada tourist visa Bangladesh, Europe student visa processing, Europe work visa for Bangladeshis, Armenia tour package from Dhaka, Bangladesh tour discounts, cheap Dubai visit visa, Schengen visa assistance, international travel deals, best travel agency in Bangladesh, Yerevan tour package, student visa Europe 2025, work permit Europe 2025"
        />
        <link rel="canonical" href="https://eammu.com/offers" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Eammu Offers - Tourist, Student & Work Visa Discounts" />
        <meta property="og:description" content="Check the latest Eammu offers including discounts on tourist visas, student visas, and travel packages." />
        <meta property="og:image" content="https://eammu.com/eammuicon.jpg" />
        <meta property="og:url" content="https://eammu.com/offers" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Eammu Offers - Tourist, Student & Work Visa Discounts" />
        <meta name="twitter:description" content="Check out Eammu’s latest offers for tourist visas, student visas, and travel packages. Book today!" />
        <meta name="twitter:image" content="https://eammu.com/eammuicon.jpg" />

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
