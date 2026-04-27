"use client";

import { Box, Heading, Text, SimpleGrid, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const darkGreen = "#0B5D3B";

const products = [
  {
    title: "Medical Equipment",
    image: "/bioservice/5.jpeg",
    description:
      "A range of specialized clinical hardware sourced from leading healthcare brands to meet the operational needs of hospitals and clinics.",
  },
  {
    title: "Rapid Test Kits",
    image: "/bioservice/rtk.jpeg",
    description:
      "Portable kits designed for quick and accurate diagnostic testing in various clinical settings.",
  },
  {
    title: "Consumable Items",
    image: "/bioservice/bio4.jpeg",
    description:
      "Essential medical supplies and high-volume disposable items required for daily healthcare operations.",
  },
];

export default function BiomedProductSection() {
  return (
    <Box
      py={{ base: 20, md: 28 }}
      px={{ base: 6, md: 20 }}
      bg="#dde0dcb3"
      boxShadow="inset 0 8px 30px rgba(0,0,0,0.05)" // subtle section depth
    >
      {/* HEADER */}
      <Heading
        fontFamily={"heading"}
        textAlign="center"
        fontSize={{ base: "2xl", md: "3xl" }}
        fontWeight="bold"
        color={darkGreen}
        mb={16}
      >
        Our Products
      </Heading>

      {/* GRID */}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        gap={10}
        maxW="1200px"
        mx="auto"
      >
        {products.map((product, index) => (
          <MotionBox
            key={product.title}
            bg="white"
            borderRadius="2xl"
            overflow="hidden"
            border="1px solid"
            borderColor="gray.200"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            boxShadow="0 10px 25px rgba(0,0,0,0.05)"
            _hover={{
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            }}
          >
            {/* IMAGE */}
            <Box overflow="hidden" bg="gray.50">
              <Image
                src={product.image}
                alt={product.title}
                w="100%"
                h="220px"
                objectFit="contain"
                p={6}
                transition="transform 0.4s ease"
                _hover={{ transform: "scale(1.08)" }}
              />
            </Box>

            {/* CONTENT */}
            <Box p={6}>
              <Heading
                fontFamily={"heading"}
                fontSize="lg"
                mb={3}
                color={darkGreen}
              >
                {product.title}
              </Heading>

              <Text
                fontFamily={"body"}
                fontSize="sm"
                color="gray.600"
                lineHeight="1.7"
              >
                {product.description}
              </Text>
            </Box>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  );
}
