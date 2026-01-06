

import EammuImmigrationHeading_2 from "../../Home/EammuImmigrationHeading_2";
import Our_Succsses_State from "../../Home/Our_Succsses_State";
import Registration_Agents from "../../Home/Registration_Agents";
import Services_Card_Section from "../../Home/Services_Card_Section/Students_Cards";
import TargetUsaSection from "../../Home/TargetUsaSection";
import About_Eammu_Immigration from "./About_Eammu_Immigration";
import Immigration_Header_Section from "./Immigration_Header_Section";
import { Helmet } from 'react-helmet-async';


const EammuImmigrationServices = () => {
    return (
        <div>
          <Helmet>
    <title>Eammu | Visa, Immigration & Travel Services</title>
    <meta name="description" content="Explore visa, immigration, and travel services to the USA, UK, Canada, Europe, Japan, and more. Trusted by thousands globally." />
    <meta name="keywords" content="Visa Services, Immigration, Study Abroad, Work Visa, Travel Agency Bangladesh, Eammu Tours, Eammu Immigration" />
    <meta property="og:title" content="Eammu - Your Trusted Visa & Immigration Partner" />
    <meta property="og:description" content="Get 98% visa success rate, expert help in over 30+ countries including Canada, UAE, Schengen, Japan and more." />
    <meta property="og:image" content="https://www.eammu.com/eammuicon.jpg" />
    <meta property="og:url" content="https://www.eammu.com" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Eammu - Visa Experts | Work, Study, Travel" />
    <meta name="twitter:description" content="Join 1,000+ happy travelers! Apply now for student visas, work permits & tours." />
    <meta name="twitter:image" content="https://www.eammu.com/eammuicon.jpg" />
  </Helmet>
  {/* Immigration_Header_Section */}
  <Immigration_Header_Section></Immigration_Header_Section>

  {/* EammuImmigrationHeading_2 */}
  <EammuImmigrationHeading_2></EammuImmigrationHeading_2>

         {/* Services Card */}
       <Services_Card_Section></Services_Card_Section>
             {/* Target Usa Visa Interview Preparation */}
      <TargetUsaSection></TargetUsaSection>

      {/* Registration */}
      <Registration_Agents ></Registration_Agents>

        {/* Our_Succsses_State */}
        <Our_Succsses_State></Our_Succsses_State>
          {/* About_Eammu_Immigration Services */}
       <About_Eammu_Immigration></About_Eammu_Immigration>


        </div>
    );
};

export default EammuImmigrationServices;