

import { Helmet } from 'react-helmet-async';

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

      <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Eammu Newsfeeds</h1>
          <p className="text-lg text-gray-700 max-w-xl mx-auto mb-6">
            We’re launching a dedicated news and blog section where you'll find the latest updates on immigration,
            global visa policies, international education news, and travel alerts — all in one place!
          </p>

          <p className="text-base text-gray-600 mb-8">
            🚧 Our team is working behind the scenes to bring you real-time insights and expert opinions.
            Stay connected — the future of informed travel is coming soon.
          </p>

          <button className="bg-green-800 text-white px-6 py-3 rounded-full hover:bg-green-900 transition">
            Back to Home
          </button>
        </div>
      </main>
    </>
  );
};

export default EammuNewsfeeds;
