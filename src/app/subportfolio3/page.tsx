"use client";

import { Box } from "@chakra-ui/react";
import HeaderP3 from "../../components/portfolio3/HeaderP3";
import DescriptionP3 from "../../components/portfolio3/DescriptionP3";
import BackToTop from "../../components/portfolio3/BackToTop";
import ScrollBullets16 from "../../components/portfolio3/ScrollBullets16";

export default function SubPortfolioPage() {
  return (
    <>
      <Box id="header-p3">
        <HeaderP3 title="CMMS" category="CMMS" />
      </Box>

      <Box id="description-p3">
        <DescriptionP3 />
      </Box>

      <Box id="backtop">
        <BackToTop />
      </Box>

      {/* <ScrollBullets16 /> */}
    </>
  );
}
