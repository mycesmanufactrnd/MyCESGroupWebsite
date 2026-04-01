"use client";

import { Box, Grid, Heading, Flex, Text } from "@chakra-ui/react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import {
  FiAward,
  FiTrendingUp,
  FiStar,
  FiUsers,
} from "react-icons/fi";

const MotionBox = motion(Box);
const darkGreen = "#0B5D3B";

const services = [
  {
    title: "AEMAS 1-Star Certification",
    icon: FiAward, // certification / compliance
    items: [
      "Awarded to organizations that have established a complete Energy Management System (EnMS) documentation framework and appointed a certified energy manager in compliance with national energy management requirements.",
    ],
  },
  {
    title: "AEMAS 2-Star Certification",
    icon: FiTrendingUp, // improvement / performance growth
    items: [
      "Recognizes organizations that have successfully implemented their EnMS and demonstrated measurable energy savings against an established energy baseline through systematic monitoring and control.",
    ],
  },
  {
    title: "AEMAS 3-Star Certification",
    icon: FiStar, // excellence / highest achievement
    items: [
      "The highest level of AEMAS recognition, awarded to organizations that sustain high energy performance and continuously improve their EnMS through advanced energy efficiency strategies and long-term commitment.",
    ],
  },
  {
    title: "Energy Awareness Training",
    icon: FiUsers, // people / training
    items: [
      "A structured training program designed to educate employees on energy-saving practices and clarify individual roles in achieving the organization’s energy efficiency objectives and sustainability targets.",
    ],
  },
];

export default function TechnicalServicesBreakdownEMS() {
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
          Energy Management System (EMS) Service Classification
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
