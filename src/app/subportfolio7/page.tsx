"use client";

import { Box } from "@chakra-ui/react";
import HeaderP7 from "../../components/portfolio7/HeaderP7";
import DescriptionP7 from "../../components/portfolio7/DescriptionP7";
import BackToTop from "../../components/portfolio7/BackToTop";
import ScrollBullets16 from "../../components/portfolio7/ScrollBullets16";

export default function SubPortfolioPage() {
  return (
    <>
      <Box id="header-p7">
        <HeaderP7 title="Electrical Work" category="Electrical Work" />
      </Box>

      <Box id="description-p7">
        <DescriptionP7 />
      </Box>

      <Box id="backtop">
        <BackToTop />
      </Box>

      {/* <ScrollBullets16 /> */}
    </>
  );
}
