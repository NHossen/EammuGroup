import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import BlogSection from "./BlogSection";

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Countries Offering Easiest Student Visas in 2025",
    summary: "Planning to study abroad? These countries have the most student-friendly visa rules right now.",
    fullContent: `We explored 5 countries that have simplified student visa processes for Bangladeshi students in 2025. These include Germany, Canada, Australia, UK, and Japan. They offer quicker turnaround times, fewer financial proof documents, and even post-study work permits.`,
    date: "2025-06-20",
    image: "https://res.cloudinary.com/jerrick/image/upload/v1743617265/67ed7cf14f9703001d835be4.png",
  },
  {
    id: 2,
    title: "Latest Changes in USA Work Visa (H1-B) Policy",
    summary: "Get updated on the recent reforms and how they impact Bangladeshi applicants.",
    fullContent: `In 2025, the U.S. introduced digital documentation for H1-B, made STEM graduates a priority, and removed the wage-level lottery. This makes skilled professionals from Bangladesh more eligible.`,
    date: "2025-06-18",
    image: "https://www.visafq.com/public/medies/Mar_2024/1710238523.65f02b3b6149f.webp",
  },
  {
    id: 3,
    title: "How to Apply for Schengen Tourist Visa from Bangladesh",
    summary: "Step-by-step process for applying and getting your European tourist visa approved.",
    fullContent: `You'll need bank statements, travel insurance, return flight tickets, hotel bookings, and a cover letter. Apply via the embassy or VFS. Start 1-2 months in advance.`,
    date: "2025-06-15",
    image: "https://www.babaaztravels.com/wp-content/uploads/2023/05/Schengen-Visit-Visa-Requirements-Babaaz-Travels.jpeg",
  },
  {
    id: 4,
    title: "Latest Student Visa Updates for Europe",
    summary: "Recent changes in European student visa policies you should know.",
    fullContent: "Several European countries have introduced new regulations aimed at attracting more international students. This includes simplified application processes, extended post-study work rights, and increased scholarship opportunities. Countries like Germany and France have launched online platforms for faster processing.",
    date: "2025-06-12",
    image: "https://www.citybit.in/wp-content/uploads/2025/05/Europe-student-visa.jpg",
  },
  {
    id: 5,
    title: "Top 5 Cheapest Countries for Higher Education",
    summary: "Looking for affordable study abroad options? Start here.",
    fullContent: "Countries such as Germany, Norway, Taiwan, Mexico, and Poland offer top-tier education with little to no tuition fees. In this post, we explore what makes them attractive for Bangladeshi and international students alike.",
    date: "2025-06-10",
    image: "https://mvjce.edu.in/wp-content/uploads/2024/07/Higher-education-or-campus-placement-copy.webp",
  },
  {
    id: 6,
    title: "Work Visa Route to the UK 2025",
    summary: "The UK introduces new policies for international job seekers.",
    fullContent: "In 2025, the UK will streamline the Skilled Worker visa system. More roles will be added to the shortage occupation list, and salary thresholds will be adjusted for fresh graduates. Our blog explains how to prepare and apply.",
    date: "2025-06-08",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzQhefbuXemjXeLKByhLOw25ieVHQym_casw&s",
  },
  {
    id: 7,
    title: "Why Now is the Best Time to Apply for a Japan Visa",
    summary: "Japan is opening doors to more skilled migrants and tourists.",
    fullContent: "Japan has recently relaxed its visa rules for South Asians, including Bangladesh. This opens up opportunities for student, skilled, and technical internship visas. The post highlights required documents and embassy procedures.",
    date: "2025-06-05",
    image: "https://japanese-languageschool.com/blog/wp-content/uploads/2023/09/2309041738_jals.jpg",
  },
  {
    id: 8,
    title: "Tourist Visa Tips for First-Time Travelers",
    summary: "Essential tips to make your first trip stress-free.",
    fullContent: "From choosing the right visa type to travel insurance and accommodation proof — we guide you through everything you need for a successful tourist visa application.",
    date: "2025-06-03",
    image: "https://kalindiimmigration.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-22-at-6.56.10-PM.jpeg",
  },
  {
    id: 9,
    title: "Study + Work: Best Countries for Earning While Studying",
    summary: "Want to cover your living cost while you study?",
    fullContent: "Australia, Canada, and Germany are the top destinations where students can legally work part-time while studying. This blog shows hourly wage limits, popular student jobs, and how to manage your studies efficiently.",
    date: "2025-06-01",
    image: "https://www.jeduka.com/storage/newsletter/1629971045_Choose%20your%20Favorite%20Study%20Abroad%20Destination%201.jpg",
  },
  {
    id: 10,
    title: "Visa Rejection Reasons and How to Avoid Them",
    summary: "Common mistakes that lead to visa refusal — and how to prevent them.",
    fullContent: "Visa rejections are mostly caused by incomplete documents, lack of financial proof, or unclear travel intent. In this blog, we outline exact steps to take to minimize your chances of rejection.",
    date: "2025-05-28",
    image: "https://cdn-636367e2c1ac189bf80cfea3.closte.com/wp-content/uploads/2025/01/Canada-Visa-Refusal.jpg",
  },
  {
    id: 11,
    title: "Top 10 Most Visited Cities by Bangladeshi Tourists",
    summary: "Planning your next trip? Start with these popular cities.",
    fullContent: "From Kuala Lumpur and Bangkok to Dubai and Istanbul — we break down the cities that Bangladeshis love visiting and what makes them attractive for food, shopping, and sightseeing.",
    date: "2025-05-25",
    image: "https://cdn.businessday.ng/wp-content/uploads/2024/03/Seven-worlds-most-visited-cities-in-2023.jpg",
  },
  {
    id: 12,
    title: "Upcoming Hajj & Umrah Travel Packages 2025",
    summary: "Everything you need to prepare for a spiritual journey.",
    fullContent: "We’ve launched exclusive Hajj and Umrah packages for 2025 with full visa support, accommodation, guidance, and airfare. Learn how to register, pricing tiers, and what’s included in our premium and budget packages.",
    date: "2025-05-20",
    image: "https://makkah-madinah.accor.com/wp-content/uploads/2024/08/hajj-rituals-makkah-accorhotels.jpg",
  },
];

