"use client";

import { Box } from "@chakra-ui/react";
import CVInternshipHero from "../../components/cvinternship/CVInternshipHero";
import SendCVInternshipSection from "../../components/cvinternship/SendCVInternshipSection";
import BackToTop from "../../components/cvinternship/BackToTop";
import ScrollBullets19 from "../../components/cvinternship/ScrollBullets19"; 
// you can reuse this if it’s generic

export default function CVInternshipPage() {
  return (
    <>
      <Box id="cvinternship-hero">
        <CVInternshipHero />
      </Box>

      <Box id="sendcv-internship">
        <SendCVInternshipSection />
      </Box>

      <Box id="backtop">
        <BackToTop />
      </Box>

      <ScrollBullets19 />
    </>
  );
}
