"use client";

import { Box, Grid, Heading, Text, Image, Link, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const subsidiaries = [
  {
    title: "MYCES SDN BHD",
    description:
      "Providing integrated engineering consultancy services across energy, infrastructure, and environmental sectors.",
    image: "/subsidiaries/1.jpg",
    url: "",
    details: [
      "20-1, Jalan Damai Mewah 1, Taman Damai Mewah, 43000 Kajang, Selangor.",
      "Energy Audit",
      "Equipment Rental",
      "M&V",
      "REM Consultancy",
      "Energy Management System Certification",
    ],
  },
  {
    title: "MYCES BIOMEDICAL ENGINEERING SDN BHD",
    description:
      "Providing specialized biomedical engineering solutions to support healthcare facilities with reliable and compliant technical services.",
    image: "/subsidiaries/15.jpg",
    url: "",
    details: [
      "No 7, Jalan Kesuma 3/2, Bandar Tasik Kesuma, 43000 Beranang, Selangor.",
      "Biomedical Services",
    ],
  },
  {
    title: "MYCES VENTURES SDN BHD",
    description:
      "Delivering professional energy-related services and equipment solutions to support industrial and commercial operations.",
    image: "/subsidiaries/10.jpg",
    url: "",
    details: [
      "Suite 1, No 28B, Jalan Jambu 4, Taman Kota Masai, 81700 Pasir Gudang, Johor",
      "Energy Audit",
      "Equipment Rental",
      "Measurement and Verification",
    ],
  },
  {
    title: "MYCES MANUFACTURING SDN BHD",
    description:
      "Focused on developing innovative digital systems and automation tools to enhance efficiency and data-driven decision-making.",
    image: "/subsidiaries/11.jpg",
    url: "",
    details: [
      "20-2, Jalan Damai Mewah 1, Taman Damai Mewah, 43000 Kajang, Selangor.",
      "Digital System",
    ],
  },
  {
    title: "MYCES ACADEMY SDN BHD",
    description:
      "Dedicated to professional training, certification, and talent development for future-ready technical professionals.",
    image: "/subsidiaries/12.jpg",
    url: "",
    details: [
      "Suite 1, 20-2, Jalan Damai Mewah 1, Taman Damai Mewah, 43000 Kajang, Selangor",
      "Robotic Class",
      "Training Provider",
    ],
  },
  {
    title: "MYCES AIRCOND & ELECTRICAL SERVICES SDN BHD",
    description:
      "MyCES Aircond & Electrical Services Sdn Bhd is a Malaysian contractor delivering safe, efficient, and smart electrical and building automation solutions.",
    image: "/subsidiaries/13.jpg",
    url: "",
    details: [
      "20, Jalan Damai Mewah 1, Taman Damai Mewah, 43000 Kajang, Selangor",
      "Geological Survey",
      "Building Automation System (BAS)",
      "Control Panel Supply & Installation",
    ],
  },
  {
    title: "MYCES ENGINEERING SDN BHD",
    description:
      "Providing integrated engineering consultancy services across energy, infrastructure, and environmental sectors.",
    image: "/subsidiaries/14.jpg",
    url: "",
    details: [
      "Suite 1, 20-1, Jalan Damai Mewah 1, Taman Damai Mewah, 43000 Kajang, Selangor.",
      "Indoor Air Quality (IAQ)",
    ],
  },
];

export default function GetToKnowUsSection() {
  return (
    <Box w="full" bg="white" py={{ base: 20, md: 28 }} px={{ base: 6, md: 20 }}>
      <Box textAlign="center" mb={{ base: 14, md: 20 }}>
        <Heading
          fontSize={{ base: "1xl", md: "3xl" }}
          fontWeight="bold"
          color="#0F2A1D"
        >
          Get To Know Us
        </Heading>
      </Box>

      <Box maxW="1200px" mx="auto">
        {subsidiaries.map((item, index) => {
          const isEven = index % 2 !== 0;

          return (
            <MotionBox
              key={`${item.title}-${index}`}
              mb={{ base: 16, md: 24 }}
              initial={{ opacity: 0, x: isEven ? 80 : -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Grid
                templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                gap={{ base: 8, md: 14 }}
                alignItems="center"
              >
                <Box order={{ base: 1, md: isEven ? 2 : 1 }}>
                  <Link
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    _hover={{ textDecoration: "none" }}
                  >
                    <Heading
                      fontSize={{ base: "xl", md: "2xl" }}
                      fontWeight="bold"
                      color="#0F2A1D"
                      mb={4}
                      cursor="pointer"
                      _hover={{
                        color: "#163F2D",
                        textDecoration: "underline",
                      }}
                    >
                      {item.title}
                    </Heading>
                  </Link>

                  <Text
                    fontSize={{ base: "md", md: "md" }}
                    color="gray.700"
                    lineHeight="1.9"
                    mb={4}
                  >
                    {item.description}
                  </Text>

                  <Stack gap={2} pl={4}>
                    {/* Location */}
                    <Text fontSize="sm" fontWeight="semibold" color="gray.500">
                      Location
                    </Text>
                    <Text fontSize="md" color="gray.600">
                      • {item.details[0]}
                    </Text>

                    {/* Services */}
                    {item.details.length > 1 && (
                      <>
                        <Text
                          fontSize="sm"
                          fontWeight="semibold"
                          color="gray.500"
                          mt={3}
                        >
                          Services
                        </Text>
                        {item.details.slice(1).map((detail, i) => (
                          <Text key={i} fontSize="md" color="gray.600">
                            • {detail}
                          </Text>
                        ))}
                      </>
                    )}
                  </Stack>
                </Box>

                <MotionBox
                  order={{ base: 2, md: isEven ? 1 : 2 }}
                  whileHover={{ scale: 1.04, y: -6 }}
                  transition={{ type: "spring", stiffness: 120, damping: 18 }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    borderRadius="2xl"
                    border="1px solid"
                    borderColor="gray.200"
                    w="full"
                    h={{ base: "220px", md: "320px" }}
                    objectFit="cover"
                    boxShadow="sm"
                    _hover={{ boxShadow: "lg" }}
                  />
                </MotionBox>
              </Grid>
            </MotionBox>
          );
        })}
      </Box>
    </Box>
  );
}
