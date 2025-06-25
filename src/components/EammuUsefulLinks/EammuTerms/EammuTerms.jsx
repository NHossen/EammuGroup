import { Helmet } from "react-helmet-async";

const EammuTerms = () => {
  return (
    <div className="px-4 container mx-auto py-12">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Terms of Use & Privacy Policy | Eammu Group</title>
        <meta
          name="description"
          content="Read the official Terms of Use and Privacy Policy for Eammu Group websites, including Eammu Immigration, Travel, Fashion, and more."
        />
        <meta
          name="keywords"
          content="Eammu Terms, Privacy Policy, Eammu Group Bangladesh, User Policy, Data Usage"
        />
      </Helmet>

      {/* Page Heading */}
      <h1 className="text-4xl font-bold text-[#005a31] mb-6 text-center">
        Terms of Use & Privacy Policy
      </h1>

      {/* Section: Introduction */}
      <section className="mb-10 text-gray-700">
        <p>
          Welcome to Eammu Group. This Terms of Use and Privacy Policy outlines how we collect,
          use, and protect your personal information when you interact with any of our platforms
          including but not limited to Eammu Immigration Services, Eammu Tours & Travels,
          Eammu Fashion, FlyZoo, and Eammu IT Solutions.
        </p>
      </section>

      {/* Section: Terms of Use */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-[#005a31] mb-3">1. Terms of Use</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            You agree not to misuse the services provided by Eammu Group for any fraudulent,
            illegal, or abusive activities.
          </li>
          <li>
            All content, trademarks, logos, and intellectual property on this website are owned
            by Eammu Group and cannot be reproduced without permission.
          </li>
          <li>
            You must not use any automated system or software to extract data without written
            consent.
          </li>
          <li>
            We reserve the right to update our terms without prior notice. Your continued use of
            our services means acceptance of these changes.
          </li>
        </ul>
      </section>

      {/* Section: Privacy Policy */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-[#005a31] mb-3">2. Privacy Policy</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            We collect basic personal information like name, phone, email, and travel preferences
            when you register or make a booking.
          </li>
          <li>
            Your information is used to improve our services, process your requests, and share
            important updates or offers.
          </li>
          <li>
            We do not sell or rent your data to third parties. Your information is stored securely.
          </li>
          <li>
            Cookies may be used to enhance your browsing experience and track usage patterns.
          </li>
          <li>
            You can request access, updates, or deletion of your personal data by contacting us at
            <a
              href="mailto:info@eammu.com"
              className="text-blue-600 underline ml-1"
            >
              info@eammu.com
            </a>
            .
          </li>
        </ul>
      </section>

      {/* Section: Third-Party Links */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-[#005a31] mb-3">3. Third-Party Links</h2>
        <p className="text-gray-700">
          Our website may contain links to other websites. We are not responsible for the privacy
          practices or content of those third-party sites. We encourage you to read their policies
          before sharing any personal data.
        </p>
      </section>

      {/* Section: Children's Privacy */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-[#005a31] mb-3">4. Children’s Privacy</h2>
        <p className="text-gray-700">
          Our services are not directed to individuals under the age of 13. We do not knowingly
          collect personal data from children.
        </p>
      </section>

      {/* Section: Contact Information */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-[#005a31] mb-3">5. Contact Us</h2>
        <p className="text-gray-700">
          For any questions regarding our terms or privacy practices, please contact us at:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mt-2">
          <li>Email: <a className="text-blue-600 underline" href="mailto:info@eammu.com">info@eammu.com</a></li>
          <li>Phone: +88016 31 31 25 24</li>
          <li>Office: Cumilla Cantonment, Bangladesh</li>
        </ul>
      </section>

      {/* Footer Note */}
      <div className="text-center text-sm text-gray-500 mt-12">
        © {new Date().getFullYear()} Eammu Group. All rights reserved.
      </div>
    </div>
  );
};

export default EammuTerms;
