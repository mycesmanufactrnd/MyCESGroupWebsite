"use client";

import { Box, Heading, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function OurPurposeSection() {
  return (
    <Box
      w="full"
      bg="gray.100"
      py={{ base: 17, md: 28 }}
      px={{ base: 6, md: 20 }}
    >
      <Box maxW="1200px" mx="auto">
        {/* TEXT CONTENT */}
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1], // premium easing
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Heading
            fontSize={{ base: "1.5xl", md: "3xl" }}
            fontWeight="bold"
            color="black"
            mb={6}
          >
            Our Purpose
          </Heading>

          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.700"
            lineHeight="1.9"
            maxW="1200px"
          >
            Cultivate a collaborative and inclusive work environment where
            individuals are empowered to grow professionally and contribute
            meaningfully. Through open communication, mutual respect, and shared
            responsibility, we align personal development with organizational
            goals to achieve sustainable success and long- term excellence.
          </Text>
        </MotionBox>

        {/* IMAGE */}
        <MotionBox
          mt={{ base: 14, md: 18 }}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.4,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
        >
          <Image
            src="/team/4.jpg"
            alt="Mountain landscape representing vision and excellence"
            w="full"
            h={{ base: "150px", md: "340px" }}
            objectFit="cover"
            borderRadius="2xl"
            boxShadow="0px 25px 50px rgba(0,0,0,0.15)"
          />
        </MotionBox>
      </Box>
    </Box>
  );
}
