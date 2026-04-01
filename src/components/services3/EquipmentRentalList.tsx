"use client";

import { Box, Grid, Heading, Flex, Text, Image, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const MotionBox = motion(Box);
const darkGreen = "#063e26";
const softSage = "#CED5CC"; // fallback color

const equipmentList = [
  {
    title: "Power Energy Logger - Chauvin Arnoux, PEL103 ",
    description:
      "A compact device for recording electrical consumption and power quality. It identifies usage patterns to help facilities uncover potential energy savings.",
    image: "/erservice/1.jpeg",
  },
  {
    title: "Ultrasonic Flowmeter (Liquid) - Flaxim F704",
    description:
      "A non-intrusive sensor for measuring liquid flow rates without pipe modification. It is ideal for auditing water and chiller systems for peak performance.",
    image: "/erservice/new1er.jpg",
  },
  {
    title: "Flowmeter (Compressed Air) - Fluxus G601",
    description:
      "Designed to track the volume of compressed air in industrial plants. It helps maintenance teams detect leaks and optimize air compressor efficiency.",
    image: "/erservice/new3er.jpg",
  },
  {
    title: "Flue Gas Analyzer - TESTO 340",
    description:
      "A professional tool for measuring combustion efficiency and boiler emissions. It provides precise data to help optimize burner performance and reduce fuel waste.",
    image: "/erservice/new2er.jpg",
  },
  {
    title: "Lux, RH, and Temperature Sensors - KIMO LX100",
    description:
      "Sensors that monitor light levels, humidity, and ambient temperature. These are essential for establishing a Baseline Energy Index and ensuring environmental standards.",
    image: "/erservice/new4er.jpg",
  },
  {
    title: "Power Quality Clamp Charvin Arnoud 93",
    description:
      "Specialized rental services provided through the biomedical division. This supports healthcare facilities with various certified medical and testing equipment.",
    image: "/erservice/4.jpg",
  },
];

export default function EquipmentRentalSection() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <Box
      py={{ base: 16, md: 24 }}
      px={{ base: 6, md: 20 }}
      // Background image
      bgImage="url('/erservice/3.jpg')" // replace with your image path
      bgPos="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgAttachment="fixed" // makes it static while content scrolls
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        bg: softSage,
        opacity: 0.6, // optional overlay for readability
        zIndex: 0,
      }}
      position="relative"
    >
      <Grid templateColumns={{ base: "1fr", md: "30% 1fr" }} gap={10} position="relative" zIndex={1}>
        {/* LEFT SIDEBAR */}
        <Box
          position={{ base: "static", md: "sticky" }}
          top={{ md: "20px" }}
          alignSelf="flex-start"
        >
          <Heading fontSize={{ base: "2xl", md: "3xl" }} color={darkGreen} mb={4}>
            List of Equipment for Rental
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.700">
            Click on each equipment to see details and images of our available rental equipment.
          </Text>
        </Box>

        {/* RIGHT COLUMN */}
        <Box>
          {equipmentList.map((item, index) => {
            const isOpen = openIndexes.includes(index);

            return (
              <MotionBox
                key={item.title}
                mb={4}
                border="1px solid #eee"
                borderRadius="md"
                overflow="hidden"
                cursor="pointer"
                onClick={() => toggleAccordion(index)}
                whileHover={{ y: -2, boxShadow: "lg" }}
              >
                {/* HEADER */}
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  px={6}
                  py={4}
                  bg="white"
                >
                  <Heading fontSize="lg" fontWeight="bold" color={darkGreen}>
                    {item.title}
                  </Heading>
                  <Icon
                    as={FiChevronDown}
                    w={6}
                    h={6}
                    color={darkGreen}
                    transform={isOpen ? "rotate(180deg)" : "rotate(0deg)"}
                    transition="transform 0.3s ease"
                  />
                </Flex>

                {/* DROPDOWN CONTENT */}
                {isOpen && (
                  <MotionBox
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    px={6}
                    pb={6}
                    display="flex"
                    flexDirection={{ base: "column", md: "row" }}
                    gap={4}
                    bg="whiteAlpha.900"
                    borderRadius="md"
                  >
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.title}
                        maxW={{ base: "100%", md: "200px" }}
                        borderRadius="md"
                        objectFit="cover"
                      />
                    )}
                    <Text fontSize="md" color="gray.700" lineHeight="1.6">
                      {item.description}
                    </Text>
                  </MotionBox>
                )}
              </MotionBox>
            );
          })}
        </Box>
      </Grid>
    </Box>
  );
}