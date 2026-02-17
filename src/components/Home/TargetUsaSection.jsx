import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const TargetUsaSection = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 lg:py-24">
            <Helmet>

        <title>Target USA Visa Interview Preparation | Travel Expert, Student Visa, Tourist Visa Assistance</title>

        <meta

          name="description"

          content="Target USA Visa Interview Preparation by Eammu offers expert coaching, mock interviews, dress code tips, and question guidance to help students succeed in their US F1 visa interview."

        />



        <meta name="author" content="Eammu" />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://eammu.com/targetusavisainterview" />



        {/* Open Graph for Facebook/LinkedIn */}

        <meta property="og:title" content="Target USA | US Visa Interview Preparation by Eammu" />

        <meta property="og:description" content="Master your F1 visa interview with Target USA by Eammu. Learn dress codes, mock questions, and interview strategies." />

        <meta property="og:image" content="https://i.ibb.co/Dtg4HWy/d-ISCUSSION.jpg" />

        <meta property="og:url" content="https://eammu.com/targetusavisainterview" />

        <meta property="og:type" content="website" />

        <meta property="og:site_name" content="Eammu" />



        {/* Twitter Card */}

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:title" content="Target USA Visa Interview Coaching | Eammu" />

        <meta name="twitter:description" content="Visa interview training for US-bound students. Target USA by Eammu provides expert prep & guidance." />

        <meta name="twitter:image" content="https://i.ibb.co/Dtg4HWy/d-ISCUSSION.jpg" />

        <meta name="twitter:site" content="@eammuimmigration" />

      </Helmet>

      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="mb-12 text-center lg:text-left lg:px-4">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest text-white uppercase bg-[#d33232] rounded-full">
            Elite Coaching
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
            Target <span className="text-[#d33232]">USA</span> Visa Interview
          </h1>
          <div className="h-1.5 w-24 bg-[#005a31] mt-4 rounded-full mx-auto lg:mx-0"></div>
        </div>

        {/* Main Content Wrapper */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Text Side - Now on the Left */}
          <div className="w-full lg:w-1/2 space-y-6 order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2 text-[#005a31] font-medium">
              <span className="h-px w-8 bg-[#005a31]"></span>
              <span>Professional Excellence</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              Your Journey to America <br /> 
              <span className="text-[#005a31]">Starts with Preparation</span>
            </h2>

            <p className="text-lg leading-relaxed text-slate-600">
              Target USA, a distinguished service under <span className="font-semibold text-slate-900">Eammu Holidays</span>, 
              is your premier education consultancy. We don't just coach; we transform your confidence. 
              Our specialists cover everything from precise **dress-code etiquette** to **advanced question patterns**, 
              ensuring you walk into your F1 interview ready to succeed.
            </p>

            <div className="pt-4">
              <Link 
                to="/targetusavisainterview"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-[#005a31] rounded-xl hover:bg-[#004626] hover:shadow-xl hover:-translate-y-1 group"
              >
                Explore More
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Micro-Stats or Social Proof */}
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-slate-200">
              <div>
                <p className="text-2xl font-bold text-[#d33232]">Mock Ready</p>
                <p className="text-sm text-slate-500">Real-time Simulations</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#d33232]">Expert Led</p>
                <p className="text-sm text-slate-500">Verified Consultants</p>
              </div>
            </div>
          </div>

          {/* Image Side - Now on the Right */}
          <div className="w-full lg:w-1/2 group order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <img
                src="Target_USA.webp"
                alt="Visa Interview Coaching Session"
                className="w-full h-full object-cover aspect-video md:aspect-[16/10] lg:aspect-[4/3] block"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-30 group-hover:opacity-10 transition-opacity duration-500"></div>
            </div>
          </div>

        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -z-10 h-64 w-64 bg-slate-100 rounded-full blur-3xl opacity-50 -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 -z-10 h-64 w-64 bg-red-50 rounded-full blur-3xl opacity-50 -ml-32 -mb-32"></div>
    </section>
  );
};

export default TargetUsaSection;