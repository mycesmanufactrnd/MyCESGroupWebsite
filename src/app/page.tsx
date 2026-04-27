"use client";

import { Box } from "@chakra-ui/react";
import Hero from "../components/home/Hero";
import SocialProof from "../components/home/SocialProof";
import AboutUs from "../components/home/AboutUs";
import TotalService from "../components/home/TotalService";
import OurServices from "../components/home/OurServices";
import BackToTop from "../components/home/BackToTop";
import ScrollBullets from "../components/home/ScrollBullets";

export default function Home() {
  return (
    <>
      <Box id="hero">
        <Hero />
      </Box>

      <Box id="about-us">
        <AboutUs />
      </Box>

      {/* <Box id="total-service">
        <TotalService />
      </Box> */}

      <Box id="services">
        <OurServices />
      </Box>

      <Box id="social-proof">
        <SocialProof />
      </Box>

      <Box id="backtop">
        <BackToTop />
      </Box>

      {/* <ScrollBullets /> */}
    </>
  );
}
