"use client";

import { Box, Grid, Heading, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function DigitalSystemFeature() {
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
              fontSize={{ base: "1.5xl", md: "3xl" }}
              fontWeight="bold"
              color="#0F2A1D" // deep forest green
              mb={6}
            >
              Digital System
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="#1F2A1D"
              lineHeight="1.9"
            >
              MyCES Manufacturing Sdn Bhd offers an integrated digital solution combining E-MARS and FMS to optimize building performance.
              Using IoT devices like the MyCES D-Logger, it monitors energy consumption, load profiles, and TNB tariffs in real time.
              Maintenance is streamlined through automated Planned Preventive Maintenance (PPM) and asset tracking.
              The system replaces manual processes with data-driven insights, enhancing efficiency and asset visibility.
              Professional reporting templates are included, suitable for formal energy audits.
            </Text>
          </Box>

          {/* RIGHT — Image */}
          <Box>
            <Image
              src="/dsservice/1.jpg"
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
