"use client";

import { Box, Grid, Heading, Text, Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import Link from "next/link";
const companyGreen = "#0B5D3B";
const pillars = [
  {
    id: 1,
    title: "Electronic Components & Tools Supply",
    frontImage: "/academyservice/2.jpg",
    details: [
      "Supply of high-quality electronic components and tools for education and industry.",
      "Products include microcontrollers, sensors, circuit boards, and prototyping kits.",
      "Support for students, educators, and professionals in hands-on learning.",
      "Enable innovation, experimentation, and project development.",
    ],
  },
  {
    id: 2,
    title: "Coding Class & Technical Training",
    frontImage: "/academyservice/14.png",
    details: [
      "STEM-based courses in coding, robotics, and technical skills.",
      "Hands-on learning using Arduino, Raspberry Pi, and Micro:bit.",
      "Develop problem-solving, critical thinking, and engineering skills.",
      "Prepare learners for careers in science, technology, and digital industries.",
    ],
  },
  {
    id: 3,
    title: "Training Provider for Diverse Industries",
    frontImage: "/academyservice/aca1.png",
    details: [
      "HRD Corp-registered training provider offering structured and accredited programs.",
      "Training across biomedical, manufacturing, engineering, and air-conditioning & electrical sectors.",
      "Programs designed for corporate, institutional, and individual learners.",
      "Focus on practical skills, industry-relevant knowledge, and workforce development.",
    ],
  },
];

export default function MycesAcademyFocus() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <Box bg="gray.50" py={{ base: 16, md: 28 }} px={{ base: 6, md: 20 }}>
      {/* SECTION HEADER */}
      <Box textAlign="center" mb={{ base: 12, md: 16 }}>
        <Heading
          fontSize={{ base: "1xl", md: "2xl" }}
          fontWeight="bold"
          mb={4}
          color="#1e4b16"
        >
          Our Main Focus Areas
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
          Empowering individuals and industries with practical skills and
          innovative solutions
        </Text>
      </Box>

      {/* FLIP CARDS GRID */}
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap={{ base: 8, md: 10 }}
        maxW="1300px"
        mx="auto"
      >
        {pillars.map((pillar, index) => {
          const isFlipped = activeIndex === index;

          return (
            <Box
              key={pillar.id}
              h="420px"
              perspective="1200px"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              onClick={() => setActiveIndex(isFlipped ? null : index)} // mobile tap
            >
              <Box
                position="relative"
                w="100%"
                h="100%"
                transition="transform 0.7s ease-in-out"
                transformStyle="preserve-3d"
                transform={isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"}
                boxShadow="0 12px 40px rgba(0,0,0,0.2)"
                borderRadius="16px"
                cursor="pointer"
              >
                {/* FRONT FACE */}
                <Box
                  position="absolute"
                  inset={0}
                  bgImage={`url(${pillar.frontImage})`}
                  bgSize="cover"
                  bgPos="center"
                  backfaceVisibility="hidden"
                  display="flex"
                  flexDirection="column"
                  justifyContent="flex-end"
                  borderRadius="16px"
                  overflow="hidden"
                  boxShadow="0 20px 45px rgba(0,0,0,0.45)" // 🔥 stronger shadow
                  transition="all 0.4s ease"
                  _hover={{
                    transform: "translateY(-6px)",
                    boxShadow: "0 30px 60px rgba(0,0,0,0.45)",
                  }}
                >
                  {/* 🔥 overlay layer (VERY IMPORTANT for depth) */}
                  <Box
                    position="absolute"
                    inset={0}
                    bg="linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2))"
                    zIndex={0}
                  />

                  <Box position="relative" zIndex={1} p={6}>
                    <Text
                      fontSize="3xl"
                      fontWeight="extrabold"
                      color="white"
                      mb={2}
                    >
                      0{pillar.id}
                    </Text>
                    <Heading fontSize="xl" color="white">
                      {pillar.title}
                    </Heading>
                  </Box>
                </Box>

                {/* BACK FACE */}
                <Box
                  position="absolute"
                  inset={0}
                  bg="#dde0dcb3"
                  backfaceVisibility="hidden"
                  transform="rotateY(180deg)"
                  borderRadius="16px"
                  p={6}
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Box as="ul" pl={4}>
                    {pillar.details.map((item, idx) => (
                      <Box
                        as="li"
                        key={idx}
                        mb={2}
                        fontSize="sm"
                        color="gray.700"
                        lineHeight="1.6"
                        _hover={{ ml: 2, transition: "0.2s" }}
                      >
                        • {item}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Grid>
      {/* import Link from "next/link"; */}
      {/* const companyGreen = "#0B5D3B"; */}
      <Flex justify="flex-end" mt={10} mr="5%">
        <Link href="/services9/robotic" passHref>
          <Button
            bg="white"
            color={companyGreen}
            border="1px solid"
            borderColor={companyGreen}
            px={6}
            py={5}
            fontSize="sm"
            fontWeight="medium"
            borderRadius="md"
            _hover={{
              bg: companyGreen,
              color: "white",
            }}
            _active={{
              transform: "scale(0.98)",
            }}
            transition="all 0.2s ease"
          >
            Learn More →
          </Button>
        </Link>
      </Flex>
    </Box>
  );
}
