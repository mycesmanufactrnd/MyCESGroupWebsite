"use client";

import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

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

const baselineItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

export default function BenefitsRewardsSection2() {
  return (
    <MotionBox
      px={{ base: 6, md: 28 }} // ⬆️ wider horizontal padding
      py={{ base: 20, md: 28 }} // ⬆️ taller section
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
            Interns at MYCES Group enjoy a supportive and enriching experience,
            including:
          </MotionText>
          <MotionText
            variants={baselineItem}
            fontSize={{ base: "md", md: "lg" }} // ⬆️ better readability
            mb={5}
            color="gray.700"
            lineHeight="1.9"
            maxW="600px"
          >
            1. Hands-on training and professional mentorship
          </MotionText>
          <MotionText
            variants={baselineItem}
            fontSize={{ base: "md", md: "lg" }} // ⬆️ better readability
            mb={5}
            color="gray.700"
            lineHeight="1.9"
            maxW="600px"
          >
            2. Exposure to real-world projects and industry practices
          </MotionText>
          <MotionText
            variants={baselineItem}
            fontSize={{ base: "md", md: "lg" }} // ⬆️ better readability
            mb={5}
            color="gray.700"
            lineHeight="1.9"
            maxW="600px"
          >
            3. Opportunity to develop technical, analytical, and soft skills
          </MotionText>
          <MotionText
            variants={baselineItem}
            fontSize={{ base: "md", md: "lg" }} // ⬆️ better readability
            mb={5}
            color="gray.700"
            lineHeight="1.9"
            maxW="600px"
          >
            4. Networking with experienced professionals
          </MotionText>
          <MotionText
            variants={baselineItem}
            fontSize={{ base: "md", md: "lg" }} // ⬆️ better readability
            mb={10}
            color="gray.700"
            lineHeight="1.9"
            maxW="600px"
          >
            5. Certificate of completion and potential career opportunities
            within the company
          </MotionText>
          <Link href="/cvinternship" passHref>
            <MotionButton
              variants={baselineItem}
              bg="#2C4F31"
              color="white"
              px={7}
              py={5}
              fontSize="md"
              _hover={{ bg: "#829672" }}
            >
              Apply Now
            </MotionButton>
          </Link>
        </Box>

        {/* RIGHT: IMAGE */}
        <MotionBox flex="1" variants={baselineItem}>
          <MotionImage
            src="internship/2.jpg"
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
