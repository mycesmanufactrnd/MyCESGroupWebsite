"use client";

import {
  Box,
  Container,
  Grid,
  Text,
  Stack,
  Flex,
  Button,
  SimpleGrid,
  Badge,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

const MotionBox = motion(Box);

const stats = [
  { label: "Live Deployments", value: "17+" },
  { label: "Sectors", value: "3" },
  { label: "Since", value: "2018" },
];

type ServiceType = "EMARS";

const portfolioData: Record<
  ServiceType,
  {
    description: string;
    sectors: Record<string, string[]>;
  }
> = {
  EMARS: {
    description:
      "EMARS (Energy Monitoring and Real-time Analysis System) delivers intelligent, real-time energy monitoring across critical environments in Malaysia. With 17+ successful live deployments since 2018, EMARS enables organizations to improve operational continuity, optimize energy usage, and ensure compliance with national energy efficiency regulations such as EMEER.",

    sectors: {
      Healthcare: [
        "Institut Jantung Negara (IJN)",
        "UM Specialist Centre (UMSC)",
        "University Malaya Specialist Centre (Phase II Expansion)",
        "Hospital Rehabilitasi Cheras",
        "KPJ Seremban Specialist Hospital",
        "KPJ Puteri Specialist Hospital",
        "Kuantan Medical Centre",
        "Hospital Rembau",
      ],
      Commercial: [
        "Pusat Kecemerlangan Kejuruteraan dan Teknologi JKR (CREaTE)",
      ],
      Industrial: [
        "Kayaku Safety Systems (2020 & 2023 Deployment)",
        "Kiswel Sdn Bhd",
        "Idemitsu SM (Malaysia)",
        "Pure Circle Manufacturing",
        "Koito Manufacturing",
      ],
      Education: ["Universiti Teknologi MARA"],
    },
  },
};

export default function DescriptionP2({ service = "EMARS" as ServiceType }) {
  const data = portfolioData[service];

  const [activeTab, setActiveTab] =
    useState<keyof typeof data.sectors>("Healthcare");

  return (
    <Container maxW="container.xl" py={12}>
      <Grid templateColumns={{ base: "1fr", md: "70% 30%" }} gap={10}>
        <Stack gap={10}>
          <Box>
            <Text fontSize="2xl" fontWeight="bold" mb={3}>
              EMARS: Intelligent Energy Monitoring
            </Text>

            <Text color="gray.700" lineHeight="tall">
              {data.description}
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
            {stats.map((stat, i) => (
              <MotionBox
                key={i}
                p={6}
                border="1px solid #eee"
                borderRadius="lg"
                textAlign="center"
                whileHover={{ y: -5 }}
              >
                <Text fontSize="2xl" fontWeight="bold" color="green.600">
                  {stat.value}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  {stat.label}
                </Text>
              </MotionBox>
            ))}
          </SimpleGrid>

          <Box>
            <Text fontWeight="bold" mb={3}>
              Core Deployment Sectors
            </Text>

            <Flex gap={3} wrap="wrap">
              {Object.keys(data.sectors).map((sector) => (
                <Button
                  key={sector}
                  size="sm"
                  onClick={() =>
                    setActiveTab(sector as keyof typeof data.sectors)
                  }
                  colorScheme={activeTab === sector ? "blue" : "gray"}
                  variant={activeTab === sector ? "solid" : "outline"}
                >
                  {sector}
                </Button>
              ))}
            </Flex>
          </Box>

          <SimpleGrid columns={{ base: 2, md: 2, lg: 4 }} gap={4}>
            {data.sectors[activeTab].map((client, i) => (
              <MotionBox
                key={i}
                p={5}
                borderRadius="lg"
                border="1px solid #eee"
                whileHover={{ scale: 1.03 }}
              >
                <Text fontWeight="bold">{client}</Text>

                <Badge mt={2} colorScheme="blue">
                  EMARS Deployment
                </Badge>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Stack>

        <Box position={{ md: "sticky" }} top={20}>
          <Text fontWeight="bold" fontSize="lg" mb={4}>
            Project Overview
          </Text>

          <Box mb={3}>
            <Text fontSize="sm" fontWeight="bold" color="gray.500">
              SYSTEM TYPE
            </Text>
            <Text>EMARS Real-Time Monitoring System</Text>
          </Box>

          <Box mb={3}>
            <Text fontSize="sm" fontWeight="bold" color="gray.500">
              COVERAGE
            </Text>
            <Text>Healthcare, Commercial, Industrial, Education</Text>
          </Box>

          <Box mb={3}>
            <Text fontSize="sm" fontWeight="bold" color="gray.500">
              COMPLIANCE
            </Text>
            <Text>EMEER Energy Efficiency Standards</Text>
          </Box>

          <Box mt={6}>
            <Text fontSize="sm" fontWeight="bold" color="gray.500" mb={2}>
              KEY SUCCESS FACTORS
            </Text>

            <Text fontSize="sm">• 17+ Live System Deployments</Text>
            <Text fontSize="sm">
              • Critical Healthcare Monitoring (IJN, UMSC)
            </Text>
            <Text fontSize="sm">• Industrial Energy Optimization Systems</Text>
            <Text fontSize="sm">• Multi-Phase Expansion Capability</Text>
          </Box>
        </Box>
      </Grid>
    </Container>
  );
}
