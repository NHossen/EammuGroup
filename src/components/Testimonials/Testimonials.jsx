import { Helmet } from "react-helmet-async";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const reviews = [
  { name: "Md. Rahim Uddin", rating: 5, review: "Excellent service! Thanks to Eammu, I got my visa approved smoothly." },
  { name: "Fatima Begum", rating: 4.5, review: "Very supportive staff and quick processing. Highly recommended Eammu." },
  { name: "Abdul Karim", rating: 5, review: "Professional and reliable. Eammu made my immigration process hassle-free." },
  { name: "Ayesha Sultana", rating: 4, review: "Good guidance and support throughout my student visa application with Eammu." },
  { name: "Jamal Hossain", rating: 5, review: "Fast and clear communication. Great experience with Eammu Immigration Services." },
  { name: "Nasima Khatun", rating: 4.5, review: "Friendly staff and very helpful. Thank you, Eammu, for the support!" },
  { name: "Sajjad Ali", rating: 5, review: "Highly professional team with excellent knowledge and service from Eammu." },
  { name: "Monira Akter", rating: 4, review: "Good service but a bit slow on some processes. Overall satisfied with Eammu." },
  { name: "Shakil Ahmed", rating: 5, review: "Got my work visa approved quickly thanks to the help from Eammu." },
  { name: "Nusrat Jahan", rating: 4.5, review: "Helpful and patient staff. Eammu answered all my questions clearly." },
  { name: "Tariq Mahmud", rating: 5, review: "Trusted company. I highly recommend Eammu for visa services." },
  { name: "Salma Parvin", rating: 4, review: "Good service but wish response time was faster. Still very helpful." },
];

// ⭐ Star Renderer
const renderStars = (rating) => {
  const stars = [];
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  for (let i = 0; i < full; i++) stars.push(<FaStar key={`f-${i}`} />);
  if (half) stars.push(<FaStarHalfAlt key="h" />);
  for (let i = 0; i < empty; i++) stars.push(<FaRegStar key={`e-${i}`} />);

  return stars;
};

const Testimonials = () => {
  // ⭐ Average Rating
  const avgRating =
    (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1);

  // ⭐ Review Schema (SEO Gold)
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Eammu Immigration Services",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": avgRating,
      "reviewCount": reviews.length,
    },
    "review": reviews.map((r) => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": r.name },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": r.rating,
        "bestRating": "5",
      },
      "reviewBody": r.review,
    })),
  };

  return (
    <section className="px-4 container mx-auto py-14">
      {/* SEO */}
      <Helmet>
        <title>Best Travel Agency Bangladesh - Visa | Flight | Hotel | Eammu Holidays</title>
        <meta
          name="description"
          content="Trusted visa consultancy in Bangladesh with proven success in student Visa , work Visa, and tourist visas.Read real client reviews of Eammu Holidays."
        />
        <meta
          name="keywords"
          content="Eammu Holidays, Immigration Testimonials Bangladesh, Visa Consultancy Reviews, Student Visa Success, Work Visa Bangladesh, Tourist Visa"
        />
        <meta property="og:title" content="Eammu Holidays Reviews" />
        <meta
          property="og:description"
          content="Discover why thousands trust Eammu Holidays. Real customer reviews, real visa success stories."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eammu.com/testimonials" />
        <script type="application/ld+json">
          {JSON.stringify(reviewSchema)}
        </script>
      </Helmet>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-[#005a31] mb-3">
          What Our Clients Say About Eammu Holidays
        </h1>
        <p className="text-gray-600 text-lg">
          Real experiences from students, professionals, and travelers who trusted
          Eammu Holidays for their global journey.
        </p>

        <div className="mt-4 flex justify-center items-center gap-2 text-yellow-400 text-lg">
          {renderStars(avgRating)}
          <span className="text-gray-700 font-semibold ml-2">
            {avgRating}/5 from {reviews.length}+ reviews
          </span>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {reviews.map((r, i) => (
          <article
            key={i}
            className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex text-yellow-400 mb-3">
              {renderStars(r.rating)}
            </div>
            <p className="text-gray-700 mb-4 italic">
              “{r.review}”
            </p>
            <h3 className="text-[#005a31] font-semibold text-lg">
              {r.name}
            </h3>
            <p className="text-sm text-gray-500">
              Verified Client · Eammu Holidays
            </p>
          </article>
        ))}
      </div>
      <section className="mt-16">
  <h2 className="text-3xl font-bold text-center text-[#005a31] mb-8">
    🎥 Video Testimonials
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/9RE1nwL9SqM
"
        title="Client Testimonial Eammu"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>

    <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/Iw4JZZp9q8c"
        title="Client Review Eammu Immigration"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</section>

<div className="text-center mt-10">
  <a
    href="https://wa.me/8801631312524"
    className="inline-block bg-[#005a31] text-white px-8 py-4 rounded-full text-lg hover:bg-[#003e24] transition"
  >
    📞 Talk to Our Visa Expert on WhatsApp
  </a>
</div>


    </section>
    
  );
};

export default Testimonials;
