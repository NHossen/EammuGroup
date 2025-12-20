import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const WhyChoiceEammu = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 container mx-auto py-12 bg-gradient-to-b from-[#f0fdf4] to-white min-h-screen">
      {/* ✅ SEO Tags */}
      <Helmet>
        <title>Eammu | Trusted Visa & Study Abroad Experts | Apply for Europe, USA, UK & Tourist Visas with Eammu</title>
        <meta
          name="description"
          content="Discover why Eammu Immigration Services is the top choice for visa processing, study abroad consulting, group tours, and international travel support. 6+ years of trusted service from Bangladesh and UAE."
        />
        <meta
          name="keywords"
          content="Why Eammu, Eammu Immigration Services, best visa consultancy Bangladesh, visa agency UAE, travel agency Bangladesh, Eammu reviews, education consultancy, student visa help"
        />
        <meta name="author" content="Eammu Immigration Services" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://eammu.com/whychooseus" />

        {/* Open Graph for Facebook/LinkedIn */}
        <meta property="og:title" content="Why Choose Eammu Immigration Services" />
        <meta property="og:description" content="Explore what makes Eammu your trusted immigration and travel partner. Proven success in visas, tours, and student guidance." />
        <meta property="og:image" content="https://eammu.com/eammuicon.jpg" />
        <meta property="og:url" content="https://eammu.com/whychooseus" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Eammu Immigration Services" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Why Eammu? | Trusted Visa & Travel Services" />
        <meta name="twitter:description" content="See why thousands trust Eammu Immigration for study, work, and travel visa support." />
        <meta name="twitter:image" content="https://eammu.com/eammuicon.jpg" />
        <meta name="twitter:site" content="@eammuimmigration" />
      </Helmet>

      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-10 text-[#005a31]"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Why Choose Eammu Holidays?
      </motion.h1>

      <motion.div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {[...Array(12)].map((_, idx) => {
          const features = [
            {
              title: "✅ 6+ Years of Experience",
              text: "We’ve been serving clients across Bangladesh and UAE with reliable and ethical visa consulting."
            },
            {
              title: "🎓 Student Visa Experts",
              text: "We help students secure study permits in top countries like Canada, UK, USA, Russia, and more."
            },
            {
              title: "🌍 Global Tour Planning",
              text: "We organize customized tours, Umrah packages, and international air ticketing solutions."
            },
            {
              title: "📞 Customer Support",
              text: "Dedicated team for after-service, case updates, and customer relationships management."
            },
            {
              title: "🛫 One-Stop Travel Solution",
              text: "From visa to tickets to accommodation—we simplify every travel need in one place."
            },
            {
              title: "🧾 Transparent Process",
              text: "No hidden charges, no false promises—only clear consultation and step-by-step guidance."
            },
            {
              title: "🧠 Personalized Counselling",
              text: "Every client is different, so we listen first—then guide based on your unique goal and background."
            },
            {
              title: "🌐 Multiple Country Visas",
              text: "Europe Schengen, USA, Canada, Australia, UK, and Asian countries — get assistance from certified consultants."
            },
            {
              title: "📊 Real-Time Case Tracking",
              text: "Track your visa or admission case online or get updates directly via WhatsApp."
            },
            {
              title: "💼 Corporate & Business Visa",
              text: "Professionals trust Eammu for business setup, conferences, and multi-entry visas."
            },
            {
              title: "🌟 5-Star Client Satisfaction",
              text: "We’re proud to serve returning clients who trust Eammu again and again."
            },
            {
              title: "🇧🇩 🇦🇪 Local Office Support",
              text: "Physical offices in Bangladesh and UAE mean we’re always within reach."
            }
          ];

          return (
            <motion.div
              key={idx}
              className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-[#005a31] hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-[#005a31]">{features[idx].title}</h3>
              <p>{features[idx].text}</p>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        className="mt-12 bg-[#005a31] text-white p-8 rounded-xl text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold mb-4">🎯 Our Promise</h2>
        <p className="text-lg">We are not just a visa agent — we’re your partner in the journey of life abroad. From day one to departure and beyond, Eammu Immigration stands with you.</p>
      </motion.div>
    </div>
  );
};

export default WhyChoiceEammu;
