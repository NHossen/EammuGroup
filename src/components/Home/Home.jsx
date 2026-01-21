import { Helmet } from "react-helmet-async";
import Caresoul_BG_Mix from "./Caresoul_BG_Mix";
import EammuImmigrationHeading_2 from "./EammuImmigrationHeading_2";
import MessageFromLeadingTeam from "./MessageFromLeadingTeam";
import Our_Succsses_State from "./Our_Succsses_State";
import Registration_Agents from "./Registration_Agents";
import TargetUsaSection from "./TargetUsaSection";
import WhyChoiceEammu from "./WhyChoiceEammu";
import Carousel from "../Carousel/Carousel";

const Home = () => {
  return (
    <div>
<Helmet>
  <title>Travel Agency Bangladesh | Student, Tourist & Work Visa Experts</title>

  <meta
    name="description"
    content="Eammu Immigration Services offers expert student, tourist, and work visa support for USA, Canada, UK, Europe, UAE, and more. Trusted visa consultancy from Bangladesh and UAE."
  />
  <meta
    name="keywords"
    content="Eammu Immigration, Student Visa, Work Visa, Tourist Visa, Visa Consultancy, USA Visa, Canada Visa, UK Visa, Europe Visa, UAE Visa, Bangladesh Immigration Services"
  />
  <meta name="robots" content="index, follow" />

  {/* Open Graph */}
  <meta property="og:title" content="Eammu Immigration & Visa Services" />
  <meta
    property="og:description"
    content="Trusted visa consultancy for students, tourists, and professionals. Apply for USA, UK, Canada, Europe, UAE visas with Eammu."
  />
  <meta property="og:url" content="https://eammu.com/" />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://eammu.com/eammuicon.jpg"
  />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Eammu Immigration & Visa Services" />
  <meta
    name="twitter:description"
    content="Apply for student, tourist, and work visas worldwide with Eammu Immigration Services. Trusted consultants from Bangladesh & UAE."
  />
   <meta
    property="og:image"
    content="https://eammu.com/eammuicon.jpg"
  />
</Helmet>




      {/* Hero Carousel */}
      <Carousel></Carousel>

      {/* Immigration Services Heading */}
      <EammuImmigrationHeading_2 />

      {/* USA Visa Interview Help */}
      <TargetUsaSection />

       {/* Agent Registration */}
      <Registration_Agents />

      {/* Leadership Message */}
      <MessageFromLeadingTeam />

      {/* Why Choose Us */}
      <WhyChoiceEammu />

      {/* Background Carousel */}
      <Caresoul_BG_Mix />

      {/* Success States */}
      <Our_Succsses_State />
      

    </div>
  );
};

export default Home;
