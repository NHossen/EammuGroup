import { Helmet } from 'react-helmet-async';
import BlogSection from "./BlogSection";

const Blogs = () => {
 
  const blogFaqs = [
    {
      q: "Which country offers the easiest student visa for Bangladeshis in 2025?",
      a: "Germany, the UK, and Japan are currently the most accessible. These countries have streamlined their digital application processes and offer high approval rates."
    },
    {
      q: "How can I avoid visa rejection for USA and Canada?",
      a: "The key is strong financial documentation and proving 'Home Ties.' Eammu Holidays provides expert case analysis to ensure your documents are perfectly aligned."
    }
  ];

  const shorts = [
    { id: "9lsBNCWdJrs", title: "FEEL THE HEAT! WITH EAMMU FIRE SHOW DESERT SAFARI" },
    { id: "ZwbS9-cnE7U", title: "DESERT SAFARI DUBAI WITH EAMMU" },
    { id: "wBEWAeP8AEI", title: "THAILAND TOUR PACKAGES With Eammu" },
    { id: "HEKzY7yBb24", title: "Love Lake Dubai & Salt Lake Dubai Tour" },
  ];


  return (
    <>
    <Helmet>
  {/* Title: ব্লগের মূল উদ্দেশ্য এবং কি-ওয়ার্ড */}
  <title>Travel Blogs Bangladesh | Travel Agency Cumilla </title>

  <meta
    name="description"
    content="Read the latest travel tips, visa application guides, and immigration news for USA, Canada, UK, and Europe on the Eammu Holidays blog. Stay updated with expert advice."
  />

  <link rel="canonical" href="https://eammu.com/blog" />
  <meta name="robots" content="index, follow" />

  {/* Open Graph (Social Media Preview) */}
  <meta property="og:title" content="Eammu Holidays Travel & Visa Blog" />
  <meta property="og:description" content="Get expert tips and latest news on global visa applications and travel guides." />
  <meta property="og:image" content="https://eammu.com/eammuicon.jpg" />
  <meta property="og:url" content="https://eammu.com/blog" />
  <meta property="og:type" content="website" />

  {/* Structured Data (Blog Schema) - এটি গুগলকে ব্লগের অস্তিত্ব জানায় */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Eammu Holidays Travel & Visa Blog",
      "description": "Expert advice and updates on international visa processing and travel tips.",
      "url": "https://eammu.com/blog",
      "publisher": {
        "@type": "Organization",
        "name": "Eammu Holidays",
        "logo": {
          "@type": "ImageObject",
          "url": "https://eammu.com/eammuicon.jpg"
        }
      }
    })}
  </script>
</Helmet>

            {/* --- Blog Feed Heading with Background Image --- */}
<div className="relative w-full h-full overflow-hidden mb-12 py-16 px-6 text-center">
  
  {/* Background Image Layer - Full width and height inside the box */}
  <div className="absolute inset-0 z-0">
    <img 
      src="https://static.vecteezy.com/system/resources/thumbnails/051/262/312/small/sustainable-aviation-fuel-concept-flight-without-emissions-photo.jpeg" // Replace with your preferred travel blog/news image
      alt="Eammu Travel News Background" 
      className="w-full h-full object-cover"
    />
    {/* Light overlay to keep your original green and gray text colors popping */}
    <div className="absolute inset-0 bg-white/10 "></div>
  </div>

  {/* Content Layer - Same original text, no changes */}
  <div className="relative z-10">
    <h2 className="text-3xl md:text-4xl font-extrabold text-[#ffffff] mb-4">
      Official Eammu Travel Feed
    </h2>
    <div className="w-24 h-1 bg-green-600 mx-auto rounded-full mb-4"></div>
    <p className="text-white font-medium max-w-2xl mx-auto">
      Real-time updates, visa alerts, and travel insights fetched directly from our official newsroom.
    </p>
  </div>
</div>

       <div className="px-4 md:px-6 lg:px-8 container mx-auto">

      {/* --- Section 1: Dynamic Blogger Posts (with Pagination inside) --- */}
      <section >
        <BlogSection />
      </section>

        {/* FAQ Section */}
      <section className="mt-24 bg-green-50 rounded-3xl p-8 md:p-12 border border-green-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#005a31]">Expert Travel Insights</h2>
          <p className="mt-4 text-gray-600">Got questions? We have the answers from our visa specialists.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogFaqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-green-100">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                <span className="bg-green-100 text-green-700 w-6 h-6 rounded-full flex items-center justify-center mr-2 text-xs">Q</span>
                {faq.q}
              </h3>
              <p className="text-gray-600 text-sm border-l-2 border-green-500 pl-4">{faq.a}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
           <a href="https://wa.me/8801631312524" className="inline-block bg-green-700 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-green-800 transition">
             Get 1-on-1 Consultation
           </a>
        </div>
      </section>

      {/* Video Shorts Section */}
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center text-[#005a31] mb-12">Holiday Packages and Tourist Visa</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {shorts.map((video) => (
            <div key={video.id} className="rounded-3xl overflow-hidden shadow-xl aspect-[9/16] bg-black">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${video.id}?autoplay=0&loop=1&playlist=${video.id}`}
                title={video.title}
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </section>
      {/* Your existing code below stays unchanged */}
    </div>
    </>
 
  );
};

export default Blogs;
