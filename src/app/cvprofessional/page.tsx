"use client";

import { Box } from "@chakra-ui/react";
import CVProfessionalHero from "../../components/cvprofessional/CVProfessionalHero";
import SendCVSection from "../../components/cvprofessional/SendCVSection";
import BackToTop from "../../components/cvprofessional/BackToTop";
import ScrollBullets18 from "../../components/cvprofessional/ScrollBullets18";

export default function SubPortfolioPage() {
  return (
    <>
      <Box id="cvprohero">
        <CVProfessionalHero />
      </Box>

      <Box id="sendcv">
        <SendCVSection />
      </Box>

      <Box id="backtop">
        <BackToTop />
      </Box>

      {/* <ScrollBullets18 /> */}
    </>
  );
}
