"use client";

import { Box, Text, Heading, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const differentiators = [
  {
    title: "Experienced Technical Team",
    description:
      "Our skilled energy professionals deliver accurate assessments and tailored recommendations for your facility.",
    image: "/euservice/1.jpg",
    imageLeft: true,
  },
  {
    title: "Professional and Systematic Approach",
    description:
      "We follow a structured methodology to ensure consistent and reliable energy audit results.",
    image: "/euservice/2.jpg",
    imageLeft: false,
  },
  {
    title: "Reliable Measurement & Reporting",
    description:
      "Using advanced tools, we provide precise measurements and clear reports on energy performance and savings opportunities.",
    image: "/euservice/3.jpg",
    imageLeft: true,
  },
];

export default function DifferentiatorsSection() {
  return (
    <Box bg="gray.100" py={{ base: 20, md: 28 }} px={{ base: 6, md: 20 }}>
      {/* ===== SECTION HEADER ===== */}
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Heading
          textAlign="center"
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"
          color="#15350f"
          mb={2}
        >
          What Differentiates Us From The Rest ?
        </Heading>
        <Text textAlign="center" color="gray.500" mb={16}>
          Our unique strengths that set us apart in the corporate services landscape
        </Text>
      </MotionBox>

      {/* ===== CONTENT ===== */}
      <Flex direction="column" gap={24}>
        {differentiators.map((item, index) => {
          const isLeft = item.imageLeft;

          return (
            <Flex
              key={index}
              direction={{ base: "column", md: isLeft ? "row" : "row-reverse" }}
              justify="center"
              align="center"
              gap={{ base: 10, md: 20 }}
            >
              {/* ===== IMAGE ===== */}
              <MotionBox
                position="relative"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
              >
                {/* FIXED LARGE IMAGE CONTAINER */}
                <Box
                  w={{ base: "100%", md: "680px" }}
                  h={{ base: "280px", md: "420px" }}
                  overflow="hidden"
                  borderRadius="lg"
                >
                  <Box
                    as="img"
                    src={item.image}
                    alt={item.title}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    display="block"
                  />
                </Box>

                {/* ===== WHITE CONTENT BOX ===== */}
                <MotionBox
                  bg="white"
                  p={{ base: 6, md: 8 }}
                  shadow="xl"
                  position={{ base: "static", md: "absolute" }}
                  top={{ md: "50%" }}
                  left={isLeft ? { md: "calc(100% - 170px)" } : undefined}
                  right={!isLeft ? { md: "calc(100% - 170px)" } : undefined}
                  transform={{ md: "translateY(-50%)" }}
                  width={{ base: "100%", md: "340px" }}
                  mt={{ base: 6, md: 0 }}
                  zIndex={10}
                  initial={{ opacity: 0, x: isLeft ? 120 : -120 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8 }}
                >
                  <Heading color="teal.600" fontSize="lg" mb={3}>
                    {item.title}
                  </Heading>
                  <Box h="1px" bg="gray.300" my={3} />
                  <Text color="gray.700" fontSize="sm">
                    {item.description}
                  </Text>
                </MotionBox>
              </MotionBox>
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
}