"use client";

import { Box, Flex, Text, Heading, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

interface Slide {
  image: string;
  title: string;
  subText: string;
}

export default function NewsHero() {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);

  const slides: Slide[] = [
    {
      image: "/news/1.png",
      title: "Taking MyCES Global",
      subText: "Global Expansion",
    },
    {
      image: "/news/2.png",
      title: "Shaping MyCES Together",
      subText: "Events",
    },
    {
      image: "/news/31.png",
      title: "Driving Digital Healthcare",
      subText: "Partnership",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <Box
      position="relative"
      minH={{ base: "70vh", md: "90vh" }}
      overflow="hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ===== BACKGROUND (SMOOTH FADE + ZOOM) ===== */}
      {slides.map((slide, i) => (
        <MotionBox
          key={i}
          position="absolute"
          inset={0}
          bgImage={`url(${slide.image})`}
          bgSize="cover"
          bgPos="center"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{
            opacity: current === i ? 1 : 0,
            scale: current === i ? 1 : 1.05,
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      ))}

      {/* Overlay */}
      <Box position="absolute" inset={0} bg="rgba(0,0,0,0.45)" />

      {/* ===== ARROWS ===== */}
      {/* <MotionBox
        as="button"
        position="absolute"
        left={4}
        top="50%"
        transform="translateY(-50%)"
        zIndex={3}
        bg="white"
        borderRadius="full"
        p={2}
        onClick={prevSlide}
        animate={{ opacity: hovered ? 1 : 0 }}
      >
        <Image src="/images/hero2.png" w={4} h={4} alt="prev" />
      </MotionBox>

      <MotionBox
        as="button"
        position="absolute"
        right={4}
        top="50%"
        transform="translateY(-50%)"
        zIndex={3}
        bg="white"
        borderRadius="full"
        p={2}
        onClick={nextSlide}
        animate={{ opacity: hovered ? 1 : 0 }}
      >
        <Image src="/images/hero1.png" w={5} h={5} alt="next" />
      </MotionBox> */}

      {/* ===== TEXT ===== */}
      <Flex
        position="relative"
        zIndex={2}
        direction="column"
        justify="center"
        align="flex-start"
        minH={{ base: "70vh", md: "90vh" }}
        px={{ base: 6, md: 24 }}
      >
        <Box maxW="650px">
          <MotionText
            key={current}
            fontSize={{ base: "md", md: "lg" }}
            mb={3}
            textTransform="uppercase"
            letterSpacing="wide"
            fontWeight="semibold"
            color="white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {slides[current].subText}
          </MotionText>

          <MotionHeading
            key={`title-${current}`}
            fontSize={{ base: "2xl", md: "4xl" }}
            color="white"
            lineHeight="1.2"
            fontWeight="bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {slides[current].title}
          </MotionHeading>
        </Box>
      </Flex>

      {/* ===== DOTS ===== */}
      <Flex
        position="absolute"
        bottom={4}
        left="50%"
        transform="translateX(-50%)"
        gap={2}
        zIndex={3}
      >
        {slides.map((_, i) => (
          <Box
            key={i}
            w={2}
            h={2}
            borderRadius="full"
            bg={current === i ? "white" : "whiteAlpha.500"}
            cursor="pointer"
            transition="all 0.3s"
            onClick={() => setCurrent(i)}
          />
        ))}
      </Flex>
    </Box>
  );
}
