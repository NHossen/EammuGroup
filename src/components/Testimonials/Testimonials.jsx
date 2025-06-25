import { Helmet } from "react-helmet-async";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const reviews = [
  {
    name: "Md. Rahim Uddin",
    rating: 5,
    review: "Excellent service! Thanks to Eammu, I got my visa approved smoothly.",
  },
  {
    name: "Fatima Begum",
    rating: 4.5,
    review: "Very supportive staff and quick processing. Highly recommended Eammu.",
  },
  {
    name: "Abdul Karim",
    rating: 5,
    review: "Professional and reliable. Eammu made my immigration process hassle-free.",
  },
  {
    name: "Ayesha Sultana",
    rating: 4,
    review: "Good guidance and support throughout my student visa application with Eammu.",
  },
  {
    name: "Jamal Hossain",
    rating: 5,
    review: "Fast and clear communication. Great experience with Eammu Immigration Services.",
  },
  {
    name: "Nasima Khatun",
    rating: 4.5,
    review: "Friendly staff and very helpful. Thank you, Eammu, for the support!",
  },
  {
    name: "Sajjad Ali",
    rating: 5,
    review: "Highly professional team with excellent knowledge and service from Eammu.",
  },
  {
    name: "Monira Akter",
    rating: 4,
    review: "Good service but a bit slow on some processes. Overall satisfied with Eammu.",
  },
  {
    name: "Shakil Ahmed",
    rating: 5,
    review: "Got my work visa approved quickly thanks to the help from Eammu.",
  },
  {
    name: "Nusrat Jahan",
    rating: 4.5,
    review: "Helpful and patient staff. Eammu answered all my questions clearly.",
  },
  {
    name: "Tariq Mahmud",
    rating: 5,
    review: "Trusted company. I highly recommend Eammu for visa services.",
  },
  {
    name: "Salma Parvin",
    rating: 4,
    review: "Good service but wish response time was faster. Still very helpful, Eammu.",
  },
];

// Helper to render stars based on rating
const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={"full-" + i} className="text-yellow-400" />);
  }
  if (halfStar) {
    stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaRegStar key={"empty-" + i} className="text-yellow-400" />);
  }

  return stars;
};

const Testimonials = () => {
  return (
    <div className="px-4 container mx-auto py-8">
      {/* SEO Helmet */}
      <Helmet>
        <title>Customer Reviews & Testimonials | Eammu Immigration Services</title>
        <meta
          name="description"
          content="Read genuine customer reviews and testimonials about Eammu Immigration Services. Trusted visa experts providing seamless immigration support for Bangladeshis."
        />
        <meta
          name="keywords"
          content="Eammu Immigration Reviews, Customer Testimonials, Visa Success Stories, Bangladesh Immigration Services, Visa Consultancy Feedback"
        />
        <meta property="og:title" content="Customer Reviews - Eammu Immigration" />
        <meta
          property="og:description"
          content="Discover what our satisfied clients say about Eammu Immigration Services. Real success stories and reviews."
        />
        <meta property="og:url" content="https://www.eammu.com/testimonials" />
        <meta property="og:type" content="website" />
      </Helmet>

      <h1 className="text-3xl font-bold text-[#005a31] mb-8 text-center">
        Testimonials & Customer Reviews
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {reviews.map(({ name, rating, review }, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center mb-3">
              <div className="text-yellow-400 flex">{renderStars(rating)}</div>
            </div>
            <p className="text-gray-700 mb-4">&quot;{review}&quot;</p>
            <h3 className="text-[#005a31] font-semibold text-lg">{name}</h3>
            <p className="text-sm text-gray-500">Reviewed Eammu Immigration Services - Bangladesh</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
