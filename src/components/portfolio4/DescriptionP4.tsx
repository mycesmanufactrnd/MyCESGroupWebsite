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
  { label: "Total Projects", value: "14" },
  { label: "Sectors", value: "2" },
  { label: "EMGS Certified", value: "8" },
];

/* =========================
   🧠 DATA
========================= */
type ServiceType = "SEMS";

const portfolioData: Record<
  ServiceType,
  {
    description: string;
    sectors: Record<string, { client: string; date: string }[]>;
    achievements: { client: string; stars: string[] }[];
  }
> = {
  SEMS: {
    description:
      "Serving critical healthcare institutions and government ministries across Malaysia. Since 2018, SEMS has been successfully implemented in major projects, delivering real-time energy monitoring, operational efficiency, and compliance with national energy standards.",

    /* =========================
       SECTORS
    ========================= */
    sectors: {
      Healthcare: [
        { client: "KPJ Seremban Specialist Hospital", date: "Jan 2018" },
        { client: "KPJ Puteri Specialist Hospital", date: "Apr 2019" },
        { client: "Hospital Rehabilitasi Cheras (1 Star)", date: "Apr 2020" },
        { client: "National Institute of Health", date: "Aug 2021" },
        { client: "Tung Shin Hospital", date: "Aug 2021" },
        { client: "Hospital Rehabilitasi Cheras (2 Star)", date: "Jul 2022" },
        { client: "Kementerian Kesihatan Malaysia (MOH)", date: "Jul 2024" },
      ],
      Commercial: [
        { client: "Pejabat Setiausaha Kerajaan Terengganu", date: "May 2019" },
        { client: "Kementerian Pengangkutan", date: "Jul 2021" },
        { client: "Kementerian Dalam Negeri (Parcel D)", date: "Nov 2023" },
        { client: "Kementerian Sumber Manusia (Parcel D)", date: "Nov 2023" },
        { client: "Kementerian Pembangunan Usahawan", date: "Feb 2024" },
        { client: "Kementerian Pendidikan Malaysia", date: "Jun 2024" },
        { client: "SPRM (Putrajaya HQ)", date: "Aug 2024" },
      ],
    },

    /* =========================
       🏆 EMGS ACHIEVEMENTS
    ========================= */
    achievements: [
      {
        client: "KPJ Seremban Specialist Hospital",
        stars: ["1-Star"],
      },
      {
        client: "KPJ Puteri Specialist Hospital",
        stars: ["1-Star"],
      },
      {
        client: "SPRM HQ, Putrajaya",
        stars: ["1-Star"],
      },
      {
        client: "Kementerian Dalam Negeri HQ (Setia Perkasa)",
        stars: ["1-Star"],
      },
      {
        client: "Kementerian Sumber Manusia HQ (Setia Perkasa)",
        stars: ["1-Star"],
      },
      {
        client: "Hospital Rehabilitasi Cheras",
        stars: ["1-Star", "2-Star", "3-Star"],
      },
      {
        client: "Kementerian Pendidikan Malaysia HQ (Kompleks E)",
        stars: ["1-Star", "2-Star"],
      },
      {
        client: "Kementerian Kesihatan Malaysia HQ (Kompleks E)",
        stars: ["1-Star"],
      },
    ],
  },
};

