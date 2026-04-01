"use client";

import { Box } from "@chakra-ui/react";
import ReemconsultancyHero from "../../../components/services6/ReemconsultancyHero";
import ReemconsultancyFeature from "../../../components/services6/ReemconsultancyFeature";
import TechnicalServicesBreakdownReem from "../../../components/services6/TechnicalServicesBreakdownReem";
import Reemimportance from "../../../components/services6/Reemimportance";
import ReemConsultancyContact from "../../../components/services6/ReemConsultancyContact";
import BackToTop from "../../../components/services6/BackToTop";
import ScrollBullets11 from "../../../components/services6/ScrollBullets11";

export default function ReemConsultancyPage() {
  return (
    <>
      <Box id="reemconsultancy-hero">
        <ReemconsultancyHero />
      </Box>

      <Box id="reemconsultancy-feature">
        <ReemconsultancyFeature />
      </Box>

      <Box id="reemconsultancy-service">
        <TechnicalServicesBreakdownReem />
      </Box>

      <Box id="reemconsultancy-importance">
        <Reemimportance />
      </Box>

      <Box id="reemconsultancy-contact">
        <ReemConsultancyContact />
      </Box>

      <Box id="backtop">
        <BackToTop />
      </Box>

      <ScrollBullets11 />
    </>
  );
}