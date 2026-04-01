"use client";

import { Box, Grid, Heading, Flex, Text } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiActivity, FiTool, FiLayers } from "react-icons/fi"; // updated icons

const MotionBox = motion(Box);
const darkGreen = "#0B5D3B";

const services = [
  {
    title: "Energy Monitoring, Analysis & Reporting System (E-MARS)",
    icon: FiActivity,
    items: [
      "A real-time IoT monitoring system that tracks energy consumption and TNB tariff costs. It provides automated analytics and professional reporting to optimize energy efficiency and audit readiness.",
    ],
  },
  {
    title: "Facility Management System (FMS)",
    icon: FiTool,
    items: [
      "A digital platform that streamlines asset management through automated maintenance scheduling and lifecycle tracking. It enhances operational efficiency by replacing manual paperwork with digital forms and data-driven analytics.",
    ],
  },
  {
    title: "Integrated Management",
    icon: FiLayers,
    items: [
      "A unified solution combining proactive maintenance planning with comprehensive energy performance analysis. This approach ensures maximum asset longevity while achieving significant cost savings through synchronized facility oversight.",
    ],
  },
];

export default function TechnicalServicesBreakdownds() {
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
      {/* MAIN SECTION HEADER */}
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        mb={100} // gap between header and grid
        textAlign="center"
      >
        <Heading
          as="h2"
          fontSize={{ base: "xl", md: "3xl" }}
          fontWeight="bold"
          color={darkGreen}
        >
          Digital System Service Classification
        </Heading>
      </MotionBox>

      {/* SERVICES GRID */}
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
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: "easeOut",
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
                    transform: "scale(1.1)",
                    filter: "drop-shadow(0 0 6px rgba(11,93,59,0.4))",
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

              {/* BULLETED LIST */}
              <Box mt={4}>
                {service.items.map((item) => (
                  <Text
                    key={item}
                    fontSize={{ base: "md", md: "md" }}
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
    </Box>
  );
}
