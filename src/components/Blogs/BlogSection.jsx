import { useEffect, useState } from "react";

const BlogSection = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      // Force fresh fetch by adding timestamp
      const rssUrl = `https://api.rss2json.com/v1/api.json?rss_url=https://eammu.blogspot.com/feeds/posts/default&_=${new Date().getTime()}`;
      const res = await fetch(rssUrl);
      const data = await res.json();
      setPosts(data.items || []);
    } catch (err) {
      console.error("Blog fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();

    // Auto-refresh every 5 minutes (300000 ms)
    const interval = setInterval(fetchBlogs, 300000);
    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  // Extract image from description if thumbnail missing
  const getImage = (post) => {
    if (post.thumbnail) return post.thumbnail;
    const match = post.description?.match(/<img[^>]+src="([^">]+)"/);
    return match ? match[1] : null;
  };

  if (loading) return <p>Loading blogs...</p>;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post, index) => {
        const image = getImage(post);

        return (
          <div
            key={index}
            className="border rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition"
          >
            {image && (
              <img
                src={image}
                alt={post.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            )}

            <div className="p-4">
              <h2 className="font-bold text-lg mb-2 line-clamp-2">
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 hover:underline"
                >
                  {post.title}
                </a>
              </h2>

              <p className="text-sm text-gray-500 mb-2">
                {new Date(post.pubDate).toDateString()}
              </p>

              <p className="text-sm text-gray-700 line-clamp-3">
                {post.description.replace(/<[^>]+>/g, "").slice(0, 130)}...
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogSection;
