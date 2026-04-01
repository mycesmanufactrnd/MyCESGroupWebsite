"use client";

import { Box, Text, Heading, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const differentiators = [
  {
    title: "Precision-Driven with Unmatched Quality",
    description:
      "Our team ensures every project meets the highest standards, combining meticulous attention to detail with innovative solutions.",
    image: "/images/p1.jpg",
    imageLeft: true,
  },
  {
    title: "Expert Analysis for Optimal Efficiency",
    description:
      "We leverage years of industry experience to provide actionable insights that maximize operational performance.",
    image: "/images/p1.jpg",
    imageLeft: false,
  },
  {
    title: "Sustainable Strategies for Long-Term Success",
    description:
      "We help implement environmentally responsible and cost-effective strategies, creating value while reducing carbon footprint.",
    image: "/images/p1.jpg",
    imageLeft: true,
  },
];

export default function DifferentiatorsSection5() {
  return (
    <Box bg="gray.50" py={{ base: 16, md: 24 }} px={{ base: 6, md: 20 }}>
      {/* Section Header */}
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Heading
          textAlign="center"
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"
          color="black"
          mb={2}
        >
          What Differentiates Us From The Rest ?
        </Heading>
        <Text textAlign="center" color="gray.500" mb={12}>
          Our unique strengths that set us apart in the corporate services landscape
        </Text>
      </MotionBox>

      {/* Alternating Rows */}
      <Flex direction="column" gap={16}>
        {differentiators.map((item, index) => {
          const isLeft = item.imageLeft;

          return (
            <Flex
              key={index}
              direction={{ base: "column", md: "row" }}
              justify="center"
              align="center"
              position="relative"
              gap={{ base: 6, md: 12 }}
            >
              {/* Left image */}
              {isLeft && (
                <MotionBox
                  flex="0 0 auto"
                  position="relative"
                  display="inline-block"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ display: "block" }}
                  />
                  {/* White Box slides in from right */}
                  <MotionBox
                    bg="white"
                    p={{ base: 5, md: 7 }}
                    shadow="lg"
                    position={{ base: "static", md: "absolute" }}
                    top={{ md: "50%" }}
                    left={{ md: "calc(100% - 150px)" }}
                    transform={{ md: "translateY(-50%)" }}
                    width={{ base: "100%", md: "30%" }}
                    zIndex={10}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Heading color="teal.600" fontSize="md" mb={2}>
                      {item.title}
                    </Heading>
                    <Box h="1px" bg="gray.300" my={2} />
                    <Text color="gray.700" fontSize="sm">
                      {item.description}
                    </Text>
                  </MotionBox>
                </MotionBox>
              )}

              {/* Right image for mirrored row */}
              {!isLeft && (
                <MotionBox
                  flex="0 0 auto"
                  position="relative"
                  display="inline-block"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ display: "block" }}
                  />
                  {/* White Box slides in from left */}
                  <MotionBox
                    bg="white"
                    p={{ base: 5, md: 7 }}
                    shadow="lg"
                    position={{ base: "static", md: "absolute" }}
                    top={{ md: "50%" }}
                    right={{ md: "calc(100% - 150px)" }}
                    transform={{ md: "translateY(-50%)" }}
                    width={{ base: "100%", md: "30%" }}
                    zIndex={10}
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Heading color="teal.600" fontSize="md" mb={2}>
                      {item.title}
                    </Heading>
                    <Box h="1px" bg="gray.300" my={2} />
                    <Text color="gray.700" fontSize="sm">
                      {item.description}
                    </Text>
                  </MotionBox>
                </MotionBox>
              )}
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
}
