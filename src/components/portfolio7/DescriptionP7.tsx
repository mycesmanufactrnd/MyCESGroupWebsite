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
   📊 ELECTRICAL WORK STATS
========================= */
const stats = [
  { label: "Total Projects", value: "11" },
  { label: "Sectors Covered", value: "3" },
  { label: "Installations", value: "20+ Units" },
];

/* =========================
   🧠 ELECTRICAL PROJECT DATA
========================= */
type ServiceType = "ELECTRICAL";

const portfolioData: Record<
  ServiceType,
  {
    description: string;
    sectors: Record<string, { project: string; client: string }[]>;
  }
> = {
  ELECTRICAL: {
    description:
      "Electrical engineering works covering high-voltage systems, industrial power monitoring installations, commercial electrical upgrades, and infrastructure wiring across Malaysia. Projects span educational institutions, industrial facilities, government-linked companies, and commercial buildings, ensuring safe, efficient, and reliable power distribution systems.",

    sectors: {
      Educational: [
        {
          project: "DPM installation and wiring",
          client:
            "UITM: Alor Gajah, Raub, Jengka, Dungun, Segamat, Kuala Pilah",
        },
      ],

      Commercial: [
        {
          project: "Supply Street Lighting Installation",
          client: "TNBES Sdn Bhd",
        },
        {
          project:
            "Electrical work at workspace PBS (Underfloor ducting & service outlet wiring)",
          client: "Universiti Putra Malaysia (UPM)",
        },
      ],

      Industrial: [
        {
          project: "DPM additional point installation & wiring",
          client: "Kayaku Safety Systems Sdn Bhd",
        },
        {
          project: "RS485 Module installation for Delab PQM 1000S",
          client: "Idemitsu SM Sdn Bhd",
        },
      ],
    },
  },
};

/* =========================
   📌 MAIN COMPONENT
========================= */
export default function ElectricalWorkPortfolio({
  service = "ELECTRICAL" as ServiceType,
}) {
  const data = portfolioData[service];

  const [activeTab, setActiveTab] =
    useState<keyof typeof data.sectors>("Commercial");

  return (
    <Container maxW="container.xl" py={12}>
      <Grid templateColumns={{ base: "1fr", md: "70% 30%" }} gap={10}>
        <Stack gap={10}>
          {/* =========================
              TITLE + DESCRIPTION
          ========================= */}
          <Box>
            <Text fontSize="2xl" fontWeight="bold" mb={3}>
              Electrical Engineering Works
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
              SECTOR TABS
          ========================= */}
          <Box>
            <Text fontWeight="bold" mb={3}>
              Project Sectors
            </Text>

            <Flex gap={3} wrap="wrap">
              {Object.keys(data.sectors).map((sector) => (
                <Button
                  key={sector}
                  size="sm"
                  onClick={() =>
                    setActiveTab(sector as keyof typeof data.sectors)
                  }
                  colorScheme={activeTab === sector ? "gray" : "blue"}
                  variant={activeTab === sector ? "solid" : "outline"}
                >
                  {sector}
                </Button>
              ))}
            </Flex>
          </Box>

          {/* =========================
              PROJECT LIST
          ========================= */}
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
            {data.sectors[activeTab].map((item, i) => (
              <MotionBox
                key={i}
                p={5}
                borderRadius="lg"
                border="1px solid #eee"
                whileHover={{ scale: 1.03 }}
              >
                <Text fontWeight="bold">{item.project}</Text>

                <Text fontSize="sm" color="gray.600" mt={1}>
                  {item.client}
                </Text>

                <Badge mt={2} colorScheme="gray">
                  Electrical Work
                </Badge>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Stack>

        {/* =========================
            SIDEBAR
        ========================= */}
        <Box position={{ md: "sticky" }} top={20}>
          <Text fontWeight="bold" fontSize="lg" mb={4}>
            Project Overview
          </Text>

          <Box mb={3}>
            <Text fontSize="sm" fontWeight="bold" color="gray.500">
              SCOPE
            </Text>
            <Text>High & Low Voltage Electrical Systems</Text>
          </Box>

          <Box mb={3}>
            <Text fontSize="sm" fontWeight="bold" color="gray.500">
              COVERAGE
            </Text>
            <Text>Industrial, Commercial & Educational Facilities</Text>
          </Box>

          <Box mb={3}>
            <Text fontSize="sm" fontWeight="bold" color="gray.500">
              SPECIALIZATION
            </Text>
            <Text>11KV Systems, Protection Relays & Power Distribution</Text>
          </Box>

          <Box mt={6}>
            <Text fontSize="sm" fontWeight="bold" color="gray.500" mb={2}>
              KEY STRENGTHS
            </Text>

            <Text fontSize="sm">• High Voltage (11KV) Installations</Text>
            <Text fontSize="sm">• Multi-Campus Electrical Deployment</Text>
            <Text fontSize="sm">• Industrial Power System Integration</Text>
            <Text fontSize="sm">
              • Protection & Relay Calibration Expertise
            </Text>
          </Box>
        </Box>
      </Grid>
    </Container>
  );
}
