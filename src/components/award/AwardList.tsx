"use client";

import { Box, Grid, Image, Text, Heading, IconButton } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { CloseIcon } from "@chakra-ui/icons";
import { Icon } from "lucide-react";

const MotionBox = motion(Box);

// Awards data
const awards = [
  {
    title: "Perakuan Pendaftaran",
    year: "2022",
    img: "/certificates/1. CIDB- PERAKUAN PENDAFTARAN.png",
  },
  {
    title: "Sijil Perolehan Kerja Kerajaan",
    year: "2022",
    img: "/certificates/1. CIDB- SIJIL PEROLEHAN KERJA KERAJAAN.png",
  },
  {
    title: "Pendaftaran Syarikat Perkhidmatan Tenaga (ESCO)",
    year: "2022",
    img: "/certificates/1. ESCO.png",
  },
  {
    title: "Perakuan Pendaftaran Syarikat",
    year: "2022",
    img: "/certificates/1. KKM- SIJIL AKUAN PENDAFTARAN SYARIKAT.png",
  },
  {
    title: "Petronas Supplier Certificates",
    year: "2022",
    img: "/certificates/1. PETRONAS LICENSE.png",
  },
  {
    title: "Pengiktirafan Taraf Bumiputera (PKK)",
    year: "2022",
    img: "/certificates/1. PINGIKTIRAFAN BUMIPUTERA PKK.png",
  },
  {
    title: "Tenaga Nasional Berhad (TNB) Vendors Certificates",
    year: "2027",
    img: "/certificates/1. TNB.png",
  },
  {
    title: "Akuan Pendaftaran Syarikat Bumiputera",
    year: "2023",
    img: "/certificates/1.KKM- SIJIL AKUAN PENDAFTARAN.png",
  },
  // {
  //   title: "Perakuan Kekompetenan Penjaga Jantera",
  //   year: "2026",
  //   img: "/certificates/2. ADC1.png",
  // },
  // {
  //   title: "Certified Facility Management Professional",
  //   year: "2022",
  //   img: "/certificates/2. ADC2.png",
  // },
  // {
  //   title: "Kompetensi Kemahiran Pembinaan",
  //   year: "2023",
  //   img: "/certificates/2. ADC3.png",
  // },
  // {
  //   title: "Certified Energy Manager",
  //   year: "",
  //   img: "/certificates/3. CEM.png",
  // },
  // {
  //   title: "Perakuan Pendaftaran Sebagai Pengurus Tenaga Berdaftar Jenis Kedua",
  //   year: "2025",
  //   img: "/certificates/3. COR.png",
  // },
  // {
  //   title: "Perakuan Amalan Pengurus Tenaga Berdaftar Jenis Kedua",
  //   year: "2026",
  //   img: "/certificates/3. PC2.png",
  // },
  // {
  //   title: "Perakuan Pendaftaran Sebagai Pengurus Tenaga Elektrik",
  //   year: "2012",
  //   img: "/certificates/4. PC.png",
  // },
  // {
  //   title: "Perakuan Kekompetenan Sebagai Penjaga Jantera",
  //   year: "2019",
  //   img: "/certificates/5. PKJ.png",
  // },
  // {
  //   title: "Perakuan Pendaftaran Juruaudit Tenaga Berdaftar",
  //   year: "2025",
  //   img: "/certificates/6. COR.png",
  // },
  // {
  //   title: "Certified Energy Manager (MAESCO)",
  //   year: "2020",
  //   img: "/certificates/7. CEM.png",
  // },
  // {
  //   title: "Perakuan Pendaftaran Sebagai Pengurus Tenaga Elektrik",
  //   year: "2021",
  //   img: "/certificates/7. REEM.png",
  // },
];

// Parent container variant to stagger children
const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

// Card variants with slide directions
const cardVariants: Variants = {
  hidden: (direction: string) => {
    switch (direction) {
      case "up":
        return { y: 60, opacity: 0 };
      case "down":
        return { y: -60, opacity: 0 };
      case "left":
        return { x: -60, opacity: 0 };
      case "right":
        return { x: 60, opacity: 0 };
      default:
        return { opacity: 0, y: 20 };
    }
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] },
  },
};

export default function AwardsList() {
  // State for lightbox modal
  const [selectedAward, setSelectedAward] = useState<{
    title: string;
    img: string;
    year: string;
  } | null>(null);

  return (
    <Box bg="white" py={{ base: 20, md: 28 }} px={{ base: 6, md: 14 }}>
      <Heading
        textAlign="center"
        fontSize={{ base: "2xl", md: "3xl" }}
        mb={16}
        fontWeight="bold"
        color="#163F26"
      >
        Our Professional Certificates
      </Heading>

      {/* Motion Container */}
      <MotionBox
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Awards Grid */}
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          justifyItems="center"
          gap={{ base: 3, md: 2 }}
        >
          {awards.map((award, index) => {
            const row = Math.floor(index / 3);
            const col = index % 3;
            let direction: "up" | "down" | "left" | "right" = "up";
            if (row % 2 === 0) direction = col % 2 === 0 ? "up" : "left";
            else direction = col % 2 === 0 ? "down" : "right";

            return (
              <MotionBox
                key={index}
                custom={direction}
                variants={cardVariants}
                bg="white"
                border="1px solid #E2E8F0"
                borderRadius="xl"
                overflow="hidden"
                display="flex"
                flexDirection="column"
                alignItems="center"
                textAlign="center"
                p={6}
                minH="420px"
                w={{ base: "90%", md: "340px" }}
                _hover={{
                  transform: "scale(1.05)",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
                  transition: "all 0.4s ease-out",
                }}
                cursor="pointer"
                onClick={() => setSelectedAward(award)} // <-- click to zoom
              >
                {/* Award Image */}
                <Box
                  flex="2"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mb={6}
                  maxH="220px"
                >
                  <Image
                    src={award.img}
                    alt={award.title}
                    objectFit="contain"
                    maxH="100%"
                  />
                </Box>

                {/* Text Area */}
                <Box flex="1">
                  <Text
                    fontSize={{ base: "md", md: "lg" }}
                    color="#4A9B9B"
                    fontWeight="semibold"
                    fontFamily="sans-serif"
                  >
                    {award.title}
                  </Text>
                  <Text
                    fontSize={{ base: "sm", md: "md" }}
                    color="#4A9B9B"
                    mt={2}
                  >
                    {award.year}
                  </Text>
                </Box>
              </MotionBox>
            );
          })}
        </Grid>
      </MotionBox>

      {/* ===== LIGHTBOX MODAL ===== */}
      {selectedAward && (
        <Box
          position="fixed"
          inset={0}
          bg="blackAlpha.800"
          zIndex={50}
          display="flex"
          alignItems="center"
          justifyContent="center"
          onClick={() => setSelectedAward(null)} // click outside closes
        >
          <Box
            bg="white"
            borderRadius="md"
            p={4}
            maxW="90%"
            maxH="90%"
            overflow="auto"
            position="relative"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <IconButton
              position="absolute"
              top={2}
              right={2}
              onClick={() => setSelectedAward(null)}
              aria-label="Close"
              size="sm"
              bg="transparent"
              _hover={{ bg: "gray.200" }}
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
              w="auto"
              h="auto"
              objectFit="contain"
              mx="auto"
            />
          </Box>
        </Box>
      )}
    </Box>
  );
}
