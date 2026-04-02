"use client";

import { Box, Heading } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MotionBox = motion(Box);

export default function AcademyHero() {
  const ref = useRef(null);

  // Track scroll progress relative to hero section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Animate content on scroll
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.6, 0]);

  return (
    <Box
      ref={ref}
      w="full"
      position="relative"
      h={{ base: "550px", md: "650px" }}
      bgImage="url('/academyservice/1.jpg')"
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
      bgAttachment="fixed" // 🔥 background stays static
    >
      {/* Dark Gradient Overlay for Contrast */}
      <Box
        position="absolute"
        inset={0}
        bg="linear-gradient(
          to bottom,
          rgba(0,0,0,0.45),
          rgba(0,0,0,0.65)
        )"
        zIndex={1}
      />

      {/* CONTENT */}
      <MotionBox
        position="relative"
        zIndex={2}
        maxW="1400px"
        mx="auto"
        h="full"
        px={{ base: 6, md: 20 }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        style={{ y, opacity }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Heading
          textAlign="center"
          fontSize={{ base: "2xl", md: "4xl" }}
          fontWeight="bold"
          color="white" // 🔥 strong contrast
          lineHeight="1.3"
          textShadow="0 6px 24px rgba(0,0,0,0.45)" // professional readability
        >
          Welcome to MyCES Academy
        </Heading>
      </MotionBox>
    </Box>
  );
}
