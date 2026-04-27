"use client";

import { Box } from "@chakra-ui/react";
import HeaderP6 from "../../components/portfolio6/HeaderP6";
import DescriptionP6 from "../../components/portfolio6/DescriptionP6";
import BackToTop from "../../components/portfolio6/BackToTop";
import ScrollBullets16 from "../../components/portfolio6/ScrollBullets16";

export default function SubPortfolioPage() {
  return (
    <>
      <Box id="header-p6">
        <HeaderP6 title="Enery Training" category="Enery Training" />
      </Box>

      <Box id="description-p6">
        <DescriptionP6 />
      </Box>

      <Box id="backtop">
        <BackToTop />
      </Box>

      {/* <ScrollBullets16 /> */}
    </>
  );
}
