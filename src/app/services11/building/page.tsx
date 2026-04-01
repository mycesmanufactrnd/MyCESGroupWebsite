"use client";

import { Box } from "@chakra-ui/react";
import BASHero from "../../../components/services10/BASHero";
import ElectricalServices from "../../../components/services10/ElectricalServices";
import USP from "../../../components/services10/USP";
import BackToTop from "../../../components/services10/BackToTop";
import ScrollBullets14 from "../../../components/services10/ScrollBullets14";


export default function BASPage() {
  return (
    <>
      <Box id="bas-hero">
        <BASHero />
      </Box>

      <Box id="bas-service">
        <ElectricalServices />
      </Box>

      <Box id="USP">
        <USP />
      </Box>

      <Box id="backtop">
        <BackToTop />
      </Box>

      <ScrollBullets14 />
    </>
  );
}