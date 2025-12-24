import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const TargetUsaSection = () => {
  return (
    <div>
      <Helmet>
        <title>Target USA Visa Interview Preparation | Travel Expert, Student Visa, Tourist Visa Assistance</title>
        <meta
          name="description"
          content="Target USA Visa Interview Preparation by Eammu offers expert coaching, mock interviews, dress code tips, and question guidance to help students succeed in their US F1 visa interview."
        />
        <meta
          name="keywords"
          content="USA visa interview, F1 visa interview, visa coaching Bangladesh, student visa interview questions, Eammu interview preparation, Target USA, US student visa consultancy"
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

      <h1 className="mt-6 text-3xl text-center font-bold">
        Target <span className="text-[#d33232]">USA</span> Visa Interview Preparation
      </h1>

      <div className="hero min-h-[70vh]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/Dtg4HWy/d-ISCUSSION.jpg"
            alt="targetusainterviewphoto"
            className="lg:max-w-md rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Target <span className="text-[#d33232]">USA</span> Visa Interview Preparation!
            </h1>
            <p className="py-4">
              Target USA Visa Interview Preparation, a distinguished service under Eammu Holidays
              is your premier education consultancy dedicated to preparing students for
              successful visa interviews. We specialize in comprehensive guidance, covering
              everything from interview dress-up to question patterns and interview types, ensuring
              that students are well-prepared for their crucial visa application process.
            </p>
            <Link to="/targetusavisainterview">
              <h3 className="hover:shadow-[#bfc0bf] hover:shadow-lg btn text-lg hover:bg-[#005a31] hover:text-[#ffffff] bg-white text-[#005a31]  border-[1.5px] border-[#005a31]">
                Explore More
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetUsaSection;
