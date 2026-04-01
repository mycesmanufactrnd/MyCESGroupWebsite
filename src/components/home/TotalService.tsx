"use client";

import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const stats = [
  {
    value: "139+",
    label: "Energy Audits Completed",
  },
  {
    value: "11",
    label: "Industries Served",
  },
  {
    value: "11+",
    label: "Years Experience",
  },
];

export default function EnergyAuditStats() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <Box w="full" py={{ base: 16, md: 20 }} bg="#CCD5C5">
      <Box maxW="6xl" mx="auto" px={6}>
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          gap={0}
          border="1px solid"
          borderColor="gray.200"
          borderRadius="lg"
          overflow="hidden"
        >
          {stats.map((item, index) => (
            <Box
              key={item.label}
              textAlign="center"
              py={{ base: 12, md: 16 }}
              px={6}
              bg="white"
              borderRight={
                index !== stats.length - 1
                  ? "1px solid rgba(0,0,0,0.06)"
                  : "none"
              }
              transition="all 0.35s ease"
              _hover={{
                transform: "translateY(-6px)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
              }}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {/* Number */}
              <Text
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="bold"
                color="#1B4D2E"
                mb={2}
              >
                {item.value}
              </Text>

              {/* Label */}
              <Text
                fontSize="sm"
                color="gray.600"
                textTransform="uppercase"
                letterSpacing="0.05em"
              >
                {item.label}
              </Text>

              {/* Accent Line */}
              <Box
                mt={5}
                mx="auto"
                w="40px"
                h="2px"
                bg="#1B4D2E"
                opacity={0.6}
              />
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
