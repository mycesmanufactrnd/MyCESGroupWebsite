"use client";

import { Box } from "@chakra-ui/react";
import SubsidiariesHero from "../../components/subsidiaries/SubsidiariesHero";
import GetToKnowUsSection from "../../components/subsidiaries/GetToKnowUsSection";
import BackToTop from "../../components/subsidiaries/BackToTop";
import ScrollBullets5 from "../../components/subsidiaries/ScrollBullets5";

export default function SubsidiariesPage() {
  return (
    <>
      <Box id="subsidiaries-hero">
        <SubsidiariesHero />
      </Box>

      <Box id="get-to-know-us">
        <GetToKnowUsSection />
      </Box>

      <Box id="backtop">
        <BackToTop />
      </Box>

      <ScrollBullets5 />
    </>
  );
}
