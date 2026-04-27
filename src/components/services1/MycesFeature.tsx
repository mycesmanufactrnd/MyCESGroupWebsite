"use client";

import { Box, Grid, Heading, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function MycesFeature() {
  return (
    <Box
      w="full"
      bg="#CED5CC"
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
              color="#0F2A1D"
              mb={4}
            >
              Engineering Solutions
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="#1F2A1D"
              lineHeight="1.9"
            >
              MYCES (Malaysia Comprehensive Energy Solution) Sdn Bhd delivers
              integrated energy and engineering solutions to help organizations
              reduce costs, improve efficiency, and support sustainability. Our
              services include Energy Audit, Monitoring Systems, Smart
              Automation, Training, Equipment Rental, and Sustainable Energy
              Management Systems (SEMS), providing a complete approach to modern
              energy management.
            </Text>
          </Box>

          {/* RIGHT — Image */}
          <Box>
            <Image
              src="/backgrounds/eng1.png"
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
