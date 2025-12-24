import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from 'react-router-dom';

const domesticTours = [
  {
    id: 1,
    name: "Cox's Bazar Beach Tour",
    description: "Relax at the longest natural sea beach in the world.",
    image:
      "https://images.unsplash.com/photo-1665651147145-664ebda525e7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y294JTIwYmF6YXIlMjBzZWElMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    name: "Sajek Valley Tour",
    description: "Explore the serene hills and tribal culture of Sajek.",
    image:
      "https://www.tourgroupbd.com/upload/event/1658569515_event.jpg",
  },
  {
    id: 3,
    name: "Saint Martin’s Island",
    description: "Visit the beautiful coral island in the Bay of Bengal.",
    image:
      "https://media.istockphoto.com/id/474259514/photo/boat-on-the-tropical-beach.jpg?s=612x612&w=0&k=20&c=1ersoGRQdPK6WLy498-QF33Bvi04VK__1G8IoufvR9E=",
  },
  {
    id: 4,
    name: "Sundarbans Mangrove Forest",
    description: "Discover the world’s largest mangrove forest and Royal Bengal Tigers.",
    image:
      "https://dialogue.earth/content/uploads/2023/04/Spotted-deer-in-Bangladesh_Alamy_P98FYF-scaled.jpg",
  },
  {
    id: 5,
    name: "Rangamati Lake Tour",
    description: "Enjoy boating and natural beauty at the Kaptai Lake.",
    image:
      "https://www.thefinancetoday.net/uploads/shares/Rangamati_hanging_Bridge-2019-12-24-12-47-02.jpg",
  },
  {
    id: 6,
    name: "Dhaka City Tour",
    description: "Explore historic and modern attractions of Bangladesh’s capital.",
    image:
      "https://www.pelago.com/img/products/BD-Bangladesh/full-day-dhaka-city-tour-/bd27718c-6e89-4fb7-aec2-119456a9dc4e_full-day-dhaka-city-tour-.jpg",
  },
  {
    id: 7,
    name: "Srimangal Tea Garden Tour",
    description: "Visit lush tea gardens and enjoy peaceful nature.",
    image:
      "https://pathfriend-bd.com/wp-content/uploads/2021/01/Sreemangal-Tea-Estate-and-Museum.gif",
  },
  {
    id: 8,
    name: "Kuakata Sea Beach",
    description: "Witness both sunrise and sunset over the sea.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/17/9e/7d/kuakata-beach.jpg?w=800&h=500&s=1",
  },
  {
    id: 9,
    name: "Paharpur Buddhist Monastery",
    description: "Explore ancient archaeological site and UNESCO heritage.",
    image:
      "https://koryogroup.com/uploads/blog/1635/original-Paharpur_Buddhist_Monastery.jpg?1736904759",
  },
  {
    id: 10,
    name: "Mahasthangarh Archaeological Site",
    description: "Visit one of the oldest archaeological sites in Bangladesh.",
    image:
      "https://travel.discoverybangladesh.com/images/mohasthangar-musume.jpg",
  },
  // Add 2 more for total 12
  {
    id: 11,
    name: "Jaflong Hill Tour",
    description: "Enjoy scenic hills and river views in Sylhet.",
    image:
      "https://lh7-us.googleusercontent.com/Qwm8-h9c0_tfgaKoMtpxxKmYoQdzfAcIuNdHhj6q42OFs3ZLJrcokrnll0nsq2fWcsku_jYtLdpkyzh6kt-feHbPt-m0A7jaf5kecFNXrX5zhiMS0ZsaaghTb2my-8qpTJGF5Bm7dP2edv55M8w43LY",
  },
  {
    id: 12,
    name: "Lalakhal Waterfall & Tea Garden",
    description: "Discover crystal clear blue water and tea plantations.",
    image:
      "https://sylhettouristguide.com/assets/image/place/lalakhal/finger.jpg",
  },
];

