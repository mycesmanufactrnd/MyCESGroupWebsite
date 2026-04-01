"use client";

import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

const MotionBox = motion(Box);
const darkGreen = "#0B5D3B";

const products = [
  {
    title: "Air Purifying Gel (GermXit)",
    image: "/bioservice/3.png",
    description:
      "A natural-origin gel containing pharmaceutical-grade Australian Tea Tree Oil that evaporates to kill and reduce biological contaminants such as mold and odors in the air.",
  },
  {
    title: "Disinfectant Wipes",
    image: "/bioservice/bio2.png",
    description:
      "Professional-grade wipes used for maintaining hygiene and disinfecting medical surfaces in healthcare environments.",
  },
  {
    title: "Medical Equipment",
    image: "/bioservice/bio3.png",
    description:
      "A range of specialized clinical hardware sourced from leading healthcare brands to meet the operational needs of hospitals and clinics.",
  },
  {
    title: "Rapid Test Kits",
    image: "/bioservice/bio4.png",
    description:
      "Portable kits designed for quick and accurate diagnostic testing in various clinical settings.",
  },
  {
    title: "Consumable Items",
    image: "/bioservice/bio5.png",
    description:
      "Essential medical supplies and high-volume disposable items required for daily healthcare operations.",
  },
];

export default function BiomedProductSection() {
  const [index, setIndex] = useState(0);

  const CARD_WIDTH = 360; // card width + gap
  const MAX_INDEX = products.length - 3;

  const next = () => {
    setIndex((prev) => (prev < MAX_INDEX ? prev + 1 : prev));
  };

  const prev = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <Box py={{ base: 20, md: 28 }} px={{ base: 6, md: 20 }} bg="#dde0dcb3">
      {/* SECTION HEADER */}
      <Heading
        textAlign="center"
        fontSize={{ base: "2xl", md: "3xl" }}
        fontWeight="bold"
        color={darkGreen}
        mb={20}
      >
        Our Products
      </Heading>

      {/* CAROUSEL WRAPPER */}
      <Box position="relative" maxW="1300px" mx="auto">
        {/* LEFT ARROW */}
        <Box
        position="absolute"
        left="-70px"
        top="50%"
        transform="translateY(-50%)"
        w="50px"
        h="50px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        cursor="pointer"
        onClick={prev}
        zIndex={2}
        >
        <Image
            src="/icon/left.png"
            alt="Previous"
            w="20px"
            h="20px"
            objectFit="contain"
        />
        </Box>


        {/* RIGHT ARROW */}
        <Box
        position="absolute"
        right="-70px"
        top="50%"
        transform="translateY(-50%)"
        w="50px"
        h="50px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        cursor="pointer"
        onClick={next}
        zIndex={2}
        >
        <Image
            src="/icon/right.png"
            alt="Next"
            w="20px"
            h="20px"
            objectFit="contain"
        />
        </Box>


        {/* VIEWPORT */}
        <Box overflow="hidden">
          <MotionBox
            display="flex"
            gap={8}
            animate={{ x: -index * CARD_WIDTH }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {products.map((product) => (
              <Box
                key={product.title}
                minW="320px"
                bg="white"
                border="1px solid"
                borderColor="gray.200"
                borderRadius="lg"
                overflow="hidden"
              >
                {/* IMAGE */}
                <Box aspectRatio="1 / 1" overflow="hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    w="100%"
                    h="90%"
                    objectFit="contain"
                    transition="transform 0.4s ease"
                    _hover={{ transform: "scale(1.05)" }}
                  />
                </Box>

                {/* CONTENT */}
                <Box p={6}>
                  <Heading fontSize="lg" mb={3}>
                    {product.title}
                  </Heading>
                  <Text fontSize="sm" color="gray.600" lineHeight="1.7">
                    {product.description}
                  </Text>
                </Box>
              </Box>
            ))}
          </MotionBox>
        </Box>
      </Box>
    </Box>
  );
}