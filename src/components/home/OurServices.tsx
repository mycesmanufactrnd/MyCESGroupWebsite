"use client";

import { useState, useEffect } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionBox = motion(Box);

const ITEM_WIDTH = 280; // width of each service card

interface Service {
  title: string;
  image: string;
  href: string;
}

const services: Service[] = [
  {
    title: "Digital System",
    image: "/home/7.jpg",
    href: "/services/energy-audit/digitalsystem",
  },
  {
    title: "Energy Audit",
    image: "/home/8.jpg",
    href: "/services/energy-audit",
  },
  {
    title: "Equipment Rental",
    image: "/erservice/new5er.jpg",
    href: "/services2/equipmentrental",
  },
  {
    title: "Measurement and Verifications",
    image: "/home/10.jpg",
    href: "/services3/measurement",
  },
  {
    title: "Agriculture",
    image: "/home/11.jpg",
    href: "/services4/agriculture",
  },
  {
    title: "REM Consultancy",
    image: "/home/12.jpg",
    href: "/services5/reemconsultancy",
  },
  {
    title: "Geological Survey",
    image: "/home/18.jpg",
    href: "/services6/geologicalsurvey",
  },
  {
    title: "Biomedical",
    image: "/home/14.jpg",
    href: "/services8/biomedical",
  },
  {
    title: "Energy Management System Certification",
    image: "/home/15.jpg",
    href: "/services7/emscertification",
  },
  {
    title: "Robotic And Coding Class",
    image: "/home/16.jpg",
    href: "/services9/robotic",
  },
  {
    title: "Training Provider",
    image: "/home/17.jpg",
    href: "/services10/training",
  },
  {
    title: "Electronic Compenents And Tools Supply",
    image: "/home/24.jpg",
    href: "/services10/training",
  },
  {
    title: "Building Automation System",
    image: "/home/18.jpg",
    href: "/services11/bas",
  },
  {
    title: "Control Panel Supply",
    image: "/home/home2/20new.jpeg",
    href: "/services11/bas",
  },
  {
    title: "Electrical Wiring And Installation",
    image: "/home/21.jpg",
    href: "/services11/bas",
  },
  {
    title: "Testing, Commissioning And Maintenenace",
    image: "/home/22.jpg",
    href: "/services11/bas",
  },
  {
    title: "Energy Efficiency And Smart Building Solutions",
    image: "/home/23.jpg",
    href: "/services11/bas",
  },
  {
    title: "Indoor Air Quality (IAQ)",
    image: "/home/19.jpg",
    href: "/services16/indoor",
  },
];

export default function ServicesSlider() {
  const [index, setIndex] = useState(0);
  const totalSlides = services.length;

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % totalSlides);
  const prev = () => setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

  return (
    <Box
      position="relative"
      overflow="hidden"
      px={10}
      py={20}
      bg="gray.50"
      boxShadow="0 10px 40px rgba(44, 79, 49, 0.15)"
    >
      {/* HEADER */}
      <Flex align="center" mb={8} gap={4}>
        <Box flex="1" h="1px" bg="gray.300" />
        <Text
          fontWeight="bold"
          fontSize={{ base: "md", md: "lg" }}
          whiteSpace="nowrap"
        >
          Our Services
        </Text>
        <Box flex="1" h="1px" bg="gray.300" />
      </Flex>

      {/* SLIDER TRACK */}
      <Flex
        transform={`translateX(-${index * ITEM_WIDTH}px)`}
        transition="transform 0.6s ease"
        gap={6}
      >
        {services.map((service, i) => (
          <Box key={i} minW={`${ITEM_WIDTH}px`} maxW={`${ITEM_WIDTH}px`}>
            <Link href={service.href}>
              <MotionBox
                position="relative"
                height="200px"
                borderRadius="xl"
                overflow="hidden"
                cursor="pointer"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  objectFit="cover"
                  w="100%"
                  h="100%"
                  opacity={0.65}
                  transition="transform 0.4s ease"
                  _hover={{ transform: "scale(1.05)" }}
                />

                <Box position="absolute" inset={0} bg="rgba(0,0,0,0.25)" />

                <Flex
                  position="absolute"
                  inset={0}
                  justify="center"
                  align="center"
                  textAlign="center"
                  px={2}
                >
                  <Text fontWeight="bold" color="white" fontSize="lg">
                    {service.title}
                  </Text>
                </Flex>
              </MotionBox>
            </Link>
          </Box>
        ))}
      </Flex>

      <Box
        as="button"
        position="absolute"
        left={0}
        top="50%"
        transform="translateY(-50%)"
        zIndex={2}
        onClick={prev}
        p={2}
      >
        <Image src="/images/hero2.png" alt="prev" w={6} h={6} />
      </Box>

      <Box
        as="button"
        position="absolute"
        right={0}
        top="50%"
        transform="translateY(-50%)"
        zIndex={2}
        onClick={next}
        p={2}
      >
        <Image src="/images/hero1.png" alt="next" w={6} h={6} />
      </Box>

      <Flex justify="center" mt={6} gap={2}>
        {services.map((_, idx) => (
          <Box
            key={idx}
            w={3}
            h={3}
            borderRadius="full"
            bg={index === idx ? "gray.800" : "gray.400"}
            cursor="pointer"
            transition="all 0.3s"
            onClick={() => setIndex(idx)}
          />
        ))}
      </Flex>
    </Box>
  );
}
