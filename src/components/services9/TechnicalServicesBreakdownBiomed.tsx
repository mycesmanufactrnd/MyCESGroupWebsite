"use client";

import { Box, Grid, Heading, Flex, Text } from "@chakra-ui/react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import {
  FiTool,
  FiActivity,
  FiShield,
} from "react-icons/fi";

const MotionBox = motion(Box);
const darkGreen = "#0B5D3B";

const services = [
  {
    title: "Biomedical Engineering Maintenance Service (BEMS)",
    icon: FiShield, // safety, compliance, reliability
    items: [
      "A professional maintenance program focused on planned preventive maintenance and lifecycle management of medical equipment to ensure clinical safety, regulatory compliance, and long-term operational reliability.",
    ],
  },
  {
    title: "Medical Equipment Troubleshoot and Repair",
    icon: FiTool, // repair, tools, technical intervention
    items: [
      "An expert technical service dedicated to diagnosing equipment malfunctions and performing corrective repairs to restore critical medical devices to full and safe operational status.",
    ],
  },
  {
    title: "Basic Features",
    icon: FiActivity, // monitoring, testing, operational checks
    items: [
      "Fundamental biomedical engineering support services including routine maintenance checks, electrical safety testing in accordance with IEC 60601-1 standards, and logistics support for the safe handling and management of medical assets.",
    ],
  },
];

export default function TechnicalServicesBreakdownBiomed() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Box
      ref={ref}
      py={{ base: 20, md: 28 }}
      px={{ base: 6, md: 20 }}
      maxW="1400px"
      mx="auto"
    >
      {/* MAIN HEADER */}
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        mb={100}
        textAlign="center"
      >
        <Heading
          as="h2"
          fontSize={{ base: "xl", md: "3xl" }}
          fontWeight="bold"
          color={darkGreen}
        >
          Biomedical Engineering Service Classification
        </Heading>
      </MotionBox>

      {/* SERVICES GRID */}
      <AnimatePresence>
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={14}
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <MotionBox
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.42, 0, 0.58, 1],
                }}
                role="group"
              >
                {/* ICON */}
                <Flex mb={5}>
                  <Box
                    as={Icon}
                    fontSize="36px"
                    color={darkGreen}
                    transition="all 0.3s ease"
                    _groupHover={{
                      transform: "scale(1.12)",
                      filter:
                        "drop-shadow(0 0 6px rgba(11,93,59,0.4))",
                    }}
                  />
                </Flex>

                {/* HEADING */}
                <Heading
                  as="h3"
                  fontSize={{ base: "xl", md: "1.5xl" }}
                  fontWeight="bold"
                  color={darkGreen}
                  position="relative"
                  display="inline-block"
                  mb={4}
                >
                  {service.title}

                  {/* Animated underline */}
                  <Box
                    position="absolute"
                    left="50%"
                    bottom="-6px"
                    h="1.5px"
                    w="30%"
                    bg="gray.300"
                    transform="translateX(-50%)"
                    transition="all 0.3s ease"
                    _groupHover={{ w: "100%" }}
                  />
                </Heading>

                {/* DESCRIPTION */}
                <Box mt={4}>
                  {service.items.map((item) => (
                    <Text
                      key={item}
                      fontSize="md"
                      color="gray.700"
                      mb={2}
                      textAlign="justify"
                    >
                      • {item}
                    </Text>
                  ))}
                </Box>
              </MotionBox>
            );
          })}
        </Grid>
      </AnimatePresence>
    </Box>
  );
}
