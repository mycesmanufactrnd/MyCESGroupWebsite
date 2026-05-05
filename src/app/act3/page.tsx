"use client";

import { Box, Flex, Image, Text, IconButton } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CloseIcon } from "@chakra-ui/icons";

const MotionBox = motion(Box);

const pages = ["/policy/ISO41001.jpg"];

export default function Act3Page() {
  const [current, setCurrent] = useState(0);
  const [selectedPage, setSelectedPage] = useState<number | null>(null);

  const nextPage = () => {
    if (current < pages.length - 1) setCurrent(current + 1);
  };

  const prevPage = () => {
    if (current > 0) setCurrent(current - 1);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextPage();
      if (e.key === "ArrowLeft") prevPage();
      if (e.key === "Escape") setSelectedPage(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [current]);

  return (
    <Box
      minH="100vh"
      bg="gray.50"
      py={{ base: 6, md: 16 }}
      px={{ base: 2, md: 10 }}
    >
      {/* TITLE */}
      <Text
        textAlign="center"
        fontWeight="bold"
        fontSize={{ base: "md", md: "2xl" }}
        mb={{ base: 4, md: 6 }}
      >
        ISO 41001 : 2018
      </Text>

      {/* IMAGE VIEW */}
      <Flex justify="center" align="center">
        <Box
          w="100%"
          maxW={{ base: "250px", md: "400px" }}
          borderRadius="lg"
          boxShadow="lg"
          bg="white"
          overflow="hidden"
        >
          <AnimatePresence mode="wait">
            <MotionBox
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={pages[current]}
                alt={`Policy Page ${current + 1}`}
                w="100%"
                maxH={{ base: "70vh", md: "80vh" }} // ✅ consistent height
                objectFit="contain"
                mx="auto"
                onClick={() => setSelectedPage(current)}
                cursor="zoom-in"
              />
            </MotionBox>
          </AnimatePresence>
        </Box>
      </Flex>

      {/* PAGE INDICATOR */}
      <Text
        textAlign="center"
        mt={3}
        fontSize={{ base: "xs", md: "sm" }}
        color="gray.600"
      >
        Page {current + 1} of {pages.length}
      </Text>

      {/* 🔥 LIGHTBOX MODAL */}
      {selectedPage !== null && (
        <Box
          position="fixed"
          inset={0}
          bg="blackAlpha.800"
          zIndex={9999}
          display="flex"
          alignItems="center"
          justifyContent="center"
          onClick={() => setSelectedPage(null)}
        >
          <Box
            bg="white"
            borderRadius="lg"
            p={4}
            maxW="90%"
            maxH="90%"
            position="relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <IconButton
              position="absolute"
              top={2}
              right={2}
              onClick={() => setSelectedPage(null)}
              aria-label="Close"
              size="sm"
            >
              <CloseIcon />
            </IconButton>

            {/* TITLE */}
            <Text mb={4} fontWeight="bold" textAlign="center">
              ISO 41001 : 2018
            </Text>

            {/* IMAGE */}
            <Image
              src={pages[selectedPage]}
              maxH="80vh"
              objectFit="contain"
              mx="auto"
            />
          </Box>
        </Box>
      )}
    </Box>
  );
}
