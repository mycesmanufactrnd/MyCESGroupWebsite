"use client";

import { Box } from "@chakra-ui/react";
import HeaderP8 from "../../components/portfolio8/HeaderP8";
import DescriptionP8 from "../../components/portfolio8/DescriptionP8";
import BackToTop from "../../components/portfolio8/BackToTop";
import ScrollBullets16 from "../../components/portfolio8/ScrollBullets16";

export default function SubPortfolioPage() {
  return (
    <>
      <Box id="header-p8">
        <HeaderP8 title="General Work" category="General Work" />
      </Box>

      <Box id="description-p8">
        <DescriptionP8 />
      </Box>

      <Box id="backtop">
        <BackToTop />
      </Box>
      {/* 
      <ScrollBullets16 /> */}
    </>
  );
}
