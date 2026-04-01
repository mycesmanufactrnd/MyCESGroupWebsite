"use client";

import { Box, Flex, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function AircondHero() {
  // Responsive adjustments
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      position="relative"
      h={{ base: "70vh", md: "90vh" }}
      overflow="hidden"
      // Background image with parallax effect
      bgImage="url('/homepage/1.jpg')" // Replace with your professional image
      bgSize="cover"
      bgPos="center"
      bgAttachment={isMobile ? "scroll" : "fixed"} // Fixed for desktop, scroll for mobile
    >
      {/* =================== OVERLAY =================== */}
      {/* Added gradient + dark overlay for text contrast */}
      <Box
        position="absolute"
        inset={0}
        bg="linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.2))"
        backdropFilter="blur(4px)" // slightly blurred for frosted effect
        zIndex={1}
      />

      {/* =================== CONTENT =================== */}
      <Flex
        position="relative"
        zIndex={2}
        h="100%"
        px={{ base: 6, md: 20 }}
        py={{ base: 12, md: 0 }}
        align="center"
        justify="space-between"
        direction={{ base: "column", md: "row" }}
        gap={{ base: 8, md: 0 }}
      >
        {/* =================== LEFT SIDE: COMPANY TITLE =================== */}
        <MotionBox
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Heading
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="bold"
            color="white" // Changed to white for contrast
            lineHeight={1.2}
            textShadow="2px 2px 6px rgba(0,0,0,0.7)" // Added text shadow for readability
          >
            MyCES Academy Services <br />Sdn Bhd
          </Heading>
        </MotionBox>

        {/* =================== RIGHT SIDE: DESCRIPTION =================== */}
        <MotionBox
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          maxW={{ base: "90%", md: "600px" }}
        >
          <Text
            fontSize={{ base: "md", md: "lg" }}
            fontWeight="medium"
            color="white" // Changed to white for contrast
            lineHeight={1.7}
            textShadow="1px 1px 4px rgba(0,0,0,0.6)" // Added text shadow for readability
          >
            MyCES Academy Sdn. Bhd. is a{" "}
            <b>leading training and education provider</b> specializing in hands-on, industry-relevant engineering and STEM programs. As a dedicated arm of MyCES Group, we focus on delivering practical learning experiences such as <b>Coding Classes</b>, <b>Robotics & IoT Training</b>, and <b>PCB Design & Manufacturing</b> to bridge the gap between academic knowledge and real-world application. By combining experiential learning with industry exposure, we empower future innovators to become <b>skilled, confident, and future-ready</b> in a rapidly evolving technological landscape.
          </Text>
        </MotionBox>
      </Flex>
    </Box>
  );
}