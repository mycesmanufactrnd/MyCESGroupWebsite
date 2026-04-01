"use client";

import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const steps = [
  {
    step: "01",
    title: "Initial Consultation",
    description:
      "We begin with a structured discussion to understand operational requirements, energy usage patterns, and safety considerations before defining the audit scope.",
    image: "/images/p1.jpg",
    bg: "green.50",
  },
  {
    step: "02",
    title: "Site Assessment",
    description:
      "Our engineers conduct detailed on-site inspections of electrical and HVAC systems to identify inefficiencies, risks, and improvement opportunities.",
    image: "/images/energy-tech-2.jpg",
    bg: "gray.50",
  },
  {
    step: "03",
    title: "Data Collection",
    description:
      "Accurate operational data is gathered using calibrated instruments to ensure reliable technical analysis and energy optimization recommendations.",
    image: "/images/energy-tech-3.jpg",
    bg: "green.50",
  },
];

export default function AgricultureProcess() {
  return (
    <Box bg="white" py={{ base: 20, md: 28 }} px={{ base: 6, md: 20 }}>
      {/* Section Header */}
      <Box textAlign="center" mb={20}>
        <Heading
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"
          color="green.800"
        >
          Energy Audit Process
        </Heading>
      </Box>

      {/* Process Steps */}
      <Flex direction="column" gap={{ base: 14, md: 18 }}>
        {steps.map((item, index) => (
          <MotionBox
            key={index}
            bg={item.bg}
            borderRadius={{ base: "2xl", md: "full" }}
            px={{ base: 6, md: 16 }}
            py={{ base: 8, md: 10 }}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
            duration: 1.0,
            ease: "easeInOut",
            }}
          >
            <Flex
              direction={{ base: "column", md: "row" }}
              align="center"
              gap={{ base: 6, md: 14 }}
            >
              {/* Oval Image (LEFT – larger & consistent) */}
                <Box
                flexShrink={0}
                w={{ base: "300px", md: "400px" }}
                h={{ base: "180px", md: "230px" }}
                borderRadius="full"
                overflow="hidden"
                >

                <Image
                  src={item.image}
                  alt={item.title}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                />
              </Box>

              {/* Text Content (RIGHT) */}
              <Box
                flex="1"
                textAlign={{ base: "center", md: "left" }}
                maxW="700px"
              >
                <Heading
                  fontSize="big"
                  fontWeight="bold"
                  color="green.700"
                  mb={3}
                >
                  {item.step}. {item.title}
                </Heading>
                <Text color="gray.700" fontSize="lg" lineHeight="1.7">
                  {item.description}
                </Text>
              </Box>
            </Flex>
          </MotionBox>
        ))}
      </Flex>
    </Box>
  );
}
