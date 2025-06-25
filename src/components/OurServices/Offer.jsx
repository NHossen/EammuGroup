import React from "react";
import { Helmet } from "react-helmet";

const offers = [
  {
    id: 1,
    title: "Summer Special Discount",
    description: "Get 15% off on all international tour packages booked before July 31.",
    image: "https://images.unsplash.com/photo-1600891963935-c3b9b4c9c453?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Student Visa Promo",
    description: "Flat $100 off on student visa processing fees for select countries.",
    image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Early Bird Flight Deal",
    description: "Book your air tickets 3 months in advance and save up to 20%.",
    image: "https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Family Tour Package Offer",
    description: "Book for 4 or more family members and get special group discounts.",
    image: "https://images.unsplash.com/photo-1606788075765-c8497d41e25a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Work Visa Fast Track",
    description: "Fast-track your work visa application with zero extra charge for June.",
    image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=800&q=80",
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
