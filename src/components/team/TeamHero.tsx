"use client";

import { Box, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function TeamHero() {
  return (
    <MotionBox
      position="relative"
      w="full"
      minH={{ base: "620px", md: "750px" }}
      overflow="hidden"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgImage="url('/team/te2.jpg')"
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
    >
      {/* Dark overlay to make text readable */}
      <MotionBox
        position="absolute"
        inset={0}
        bg="rgba(0,0,0,0.45)" // dark overlay for contrast
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        zIndex={0}
      />

      {/* Content */}
      <Box
        position="relative"
        zIndex={1}
        maxW="900px"
        textAlign="center"
        px={{ base: 6, md: 20 }}
        py={{ base: 24, md: 36 }}
      >
        {/* Heading */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Heading
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="extrabold"
            color="white"
            mb={6}
            textShadow="2px 2px 6px rgba(0,0,0,0.6)"
          >
            Board & Leadership
          </Heading>
        </MotionBox>

        {/* Description */}
        <MotionBox
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Text
            fontSize={{ base: "md", md: "lg" }}
            fontWeight="semibold"
            color="white"
            lineHeight="1.9"
            textShadow="1px 1px 4px rgba(0,0,0,0.5)"
          >
            At MyCES Group, our team management philosophy emphasizes strong
            communication, seamless collaboration, and visionary leadership. We
            believe that empowered teams drive innovation, operational
            excellence, and long-term sustainable growth.
          </Text>
        </MotionBox>
      </Box>
    </MotionBox>
  );
}
