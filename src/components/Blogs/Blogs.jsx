import React, { useState } from "react";
import { Helmet } from "react-helmet";

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Countries Offering Easiest Student Visas in 2025",
    summary: "Planning to study abroad? These countries have the most student-friendly visa rules right now.",
    fullContent: `We explored 5 countries that have simplified student visa processes for Bangladeshi students in 2025. These include Germany, Canada, Australia, UK, and Japan. They offer quicker turnaround times, fewer financial proof documents, and even post-study work permits.`,
    date: "June 20, 2025",
    image: "https://res.cloudinary.com/jerrick/image/upload/v1743617265/67ed7cf14f9703001d835be4.png",
  },
  {
    id: 2,
    title: "Latest Changes in USA Work Visa (H1-B) Policy",
    summary: "Get updated on the recent reforms and how they impact Bangladeshi applicants.",
    fullContent: `In 2025, the U.S. introduced digital documentation for H1-B, made STEM graduates a priority, and removed the wage-level lottery. This makes skilled professionals from Bangladesh more eligible.`,
    date: "June 18, 2025",
    image: "https://peoplemanagingpeople.com/wp-content/uploads/sites/3/2024/11/PMP-%E2%80%93-Ultimate-Guide-%E2%80%93-work-permit-usa-Kim-Behnke-featured-image.jpg",
  },
  {
    id: 3,
    title: "How to Apply for Schengen Tourist Visa from Bangladesh",
    summary: "Step-by-step process for applying and getting your European tourist visa approved.",
    fullContent: `You'll need bank statements, travel insurance, return flight tickets, hotel bookings, and a cover letter. Apply via the embassy or VFS. Start 1-2 months in advance.`,
    date: "June 15, 2025",
    image: "https://www.siecindia.com/uploads/blog/blog_0a4a0e64f1443e8e81723174a080dec8_1712320618schednge.jpg",
  },
  {
  id: 4,
  title: "Latest Student Visa Updates for Europe",
  image: "https://www.citybit.in/wp-content/uploads/2025/05/Europe-student-visa.jpg",
  shortDescription: "Recent changes in European student visa policies you should know.",
  content: "Several European countries have introduced new regulations aimed at attracting more international students. This includes simplified application processes, extended post-study work rights, and increased scholarship opportunities. Countries like Germany and France have launched online platforms for faster processing."
},
{
  id: 5,
  title: "Top 5 Cheapest Countries for Higher Education",
  image: "https://mvjce.edu.in/wp-content/uploads/2024/07/Higher-education-or-campus-placement-copy.webp",
  shortDescription: "Looking for affordable study abroad options? Start here.",
  content: "Countries such as Germany, Norway, Taiwan, Mexico, and Poland offer top-tier education with little to no tuition fees. In this post, we explore what makes them attractive for Bangladeshi and international students alike."
},
{
  id: 6,
  title: "Work Visa Route to the UK 2025",
  image: "https://globalogy.in/wp-content/uploads/2023/08/GAE-work-visa.jpg",
  shortDescription: "The UK introduces new policies for international job seekers.",
  content: "In 2025, the UK will streamline the Skilled Worker visa system. More roles will be added to the shortage occupation list, and salary thresholds will be adjusted for fresh graduates. Our blog explains how to prepare and apply."
},
{
  id: 7,
  title: "Why Now is the Best Time to Apply for a Japan Visa",
  image: "https://japanese-languageschool.com/blog/wp-content/uploads/2023/09/2309041738_jals.jpg",
  shortDescription: "Japan is opening doors to more skilled migrants and tourists.",
  content: "Japan has recently relaxed its visa rules for South Asians, including Bangladesh. This opens up opportunities for student, skilled, and technical internship visas. The post highlights required documents and embassy procedures."
},
{
  id: 8,
  title: "Tourist Visa Tips for First-Time Travelers",
  image: "https://kalindiimmigration.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-22-at-6.56.10-PM.jpeg",
  shortDescription: "Essential tips to make your first trip stress-free.",
  content: "From choosing the right visa type to travel insurance and accommodation proof — we guide you through everything you need for a successful tourist visa application."
},
{
  id: 9,
  title: "Study + Work: Best Countries for Earning While Studying",
  image: "https://www.jeduka.com/storage/newsletter/1629971045_Choose%20your%20Favorite%20Study%20Abroad%20Destination%201.jpg",
  shortDescription: "Want to cover your living cost while you study?",
  content: "Australia, Canada, and Germany are the top destinations where students can legally work part-time while studying. This blog shows hourly wage limits, popular student jobs, and how to manage your studies efficiently."
},
{
  id: 10,
  title: "Visa Rejection Reasons and How to Avoid Them",
  image: "https://cdn-636367e2c1ac189bf80cfea3.closte.com/wp-content/uploads/2025/01/Canada-Visa-Refusal.jpg",
  shortDescription: "Common mistakes that lead to visa refusal — and how to prevent them.",
  content: "Visa rejections are mostly caused by incomplete documents, lack of financial proof, or unclear travel intent. In this blog, we outline exact steps to take to minimize your chances of rejection."
},
{
  id: 11,
  title: "Top 10 Most Visited Cities by Bangladeshi Tourists",
  image: "https://cdn.businessday.ng/wp-content/uploads/2024/03/Seven-worlds-most-visited-cities-in-2023.jpg",
  shortDescription: "Planning your next trip? Start with these popular cities.",
  content: "From Kuala Lumpur and Bangkok to Dubai and Istanbul — we break down the cities that Bangladeshis love visiting and what makes them attractive for food, shopping, and sightseeing."
},
{
  id: 12,
  title: "Upcoming Hajj & Umrah Travel Packages 2025",
  image: "https://makkah-madinah.accor.com/wp-content/uploads/2024/08/hajj-rituals-makkah-accorhotels.jpg",
  shortDescription: "Everything you need to prepare for a spiritual journey.",
  content: "We’ve launched exclusive Hajj and Umrah packages for 2025 with full visa support, accommodation, guidance, and airfare. Learn how to register, pricing tiers, and what’s included in our premium and budget packages."
}
  // ... add more blogs similarly
];

