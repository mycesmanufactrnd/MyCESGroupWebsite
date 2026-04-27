"use client";

import { Box } from "@chakra-ui/react";
import BiomedicalHero from "../../../components/services9/BiomedicalHero";
import BiomedicalFeature from "../../../components/services9/BiomedicalFeature";
import TechnicalServicesBreakdownBiomed from "../../../components/services9/TechnicalServicesBreakdownBiomed";
import BiomedProductSection from "../../../components/services9/BiomedProductSection";
import BiomedicalServicesSection from "../../../components/services9/BiomedicalServicesSection";
import BiomedValues from "../../../components/services9/BiomedValues";
import BackToTop from "../../../components/services9/BackToTop";
import ScrollBullets14 from "../../../components/services9/ScrollBullets14";

export default function BiomedicalPage() {
  return (
    <>
      <Box id="biomedical-hero">
        <BiomedicalHero />
      </Box>

      <Box id="biomedical-feature">
        <BiomedicalFeature />
      </Box>

      <Box id="biomedical-value">
        <BiomedValues />
      </Box>

      {/* <Box id="biomedical-serviceclassification">
        <TechnicalServicesBreakdownBiomed />
      </Box>

      <Box id="biomedical-product">
        <BiomedProductSection />
      </Box>

      <Box id="biomedical-service">
        <BiomedicalServicesSection />
      </Box> */}

      <Box id="backtop">
        <BackToTop />
      </Box>
      {/* 
      <ScrollBullets14 /> */}
    </>
  );
}
