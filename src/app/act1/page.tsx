"use client";

import { Box, Flex, Image, Text, IconButton } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CloseIcon } from "@chakra-ui/icons";

const MotionBox = motion(Box);

const pages = ["/policy/page1.jpg", "/policy/page2.jpg"];

export default function Act1Page() {
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
      <Text textAlign="center" fontWeight="bold" fontSize="xl" mb={6}>
        Anti-Bribery and Corruption Policy
      </Text>

      {/* NORMAL VIEW */}
      <Flex justify="center" align="center">
        <Box
          w="100%"
          maxW={{ base: "250px", md: "400px", lg: "600px" }} // ✅ FIXED SIZE
          position="relative"
          borderRadius="lg"
          boxShadow="lg"
          bg="white"
          overflow="hidden"
        >
          {/* LEFT */}
          <Box
            onClick={prevPage}
            position="absolute"
            left="10px"
            top="50%"
            transform="translateY(-50%)"
            zIndex={2}
            cursor="pointer"
            fontSize="32px"
            fontWeight="bold"
            color="gray.600"
            _hover={{
              color: "black",
              transform: "translateY(-50%) scale(1.2)",
            }}
          >
            ‹
          </Box>

          {/* IMAGE */}
          <AnimatePresence mode="wait">
            <MotionBox
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
            >
              <Image
                src={pages[current]}
                onClick={() => setSelectedPage(current)}
                cursor="zoom-in"
                maxH={{ base: "70vh", md: "80vh" }} // ✅ consistent height
                objectFit="contain"
                mx="auto"
              />
            </MotionBox>
          </AnimatePresence>

          {/* RIGHT */}
          <Box
            onClick={nextPage}
            position="absolute"
            right="10px"
            top="50%"
            transform="translateY(-50%)"
            zIndex={2}
            cursor="pointer"
            fontSize="32px"
            fontWeight="bold"
            color="gray.600"
            _hover={{
              color: "black",
              transform: "translateY(-50%) scale(1.2)",
            }}
          >
            ›
          </Box>
        </Box>
      </Flex>

      {/* PAGE INDICATOR */}
      <Text textAlign="center" mt={3} fontSize="sm">
        Page {current + 1} of {pages.length}
      </Text>

      {/* 🔥 LIGHTBOX */}
      {selectedPage !== null && (
        <Box
          position="fixed"
          inset={0}
          bg="blackAlpha.800"
          zIndex={50}
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
            {/* CLOSE */}
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
              Anti-Bribery and Corruption Policy
            </Text>

            {/* IMAGE + NAV */}
            <Flex justify="center" align="center">
              <Box position="relative" maxW="700px" w="100%">
                {/* LEFT */}
                <Box
                  onClick={() =>
                    selectedPage > 0 && setSelectedPage(selectedPage - 1)
                  }
                  position="absolute"
                  left="10px"
                  top="50%"
                  transform="translateY(-50%)"
                  zIndex={2}
                  cursor="pointer"
                  fontSize="32px"
                  fontWeight="bold"
                  color="gray.600"
                >
                  ‹
                </Box>

                {/* IMAGE */}
                <Image
                  src={pages[selectedPage]}
                  maxH="80vh"
                  objectFit="contain"
                  mx="auto"
                />

                {/* RIGHT */}
                <Box
                  onClick={() =>
                    selectedPage < pages.length - 1 &&
                    setSelectedPage(selectedPage + 1)
                  }
                  position="absolute"
                  right="10px"
                  top="50%"
                  transform="translateY(-50%)"
                  zIndex={2}
                  cursor="pointer"
                  fontSize="32px"
                  fontWeight="bold"
                  color="gray.600"
                >
                  ›
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
      )}
    </Box>
  );
}
