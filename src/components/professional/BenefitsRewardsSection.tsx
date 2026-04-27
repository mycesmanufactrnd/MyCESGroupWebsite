"use client";

import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionImage = motion(Image);

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function BenefitsRewardsSection() {
  const benefits = [
    "Competitive salaries and performance-based incentives",
    "Professional training, certifications, and career development programs",
    "Opportunities for growth and advancement within the company",
    "Supportive work environment that values innovation, collaboration, and wellbeing",
    "Recognition programs to celebrate achievements and milestones",
  ];

  return (
    <MotionBox
      px={{ base: 6, md: 28 }}
      py={{ base: 20, md: 28 }}
      bg="#dde0dcb3"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        gap={{ base: 10, md: 20 }}
      >
        {/* LEFT */}
        <Box flex="1">
          <MotionHeading
            variants={item}
            color="#2C4F31"
            mb={5}
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="bold"
          >
            Benefits And Rewards
          </MotionHeading>

          <MotionText
            variants={item}
            fontSize={{ base: "md", md: "lg" }}
            mb={8}
            color="gray.700"
            lineHeight="1.9"
            maxW="600px"
          >
            We recognize and reward the contributions of our team members with a
            comprehensive benefits package, including:
          </MotionText>

          {/* CLEAN LIST */}
          <VStack align="start" gap={4} maxW="600px">
            {benefits.map((itemText, index) => (
              <MotionText
                key={index}
                variants={item}
                fontSize={{ base: "md", md: "lg" }}
                color="gray.700"
                lineHeight="1.8"
              >
                {index + 1}. {itemText}
              </MotionText>
            ))}
          </VStack>
        </Box>

        {/* RIGHT */}
        <MotionBox flex="1" variants={item}>
          <MotionImage
            src="portfolio/2.png"
            alt="MyCES Building"
            borderRadius="2xl"
            objectFit="cover"
            width="100%"
            height={{ base: "300px", md: "420px" }}
          />
        </MotionBox>
      </Flex>
    </MotionBox>
  );
}
