import React from "react";
import { Helmet } from "react-helmet";

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
        <title>Offers - Eammu Immigration & Tours</title>
        <meta
          name="description"
          content="Check out the latest offers from Eammu — including discounts on tourist visas, student visas, air tickets, and family tour packages."
        />
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
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-[#005a31] mb-2">{title}</h2>
              <p className="text-gray-700">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
