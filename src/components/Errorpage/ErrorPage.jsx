import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-2xl text-center">
        {/* Emoji / Icon */}
        <div className="text-7xl mb-6">📡</div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Oops! Connection Lost
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
          Looks like your internet connection is unstable or offline.
          Please check your network and try again.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => window.location.reload()}
            className="bg-[#005a31] text-white px-8 py-3 rounded-full hover:bg-[#003e24] transition"
          >
            🔄 Retry
          </button>

          <Link
            to="/"
            className="border border-[#005a31] text-[#005a31] px-8 py-3 rounded-full hover:bg-green-100 transition"
          >
            ⬅ Back to Home
          </Link>
        </div>

        {/* Footer note */}
        <p className="text-sm text-gray-400 mt-10">
          If the problem continues, please contact support.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
