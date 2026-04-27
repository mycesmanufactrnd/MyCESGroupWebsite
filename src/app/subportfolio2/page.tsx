"use client";

import { Box } from "@chakra-ui/react";
import HeaderP2 from "../../components/portfolio2/HeaderP2";
import DescriptionP2 from "../../components/portfolio2/DescriptionP2";
import BackToTop from "../../components/portfolio2/BackToTop";
import ScrollBullets16 from "../../components/portfolio2/ScrollBullets16";

export default function SubPortfolioPage() {
  return (
    <>
      <Box id="header-p2">
        <HeaderP2 title="EMARS" category="EMARS" />
      </Box>

      <Box id="description-p2">
        <DescriptionP2 />
      </Box>

      <Box id="backtop">
        <BackToTop />
      </Box>
      {/* 
      <ScrollBullets16 /> */}
    </>
  );
}
