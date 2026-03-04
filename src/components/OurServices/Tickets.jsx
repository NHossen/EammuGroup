import React from 'react'; // Fixed import

import { Link } from 'react-router-dom';

const destinations = [
  { name: "USA", link: "/visa-services#usa", image: "https://visadone.com/wp-content/uploads/2023/02/USA-VISA.png", price: "From $450" },
  { name: "UK", link: "/visa-services#uk", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkgBKQsFv4LdWUzfgaoMj5srhPn0vAuU9X6Q&s", price: "From $500" },
  { name: "Canada", link: "/visa-services#canada", image: "https://pelicanmigration.com/wp-content/uploads/2024/01/Canada-Visitor-Visa.jpg", price: "From $470" },
  { name: "Europe (Schengen)", link: "/visa-services#europe", image: "https://www.babaaztravels.com/wp-content/uploads/2023/05/Schengen-Visit-Visa-Requirements-Babaaz-Travels.jpeg", price: "From $400" },
  { name: "Australia", link: "/visa-services#australia", image: "https://www.kkday.com/en-sg/blog/wp-content/uploads/Aussie-VTL-1170x680.jpg", price: "From $600" },
  { name: "Japan", link: "/visa-services#japan", image: "https://www.babaaztravels.com/wp-content/uploads/2022/04/japan.jpg", price: "From $550" },
  { name: "Dubai (UAE)", link: "/visa-services#dubai", image: "https://canadiangeographic.ca/wp-content/uploads/2022/10/dubai-skyline-1440x1011.jpg", price: "From $350" },
  { name: "Malaysia", link: "/visa-services#malaysia", image: "https://travelobiz.com/wp-content/uploads/2023/01/Malaysia-eVisa-with-Map.jpg", price: "From $300" },
];

const Tickets = () => {
  // Define the missing structured data


  return (
    <div className="px-4 sm:px-6 lg:px-10 container mx-auto py-10">
      {/* Visual Section */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <img
          src="https://e3.365dm.com/24/07/1600x900/skynews-plane-cloud_6626642.jpg?20240715110714"
          alt="Plane"
          className="rounded-2xl w-full h-72 object-cover shadow-md"
        />
        <img
          src="https://www.shutterstock.com/image-vector/luggage-blue-air-ticket-float-600nw-2170367829.jpg"
          alt="Tickets"
          className="rounded-2xl w-full h-72 object-cover shadow-md"
        />
      </div>

      {/* Popular Routes */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-[#005a31] mb-6 text-center">
          Popular Routes & Deals
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-all flex flex-col justify-between group border border-gray-100"
            >
              <Link to={dest.link} className="relative block overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />
              </Link>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-[#005a31]">
                  {dest.name}
                </h3>
                <p className="text-gray-700 text-sm mb-3">{dest.price}</p>
                <a
                  href={`https://wa.me/8801631312524?text=Book flight to ${dest.name}`}
                  className="block bg-[#005a31] text-white py-2 rounded-full hover:bg-black transition font-medium"
                >
                  Check Seats
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <div className="text-center mt-12 bg-green-50 py-10 rounded-[2rem] sm:rounded-[3rem] px-4">
        <p className="text-xl font-medium text-gray-800 mb-6">
          Need expert help? Contact us now.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://wa.me/8801631312524"
            className="bg-[#005a31] text-white px-10 py-3 rounded-full hover:bg-black transition"
          >
            WhatsApp Booking
          </a>
          <Link
            to="/"
            className="bg-white border border-green-800 text-green-800 px-10 py-3 rounded-full hover:bg-green-50 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tickets;