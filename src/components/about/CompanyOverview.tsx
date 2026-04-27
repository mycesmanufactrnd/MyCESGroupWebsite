"use client";

import { Box, Heading, Text, Stack, Grid, Container } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";

const MotionBox = motion(Box);
const MotionStack = motion(Stack);

/* ===== ANIMATION ===== */
const containerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function CompanyOverview() {
  return (
    <Box bg="gray.50" py={{ base: 20, md: 28 }}>
      <Container maxW="6xl">
        {/* ===== HEADER ===== */}
        <MotionStack
          gap={5}
          maxW="2xl"
          mb={{ base: 14, md: 20 }}
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Accent line */}
          <MotionBox
            variants={itemVariant}
            w="60px"
            h="3px"
            bg="#1B4D2E"
            borderRadius="full"
          />

          <MotionBox variants={itemVariant}>
            <Heading
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="extrabold"
              color="#1B4D2E"
              letterSpacing="-0.02em"
            >
              Who We Are
            </Heading>
          </MotionBox>

          <MotionBox variants={itemVariant}>
            <Text
              color="gray.600"
              lineHeight="1.9"
              fontSize={{ base: "sm", md: "md" }}
            >
              MyCES Group delivers integrated engineering, energy,
              manufacturing, and technology solutions through specialized
              subsidiaries.
              <br />
              We drive performance, reduce costs, and support long-term
              sustainability through practical expertise.
            </Text>
          </MotionBox>
        </MotionStack>

        {/* ===== VISION & MISSION ===== */}
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={{ base: 8, md: 12 }}
        >
          {/* ===== VISION CARD ===== */}
          <MotionBox
            variants={itemVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            bg="white"
            p={{ base: 6, md: 8 }}
            borderRadius="2xl"
            boxShadow="md"
            _hover={{
              transform: "translateY(-4px)",
              boxShadow: "lg",
            }}
          >
            <Stack gap={4}>
              <Heading fontSize="lg" fontWeight="bold" color="#1B4D2E">
                Our Vision
              </Heading>

              <Text color="gray.600" lineHeight="1.9">
                To be a leading engineering and services group recognized for
                innovation, sustainability, and excellence in delivering
                impactful solutions that empower industries and communities.
              </Text>
            </Stack>
          </MotionBox>

          {/* ===== MISSION CARD ===== */}
          <MotionBox
            variants={itemVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            bg="white"
            p={{ base: 6, md: 8 }}
            borderRadius="2xl"
            boxShadow="md"
            _hover={{
              transform: "translateY(-4px)",
              boxShadow: "lg",
            }}
          >
            <Stack gap={4}>
              <Heading fontSize="lg" fontWeight="bold" color="#1B4D2E">
                Our Mission
              </Heading>

              <Stack gap={2}>
                {[
                  "Deliver bold, reliable engineering solutions.",
                  "Power sustainability and energy efficiency.",
                  "Maximize value through excellence.",
                  "Advance through technology and talent.",
                  "Forge strong, lasting partnerships.",
                ].map((item, idx) => (
                  <Text key={idx} color="gray.600" lineHeight="1.8">
                    • {item}
                  </Text>
                ))}
              </Stack>
            </Stack>
          </MotionBox>
        </Grid>
      </Container>
    </Box>
  );
}
