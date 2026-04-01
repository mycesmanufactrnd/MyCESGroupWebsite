"use client";

import { Box } from "@chakra-ui/react";
import ContactHero from "../../components/contact/ContactHero";
import ContactSection from "../../components/contact/ContactSection";
import GetInTouchSection from "../../components/contact/GetInTouchSection";
import OfficesContactDetails from "../../components/contact/OfficesContactDetails";
import BackToTop from "../../components/contact/BackToTop";
import ScrollBullets3 from "../../components/contact/ScrollBullets3";

export default function ContactPage() {
  return (
    <>
      {/* Scroll bullets */}
      <ScrollBullets3 />

      {/* Sections with IDs for bullets */}
      <Box id="contact-hero">
        <ContactHero />
      </Box>

      <Box id="contact-info">
        <ContactSection />
      </Box>

      <Box id="get-in-touch">
        <GetInTouchSection />
      </Box>

      <Box id="offices">
        <OfficesContactDetails />
      </Box>

      <Box id="backtop">
        <BackToTop />
      </Box>

      <Box id="extra" h="100px" /> {/* Optional extra section if needed */}
    </>
  );
}
