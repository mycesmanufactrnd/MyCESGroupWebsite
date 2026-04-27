"use client";

import { Box, Heading, Text, SimpleGrid, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function OurPeopleSection() {
  return (
    <Box
      w="full"
      bg="#EAECE6"
      py={{ base: 16, md: 24 }}
      px={{ base: 6, md: 20 }}
    >
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        gap={{ base: 12, md: 16 }}
        alignItems="center"
        maxW="1400px"
        mx="auto"
      >
        {/* LEFT CONTENT */}
        <MotionBox
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1], // smooth premium easing
          }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <Heading
            fontFamily="{heading}"
            fontSize={{ base: "1xl", md: "3xl" }}
            fontWeight="bold"
            color="#0F2A1D"
            mb={6}
          >
            Meet the Team
          </Heading>

          <Text
            fontFamily="{body}"
            fontSize={{ base: "md", md: "lg" }}
            color="gray.700"
            lineHeight="1.9"
            maxW="520px"
          >
            At MyCES Group, our team are our greatest strength. With deep
            expertise and a collaborative mindset, they drive innovation,
            deliver trusted solutions, and enable sustainable growth.
          </Text>
        </MotionBox>

        {/* RIGHT IMAGE */}
        <MotionBox
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 1.1,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, margin: "-80px" }}
          whileHover={{ scale: 1.02 }}
        >
          <Image
            src="/home/mycescontact.jpeg"
            alt="Professional interacting with digital dashboard"
            borderRadius="2xl"
            objectFit="cover"
            w="full"
            h={{ base: "160px", md: "280px" }}
            boxShadow="0px 20px 40px rgba(0,0,0,0.12)"
          />
        </MotionBox>
      </SimpleGrid>
    </Box>
  );
}
