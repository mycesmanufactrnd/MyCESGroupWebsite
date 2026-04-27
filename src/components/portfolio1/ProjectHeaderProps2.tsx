"use client";

import { Box, Flex, Text, Link as ChakraLink } from "@chakra-ui/react";
import { motion } from "framer-motion";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const MotionBox = motion(Box);

interface ProjectHeaderProps2 {
  title: string;
  category: string;
}

export default function ProjectHeaderProps2({
  title,
  category,
}: ProjectHeaderProps2) {
  const [isSticky, setIsSticky] = useState(false);
  const searchParams = useSearchParams();
  const service = searchParams.get("service") || "DEFAULT";
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box w="full" mb={12}>
      {/* HEADER BANNER */}
      <MotionBox
        position="relative"
        w="full"
        h={{ base: "160px", md: "320px" }}
        display="flex"
        alignItems="center"
        px={{ base: 6, md: 20 }}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Background Image */}
        <Box position="absolute" inset={0} zIndex={0}>
          <Image
            src="/portfolio/92.jpg"
            alt="Energy Audit"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          {/* Dark overlay */}
          <Box position="absolute" inset={0} bg="rgba(0,0,0,0.45)" />
        </Box>

        {/* Text content */}
        <Box position="relative" zIndex={1}>
          <Text
            fontFamily={"heading"}
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="bold"
            textTransform="uppercase"
            color="white"
          >
            {service}
          </Text>
        </Box>
      </MotionBox>

      {/* BREADCRUMB */}
      <Box
        w="full"
        bg="white"
        py={2}
        px={{ base: 6, md: 20 }}
        boxShadow={isSticky ? "sm" : "none"}
        position={isSticky ? "sticky" : "relative"}
        top={0}
        zIndex={20}
        transition="all 0.3s ease"
      >
        <Flex align="center" gap={2} flexWrap="wrap">
          <ChakraLink
            as={NextLink}
            href="/"
            fontFamily={"body"}
            fontSize="sm"
            color="gray.500"
            _hover={{ color: "gray.700" }}
          >
            HOME
          </ChakraLink>
          <Text fontSize="sm" color="gray.400">
            {">"}
          </Text>
          <ChakraLink
            as={NextLink}
            href="/portfolio"
            fontFamily={"body"}
            fontSize="sm"
            color="gray.500"
            _hover={{ color: "gray.700" }}
          >
            PORTFOLIO
          </ChakraLink>
          <Text fontSize="sm" color="gray.400">
            {">"}
          </Text>
          <Text
            fontFamily={"body"}
            fontSize="sm"
            color="gray.700"
            fontWeight="medium"
          >
            {service}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}
