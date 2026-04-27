"use client";

import { Box } from "@chakra-ui/react";
import HeaderP4 from "../../components/portfolio4/HeaderP4";
import DescriptionP4 from "../../components/portfolio4/DescriptionP4";
import BackToTop from "../../components/portfolio4/BackToTop";
import ScrollBullets16 from "../../components/portfolio4/ScrollBullets16";

export default function SubPortfolioPage() {
  return (
    <>
      <Box id="header-p4">
        <HeaderP4 title="SEMS" category="SEMS" />
      </Box>

      <Box id="description-p4">
        <DescriptionP4 />
      </Box>

      <Box id="backtop">
        <BackToTop />
      </Box>

      {/* <ScrollBullets16 /> */}
    </>
  );
}
