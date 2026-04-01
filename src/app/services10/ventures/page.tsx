"use client";

import { Box } from "@chakra-ui/react";
import Hero from "../../../components/services12/Hero";
import VenturesHero from "../../../components/services12/VenturesHero";
import SocialProof from "../../../components/services12/SocialProof"; 
import CoreValues from "../../../components/services12/CoreValues";
import ServicesSection from "../../../components/services12/ServicesSection";
import TrustedCustomerMarquee from "../../../components/services12/TrustedCustomerMarquee";
import BackToTop from "../../../components/services12/BackToTop";
import ScrollBullets16 from "../../../components/services12/ScrollBullets16";

export default function VenturesPage() {
  const logos = [
    "/client/1.png",
    "/client/2.png",
    "/client/3.png",
    "/client/4.png",
    "/client/5.png",
  ];

  return (
    <>
      <Box id="hero">
        <Hero />
      </Box>

      <Box id="ventures-hero">
        <VenturesHero />
      </Box>

      <Box id="social-proof">
        <SocialProof logos={logos} />
      </Box>

      <Box id="core-values">
        <CoreValues />
      </Box>

      <Box id="services-section">
        <ServicesSection />
      </Box>

      <Box id="trusted-customer-marquee">
        <TrustedCustomerMarquee />
      </Box>

      <Box id="backtop">
        <BackToTop />
      </Box>

      <ScrollBullets16 />
    </>
  );
}