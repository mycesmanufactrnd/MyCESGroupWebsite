"use client";

import { Box } from "@chakra-ui/react";

// Import default exports
import MycesHero from "../../../components/services1/MycesHero";
import MycesFeature from "../../../components/services1/MycesFeature";
import MycesServicesBreakdown from "../../../components/services1/MycesServiceBreakdown";
// import MycesProductSection from "../../../components/services1/MycesProductSection";
import MycesServiceSection from "../../../components/services1/MycesServiceSection";
import MycesValues from "../../../components/services1/MycesValues";
import BackToTop from "../../../components/services1/BackToTop";
import ScrollBullets22 from "../../../components/services1/ScrollBullets22";

export default function MycesPage() {
  return (
    <>
      {/* Hero Section */}
      <Box id="myces-hero">
        <MycesHero />
      </Box>

      {/* Values Section */}
      <Box id="myces-values">
        <MycesValues />
      </Box>

      {/* Feature Section */}
      <Box id="myces-feature">
        <MycesFeature />
      </Box>

      {/* Services Breakdown */}
      <Box id="myces-serviceclassification">
        <MycesServicesBreakdown />
      </Box>

      {/* Product Section
      <Box id="myces-product">
        <MycesProductSection />
      </Box> */}

      {/* Services Section */}
      <Box id="myces-service">
        <MycesServiceSection />
      </Box>

      {/* Back To Top */}
      <Box id="backtop">
        <BackToTop />
      </Box>

      {/* Scroll Bullets */}
      <ScrollBullets22 />
    </>
  );
}
