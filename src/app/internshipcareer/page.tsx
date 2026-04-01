"use client";

import { Box } from "@chakra-ui/react";
import InternshipHero from "../../components/internship/InternshipHero";
import WorkSection2 from "../../components/internship/WorkSection2";
import BenefitsRewardsSection2 from "../../components/internship/BenefitsRewardsSection2";
import OpenPositionsSection2 from "../../components/internship/OpenPositionsSection2";
import BackToTop from "../../components/internship/BackToTop";
import ScrollBullets20 from "../../components/internship/ScrollBullets20";

export default function SubPortfolioPage() {
  return (
    <>
      <Box id="internhero">
        <InternshipHero />
      </Box>

      <Box id="work2">
        <WorkSection2 />
      </Box>

      <Box id="reward2">
        <BenefitsRewardsSection2 />
      </Box>

      <Box id="openposition2">
        <OpenPositionsSection2 />
      </Box>

      <Box id="backtop">
        <BackToTop />
      </Box>

      <ScrollBullets20 />
    </>
  );
}