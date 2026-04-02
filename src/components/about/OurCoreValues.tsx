"use client";

import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";

const values = [
  {
    id: 0,
    title: "Integrity",
    frontImage: "/images/core1.jpg",
    backTitle: "Integrity",
    backText:
      "We act with honesty, transparency, and professionalism in everything we do.",
  },
  {
    id: 1,
    title: "Innovation",
    frontImage: "/images/core2.jpg",
    backTitle: "Innovation",
    backText:
      "We embrace new ideas and technologies to deliver smarter, more effective solutions.",
  },
  {
    id: 2,
    title: "Excellence",
    frontImage: "/images/core3.jpg",
    backTitle: "Excellence",
    backText:
      "We are committed to high-quality work, safety, and continuous improvement.",
  },
  {
    id: 3,
    title: "Sustainability",
    frontImage: "/aboutcore/1.jpg",
    backTitle: "Sustainability",
    backText:
      "We promote responsible energy use and environmentally conscious practices.",
  },
  {
    id: 4,
    title: "Collaboration",
    frontImage: "/aboutcore/2.jpg",
    backTitle: "Collaboration",
    backText:
      "We value teamwork, partnerships, and strong relationships with clients and communities.",
  },
  {
    id: 5,
    title: "Accountability",
    frontImage: "/aboutcore/4.jpg",
    backTitle: "Accountability",
    backText:
      "We take responsibility for our actions, delivering on promises and measurable results.",
  },
];

export default function OurCoreValues() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <Box bg="white" py={{ base: 20, md: 28 }} px={{ base: 6, md: 20 }}>
      {/* Header */}
      <Box textAlign="center" mb={16}>
        <Heading fontSize={{ base: "3xl", md: "2.5xl" }} fontWeight="bold">
          <Text as="span" color="#223c26">
            Our{" "}
          </Text>
          <Text as="span" color="#223c26" fontWeight="bold">
            Core Values
          </Text>
        </Heading>
      </Box>

      {/* Flip Cards */}
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap={10}
        maxW="1300px"
        mx="auto"
      >
        {values.map((item, index) => {
          const isFlipped = activeIndex === index;

          return (
            <Box
              key={item.id}
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
                transition="transform 0.6s ease"
                transformStyle="preserve-3d"
                transform={isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"}
              >
                {/* FRONT */}
                <Box
                  position="absolute"
                  inset={0}
                  bgImage={`url(${item.frontImage})`}
                  bgSize="cover"
                  bgPos="center"
                  backfaceVisibility="hidden"
                >
                  <Text
                    position="absolute"
                    bottom={6}
                    w="100%"
                    textAlign="center"
                    color="white"
                    fontSize="xl"
                    fontWeight="medium"
                  >
                    {item.title}
                  </Text>
                </Box>

                {/* BACK */}
                <Box
                  position="absolute"
                  inset={0}
                  bg="white"
                  transform="rotateY(180deg)"
                  backfaceVisibility="hidden"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  px={10}
                  textAlign="center"
                  boxShadow="lg"
                >
                  <Heading
                    fontSize="xl"
                    color="#0F2A1D"
                    fontFamily="serif"
                    fontWeight="medium"
                    mb={4}
                  >
                    {item.backTitle}
                  </Heading>
                  <Text color="gray.700" fontSize="md" lineHeight="1.8">
                    {item.backText}
                  </Text>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
}
