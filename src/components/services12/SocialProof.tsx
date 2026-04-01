"use client";

import { useState, useEffect } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

// ✅ DEFINE TYPE FIRST
type SocialProofProps = {
  logos: string[];
};

const MotionBox = motion(Box);
const LOGO_BOX_WIDTH = 100;
const LOGO_BOX_HEIGHT = 60;
const LOGO_WIDTH = 160;

export default function SocialProof({ logos }: SocialProofProps) {
  const [current, setCurrent] = useState(0);

  // Automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % logos.length);
    }, 2200);

    return () => clearInterval(interval);
  }, [logos.length]); // ✅ include dependency

  const next = () => setCurrent((prev) => (prev + 1) % logos.length);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? logos.length - 1 : prev - 1));

  return (
    <Box bg="#CCD5C5" color="#1A1A1A" py={10} overflow="hidden" position="relative">
      <Flex align="center" mb={6} px={{ base: 4, md: 16 }} gap={4}>
        <Box flex="1" h="1px" bg="gray.400" />

        <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
          Trusted by World Class Brands and Organization
        </Text>

        <Box flex="1" h="1px" bg="gray.400" />
      </Flex>

      <MotionBox
        overflow="hidden"
        mx="auto"
        w="calc(100% - 160px)"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Flex
          transform={`translateX(-${current * LOGO_WIDTH}px)`}
          transition="transform 0.55s ease-in-out"
        >
          {logos.map((logo, index) => (
            <Flex key={index} minW={`${LOGO_WIDTH}px`} justify="center" align="center">
              <Box
                w={`${LOGO_BOX_WIDTH}px`}
                h={`${LOGO_BOX_HEIGHT}px`}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  src={logo}
                  alt="Partner logo"
                  maxW="100%"
                  maxH="100%"
                  objectFit="contain"
                  draggable={false}
                />
              </Box>
            </Flex>
          ))}
        </Flex>
      </MotionBox>

      {/* LEFT */}
      <Box
        as="button"
        position="absolute"
        left={6}
        top="50%"
        transform="translateY(-50%)"
        onClick={prev}
      >
        <Image src="images/hero2.png" alt="prev" w={5} h={5} />
      </Box>

      {/* RIGHT */}
      <Box
        as="button"
        position="absolute"
        right={6}
        top="50%"
        transform="translateY(-50%)"
        onClick={next}
      >
        <Image src="images/hero1.png" alt="next" w={8} h={8} />
      </Box>

      {/* BULLETS */}
      <Flex justify="center" mt={4} gap={2}>
        {logos.map((_, index) => (
          <Box
            key={index}
            w={3}
            h={3}
            borderRadius="full"
            bg={current === index ? "white" : "transparent"}
            border="1px solid white"
            onClick={() => setCurrent(index)}
          />
        ))}
      </Flex>
    </Box>
  );
}