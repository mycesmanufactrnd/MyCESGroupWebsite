"use client";

import { Box, Text, Heading, Flex, IconButton } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

type SafeIconButtonProps = React.ComponentProps<typeof IconButton> & {
  icon: React.ReactElement;
};

const MotionBox = motion(Box);

const features = [
  {
    title: "Strategic Policy & Objectives",
    description:
      "Establishing clear energy policies and measurable goals that align with organizational targets to provide a roadmap for efficiency.",
  },
  {
    title: "Comprehensive Resource Monitoring",
    description:
      "Continuous tracking of all energy streams, including electricity, gas, and fuel, to understand the total energy footprint of the facility.",
  },
  {
    title: "IoT Data Collection",
    description:
      "Utilizing advanced meters and sensors to gather precise, real-time data, ensuring that management decisions are based on accurate consumption facts.",
  },
  {
    title: "Performance Analytics",
    description:
      "In-depth analysis of collected data to identify trends, benchmark performance, and pinpoint specific areas where energy is being wasted.",
  },
  {
    title: "Efficiency Action Plans",
    description:
      "Developing and executing targeted technical and behavioral strategies designed to improve energy performance and hit reduction targets.",
  },
];

export default function EmsCertificationCarousel() {
  const [centerIndex, setCenterIndex] = useState(0);
  const total = features.length;

  const prev = () => setCenterIndex((centerIndex - 1 + total) % total);
  const next = () => setCenterIndex((centerIndex + 1) % total);

  const getProps = (index: number) => {
    const diff = (index - centerIndex + total) % total;
    if (diff === 0) return { scale: 1.2, x: 0, opacity: 1, zIndex: 3 };
    if (diff === 1 || diff === total - 1)
      return { scale: 1, x: diff === 1 ? 260 : -260, opacity: 0.85, zIndex: 2 };
    if (diff === 2 || diff === total - 2)
      return {
        scale: 0.85,
        x: diff === 2 ? 480 : -480,
        opacity: 0.6,
        zIndex: 1,
      };
    return {
      scale: 0.7,
      x: diff > total / 2 ? -600 : 600,
      opacity: 0,
      zIndex: 0,
    };
  };

  return (
    <Box
      w="full"
      py={{ base: 16, md: 24 }}
      px={{ base: 6, md: 20 }}
      bg="#dde0dcb3"
    >
      <Heading
        fontSize={{ base: "2xl", md: "3xl" }}
        fontWeight="bold"
        mb={24}
        textAlign="center"
        color="#063e26"
      >
        What Energy Management System Involve?
      </Heading>

      <Box position="relative" w="full" overflow="hidden">
        <Flex
          justify="center"
          align="center"
          position="relative"
          h={{ base: "300px", md: "360px" }}
        >
          {features.map((feature, index) => {
            const { scale, x, opacity, zIndex } = getProps(index);

            return (
              <MotionBox
                key={index}
                position="absolute"
                cursor="pointer"
                w={{ base: "250px", md: "280px" }}
                h={{ base: "220px", md: "280px" }}
                bg="gray.100"
                borderRadius="2xl"
                shadow="md"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                p={4}
                style={{ zIndex }}
                initial={{ opacity: 0, y: 80 }} // start further below for smoother scroll effect
                whileInView={{
                  transform: `translateX(${x}px) scale(${scale})`,
                  opacity,
                  y: 0,
                }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 28,
                  delay: index * 0.12,
                }} // smoother entrance
                whileHover={{
                  scale: scale + 0.08,
                  y: -10,
                  boxShadow: "0px 20px 30px rgba(0,0,0,0.15)",
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
              >
                <Heading fontSize="lg" mb={2} color="#0F2A1D">
                  {feature.title}
                </Heading>
                <Text fontSize="sm" color="gray.700">
                  {feature.description}
                </Text>
              </MotionBox>
            );
          })}
        </Flex>

        {/* Navigation */}
        <IconButton
          {...({
            icon: <ChevronLeftIcon boxSize={6} />,
          } as SafeIconButtonProps)}
          aria-label="Previous"
          position="absolute"
          top="50%"
          left={1}
          transform="translateY(-50%)"
          zIndex={10}
          onClick={prev}
          bg="white"
          _hover={{ bg: "green.100" }}
          boxShadow="md"
        />
        <IconButton
          {...({
            icon: <ChevronRightIcon boxSize={6} />,
          } as SafeIconButtonProps)}
          aria-label="Next"
          position="absolute"
          top="50%"
          right={1}
          transform="translateY(-50%)"
          zIndex={10}
          onClick={prev}
          bg="white"
          _hover={{ bg: "green.100" }}
          boxShadow="md"
        />

        {/* Pagination */}
        <Flex justify="center" mt={10} gap={3}>
          {features.map((_, i) => (
            <Box
              key={i}
              w={i === centerIndex ? 4 : 3}
              h={i === centerIndex ? 4 : 3}
              borderRadius="full"
              bg={i === centerIndex ? "green.700" : "gray.400"}
              cursor="pointer"
              onClick={() => setCenterIndex(i)}
              transition="all 0.3s"
            />
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
