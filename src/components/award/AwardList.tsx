"use client";

import { Box, Grid, Image, Text, Heading, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { CloseIcon } from "@chakra-ui/icons";

// Awards data
const awards = [
  {
    title: "Perakuan Pendaftaran",
    year: "2028",
    img: "/certificates/1. CIDB- PERAKUAN PENDAFTARAN.jpg",
  },
  {
    title: "Sijil Perolehan Kerja Kerajaan",
    year: "2028",
    img: "/certificates/1. CIDB- SIJIL PEROLEHAN KERJA KERAJAAN.jpg",
  },
  {
    title: "Pendaftaran Syarikat Perkhidmatan Tenaga (ESCO)",
    year: "2027",
    img: "/certificates/1. ESCO.png",
  },
  {
    title: "Perakuan Pendaftaran Syarikat",
    year: "2023",
    img: "/certificates/1. KKM- SIJIL AKUAN PENDAFTARAN SYARIKAT.png",
  },
  {
    title: "Petronas Supplier Certificates",
    year: "2027",
    img: "/certificates/1. PETRONAS LICENSE.png",
  },
  {
    title: "Pengiktirafan Taraf Bumiputera (PKK)",
    year: "2024",
    img: "/certificates/1. PINGIKTIRAFAN BUMIPUTERA PKK.png",
  },
  {
    title: "Tenaga Nasional Berhad (TNB) Vendors Certificates",
    year: "2026",
    img: "/certificates/1. TNB.png",
  },
  {
    title: "Akuan Pendaftaran Syarikat Bumiputera",
    year: "2026",
    img: "/certificates/1.KKM- SIJIL AKUAN PENDAFTARAN.png",
  },
];

export default function AwardsList() {
  const [selectedAward, setSelectedAward] = useState<{
    title: string;
    img: string;
    year: string;
  } | null>(null);

  return (
    <Box bg="gray.50" py={{ base: 20, md: 28 }} px={{ base: 6, md: 14 }}>
      <Heading
        textAlign="center"
        fontSize={{ base: "2xl", md: "3xl" }}
        mb={16}
        fontWeight="bold"
        color="#163F26"
      >
        Our Professional Certificates
      </Heading>

      {/* Grid */}
      <Grid
        templateColumns={{
          base: "1fr",
          sm: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
        }}
        gap={8}
        justifyItems="center"
      >
        {awards.map((award, index) => (
          <Box
            key={index}
            bg="whiteAlpha.800"
            backdropFilter="blur(10px)"
            border="1px solid rgba(0,0,0,0.05)"
            borderRadius="2xl"
            p={6}
            textAlign="center"
            w="100%"
            maxW="320px"
            minH="380px"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            transition="all 0.3s ease"
            _hover={{
              transform: "translateY(-8px)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
            }}
            cursor="pointer"
            onClick={() => setSelectedAward(award)}
          >
            {/* Image */}
            <Box
              flex="1"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mb={4}
            >
              <Image
                src={award.img}
                alt={award.title}
                maxH="180px"
                objectFit="contain"
              />
            </Box>

            {/* Text */}
            <Box>
              <Text fontWeight="600" fontSize="md" color="#2D3748">
                {award.title}
              </Text>
              <Text fontSize="sm" color="gray.500" mt={1}>
                {award.year}
              </Text>
            </Box>
          </Box>
        ))}
      </Grid>

      {/* LIGHTBOX */}
      {selectedAward && (
        <Box
          position="fixed"
          inset={0}
          bg="blackAlpha.800"
          zIndex={50}
          display="flex"
          alignItems="center"
          justifyContent="center"
          onClick={() => setSelectedAward(null)}
        >
          <Box
            bg="white"
            borderRadius="lg"
            p={4}
            maxW="90%"
            maxH="90%"
            overflow="auto"
            position="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <IconButton
              position="absolute"
              top={2}
              right={2}
              onClick={() => setSelectedAward(null)}
              aria-label="Close"
              size="sm"
            >
              <CloseIcon />
            </IconButton>

            <Text mb={4} fontWeight="bold" textAlign="center">
              {selectedAward.title} ({selectedAward.year})
            </Text>

            <Image
              src={selectedAward.img}
              alt={selectedAward.title}
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
