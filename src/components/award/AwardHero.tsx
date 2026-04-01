"use client";

import { Box, Heading, Text } from "@chakra-ui/react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const MotionBox = motion(Box);

export default function AwardHero() {
  // Scroll hooks for subtle movement
  const { scrollY } = useViewportScroll();
  const yTransform = useTransform(scrollY, [0, 300], [0, -50]); // moves up on scroll

  return (
    <Box
      w="full"
      position="relative"
      minH={{ base: "520px", md: "650px" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgImage="url('/backgrounds/cert2.jpg')" // change to your award hero image
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
      bgAttachment="fixed" // static background
    >
      {/* Overlay for better text readability */}
      <Box
        position="absolute"
        inset={0}
        bg="rgba(67, 66, 66, 0.23)"
        zIndex={0}
      />

      {/* Hero content */}
      <MotionBox
        position="relative"
        zIndex={1}
        maxW="900px"
        textAlign="center"
        px={{ base: 6, md: 20 }}
        py={{ base: 24, md: 36 }}
        style={{ y: yTransform }} // scroll effect
        initial={{ opacity: 0, y: 30 }} // entrance animation
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Heading
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"
          color="white"
          mb={4}
        >
          Our Professional Certificates
        </Heading>

        <Text
          fontSize={{ base: "md", md: "lg" }}
          color="white"
          lineHeight="1.8"
          mb={8}
        >
          MyCES Group takes pride in delivering excellence. Explore our awards
          and recognitions that reflect our commitment to innovation,
          sustainability, and outstanding performance in the energy efficiency
          industry.
        </Text>
      </MotionBox>
    </Box>
  );
}
