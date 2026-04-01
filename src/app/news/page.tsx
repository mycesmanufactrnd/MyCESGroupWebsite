"use client";

import { Box } from "@chakra-ui/react";
import NewsHero from "../../components/news/NewsHero";
import News from "../../components/news/NewsAbout";
import BackToTop from "../../components/news/BackToTop";
// import ScrollBullets21 from "../../components/news/ScrollBullets21";

export default function NewsPage() {
  return (
    <>
      <Box id="newshero">
        <NewsHero />
      </Box>

      <Box id="news">
        <News />
      </Box>

      <Box id="backtop">
        <BackToTop />
      </Box>

      {/* <ScrollBullets21 /> */}
    </>
  );
}
