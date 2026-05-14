"use client";

import { Box, Flex, Image, Text, IconButton } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { CloseIcon } from "@chakra-ui/icons";

const pages = ["/policy/ISO9001.jpg", "/policy/ISO9001_QS.jpg"];

export default function Act2Page() {
  const [selectedPage, setSelectedPage] = useState<number | null>(null);

  // Keyboard navigation (for lightbox only)
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedPage(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

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
        ISO 9001 : 2015
      </Text>

      {/* IMAGES SIDE BY SIDE */}
      <Flex justify="center" align="center" gap={6} wrap="wrap">
        {pages.map((page, index) => (
          <Box
            key={index}
            w="100%"
            maxW={{ base: "250px", md: "400px" }}
            borderRadius="lg"
            boxShadow="lg"
            bg="white"
            overflow="hidden"
          >
            <Image
              src={page}
              alt={`ISO Certificate ${index + 1}`}
              w="100%"
              maxH={{ base: "70vh", md: "80vh" }}
              objectFit="contain"
              mx="auto"
              onClick={() => setSelectedPage(index)}
              cursor="zoom-in"
            />
          </Box>
        ))}
      </Flex>

      {/* 🔥 LIGHTBOX */}
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
              ISO 9001 : 2015
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
