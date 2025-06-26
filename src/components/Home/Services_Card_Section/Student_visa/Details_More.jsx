const Details_More = () => {
  return (
    <div className="px-4 container mx-auto mt-10 mb-16">
      <h1 className="text-4xl font-bold text-[#005a31] text-center mb-8">
        Visa & Immigration Services — Details & Support
      </h1>

      <div className="bg-white border border-[#005a31] rounded-xl p-6 md:p-10 shadow-lg space-y-6">
        <p className="text-lg text-[#005a31] leading-relaxed">
          Welcome to <span className="font-semibold">Eammu Immigration Services</span>, your trusted partner in global migration and travel. Whether you're planning to study abroad, work overseas, explore new countries, or migrate permanently — our experienced team is here to support you every step of the way.
        </p>

        <div>
          <h2 className="text-2xl font-semibold text-[#005a31] mb-2">🌍 Our Core Services</h2>
          <ul className="list-disc list-inside text-[#005a31] space-y-1">
            <li><strong>Student Visas:</strong> Get admitted to top universities worldwide.</li>
            <li><strong>Work Visas:</strong> Secure international job opportunities legally.</li>
            <li><strong>Tourist Visas:</strong> Visit countries like the USA, Dubai, Japan, and more.</li>
            <li><strong>Immigration:</strong> PR, green card, and family sponsorship support.</li>
          </ul>
        </div>

        <hr className="border-t border-[#005a31]" />

        <div>
          <h2 className="text-2xl font-semibold text-[#005a31] mb-2">🤝 Why Choose Eammu?</h2>
          <ul className="list-disc list-inside text-[#005a31] space-y-1">
            <li>Over 6 years of success in global visa services</li>
            <li>Dedicated visa experts for each category</li>
            <li>Transparent process & refund policy</li>
            <li>24/7 client support for peace of mind</li>
          </ul>
        </div>

        <hr className="border-t border-[#005a31]" />

        <div>
          <h2 className="text-2xl font-semibold text-[#005a31] mb-2">📞 Contact Our Team</h2>
          <p className="text-[#005a31] mb-3">
            Ready to start your global journey? Reach out to us — our expert advisors are here to help you.
          </p>
          <div className="text-[#005a31] space-y-1 font-medium">
            <p><strong>📍 BD Office:</strong> <a href="tel:+8801701699743" className="hover:underline">+880 1701 699 743</a></p>
            <p><strong>📍 UAE Office:</strong> <a href="tel:+971507078334" className="hover:underline">+971 50 707 8334</a></p>
            <p><strong>✉️ Email:</strong> <a href="mailto:eammuimmigration@gmail.com" className="hover:underline">eammuimmigration@gmail.com</a></p>
            <p><strong>🌐 Website:</strong> <a href="https://www.eammu.com" target="_blank" rel="noreferrer" className="hover:underline">www.eammu.com</a></p>
          </div>
        </div>

        <div className="text-center mt-6">
         <a
    href="https://wa.me/8801631312524?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-[#005a31] text-white px-6 py-2 rounded-full hover:bg-[#003e24] transition"
  >
    Contact Now
  </a>
        </div>
      </div>
    </div>
  );
};

export default Details_More;
