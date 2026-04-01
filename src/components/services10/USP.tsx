"use client";

import { Box, Grid, Heading, Text, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiLayers, FiAward, FiCpu, FiShield, FiWind } from "react-icons/fi";

const MotionBox = motion(Box);

const darkGreen = "#0B5D3B";
const deepGray = "#2D2D2D";
const lightGreenBg = "rgba(11, 93, 59, 0.06)";

const uspList = [
  {
    title: "Integration",
    icon: FiLayers,
    description:
      "Delivering solutions that combine technical expertise with building automation to create seamless facility operations.",
  },
  {
    title: "Expertise",
    icon: FiAward,
    description:
      "Utilizing a robust background in engineering and system integration to foster career advancement while supporting strategic and innovative business solutions.",
  },
  {
    title: "Innovation",
    icon: FiCpu,
    description:
      "Utilizing cutting-edge automation and intelligent systems to modernize critical infrastructures and facility reliability.",
  },
  {
    title: "Safety First",
    icon: FiShield,
    description:
      "A dedicated commitment to maintaining the highest safety standards.",
  },
  {
    title: "Sustainability",
    icon: FiWind,
    description:
      "Focusing on energy management solutions and efficiency-driven systems to reduce environmental impact and support long-term sustainability.",
  },
];

export default function USP() {
  return (
    <Box bg="gray.50" py={{ base: 20, md: 28 }} px={{ base: 6, md: 20 }}>
      {/* HEADER */}
      <Box textAlign="center" maxW="900px" mx="auto" mb={20}>
        <Heading
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"
          color={darkGreen}
          mb={4}
        >
          Our Unique Selling Proposition
        </Heading>
        <Text fontSize="md" color="gray.600">
          Empowering businesses to operate <b>Smarter</b>, <b>Safer</b>, and{" "}
          <b>Greener</b>
        </Text>
      </Box>

      {/* USP GRID */}
      <Grid
        maxW="1200px"
        mx="auto"
        templateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)",
          lg: "repeat(5, 1fr)",
        }}
        gap={10}
      >
        {uspList.map((usp, index) => {
          const Icon = usp.icon;

          return (
            <MotionBox
              key={usp.title}
              bg="white"
              border="1px solid"
              borderColor="gray.200"
              p={8}
              textAlign="center"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              _hover={{
                bg: lightGreenBg,
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
            >
              {/* ICON */}
              <Flex justify="center" mb={6}>
                <MotionBox
                  whileHover={{
                    scale: 1.15,
                    rotate:
                      usp.title === "Innovation"
                        ? 8
                        : usp.title === "Safety First"
                          ? 0
                          : 0,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <Box as={Icon} fontSize="42px" color={darkGreen} />
                </MotionBox>
              </Flex>

              {/* TITLE */}
              <Heading fontSize="lg" fontWeight="bold" color={deepGray} mb={3}>
                {usp.title}
              </Heading>

              {/* DESCRIPTION */}
              <Text fontSize="sm" color="gray.600" lineHeight="1.7">
                {usp.description}
              </Text>
            </MotionBox>
          );
        })}
      </Grid>
    </Box>
  );
}
