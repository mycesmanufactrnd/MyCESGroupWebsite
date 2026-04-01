"use client";

import { Box } from "@chakra-ui/react";
import EnergyAuditHero from "../../../components/services/EnergyAuditHero";
import EnergyAuditFeature from "../../../components/services/EnergyAuditFeature";
import TechnicalServicesBreakdowneu from "../../../components/services/TechnicalServicesBreakdowneu";
import DifferentiatorsSection from "../../../components/services/DifferentiatorsSection";
import EnergyAuditProcess from "../../../components/services/EnergyAuditProcess";
import BackToTop from "../../../components/services/BackToTop";
import ScrollBullets6 from "../../../components/services/ScrollBullets6";

export default function EnergyAuditPage() {
  return (
    <>
      <Box id="energy-hero">
        <EnergyAuditHero />
      </Box>

      <Box id="energy-feature">
        <EnergyAuditFeature />
      </Box>
      <Box id="technicalbreakdown">
        <TechnicalServicesBreakdowneu />
      </Box>

      <Box id="differentiators">
        <DifferentiatorsSection />
      </Box>

      <Box id="energy-process">
        <EnergyAuditProcess />
      </Box>

      <Box id="backtop">
        <BackToTop />
      </Box>

      <ScrollBullets6 />
    </>
  );
}
