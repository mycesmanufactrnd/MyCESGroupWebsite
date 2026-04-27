"use client";

import { Box } from "@chakra-ui/react";
import DigitalSystemHero2 from "@/src/components/services2/DigitalSystemHero2";
import DigitalSystemFeature from "@/src/components/services2/DigitalSystemFeature";
import DigitalValues from "@/src/components/services2/ManuValues";
import TechnicalServicesBreakdownds from "@/src/components/services2/TechnicalServicesBreakdownds";
import EmarsSection from "@/src/components/services2/EmarsSection";
import FmsSection from "@/src/components/services2/FmsSection";
import BackToTop from "@/src/components/services2/BackToTop";
import ScrollBullets7 from "@/src/components/services2/ScrollBullets7";

export default function DigitalSystemPage() {
  return (
    <>
      <Box id="digital-hero">
        <DigitalSystemHero2 />
      </Box>

      {/* <Box id="digital-feature">
        <DigitalSystemFeature />
      </Box>

      <Box id="digital-values">
        <DigitalValues />
      </Box> */}

      <Box id="technicalds">
        <TechnicalServicesBreakdownds />
      </Box>

      <Box id="emars">
        <EmarsSection />
      </Box>

      <Box id="fms">
        <FmsSection />
      </Box>

      <Box id="backtop">
        <BackToTop />
      </Box>

      {/* <ScrollBullets7 /> */}
    </>
  );
}
