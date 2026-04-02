"use client";

import { Box, Flex, Text, Heading, Image } from "@chakra-ui/react";

import { motion, Transition } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { supabaseStorageClient } from "@/src/supabase";

/* ================= BACKGROUND VARIANTS ================= */
const bgVariants = [
  {
    initial: { clipPath: "inset(0 100% 0 0)" },
    animate: { clipPath: "inset(0 0% 0 0)" },
    transition: { duration: 1.2, ease: "easeInOut" } as Transition,
  },
  {
    initial: { scale: 1.3, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 1.2, ease: "easeOut" } as Transition,
  },
  {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: "0%", opacity: 1 },
    transition: { duration: 1.2, ease: "easeInOut" } as Transition,
  },
];

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

interface Slide {
  image: string;
  title: string;
  subText: string;
  blockBg: string;
  blockDirection: string;
}

/* ================= HERO COMPONENT ================= */
export default function NewsHero() {
  const [current, setCurrent] = useState(0);
  const [slides, setSlides] = useState<Slide[]>([]);
  const [hovered, setHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [slideImages, setSlideImages] = useState<string[]>([]);

  // Fetch slides data
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

      if (data && data.length > 0) {
        const slidesData: Slide[] = data.map((slide) => ({
          image: slide.image_name,
          title: slide.image_title,
          subText: slide.image_subtext,
          blockBg: slide.image_bg,
          blockDirection: slide.image_direction,
        }));
        setSlides(slidesData);
      }
    };

    fetchSlides();
  }, []);

  // Fetch images after slides are loaded
  useEffect(() => {
    const fetchImages = async () => {
      if (!slides.length) return;

      const urls = await Promise.all(
        slides.map(async (slide) => {
          try {
            const { data, error } = await supabaseStorageClient.storage
              .from("news")
              .download(slide.image);

            if (error || !data) {
              console.error("Error downloading image:", error);
              return null;
            }

            return URL.createObjectURL(data);
          } catch (err) {
            console.error("Failed to download image:", err);
            return null;
          }
        }),
      );

      // Filter out any null values
      const validUrls = urls.filter((url): url is string => url !== null);
      setSlideImages(validUrls);
    };

    fetchImages();

    // Cleanup function to revoke object URLs
    return () => {
      slideImages.forEach((url) => {
        if (url) URL.revokeObjectURL(url);
      });
    };
  }, [slides]); // eslint-disable-line react-hooks/exhaustive-deps

  const nextSlide = useCallback(() => {
    if (slides.length === 0) return;
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    if (slides.length === 0) return;
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  // Auto-advance slides
  useEffect(() => {
    if (!slides.length) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length, nextSlide]);

  // Get current slide safely
  const currentSlide = slides[current];
  const currentImage = slideImages[current];

  // If no slides are loaded yet, don't render
  if (slides.length === 0) {
    return (
      <Box
        minH="90vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text color="white">Loading...</Text>
      </Box>
    );
  }

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
        bgImage={currentImage ? `url(${currentImage})` : undefined}
        bgSize="cover"
        bgPos="center"
        initial={bgVariants[current % bgVariants.length].initial}
        animate={bgVariants[current % bgVariants.length].animate}
        transition={bgVariants[current % bgVariants.length].transition}
      />

      {/* Dark Overlay for better text contrast */}
      <Box position="absolute" inset={0} bg="rgba(0,0,0,0.45)" />

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
            {currentSlide?.subText || ""}
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
            {currentSlide?.title || ""}
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
          {/* Add your CTA content here if needed */}
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
            <iframe
              src="/video/corporatemyces.mp4"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "0.375rem", // md in Chakra
                border: "none",
              }}
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