/* =========================
   COMPONENT
========================= */
export default function SEMSPortfolio({ service = "SEMS" as ServiceType }) {
  const data = portfolioData[service];
  const [activeTab, setActiveTab] =
    useState<keyof typeof data.sectors>("Healthcare");

  return (
    <Container maxW="container.xl" py={12}>
      <Grid templateColumns={{ base: "1fr", md: "70% 30%" }} gap={10}>
        <Stack gap={10}>
          {/* TITLE */}
          <Box>
            <Text fontSize="2xl" fontWeight="bold" mb={3}>
              SEMS: Smart Energy Monitoring System
            </Text>
            <Text color="gray.700" lineHeight="tall">
              {data.description}
            </Text>
          </Box>

          {/* STATS */}
          <SimpleGrid columns={{ base: 1, md: 4 }} gap={4}>
            {stats.map((stat, i) => (
              <MotionBox
                key={i}
                p={5}
                border="1px solid #eee"
                borderRadius="lg"
                textAlign="center"
                whileHover={{ y: -4 }}
              >
                <Text fontSize="xl" fontWeight="bold" color="green.600">
                  {stat.value}
                </Text>
                <Text fontSize="xs" color="gray.500">
                  {stat.label}
                </Text>
              </MotionBox>
            ))}
          </SimpleGrid>

          {/* EMGS ACHIEVEMENTS */}
          <Box>
            <Flex justify="space-between" align="center" mb={3}>
              <Text fontWeight="bold">EMGS Achievements</Text>
            </Flex>

            <SimpleGrid columns={{ base: 2, md: 2, lg: 2 }} gap={4}>
              {data.achievements
                .sort((a, b) => b.stars.length - a.stars.length) // ⭐ show best first
                .map((item, i) => {
                  const isTop = item.stars.includes("3-Star");

                  return (
                    <MotionBox
                      key={i}
                      p={5}
                      borderRadius="xl"
                      border="1px solid"
                      borderColor={isTop ? "gray.200" : "gray.200"}
                      bg={isTop ? "white" : "white"}
                      boxShadow={isTop ? "lg" : "sm"}
                      whileHover={{ scale: 1.03 }}
                    >
                      {/* CLIENT */}
                      <Text fontWeight="bold" mb={2}>
                        {item.client}
                      </Text>

                      {/* STARS */}
                      <Flex gap={2} wrap="wrap" align="center">
                        {item.stars.map((star, idx) => (
                          <Badge
                            key={idx}
                            border="1px solid #D4AF37"
                            color="#B8962E"
                            bg="transparent"
                            px={2}
                            py={1}
                            borderRadius="md"
                          >
                            {star}
                          </Badge>
                        ))}
                      </Flex>

                      {/* HIGHLIGHT */}
                      {isTop && (
                        <Badge mt={3} colorScheme="yellow" variant="outline">
                          Highest Certification
                        </Badge>
                      )}
                    </MotionBox>
                  );
                })}
            </SimpleGrid>
          </Box>

          {/* TABS */}
          <Box>
            <Text fontWeight="bold" mb={3}>
              Deployment Sectors
            </Text>

            <Flex gap={2} overflowX="auto">
              {Object.keys(data.sectors).map((sector) => (
                <Button
                  key={sector}
                  size="sm"
                  flexShrink={0}
                  onClick={() =>
                    setActiveTab(sector as keyof typeof data.sectors)
                  }
                  colorScheme="green"
                  variant={activeTab === sector ? "solid" : "outline"}
                  borderRadius="half"
                >
                  {sector}
                </Button>
              ))}
            </Flex>
          </Box>

          {/* PROJECT CARDS */}
          <SimpleGrid columns={{ base: 2, md: 2, lg: 4 }} gap={4}>
            {(data.sectors[activeTab] ?? []).map((item, i) => (
              <MotionBox
                key={i}
                p={5}
                borderRadius="lg"
                border="1px solid #eee"
                whileHover={{ scale: 1.03 }}
              >
                <Text fontWeight="bold">{item.client}</Text>
                <Text fontSize="xs" color="gray.500" mt={1}>
                  {item.date}
                </Text>

                <Badge mt={2} colorScheme="green">
                  SEMS Deployment
                </Badge>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Stack>

        {/* SIDEBAR */}
        <Box position={{ md: "sticky" }} top={20}>
          <Text fontWeight="bold" fontSize="lg" mb={4}>
            Project Overview
          </Text>

          <Stack gap={4} fontSize="sm">
            <Box>
              <Text color="gray.500">System</Text>
              <Text>SEMS Platform</Text>
            </Box>

            <Box>
              <Text color="gray.500">Coverage</Text>
              <Text>Healthcare & Government</Text>
            </Box>

            <Box>
              <Text color="gray.500">Timeline</Text>
              <Text>2018 – 2024</Text>
            </Box>

            <Box>
              <Text color="gray.500">Strengths</Text>
              <Text>• Real-time Monitoring</Text>
              <Text>• Government Deployments</Text>
              <Text>• Healthcare Integration</Text>
              <Text>• EMGS Certified Sites</Text>
            </Box>
          </Stack>
        </Box>
      </Grid>
    </Container>
  );
}
