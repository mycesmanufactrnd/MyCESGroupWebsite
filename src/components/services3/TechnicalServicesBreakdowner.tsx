"use client";

import { Box, Grid, Heading, Flex, Text } from "@chakra-ui/react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { FiCpu, FiActivity, FiWind, FiZap, FiTool } from "react-icons/fi";

const MotionBox = motion(Box);
const darkGreen = "#0B5D3B";

const services = [
  {
    title: "Power Energy Logger",
    icon: FiActivity,
    items: [
      "A compact logger designed to measure and record electrical consumption and power quality across various building sectors. It provides critical data on energy usage patterns to identify potential savings and electrical inefficiencies.",
    ],
  },
  {
    title: "Ultrasonic Flowmeter",
    icon: FiWind,
    items: [
      "A non-intrusive device used for measuring the flow rate of liquids within piping systems without cutting the pipes. It is essential for auditing chiller plants and water treatment systems to ensure optimal flow efficiency.",
    ],
  },
  {
    title: "Flowmeter",
    icon: FiCpu,
    items: [
      "Specifically engineered to measure the volume and flow rate of compressed air in industrial environments. This tool helps detect air leaks and monitors the performance of air compressor plants to reduce operational costs.",
    ],
  },
  {
    title: "Boiler Flue Gas Analyzer",
    icon: FiTool,
    items: [
      "A professional analyzer used to measure combustion efficiency and emission levels from industrial boilers and furnaces. It provides precise data on flue gas components to help maintenance teams optimize burner performance.",
    ],
  },
  {
    title: "Lux, RH, and Temperature Sensors",
    icon: FiZap,
    items: [
      "A suite of environmental sensors used to monitor light levels (Lux), relative humidity (RH), and ambient temperature. These are vital for baseline energy index (BEI) analysis and ensuring indoor environmental quality (IEQ) standards are met.",
    ],
  },
];

export default function TechnicalServicesBreakdowner() {
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
          Equipment Rental Service Classification
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
                  ease: [0.42, 0, 0.58, 1], // smooth easing
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
      </AnimatePresence>
    </Box>
  );
}
