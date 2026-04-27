"use client";

import { Box, Flex, Heading, Text, HStack, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FiTool,
  FiCpu,
  FiSettings,
  FiActivity,
  FiRepeat,
  FiCheckCircle,
} from "react-icons/fi";
import Link from "next/link";

const MotionBox = motion(Box);

const darkGreen = "#0B5D3B";

const services = [
  {
    title: "Service Maintenance (BEMS)",
    icon: FiTool,
    description:
      "Comprehensive planned maintenance programs designed to ensure medical equipment remains reliable, safe, and operational.",
  },
  {
    title: "Medical Equipment Supply",
    icon: FiCpu,
    description:
      "Procurement and delivery of high-quality medical devices and healthcare-related supplies.",
  },
  {
    title: "Spare Parts Provision",
    icon: FiSettings,
    description:
      "Supplying genuine replacement parts to minimize downtime for critical medical machinery.",
  },
  {
    title: "Repair and Troubleshooting",
    icon: FiActivity,
    description:
      "Expert diagnosis and repair services to restore equipment to full functionality.",
  },
  {
    title: "Equipment Rental Services",
    icon: FiRepeat,
    description:
      "Flexible rental options for organizations requiring equipment on a temporary basis.",
  },
  {
    title: "Testing and Commissioning",
    icon: FiCheckCircle,
    description:
      "Verification that new equipment meets safety and manufacturer standards before use.",
  },
];

export default function BiomedicalServicesSection() {
  return (
    <Box
      py={{ base: 20, md: 28 }}
      px={{ base: 6, md: 20 }}
      bg="linear-gradient(180deg, #f8faf9 0%, #eef2ef 100%)"
    >
      <Flex
        maxW="1300px"
        mx="auto"
        gap={{ base: 14, md: 20 }}
        direction={{ base: "column", md: "row" }}
        align="flex-start"
      >
        {/* LEFT COLUMN */}
        <Box
          flex="1"
          position={{ base: "relative", md: "sticky" }}
          top={{ md: "120px" }}
        >
          <Box w="70px" h="4px" bg={darkGreen} mb={6} borderRadius="full" />

          <Heading
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="bold"
            color={darkGreen}
            mb={5}
          >
            Our Services
          </Heading>

          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.600"
            lineHeight="1.9"
            maxW="500px"
          >
            Delivering end-to-end biomedical engineering solutions with
            precision, reliability, and innovation for modern healthcare
            environments.
          </Text>
        </Box>

        {/* RIGHT COLUMN */}
        <Box flex="1.3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <MotionBox
                key={service.title}
                mb={8}
                p={8}
                borderRadius="2xl"
                backdropFilter="blur(10px)"
                bg="rgba(255,255,255,0.7)"
                border="1px solid rgba(255,255,255,0.4)"
                boxShadow="0 10px 30px rgba(0,0,0,0.05)"
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.1)",
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                {/* TOP ROW */}
                <HStack mb={4} justify="space-between">
                  {/* ICON + TITLE */}
                  <HStack gap={4}>
                    <Box
                      w="48px"
                      h="48px"
                      borderRadius="xl"
                      bg="rgba(11,93,59,0.1)"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Icon size={22} color={darkGreen} />
                    </Box>

                    <Heading
                      fontSize="lg"
                      fontWeight="semibold"
                      color={darkGreen}
                    >
                      {service.title}
                    </Heading>
                  </HStack>

                  {/* NUMBER */}
                  <Text fontSize="2xl" fontWeight="bold" color="gray.300">
                    {String(index + 1).padStart(2, "0")}
                  </Text>
                </HStack>

                {/* DESCRIPTION */}
                <Text fontSize="sm" color="gray.600" lineHeight="1.8">
                  {service.description}
                </Text>
              </MotionBox>
            );
          })}
        </Box>
      </Flex>
      {/* import Link from "next/link"; */}
      {/* const companyGreen = "#0B5D3B"; */}
      <Flex justify="flex-end" mt={10} mr="5%">
        <Link href="/services8/biomedical" passHref>
          <Button
            bg="white"
            color={darkGreen}
            border="1px solid"
            borderColor={darkGreen}
            px={6}
            py={5}
            fontSize="sm"
            fontWeight="medium"
            borderRadius="md"
            _hover={{
              bg: darkGreen,
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
