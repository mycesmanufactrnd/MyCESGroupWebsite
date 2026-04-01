"use client";

import { Box } from "@chakra-ui/react";
import GeologicalsurveyHero from "../../../components/services7/GeologicalsurveyHero";
import GeologicalsurveyFeature from "../../../components/services7/GeologicalsurveyFeature";
import GeologicalsurveyCarousel from "../../../components/services7/GeologicalsurveyCarousel";
import DifferentiatorsSection7 from "../../../components/services7/DifferentiatorsSection7";
import GeologicalsurveyProcess from "../../../components/services7/GeologicalsurveyProcess";
import BackToTop from "../../../components/services7/BackToTop";
import ScrollBullets12 from "../../../components/services7/ScrollBullets12";

export default function GeologicalSurveyPage() {
  return (
    <>
      <Box id="geological-hero">
        <GeologicalsurveyHero />
      </Box>

      <Box id="geological-feature">
        <GeologicalsurveyFeature />
      </Box>

      <Box id="geological-carousel">
        <GeologicalsurveyCarousel />
      </Box>

      <Box id="geological-differentiators">
        <DifferentiatorsSection7 />
      </Box>

      <Box id="geological-process">
        <GeologicalsurveyProcess />
      </Box>

      <Box id="backtop">
        <BackToTop />
      </Box>

      <ScrollBullets12 />
    </>
  );
}