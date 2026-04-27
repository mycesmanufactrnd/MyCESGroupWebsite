"use client";

import { Box, Text, Heading, Flex, Image, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionBox = motion(Box);
const companyGreen = "#0B5D3B";

const differentiators = [
  {
    title: "Offices & Corporate Buildings",
    description:
      "Maintain a clean and fresh indoor environment for employees and visitors, enhancing comfort and productivity.",
    image: "/euservice/s1.jpg",
    imageLeft: true,
  },
  {
    title: "Hospitals & Clinics",
    description:
      "Improve air hygiene in sensitive environments to support patient care and reduce exposure to airborne contaminants.",
    image: "/euservice/s2.jpg",
    imageLeft: false,
  },
  {
    title: "Factories & Industrial",
    description:
      "Control odors and improve air quality in production environments for a safer and more comfortable workspace.",
    image: "/euservice/s3.jpg",
    imageLeft: true,
  },
  {
    title: "Schools & Universities",
    description:
      "Create a healthier learning environment by improving indoor air quality for students and staff.",
    image: "/euservice/s4.jpg",
    imageLeft: true,
  },
  {
    title: "Public Transport & Vehicles",
    description:
      "Reduce odors and improve air freshness in buses, trains, and other transport environments.",
    image: "/euservice/s5.jpg",
    imageLeft: true,
  },
  {
    title: "Homes & Residential Spaces",
    description:
      "Enhance everyday living with cleaner air and effective odor control in household environments.",
    image: "/euservice/s6.jpg",
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
          Suitable Applications
        </Heading>

        <Text textAlign="center" color="gray.500" mb={16}>
          Designed for versatile use across multiple environments and industries
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
                  <Image
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

      <Flex justify="flex-end" mt={10} mr="5%">
        <Link href="/services/energy-audit" passHref>
          <Button
            bg="white"
            color={companyGreen}
            border="1px solid"
            borderColor={companyGreen}
            px={6}
            py={5}
            fontSize="sm"
            fontWeight="medium"
            borderRadius="md"
            _hover={{
              bg: companyGreen,
              color: "white",
            }}
            _active={{
              transform: "scale(0.98)",
            }}
            transition="all 0.2s ease"
          >
            Learn More →
          </Button>
        </Link>
      </Flex>
    </Box>
  );
}