const truncateText = (text, length = 160) => {
  if (!text) return "";
  return text.length > length ? text.substring(0, length) + "..." : text;
};

const Blogs = () => {
  const [activeBlog, setActiveBlog] = useState(null);
  const [dynamicTitle, setDynamicTitle] = useState(
    "Top Travel Agency Bangladesh | Visa | Flight | Hotel | Travel News"
  );
  const [dynamicDescription, setDynamicDescription] = useState(
    "Top Travel Agency Bangladesh by Online, Stay updated with the latest visa news, travel tips, and student Visa opportunities with Eammu Holidays."
  );

  const openModal = (post) => {
    setActiveBlog(post);
    setDynamicTitle(`${post.title} | Eammu Blogs`);
    setDynamicDescription(truncateText(post.fullContent || post.summary, 160));
  };

  const closeModal = () => {
    setActiveBlog(null);
    setDynamicTitle("Eammu Blogs | Visa & Travel News 2025");
    setDynamicDescription(
      "Stay updated with the latest visa news, travel tips, immigration offers, and student opportunities with Eammu."
    );
  };

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
    { id: "VXcsh-RGAQo", title: "FEEL THE HEAT! WITH EAMMU FIRE SHOW DESERT SAFARI" },
    { id: "5GgTsBbWT9Q", title: "DESERT SAFARI DUBAI WITH EAMMU" },
    { id: "yGZlj3IqwqQ", title: "THAILAND TOUR PACKAGES With Eammu" },
    { id: "411I3K-Zagc", title: "Love Lake Dubai & Salt Lake Dubai Tour" },
  ];

  const keywords = activeBlog
    ? `Travel, Visa, Student Visa, Tourist Visa, Work Visa, ${activeBlog.title}`
    : "Bangladesh Travel Blog, Student Visa Updates, Tourist Visa Tips, Immigration News, Eammu Holidays Blog, Work Visa Bangladesh, Travel Guides";

  return (
    <div className="px-4 md:px-6 lg:px-8 container mx-auto">
      <Helmet>
        <title>{dynamicTitle}</title>
        <meta name="description" content={dynamicDescription} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href="https://eammu.com/blogs" />

        {/* Open Graph */}
        <meta property="og:title" content={dynamicTitle} />
        <meta property="og:description" content={dynamicDescription} />
        <meta
          property="og:image"
          content={
            activeBlog
              ? activeBlog.image
              : "https://eammu.com/images/logo.png"
          }
        />
        <meta property="og:url" content="https://eammu.com/blogs" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={dynamicTitle} />
        <meta name="twitter:description" content={dynamicDescription} />
        <meta
          name="twitter:image"
          content={
            activeBlog
              ? activeBlog.image
              : "https://eammu.com/images/logo.png"
          }
        />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(
            activeBlog
              ? {
                  "@context": "https://schema.org",
                  "@type": "BlogPosting",
                  headline: activeBlog.title,
                  image: [activeBlog.image],
                  author: { "@type": "Organization", name: "Eammu Holidays" },
                  publisher: {
                    "@type": "Organization",
                    name: "Eammu Holidays",
                    logo: {
                      "@type": "ImageObject",
                      url: "https://eammu.com/images/logo.png",
                    },
                  },
                  datePublished: activeBlog.date,
                  description: truncateText(activeBlog.summary || activeBlog.fullContent),
                  mainEntityOfPage: {
                    "@type": "WebPage",
                    "@id": "https://eammu.com/blogs",
                  },
                }
              : {
                  "@context": "https://schema.org",
                  "@type": "Blog",
                  name: "Eammu Blogs",
                  url: "https://eammu.com/blogs",
                  description:
                    "Stay updated with the latest visa news, travel tips, immigration offers, and student opportunities with Eammu Holidays.",
                  publisher: {
                    "@type": "Organization",
                    name: "Eammu Holidays",
                    logo: {
                      "@type": "ImageObject",
                      url: "https://eammu.com/images/logo.png",
                    },
                  },
                  blogPost: blogPosts.map((post) => ({
                    "@type": "BlogPosting",
                    headline: post.title,
                    image: [post.image],
                    datePublished: post.date,
                    description: truncateText(post.summary || post.fullContent),
                    author: { "@type": "Organization", name: "Eammu Holidays" },
                    mainEntityOfPage: {
                      "@type": "WebPage",
                      "@id": `https://eammu.com/blogs#post-${post.id}`,
                    },
                  })),
                }
          )}
        </script>
      </Helmet>

      {/* --- Section 1: Dynamic Blogger Posts (with Pagination inside) --- */}
      <section className="my-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#005a31] mb-4">
            Official Eammu Travel Feed
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real-time updates, visa alerts, and travel insights fetched directly from our official newsroom.
          </p>
        </div>
        <BlogSection />
      </section>

      {/* --- Section 2: Custom Editorial Blog Posts --- */}
      <section className="my-20">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-10">Editorial Picks & Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative overflow-hidden h-52">
                <img 
                   src={post.image} 
                   alt={post.title} 
                   className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-bold text-green-600 uppercase tracking-widest mb-2">{post.date}</span>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-700 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-5 flex-1 line-clamp-3">
                  {truncateText(post.summary || post.fullContent)}
                </p>
                <button
                  onClick={() => openModal(post)}
                  className="w-full py-3 rounded-xl border-2 border-green-700 text-green-700 font-bold hover:bg-green-700 hover:text-white transition-all duration-300"
                >
                  Read Analysis
                </button>
              </div>
            </article>
          ))}
        </div>
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
        <h2 className="text-3xl font-bold text-center text-[#005a31] mb-12">Travel Moments</h2>
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
  );
};

export default Blogs;
