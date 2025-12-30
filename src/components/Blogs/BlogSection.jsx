import React, { useEffect, useState } from "react";

const BlogSection = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6); // প্রতি পেজে ৬টি ব্লগ

  useEffect(() => {
    // API ক্যাশ এড়ানোর জন্য টাইমস্ট্যাম্প
    const cacheBuster = new Date().getTime();
    fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://eammu.blogspot.com/feeds/posts/default?t=${cacheBuster}`
    )
      .then((res) => res.json())
      .then((data) => {
        // নতুন পোস্টগুলো সবার আগে দেখানোর জন্য সর্ট করা হয়েছে
        const sortedPosts = (data.items || []).sort(
          (a, b) => new Date(b.pubDate) - new Date(a.pubDate)
        );
        setPosts(sortedPosts);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Blog fetch error:", err);
        setLoading(false);
      });
  }, []);

  const getImage = (post) => {
    let imageUrl = "";
    const content = post.description || post.content || "";
    const match = content.match(/<img[^>]+src="([^">]+)"/);
    
    if (match && match[1]) {
      imageUrl = match[1];
    } else if (post.thumbnail) {
      imageUrl = post.thumbnail;
    }

    if (!imageUrl) return "https://via.placeholder.com/800x450?text=No+Image";

    // ব্লার সমস্যা সমাধানের জন্য অরিজিনাল কোয়ালিটি (s1600) এ রূপান্তর
    return imageUrl
      .replace(/\/(s\d+|w\d+|h\d+)(-[pcb])?\//, "/s1600/") 
      .replace(/=s\d+(-c)?/, "=s1600")
      .replace(/=(w|h)\d+-(w|h)\d+(-c)?/, "=s1600");
  };

  // প্যাজিনেশন লজিক
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 500, behavior: 'smooth' }); 
  };

  if (loading) return (
    <div className="grid md:grid-cols-3 gap-6 animate-pulse">
      {[1, 2, 3].map((n) => (
        <div key={n} className="h-80 bg-gray-100 rounded-2xl"></div>
      ))}
    </div>
  );

  return (
    <div className="mb-20">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentPosts.map((post, index) => (
          <article key={index} className="group border rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-2">
            <div className="relative h-56 w-full overflow-hidden">
              <img src={getImage(post)} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="p-6">
              <p className="text-xs text-gray-400 mb-2">{new Date(post.pubDate).toDateString()}</p>
              <h3 className="font-bold text-lg mb-3 line-clamp-2 text-gray-800 group-hover:text-green-700">
                <a href={post.link} target="_blank" rel="noopener noreferrer">{post.title}</a>
              </h3>
              <p className="text-sm text-gray-600 line-clamp-3 mb-4 leading-relaxed">
                {post.description.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").slice(0, 120)}...
              </p>
              <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-sm text-green-700 font-bold">Read Full Post →</a>
            </div>
          </article>
        ))}
      </div>

      {/* প্যাজিনেশন বাটন */}
      {totalPages > 1 && (
        <div className="flex justify-center space-x-2 mt-10">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`w-10 h-10 rounded-lg border font-semibold transition-all ${
                currentPage === i + 1 ? 'bg-green-700 text-white border-green-700' : 'text-gray-600 border-gray-200 hover:border-green-700 hover:text-green-700'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogSection;