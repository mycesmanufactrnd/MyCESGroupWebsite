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
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

/* =======================
   SUBSIDIARIES DATA
======================= */
const subsidiaries = [
  {
    name: "MYCES Sdn Bhd",
    image: "/subsidiaries/1.jpg",
  },
  {
    name: "MYCES Biomedical Engineering Sdn Bhd",
    image: "/subsidiaries/2.jpg",
    url: "",
  },
  {
    name: "MYCES Ventures Sdn Bhd",
    image: "/subsidiaries/3.jpg",
    url: "",
  },
  {
    name: "MYCES Manufacturing Sdn Bhd",
    image: "/subsidiaries/4.jpg",
    url: "",
  },
  {
    name: "MYCES Academy Sdn Bhd",
    image: "/subsidiaries/5.jpg",
    url: "",
  },
  {
    name: "MYCES Aircond & Electrical Services Sdn Bhd",
    image: "/subsidiaries/6.jpg",
  },
  {
    name: "MYCES Engineering Sdn Bhd",
    url: "",
    image: "/subsidiaries/7.jpg",
  },
];

/* =======================
   MAIN COMPONENT
======================= */
export default function SubsidiariesSection() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box bg="#dde0dcb3" py={{ base: 16, md: 24 }}>
      <Flex
        maxW="1200px"
        mx="auto"
        px={{ base: 6, md: 8 }}
        spacing={{ base: 120, md: 16 }}
        direction={{ base: "column", md: "row" }}
      >
        {/* LEFT STICKY HEADER */}
        <Box
          flex="0 0 35%"
          position={isMobile ? "relative" : "sticky"}
          top={isMobile ? "auto" : "120px"}
          alignSelf="flex-start"
          transform={{ base: "none", md: "translateX(-40px)" }}
        >
          <Stack spacing={5}>
            <Heading size="2xl" color="#223c26" fontWeight="bold">
              Our Subsidiaries
            </Heading>
            <Text color="gray.600" fontSize="md">
              Discover the specialized companies under the MYCES Group, each
              delivering focused expertise across engineering, biomedical,
              manufacturing, education, and technical services.
            </Text>
          </Stack>
        </Box>

        {/* RIGHT COLUMN — ONE COLUMN ONLY */}
        <Grid flex="1" templateColumns="1fr" spacing={6}>
          {subsidiaries.map((item, index) => (
            <SubsidiaryCard
              key={item.name}
              title={item.name}
              url={item.url}
              image={item.image}
              delay={index * 0.1}
            />
          ))}
        </Grid>
      </Flex>
    </Box>
  );
}

/* =======================
   SUBSIDIARY CARD
======================= */
function SubsidiaryCard({
  title,
  url,
  image,
  delay,
}: {
  title: string;
  url: string;
  image: string;
  delay: number;
}) {
  return (
    <LinkBox>
      <MotionBox
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
        whileHover={{
          scale: 1.04,
          boxShadow: "0 16px 36px rgba(0,0,0,0.18)",
        }}
        h="140px"
        borderRadius="md"
        overflow="hidden"
        border="1px solid"
        borderColor="gray.200"
        cursor="pointer"
      >
        {/* BACKGROUND IMAGE FROM /public */}
        <Box
          h="100%"
          bgImage={`url(${image})`}
          bgSize="cover"
          bgPos="center"
          position="relative"
        >
          {/* DARK OVERLAY FOR READABILITY */}
          <Box position="absolute" inset={0} bg="rgba(0,0,0,0.55)" />

          {/* TEXT CONTENT */}
          <Stack
            position="relative"
            h="100%"
            align="center"
            justify="center"
            textAlign="center"
            px={6}
            spacing={2}
          >
            <Heading fontSize="md" color="white" fontWeight="semibold">
              <LinkOverlay href={url}>{title}</LinkOverlay>
            </Heading>
          </Stack>
        </Box>
      </MotionBox>
    </LinkBox>
  );
}
