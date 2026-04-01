"use client";

import { Box } from "@chakra-ui/react";
import AcademyHero from "../../../components/services11/AcademyHero";
import MycesAcademyService from "../../../components/services11/MycesAcademyService";
import MycesAcademyFocus from "../../../components/services11/MycesAcademyFocus";
import BackToTop from "../../../components/services11/BackToTop";
import ScrollBullets15 from "../../../components/services11/ScrollBullets15";

export default function AcademyPage() {
  return (
    <>
      <Box id="academy-hero">
        <AcademyHero />
      </Box>

      <Box id="academy-feature">
        <MycesAcademyService />
      </Box>

      <Box id="academy-focus">
        <MycesAcademyFocus />
      </Box>

      <Box id="backtop">
        <BackToTop />
      </Box>

      <ScrollBullets15 />
    </>
  );
}