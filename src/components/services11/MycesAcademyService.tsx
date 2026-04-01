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

export default function MycesAcademyService() {
  return (
    <Box bg="white" px={{ base: 6, md: 20 }} py={{ base: 16, md: 24 }}>
      {/* ===== SECTION HEADER ===== */}
      <MotionStack
        gap={6}
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
            color="#1e4b16"
          >
            Get To Know Us
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
        <Stack gap={6}>
          <MotionBox variants={itemVariant}>
            <Text
              fontSize={{ base: "md", md: "md" }}
              color="gray.600"
              lineHeight="2"
            >
              MYCES Academy Sdn. Bhd. is a technology-focused education and
              training provider committed to developing skilled and future-ready
              talents. The company operates across three main areas:
            </Text>
          </MotionBox>

          <MotionBox variants={itemVariant}>
            <Text
              fontSize={{ base: "md", md: "md" }}
              color="gray.600"
              lineHeight="2"
            >
              1. Electronic Components and Tools Supply
            </Text>
          </MotionBox>

          <MotionBox variants={itemVariant}>
            <Text
              fontSize={{ base: "md", md: "md" }}
              color="gray.600"
              lineHeight="2"
            >
              2. Coding Classes and Technical Training
            </Text>
          </MotionBox>

          <MotionBox variants={itemVariant}>
            <Text
              fontSize={{ base: "md", md: "md" }}
              color="gray.600"
              lineHeight="2"
            >
              3. Training Provider for Diverse Industries
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
      <Grid templateColumns="1fr" gap={14}>
        {/* MISSION */}
        <MotionBox
          variants={itemVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Stack gap={4}>
            <Heading fontSize={{ base: "lg", md: "lg" }} color="#163F2D">
              Our Vision
            </Heading>
            <Text
              fontSize={{ base: "md", md: "md" }}
              color="gray.600"
              lineHeight="2"
            >
              To be a leading provider of technology education, technical
              training, and professional development, empowering individuals and
              industries with practical skills and innovative solutions.{" "}
            </Text>
          </Stack>
        </MotionBox>

        {/* ===== DIVIDER ===== */}
        <Box h="1px" bg="gray.200" my={1} />

        {/* VISION */}
        <MotionBox
          variants={itemVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Stack gap={4}>
            <Heading fontSize={{ base: "lg", md: "lg" }} color="#163F2D">
              Our Mission
            </Heading>
            <Text
              fontSize={{ base: "md", md: "md" }}
              color="gray.600"
              lineHeight="2"
            >
              1. To provide high-quality coding, technical, and professional
              training through hands-on, practical learning.
            </Text>
            <Text
              fontSize={{ base: "md", md: "md" }}
              color="gray.600"
              lineHeight="2"
            >
              2. To deliver industry-relevant and HRD Corp-accredited training
              programs for diverse sectors.
            </Text>
            <Text
              fontSize={{ base: "md", md: "md" }}
              color="gray.600"
              lineHeight="2"
            >
              3. To supply reliable electronic components, tools, and learning
              kits to support education, innovation, and industry applications.
            </Text>
            <Text
              fontSize={{ base: "md", md: "md" }}
              color="gray.600"
              lineHeight="2"
            >
              4. To continuously update and expand training content in line with
              technological and industrial advancements.
            </Text>
            <Text
              fontSize={{ base: "md", md: "md" }}
              color="gray.600"
              lineHeight="2"
            >
              5. To nurture creativity, technical competence, and
              problem-solving skills in learners of all levels.
            </Text>
          </Stack>
        </MotionBox>
      </Grid>
    </Box>
  );
}
