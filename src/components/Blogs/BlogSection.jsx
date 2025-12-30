import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const BlogSection = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://eammu.blogspot.com/feeds/posts/default"
    )
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.items || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Blog fetch error:", err);
        setLoading(false);
      });
  }, []);

  const getImage = (post) => {
    // Take rss2json thumbnail first, fallback to first image in content
    let image = post.thumbnail;
    if (!image) {
      const match = post.description?.match(/<img[^>]+src="([^">]+)"/);
      image = match ? match[1] : null;
    }
    if (!image) return null;

    // Make Blogger images high-res
    return image
      .replace(/s\d+-c/, "s1200")
      .replace(/w\d+-h\d+/, "w1200-h630");
  };

  if (loading) return <p>Loading blogs...</p>;

  return (
    <>
      {/* JSON-LD structured data for SEO */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Eammu Blog",
            "url": "https://eammu.com/blogs",
            "blogPost": posts.map((post) => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "image": getImage(post) || "",
              "author": { "@type": "Person", "name": "Eammu" },
              "datePublished": post.pubDate,
              "dateModified": post.pubDate,
              "description": post.description
                .replace(/<[^>]+>/g, "")
                .slice(0, 160),
              "url": post.link,
            })),
          })}
        </script>
      </Helmet>

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
                  alt={`${post.title} | Eammu Blog`}
                  className="w-full h-52 object-cover"
                  loading="lazy"
                  decoding="async"
                />
              )}

              <div className="p-4">
                <h3 className="sr-only">{post.title} – Visa & Travel Tips by Eammu</h3>

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

                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-green-800 font-semibold hover:underline mt-2 inline-block"
                >
                  Read full post →
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BlogSection;
