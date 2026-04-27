"use client";

import { Box, Button, Flex, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

/* Motion */
const MotionBox = motion.create(Box);
const MotionHeading = motion.create(Heading);
const MotionText = motion.create(Text);
const MotionButton = motion.create(Button);

/* Animations */
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

/* Stats */
const stats = [
  { value: "139+", label: "Energy Audits Completed" },
  { value: "11", label: "Industries Served" },
  { value: "11+", label: "Years Experience" },
];

export default function AboutUs() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 900,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <Box
      px={{ base: 6, md: 28 }}
      py={{ base: 12, md: 20 }}
      bg="linear-gradient(135deg, #f8faf8 0%, #f0f4f0 100%)"
      position="relative"
      overflow="hidden"
    >
      {/* Background blobs */}
      <Box
        position="absolute"
        top="-20%"
        right="-10%"
        w="500px"
        h="500px"
        bg="radial-gradient(circle, rgba(44,79,49,0.08), transparent 70%)"
        borderRadius="full"
      />
      <Box
        position="absolute"
        bottom="-20%"
        left="-10%"
        w="450px"
        h="450px"
        bg="radial-gradient(circle, rgba(44,79,49,0.05), transparent 70%)"
        borderRadius="full"
      />

      <MotionBox
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        textAlign="center"
        position="relative"
        zIndex={2}
      >
        {/* Title accent */}
        <MotionBox
          variants={item}
          w="100px"
          h="3px"
          bg="#2C4F31"
          mx="auto"
          mb={4}
        />

        {/* Heading */}
        <MotionHeading
          variants={item}
          fontFamily={"heading"}
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"
          mb={4}
        >
          <Box as="span" color="#2C4F31">
            MyCES Group
          </Box>
        </MotionHeading>
        <MotionBox
          variants={item}
          w="100px"
          h="3px"
          bg="#2C4F31"
          mx="auto"
          mb={2}
        />

        {/* Description */}
        <MotionText
          variants={item}
          maxW="700px"
          mx="auto"
          fontFamily="body"
          fontSize={{ base: "md", md: "lg" }}
          color="gray.700"
          lineHeight="1.8"
          mb={12}
        >
          Founded in 2015, MyCES Group is a leader in engineering,
          manufacturing, and technology solutions. We focus on innovation,
          sustainability, and operational excellence across multiple industries.
        </MotionText>

        {/* STATS SECTION */}
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} mb={12}>
          {stats.map((itemStat, index) => (
            <Box
              key={itemStat.label}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              p={8}
              bg="white"
              borderRadius="xl"
              boxShadow="0 10px 30px rgba(0,0,0,0.08)"
              transition="all 0.3s ease"
              _hover={{ transform: "translateY(-6px)" }}
            >
              <Text
                fontFamily="heading"
                fontSize="4xl"
                fontWeight="bold"
                color="#2C4F31"
              >
                {itemStat.value}
              </Text>
              <Text
                fontFamily="body"
                fontSize="sm"
                textTransform="uppercase"
                color="gray.600"
                letterSpacing="0.05em"
              >
                {itemStat.label}
              </Text>
              <Box
                mt={4}
                mx="auto"
                w="40px"
                h="2px"
                bg="#2C4F31"
                opacity={0.5}
              />
            </Box>
          ))}
        </SimpleGrid>

        {/* CTA BUTTON */}
        <Link href="/about">
          <MotionButton
            bg="#2C4F31"
            color="white"
            px={10}
            py={6}
            borderRadius="full"
            fontFamily="heading"
            fontSize="md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            _hover={{ bg: "#3b6a44" }}
          >
            See More →
          </MotionButton>
        </Link>
      </MotionBox>
    </Box>
  );
}
