"use client";

import { Box, Grid, Heading, Text, Button } from "@chakra-ui/react";
import { useState } from "react";

const darkGreen = "#0B5D3B";

const reemCards = [
  {
    id: 0,
    title: "Legal Mandate",
    frontImage: "/reemservice/2.jpg",
    backTitle: "Legal Mandate",
    backText:
      "It is a compulsory requirement for facilities that consume 3 million kWh or more of electricity over a six-month period to appoint a REEM to comply with EMEER 2008.",
  },
  {
    id: 1,
    title: "Financial Optimization",
    frontImage: "/reemservice/3.jpg",
    backTitle: "Financial Optimization",
    backText:
      "Consultants pinpoint specific areas of energy loss, allowing organizations to significantly lower their monthly utility bills and operational overhead.",
  },
  {
    id: 2,
    title: "Regulatory Compliance",
    frontImage: "/reemservice/4.jpg",
    backTitle: "Regulatory Compliance",
    backText:
      "Having a REEM ensures that all mandatory energy reports are submitted accurately and on time to the Energy Commission (ST).",
  },
  {
    id: 3,
    title: "Sustainable Operations",
    frontImage: "/reemservice/5.jpg",
    backTitle: "Sustainable Operations",
    backText:
      "They facilitate the implementation of green energy practices, helping companies meet environmental sustainability targets and improve their ESG standing.",
  },
  {
    id: 4,
    title: "Expert Oversight",
    frontImage: "/reemservice/6.jpg",
    backTitle: "Expert Oversight",
    backText:
      "Their specialized knowledge provides professional assurance that the facility’s electrical systems are being monitored and maintained at peak efficiency.",
  },
];

export default function Reemimportance() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <Box py={{ base: 16, md: 28 }} px={{ base: 6, md: 20 }} bg="#dde0dcb3">
      {/* Header */}
      <Box textAlign="center" mb={28}>
        <Heading
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"
          color={darkGreen}
        >
          Why REEM Consultancy is Essential
        </Heading>
        <Text mt={10} fontSize={{ base: "md", md: "lg" }} color="gray.600">
          Bridging the gap between regulatory compliance and sustainable energy savings
        </Text>
      </Box>

      {/* Flip Cards Grid */}
      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8} maxW="1200px" mx="auto">
        {reemCards.map((card, index) => {
          const isFlipped = activeIndex === index;

          return (
            <Box
              key={card.id}
              h="350px"
              perspective="1200px"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <Box
                position="relative"
                w="100%"
                h="100%"
                transition="transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
                transformStyle="preserve-3d"
                transform={isFlipped ? "rotateY(180deg) rotateX(2deg)" : "rotateY(0deg)"}
                _hover={{ transform: isFlipped ? "rotateY(180deg) rotateX(2deg)" : "rotateY(0deg) rotateX(2deg)" }}
              >
                {/* Front */}
                <Box
                  position="absolute"
                  inset={0}
                  bgImage={`url(${card.frontImage})`}
                  bgSize="cover"
                  bgPos="center"
                  backfaceVisibility="hidden"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  color="white"
                  fontWeight="bold"
                  textAlign="center"
                  fontSize="xl"
                  p={4}
                  boxShadow="0 8px 15px rgba(0,0,0,0.2)"
                  transition="box-shadow 0.6s ease-in-out"
                >
                  {card.title}
                </Box>

                {/* Back */}
                <Box
                  position="absolute"
                  inset={0}
                  bg="white"
                  backfaceVisibility="hidden"
                  transform="rotateY(180deg)"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  p={6}
                  textAlign="center"
                  boxShadow="0 8px 25px rgba(0,0,0,0.25)"
                >
                  <Heading fontSize="lg" color={darkGreen} mb={4}>
                    {card.backTitle}
                  </Heading>
                  <Text color="gray.700" fontSize="md" lineHeight="1.6" mb={4}>
                    {card.backText}
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
