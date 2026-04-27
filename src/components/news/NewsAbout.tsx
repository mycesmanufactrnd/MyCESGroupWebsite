"use client";

import {
  Box,
  Text,
  Flex,
  Button,
  Heading,
  Badge,
  Container,
  Icon,
  AspectRatio,
  Skeleton,
  Input,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { motion, Variants, easeInOut } from "framer-motion";
import { FiArrowRight, FiCalendar, FiBookmark } from "react-icons/fi";
import { useState } from "react";
import NextImage from "next/image";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const companyGreen = "#0B5D3B";
const newsData = [
  {
    title: "Taking MyCES Global",
    image: "/news/4.png",
    description:
      "Expanding into the Middle East through strategic collaboration in energy monitoring and technical due diligence",
    link: "https://www.facebook.com/share/p/1CXnxEUzMs/",
    date: "2026-01-30",
    displayDate: "January 30, 2026",
    category: "Global Expansion",
    featured: true,
  },
  {
    title: "Shaping MyCES Together",
    image: "/news/2.png",
    description:
      "AGM 2026: Reviewing achievements and planning new initiatives for growth",
    link: "https://www.facebook.com/share/p/17a3wad8QA/",
    date: "2026-02-9",
    displayDate: "February 9, 2026",
    category: "Events",
    featured: false,
  },
  {
    title: "Driving Digital Healthcare",
    image: "/news/31.png",
    description:
      "Partnering with MSQH to advance healthcare accreditation with AI-powered tools",
    link: "https://www.facebook.com/share/p/1AyQV6vM7i/ ",
    date: "2025-12-31",
    displayDate: "December 31, 2025",
    category: "Partnership",
    featured: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeInOut },
  },
};

export default function NewsAbout() {
  const [imageLoaded, setImageLoaded] = useState<Record<string, boolean>>({});
  const [bookmarked, setBookmarked] = useState<Record<string, boolean>>({});

  const handleImageLoad = (title: string) => {
    setImageLoaded((prev) => ({ ...prev, [title]: true }));
  };

  const toggleBookmark = (title: string) => {
    setBookmarked((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <Box py={{ base: 12, md: 20 }} px={{ base: 4, md: 6 }} bg="white">
      <Container maxW="1200px">
        {/* HEADER */}
        <MotionBox
          textAlign="center"
          mb={16}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Badge colorScheme="green" px={4} py={2} borderRadius="full" mb={4}>
            Latest Updates
          </Badge>

          <Heading
            fontSize={{ base: "3xl", md: "4xl" }}
            bgGradient="linear(to-r, green.600, blue.600)"
            bgClip="text"
            color={companyGreen}
          >
            News & Announcements
          </Heading>

          <Text mt={4} color="gray.600">
            Stay updated with our latest news and milestones
          </Text>
        </MotionBox>

        {/* NEWS */}
        <MotionFlex
          direction="column"
          gap={16}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {newsData.map((news, index) => (
            <MotionFlex
              key={news.title}
              direction={{
                base: "column",
                lg: index % 2 === 0 ? "row" : "row-reverse",
              }}
              gap={12}
              align="center"
              variants={itemVariants}
            >
              {/* IMAGE */}
              <Box
                flex="1"
                borderRadius="2xl"
                overflow="hidden"
                role="group"
                boxShadow="xl"
                transition="all 0.3s ease"
                position="relative"
                _hover={{
                  boxShadow: "2xl",
                  transform: "translateY(-4px)",
                }}
              >
                <AspectRatio ratio={16 / 9}>
                  <Box position="relative">
                    {!imageLoaded[news.title] && <Skeleton h="100%" />}

                    <Box
                      position="relative"
                      w="100%"
                      h="0"
                      pb="56.25%"
                      _groupHover={{
                        "& img": {
                          transform: "scale(1.05)",
                        },
                      }}
                    >
                      <NextImage
                        src={news.image}
                        alt={news.title}
                        fill
                        loading={index === 0 ? "eager" : "lazy"}
                        style={{
                          objectFit: "cover",
                          transition: "transform 0.4s ease",
                        }}
                        onLoad={() => handleImageLoad(news.title)}
                      />
                    </Box>
                  </Box>
                </AspectRatio>

                {/* Category Badge - Only on picture */}
                <Badge
                  position="absolute"
                  bottom={4}
                  left={4}
                  colorScheme="green"
                  zIndex={2}
                >
                  {news.category}
                </Badge>
              </Box>

              {/* CONTENT */}
              <Box flex="1">
                <Flex align="center" gap={2} color="gray.500" fontSize="sm">
                  <Icon as={FiCalendar} />
                  <time dateTime={news.date}>{news.displayDate}</time>
                </Flex>

                <Heading mt={3} mb={4}>
                  {news.title}
                </Heading>

                <Text color="gray.600" mb={6}>
                  {news.description}
                </Text>

                <Flex gap={3}>
                  <ChakraLink
                    href={news.link}
                    target="_blank"
                    _hover={{ textDecoration: "none" }}
                  >
                    <Button
                      variant="outline"
                      colorScheme="green"
                      display="inline-flex"
                      alignItems="center"
                      gap={2}
                      _hover={{ transform: "translateX(4px)" }}
                    >
                      Read More <FiArrowRight />
                    </Button>
                  </ChakraLink>
                </Flex>
              </Box>
            </MotionFlex>
          ))}
        </MotionFlex>
      </Container>
    </Box>
  );
}
