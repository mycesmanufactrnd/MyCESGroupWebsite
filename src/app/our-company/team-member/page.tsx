"use client";

import { Box, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import TeamHero from "../../../components/team/TeamHero";
import OurPeopleSection from "../../../components/team/OurPeopleSection";
import OurPurposeSection from "../../../components/team/OurPurposeSection";
import MeetTheTeamSection from "../../../components/team/MeetTheTeamSection";
import BackToTop from "../../../components/team/BackToTop";
import ScrollBullets4 from "../../../components/team/ScrollBullets4";

const MotionBox = motion(Box);

export default function TeamMembersPage() {
  return (
    <>
{/* ================= SECTIONS WITH IDS ================= */}
      <Box id="hero">
        <TeamHero />
      </Box>

      <Box id="our-people">
        <OurPeopleSection />
      </Box>

      <Box id="team-purpose">
        <OurPurposeSection />
      </Box>

      <Box id="meet-the-team">
        <MeetTheTeamSection />
      </Box>

      <Box id="backtop">
        <BackToTop />
      </Box>

      {/* Scroll bullets */}
      <ScrollBullets4 />
    </>
  );
}
