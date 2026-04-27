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
   📊 GENERAL WORK STATS
========================= */
const stats = [
  { label: "Total Projects", value: "2" },
  { label: "Sectors Covered", value: "2" },
  { label: "Infrastructure Works", value: "Specialized" },
];

/* =========================
   🧠 GENERAL WORK DATA
========================= */
type ServiceType = "GENERAL_WORKS";

const portfolioData: Record<
  ServiceType,
  {
    description: string;
    sectors: Record<string, { project: string; client: string }[]>;
  }
> = {
  GENERAL_WORKS: {
    description:
      "General works projects covering electrical infrastructure upgrades, civil works, and site development activities. These projects include workspace electrical installations, underground ducting systems, process engineering works, and agricultural infrastructure development, demonstrating versatility across administrative and industrial environments.",

    sectors: {
      Administrative: [
        {
          project:
            "Electrical work at workspace PBS (Underfloor ducting & service outlet wiring)",
          client: "Putra Business School, Universiti Putra Malaysia (UPM)",
        },
      ],

      Industrial: [
        {
          project: "Geomap Process Implementation",
          client: "Pertubuhan Peladang Kawasan Mersing",
        },
        {
          project: "Boring Kolam Udang (Aquaculture Water System)",
          client: "Pertubuhan Peladang Kawasan Mersing",
        },
        {
          project: "Boring Kebun Sawah (Agricultural Irrigation System)",
          client: "Pertubuhan Peladang Kawasan Mersing",
        },
      ],
    },
  },
};

/* =========================
   📌 MAIN COMPONENT
========================= */
export default function GeneralWorksPortfolio({
  service = "GENERAL_WORKS" as ServiceType,
}) {
  const data = portfolioData[service];

  const [activeTab, setActiveTab] =
    useState<keyof typeof data.sectors>("Administrative");

  return (
    <Container maxW="container.xl" py={12}>
      <Grid templateColumns={{ base: "1fr", md: "70% 30%" }} gap={10}>
        <Stack gap={10}>
          {/* =========================
              TITLE + DESCRIPTION
          ========================= */}
          <Box>
            <Text fontSize="2xl" fontWeight="bold" mb={3}>
              General Works & Infrastructure Projects
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
              Project Categories
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
                  General Works
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
            <Text>Electrical, Civil & Infrastructure Works</Text>
          </Box>

          <Box mb={3}>
            <Text fontSize="sm" fontWeight="bold" color="gray.500">
              COVERAGE
            </Text>
            <Text>Educational & Agricultural Facilities</Text>
          </Box>

          <Box mb={3}>
            <Text fontSize="sm" fontWeight="bold" color="gray.500">
              SPECIALIZATION
            </Text>
            <Text>Wiring Systems, Borehole Works & Process Engineering</Text>
          </Box>

          <Box mt={6}>
            <Text fontSize="sm" fontWeight="bold" color="gray.500" mb={2}>
              KEY STRENGTHS
            </Text>

            <Text fontSize="sm">• Electrical Infrastructure Installation</Text>
            <Text fontSize="sm">
              • Underground Ducting & Office Wiring Systems
            </Text>
            <Text fontSize="sm">• Agricultural Borehole Development Works</Text>
            <Text fontSize="sm">• Process Engineering & Site Development</Text>
          </Box>
        </Box>
      </Grid>
    </Container>
  );
}
