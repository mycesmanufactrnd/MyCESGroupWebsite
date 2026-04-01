"use client";

import {
  Box,
  Flex,
  Text,
  Heading,
  Image,
  useDisclosure,
} from "@chakra-ui/react";

import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import { useState, useEffect } from "react";

/* ================= SLIDE DATA ================= */
const slides = [
  {
    image: "homepage/academy_hero.jpg",
    title: "Hands-on STEM Education",
    subText:
      "Bridging the gap between classroom learning and real-world engineering applications", //
    blockBg: "#0F2A1D",
    blockDirection: "left",
  },
  {
    image: "homepage/electronic_components.jpg",
    title: "Electronic Components & Tools",
    subText:
      "Supplying high-quality microcontrollers, sensors, and prototyping tools for education and industry", // [cite: 2724]
    blockBg: "#163F2D",
    blockDirection: "right",
  },
  {
    image: "homepage/coding_class.jpg",
    title: "Coding & Technical Training",
    subText:
      "Specialized STEM-based courses in coding and robotics using Arduino, Raspberry Pi, and Micro:bit", // [cite: 2726]
    blockBg: "#163F2D",
    blockDirection: "left",
  },
  {
    image: "homepage/pcb_design.jpg",
    title: "PCB Design & Manufacturing",
    subText:
      "Professional circuit design, prototyping, and assembly services for schools and businesses", // [cite: 2728]
    blockBg: "#163F2D",
    blockDirection: "right",
  },
  {
    image: "homepage/robotics_iot.jpg",
    title: "Advanced Robotics & IoT",
    subText:
      "Immersive training in AI-driven automation and real-world Internet of Things applications", // [cite: 2744]
    blockBg: "#163F2D",
    blockDirection: "left",
  },
  {
    image: "homepage/future_innovators.jpg",
    title: "Empowering Future Innovators",
    subText:
      "Revolutionizing STEM learning through practical and experiential programs across Malaysia", //
    blockBg: "#163F2D",
    blockDirection: "right",
  },
];

/* ================= BACKGROUND VARIANTS ================= */
const bgVariants = [
  {
    initial: { clipPath: "inset(0 100% 0 0)" },
    animate: { clipPath: "inset(0 0% 0 0)" },
    transition: { duration: 1.2, ease: "easeInOut" },
  },
  {
    initial: { scale: 1.3, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 1.2, ease: "easeOut" },
  },
  {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: "0%", opacity: 1 },
    transition: { duration: 1.2, ease: "easeInOut" },
  },
];

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

/* ================= HERO COMPONENT ================= */
export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [playActive, setPlayActive] = useState(false);
  const [hovered, setHovered] = useState(false); // Track hover for arrows
  const [isOpen, setIsOpen] = useState(false);

  const nextSlide = () => setCurrent((p) => (p + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((p) => (p === 0 ? slides.length - 1 : p - 1));

  // ===== AUTO SLIDE EFFECT =====
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];
  const blockInitialX = slide.blockDirection === "left" ? "-100%" : "100%";
  const blockAnimateX = slide.blockDirection === "left" ? "100%" : "-100%";

  return (
    <Box
      position="relative"
      minH="90vh"
      overflow="hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ===== BACKGROUND ===== */}
      <MotionBox
        key={current}
        position="absolute"
        inset={0}
        bgImage={`url('${slide.image}')`}
        bgSize="cover"
        bgPos="center"
        {...bgVariants[current % bgVariants.length]}
      />

      {/* Dark Overlay for better text contrast */}
      <Box
        position="absolute"
        inset={0}
        bg="rgba(0,0,0,0.45)" // stronger dark overlay
      />

      {/* ===== ARROWS WITH CUSTOM IMAGES ===== */}
      <MotionBox
        as="button"
        position="absolute"
        left={6}
        top="50%"
        transform="translateY(-50%)"
        zIndex={3}
        bg="white"
        borderRadius="full"
        p={2}
        onClick={prevSlide}
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <Image src="homepage/hero2.png" alt="left" w={4} h={4} />
      </MotionBox>

      <MotionBox
        as="button"
        position="absolute"
        right={6}
        top="50%"
        transform="translateY(-50%)"
        zIndex={3}
        bg="white"
        borderRadius="full"
        p={2}
        onClick={nextSlide}
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <Image src="homepage/hero1.png" alt="right" w={6} h={6} />
      </MotionBox>

      {/* ===== TEXT CONTENT ===== */}
      <Flex
        position="relative"
        zIndex={2}
        direction="column"
        justify="center"
        align="center" // center-align horizontally
        minH="90vh"
        px={{ base: 35, md: 32 }}
        pt={{ base: "6vh", md: "8vh" }}
      >
        <Box maxW={{ base: "90%", md: "680px" }} textAlign="center">
          <MotionText
            key={`sub-${current}`}
            fontSize={{ base: "lg", md: "xl" }}
            mb={4}
            textTransform="uppercase"
            letterSpacing="wide"
            fontWeight="bold"
            color="white"
            textShadow="1px 1px 4px rgba(0,0,0,0.7)"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            {slide.subText}
          </MotionText>

          <MotionHeading
            key={`title-${current}`}
            fontFamily="serif"
            fontSize={{ base: "2xl", md: "5xl" }}
            color="white"
            fontWeight="bold"
            lineHeight="1.2"
            textShadow="2px 2px 6px rgba(0,0,0,0.7)"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {slide.title}
          </MotionHeading>
        </Box>
      </Flex>
    </Box>
  );
}
