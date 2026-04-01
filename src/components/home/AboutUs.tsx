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

export default function AboutUs() {
  return (
    <MotionBox
      px={{ base: 6, md: 28 }} // ⬆️ wider horizontal padding
      py={{ base: 20, md: 28 }} // ⬆️ taller section
      bg="gray.50"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        spacing={{ base: 12, md: 20 }} // ⬆️ more space between text & image
      >
        {/* LEFT: TEXT */}
        <Box flex="1">
          <MotionHeading
            variants={baselineItem}
            color="#2C4F31"
            mb={7}
            fontSize={{ base: "3xl", md: "2.5xl" }} // ⬆️ slightly bigger
            fontWeight="bold"
          >
            MyCES Group
          </MotionHeading>

          <MotionText
            variants={baselineItem}
            fontSize={{ base: "md", md: "lg" }} // ⬆️ better readability
            mb={10}
            color="gray.700"
            lineHeight="1.9"
            maxW="600px"
          >
            MyCES Group is a leading company in innovative engineering,
            manufacturing, and technology solutions. We strive to deliver
            excellence through sustainable practices, cutting-edge technology,
            and highly skilled professionals.
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
            href="/about"
          >
            See More
          </MotionButton>
        </Box>

        {/* RIGHT: IMAGE */}
        <MotionBox flex="1" variants={baselineItem}>
          <MotionImage
            src="home/mycescontact.jpeg"
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
