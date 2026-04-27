"use client";

import { Box } from "@chakra-ui/react";
import ProjectHeaderProps2 from "../../components/portfolio1/ProjectHeaderProps2";
import DescriptionSubPortfolio from "../../components/portfolio1/DescriptionSubPortfolio";
import BackToTop from "../../components/portfolio1/BackToTop";
import ScrollBullets16 from "../../components/portfolio1/ScrollBullets16";

export default function SubPortfolioPage() {
  return (
    <>
      <Box id="subportfolio-hero">
        <ProjectHeaderProps2 title="Energy Audit" category="Energy Audit" />
      </Box>

      <Box id="descriptionsubportfolio">
        <DescriptionSubPortfolio />
      </Box>

      <Box id="backtop">
        <BackToTop />
      </Box>
      {/* 
      <ScrollBullets16 /> */}
    </>
  );
}