const Blogs = () => {
  const [activeBlog, setActiveBlog] = useState(null);

  const openModal = (post) => {
    setActiveBlog(post);
  };

  const closeModal = () => {
    setActiveBlog(null);
  };

  return (
    <div className="px-4 container mx-auto py-10">
      <Helmet>
        <title>Eammu Blogs - Visa And Travel News</title>
        <meta
          name="description"
          content="Stay updated with the latest visa news, travel tips, immigration offers, and student opportunities with Eammu."
        />
        <meta
          name="keywords"
          content="student visa, tourist visa, travel blog, immigration news, visa update, Bangladesh visa support"
        />
        <link rel="canonical" href="https://www.eammu.com/blogs" />
      </Helmet>

      <h1 className="text-4xl font-bold text-[#005a31] text-center mb-8">Latest Blog Posts</h1>

      {/* Blog Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="border border-[#005a31] rounded-md p-4 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <img src={post.image} alt={post.title} className="h-48 w-full object-cover rounded" />
            <h2 className="text-2xl font-semibold text-[#005a31] mt-4">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-1">{post.date}</p>
            <p className="text-gray-700 mb-4">{post.summary}</p>
            <button
              onClick={() => openModal(post)}
              className="text-[#005a31] border border-[#005a31] px-4 py-1 rounded hover:bg-[#005a31] hover:text-white transition"
            >
              Learn More
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeBlog && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center px-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative shadow-xl">
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-xl text-[#005a31] font-bold hover:text-red-500"
            >
              ✕
            </button>
            <img
              src={activeBlog.image}
              alt={activeBlog.title}
              className="rounded mb-4 max-h-60 w-full object-cover"
            />
            <h2 className="text-2xl font-bold text-[#005a31] mb-2">{activeBlog.title}</h2>
            <p className="text-sm text-gray-500 mb-4">{activeBlog.date}</p>
            <p className="text-gray-700 whitespace-pre-line">{activeBlog.fullContent}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;
