"use client";

import { Box } from "@chakra-ui/react";
import HeaderP9 from "../../components/portfolio9/HeaderP9";
import DescriptionP9 from "../../components/portfolio9/DescriptionP9";
import BackToTop from "../../components/portfolio9/BackToTop";
import ScrollBullets16 from "../../components/portfolio9/ScrollBullets16";

export default function SubPortfolioPage() {
  return (
    <>
      <Box id="header-p9">
        <HeaderP9 title="Smart Home" category="Smart Home" />
      </Box>

      <Box id="description-p9">
        <DescriptionP9 />
      </Box>

      <Box id="backtop">
        <BackToTop />
      </Box>

      {/* <ScrollBullets16 /> */}
    </>
  );
}