const internationalTours = [
  {
    id: 1,
    name: "Dubai City Tour",
    description: "Experience the luxury and futuristic skyline of Dubai.",
    image:
      "https://cdn-imgix.headout.com/media/images/ec59e7719a396a4519efc6edcf9d2d41-Museum%20of%20the%20Future%20Dubai%20Tickets%201.jpg?auto=format&w=1069.6000000000001&h=687.6&q=90&fit=crop&ar=14%3A9&crop=faces",
  },
  {
    id: 2,
    name: "Malaysia Cultural Tour",
    description: "Explore Malaysia’s rich culture and natural beauty.",
    image:
      "https://heritagetours.co/wp-content/uploads/2020/06/2-2.jpg",
  },
  {
    id: 3,
    name: "Singapore City Highlights",
    description: "Visit Marina Bay Sands, Gardens by the Bay, and more.",
    image:
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/b3/2d/e2.jpg",
  },
  {
    id: 4,
    name: "Thailand Beach Getaway",
    description: "Relax on pristine beaches and enjoy vibrant nightlife.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROFQFZx4d9Qqu7gn_yr544ZbTC3vdZYUBIkw&s",
  },
  {
    id: 5,
    name: "Japan Cherry Blossom Tour",
    description: "Experience Japan’s famous sakura season and culture.",
    image:
      "https://assets.tripsmiths.com/images/default/523234-shutterstock-1513825088.jpg",
  },
  {
    id: 6,
    name: "Turkey Istanbul Experience",
    description: "Discover the blend of Europe and Asia in Istanbul.",
    image:
      "https://www.tooistanbul.com/wp-content/uploads/2020/10/Screen-Shot-2020-10-15-at-16.19.22.png",
  },
  {
    id: 7,
    name: "Switzerland Alpine Tour",
    description: "Explore stunning mountain landscapes and ski resorts.",
    image:
      "https://t4.ftcdn.net/jpg/02/81/14/83/360_F_281148366_Uw03PoKAGUZIAWecL5Op35YPMa7os2uC.jpg",
  },
  {
    id: 8,
    name: "France Paris Tour",
    description: "Visit the Eiffel Tower, Louvre, and romantic city sights.",
    image:
      "https://www.royalcaribbean.com/media-assets/pmc/content/dam/shore-x/paris-le-havre-leh/lh17-paris-sightseeing-without-lunch/stock-photo-skyline-of-paris-with-eiffel-tower-at-sunset-in-paris-france-eiffel-tower-is-one-of-the-most-752725282.jpg?w=1920",
  },
  {
    id: 9,
    name: "United Kingdom London Highlights",
    description: "See Buckingham Palace, Big Ben, and historic landmarks.",
    image:
      "https://www.airpano.com/files/london-video_big.jpg",
  },
  {
    id: 10,
    name: "Maldives Beach Paradise",
    description: "Relax in luxurious overwater bungalows in Maldives.",
    image:
      "https://i0.wp.com/jyoshankar.com/wp-content/uploads/2020/02/jyoshankar_travelblogger_maldives_hideawaybeachresortandspa_luxuryresorts_9.jpg?fit=2000%2C1333&ssl=1",
  },
  // Add 2 more for total 12
  {
    id: 11,
    name: "Italy Rome and Venice",
    description: "Explore ancient ruins and romantic canals.",
    image:
      "https://media.istockphoto.com/id/539115110/photo/colosseum-in-rome-and-morning-sun-italy.jpg?s=612x612&w=0&k=20&c=9NtFxHI3P2IBWRY9t0NrfPZPR4iusHmVLbXg2Cjv9Fs=",
  },
  {
    id: 12,
    name: "Greece Santorini Tour",
    description: "Visit iconic whitewashed buildings and beautiful sunsets.",
    image:
      "https://lp-cms-production.imgix.net/2024-06/iStock-166471469.jpg?auto=format,compress&q=72&fit=crop",
  },
];

