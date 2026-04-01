"use client";

import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const steps = [
  {
    step: "01",
    title: "Initial Consultation",
    description:
      "We begin by understanding your organization’s energy needs and objectives. Preliminary data on current energy consumption is gathered to provide a baseline for the audit and to identify key focus areas.",
    image: "/euservice/4.jpg",
    bg: "#dde0dcb3",
  },
  {
    step: "02",
    title: "Site Assessment",
    description:
      "Our team conducts an on-site inspection of your facilities to evaluate energy usage patterns, identify inefficiencies, and detect practices that lead to energy waste.",
    image: "/euservice/5.jpg",
    bg: "#ccccccff",
  },
  {
    step: "03",
    title: "Data Collection",
    description:
      "Detailed information on energy consumption, operational schedules, and equipment performance is collected using advanced metering and monitoring tools to ensure accurate, real-time data.",
    image: "/euservice/6.jpg",
    bg: "#dde0dcb3",
  },
  {
    step: "04",
    title: "Energy Analysis",
    description:
      "Using the collected data, our experts analyze energy flows, peak usage periods, and system performance to pinpoint inefficiencies and opportunities for improvement.",
    image: "/euservice/7.jpg",
    bg: "#ccccccff",
  },
  {
    step: "05",
    title: "Recommendations",
    description:
      "Based on the analysis, we provide a comprehensive report with practical, actionable recommendations. These may include energy-efficient equipment upgrades, operational optimizations, and implementation of energy management practices.",
    image: "/euservice/8.jpg",
    bg: "#dde0dcb3",
  },
  {
    step: "06",
    title: "Implementation Support",
    description:
      "We assist in implementing the recommended energy-saving measures, providing guidance and support to ensure they are executed effectively.",
    image: "/euservice/9.jpg",
    bg: "#ccccccff",
  },
  {
    step: "07",
    title: "Follow-Up and Monitoring",
    description:
      "To maintain long-term energy efficiency, we offer follow-up services and continuous monitoring. Our team tracks the performance of implemented measures and makes adjustments as needed to optimize results.",
    image: "/euservice/10.jpg",
    bg: "#dde0dcb3",
  },
];

export default function EnergyAuditProcess() {
  return (
    <Box bg="white" py={{ base: 20, md: 28 }} px={{ base: 6, md: 20 }}>
      {/* Section Header */}
      <Box textAlign="center" mb={20}>
        <Heading
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"
          color="#15350f"
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
            px={{ base: 4, md: 12 }}
            py={{ base: 6, md: 8 }}
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ amount: 0.35 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
          >
            <Flex
              direction={{ base: "column", md: "row" }}
              align="center"
              gap={{ base: 4, md: 10 }}
            >
              {/* Oval Image */}
              <Box
                flexShrink={0}
                w={{ base: "250px", md: "320px" }}
                h={{ base: "150px", md: "200px" }}
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

              {/* Text Content */}
              <Box
                flex="1"
                textAlign={{ base: "center", md: "left" }}
                w="full"  // allow full width
              >
                <Heading
                  fontSize={{ base: "lg", md: "xl" }}
                  fontWeight="bold"
                  color="#42583eff"
                  mb={2}
                >
                  {item.step}. {item.title}
                </Heading>
                <Text
                  color="gray.700"
                  fontSize={{ base: "md", md: "md" }}
                  lineHeight="1.8"
                  whiteSpace="pre-line" // respects line breaks
                >
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