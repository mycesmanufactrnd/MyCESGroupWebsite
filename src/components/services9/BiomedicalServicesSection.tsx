"use client";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const darkGreen = "#0B5D3B";

const services = [
  {
    title: "Service Maintenance (BEMS)",
    description:
      "Comprehensive planned maintenance programs designed to ensure medical equipment remains reliable, safe, and operational.",
  },
  {
    title: "Medical Equipment Supply",
    description:
      "The procurement and delivery of high-quality medical devices and healthcare-related supplies to medical facilities.",
  },
  {
    title: "Spare Parts Provision",
    description:
      "Supplying genuine and compatible replacement parts to minimize downtime for critical medical machinery and equipment.",
  },
  {
    title: "Repair and Troubleshooting",
    description:
      "Expert technical diagnosis and repair services to restore malfunctioning medical equipment to full clinical functionality.",
  },
  {
    title: "Equipment Rental Services",
    description:
      "Flexible rental options for organizations requiring medical testing tools or healthcare equipment on a temporary basis.",
  },
  {
    title: "Testing and Commissioning",
    description:
      "The formal process of verifying that new medical equipment meets all safety standards and manufacturer specifications before use.",
  },
];

export default function BiomedicalServicesSection() {
  return (
    <Box
      position="relative"
      py={{ base: 20, md: 28 }}
      px={{ base: 6, md: 20 }}
      bgImage="url('/bioservice/2.jpg')"
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
    >
      {/* ===== OVERLAY ===== */}
      <Box
        position="absolute"
        inset={0}
        bg="rgba(255, 255, 255, 0.33)" // soft white overlay
        zIndex={0}
      />

      {/* ===== CONTENT ===== */}
      <Flex
        position="relative"
        zIndex={1}
        maxW="1300px"
        mx="auto"
        gap={{ base: 12, md: 20 }}
        direction={{ base: "column", md: "row" }}
        align="flex-start"
      >
        {/* LEFT STICKY COLUMN */}
        <Box
          flex="1"
          position={{ base: "relative", md: "sticky" }}
          top={{ md: "100px" }}
          alignSelf="flex-start"
        >
          <Heading
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="bold"
            color={darkGreen}
            mb={5}
          >
            Our Services
          </Heading>

          <Text
            fontSize="2xl"
            color="gray.700"
            lineHeight="1.8"
            maxW="620px"
          >
            MyCES Biomedical provides a full suite of technical and maintenance
            services for healthcare facilities.
          </Text>
        </Box>

        {/* RIGHT SCROLLING COLUMN */}
        <Box flex="1.2">
          {services.map((service) => (
            <MotionBox
              key={service.title}
              mb={10}
              bg="white"
              border="1px solid"
              borderColor="gray.200"
              p={8}
              borderRadius="md"
              whileHover={{
                boxShadow: "0 14px 30px rgba(0,0,0,0.12)",
                borderColor: darkGreen,
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Heading
                fontSize="lg"
                fontWeight="semibold"
                color={darkGreen}
                mb={3}
              >
                {service.title}
              </Heading>

              <Text fontSize="md" color="gray.600" lineHeight="1.8">
                {service.description}
              </Text>
            </MotionBox>
          ))}
        </Box>
      </Flex>
    </Box>
  );
}
