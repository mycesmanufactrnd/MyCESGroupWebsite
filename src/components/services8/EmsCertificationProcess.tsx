"use client";

import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const steps = [
  {
    step: "01",
    title: "Significant Cost Reduction",
    description:
      "Directly lowers monthly electricity and utility bills by identifying inefficiencies and reducing unnecessary energy demand.",
    image: "/emservice/2.jpg",
    bg: "#dde0dcb3",
  },
  {
    step: "02",
    title: "Operational Excellence",
    description:
      "Optimizes the performance of machinery and building systems, reducing wear and tear and improving overall productivity.",
    image: "/emservice/3.jpg",
    bg: "gray.100",
  },
  {
    step: "03",
    title: "Sustainability & ESG Support",
    description:
      "Demonstrates a commitment to environmental responsibility by reducing carbon footprints and supporting global sustainability goals.",
    image: "/emservice/4.jpg",
    bg: "#dde0dcb3",
  },
  {
    step: "04",
    title: "Strict Regulatory Compliance",
    description:
      "Ensures your facility meets all local energy laws and international standards, such as ISO 50001, avoiding legal risks and penalties.",
    image: "/emservice/5.jpg",
    bg: "gray.100",
  },
  {
    step: "05",
    title: "Transparent Savings Tracking",
    description:
      "Provides a reliable platform to measure and verify energy savings over time, proving the Return on Investment (ROI) for energy upgrades.",
    image: "/emservice/6.jpg",
    bg: "#dde0dcb3",
  },
];

export default function EmsCertificationProcess() {
  return (
    <Box bg="white" py={{ base: 20, md: 28 }} px={{ base: 6, md: 20 }}>
      {/* Section Header */}
      <Box textAlign="center" mb={28}>
        <Heading
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"
          color="green.800"
        >
          Why Energy Management System?
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
                {/* Oval Image */}
                <Box
                  flexShrink={0}
                  w={{ base: "150px", md: "220px" }}
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
