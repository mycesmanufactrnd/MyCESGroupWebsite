"use client";

import { Box, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

export default function ProfessionalHero() {
  return (
    <Box
      w="full"
      position="relative"
      minH={{ base: "420px", md: "520px" }}
      bgImage="url('/professional/1.jpg')"
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
      display="flex"
      alignItems="center"
    >
      {/* Dark overlay for readability */}
      <Box
        position="absolute"
        inset={0}
        bg="rgba(0,0,0,0.45)" // ✅ darker overlay
        zIndex={0}
      />

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
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"       // ✅ bolder heading
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
          Professional
        </MotionHeading>

        {/* Description */}
        <MotionText
          fontSize={{ base: "md", md: "lg" }}
          fontWeight="semibold"          // ✅ slightly bolder
          color="white"
          lineHeight="1.8"
          textShadow="1px 1px 4px rgba(70, 70, 70, 0.5)" // subtle shadow
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.9, ease: "easeOut" },
            },
          }}
        >
          At MYCES Group, we nurture skilled professionals passionate about engineering, energy management, and digital solutions. Our team works on innovative projects that enhance efficiency, sustainability, and technology, while providing opportunities for growth and career development.        </MotionText>
      </MotionBox>
    </Box>
  );
}
