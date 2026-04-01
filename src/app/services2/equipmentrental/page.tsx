"use client";

import { Box } from "@chakra-ui/react";
import EquipmentRentalHero from "../../../components/services3/EquipmentRentalHero";
import EquipmentRentalFeature from "../../../components/services3/EquipmentRentalFeature";
import TechnicalServicesBreakdowner from "../../../components/services3/TechnicalServicesBreakdowner";
import EquipmentRentalList from "../../../components/services3/EquipmentRentalList";
import EquipmentRentalContact from "../../../components/services3/EquipmentRentalContact";
import BackToTop from "../../../components/services3/BackToTop";
import ScrollBullets8 from "../../../components/services3/ScrollBullets8";

export default function EquipmentRentalPage() {
  return (
    <>
      <Box id="equipment-hero">
        <EquipmentRentalHero />
      </Box>

      <Box id="equipment-feature">
        <EquipmentRentalFeature />
      </Box>

      <Box id="technicaler">
        <TechnicalServicesBreakdowner />
      </Box>

      <Box id="erlist">
        <EquipmentRentalList />
      </Box>

      <Box id="equipment-contact">
        <EquipmentRentalContact />
      </Box>

      <Box id="backtop">
        <BackToTop />
      </Box>

      <ScrollBullets8 />
    </>
  );
}
