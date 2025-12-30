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

const truncateText = (text, length = 120) => {
  if (!text) return "";
  return text.length > length ? text.substring(0, length) + "..." : text;
};

const Blogs = () => {
  const [activeBlog, setActiveBlog] = useState(null);
  const [dynamicTitle, setDynamicTitle] = useState("Top Travel Agency Bangladesh | Visa | Flight | Hotel | Travel News");
  const [dynamicDescription, setDynamicDescription] = useState(
    "Top Travel Agency Bangladesh by Online ,Stay updated with the latest visa news, travel tips, and student Visa opportunities with Eammu Holidays."
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
      a: "Germany, the UK, and Japan are currently the most accessible. These countries have streamlined their digital application processes and offer high approval rates for technical and language-based courses."
    },
    {
      q: "How can I avoid visa rejection for USA and Canada?",
      a: "The key is strong financial documentation and proving 'Home Ties.' Eammu Holidays provides expert case analysis to ensure your SOP, bank statements, and travel intent are perfectly aligned with embassy requirements."
    },
    {
      q: "Can I apply for a Schengen visa from Dubai or India through Eammu?",
      a: "Yes. Our offices in Dubai and India provide full assistance for Schengen visa appointments, travel insurance, and flight itineraries for residents of the UAE and India."
    },
    {
      q: "What are the latest updates for UK work permits in 2025?",
      a: "The UK has updated its 'Skilled Worker' route and added more roles to the shortage occupation list. We recommend checking our latest blog post on UK immigration for detailed salary thresholds."
    },
    {
      q: "Does Eammu Holidays provide Hajj and Umrah packages from Dhaka?",
      a: "Yes, we offer premium and budget-friendly Hajj and Umrah packages from Dhaka, including visa processing, hotel stays near the Haram, and guided spiritual tours."
    },
    {
      q: "Why is Eammu considered the best travel agency in Cumilla and Dhaka?",
      a: "With physical offices in 4 countries (BD, UAE, Armenia, Georgia), Eammu offers unmatched global authority, transparent pricing, and 24/7 WhatsApp support for all travel and visa needs."
    }
  ];

  const shorts = [
    { id: "VXcsh-RGAQo", title: "FEEL THE HEAT! WITH EAMMU FIRE SHOW DESERT SAFARI" },
    { id: "5GgTsBbWT9Q", title: "DESERT SAFARI DUBAI WITH EAMMU" },
    { id: "yGZlj3IqwqQ", title: "THAILAND TOUR PACKAGES With Eammu – EXPLORE THE LAND OF SMILES" },
    { id: "411I3K-Zagc", title: "Love Lake Dubai & Salt Lake Dubai Tour – Private Trip with Eammu Tours" },
  ];

  return (
    <div className="px-4 md:px-6 lg:px-8 container mx-auto ">
      <Helmet>
        <title>{dynamicTitle}</title>
        <meta name="description" content={dynamicDescription} />
        <meta
          name="keywords"
          content="best visa consultant in Dubai, Europe visa assistance from Dubai, UK visa application from Dubai, Schengen visa appointment in Dubai, travel agency in India for visa, trusted visa consultant in India, best travel agency in India for Europe visa, Europe visa guidance from India, student visa consultant India, education consultancy for abroad study,best travel agency dhaka,best travel agency bangladesh"
        />
        <link rel="canonical" href="https://eammu.com/blogs" />

      </Helmet>

            <section className="my-10">
  <h2 className="text-3xl font-bold text-[#005a31] text-center mb-8">
    Latest Updates from Eammu Official Blog
  </h2>

  <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
    Updated travel news, visa alerts, and immigration insights published directly from our Google Blog.
  </p>

  <BlogSection />
</section>

      <h1 className="text-4xl font-bold text-green-800 text-center mb-10">Latest Blog Posts</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="border border-green-800 rounded-md p-4 shadow hover:shadow-lg transition duration-300 flex flex-col"
          >
            <img src={post.image} alt={post.title} className="h-48 w-full object-cover rounded mb-4" />
            <h2 className="text-xl font-semibold text-green-800 mb-2">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-2">{post.date}</p>
            <p className="text-gray-700 flex-1 mb-4">{truncateText(post.summary || post.fullContent)}</p>
            <button
              onClick={() => openModal(post)}
              className="mt-auto border border-green-800 text-green-800 px-4 py-2 rounded hover:bg-green-800 hover:text-white transition"
            >
              Read More
            </button>
          </div>
        ))}
      </div>

      {activeBlog && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center px-4 py-10 overflow-auto">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative shadow-xl">
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-xl text-green-800 font-bold hover:text-red-500"
            >
              ✕
            </button>
            <img
              src={activeBlog.image}
              alt={activeBlog.title}
              className="rounded mb-4 max-h-60 w-full object-cover"
            />
            <h2 className="text-2xl font-bold text-green-800 mb-2">{activeBlog.title}</h2>
            <p className="text-sm text-gray-500 mb-4">{activeBlog.date}</p>
            <p className="text-gray-700 whitespace-pre-line">{activeBlog.fullContent || activeBlog.summary}</p>
          </div>
        </div>
      )}

      <section className="mt-20 border-t border-gray-200 pt-16 pb-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#005a31] sm:text-4xl">
            Frequently Asked Questions & Travel Insights
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Stay informed with expert answers to the most common immigration and travel queries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogFaqs.map((faq, index) => (
            <div key={index} className="bg-[#f4fdf7] p-6 rounded-2xl shadow-sm border border-green-50 transition-all hover:shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
                <span className="text-green-700 mr-2">Q.</span> {faq.q}
              </h3>
              <p className="text-gray-700 leading-relaxed border-l-4 border-green-600 pl-4">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action inside FAQ */}
        <div className="mt-12 text-center bg-green-800 text-white p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
          <p className="mb-6 opacity-90">Our visa experts are available 24/7 on WhatsApp to assist you.</p>
          <a 
            href="https://wa.me/8801631312524" 
            className="inline-block bg-white text-green-800 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Chat with an Expert
          </a>
        </div>
      </div>
    </section>

    <div>


    </div>

    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#005a31] text-center mb-8">
          Watch Our Travel Highlights
        </h2>
        
        {/* Grid Logic:
            - Grid-cols-1: Mobile এ ১টি
            - sm:grid-cols-2: Tablet এ ২টি
            - lg:grid-cols-4: Large Screen এ ৪টি
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {shorts.map((video) => (
            <div 
              key={video.id} 
              className="relative overflow-hidden rounded-2xl shadow-lg bg-black aspect-[9/16]"
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${video.id}?autoplay=0&loop=1&playlist=${video.id}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a 
            href="https://www.youtube.com/@Eammutour" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-red-600 font-semibold hover:underline"
          >
            View more on YouTube →
          </a>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Blogs;
