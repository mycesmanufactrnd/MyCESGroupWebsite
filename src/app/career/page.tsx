"use client";

import { Box } from "@chakra-ui/react";
import ProfessionalHero from "../../components/professional/ProfessionalHero";
import WorkSection from "../../components/professional/WorkSection";
import BenefitsRewardsSection from "../../components/professional/BenefitsRewardsSection";
import OpenPositionsSection from "../../components/professional/OpenPositionsSection";
import BackToTop from "../../components/professional/BackToTop";
import ScrollBullets17 from "../../components/professional/ScrollBullets17";

export default function SubPortfolioPage() {
  return (
    <>
      <Box id="workwithus">
        <ProfessionalHero />
      </Box>

      <Box id="work-hero">
        <WorkSection />
      </Box>

      <Box id="reward">
        <BenefitsRewardsSection />
      </Box>

      <Box id="openposition">
        <OpenPositionsSection />
      </Box>

      <Box id="backtop">
        <BackToTop />
      </Box>

      <ScrollBullets17 />
    </>
  );
}