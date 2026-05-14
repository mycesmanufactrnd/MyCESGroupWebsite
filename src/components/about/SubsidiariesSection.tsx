"use client";

import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  Stack,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionBox = motion(Box);

const subsidiaries = [
  {
    name: "MyCES Biomedical Engineering",
    image: "/bioservice/1.png",
    href: "/services8/biomedical",
  },
  {
    name: "MyCES Manufacturing",
    image: "/subsidiaries/4.jpg",
    href: "/services/energy-audit/digitalsystem",
  },
  {
    name: "MyCES Academy",
    image: "/academyservice/aca1.png",
    href: "/services9/robotic",
  },
  {
    name: "MyCES Power Solution",
    image: "/portfolio/p15.jpg",
    href: "/services11/building",
  },
  {
    name: "MyCES Engineering",
    image: "/home/myces_eng.jpg",
    href: "/services/energy-audit",
  },
];

export default function SubsidiariesSection() {
  return (
    <Box bg="#f5f7f4" py={{ base: 16, md: 24 }}>
      <Flex
        maxW="1100px"
        mx="auto"
        px={{ base: 6, md: 8 }}
        gap={{ base: 8, md: 20 }} // ✅ better spacing
        direction={{ base: "column", md: "row" }} // ✅ correct order
        align="flex-start"
      >
        {/* LEFT (TEXT) */}
        <Box
          flex="0 0 35%"
          position={{ base: "static", md: "sticky" }} // ✅ fix overlap issue
          top="120px"
          mb={{ base: 6, md: 0 }} // ✅ spacing below text
          w="100%"
        >
          <Stack gap={6} textAlign={{ base: "center", md: "left" }}>
            <Heading size="2xl" color="#1B4D2E" fontWeight="bold">
              Our Subsidiaries
            </Heading>

            <Text color="gray.600" fontSize="md" lineHeight="1.8">
              Discover MyCES companies driving innovation across engineering,
              biomedical, manufacturing, and technical services.
            </Text>
          </Stack>
        </Box>

        {/* RIGHT (CARDS) */}
        <Grid flex="1" templateColumns="1fr" gap={8} w="100%">
          {subsidiaries.map((item, index) => (
            <SubsidiaryCard
              key={item.name}
              title={item.name}
              image={item.image}
              href={item.href}
              delay={index * 0.12}
            />
          ))}
        </Grid>
      </Flex>
    </Box>
  );
}

/* =======================
   CARD
======================= */
function SubsidiaryCard({
  title,
  image,
  href,
  delay,
}: {
  title: string;
  image: string;
  href: string;
  delay: number;
}) {
  return (
    <LinkBox>
      <MotionBox
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        whileHover="hover"
        borderRadius="2xl"
        overflow="hidden"
        cursor="pointer"
        position="relative"
        role="group"
      >
        {/* IMAGE */}
        <Box
          h={{ base: "160px", md: "180px" }}
          bgImage={`url(${image})`}
          bgSize="cover"
          bgPos="center"
          transition="all 0.5s ease"
          _groupHover={{
            transform: "scale(1.08)",
          }}
        />

        {/* GRADIENT */}
        <Box
          position="absolute"
          inset={0}
          bg="linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.2))"
          transition="all 0.4s ease"
          _groupHover={{
            bg: "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.1))",
          }}
        />

        {/* CONTENT */}
        <Flex position="absolute" inset={0} align="flex-end" p={6}>
          <Stack gap={1}>
            <Heading
              fontSize={{ base: "md", md: "lg" }}
              color="white"
              fontWeight="semibold"
            >
              <LinkOverlay as={Link} href={href}>
                {title}
              </LinkOverlay>
            </Heading>

            <Text
              fontSize="sm"
              color="whiteAlpha.800"
              opacity={0}
              transform="translateY(10px)"
              transition="all 0.3s"
              _groupHover={{
                opacity: 1,
                transform: "translateY(0)",
              }}
            >
              View Services →
            </Text>
          </Stack>
        </Flex>

        {/* BORDER */}
        <Box
          position="absolute"
          inset={0}
          borderRadius="2xl"
          border="1px solid rgba(255,255,255,0.1)"
          pointerEvents="none"
        />
      </MotionBox>
    </LinkBox>
  );
}
