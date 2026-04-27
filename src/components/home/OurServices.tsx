"use client";

import { useState, useEffect, useRef } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionBox = motion(Box);

const ITEM_WIDTH = 280;
const GAP = 24;

const services = [
  {
    title: "Digital System",
    image: "/home/7.jpg",
    href: "/services/energy-audit/digitalsystem",
  },
  {
    title: "Energy Audit",
    image: "/home/ea1.png",
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
    title: "REM Consultancy",
    image: "/home/eng4.png",
    href: "/services5/reemconsultancy",
  },
  {
    title: "Biomedical Engineering",
    image: "/bioservice/1.png",
    href: "/services8/biomedical",
  },
  {
    title: "Robotic Class",
    image: "/academyservice/aca1.png",
    href: "/services9/robotic",
  },
  {
    title: "Electrical Wiring",
    image: "/portfolio/p13.png",
    href: "/services11/building",
  },
];

/* ===== CREATE LOOP (clone first + last items) ===== */
const cloneCount = 3;

const loopServices = [
  ...services.slice(-cloneCount),
  ...services,
  ...services.slice(0, cloneCount),
];

export default function ServicesSlider() {
  const [index, setIndex] = useState(cloneCount); // start at real first item
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const total = services.length;

  /* AUTO SLIDE */
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  /* INFINITE RESET LOGIC */
  useEffect(() => {
    if (index === total + cloneCount) {
      setTimeout(() => {
        setIndex(cloneCount);
      }, 600);
    }

    if (index === 0) {
      setTimeout(() => {
        setIndex(total);
      }, 600);
    }
  }, [index, total]);

  const next = () => setIndex((prev) => prev + 1);
  const prev = () => setIndex((prev) => prev - 1);

  return (
    <Box
      position="relative"
      overflow="hidden"
      px={10}
      py={50}
      bg="linear-gradient(135deg, #f8faf8 0%, #f0f4f0d9 100%)"
    >
      {/* HEADER */}
      <Flex align="center" mb={6} px={{ base: 4, md: 16 }} gap={4}>
        <Box flex="1" h="1px" bg="gray.300" />
        <Text fontFamily="heading" fontSize="14px" fontWeight="semibold">
          Our Services
        </Text>
        <Box flex="1" h="1px" bg="gray.300" />
      </Flex>

      {/* TRACK */}
      <Flex
        transform={`translateX(-${index * (ITEM_WIDTH + GAP)}px)`}
        transition="transform 0.6s ease"
        gap={`${GAP}px`}
      >
        {loopServices.map((service, i) => (
          <Box key={i} minW={`${ITEM_WIDTH}px`} maxW={`${ITEM_WIDTH}px`}>
            <Link href={service.href}>
              <MotionBox
                h="200px"
                borderRadius="xl"
                overflow="hidden"
                position="relative"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                />

                <Box position="absolute" inset={0} bg="rgba(0,0,0,0.5)" />

                <Flex
                  position="absolute"
                  inset={0}
                  align="center"
                  justify="center"
                >
                  <Text color="white" fontWeight="bold" fontSize="14px">
                    {service.title}
                  </Text>
                </Flex>
              </MotionBox>
            </Link>
          </Box>
        ))}
      </Flex>

      {/* CONTROLS */}
      <Box
        position="absolute"
        left={0}
        top="50%"
        transform="translateY(-50%)"
        onClick={prev}
        cursor="pointer"
      >
        <Image src="/images/hero2.png" w={6} h={6} />
      </Box>

      <Box
        position="absolute"
        right={0}
        top="50%"
        transform="translateY(-50%)"
        onClick={next}
        cursor="pointer"
      >
        <Image src="/images/hero1.png" w={6} h={6} />
      </Box>
    </Box>
  );
}
