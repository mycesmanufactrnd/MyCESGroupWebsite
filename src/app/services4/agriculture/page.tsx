"use client";

import { Box } from "@chakra-ui/react";
import AgricultureHero from "../../../components/services5/AgricultureHero";
import AgricultureFeature from "../../../components/services5/AgricultureFeature";
import AgricultureCarousel from "../../../components/services5/AgricultureCarousel";
import DifferentiatorsSection5 from "../../../components/services5/DifferentiatorsSection5";
import AgricultureProcess from "../../../components/services5/AgricultureProcess";
import BackToTop from "../../../components/services5/BackToTop";
import ScrollBullets10 from "../../../components/services5/ScrollBullets10";

export default function AgriculturePage() {
  return (
    <>
      <Box id="agriculture-hero">
        <AgricultureHero />
      </Box>

      <Box id="agriculture-feature">
        <AgricultureFeature />
      </Box>

      <Box id="agriculture-carousel">
        <AgricultureCarousel />
      </Box>

      <Box id="agriculture-differentiators">
        <DifferentiatorsSection5 />
      </Box>

      <Box id="agriculture-process">
        <AgricultureProcess />
      </Box>

      <Box id="backtop">
        <BackToTop />
      </Box>

      <ScrollBullets10 />
    </>
  );
}