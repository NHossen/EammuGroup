import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AirTickets = () => {
  return (
    <div className="px-4 container mx-auto py-10">
      <Helmet>
        <title>Air Tickets | Eammu</title>
        <meta
          name="description"
          content="Book domestic and international air tickets with Eammu. Currently offering offline booking. IATA & API booking features coming soon."
        />
      </Helmet>

      {/* Page Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#005a31] mb-4">Air Tickets</h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Eammu now offers reliable <strong>air ticket booking services</strong> for domestic and international flights. Whether you're flying for education, tourism, or work — we help you get the best deals and routes, offline.
        </p>
      </div>

      {/* ✈️ Visual Section */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <img
          src="https://e3.365dm.com/24/07/1600x900/skynews-plane-cloud_6626642.jpg?20240715110714"
          alt="Airplane flying over city"
          className="rounded-lg w-full h-72 object-cover shadow-md"
        />
        <img
          src="https://www.shutterstock.com/image-vector/luggage-blue-air-ticket-float-600nw-2170367829.jpg"
          alt="Airlines banner"
          className="rounded-lg w-full h-72 object-cover shadow-md"
        />
      </div>

      {/* Current Services */}
      <section className="bg-gray-50 p-6 rounded-lg mb-10">
        <h2 className="text-2xl font-semibold text-[#005a31] mb-3">Our Current Services</h2>
        <ul className="list-disc pl-6 text-gray-800 space-y-2">
          <li>📞 Offline booking via phone, WhatsApp, or in-person</li>
          <li>🌐 All major international & domestic airlines supported</li>
          <li>📅 Advance group and individual ticketing available</li>
          <li>💼 Travel itinerary support for visa documentation</li>
        </ul>
      </section>

      {/* Coming Soon Features */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-[#005a31] mb-3">Coming Soon at Eammu</h2>
        <p className="text-gray-700 mb-4">
          We're working hard to bring you a <strong>fully integrated air ticket platform</strong>:
        </p>
        <ul className="list-disc pl-6 text-gray-800 space-y-2">
          <li>🎫 <strong>IATA Certified Booking System</strong></li>
          <li>🔌 <strong>API Integration</strong> with airlines for real-time prices & availability</li>
          <li>🖥️ <strong>Online self-booking portal</strong> via web & mobile app</li>
          <li>💳 Secure online payment options with e-tickets</li>
        </ul>
      </section>

      {/* Call to Action & Back to Home */}
      <div className="text-center mt-12">
        <p className="text-xl font-medium text-gray-800 mb-4">
          Need tickets today? Contact our team directly to book your flight!
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

export default AirTickets;
