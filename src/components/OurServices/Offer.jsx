import React from "react";

const offers = [
  {
    id: 1,
    title: "Summer Special Discount",
    description: "Get 15% off on all international tour packages booked before July 31.",
  },
  {
    id: 2,
    title: "Student Visa Promo",
    description: "Flat $100 off on student visa processing fees for select countries.",
  },
  {
    id: 3,
    title: "Early Bird Flight Deal",
    description: "Book your air tickets 3 months in advance and save up to 20%.",
  },
  {
    id: 4,
    title: "Family Tour Package Offer",
    description: "Book for 4 or more family members and get special group discounts.",
  },
  {
    id: 5,
    title: "Work Visa Fast Track",
    description: "Fast-track your work visa application with zero extra charge for June.",
  },
];

const Offer = () => {
  return (
    <div className="px-4 container mx-auto py-10">
      <h1 className="text-4xl font-bold text-[#005a31] mb-8 text-center">Current Offers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {offers.map(({ id, title, description }) => (
          <div
            key={id}
            className="border border-[#005a31] rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-[#005a31] mb-3">{title}</h2>
            <p className="text-gray-700">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
