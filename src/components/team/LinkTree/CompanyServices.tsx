"use client";

import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const services = [
  "Energy Audit Services",
  "Energy Monitoring System",
  "Energy Awareness Training",
  "Energy Auditor Training",
  "Project Management Consultation",
  "Energy Performance Contracting (EPC)",
  "Energy Management Performance Certification (EMGS, ISO50001:2001)",
];

const registrations = [
  "Registered as Energy Services Company (ESCO) at Suruhanjaya Tenaga",
  "Registered at Ministry of Finance (MOF) Malaysia (Cert. No: K22177838041730201)",
  "Registered at MyHIJAU (MyHS00038/17)",
];

export default function CompanyServices() {
  return (
    <MotionBox
      initial={{ y: 15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      mt={2}
    >
      {/* Section label */}
      <Text
        fontSize="10px"
        fontWeight="700"
        color="#2d3561"
        fontFamily="var(--font-jakarta), sans-serif"
        letterSpacing="widest"
        textTransform="uppercase"
        mb={3}
      >
        Services Offered
      </Text>

      <SimpleGrid columns={2} gap="6px" mb={5}>
        {services.map((s) => (
          <Box
            key={s}
            display="flex"
            alignItems="flex-start"
            gap={2}
          >
            <Box
              mt="5px"
              w="4px"
              h="4px"
              borderRadius="full"
              bg="#1a6b5a"
              flexShrink={0}
            />
            <Text
              fontSize="11px"
              color="gray.700"
              fontFamily="var(--font-inter), sans-serif"
              lineHeight="1.5"
            >
              {s}
            </Text>
          </Box>
        ))}
      </SimpleGrid>

      {/* Divider */}
      <Box borderTop="1px solid" borderColor="gray.200" pt={3}>
        {registrations.map((r) => (
          <Box key={r} display="flex" alignItems="flex-start" gap={2} mb={1}>
            <Box
              mt="5px"
              w="3px"
              h="3px"
              borderRadius="full"
              bg="#4a3f8c"
              flexShrink={0}
            />
            <Text
              fontSize="10px"
              color="gray.500"
              fontFamily="var(--font-inter), sans-serif"
              lineHeight="1.6"
            >
              {r}
            </Text>
          </Box>
        ))}
      </Box>
    </MotionBox>
  );
}