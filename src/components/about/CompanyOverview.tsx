"use client";

import { Box, Heading, Text, Stack, Grid } from "@chakra-ui/react";
import { motion } from "framer-motion";

/* Motion wrappers */
const MotionBox = motion(Box);
const MotionStack = motion(Stack);

/* Animation variants */
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1], // professional easing
    },
  },
};

export default function CompanyOverview() {
  return (
    <Box bg="white" px={{ base: 6, md: 20 }} py={{ base: 16, md: 24 }}>
      {/* ===== SECTION HEADER ===== */}
      <MotionStack
        spacing={6}
        maxW="4xl"
        mb={16}
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <MotionBox variants={itemVariant}>
          <Heading
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="bold"
            color="#0F2A1D"
          >
            Company Overview
          </Heading>
        </MotionBox>
      </MotionStack>

      {/* ===== WHO WE ARE ===== */}
      <MotionBox
        w="100%"
        mb={20}
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Stack spacing={6}>
          <MotionBox variants={itemVariant}>
            <Heading fontSize={{ base: "xl", md: "xl" }} color="#163F2D">
              Who We Are
            </Heading>
          </MotionBox>

          <MotionBox variants={itemVariant}>
            <Text
              fontSize={{ base: "md", md: "md" }}
              color="gray.600"
              lineHeight="2"
            >
              MyCES Group is a multidisciplinary engineering and services group
              committed to delivering innovative, reliable, and sustainable
              solutions across various industries. Through our network of
              specialized subsidiaries, we provide integrated services that
              support infrastructure development, energy efficiency, engineering
              excellence, and technology-driven growth. With a strong focus on
              quality, safety, and efficiency, MyCES Group combines technical
              expertise with practical experience to meet the evolving needs of
              commercial, industrial, and institutional clients. Our services
              range from engineering and construction support to facility
              management, energy auditing, education technology, manufacturing,
              and agro-based solutions.
            </Text>
          </MotionBox>

          <MotionBox variants={itemVariant}>
            <Text
              fontSize={{ base: "md", md: "md" }}
              color="gray.600"
              lineHeight="2"
            >
              Driven by professionalism and continuous improvement, MyCES Group
              strives to be a trusted partner by delivering solutions that
              enhance operational performance, reduce costs, and promote
              long-term sustainability.
            </Text>
          </MotionBox>
        </Stack>
      </MotionBox>

      {/* ===== DIVIDER ===== */}
      <Box h="1px" bg="gray.200" my={16} />

      {/* ===== MISSION & VISION ===== */}
      <Grid templateColumns="1fr" spacing={14}>
        {/* VISION */}
        <MotionBox
          variants={itemVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Stack spacingcing={4}>
            <Heading fontSize={{ base: "lg", md: "lg" }} color="#163F2D">
              Our Vision
            </Heading>
            <Text
              fontSize={{ base: "md", md: "md" }}
              color="gray.600"
              lineHeight="2"
            >
              To be a leading multidisciplinary engineering and services group,
              recognized for innovation, sustainability, and excellence in
              delivering integrated solutions that empower industries and
              communities.
            </Text>
          </Stack>
        </MotionBox>

        {/* ===== DIVIDER ===== */}
        <Box h="1px" bg="gray.200" my={1} />

        {/* MISSION */}
        <MotionBox
          variants={itemVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Stack spacing={4}>
            <Heading fontSize={{ base: "lg", md: "lg" }} color="#163F2D">
              Our Mission
            </Heading>
            <Text
              fontSize={{ base: "md", md: "md" }}
              color="gray.600"
              lineHeight="2"
            >
              1. Deliver innovative and reliable solutions across engineering,
              energy, manufacturing, education technology, and agro-based
              sectors.
            </Text>
            <Text
              fontSize={{ base: "md", md: "md" }}
              color="gray.600"
              lineHeight="2"
            >
              2. Promote energy efficiency and sustainability in every project
              we undertake.
            </Text>
            <Text
              fontSize={{ base: "md", md: "md" }}
              color="gray.600"
              lineHeight="2"
            >
              3. Enhance client value and satisfaction through quality, safety,
              and professional excellence.
            </Text>
            <Text
              fontSize={{ base: "md", md: "md" }}
              color="gray.600"
              lineHeight="2"
            >
              4. Invest in technology, talent, and continuous improvement to
              remain at the forefront of industry advancements.
            </Text>
            <Text
              fontSize={{ base: "md", md: "md" }}
              color="gray.600"
              lineHeight="2"
            >
              5. Foster strong partnerships and community development,
              contributing to long-term growth and positive impact.
            </Text>
          </Stack>
        </MotionBox>
      </Grid>
    </Box>
  );
}
