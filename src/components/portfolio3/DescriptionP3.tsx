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

/* =========================
   📊 CMMS CORE STATS
========================= */
const stats = [
  { label: "Total Sites", value: "15+" },
  { label: "Multi-Site Deployments", value: "12" },
  { label: "Core Modules", value: "4+" },
];

/* =========================
   🧠 CMMS PORTFOLIO DATA
========================= */
type ServiceType = "CMMS";

const portfolioData: Record<
  ServiceType,
  {
    description: string;
    modules: string[];
    sectors: Record<string, string[]>;
  }
> = {
  CMMS: {
    description:
      "The fully modular facility management platform designed to streamline asset maintenance, operational workflows, and building performance tracking. The system integrates maintenance, energy, cleaning, and hygiene operations into a single centralized ecosystem, enabling organizations to achieve full facility visibility and control.",

    modules: [
      "FEMS (Facility Engineering Maintenance System)",
      "BEMS (Building Energy Management System)",
      "Cleaning Management Module",
      "HKPC (Housekeeping & Hygiene Control)",
    ],

    sectors: {
      Healthcare: [
        "Klinik Kesihatan Kelantan (12 Sites)",
        "Hospital Bera",
        "Sena Hospital Segamat Specialist",
      ],
      Commercial: [
        "Kementerian Dalam Negeri Kuala Lumpur",
        "Kementerian Dalam Negeri Langkawi",
        "Kementerian Perdagangan Dalam Negeri (2G3)",
        "Bangunan Jabatan Kastam, Putrajaya",
        "Bangunan Menara Seri Wilayah (2C1)",
        "Jabatan Bomba dan Penyelamat Malaysia",
        "Kementerian Peralihan Tenaga dan Transformasi Air (PETRA)",
        "Kompleks Dewan Bahasa dan Pustaka",
        "MSN Bukit Jalil",
      ],

      Education: [
        "Universiti Sains Islam Malaysia (USIM)",
        "UNIKL City Campus",
      ],
    },
  },
};

/* =========================
   📌 MAIN COMPONENT
========================= */
export default function CMMSPortfolio({ service = "CMMS" as ServiceType }) {
  const data = portfolioData[service];

  const [activeTab, setActiveTab] =
    useState<keyof typeof data.sectors>("Healthcare");

  return (
    <Container maxW="container.xl" py={12}>
      <Grid templateColumns={{ base: "1fr", md: "70% 30%" }} gap={10}>
        <Stack gap={10}>
          {/* =========================
              TITLE + DESCRIPTION
          ========================= */}
          <Box>
            <Text fontSize="2xl" fontWeight="bold" mb={3}>
              CMMS: Intelligent Facility Management System
            </Text>

            <Text color="gray.700" lineHeight="tall">
              {data.description}
            </Text>
          </Box>

          {/* =========================
              STATS
          ========================= */}
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

          {/* =========================
              MODULES (NEW SECTION)
          ========================= */}
          <Box>
            <Text fontWeight="bold" mb={3}>
              System Modules
            </Text>

            <SimpleGrid columns={{ base: 1, md: 2 }} gap={3}>
              {data.modules.map((module, i) => (
                <Box key={i} p={4} border="1px solid #eee" borderRadius="lg">
                  <Text fontSize="sm" fontWeight="bold">
                    {module}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          {/* =========================
              SECTOR TABS
          ========================= */}
          <Box>
            <Text fontWeight="bold" mb={3}>
              Deployment Sectors
            </Text>

            <Flex gap={3} wrap="wrap">
              {Object.keys(data.sectors).map((sector) => (
                <Button
                  key={sector}
                  size="sm"
                  onClick={() =>
                    setActiveTab(sector as keyof typeof data.sectors)
                  }
                  colorScheme={activeTab === sector ? "purple" : "gray"}
                  variant={activeTab === sector ? "solid" : "outline"}
                >
                  {sector}
                </Button>
              ))}
            </Flex>
          </Box>

          {/* =========================
              PROJECT CARDS
          ========================= */}
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

                <Badge mt={2} colorScheme="purple">
                  CMMS Deployment
                </Badge>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Stack>

        {/* =========================
            RIGHT SIDEBAR
        ========================= */}
        <Box position={{ md: "sticky" }} top={20}>
          <Text fontWeight="bold" fontSize="lg" mb={4}>
            Project Overview
          </Text>

          <Box mb={3}>
            <Text fontSize="sm" fontWeight="bold" color="gray.500">
              SYSTEM TYPE
            </Text>
            <Text>CMMS Facility Management Platform</Text>
          </Box>

          <Box mb={3}>
            <Text fontSize="sm" fontWeight="bold" color="gray.500">
              COVERAGE
            </Text>
            <Text>Government, Healthcare & Education</Text>
          </Box>

          <Box mb={3}>
            <Text fontSize="sm" fontWeight="bold" color="gray.500">
              KEY FEATURE
            </Text>
            <Text>Multi-Site Asset & Workflow Management</Text>
          </Box>

          <Box mt={6}>
            <Text fontSize="sm" fontWeight="bold" color="gray.500" mb={2}>
              KEY STRENGTHS
            </Text>

            <Text fontSize="sm">• 12-Site Multi Location Management</Text>
            <Text fontSize="sm">
              • Integrated Maintenance + Cleaning System
            </Text>
            <Text fontSize="sm">• Real-Time Asset Tracking (FEMS)</Text>
            <Text fontSize="sm">• Energy Optimization (BEMS Integration)</Text>
          </Box>
        </Box>
      </Grid>
    </Container>
  );
}
