"use client";

import { Box } from "@chakra-ui/react";
import MeasurementHero from "../../../components/services4/MeasurementHero";
import MeasurementFeature from "../../../components/services4/MeasurementFeature";
import TechnicalServicesBreakdownmv from "../../../components/services4/TechnicalServicesBreakdownmv";
import MeasurementCarousel from "../../../components/services4/MeasurementCarousel";
import DifferentiatorsSection4 from "../../../components/services4/DifferentiatorsSection4";
import MeasurementVerificationContact from "../../../components/services4/MeasurementVerificationContact";
import BackToTop from "../../../components/services4/BackToTop";
import ScrollBullets9 from "../../../components/services4/ScrollBullets9";

export default function MeasurementPage() {
  return (
    <>
      <Box id="measurement-hero">
        <MeasurementHero />
      </Box>

      <Box id="measurement-feature">
        <MeasurementFeature />
      </Box>

      <Box id="measurement-class">
        <TechnicalServicesBreakdownmv />
      </Box>

      <Box id="measurement-carousel">
        <MeasurementCarousel />
      </Box>

      <Box id="measurement-differentiators">
        <DifferentiatorsSection4 />
      </Box>
      {/* 
      <Box id="measure-contact">
        <MeasurementVerificationContact />
      </Box> */}

      <Box id="backtop">
        <BackToTop />
      </Box>

      {/* <ScrollBullets9 /> */}
    </>
  );
}
