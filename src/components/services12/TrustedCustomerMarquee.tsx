"use client";

import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

const logos = [
  { name: "Total IFM Sdn. Bhd", src: "/client/1.png" },
  { name: "Astern Technologies Sdn Bhd", src: "/client/2.png" },
  { name: "Alka System Sdn Bhd", src: "/client/3.png" },
  { name: "JKR", src: "/client/4.png" },
  { name: "CIBA Vision Johor Sdn Bhd", src: "/client/5.png" },

];

const LOGO_WIDTH = 400;
const PAUSE_DURATION = 2200;

export default function TrustedCustomer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(2);
  const [containerWidth, setContainerWidth] = useState(0);

  // Measure container width
  useEffect(() => {
    if (!containerRef.current) return;

    const resize = () => {
      setContainerWidth(containerRef.current!.offsetWidth);
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // Auto rotate
  useEffect(() => {
    const timer = setTimeout(() => {
      setActive((prev) => (prev + 1) % logos.length);
    }, PAUSE_DURATION);

    return () => clearTimeout(timer);
  }, [active]);

  const translateX =
    containerWidth / 2 -
    LOGO_WIDTH / 2 -
    active * LOGO_WIDTH;

  return (
    <Box bg="#f6f7f5" py={24}>
      {/* HEADER */}
      <Flex direction="column" align="center" mb={100}>
        <Heading fontSize="3xl" fontWeight="800" mb={4} color="green.800">
          Our Valued Clients
        </Heading>
        <Text maxW="760px" textAlign="center" color="gray.600">
            We serve a diverse range of residential, commercial, industrial, and government clients, providing trusted, reliable, and efficient electrical and automation solutions.        </Text>
      </Flex>

      {/* SLIDER */}
      <Box ref={containerRef} position="relative" overflow="hidden">
        {/* LEFT SHADOW */}
        <Box
          position="absolute"
          left={0}
          top={0}
          bottom={0}
          w="140px"
          zIndex={2}
          bg="linear-gradient(to right, #f7f8f6 35%, transparent)"
        />

        {/* RIGHT SHADOW */}
        <Box
          position="absolute"
          right={0}
          top={0}
          bottom={0}
          w="140px"
          zIndex={2}
          bg="linear-gradient(to left, #f7f8f6 35%, transparent)"
        />

        {/* TRACK */}
        <Flex
          transform={`translate3d(${translateX}px, 0, 0)`}
          transition="transform 0.9s cubic-bezier(0.4, 0, 0.2, 1)"
          willChange="transform"
        >
          {logos.map((logo, index) => {
            const isActive = index === active;

            return (
              <Flex
                key={index}
                minW={`${LOGO_WIDTH}px`}
                justify="center"
                align="center"
                px={8}
                transition="all 0.6s ease"
                transform={isActive ? "scale(1.12)" : "scale(0.9)"}
                filter={isActive ? "none" : "grayscale(100%)"}
                opacity={isActive ? 1 : 0.45}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  maxH="300px"
                />
              </Flex>
            );
          })}
        </Flex>
      </Box>
    </Box>
  );
}