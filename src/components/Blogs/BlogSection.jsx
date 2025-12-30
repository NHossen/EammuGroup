import React, { useEffect, useState } from "react";

const BlogSection = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    const fetchPosts = () => {
      setLoading(true);
      // ক্যাশ এড়াতে কেবল একটি সহজ টাইমস্ট্যাম্প ব্যবহার করছি
      const cacheBuster = new Date().getTime();
      const bloggerRssUrl = "https://eammu.blogspot.com/feeds/posts/default?alt=rss";
      const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(bloggerRssUrl)}&_t=${cacheBuster}`;

      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 'ok' && data.items) {
            // তারিখ অনুযায়ী সর্ট করা (নতুনগুলো উপরে)
            const sortedPosts = data.items.sort(
              (a, b) => new Date(b.pubDate) - new Date(a.pubDate)
            );
            setPosts(sortedPosts);
          } else {
            console.error("RSS2JSON Error:", data.message);
          }
          setLoading(false);
        })
        .catch((err) => {
          console.error("Fetch Error:", err);
          setLoading(false);
        });
    };

    fetchPosts();
  }, []);

  // ইমেজ কোয়ালিটি ফিক্স ফাংশন
  const getImage = (post) => {
    let imageUrl = "";
    const content = post.description || post.content || "";
    const match = content.match(/<img[^>]+src="([^">]+)"/);
    
    if (match && match[1]) {
      imageUrl = match[1];
    } else if (post.thumbnail) {
      imageUrl = post.thumbnail;
    }

    if (!imageUrl) return "https://via.placeholder.com/800x450?text=Eammu+Holidays";

    return imageUrl
      .replace(/\/(s\d+|w\d+|h\d+)(-[pcb])?\//, "/s1600/") 
      .replace(/=s\d+(-c)?/, "=s1600")
      .replace(/=(w|h)\d+-(w|h)\d+(-c)?/, "=s1600");
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 300, behavior: 'smooth' }); 
  };

  if (loading) return (
    <div className="grid md:grid-cols-3 gap-6 animate-pulse">
      {[1, 2, 3].map((n) => (
        <div key={n} className="h-80 bg-gray-100 rounded-2xl shadow-sm"></div>
      ))}
    </div>
  );

  return (
    <div className="min-h-[400px]">
      {posts.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed">
          <p className="text-gray-500 font-medium">No posts found. Please refresh or check back later.</p>
          <button onClick={() => window.location.reload()} className="mt-4 text-green-700 underline">Refresh Page</button>
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post, index) => (
              <article key={index} className="group border rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-56 w-full overflow-hidden">
                  <img src={getImage(post)} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <p className="text-xs text-gray-400 mb-2">{new Date(post.pubDate).toDateString()}</p>
                  <h3 className="font-bold text-lg mb-3 line-clamp-2 text-gray-800 group-hover:text-green-700">
                    <a href={post.link} target="_blank" rel="noopener noreferrer">{post.title}</a>
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3 mb-4 leading-relaxed">
                    {post.description.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").slice(0, 110)}...
                  </p>
                  <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-sm text-green-700 font-bold hover:underline">Read Full Post →</a>
                </div>
              </article>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center space-x-2 mt-12 pb-10">
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
        </>
      )}
    </div>
  );
};

export default BlogSection;