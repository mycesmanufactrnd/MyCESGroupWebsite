"use client";

import { useState, useEffect } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion"; // add this at the top

const MotionBox = motion(Box); // create motion wrapper
const LOGO_BOX_WIDTH = 100;
const LOGO_BOX_HEIGHT = 60;

const logos = [
  "/logos/1.png",
  "/logos/2.png",
  "/logos/3.png",
  "/logos/4.png",
  "/logos/5.png",
  "/logos/6.png",
  "/logos/7.png",
  "/logos/8.png",
  "/logos/9.png",
  "/logos/10.png",
  "/logos/11.png",
  "/logos/4.png",
  "/logos/5.png",
  "/logos/6.png",
  "/logos/7.png",
  "/logos/8.png",
  "/logos/1.png",
  "/logos/2.png",
  "/logos/3.png",
  "/logos/4.png",
  "/logos/5.png",
  "/logos/6.png",
  "/logos/7.png",
  "/logos/8.png",
  "/logos/9.png",
  "/logos/10.png",
  "/logos/11.png",
  "/logos/4.png",
  "/logos/5.png",
  "/logos/6.png",
  "/logos/7.png",
  "/logos/8.png",
];

const LOGO_WIDTH = 160; // width of each logo + spacing

export default function SocialProof() {
  const [current, setCurrent] = useState(0);

  // Automatic sliding (slow, one by one)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % logos.length);
    }, 2200); // was 3000
    return () => clearInterval(interval);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % logos.length);
  const prev = () =>
    setCurrent((prev) => (prev === 0 ? logos.length - 1 : prev - 1));

  return (
    <Box
      bg="#CCD5C5"
      color="#1A1A1A"
      py={10}
      overflow="hidden"
      position="relative"
    >
      <Flex align="center" mb={6} px={{ base: 4, md: 16 }} gap={4}>
        {/* LEFT LINE */}
        <Box flex="1" h="1px" bg="gray.400" />

        {/* TEXT */}
        <Text
          fontWeight="bold"
          fontSize={{ base: "sm", md: "md" }}
          whiteSpace="nowrap"
          textAlign="center"
        >
          Trusted by World Class Brands and Organization
        </Text>

        {/* RIGHT LINE */}
        <Box flex="1" h="1px" bg="gray.400" />
      </Flex>

      {/* Carousel Window */}
      <MotionBox
        overflow="hidden"
        mx="auto"
        w="calc(100% - 160px)" // space for left + right buttons
        initial={{ opacity: 0, y: 50, scale: 0.95 }} // more noticeable
        animate={{ opacity: 1, y: 0, scale: 1 }} // end state
        transition={{ duration: 0.5, ease: "easeOut" }} // faster
      >
        <Flex
          transform={`translateX(-${current * LOGO_WIDTH}px)`}
          transition="transform 0.55s ease-in-out"
        >
          {logos.map((logo, index) => (
            <Flex
              key={index}
              minW={`${LOGO_WIDTH}px`}
              justify="center"
              align="center"
            >
              {/* FIXED LOGO BOX */}
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

      {/* LEFT ARROW */}
      <Box
        as="button"
        position="absolute"
        left={6}
        top="50%"
        transform="translateY(-50%)"
        zIndex={3}
        p={2}
        onClick={prev}
        _hover={{ opacity: 0.8 }}
      >
        <Image src="images/hero2.png" alt="previous" w={5} h={5} />
      </Box>

      {/* RIGHT ARROW */}
      <Box
        as="button"
        position="absolute"
        right={6}
        top="50%"
        transform="translateY(-50%)"
        zIndex={3}
        p={2}
        onClick={next}
        _hover={{ opacity: 0.8 }}
      >
        <Image src="images/hero1.png" alt="next" w={8} h={8} />
      </Box>

      {/* Bullets */}
      <Flex justify="center" mt={4} gap={2}>
        {logos.map((_, index) => (
          <Box
            key={index}
            w={3}
            h={3}
            borderRadius="full"
            bg={current === index ? "white" : "transparent"}
            border="1px solid white"
            cursor="pointer"
            transition="all 0.3s"
            onClick={() => setCurrent(index)}
          />
        ))}
      </Flex>
    </Box>
  );
}
