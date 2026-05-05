"use client";

import {
  Box,
  Text,
  Heading,
  Flex,
  Image,
  Button,
  Grid,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionBox = motion(Box);
const companyGreen = "#0B5D3B";
const differentiators = [
  {
    title: "Energy Audit",
    description:
      "Comprehensive analysis of energy consumption to identify inefficiencies and provide cost-saving improvement strategies.",
    image: "/mycesservice/eng1.png",
    imageLeft: true,
  },
  // {
  //   title: "Monitoring System",
  //   description:
  //     "Real-time monitoring solutions to track energy usage, performance, and operational efficiency across facilities.",
  //   image: "/mycesservice/2.jpg",
  //   imageLeft: false,
  // },
  {
    title: "Awareness Training",
    description:
      "Professional training programs to promote energy efficiency, safety awareness, and best operational practices.",
    image: "/mycesservice/eng4.png",
    imageLeft: true,
  },
  // {
  //   title: "Smart Home Automation",
  //   description:
  //     "Intelligent automation systems designed to enhance comfort, convenience, and energy savings in modern environments.",
  //   image: "/mycesservice/4.jpg",
  //   imageLeft: false,
  // },
  {
    title: "Equipment Rental",
    description:
      "Flexible rental solutions providing access to specialized equipment without high upfront investment costs.",
    image: "/erservice/2.jpg",
    imageLeft: true,
  },
  {
    title: "Room Data Survey",
    description:
      "Accurate data collection and analysis for space optimization, planning, and energy efficiency improvements.",
    image: "/home/eng3.png",
    imageLeft: false,
  },
  {
    title: "Sustainable Energy Management System (SEMS)",
    description:
      "Structured system to manage and continuously improve energy performance aligned with sustainability goals.",
    image: "/portfolio/emgs.jpeg",
    imageLeft: true,
  },
  {
    title: "Computerized Maintenance Management System (CMMS)",
    description:
      "Digital platform for managing maintenance operations, assets, work orders, and preventive maintenance efficiently.",
    image: "/mycesservice/8.jpg",
    imageLeft: false,
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
          Our Services
        </Heading>

        <Text textAlign="center" color="gray.500" mb={16}>
          Comprehensive energy and engineering solutions for modern industries
        </Text>
      </MotionBox>

      {/* ===== CONTENT ===== */}
      <Grid
        templateColumns={{
          base: "1fr",
          md: "1fr 1fr",
          lg: "1fr 1fr 1fr",
        }}
        gap={10}
      >
        {differentiators.map((item, index) => (
          <MotionBox
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              bg="white"
              borderRadius="lg"
              overflow="hidden"
              shadow="md"
              h="100%"
            >
              {/* IMAGE */}
              <Box
                w="100%"
                h={{ base: "200px", md: "220px" }}
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

              {/* TEXT */}
              <Box p={5}>
                <Heading fontSize="md" color="teal.600" mb={2}>
                  {item.title}
                </Heading>

                <Text fontSize="sm" color="gray.600">
                  {item.description}
                </Text>
              </Box>
            </Box>
          </MotionBox>
        ))}
      </Grid>

      {/* BUTTON */}
      <Flex justify="flex-end" mt={10} mr="5%">
        <Link href="/about" passHref>
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
