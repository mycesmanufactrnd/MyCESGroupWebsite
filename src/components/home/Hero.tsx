"use client";

import { Box, Flex, Text, Heading, Image, chakra } from "@chakra-ui/react";
import { motion, Transition } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import { useState, useEffect } from "react";

/* ================= SLIDE DATA ================= */
const slides = [
  {
    image: "home/2.jpg",
    title: "Leading the Future of Energy",
    subText: "Innovative Solutions for Sustainable Energy Management",
    blockBg: "#0F2A1D",
    blockDirection: "left",
  },
  {
    image: "home/3.jpg",
    title: "Smart Energy & Infrastructure",
    subText: "Integrated Engineering and Energy Solutions",
    blockBg: "#163F2D",
    blockDirection: "right",
  },
  {
    image: "home/1.jpg",
    title: "Driving Sustainable Performance",
    subText: "Optimizing Assets, Energy, and Facilities",
    blockBg: "#163F2D",
    blockDirection: "left",
  },
  {
    image: "home/6.jpg",
    title: "Energy Intelligence Solutions",
    subText: "Monitoring, Efficiency, and Sustainability",
    blockBg: "#163F2D",
    blockDirection: "right",
  },
  {
    image: "home/4.jpg",
    title: "Digitalizing Building Performance",
    subText: "Smart Monitoring and Facility Management",
    blockBg: "#163F2D",
    blockDirection: "left",
  },
  {
    image: "home/5.jpg",
    title: "Integrated Engineering Excellence",
    subText: "Supporting Growth Through Smart Solutions",
    blockBg: "#163F2D",
    blockDirection: "right",
  },
];

/* ================= BACKGROUND VARIANTS WITH PROPER TYPING ================= */
type VariantProps = {
  initial: Record<string, string | number>;
  animate: Record<string, string | number>;
  transition: Transition;
};

const bgVariants: VariantProps[] = [
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
  const [hovered, setHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const nextSlide = () => setCurrent((p) => (p + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((p) => (p === 0 ? slides.length - 1 : p - 1));

  // ===== AUTO SLIDE EFFECT =====
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];
  const currentVariant = bgVariants[current % bgVariants.length];

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
        initial={currentVariant.initial}
        animate={currentVariant.animate}
        transition={currentVariant.transition}
      />

      {/* Dark Overlay for better text contrast */}
      <Box position="absolute" inset={0} bg="rgba(0,0,0,0.45)" />

      {/* ===== ARROWS WITH CUSTOM IMAGES ===== */}
      <chakra.button
        position="absolute"
        left={6}
        top="50%"
        transform="translateY(-50%)"
        zIndex={3}
        bg="white"
        borderRadius="full"
        p={2}
        onClick={prevSlide}
        style={{ opacity: hovered ? 1 : 0 }}
        transition="opacity 0.4s ease-in-out"
        _hover={{ transform: "translateY(-50%) scale(1.05)" }}
      >
        <Image src="images/hero2.png" alt="left" w={4} h={4} />
      </chakra.button>

      <chakra.button
        position="absolute"
        right={6}
        top="50%"
        transform="translateY(-50%)"
        zIndex={3}
        bg="white"
        borderRadius="full"
        p={2}
        onClick={nextSlide}
        style={{ opacity: hovered ? 1 : 0 }}
        transition="opacity 0.4s ease-in-out"
        _hover={{ transform: "translateY(-50%) scale(1.05)" }}
      >
        <Image src="images/hero1.png" alt="right" w={6} h={6} />
      </chakra.button>

      {/* ===== TEXT CONTENT ===== */}
      <Flex
        position="relative"
        zIndex={2}
        direction="column"
        justify="center"
        align="flex-start"
        minH="90vh"
        px={{ base: 35, md: 32 }}
        pt={{ base: "6vh", md: "8vh" }}
      >
        <Box maxW={{ base: "90%", md: "680px" }}>
          <MotionText
            key={`sub-${current}`}
            fontSize={{ base: "lg", md: "xl" }}
            mb={4}
            textTransform="uppercase"
            letterSpacing="wide"
            textAlign="left"
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
            textAlign="left"
            textShadow="2px 2px 6px rgba(0,0,0,0.7)"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {slide.title}
          </MotionHeading>
        </Box>
      </Flex>

      {/* ===== CTA BAR ===== */}
      <MotionFlex
        position="absolute"
        bottom={{ base: 6, md: 10 }}
        left="50%"
        transform="translateX(-50%)"
        w={{ base: "92%", md: "820px" }}
        px={{ base: 6, md: 10 }}
        py={5}
        borderRadius="xl"
        align="center"
        justify="space-between"
        direction={{ base: "column", md: "row" }}
        gap={{ base: 6, md: 0 }}
        zIndex={3}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Flex
          flex="1"
          align="center"
          justify="flex-end"
          pr={{ base: 6, md: 100 }}
          gap={4}
          color="white"
          cursor="pointer"
          onClick={() => setIsOpen(true)}
        >
          {/* PLAY ICON */}
          <MotionBox
            position="relative"
            w="64px"
            h="64px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            whileHover={{ scale: 1.05 }}
          >
            <MotionBox
              position="absolute"
              inset={0}
              borderRadius="full"
              border="2px solid rgba(255,255,255,0.5)"
              animate={
                playActive
                  ? { scale: 1.15, opacity: 1 }
                  : { scale: [1, 1.08, 1], opacity: [0.5, 0.9, 0.5] }
              }
              transition={
                playActive
                  ? { duration: 0.4 }
                  : { duration: 2.2, repeat: Infinity, ease: "easeInOut" }
              }
            />
            <Box
              w="52px"
              h="52px"
              bg="white"
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              boxShadow="0 10px 25px rgba(0,0,0,0.35)"
            >
              <FaPlay color="#163F2D" />
            </Box>
          </MotionBox>

          {/* TEXT */}
          <Box>
            <Text fontWeight="medium">Click To Watch</Text>
            <Text fontWeight="medium">Our Corporate Video</Text>
          </Box>
        </Flex>
      </MotionFlex>

      {/* DOTS */}
      <Flex
        position="absolute"
        bottom={2}
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
            bg={current === i ? "white" : "gray.400"}
            cursor="pointer"
            onClick={() => setCurrent(i)}
            transition="all 0.3s ease"
            _hover={{ transform: "scale(1.2)" }}
          />
        ))}
      </Flex>

      {/* Video Modal */}
      {isOpen && (
        <Box
          position="fixed"
          inset={0}
          bg="blackAlpha.800"
          zIndex={50}
          display="flex"
          alignItems="center"
          justifyContent="center"
          onClick={() => setIsOpen(false)}
        >
          <Box
            position="relative"
            w={{ base: "90%", md: "800px" }}
            h={{ base: "50%", md: "450px" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Use chakra.iframe instead of Box with as="iframe" */}
            <chakra.iframe
              src="/video/corporatemyces.mp4"
              w="100%"
              h="100%"
              borderRadius="md"
              allow="autoplay; fullscreen"
            />
            {/* Close Button */}
            <Box
              position="absolute"
              top={2}
              right={2}
              w={8}
              h={8}
              bg="white"
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              cursor="pointer"
              fontWeight="bold"
              onClick={() => setIsOpen(false)}
              _hover={{ transform: "scale(1.1)", bg: "gray.100" }}
              transition="all 0.2s ease"
            >
              ✕
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}
