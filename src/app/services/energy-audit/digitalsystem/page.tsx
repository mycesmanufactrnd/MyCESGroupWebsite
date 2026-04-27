"use client";

import { Box } from "@chakra-ui/react";
import DigitalSystemHero2 from "../../../../components/services2/DigitalSystemHero2";
import DigitalSystemFeature from "../../../../components/services2/DigitalSystemFeature";
import DigitalValues from "../../../../components/services2/ManuValues";
import TechnicalServicesBreakdownds from "../../../../components/services2/TechnicalServicesBreakdownds";
import EmarsSection from "../../../../components/services2/EmarsSection";
import FmsSection from "../../../../components/services2/FmsSection";
import BackToTop from "../../../../components/services2/BackToTop";
import ScrollBullets7 from "../../../../components/services2/ScrollBullets7";

export default function DigitalSystemPage() {
  return (
    <>
      <Box id="digital-hero">
        <DigitalSystemHero2 />
      </Box>

      <Box id="digital-feature">
        <DigitalSystemFeature />
      </Box>

      <Box id="digital-values">
        <DigitalValues />
      </Box>

      {/* <Box id="technicalds">
        <TechnicalServicesBreakdownds />
      </Box>

      <Box id="emars">
        <EmarsSection />
      </Box>

      <Box id="fms">
        <FmsSection />
      </Box> */}

      <Box id="backtop">
        <BackToTop />
      </Box>
      {/* 
      <ScrollBullets7 /> */}
    </>
  );
}
