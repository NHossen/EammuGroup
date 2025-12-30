import React, { useEffect, useState } from "react";

const BlogSection = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const API_KEY = "AIzaSyDaASoU9wSSHcetQ3hfwjhUWnrVxdH4aCw"; 
  const BLOG_ID = "2557737482331305704"; 

  useEffect(() => {
    const fetchBloggerPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}&maxResults=50`
        );
        const data = await response.json();
        if (data.items) {
          setPosts(data.items);
        }
      } catch (error) {
        console.error("Blogger API Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBloggerPosts();
  }, [API_KEY, BLOG_ID]);

  const getHighResImage = (content) => {
    const match = content.match(/<img[^>]+src="([^">]+)"/);
    if (!match) return "https://via.placeholder.com/800x450?text=Eammu+Holidays";
    let url = match[1];
    return url.replace(/\/(s\d+|w\d+|h\d+)(-[pcb])?\//, "/s1600/");
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 400, behavior: 'smooth' }); 
  };

  if (loading) return (
    <div className="grid md:grid-cols-3 gap-8 animate-pulse">
      {[1, 2, 3].map((n) => (
        <div key={n} className="aspect-video bg-gray-100 rounded-3xl shadow-sm"></div>
      ))}
    </div>
  );

  return (
    <section className="" aria-label="Latest Travel Blogs">
      {posts.length === 0 ? (
        <div className="text-center py-24 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
          <p className="text-gray-400 text-lg">No stories found at the moment.</p>
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {currentPosts.map((post) => (
              <article key={post.id} className="group flex flex-col h-full bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-green-100/50 transition-all duration-500 transform hover:-translate-y-3">
                
                {/* Image Section - SEO Optimized with Aspect Ratio */}
                <header className="relative w-full overflow-hidden bg-gray-100 aspect-[16/9]">
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={getHighResImage(post.content)} 
                    alt={post.title} 
                    loading="lazy"
                    className="w-full h-full object-contain bg-gray-50 transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-white/90 backdrop-blur-md text-green-700 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                      Eammu Holidays
                    </span>
                  </div>
                </header>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-8 h-[1px] bg-green-600"></span>
                    <time dateTime={post.published} className="text-[11px] font-medium text-gray-400 uppercase tracking-tighter">
                      {new Date(post.published).toLocaleDateString("en-GB", { day: 'numeric', month: 'long', year: 'numeric' })}
                    </time>
                  </div>

                  <h3 className="font-extrabold text-xl mb-4 line-clamp-2 text-gray-800 group-hover:text-green-700 transition-colors leading-tight">
                    <a href={post.url} target="_blank" rel="noopener noreferrer" title={post.title}>
                      {post.title}
                    </a>
                  </h3>

                  <p className="text-sm text-gray-500 line-clamp-3 mb-6 leading-relaxed">
                    {post.content.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").slice(0, 150)}...
                  </p>

                  <div className="mt-auto pt-6 border-t border-gray-50">
                    <a 
                      href={post.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-sm font-bold text-green-700 group/link"
                      aria-label={`Read more about ${post.title}`}
                    >
                      READ FULL STORY
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform group-hover/link:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <nav className="flex justify-center items-center space-x-3 mt-16" aria-label="Blog pagination">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  aria-label={`Go to page ${i + 1}`}
                  aria-current={currentPage === i + 1 ? "page" : undefined}
                  className={`min-w-[45px] h-[45px] rounded-2xl font-bold transition-all duration-300 shadow-sm ${
                    currentPage === i + 1 
                    ? 'bg-green-700 text-white scale-110 shadow-green-200' 
                    : 'bg-white text-gray-400 border border-gray-100 hover:border-green-600 hover:text-green-700'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </nav>
          )}
        </>
      )}
    </section>
  );
};

export default BlogSection;