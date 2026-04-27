"use client";

import { Box, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

export default function PortfolioHero() {
  return (
    <Box
      w="full"
      position="relative"
      minH={{ base: "70vh", md: "90vh" }}
      bgImage="url('/portfolio/2.png')"
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
      display="flex"
      alignItems="center"
    >
      <Box position="absolute" inset={0} bg="rgba(0,0,0,0.45)" zIndex={0} />

      {/* Content */}
      <MotionBox
        position="relative"
        zIndex={1}
        maxW="900px"
        mx="auto"
        py={{ base: 28, md: 36 }}
        px={{ base: 6, md: 20 }}
        textAlign="center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.25 } },
        }}
      >
        {/* Heading */}
        <MotionHeading
          fontFamily={"heading"}
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bold" // ✅ bolder heading
          color="white"
          mb={6}
          textShadow="2px 2px 6px rgba(66, 66, 66, 0.7)" // subtle shadow
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
        >
          Portfolio
        </MotionHeading>
      </MotionBox>
    </Box>
  );
}
