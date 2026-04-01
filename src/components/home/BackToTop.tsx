"use client";

import { Box, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiChevronUp } from "react-icons/fi";
import { useEffect, useState } from "react";

const MotionBox = motion(Box);
const darkGreen = "#0B5D3B";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // ===== SCROLL LISTENER =====
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ===== SCROLL TO TOP =====
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <MotionBox
      position="fixed"
      bottom={{ base: 6, md: 10 }}
      right={{ base: 6, md: 10 }}
      zIndex={999}
      w="52px"
      h="52px"
      bg={darkGreen}
      color="white"
      borderRadius="full"
      display="flex"
      alignItems="center"
      justifyContent="center"
      cursor="pointer"
      aria-label="Scroll to top"
      role="button"
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      whileHover={{
        y: -2,
        boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
        backgroundColor: "#094A30",
      }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon as={FiChevronUp} boxSize={6} />
    </MotionBox>
  );
}
