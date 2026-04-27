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
   📊 ENERGY TALK STATS
========================= */
const stats = [
  { label: "Healthcare Institutions", value: "20" },
  { label: "Years of Expertise", value: "9+" },
  { label: "Repeat Engagements", value: "Ongoing" },
];

/* =========================
   🧠 ENERGY TALK DATA
========================= */
type ServiceType = "ENERGY_TALK";

const portfolioData: Record<
  ServiceType,
  {
    description: string;
    sectors: Record<
      string,
      {
        client: string;
        topic: string;
      }[]
    >;
  }
> = {
  ENERGY_TALK: {
    description:
      "Energy Talk programs delivered by our subject matter experts focus on driving energy awareness, operational efficiency, and behavioral change in critical facilities. With nearly a decade of experience (2017–2024), our sessions are widely adopted by healthcare institutions and engineering organizations to strengthen energy management culture and compliance with national energy standards.",

    sectors: {
      Healthcare: [
        {
          client: "Hospital Rehabilitasi Cheras",
          topic: "Strategic Energy Management for Modern Hospitals",
        },
        {
          client: "National Institute of Health (NIH)",
          topic:
            "Optimizing Hospital Energy Efficiency Through Operational Behavior",
        },
        {
          client: "KPJ Specialist Hospitals",
          topic: "Chiller Efficiency & Energy Cost Reduction Strategies",
        },
        {
          client: "Columbia Asia Hospitals",
          topic: "Energy Awareness for Sustainable Healthcare Operations",
        },
      ],

      Education: [
        {
          client: "Universiti Malaysia Pahang (UMP)",
          topic: "Engineering Energy Optimization & Sustainability Practices",
        },
      ],
    },
  },
};

/* =========================
   📌 MAIN COMPONENT
========================= */
export default function EnergyTalkPortfolio({
  service = "ENERGY_TALK" as ServiceType,
}) {
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
              Energy Talk: SME Training & Awareness Programs
            </Text>

            <Text color="gray.700" lineHeight="tall">
              {data.description}
            </Text>
          </Box>

          {/* =========================
              STATS (SME POSITIONING)
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
              CATEGORY TABS
          ========================= */}
          <Box>
            <Text fontWeight="bold" mb={3}>
              Training Categories
            </Text>

            <Flex gap={3} wrap="wrap">
              {Object.keys(data.sectors).map((sector) => (
                <Button
                  key={sector}
                  size="sm"
                  onClick={() =>
                    setActiveTab(sector as keyof typeof data.sectors)
                  }
                  colorScheme={activeTab === sector ? "teal" : "gray"}
                  variant={activeTab === sector ? "solid" : "outline"}
                >
                  {sector}
                </Button>
              ))}
            </Flex>
          </Box>

          {/* =========================
              TALK SESSIONS
          ========================= */}
          <SimpleGrid columns={{ base: 2, md: 2, lg: 4 }} gap={4}>
            {data.sectors[activeTab].map((item, i) => (
              <MotionBox
                key={i}
                p={5}
                borderRadius="lg"
                border="1px solid #eee"
                whileHover={{ scale: 1.03 }}
              >
                <Text fontWeight="bold">{item.client}</Text>

                <Text fontSize="sm" color="gray.700" mt={1}>
                  {item.topic}
                </Text>

                <Badge mt={2} colorScheme="teal">
                  Energy Talk
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
            SME Profile Overview
          </Text>

          <Box mb={3}>
            <Text fontSize="sm" fontWeight="bold" color="gray.500">
              EXPERTISE AREA
            </Text>
            <Text>Energy & Facility Optimization Training</Text>
          </Box>

          <Box mb={3}>
            <Text fontSize="sm" fontWeight="bold" color="gray.500">
              INDUSTRY FOCUS
            </Text>
            <Text>Healthcare and Education</Text>
          </Box>

          <Box mb={3}>
            <Text fontSize="sm" fontWeight="bold" color="gray.500">
              EXPERIENCE
            </Text>
            <Text>2017 – Present</Text>
          </Box>

          <Box mt={6}>
            <Text fontSize="sm" fontWeight="bold" color="gray.500" mb={2}>
              KEY STRENGTHS
            </Text>

            <Text fontSize="sm">• Behavioral Energy Management Training</Text>
            <Text fontSize="sm">• Healthcare Energy Optimization Culture</Text>
            <Text fontSize="sm">• Repeated Institutional Engagements</Text>
            <Text fontSize="sm">• Engineering & Academic-Level Seminars</Text>
          </Box>
        </Box>
      </Grid>
    </Container>
  );
}
