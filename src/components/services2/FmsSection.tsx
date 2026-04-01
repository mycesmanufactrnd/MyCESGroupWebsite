"use client";

import { Box, Grid, Heading, Text, Flex } from "@chakra-ui/react";
import { useState } from "react";
import {
  FiLayers,
  FiCalendar,
  FiFileText,
  FiBarChart2,
  FiClock,
  FiDollarSign,
} from "react-icons/fi";

const darkGreen = "#15350f";
const sageGreen = "#94ac8cb3";
const cardHeight = "320px";

const features = [
  {
    id: 0,
    title: "Asset Lifecycle Tracking",
    icon: FiLayers,
    description:
      "Efficiently manages the full history of an asset, including its maintenance records, expected lifespan, and associated costs.",
  },
  {
    id: 1,
    title: "Planned Preventive Maintenance (PPM)",
    icon: FiCalendar,
    description:
      "Automatically generates maintenance schedules to ensure timely, proactive actions that prevent equipment failure.",
  },
  {
    id: 2,
    title: "Digital Documentation",
    icon: FiFileText,
    description:
      "Replaces manual paperwork with digital forms and online reporting for faster, more accurate record-keeping.",
  },
  {
    id: 3,
    title: "Data-Driven Analytics",
    icon: FiBarChart2,
    description:
      "Utilizes powerful analytical tools to help management make informed decisions and optimize maintenance strategies.",
  },
  {
    id: 4,
    title: "Automated Scheduling",
    icon: FiClock,
    description:
      "Simplifies the coordination of maintenance tasks through automated task generation and tracking.",
  },
  {
    id: 5,
    title: "Cost Management",
    icon: FiDollarSign,
    description:
      "Provides a centralized view of maintenance spending to facilitate better budget planning and cost savings.",
  },
];

export default function FmsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <Box
      py={{ base: 16, md: 24 }}
      px={{ base: 6, md: 20 }}
      position="relative"
      overflow="hidden"
      bgImage="url('/dsservice/3.jpg')" // your background image path
      bgSize="cover"
      bgPos="center"
      bgAttachment="fixed" // static background
    >
      {/* Optional overlay to improve text contrast */}
      <Box
        position="absolute"
        inset={0}
        bg="rgba(255, 255, 255, 0.36)" // light overlay so cards are readable
        zIndex={0}
      />

      <Box position="relative" zIndex={1}>
        {/* SECTION HEADER */}
        <Box textAlign="center" mb={12}>
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "4xl" }}
            color={darkGreen}
            fontWeight="bold"
            mb={8}
          >
            What is FMS?
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.900"
            maxW="800px"
            mx="auto"
          >
            The MYCES Facility Management System (FMS) is a comprehensive digital
            solution created to streamline and modernize the management of physical
            assets. It digitalizes traditional maintenance workflows, allowing
            businesses to optimize their maintenance processes, enhance asset
            visibility, and improve overall operational productivity.
          </Text>
        </Box>

        {/* FLIP CARDS GRID */}
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)", lg: "repeat(3, 1fr)" }}
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
                onClick={() => setActiveIndex(isFlipped ? null : index)}
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
                    <Heading as="h3" fontSize="lg" textAlign="center" color={darkGreen}>
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
                    <Flex align="flex-start" mb={3}>
                      <Flex as={Icon} fontSize="28px" color={darkGreen} mr={3} mt={1} />
                      <Heading as="h4" fontSize="md" color={darkGreen} textAlign="left">
                        {item.title}
                      </Heading>
                    </Flex>
                    <Text fontSize="sm" color="#1A1A1A" lineHeight="1.6" textAlign="left">
                      {item.description}
                    </Text>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
