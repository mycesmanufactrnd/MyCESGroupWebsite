"use client";

import { Box } from "@chakra-ui/react";
import EnergyAuditHero from "../../../components/services/EnergyAuditHero";
import EnergyAuditFeature from "../../../components/services/EnergyAuditFeature";
import EngFeature from "../../../components/services/EngFeature";
import EngValues from "../../../components/services/EngValues";
import TechnicalServicesBreakdown from "../../../components/services/TechnicalServicesBreakdowneu";
import DifferentiatorsSection from "../../../components/services/DifferentiatorsSection";
import BackToTop from "../../../components/services/BackToTop";
import ScrollBullets6 from "../../../components/services/ScrollBullets6";

export default function EnergyAuditPage() {
  return (
    <>
      <Box id="energy-hero">
        <EnergyAuditHero />
      </Box>

      {/* <Box id="eng-feature">
        <EngFeature />
      </Box>

      <Box id="eng-values">
        <EngValues />
      </Box> */}

      <Box id="energy-feature">
        <EnergyAuditFeature />
      </Box>

      <Box id="technicalbreakdown">
        <TechnicalServicesBreakdown />
      </Box>

      <Box id="differentiators">
        <DifferentiatorsSection />
      </Box>

      <Box id="backtop">
        <BackToTop />
      </Box>

      {/* <ScrollBullets6 /> */}
    </>
  );
}
