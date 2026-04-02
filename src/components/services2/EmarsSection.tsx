"use client";

import { Box, Grid, Heading, Text, Flex } from "@chakra-ui/react";
import { useState } from "react";
import {
  FiCpu,
  FiActivity,
  FiLayers,
  FiGlobe,
  FiPieChart,
  FiBarChart2,
  FiDownload,
} from "react-icons/fi";

const darkGreen = "#0B5D3B"; // dark green for heading/icons
const sageGreen = "#94ac8cb3"; // sage green for back face
const cardHeight = "300px";

const features = [
  {
    id: 0,
    title: "IoT Integration",
    icon: FiActivity,
    description:
      "Seamlessly connects with hardware such as the MyCES D-Logger and Digital Power Meters (DPM) for automated data collection.",
  },
  {
    id: 1,
    title: "Real-time Tariff Calculation",
    icon: FiCpu,
    description:
      "Provides live visuals and calculations for all TNB tariff components, including on-peak, off-peak, and maximum demand.",
  },
  {
    id: 2,
    title: "Advanced Cost Analysis",
    icon: FiPieChart,
    description:
      "Tracks financial metrics such as Total Net Cost, Gross Cost, ICPT costs, and Feed-in Tariff (FiT).",
  },
  {
    id: 3,
    title: "Customizable Data Extraction",
    icon: FiDownload,
    description:
      "Allows users to extract energy consumption (kWh) at intervals of 30 minutes, 1 hour, 6 hours, 12 hours, or daily.",
  },
  {
    id: 4,
    title: "Performance Benchmarking",
    icon: FiBarChart2,
    description:
      "Calculates the Baseline Energy Index (BEI) based on factors like floor area, staff count, or patient numbers for hospitals.",
  },
  {
    id: 5,
    title: "Multi-Sector Reporting",
    icon: FiLayers,
    description:
      "Includes tailored reporting templates for commercial buildings, industrial plants, and water treatment facilities.",
  },
  {
    id: 6,
    title: "Data Portability",
    icon: FiGlobe,
    description:
      "Features the ability to export all load profiles and energy analysis data into Microsoft Excel (.xlsx) formats.",
  },
];

export default function EmarsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <Box py={{ base: 16, md: 24 }} px={{ base: 6, md: 20 }} bg="#dde0dcb3">
      {/* SECTION HEADER */}
      <Box textAlign="center" mb={20}>
        <Heading
          as="h2"
          fontSize={{ base: "2xl", md: "3xl" }}
          color={darkGreen}
          fontWeight="bold"
          mb={20}
        >
          What is E-MARS?
        </Heading>
        <Text
          fontSize={{ base: "md", md: "lg" }}
          color="gray.700"
          maxW="800px"
          mx="auto"
        >
          MYCES E-MARS (Energy Monitoring, Analysis and Reporting System) is a
          specialized digital platform designed for the continuous tracking and
          analysis of energy consumption within a buildings electrical system.
          It enables organizations to monitor utility costs in real-time,
          identify inefficiencies, and generate professional reports for energy
          audits.
        </Text>
      </Box>

      {/* FLIP CARDS GRID */}
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={10}
        maxW="1300px"
        mx="auto"
      >
        {features.map((item, index) => {
          const Icon = item.icon;
          const isFlipped = activeIndex === index;

          return (
            <Box
              key={item.id}
              h={cardHeight}
              perspective="1200px"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              onClick={() => setActiveIndex(isFlipped ? null : index)} // mobile tap
              cursor="pointer"
            >
              <Box
                position="relative"
                w="100%"
                h="100%"
                transition="transform 0.7s ease"
                transformStyle="preserve-3d"
                transform={isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"}
              >
                {/* FRONT FACE */}
                <Box
                  position="absolute"
                  inset={0}
                  bg="white"
                  borderRadius="lg"
                  border="1px solid #eee"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  backfaceVisibility="hidden"
                  p={6}
                  boxShadow="md"
                >
                  <Flex as={Icon} fontSize="36px" color={darkGreen} mb={4} />
                  <Heading
                    as="h3"
                    fontSize="lg"
                    textAlign="center"
                    color={darkGreen}
                  >
                    {item.title}
                  </Heading>
                </Box>

                {/* BACK FACE */}
                <Box
                  position="absolute"
                  inset={0}
                  bg={sageGreen}
                  borderRadius="lg"
                  border="1px solid #eee"
                  backfaceVisibility="hidden"
                  transform="rotateY(180deg)"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="flex-start"
                  p={6}
                  boxShadow="lg"
                >
                  <Heading
                    as="h4"
                    fontSize="md"
                    color={darkGreen}
                    mb={3}
                    textAlign="left"
                  >
                    {item.title}
                  </Heading>
                  <Text
                    fontSize="sm"
                    color="#1A1A1A"
                    lineHeight="1.6"
                    textAlign="left"
                  >
                    {item.description}
                  </Text>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
}
