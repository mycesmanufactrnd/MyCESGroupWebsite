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
   📊 SMART CONTROL STATS
========================= */
const stats = [
  { label: "Smart Projects Delivered", value: "10+" },
  { label: "Residential Units", value: "700+" },
  { label: "Energy Savings", value: "Up to 30%" },
];

/* =========================
   🧠 SMART CONTROL DATA
========================= */
type ServiceType = "SMART_CONTROL";

const portfolioData: Record<
  ServiceType,
  {
    description: string;
    capabilities: string[];
    sectors: Record<string, string[]>;
  }
> = {
  SMART_CONTROL: {
    description:
      "Our Smart Control solutions integrate advanced automation technologies to enhance energy efficiency, security, and occupant comfort. From corporate offices to luxury residential developments, we deliver centralized systems that seamlessly manage lighting, HVAC, security, and energy usage through intelligent platforms.",

    capabilities: [
      "Smart Lighting & Automated Shading Systems",
      "Intelligent HVAC Climate Control",
      "Integrated Security (Smart Locks, CCTV Monitoring)",
      "Real-Time Energy Management & Analytics",
      "Centralized Control via Mobile Apps & Touch Panels",
    ],

    sectors: {
      "Commercial & Corporate": [
        "MDEC Office @ Bangsar South (Smart Infrastructure Deployment)",
        "Amazon Office @ Petaling Jaya (Advanced Automation Systems)",
      ],

      "Residential & Show Units": [
        "Eco Sanctuary Show Units (Smart Living Experience)",
        "Sunsuria Show Units (Lifestyle Automation Showcase)",
        "Daikin Smart Showroom Integration",
      ],

      "Large-Scale Residential": [
        "The Peak Residence (614 Units Smart Deployment)",
        "Aira Residence (154 Units Premium Smart Living)",
      ],
    },
  },
};

/* =========================
   📌 MAIN COMPONENT
========================= */
export default function SmartControlPortfolio({
  service = "SMART_CONTROL" as ServiceType,
}) {
  const data = portfolioData[service];

  const [activeTab, setActiveTab] = useState<keyof typeof data.sectors>(
    "Commercial & Corporate",
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
              Smart Control Building & House
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
              CAPABILITIES
          ========================= */}
          <Box>
            <Text fontWeight="bold" mb={3}>
              Technical Capabilities
            </Text>

            <SimpleGrid columns={{ base: 1, md: 2 }} gap={3}>
              {data.capabilities.map((item, i) => (
                <Box key={i} p={4} border="1px solid #eee" borderRadius="lg">
                  <Text fontSize="sm" fontWeight="bold">
                    {item}
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
                  colorScheme={activeTab === sector ? "cyan" : "gray"}
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
            {data.sectors[activeTab].map((project, i) => (
              <MotionBox
                key={i}
                p={5}
                borderRadius="lg"
                border="1px solid #eee"
                whileHover={{ scale: 1.03 }}
              >
                <Text fontWeight="bold">{project}</Text>

                <Badge mt={2} colorScheme="cyan">
                  Smart Control System
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
            System Overview
          </Text>

          <Box mb={3}>
            <Text fontSize="sm" fontWeight="bold" color="gray.500">
              SYSTEM TYPE
            </Text>
            <Text>Smart Building & Home Automation</Text>
          </Box>

          <Box mb={3}>
            <Text fontSize="sm" fontWeight="bold" color="gray.500">
              CORE FUNCTION
            </Text>
            <Text>Automation, Monitoring & Centralized Control</Text>
          </Box>

          <Box mb={3}>
            <Text fontSize="sm" fontWeight="bold" color="gray.500">
              CONTROL PLATFORM
            </Text>
            <Text>Mobile App, Touch Panel & Voice Integration</Text>
          </Box>

          <Box mt={6}>
            <Text fontSize="sm" fontWeight="bold" color="gray.500" mb={2}>
              KEY BENEFITS
            </Text>

            <Text fontSize="sm">• Up to 30% Energy Cost Reduction</Text>
            <Text fontSize="sm">• Smart Lifestyle Convenience</Text>
            <Text fontSize="sm">• Enhanced Security Monitoring</Text>
            <Text fontSize="sm">• Future-Proof Modular Systems</Text>
          </Box>
        </Box>
      </Grid>
    </Container>
  );
}
