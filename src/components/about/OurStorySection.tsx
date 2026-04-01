"use client";

import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import Link from "next/link";

const MotionBox = motion(Box);

export default function OurStorySection() {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: "easeOut" },
      });
    }
  }, [controls, inView]);

  return (
    <Box
      w="full"
      position="relative"
      minH={{ base: "620px", md: "750px" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgImage="url('/about/1.jpg')"
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
      bgAttachment="fixed" // background stays static
    >
      {/* Dark overlay to improve readability */}
      <Box
        position="absolute"
        inset={0}
        bg="rgba(0,0,0,0.45)" // darker overlay
        zIndex={0}
      />

      {/* Content */}
      <MotionBox
        ref={ref}
        position="relative"
        zIndex={1}
        maxW="900px"
        textAlign="center"
        px={{ base: 6, md: 20 }}
        py={{ base: 24, md: 36 }}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
      >
        <Heading
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="bold"     // make heading bolder
          color="white"              // contrast with dark overlay
          mb={6}
          textShadow="2px 2px 6px rgba(73, 73, 73, 0.7)" // subtle shadow
        >
          Our Story
        </Heading>

        <Text
          fontSize={{ base: "md", md: "lg" }}
          fontWeight="semibold"       // slightly bolder text
          color="white"               // readable on overlay
          lineHeight="1.9"
          mb={8}
          textShadow="1px 1px 4px rgba(30, 30, 30, 0.5)" // subtle shadow
        >
          MyCES Group is a leading company in innovative engineering,
          manufacturing, and technology solutions. We strive to deliver
          excellence through sustainable practices, cutting-edge technology,
          and highly skilled professionals.
        </Text>

        <Link href="/contact">
          <Button
            bg="#829672"
            color="white"
            _hover={{ bg: "#8bb389", transform: "scale(1.05)" }}
            transition="all 0.3s ease"
          >
            More Enquiry
          </Button>
        </Link>
      </MotionBox>
    </Box>
  );
}
