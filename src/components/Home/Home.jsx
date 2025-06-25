import { Helmet } from "react-helmet-async";
import Carousel from "../Carousel/carousel";
import Caresoul_BG_Mix from "./Caresoul_BG_Mix";
import EammuImmigrationHeading_2 from "./EammuImmigrationHeading_2";
import Eammu_Carousel from "./Eammu_Carousel";
import MessageFromLeadingTeam from "./MessageFromLeadingTeam";
import Our_Succsses_State from "./Our_Succsses_State";
import Registration_Agents from "./Registration_Agents";
import Students_Cards from "./Services_Card_Section/Students_Cards";
import Tourist_Visa_Cards from "./Services_Card_Section/Tourist_visa/Tourist_Visa_Cards";
import Work_Visa_Cards from "./Services_Card_Section/Work_visa/Work_Visa_Cards";
import TargetUsaSection from "./TargetUsaSection";
import WhyChoiceEammu from "./WhyChoiceEammu";

const Home = () => {
  return (
    <div>
      {/* SEO Helmet */}
      <Helmet>
        <title>Welcome to Eammu Immigration & Travel Services</title>
        <meta
          name="description"
          content="Explore student, tourist, and work visa services by Eammu. We offer expert immigration help for USA, Canada, UK, Europe, and more."
        />
        <meta
          name="keywords"
          content="Eammu Immigration, Study Visa, Work Visa, Tourist Visa, Visa Consultancy, USA Visa, Canada Visa, UK Immigration, Bangladesh Visa Help"
        />
        <meta property="og:title" content="Eammu Immigration & Visa Services" />
        <meta
          property="og:description"
          content="Visa consultancy for students, tourists, and workers. Partner with Eammu for global visa solutions."
        />
        <meta property="og:url" content="https://www.eammu.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://yourdomain.com/images/eammu-home-banner.jpg"
        />
      </Helmet>

      {/* Hero Carousel */}
      <Carousel />

      {/* Immigration Services Heading */}
      <EammuImmigrationHeading_2 />

      {/* Service Highlights Carousel */}
      <Eammu_Carousel />

      {/* Services Cards */}
      <Students_Cards />
      <Tourist_Visa_Cards />
      <Work_Visa_Cards />

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
