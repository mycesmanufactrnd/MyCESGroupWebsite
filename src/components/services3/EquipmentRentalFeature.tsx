"use client";

import { Box, Grid, Heading, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function EquipmentRentalFeature() {
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
              Equipment Rental
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="#1F2A1D"
              lineHeight="1.9"
            >
              MyCES provides a variety of high-quality equipment for rent to support the maintenance and operational needs of various organizations. This service is particularly beneficial for businesses looking to conduct their own measurements or audits without the significant upfront cost of purchasing specialized tools. The rental service often includes expert consultation to ensure clients select the right tools for their specific energy or facility management tasks.
            </Text>
          </Box>

          {/* RIGHT — Image */}
          <Box>
            <Image
              src="/erservice/2.jpg"
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