const TourPackages = () => {
  const jsonLD = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": "Eammu Tour Packages",
    "provider": {
      "@type": "Organization",
      "name": "Eammu Tours",
      "url": "https://eammu.com",
      "sameAs": [
        "https://www.facebook.com/eammuholidays",
        "https://www.instagram.com/eammuholidays",
        "https://www.linkedin.com/company/eammu-immigration-services"
      ]
    },
    "hasPart": [
      ...internationalTours.map(tour => ({
        "@type": "TouristTrip",
        "name": tour.name,
        "description": tour.description,
        "image": tour.image
      })),
      ...domesticTours.map(tour => ({
        "@type": "TouristTrip",
        "name": tour.name,
        "description": tour.description,
        "image": tour.image
      }))
    ]
  };

  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Tour Packages From Bangladesh | Cheapest Tour Packages | Tourism Company Bangladesh </title>
          <meta
            name="description"
            content="Explore popular International and Domestic Tour Packages offered by Eammu Holidays. From Dubai and Japan to Cox's Bazar and Sundarbans, discover top destinations with Eammu Holidays."
          />
          <meta
            name="keywords"
            content="International Tour Packages, Domestic tours Bangladesh, Travel packages, Eammu Tour Packages, Dubai Tour Packages, Japan Tour Packages, Cox's Bazar, Sundarbans, Bangladesh Tour Packages , Cheapest Tour Packages,Best international tour packages, Eammu Tour Packages, Eammu Holidays, cheap Dubai tour packages from Bangladesh, Armenia holiday deals, Japan group tours 2026, luxury Bangladesh tour packages, Cox's Bazar hotel deals"
          />
          <meta name="author" content="Eammu Holidays" />

          {/* JSON-LD Structured Data */}
          <script type="application/ld+json">{JSON.stringify(jsonLD)}</script>
        </Helmet>

        <div className="px-4 container mx-auto py-10">
          <h1 className="text-4xl font-bold text-[#005a31] mb-10 text-center">
            Our Popular Tour Packages
          </h1>

          {/* International Tours First */}
          <section className="mb-14">
            <h2 className="text-3xl font-semibold text-[#005a31] mb-6">
              International Tours
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {internationalTours.map((tour) => (
                <div
                  key={tour.id}
                  className="card bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
                >
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-5 flex flex-col flex-1 justify-between">
                    <h3 className="text-xl font-semibold text-[#005a31] mb-2">
                      {tour.name}
                    </h3>
                    <p className="text-gray-700 mb-4">{tour.description}</p>
                    <a
                      href={`https://wa.me/8801631312524?text=Hello%2C%20I%20would%20like%20to%20book%20a%20${encodeURIComponent(tour.name)}%20tour.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#005a31] text-white px-4 py-2 rounded-full hover:bg-[#003e24] transition transform hover:scale-105 text-center"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Domestic Tours */}
          <section className="mb-14">
            <h2 className="text-3xl font-semibold text-[#005a31] mb-6">
              Domestic Tours
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {domesticTours.map((tour) => (
                <div
                  key={tour.id}
                  className="card bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
                >
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-5 flex flex-col flex-1 justify-between">
                    <h3 className="text-xl font-semibold text-[#005a31] mb-2">
                      {tour.name}
                    </h3>
                    <p className="text-gray-700 mb-4">{tour.description}</p>
                    <a
                      href={`https://wa.me/8801631312524?text=Hello%2C%20I%20would%20like%20to%20book%20a%20${encodeURIComponent(tour.name)}%20tour.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#005a31] text-white px-4 py-2 rounded-full hover:bg-[#003e24] transition transform hover:scale-105 text-center"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="mt-12 bg-[#f4f4f4] p-6 rounded-md text-center" aria-live="polite">
            <h2 className="text-2xl font-bold text-[#005a31] mb-3">What's Coming Next?</h2>
            <p className="text-gray-700 max-w-xl mx-auto mb-4">
              We are working on launching a powerful <strong>Tour Packages Search API</strong> — select any country, view updated packages instantly, filter by purpose, and book directly online through Eammu!
            </p>

            <a
              href="https://wa.me/8801631312524?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#005a31] text-white px-6 py-2 rounded-full hover:bg-[#003e24] transition mb-4"
            >
              Book Now on WhatsApp
            </a>

            <div className="mt-4">
              <Link
                to="/"
                className="inline-block bg-white border border-green-800 text-green-800 px-6 py-3 rounded-full hover:bg-green-100 transition"
              >
                Back to Home
              </Link>
            </div>
          </section>
        </div>
      </>
    </HelmetProvider>
  );
};

export default TourPackages;
