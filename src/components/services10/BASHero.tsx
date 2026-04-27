"use client";

import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const MotionBox = motion(Box);

export default function OurStorySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Box
      w="full"
      position="relative"
      minH={{ base: "70vh", md: "90vh" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgImage="url('/portfolio/p15.jpg')"
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
      bgAttachment={{ base: "scroll", md: "fixed" }} // FIX mobile issue
    >
      {/* Overlay */}
      <Box position="absolute" inset={0} bg="rgba(0,0,0,0.5)" zIndex={0} />

      {/* Content */}
      <MotionBox
        ref={ref}
        position="relative"
        zIndex={1}
        maxW="800px"
        textAlign="left"
        px={{ base: 6, md: 12 }}
        py={{ base: 20, md: 32 }}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Heading
          fontFamily="heading"
          fontSize={{ base: "2xl", md: "4xl" }}
          fontWeight="extrabold"
          color="white"
          mb={6}
          lineHeight="1.3"
        >
          MyCES Power Solution
        </Heading>
      </MotionBox>
    </Box>
  );
}
