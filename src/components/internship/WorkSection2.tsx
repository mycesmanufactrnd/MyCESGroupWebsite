"use client";

import { Box, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function WorkSection2() {
  return (
    <Box
      w="full"
      bg="gray.100"
      py={{ base: 17, md: 28 }}

      // ⬇️ SECTION SIDE PADDING
      // Increase md value to move everything away from edges
      // Decrease md value to allow content closer to edges
      px={{ base: 6, md: 16 }}
    >
      <Box
        maxW="1500px" // ⬅️ MAIN CONTENT WIDTH (increase = wider text span)
        mx="auto"
      >
        {/* TEXT CONTENT */}
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Heading
            fontSize={{ base: "1.5xl", md: "2xl" }}
            fontWeight="bold"
            color="black"
            mb={6}

            // ⬇️ KEEP HEADING LEFT, BUT CONTROL ITS START POSITION
            // Increase this to move heading inward
            // Remove to align exactly with container
            pl={{ base: 0, md: 0 }}
          >
            Work With Us
          </Heading>

          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.700"
            lineHeight="1.3"

            // ⬇️ DESCRIPTION WIDTH CONTROL
            // Increase to stretch text nearer right edge
            // Reduce for tighter, editorial feel
            maxW="2200px"
          >
            Our internship program provides a collaborative learning environment where interns are guided by experienced mentors.

            <br /><br />

            Interns actively contribute to meaningful projects, participate in team discussions, and learn from cross-functional experts, preparing them for a successful career in engineering, energy, and technology sectors.
          </Text>
        </MotionBox>
      </Box>
    </Box>
  );
}
