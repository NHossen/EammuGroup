import { Helmet } from "react-helmet-async";

const MessageFromLeadingTeam = () => {
  const teamMembers = [
    {
      name: "Naeem Hossen",
      role: "Global Visa Expert & Air Ticket Specialist",
      image:
        "https://i.ibb.co/hxKph5xG/513826752-2571065443237948-8433664019789292699-n.jpg",
      description:
        "Naeem is an experienced global visa advisor specializing in air ticketing and destination consulting. He leads Eammu's vision for global travel and immigration strategy.",
    },
    {
      name: "Sana Ullah Thasin",
      role: "Student Visa Expert & Customer Service Manager",
      image:
        "https://i.ibb.co/nsbGwJ4K/497478223-2378373822548199-2151584947092917211-n.jpg",
      description:
        "Sana specializes in student visa guidance for the USA, UK, Canada, and other countries. She manages customer service, providing personalized support to every student.",
    },
    {
      name: "Wahid Ahamed Emon",
      role: "Customer Service Executive & Tour Expert",
      image:
        "https://i.ibb.co/PGX6RnVb/464369930-532778909362696-6020132385522832185-n.jpg",
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
