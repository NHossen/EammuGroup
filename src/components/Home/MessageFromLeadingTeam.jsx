import { Helmet } from "react-helmet-async";

const MessageFromLeadingTeam = () => {
  const teamMembers = [
    {
      name: "Naeem Hossen",
      role: "Global Visa Expert & Air Ticket Specialist",
      image:
        "https://scontent.ffjr1-6.fna.fbcdn.net/v/t39.30808-6/500787989_2555738771437282_8352184388819456690_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=e5PmM8izgecQ7kNvwHlsDY8&_nc_oc=AdkZpqMzYcjHiC_Mxkh-jpgWWzR4OFy0n5LPr-pMcaT0_hoMTFQSpt8jd6FVVGO9PeM&_nc_zt=23&_nc_ht=scontent.ffjr1-6.fna&_nc_gid=yx9wzBpJKEWq7j3ZmvhnTQ&oh=00_AfNrA-dGpLz3xDCddm15M3_O_RRSi7KOyeqIxWdD_AccLg&oe=68609606",
      description:
        "Naeem is an experienced global visa advisor specializing in air ticketing and destination consulting. He leads Eammu's vision for global travel and immigration strategy.",
    },
    {
      name: "Sana Ullah Thasin",
      role: "Student Visa Expert & Customer Service Manager",
      image:
        "https://scontent.ffjr1-4.fna.fbcdn.net/v/t39.30808-6/508348597_122137393082750708_6187212370402935117_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=BDjR_lOtj9gQ7kNvwHQF4Yt&_nc_oc=Adm66SurfI4Mir97y97n_OD15MAkQ2dm-yXyCafJl1GEwuvnk7XPm9V5ZBOEgNVhdO4&_nc_zt=23&_nc_ht=scontent.ffjr1-4.fna&_nc_gid=tcfl6hCfhDsoY5aqhBOq9Q&oh=00_AfPn-HfCA7FehfjVYjoqDp4UlLDU9NWFZYxM3iCM0Kvnsw&oe=68606851",
      description:
        "Sana specializes in student visa guidance for the USA, UK, Canada, and other countries. She manages customer service, providing personalized support to every student.",
    },
    {
      name: "Wahid Ahamed Emon",
      role: "Customer Service Executive & Tour Expert",
      image:
        "https://scontent.ffjr1-6.fna.fbcdn.net/v/t39.30808-6/464369930_532778909362696_6020132385522832185_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=7CU7WCk-RmMQ7kNvwGIPh2D&_nc_oc=AdnwhbdNQTNnwt7yHjgk7gEi_0sunL9v4X45X4vwa_SEVG3huTvDWYekQEdL07AssHY&_nc_zt=23&_nc_ht=scontent.ffjr1-6.fna&_nc_gid=HsRHDPIsb5qCX2riph0Ysg&oh=00_AfN9BccNojZJK5X_1uWr5p3g1_xSdKqPxhazW3z32qPTFg&oe=6860700A",
      description:
        "Emon provides excellent customer support and crafts unforgettable travel packages as our holiday tour expert.",
    },
  ];

  // Structured data JSON-LD for team members
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Travel and Tourism",
    "name": "Eammu Immigration Services",
    "url": "https://eammu.com", // replace with your website URL
    "employee": teamMembers.map((member) => ({
      "@type": "Person",
      "name": member.name,
      "jobTitle": member.role,
      "image": member.image,
      "description": member.description,
    })),
  };

  return (
    <section className="px-4 py-12 container mx-auto" aria-labelledby="team-heading">
      <Helmet>
        <title>Meet Our Leadership Team | Eammu Immigration Services</title>
        <meta
          name="description"
          content="Learn about the leadership team at Eammu Immigration Services, including global visa experts and customer service managers dedicated to helping you."
        />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <h1
        id="team-heading"
        className="text-4xl font-bold text-center text-[#005a31] mb-10"
      >
        Meet Our Leadership Team
      </h1>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {teamMembers.map((member, index) => (
          <article
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center p-6"
            aria-label={`Profile of ${member.name}, ${member.role}`}
          >
            <figure>
              <img
                src={member.image}
                alt={`Photo of ${member.name}`}
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover border-4 border-[#005a31]"
                loading="lazy"
              />
              <figcaption className="sr-only">{`${member.name}, ${member.role}`}</figcaption>
            </figure>
            <h2 className="text-xl font-semibold text-[#005a31] mb-1">{member.name}</h2>
            <p className="text-gray-600 font-medium mb-2">{member.role}</p>
            <p className="text-gray-500 text-sm">{member.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MessageFromLeadingTeam;
