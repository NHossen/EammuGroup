import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const domesticTours = [
  {
    id: 1,
    name: "Cox's Bazar Beach Tour",
    description: "Relax at the longest natural sea beach in the world.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Cox's_Bazar_Beach_in_Bangladesh.JPG/1280px-Cox's_Bazar_Beach_in_Bangladesh.JPG",
  },
  {
    id: 2,
    name: "Sajek Valley Tour",
    description: "Explore the serene hills and tribal culture of Sajek.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9f/Sajek_Valley_Bangladesh_03.jpg",
  },
  {
    id: 3,
    name: "Saint Martin’s Island",
    description: "Visit the beautiful coral island in the Bay of Bengal.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Saint_Martin_Island_Bangladesh_-_DSC_0025.JPG/1280px-Saint_Martin_Island_Bangladesh_-_DSC_0025.JPG",
  },
  {
    id: 4,
    name: "Sundarbans Mangrove Forest",
    description: "Discover the world’s largest mangrove forest and Royal Bengal Tigers.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Sundarbans_scenery.jpg",
  },
  {
    id: 5,
    name: "Rangamati Lake Tour",
    description: "Enjoy boating and natural beauty at the Kaptai Lake.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d0/Kaptai_Lake_Scenery.jpg",
  },
  {
    id: 6,
    name: "Dhaka City Tour",
    description: "Explore historic and modern attractions of Bangladesh’s capital.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/67/Dhaka_Skyline_2021.jpg",
  },
  {
    id: 7,
    name: "Srimangal Tea Garden Tour",
    description: "Visit lush tea gardens and enjoy peaceful nature.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a1/Sreemangal_Tea_Garden_in_Sylhet_Division.jpg",
  },
  {
    id: 8,
    name: "Kuakata Sea Beach",
    description: "Witness both sunrise and sunset over the sea.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/Kuakata_Beach_Bangladesh.jpg",
  },
  {
    id: 9,
    name: "Paharpur Buddhist Monastery",
    description: "Explore ancient archaeological site and UNESCO heritage.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Paharpur_Buddhist_Monastery_02.jpg",
  },
  {
    id: 10,
    name: "Mahasthangarh Archaeological Site",
    description: "Visit one of the oldest archaeological sites in Bangladesh.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/5a/Mahasthangarh_Ruins.jpg",
  },
  // Add 2 more for total 12
  {
    id: 11,
    name: "Jaflong Hill Tour",
    description: "Enjoy scenic hills and river views in Sylhet.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/98/Jaflong_Sylhet_Bangladesh.jpg",
  },
  {
    id: 12,
    name: "Lalakhal Waterfall & Tea Garden",
    description: "Discover crystal clear blue water and tea plantations.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/Lalakhal_Bangladesh_03.jpg",
  },
];

const internationalTours = [
  {
    id: 1,
    name: "Dubai City Tour",
    description: "Experience the luxury and futuristic skyline of Dubai.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/90/Dubai_Skyline_2015.jpg",
  },
  {
    id: 2,
    name: "Malaysia Cultural Tour",
    description: "Explore Malaysia’s rich culture and natural beauty.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f6/Malaysia_Culture.jpg",
  },
  {
    id: 3,
    name: "Singapore City Highlights",
    description: "Visit Marina Bay Sands, Gardens by the Bay, and more.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e6/Singapore_Skyline.jpg",
  },
  {
    id: 4,
    name: "Thailand Beach Getaway",
    description: "Relax on pristine beaches and enjoy vibrant nightlife.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/14/Phuket_Beach_Thailand_03.jpg",
  },
  {
    id: 5,
    name: "Japan Cherry Blossom Tour",
    description: "Experience Japan’s famous sakura season and culture.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/38/Cherry_Blossoms_in_Brussels_park.jpg",
  },
  {
    id: 6,
    name: "Turkey Istanbul Experience",
    description: "Discover the blend of Europe and Asia in Istanbul.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4f/Istanbul_Skyline_-_2012.jpg",
  },
  {
    id: 7,
    name: "Switzerland Alpine Tour",
    description: "Explore stunning mountain landscapes and ski resorts.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2b/Swiss_Alps_view_from_Gornergrat.jpg",
  },
  {
    id: 8,
    name: "France Paris Tour",
    description: "Visit the Eiffel Tower, Louvre, and romantic city sights.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg",
  },
  {
    id: 9,
    name: "United Kingdom London Highlights",
    description: "See Buckingham Palace, Big Ben, and historic landmarks.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/cd/London_Montage_L.jpg",
  },
  {
    id: 10,
    name: "Maldives Beach Paradise",
    description: "Relax in luxurious overwater bungalows in Maldives.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/22/Maldives_overwater_bungalows.jpg",
  },
  // Add 2 more for total 12
  {
    id: 11,
    name: "Italy Rome and Venice",
    description: "Explore ancient ruins and romantic canals.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/Collage_of_Rome.jpg",
  },
  {
    id: 12,
    name: "Greece Santorini Tour",
    description: "Visit iconic whitewashed buildings and beautiful sunsets.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/Santorini_Caldera_view.jpg",
  },
];

const TourPackages = () => {
  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Tour Packages - Domestic & International | Eammu Tours</title>
          <meta
            name="description"
            content="Discover popular domestic and international tour packages for Bangladeshis offered by Eammu Tours. From Cox's Bazar to Dubai, explore top destinations with us."
          />
          <meta
            name="keywords"
            content="Domestic tours Bangladesh, International tours for Bangladeshis, Travel packages, Eammu Tours"
          />
          <meta name="author" content="Eammu Tours" />
        </Helmet>

        <div className="px-4 container mx-auto py-10">
          <h1 className="text-4xl font-bold text-[#005a31] mb-10 text-center">
            Our Popular Tour Packages Domestic And International
          </h1>

          <section className="mb-14">
            <h2 className="text-3xl font-semibold text-[#005a31] mb-6">
              Domestic Tours
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {domesticTours.map((tour) => (
                <div
                  key={tour.id}
                  className="card bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                >
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-[#005a31] mb-2">
                      {tour.name}
                    </h3>
                    <p className="text-gray-700">{tour.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-[#005a31] mb-6">
              International Tours
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {internationalTours.map((tour) => (
                <div
                  key={tour.id}
                  className="card bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                >
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-[#005a31] mb-2">
                      {tour.name}
                    </h3>
                    <p className="text-gray-700">{tour.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </>
    </HelmetProvider>
  );
};

export default TourPackages;
