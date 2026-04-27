"use client";

import { Box } from "@chakra-ui/react";
import HeaderP5 from "../../components/portfolio5/HeaderP5";
import DescriptionP5 from "../../components/portfolio5/DescriptionP5";
import BackToTop from "../../components/portfolio5/BackToTop";
import ScrollBullets16 from "../../components/portfolio5/ScrollBullets16";

export default function SubPortfolioPage() {
  return (
    <>
      <Box id="header-p5">
        <HeaderP5 title="M&V" category="M&V" />
      </Box>

      <Box id="description-p5">
        <DescriptionP5 />
      </Box>

      <Box id="backtop">
        <BackToTop />
      </Box>

      {/* <ScrollBullets16 /> */}
    </>
  );
}
