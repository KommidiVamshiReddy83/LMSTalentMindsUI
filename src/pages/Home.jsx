import React from "react";
import HeroBannerSlider from "../components/publicLayout/HeroBannerSlider";
import CompanyMarquee from "../components/publicLayout/CompanyMarquee";
import Testimonials from "../components/publicLayout/Testimonials";
import LearnerTrust from "../components/publicLayout/LearnerTrust";
import SkillBoostBanner from "../components/publicLayout/SkillBoostBanner";
import ValueProposition from "../components/publicLayout/ValueProposition"; 
import CareerOutcomes from "../components/publicLayout/CareerOutcomes"; 
import TopEmployers from "../components/publicLayout/TopEmployers";
import PlacementReport from "../components/publicLayout/PlacementReport";

import LearningJourney from "../components/publicLayout/LearningJourney";
import MentorShowcase from "../components/publicLayout/MentorShowcase";
import CertificationShowcase from "../components/publicLayout/CertificationShowcase";
import CorporateTraining from "../components/publicLayout/CorporateTraining";
import CommunitySpotlight from "../components/publicLayout/CommunitySpotlight";

export default function Home() {
  return (
    <div className="tm-home">
      
      <HeroBannerSlider />

     
      <div className="tm-marquee">
        <CompanyMarquee />
      </div>

    
      <ValueProposition />

    
      <LearningJourney />

     
      <CareerOutcomes />

      
      <MentorShowcase />

   
      <CertificationShowcase />

      
      <TopEmployers />

      
      <CorporateTraining />

     
      <CommunitySpotlight />

      
      <LearnerTrust />
<PlacementReport/>
      <Testimonials />

      <SkillBoostBanner />

      <style>{`
        .tm-home {
          background: #f8fafc;
          font-family: "Open Sans", "Inter", sans-serif;
          color: #0f172a;
        }

        .tm-marquee {
          background: linear-gradient(90deg, #e0eafc 0%, #cfdef3 100%);
          padding: 32px 0 24px 0;
          margin-bottom: 32px;
        }

        @media (max-width: 768px) {
          .tm-courses-title { font-size: 1.8rem; }
        }

        @media (max-width: 480px) {
          .tm-btn { width: 100%; }
        }
      `}</style>
    </div>
  );
}
