"use client";

import { Box } from "@chakra-ui/react";
import BiomedicalHero from "../../../components/services9/BiomedicalHero";
import BiomedicalFeature from "../../../components/services9/BiomedicalFeature";
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

      <Box id="backtop">
        <BackToTop />
      </Box>

      <ScrollBullets14 />
    </>
  );
}