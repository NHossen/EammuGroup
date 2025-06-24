import { useState } from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add login logic (API call, validation, etc.)
    console.log('Logging in with:', formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-8 space-y-6 border border-gray-200">
        <div>
          <h1 className="text-4xl font-bold text-center text-[#005a31]">Welcome Back!</h1>
          <p className="text-sm text-gray-600 text-center mt-1">Please log in to your Eammu account</p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#005a31]"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#005a31]"
              placeholder="••••••••"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#005a31] hover:bg-[#004824] text-white rounded-md transition duration-200"
          >
            Log In
          </button>
        </form>

        {/* Sign up Prompt */}
        <div className="text-sm text-center text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-[#005a31] font-medium hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
