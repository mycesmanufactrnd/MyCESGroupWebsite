"use client";

import { useState, useEffect, useRef } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const LOGO_BOX_WIDTH = 100;
const LOGO_BOX_HEIGHT = 60;
const LOGO_WIDTH = 160;

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
  "/logos/12.png",
  "/logos/13.png",
  "/logos/14.png",
  "/logos/15.png",
  "/logos/16.png",
  "/logos/17.png",
  "/logos/18.png",
  "/logos/19.png",
  "/logos/20.png",
  "/logos/21.png",
  "/logos/22.png",
  "/logos/23.png",
  "/logos/24.png",
  "/logos/25.png",
  "/logos/26.png",
  "/logos/27.png",
  "/logos/28.png",
];

export default function SocialProof() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const containerRef = useRef(null);

  const loopedLogos = [...logos, ...logos];

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
      setIsTransitioning(true);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (current === logos.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(0);
      }, 550);
    }
  }, [current]);

  const next = () => {
    setCurrent((prev) => prev + 1);
    setIsTransitioning(true);
  };

  const prev = () => {
    if (current === 0) {
      setIsTransitioning(false);
      setCurrent(logos.length);
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrent(logos.length - 1);
      }, 50);
    } else {
      setCurrent((prev) => prev - 1);
    }
  };

  return (
    <Box bg="#ccd5c5be" py={10} overflow="hidden" position="relative">
      {/* HEADER */}
      <Flex align="center" mb={6} px={{ base: 4, md: 16 }} gap={4}>
        <Box flex="1" h="1px" bg="gray.400" />

        <Text
          fontFamily="heading"
          fontWeight="semibold"
          fontSize="14px"
          whiteSpace="nowrap"
          textAlign="center"
        >
          Trusted by Industry Leaders
        </Text>

        <Box flex="1" h="1px" bg="gray.400" />
      </Flex>

      {/* CAROUSEL */}
      <MotionBox
        overflow="hidden"
        mx="auto"
        w="calc(100% - 160px)"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Flex
          ref={containerRef}
          transform={`translateX(-${current * LOGO_WIDTH}px)`}
          transition={
            isTransitioning
              ? "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)"
              : "none"
          }
          style={{ willChange: "transform" }}
        >
          {loopedLogos.map((logo, index) => (
            <Flex
              key={index}
              minW={`${LOGO_WIDTH}px`}
              justify="center"
              align="center"
            >
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

      {/* LEFT BUTTON */}
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

      {/* RIGHT BUTTON */}
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

      {/* BULLETS */}
      {/* <Flex justify="center" mt={4} gap={2}>
        {logos.map((_, index) => (
          <Box
            key={index}
            w={3}
            h={3}
            borderRadius="full"
            bg={current % logos.length === index ? "white" : "transparent"}
            border="1px solid white"
            cursor="pointer"
            transition="all 0.3s"
            onClick={() => setCurrent(index)}
          />
        ))}
      </Flex> */}
    </Box>
  );
}
