"use client";

import {
  Box,
  Heading,
  Text,
  Grid,
  Stack,
  Flex,
  Image,
} from "@chakra-ui/react";
import { motion, AnimatePresence, easeOut, easeIn } from "framer-motion";
import { useState } from "react";

const MotionBox = motion(Box);

/* -----------------------------
   Animation Variants
----------------------------- */
const panelVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.3, ease: easeOut },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.25, ease: easeIn },
  },
};

/* -----------------------------
   Sample Job Data
   (Replace later with API)
----------------------------- */
const jobs = [
  {
    id: 1,
    position: "Energy Engineer",
    location: "MyCES Sdn Bhd, 20-1, Selangor, Malaysia",
    department: "Engineering",
    closing: "-",
    requirements: [
      "Diploma or Bachelor's degree in Energy, Mechanical, Electrical Engineering, or related descipline.",
      "Able to work independently as well as collabrative within a team environment.",
      "Willing to travel and perform site-based work.",
      "Proficient in Microsoft Excel and technical documentation.",
    ],
    scope: [
      "Support engineers in conducting energy audits by collecting data on electrical systems, HVAC systems, lighting systems, and other energy-consuming equipment.",
      "Assist in performing site inspections and recording energy consumption data, equipment specifications, and operational parameters.",
      "Assist in installing, setting up, and monitoring energy logging equipment such as power analyzers, flow meters, and temperature sensors.",
      "Help analyze energy consumption data and assist in preparing energy audit reports, including graphs, tables, and performance summaries.",
    ],
  },
  {
    id: 2,
    position: "Business Developer",
    location: "MyCES Sdn Bhd, 20-1, Selangor, Malaysia",
    department: "Operations",
    closing: "-",
    requirements: [
      "Bachelor's degree in Business Administration, Marketing, Management,or a related field (Master's preferred for senior roles).",
      "Relevant professional certifications (e.g., Sales, Negotiation, Strategic Management) can be an advantage.",
      "Working experience at least 1-2 years in business development or sales.",
    ],
    scope: [
      "Conduct research on market trends, competitors, and potential clients to identify new business opportunities.",
      "Assist in identifying and compiling potential customer or partner databases for business development activities.",
      "Assist in preparing emails, proposals, and presentations for potential clients and business partners.",
      "Support the preparation of quotations, proposals, and tender documents for potential projects.",
      "Assist in scheduling meetings, preparing meeting materials, and recording meeting minutes.",
      "Assist the business development team in developing strategies to expand market reach and increase company revenue.",
      "Maintain records of business development activities, client communications, and project opportunities.",
    ],
  }
];

export default function OpenPositionsSection() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleRow = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <Box
      w="full"
      py={{ base: 16, md: 24 }}
      px={{ base: 6, md: 16 }}
      bg="white"
    >
      <Box maxW="1400px" mx="auto">
        {/* =========================
            SECTION HEADING
        ========================= */}
        <Heading fontSize={{ base: "1.5xl", md: "2xl" }} mb={3}>
          Open Positions
        </Heading>

        {/* Accent underline */}
        <Box w="60px" h="2px" bg="blue.800" mb={10} />

        {/* =========================
            TABLE HEADER (DESKTOP)
        ========================= */}
        <Grid
          templateColumns="2.5fr 1.5fr 1.5fr 1.5fr auto"
          bg="gray.800"
          color="white"
          px={6}
          py={4}
          fontSize="sm"
          fontWeight="bold"
          textTransform="uppercase"
          display={{ base: "none", md: "grid" }}
        >
          <Text>Job Position</Text>
          <Text>Location</Text>
          <Text>Department</Text>
          <Text>Closing Date</Text>
          <Box />
        </Grid>

        {/* =========================
            JOB ROWS
        ========================= */}
        <Stack gap={0}>
          {jobs.map((job, index) => {
            const isOpen = activeId === job.id;

            return (
              <Box key={job.id}>
                {/* -------- ROW HEADER -------- */}
                <Grid
                  templateColumns={{
                    base: "1fr auto",
                    md: "2.5fr 1.5fr 1.5fr 1.5fr auto",
                  }}
                  px={6}
                  py={5}
                  alignItems="center"
                  bg={index % 2 === 0 ? "gray.100" : "white"}
                  cursor="pointer"
                  _hover={{ bg: "gray.200" }}
                  onClick={() => toggleRow(job.id)}
                >
                  {/* Position */}
                  <Text fontWeight="semibold">{job.position}</Text>

                  {/* Desktop-only columns */}
                  <Text display={{ base: "none", md: "block" }}>
                    {job.location}
                  </Text>
                  <Text display={{ base: "none", md: "block" }}>
                    {job.department}
                  </Text>
                  <Text display={{ base: "none", md: "block" }}>
                    {job.closing}
                  </Text>

                  {/* Chevron Icon */}
                  <MotionBox
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {/* 🔽 REPLACE SRC WITH YOUR ICON IMAGE */}
                    <Image
                      src="/icons/ic1.png"
                      alt="Toggle"
                      w="16px"
                    />
                  </MotionBox>
                </Grid>

                {/* -------- MOBILE META -------- */}
                <Box
                  px={6}
                  pb={4}
                  display={{ base: "block", md: "none" }}
                  color="gray.600"
                  fontSize="sm"
                >
                  <Text>{job.location}</Text>
                  <Text>{job.department}</Text>
                  <Text>Closing: {job.closing}</Text>
                </Box>

                {/* -------- EXPANDABLE PANEL -------- */}
                <AnimatePresence>
                  {isOpen && (
                    <MotionBox
                      variants={panelVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      overflow="hidden"
                      bg="gray.50"
                    >
                      <Grid
                        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                        gap={10}
                        px={8}
                        py={8}
                      >
                        {/* Requirements */}
                        <Box>
                          <Text fontWeight="bold" mb={3}>
                            Job Requirements
                          </Text>
                          <Stack gap={2} color="gray.700">
                            {job.requirements.map((item, i) => (
                              <Text key={i}>• {item}</Text>
                            ))}
                          </Stack>
                        </Box>

                        {/* Scope */}
                        <Box>
                          <Text fontWeight="bold" mb={3}>
                            Job Scope
                          </Text>
                          <Stack gap={2} color="gray.700">
                            {job.scope.map((item, i) => (
                              <Text key={i}>• {item}</Text>
                            ))}
                          </Stack>
                        </Box>
                      </Grid>
                    </MotionBox>
                  )}
                </AnimatePresence>
              </Box>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
}
