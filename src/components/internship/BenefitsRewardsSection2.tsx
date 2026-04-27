"use client";

import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";

export default function BenefitsRewardsSection2() {
  const benefits = [
    "Hands-on training and professional mentorship",
    "Exposure to real-world projects and industry practices",
    "Opportunity to develop technical, analytical, and soft skills",
    "Networking with experienced professionals",
    "Certificate of completion and potential career opportunities within the company",
  ];

  return (
    <Box px={{ base: 6, md: 28 }} py={{ base: 20, md: 28 }} bg="#dde0dcb3">
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        gap={{ base: 10, md: 20 }}
      >
        {/* LEFT */}
        <Box flex="1">
          <Heading
            color="#2C4F31"
            mb={5}
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="bold"
          >
            Benefits And Rewards
          </Heading>

          <Text
            fontSize={{ base: "md", md: "lg" }}
            mb={8}
            color="gray.700"
            lineHeight="1.9"
            maxW="600px"
          >
            Interns at MYCES Group enjoy a supportive and enriching experience,
            including:
          </Text>

          {/* CLEAN LIST */}
          <VStack align="start" gap={4} maxW="600px">
            {benefits.map((item, index) => (
              <Text
                key={index}
                fontSize={{ base: "md", md: "lg" }}
                color="gray.700"
                lineHeight="1.8"
              >
                {index + 1}. {item}
              </Text>
            ))}
          </VStack>
        </Box>

        {/* RIGHT */}
        <Box flex="1">
          <Image
            src="internship/10.png"
            alt="MyCES Building"
            borderRadius="2xl"
            objectFit="cover"
            width="100%"
            height={{ base: "300px", md: "420px" }}
          />
        </Box>
      </Flex>
    </Box>
  );
}
