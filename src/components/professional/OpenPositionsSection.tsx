"use client";

import { Box, Heading, Text, Grid, Stack } from "@chakra-ui/react";
import { motion, AnimatePresence, easeOut, easeIn } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const MotionBox = motion(Box);

/* =========================
   MOTION VARIANTS
========================= */
const expandPanel = {
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

/* =========================
   JOB DATA
========================= */
const jobs = [
  {
    id: 1,
    position: "Energy Engineer",
    location: "HQ Office",
    department: "Engineering",
    requirements: [
      "Diploma or Bachelor's degree in Engineering or related field.",
      "Able to work independently and in a team.",
      "Willing to travel for site work.",
      "Proficient in Microsoft Excel and reporting.",
    ],
    scope: [
      "Support energy audit data collection and analysis.",
      "Assist in site inspections and monitoring.",
      "Operate energy logging equipment.",
      "Prepare reports with charts and summaries.",
    ],
  },
  {
    id: 2,
    position: "Business Developer",
    location: "HQ Office",
    department: "Operation",
    requirements: [
      "Degree in Business, Marketing, or related field.",
      "1–2 years experience in sales or BD.",
      "Strong communication and negotiation skills.",
    ],
    scope: [
      "Identify new business opportunities.",
      "Prepare proposals and presentations.",
      "Support client engagement activities.",
      "Maintain client database and reports.",
    ],
  },
  {
    id: 3,
    position: "Accountant",
    location: "HQ Office",
    department: "Finance",
    requirements: [
      "Diploma, LCCI, or Bachelor's Degree in Finance, Accounting, or a related field.",
      "2–5 years of experience as an Account Executive or in a similar role.",
      "Proficient in MS Excel, including data sorting and analysis.",
      "Strong administrative, organizational, and problem-solving skills.",
      "Excellent analytical and numerical abilities.",
      "Ability to multitask, work in a fast-paced environment, and meet deadlines.",
    ],

    scope: [
      "Handle full set of accounts and oversee month-end closing activities for MyCES and its subsidiaries.",
      "Manage tax planning, submissions, and ensure compliance with statutory requirements.",
      "Prepare monthly, quarterly, and annual financial reports and statements.",
      "Ensure accuracy of daily financial transactions recorded in the SQL system.",
      "Verify and process payments in a timely and accurate manner.",
      "Prepare audit schedules and support internal and external audit processes.",
      "Perform bank reconciliations and maintain updated bank records.",
      "Maintain and update the fixed assets register.",
      "Liaise with auditors and tax agents for timely statutory reporting.",
      "Maintain proper accounting records and organized filing systems.",
      "Take accountability for assigned financial tasks and report directly to the CFO.",
    ],
  },
];

/* =========================
   MAIN COMPONENT
========================= */
export default function OpenPositionsSection() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleJob = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <Box w="full" py={{ base: 16, md: 24 }} px={{ base: 4, md: 16 }} bg="white">
      <Box maxW="1200px" mx="auto">
        {/* HEADER */}
        <Heading fontSize={{ base: "2xl", md: "3xl" }} mb={2}>
          Open Positions
        </Heading>

        <Box w="60px" h="2px" bg="green.700" mb={10} />

        {/* ================= DESKTOP HEADER ================= */}
        <Grid
          templateColumns="2.5fr 1.5fr 1.5fr 1fr"
          bg="gray.800"
          color="white"
          px={6}
          py={4}
          fontSize="sm"
          fontWeight="bold"
          textTransform="uppercase"
          display={{ base: "none", md: "grid" }}
        >
          <Text>Position</Text>
          <Text>Location</Text>
          <Text>Department</Text>
          <Text>Action</Text>
        </Grid>

        {/* ================= JOB LIST ================= */}
        <Stack gap={0}>
          {jobs.map((job, index) => {
            const isOpen = activeId === job.id;

            return (
              <Box key={job.id} borderBottom="1px solid #eee">
                {/* ================= ROW ================= */}
                <Grid
                  as="button"
                  onClick={() => toggleJob(job.id)}
                  templateColumns={{
                    base: "1fr auto", // MOBILE: simple clean layout
                    md: "2.5fr 1.5fr 1.5fr 1fr",
                  }}
                  px={6}
                  py={5}
                  alignItems="center"
                  bg={index % 2 === 0 ? "gray.50" : "white"}
                  _hover={{ bg: "gray.100" }}
                  w="full"
                  textAlign="left"
                >
                  {/* POSITION */}
                  <Text fontWeight="600">{job.position}</Text>

                  {/* MOBILE: APPLY + ICON STACK */}
                  <Box
                    display={{ base: "flex", md: "none" }}
                    gap={2}
                    alignItems="center"
                  >
                    <Link
                      href="/cvprofessional"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Box
                        bg="green.700"
                        color="white"
                        px={4}
                        py={1.5}
                        fontSize="sm"
                        borderRadius="full"
                        whiteSpace="nowrap"
                        _hover={{ bg: "green.800" }}
                      >
                        Apply
                      </Box>
                    </Link>
                  </Box>

                  {/* DESKTOP LOCATION */}
                  <Text
                    display={{ base: "none", md: "block" }}
                    color="gray.600"
                  >
                    {job.location}
                  </Text>

                  {/* DESKTOP DEPARTMENT */}
                  <Text
                    display={{ base: "none", md: "block" }}
                    color="gray.600"
                  >
                    {job.department}
                  </Text>

                  {/* DESKTOP APPLY */}
                  <Box display={{ base: "none", md: "block" }}>
                    <Link
                      href="/cvprofessional"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Box
                        display="inline-block"
                        bg="green.700"
                        color="white"
                        px={5}
                        py={2}
                        fontSize="sm"
                        borderRadius="full"
                        _hover={{ bg: "green.800", transform: "scale(1.05)" }}
                        transition="0.2s"
                      >
                        Apply
                      </Box>
                    </Link>
                  </Box>
                </Grid>

                {/* ================= EXPAND PANEL ================= */}
                <AnimatePresence>
                  {isOpen && (
                    <MotionBox
                      variants={expandPanel}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      overflow="hidden"
                      bg="gray.50"
                    >
                      <Box px={8} py={6}>
                        {/* MOBILE DETAILS */}
                        <Box display={{ base: "block", md: "none" }} mb={4}>
                          <Text color="gray.600">Location: {job.location}</Text>
                          <Text color="gray.600">
                            Department: {job.department}
                          </Text>
                        </Box>

                        {/* REQUIREMENTS */}
                        <Box mb={6}>
                          <Text fontWeight="bold" mb={2}>
                            Requirements
                          </Text>
                          <Stack gap={1} color="gray.700">
                            {job.requirements.map((item, i) => (
                              <Text key={i}>• {item}</Text>
                            ))}
                          </Stack>
                        </Box>

                        {/* SCOPE */}
                        <Box>
                          <Text fontWeight="bold" mb={2}>
                            Job Scope
                          </Text>
                          <Stack gap={1} color="gray.700">
                            {job.scope.map((item, i) => (
                              <Text key={i}>• {item}</Text>
                            ))}
                          </Stack>
                        </Box>
                      </Box>
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
