"use client";

import { Box } from "@chakra-ui/react";
import ProjectHeaderProps2 from "../../components/subportfolio/ProjectHeaderProps2";
import DescriptionSubPortfolio from "../../components/subportfolio/DescriptionSubPortfolio";
import BackToTop from "../../components/subportfolio/BackToTop";
import ScrollBullets16 from "../../components/subportfolio/ScrollBullets16";

export default function SubPortfolioPage() {
  return (
    <>
      <Box id="subportfolio-hero">
        <ProjectHeaderProps2 title="My Project" category="Web Development" />
      </Box>

      <Box id="descriptionsubportfolio">
        <DescriptionSubPortfolio />
      </Box>

      <Box id="backtop">
        <BackToTop />
      </Box>

      <ScrollBullets16 />
    </>
  );
}
