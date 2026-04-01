"use client";

import { Box } from "@chakra-ui/react";
import EmsCertificationHero from "../../../components/services8/EmsCertificationHero";
import EmsCertificationFeature from "../../../components/services8/EmsCertificationFeature";
import TechnicalServicesBreakdownEMS from "../../../components/services8/TechnicalServicesBreakdownEMS";
import EmsCertificationCarousel from "../../../components/services8/EmsCertificationCarousel";
import EmsCertificationProcess from "../../../components/services8/EmsCertificationProcess";
import EMSContact from "../../../components/services8/EMSContact";
import BackToTop from "../../../components/services8/BackToTop";
import ScrollBullets13 from "../../../components/services8/ScrollBullets13";

export default function EmsCertificationPage() {
  return (
    <>
      <Box id="ems-hero">
        <EmsCertificationHero />
      </Box>

      <Box id="ems-feature">
        <EmsCertificationFeature />
      </Box>

      <Box id="ems-service">
        <TechnicalServicesBreakdownEMS />
      </Box>

      <Box id="ems-carousel">
        <EmsCertificationCarousel />
      </Box>

      <Box id="ems-process">
        <EmsCertificationProcess />
      </Box>

      <Box id="ems-contact">
        <EMSContact />
      </Box>

      <Box id="backtop">
        <BackToTop />
      </Box>

      <ScrollBullets13 />
    </>
  );
}