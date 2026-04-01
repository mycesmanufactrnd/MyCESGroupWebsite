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
import { supabaseStorageClient } from "@/src/supabase";

/* ================= SLIDE DATA ================= */
// const slides = [
//   {
//     image: "1.png",
//     title: "Taking MyCES Global",
//     subText: "Expanding to the Middle East through strategic energy collaboration",
//     blockBg: "#0F2A1D",
//     blockDirection: "left",
//   },
//   {
//     image: "2.png",
//     title: "Shaping MyCES Together",
//     subText: "AGM 2026: Reviewing achievements and planning new initiatives for growth",
//     blockBg: "#163F2D",
//     blockDirection: "right",
//   },
//   {
//     image: "3.png",
//     title: "Driving Digital Healthcare",
//     subText: "Partnering with MSQH to advance healthcare accreditation with AI-powered tools",
//     blockBg: "#163F2D",
//     blockDirection: "left",
//   },
// ];

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
export default function NewsHero() {
  const [current, setCurrent] = useState(0);
  const [playActive, setPlayActive] = useState(false);
  const [slides, setSlides] = useState([]);
  const [hovered, setHovered] = useState(false); // Track hover for arrows
  const [isOpen, setIsOpen] = useState(false);
  const [slideImages, setSlideImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchSlides = async () => {
      const { data, error } = await supabaseStorageClient
        .from("NewsImage")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.error("Error fetching slides:", error);
        return;
      }

      const slidesData = data.map((slide) => ({
        image: slide.image_name,
        title: slide.image_title,
        subText: slide.image_subtext,
        blockBg: slide.image_bg,
        blockDirection: slide.image_direction,
      }));

      setSlides(slidesData);
    };

    fetchSlides();
  }, []);

  const nextSlide = () => setCurrent((p) => (p + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((p) => (p === 0 ? slides.length - 1 : p - 1));

  useEffect(() => {
    if (!slideImages.length) return;

    const interval = setInterval(() => {
      setCurrent((p) => (p + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slideImages, slides.length]);

  useEffect(() => {
    const fetchImages = async () => {
      if (!slides.length) return;

      const urls = await Promise.all(
        slides.map(async (slide) => {
          const { data, error } = await supabaseStorageClient.storage
            .from("news")
            .download(slide.image);

          if (error || !data) {
            console.error("Error downloading image:", error);
            return null;
          }

          return URL.createObjectURL(data);
        }),
      );

      setSlideImages(urls as string[]);
    };

    fetchImages();
  }, [slides]);

  const slide = slides[current];
  // const blockInitialX = slide.blockDirection === "left" ? "-100%" : "100%";
  // const blockAnimateX = slide.blockDirection === "left" ? "100%" : "-100%";

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
        // bgImage={`url('${slide.image}')`}
        bgImage={
          slideImages[current] ? `url(${slideImages[current]})` : undefined
        }
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
        left={3}
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
        <Image src="images/hero2.png" alt="left" w={4} h={4} />
      </MotionBox>

      <MotionBox
        as="button"
        position="absolute"
        right={3}
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
        <Image src="images/hero1.png" alt="right" w={6} h={6} />
      </MotionBox>

      {/* ===== TEXT CONTENT ===== */}
      <Flex
        position="relative"
        zIndex={2}
        direction="column"
        justify="center"
        align="flex-start"
        minH="90vh"
        px={{ base: 35, md: 32 }} // shift text slightly to the right
        pt={{ base: "6vh", md: "8vh" }}
      >
        <Box maxW={{ base: "90%", md: "680px" }}>
          <MotionText
            key={`sub-${current}`}
            fontSize={{ base: "lg", md: "xl" }}
            mb={4}
            textTransform="uppercase"
            letterGap="wide"
            textAlign="left"
            fontWeight="bold"
            color="white"
            textShadow="1px 1px 4px rgba(0,0,0,0.7)" // subtle shadow for readability
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            {slide?.subText}
          </MotionText>

          <MotionHeading
            key={`title-${current}`}
            fontFamily="serif"
            fontSize={{ base: "2xl", md: "5xl" }}
            color="white"
            fontWeight="bold"
            lineHeight="1.2"
            textAlign="left"
            textShadow="2px 2px 6px rgba(0,0,0,0.7)" // make title stand out
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {slide?.title}
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
          pr={{ base: 6, md: 100 }} // add padding from right edge
          gap={4}
          color="white"
          cursor="pointer"
          onClick={() => setIsOpen(true)}
        ></Flex>
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
          />
        ))}
      </Flex>
      {isOpen && (
        <Box
          position="fixed"
          inset={0}
          bg="blackAlpha.800"
          zIndex={50}
          display="flex"
          alignItems="center"
          justifyContent="center"
          onClick={() => setIsOpen(false)} // close when clicking outside
        >
          <Box
            position="relative"
            w={{ base: "90%", md: "800px" }}
            h={{ base: "50%", md: "450px" }}
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking video
          >
            <Box
              as="iframe"
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
            >
              ✕
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}
