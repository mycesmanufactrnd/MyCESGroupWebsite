"use client";

import { Box, Heading, Text, SimpleGrid, Image, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const coreValues = [
  {
    title: "Innovative",
    image: "/homepage/core_innovation.jpg",
    description:
      "We promote creativity and critical thinking, evolving with industry advancements to provide cutting-edge STEM education[cite: 1134].",
  },
  {
    title: "Integrity",
    image: "/homepage/core_integrity.png",
    description:
      "We uphold honesty, transparency, and ethics, building trust with all our students and stakeholders[cite: 1135].",
  },
  {
    title: "Excellence",
    image: "/homepage/core_excellence.jpg",
    description:
      "We deliver high-quality education, constantly improving our programs to exceed expectations and industry standards[cite: 1136].",
  },
  {
    title: "Hands-on Learning",
    image: "/homepage/core_hands_on.jpg",
    description:
      "We bridge the gap between classroom theory and real-world application through practical, experiential engineering programs[cite: 1126].",
  },
  {
    title: "Nurturing Growth",
    image: "/homepage/core_nurture.jpg",
    description:
      "We are committed to nurturing future-ready innovators who are prepared for lifelong learning and professional success[cite: 1127].",
  },
  {
    title: "Collaboration",
    image: "/homepage/core_collaboration.jpg",
    description:
      "We work closely with schools and businesses to provide tailored PCB design and technical training solutions[cite: 1144, 1145].",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: index * 0.2,
    },
  }),
};

export default function CoreValues() {
  return (
    <Box maxW="7xl" mx="auto" px={6} py={{ base: 16, md: 24 }}>
      {/* ===== SECTION HEADER ===== */}
      <Box textAlign="center" mb={20}>
        <Heading
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="800"
          color="green.800"
          letterGap="0.1em"
          mb={4}
        >
          CORE VALUES
        </Heading>

        <Text maxW="4xl" mx="auto" color="gray.600" fontSize="md">
          At MyCES Aircond & Electrical Services Sdn. Bhd., our core values
          guide how we work, make decisions, and deliver services. They reflect
          our commitment to integrity, innovation, safety, sustainability,
          excellence, and customer satisfaction.
        </Text>
      </Box>

      {/* ===== CORE VALUES GRID ===== */}
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        gapX={{ base: 26, md: 30 }}
        gapY={{ base: 40, md: 48 }}
      >
        {coreValues.map((value, index) => (
          <MotionBox
            key={value.title}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            textAlign="center"
            mb={{ base: 6, md: 10 }} // 🔥 extra gap per card
          >
            <Stack gap={6} align="center">
              <Image
                src={value.image}
                alt={value.title}
                w="100%"
                maxW="360px"
                aspectRatio={4 / 3}
                objectFit="cover"
              />

              <Heading fontSize="xl" fontWeight="700" color="green.800">
                {value.title}
              </Heading>

              <Text
                color="gray.600"
                fontSize="sm"
                lineHeight="1.9" // slightly more readable
                maxW="320px"
              >
                {value.description}
              </Text>
            </Stack>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  );
}
