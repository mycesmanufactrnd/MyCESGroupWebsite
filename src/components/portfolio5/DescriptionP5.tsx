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
   📊 STATS
========================= */
const stats = [
  { label: "Total Projects", value: "13" },
  { label: "System Types", value: "2" },
];

/* =========================
   🧠 DATA
========================= */
type ServiceType = "MV";

const portfolioData: Record<
  ServiceType,
  {
    description: string;
    sectors: Record<string, { client: string }[]>;
  }
> = {
  MV: {
    description:
      "Focus on validating energy performance improvements across healthcare facilities. These projects ensure accurate energy savings measurement for chiller and lighting systems, supporting optimization and compliance reporting.",

    sectors: {
      "Chiller System": [
        { client: "Hospital Kuala Pilah" },
        { client: "Hospital Langkawi" },
        { client: "Hospital Kulim" },
        { client: "Hospital Batu Pahat" },
      ],

      "Lighting System": [
        { client: "Hospital Segamat" },
        { client: "Hospital Kluang" },
        { client: "Hospital Kuala Pilah" },
        { client: "Hospital Port Dickson" },
        { client: "Hospital Batu Pahat" },
      ],
    },
  },
};

/* =========================
   📌 COMPONENT
========================= */
export default function MVPortfolio({ service = "MV" as ServiceType }) {
  const data = portfolioData[service];

  // ✅ AUTO SAFE DEFAULT
  const [activeTab, setActiveTab] = useState<keyof typeof data.sectors>(
    Object.keys(data.sectors)[0] as keyof typeof data.sectors,
  );

  return (
    <Container maxW="container.xl" py={12}>
      <Grid templateColumns={{ base: "1fr", md: "70% 30%" }} gap={10}>
        <Stack gap={10}>
          {/* =========================
              TITLE + DESCRIPTION
          ========================= */}
          <Box>
            <Text fontSize="2xl" fontWeight="bold" mb={3}>
              Measurement & Verification (M&V)
            </Text>

            <Text color="gray.700" lineHeight="tall">
              {data.description}
            </Text>
          </Box>

          {/* =========================
              STATS
          ========================= */}
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
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
              TABS
          ========================= */}
          <Box>
            <Text fontWeight="bold" mb={3}>
              M&V Categories
            </Text>

            <Flex gap={3} overflowX="auto">
              {Object.keys(data.sectors).map((sector) => (
                <Button
                  key={sector}
                  size="sm"
                  onClick={() =>
                    setActiveTab(sector as keyof typeof data.sectors)
                  }
                  colorScheme={activeTab === sector ? "green" : "gray"}
                  variant={activeTab === sector ? "solid" : "outline"}
                  borderRadius="half"
                  flexShrink={0}
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
            {data.sectors[activeTab]?.map((item, i) => (
              <MotionBox
                key={i}
                p={5}
                borderRadius="lg"
                border="1px solid #eee"
                whileHover={{ scale: 1.03 }}
              >
                <Text fontWeight="bold">{item.client}</Text>

                {/* CATEGORY TAG */}
                <Badge mt={2} colorScheme="green">
                  {activeTab}
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

          <Stack gap={4} fontSize="sm">
            <Box>
              <Text color="gray.500">System Type</Text>
              <Text>M&V (Measurement & Verification)</Text>
            </Box>

            <Box>
              <Text color="gray.500">Focus Area</Text>
              <Text>{activeTab}</Text>
            </Box>

            <Box>
              <Text color="gray.500">Coverage</Text>
              <Text>Hospitals Across Malaysia</Text>
            </Box>

            <Box>
              <Text color="gray.500">Key Strengths</Text>
              <Text>• Chiller Performance Validation</Text>
              <Text>• Lighting Optimization Tracking</Text>
              <Text>• Energy Savings Verification</Text>
              <Text>• Continuous Performance Monitoring</Text>
            </Box>
          </Stack>
        </Box>
      </Grid>
    </Container>
  );
}
