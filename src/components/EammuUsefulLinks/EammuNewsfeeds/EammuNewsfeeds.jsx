import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const EammuNewsfeeds = () => {
  return (
    <>
      <Helmet>
        <title>Eammu Newsfeeds | Latest Immigration & Travel Updates</title>
        <meta
          name="description"
          content="Stay tuned for Eammu Newsfeeds! Get the latest updates on immigration policies, student visas, travel alerts, and global opportunities."
        />
        <meta
          name="keywords"
          content="Eammu Newsfeeds, immigration news, travel updates, visa policy, study abroad updates, Eammu blog"
        />
      </Helmet>

      <main className="min-h-screen bg-gray-50 px-4 py-10">
        <div className="container mx-auto max-w-5xl text-center">

          {/* ✅ Featured Image */}
          <img
            src="https://img.freepik.com/premium-vector/travel-time-vector-banner-design-time-travel-text-with-travelling-elements_572293-801.jpg"
            alt="Eammu News Banner"
            className="w-full h-auto rounded-lg shadow-md mb-8"
          />

          {/* ✅ Main Title */}
          <h1 className="text-4xl font-bold text-green-800 mb-4">
            Eammu Newsfeeds
          </h1>

          {/* ✅ Introduction */}
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
            Welcome to Eammu's official News & Blog portal! Soon, you'll have access to the latest updates on immigration policies, visa news, travel tips, and global education opportunities.
          </p>

          {/* ✅ About Section */}
          <section className="bg-white p-6 rounded-xl shadow-md my-8 text-left">
            <h2 className="text-2xl font-semibold text-green-700 mb-2">🌍 About Our Newsfeeds</h2>
            <p className="text-gray-600 leading-relaxed">
              At Eammu Immigration Services, we believe in keeping our clients and community informed. Whether it's breaking visa news, new scholarship announcements, embassy alerts, or destination insights — our blog is designed to help you make the smartest travel and study decisions.
            </p>
          </section>

          {/* ✅ Categories (Future Section Preview) */}
          <section className="bg-white p-6 rounded-xl shadow-md my-8 text-left">
            <h2 className="text-2xl font-semibold text-green-700 mb-2">📚 Topics We’ll Cover</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Immigration rule changes & policy updates</li>
              <li>Student visa tips for USA, Canada, UK, and Europe</li>
              <li>Travel alerts and airline updates</li>
              <li>Tour package deals and seasonal offers</li>
              <li>Success stories and expert interviews</li>
            </ul>
          </section>

          {/* ✅ Coming Soon Note */}
          <p className="text-base text-gray-600 italic mb-8">
            🚧 Our editorial team is working hard to launch this section. Bookmark this page and follow Eammu on social media for the latest launch updates!
          </p>

          {/* ✅ CTA Button */}
          <Link
            to="/"
            className="inline-block bg-green-800 text-white px-6 py-3 rounded-full hover:bg-green-900 transition"
          >
            Back to Home
          </Link>
        </div>
      </main>
    </>
  );
};

export default EammuNewsfeeds;
