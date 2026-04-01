"use client";

import { Box } from "@chakra-ui/react";
import PortfolioHero from "../../components/portfolio/PortfolioHero";
import FilterPortfolio from "../../components/portfolio/FilterPortfolio";
import BackToTop from "../../components/portfolio/BackToTop";
import ScrollBullets15 from "../../components/portfolio/ScrollBullets15";

export default function PortfolioPage() {
  return (
    <>
      <Box id="portfolio-hero">
        <PortfolioHero />
      </Box>

      <Box id="filterportfolio">
        <FilterPortfolio />
      </Box>

      <Box id="backtop">
        <BackToTop />
      </Box>

      <ScrollBullets15 />
    </>
  );
}
