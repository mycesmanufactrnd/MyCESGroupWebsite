"use client";

import { Box, Grid, Heading, Flex, Text } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiDroplet, FiCpu, FiWind, FiZap } from "react-icons/fi";

const MotionBox = motion(Box);
const darkGreen = "#0B5D3B";

const services = [
  {
    title: "Chiller Efficiency",
    icon: FiDroplet,
    items: [
      "Assessment of chiller systems to evaluate energy use, cooling performance, and operational efficiency. Recommendations are provided to optimize performance, reduce energy consumption, and lower operating costs.",
    ],
  },
  {
    title: "Boiler Efficiency",
    icon: FiCpu,
    items: [
      "Evaluation of boiler systems to measure fuel use, heat transfer, and overall performance. The audit identifies energy losses and provides solutions to improve efficiency, safety, and fuel savings.",
    ],
  },
  {
    title: "Air Compressor Efficiency",
    icon: FiWind,
    items: [
      "Analysis of compressed air systems to check energy use, leaks, pressure, and load patterns. Recommendations help optimize performance, minimize energy waste, and improve system efficiency.",
    ],
  },
  {
    title: "Electrical System Analysis",
    icon: FiZap,
    items: [
      "Comprehensive review of electrical systems, including power quality, load balance, and energy consumption. The analysis identifies inefficiencies and provides solutions to enhance reliability, efficiency, and cost-effectiveness.",
    ],
  },
];

export default function TechnicalServicesBreakdowneu() {
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
        mb={20} // gap between header and grid
        textAlign="center"
      >
        <Heading
          as="h2"
          fontSize={{ base: "xl", md: "3xl" }}
          fontWeight="bold"
          color={darkGreen}
        >
          Energy Audit Service Classification
        </Heading>
      </MotionBox>

      {/* SERVICES GRID */}
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
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
