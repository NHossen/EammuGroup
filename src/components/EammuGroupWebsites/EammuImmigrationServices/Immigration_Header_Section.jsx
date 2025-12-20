import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Immigration_Header_Section = () => {
  return (
    <div className="px-4 container mx-auto py-6">
      {/* SEO Helmet */}
      <Helmet>
        <title>Eammu Holidays | Global Visa Experts</title>
        <meta
          name="description"
          content="Explore global visa services by Eammu Immigration. We provide expert support for student, tourist, and work visas for the USA, Canada, UK, Europe, and more."
        />
        <meta
          name="keywords"
          content="Eammu Holidays, Visa Consultancy, Work Visa, Student Visa, Tourist Visa, USA Visa, Canada Immigration, UK Study Visa, Europe Visa Agent"
        />
        <meta property="og:title" content="Eammu Immigration Services" />
        <meta
          property="og:description"
          content="Reliable visa services for students, tourists, and professionals. Apply confidently with Eammu."
        />
        <meta property="og:url" content="https://www.eammu.com/eammuimmigrationservices" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://yourdomain.com/images/eammu-immigration-cover.jpg"
        />
      </Helmet>

      {/* Top Section */}
      <div className="flex items-center justify-between flex-wrap gap-y-4 mt-6">
        <div className="flex-1">
          <Link to="/">
            <h1 className="text-2xl md:text-3xl font-bold text-[#005a31]">
              Eammu Holidays
            </h1>
            
          </Link>
          <p>Student, Tourist & Work Visa Services by Eammu - Trusted visa consultancy for USA, UK, Canada, Europe, UAE, and more.</p>
        </div>

        {/* Search Bar */}
        <div className="flex-none gap-4 flex items-center">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search visas, countries..."
              className="input input-bordered w-32 md:w-64 border-[#005a31] focus:outline-none focus:ring-2 focus:ring-[#005a31]"
            />
          </div>

          {/* Future Profile Section */}
          <div className="dropdown dropdown-end hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Immigration_Header_Section;
