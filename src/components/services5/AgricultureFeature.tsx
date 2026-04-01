"use client";

import { Box, Grid, Heading, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function AgricultureFeature() {
  return (
    <Box
      w="full"
      bg="#CED5CC" // pale sage green
      py={{ base: 20, md: 28 }}
      px={{ base: 6, md: 20 }}
    >
      <MotionBox
        maxW="1200px"
        mx="auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Grid
          templateColumns={{ base: "1fr", md: "45% 55%" }}
          gap={{ base: 10, md: 16 }}
          alignItems="center"
        >
          {/* LEFT — Text Content */}
          <Box>
            <Heading
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="bold"
              color="#0F2A1D" // deep forest green
              mb={4}
            >
              Energy Audit
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="#1F2A1D"
              lineHeight="1.9"
            >
              Our Energy Audit system provides real-time insights and comprehensive
              reports to optimize operational efficiency. Utilizing our proprietary
              innovation, <strong>MYCES EMARS</strong>, we empower businesses to
              monitor energy usage, identify inefficiencies, and implement
              actionable strategies that enhance sustainability and reduce costs.
            </Text>
          </Box>

          {/* RIGHT — Image */}
          <Box>
            <Image
              src="/services/energy-audit-team.jpg"
              alt="Team reviewing energy audit charts"
              borderRadius="2xl"
              w="full"
              h={{ base: "220px", md: "360px" }}
              objectFit="cover"
              boxShadow="md"
            />
          </Box>
        </Grid>
      </MotionBox>
    </Box>
  );
}
