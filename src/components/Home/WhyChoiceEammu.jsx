const WhyChoiceEammu = () => {
  return (
    <div className="px-4 container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#005a31]">
        Why Choose Eammu Immigration Services?
      </h1>

      {/* FAQ Accordion */}
      <div className="space-y-4">
        <div className="collapse collapse-arrow bg-base-100 shadow">
          <input type="radio" name="eammu-accordion" />
          <div className="collapse-title text-xl font-semibold text-[#005a31]">
            What sets Eammu Immigration Consultancy Services apart from other consulting firms?
          </div>
          <div className="collapse-content text-gray-700">
            <p>
              Eammu Immigration Consultancy Services stands out with over six years of excellence, guiding Bangladeshi students toward global academic success. Our personalized service and strong track record make us a trusted leader in education consulting.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 shadow">
          <input type="radio" name="eammu-accordion" />
          <div className="collapse-title text-xl font-semibold text-[#005a31]">
            How does Eammu Immigration Services ensure success in the university application process?
          </div>
          <div className="collapse-content text-gray-700">
            <p>
              We follow a meticulous approach in assisting students to identify suitable universities, scholarships, and funding. Our expert guidance increases admission chances and reduces financial burden through accurate documentation and preparation.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 shadow">
          <input type="radio" name="eammu-accordion" />
          <div className="collapse-title text-xl font-semibold text-[#005a31]">
            What makes Eammu Immigration Services a trusted partner in immigration processes?
          </div>
          <div className="collapse-content text-gray-700">
            <p>
              Our experienced immigration professionals handle complex visa and migration cases with precision. From documentation to legal support, we ensure a smooth path to your international relocation.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 shadow">
          <input type="radio" name="eammu-accordion" />
          <div className="collapse-title text-xl font-semibold text-[#005a31]">
            How does Eammu Immigration Services cater to travel needs?
          </div>
          <div className="collapse-content text-gray-700">
            <p>
              We offer budget-friendly international airfare and ticketing options. Whether you're traveling for study, tourism, or work, Eammu ensures hassle-free and cost-effective travel arrangements.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 shadow">
          <input type="radio" name="eammu-accordion" />
          <div className="collapse-title text-xl font-semibold text-[#005a31]">
            What makes Eammu Immigration Services stand out in tourist visa services and group tour packages?
          </div>
          <div className="collapse-content text-gray-700">
            <p>
              We specialize in personalized tourist visa processing and curated group tour packages across Asia, Europe, and the Middle East. Our travel team ensures memorable, safe, and enjoyable experiences.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 shadow">
          <input type="radio" name="eammu-accordion" />
          <div className="collapse-title text-xl font-semibold text-[#005a31]">
            How does Eammu Immigration Services ensure client satisfaction?
          </div>
          <div className="collapse-content text-gray-700">
            <p>
              Client satisfaction is at the core of Eammu’s mission. We provide end-to-end support tailored to individual needs with transparency, timely communication, and a commitment to positive outcomes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoiceEammu;
