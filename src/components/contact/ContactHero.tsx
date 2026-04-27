"use client";

import { Box, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function ContactHero() {
  return (
    <MotionBox
      w="full"
      position="relative"
      minH={{ base: "70vh", md: "90vh" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgImage="url('/contact/1.jpg')"
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
    >
      {/* Dark overlay for readability */}
      <Box
        position="absolute"
        inset={0}
        bg="rgba(0,0,0,0.45)" // darker overlay
        zIndex={0}
      />

      {/* Content */}
      <MotionBox
        position="relative"
        zIndex={1}
        maxW="900px"
        textAlign="center"
        px={{ base: 6, md: 20 }}
        py={{ base: 24, md: 36 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Heading
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="bold" // bolder heading
          color="white" // contrasts overlay
          mb={6}
          textShadow="2px 2px 6px rgba(62, 62, 62, 0.7)" // subtle shadow
        >
          Contact Us
        </Heading>
      </MotionBox>
    </MotionBox>
  );
}
