"use client";

import { Box, Flex, Text, SimpleGrid } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const MotionBox = motion(Box);

const servicesPortfolio = [
  {
    service: "Energy Audit",
    portfolios: [
      {
        title: "Energy Audit – Industrial Plant",
        image: "/portfolio/p3.jpg",
        href: "/subportfolio1",
      },
      {
        title: "Energy Audit – Commercial Building",
        image: "/portfolio/p4.jpg",
        href: "/portfolio/energy-audit-commercial",
      },
    ],
  },
  {
    service: "Equipment Rental",
    portfolios: [
      {
        title: "Industrial Equipment Rental",
        image: "/portfolio/p8.jpg",
        href: "/portfolio/equipment-rental",
      },
    ],
  },
  {
    service: "Measurement & Verification",
    portfolios: [
      {
        title: "Building Energy M&V Project",
        image: "/portfolio/p9.jpg",
        href: "/portfolio/measurement-verification",
      },
    ],
  },
  {
    service: "Biomedical",
    portfolios: [
      {
        title: "Biomedical Lab Setup",
        image: "/portfolio/p2.jpg",
        href: "/portfolio/biomedical-lab",
      },
    ],
  },
  {
    service: "Digital System",
    portfolios: [
      {
        title: "Digital Control System",
        image: "/portfolio/p5.jpg",
        href: "/portfolio/digital-system",
      },
    ],
  },
  {
    service: "Robotic Class",
    portfolios: [
      {
        title: "Robotics Training Program",
        image: "/portfolio/p6.jpg",
        href: "/portfolio/robotic-class",
      },
    ],
  },
  {
    service: "Indoor Air Quality (IAQ)",
    portfolios: [
      {
        title: "IAQ Monitoring Project",
        image: "/portfolio/p7.jpeg",
        href: "/portfolio/iaq-project",
      },
    ],
  },
  {
    service: "Building Automation System (BAS)",
    portfolios: [
      {
        title: "Smart BAS Installation",
        image: "/portfolio/p10.png",
        href: "/portfolio/bas-project",
      },
    ],
  },
  {
    service: "Building Automation System (BAS)",
    portfolios: [
      {
        title: "Smart BAS Installation",
        image: "/portfolio/p10.png",
        href: "/portfolio/bas-project",
      },
    ],
  },
  {
    service: "Building Automation System (BAS)",
    portfolios: [
      {
        title: "Smart BAS Installation",
        image: "/portfolio/p10.png",
        href: "/portfolio/bas-project",
      },
    ],
  },
  {
    service: "Building Automation System (BAS)",
    portfolios: [
      {
        title: "Smart BAS Installation",
        image: "/portfolio/p10.png",
        href: "/portfolio/bas-project",
      },
    ],
  },
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
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, xl: 6 }} gap={8}>
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
                    <Box position="absolute" inset={0} bg="rgba(0,0,0,0.35)" />
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
