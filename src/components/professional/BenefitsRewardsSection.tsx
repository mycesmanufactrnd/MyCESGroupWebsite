"use client";

import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";

/* Motion wrappers */
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);
const MotionImage = motion(Image);

/* Baseline animation variants */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const baselineItem = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

export default function BenefitsRewardsSection() {
  return (
    <MotionBox
      px={{ base: 6, md: 28 }}   // ⬆️ wider horizontal padding
      py={{ base: 20, md: 28 }}  // ⬆️ taller section
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
        gap={{ base: 12, md: 20 }} // ⬆️ more space between text & image
      >
        {/* LEFT: TEXT */}
        <Box flex="1">
          <MotionHeading
            variants={baselineItem}
            color="#2C4F31"
            mb={6}
            fontSize={{ base: "1.5xl", md: "2xl" }} // ⬆️ slightly bigger
            fontWeight="bold"
          >
            Benefits And Rewards
          </MotionHeading>

          <MotionText
            variants={baselineItem}
            fontSize={{ base: "md", md: "lg" }} // ⬆️ better readability
            mb={10}
            color="gray.700"
            lineHeight="1.9"
            maxW="600px"
          >
          We recognize and reward the contributions of our team members with a comprehensive benefits package, including:
          </MotionText>
          <MotionText
            variants={baselineItem}
            fontSize={{ base: "md", md: "lg" }} // ⬆️ better readability
            mb={5}
            color="gray.700"
            lineHeight="1.9"
            maxW="600px"
          >
          1. Competitive salaries and performance-based incentives
          </MotionText>
          <MotionText
            variants={baselineItem}
            fontSize={{ base: "md", md: "lg" }} // ⬆️ better readability
            mb={5}
            color="gray.700"
            lineHeight="1.9"
            maxW="600px"
          >
          2. Professional training, certifications, and career development programs
          </MotionText>
          <MotionText
            variants={baselineItem}
            fontSize={{ base: "md", md: "lg" }} // ⬆️ better readability
            mb={5}
            color="gray.700"
            lineHeight="1.9"
            maxW="600px"
          >
          3. Opportunities for growth and advancement within the company
          </MotionText>
          <MotionText
            variants={baselineItem}
            fontSize={{ base: "md", md: "lg" }} // ⬆️ better readability
            mb={5}
            color="gray.700"
            lineHeight="1.9"
            maxW="600px"
          >
          4. Supportive work environment that values innovation, collaboration, and wellbeing
          </MotionText>
          <MotionText
            variants={baselineItem}
            fontSize={{ base: "md", md: "lg" }} // ⬆️ better readability
            mb={10}
            color="gray.700"
            lineHeight="1.9"
            maxW="600px"
          >
          5. Recognition programs to celebrate achievements and milestones
          </MotionText>

          <MotionButton
            variants={baselineItem}
            bg="#2C4F31"
            color="white"
            px={7}
            py={5}
            fontSize="md"
            _hover={{ bg: "#829672" }}
            as={Link}
            href="/cvprofessional"
          >
            Apply Now
          </MotionButton>
        </Box>

        {/* RIGHT: IMAGE */}
        <MotionBox flex="1" variants={baselineItem}>
          <MotionImage
            src="professional/2.jpg"
            alt="MyCES Building"
            borderRadius="2xl"
            objectFit="cover"
            width="100%"
            height={{ base: "300px", md: "420px" }} // ⬆️ taller image
          />
        </MotionBox>
      </Flex>
    </MotionBox>
  );
}
