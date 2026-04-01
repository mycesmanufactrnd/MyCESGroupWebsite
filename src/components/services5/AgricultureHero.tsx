"use client";

import { Box, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function AgricultureHero() {
  return (
    <Box w="full" position="relative" h={{ base: "550px", md: "650px" }}>
      {/* BACKGROUND VIDEO */}
      <video
        src="/backgrounds/vs1.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      />

      {/* Light Overlay */}
      <Box
        position="absolute"
        inset={0}
        bg="rgba(221, 221, 221, 0.37)"
        zIndex={1}
      />

      {/* CENTERED CONTENT */}
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
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Heading
          textAlign="center"
          fontSize={{ base: "2xl", md: "4xl" }}
          fontWeight="bold"
          color="black"
          lineHeight="1.3"
        >
          Welcome to MyCES Agriculture Service
        </Heading>
      </MotionBox>
    </Box>
  );
}
