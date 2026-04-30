"use client";

import { Box, Flex, Text, SimpleGrid } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const MotionBox = motion(Box);

const servicesPortfolio = [
  {
    service: "ENERGY AUDIT",
    portfolios: [
      {
        title: "ENERGY AUDIT ",
        image: "/portfolio/9.jpg",
        href: "/subportfolio1?service=ENERGY%20AUDIT",
      },
    ],
  },
  {
    service: "ENERGY MONITORING SYSTEM (EMARS) ",
    portfolios: [
      {
        title: "ENERGY MONITORING SYSTEM (EMARS) ",
        image: "/portfolio/p8.jpg",
        href: "/subportfolio2?service=ENERGY MONITORING SYSTEM%20(EMARS)",
      },
    ],
  },
  {
    service: "COMPUTERIZED MAINTENANCE MANAGEMENT SYSTEM (CMMS)",
    portfolios: [
      {
        title: "COMPUTERIZED MAINTENANCE MANAGEMENT SYSTEM (CMMS)",
        image: "/portfolio/p11.jpg",
        href: "/subportfolio3?service=COMPUTERIZED%20MAINTENANCE%20MANAGEMENT%20SYSTEM%20(CMMS)",
      },
    ],
  },
  {
    service: "SUSTAINABLE ENERGY MANAGEMENT SYSTEM (SEMS)",
    portfolios: [
      {
        title: "SUSTAINABLE ENERGY MANAGEMENT SYSTEM (SEMS)",
        image: "/portfolio/emgs.jpeg",
        href: "/subportfolio4?service=SUSTAINABLE%20ENERGY%20MANAGEMENT%20SYSTEM%20(SEMS)",
      },
    ],
  },
  {
    service: "MEASUREMENT AND VERIFICATION (M&V)",
    portfolios: [
      {
        title: "MEASUREMENT AND VERIFICATION (M&V)",
        image: "/portfolio/17.jpg",
        href: "/subportfolio5?service=MEASUREMENT%20AND%20VERIFICATION%20(M%26V)",
      },
    ],
  },
  {
    service: "ENERGY TRAINING",
    portfolios: [
      {
        title: "ENERGY TRAINING",
        image: "/portfolio/18.png",
        href: "/subportfolio6?service=ENERGY%20TRAINING",
      },
    ],
  },
  {
    service: "ELECTRICAL WORKS",
    portfolios: [
      {
        title: "ELECTRICAL WORKS",
        image: "/portfolio/p15.jpg",
        href: "/subportfolio7?service=ELECTRICAL%20WORKS",
      },
    ],
  },
  // {
  //   service: "GENERAL WORKS",
  //   portfolios: [
  //     {
  //       title: "GENERAL WORKS",
  //       image: "/portfolio/p14.jpg",
  //       href: "/subportfolio8?service=GENERAL%20WORKS",
  //     },
  //   ],
  // },
  // {
  //   service: "SMART CONTROL BUILDING AND HOUSE",
  //   portfolios: [
  //     {
  //       title: "SMART CONTROL BUILDING AND HOUSE",
  //       image: "/portfolio/p15.jpg",
  //       href: "/subportfolio9?service=SMART%20CONTROL%20BUILDING%20AND%20HOUSE",
  //     },
  //   ],
  // },
];

export default function Portfolio() {
  const allProjects = servicesPortfolio.flatMap((s) =>
    s.portfolios.map((p) => ({ ...p, category: s.service })),
  );

  return (
    <Box w="full">
      {/* ================= PORTFOLIO GRID ================= */}
      <Box px={{ base: 4, md: 10 }} py={12}>
        <AnimatePresence mode="popLayout">
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, xl: 5 }} gap={8}>
            {allProjects.map((project) => (
              <Box key={project.title} bg="white" p="6px">
                <Link href={project.href}>
                  <MotionBox
                    layout
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    position="relative"
                    aspectRatio="2 / 3"
                    overflow="hidden"
                    cursor="pointer"
                  >
                    <Box
                      position="absolute"
                      inset={0}
                      bgImage={`url(${project.image})`}
                      bgSize="cover"
                      bgPos="center"
                    />
                    <Box position="absolute" inset={0} bg="rgba(0,0,0,0.55)" />
                    <Flex
                      position="absolute"
                      inset={0}
                      align="center"
                      justify="center"
                      textAlign="center"
                      px={4}
                    >
                      <Text
                        color="white"
                        fontWeight="bold"
                        textShadow="2px 2px 6px rgba(0,0,0,0.7)"
                        fontSize="lg"
                        letterSpacing="0.05em"
                        textTransform="uppercase"
                      >
                        {project.title}
                      </Text>
                    </Flex>
                  </MotionBox>
                </Link>
              </Box>
            ))}
          </SimpleGrid>
        </AnimatePresence>
      </Box>
    </Box>
  );
}
