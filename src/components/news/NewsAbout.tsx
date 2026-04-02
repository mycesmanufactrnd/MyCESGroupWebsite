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
  chakra,
} from "@chakra-ui/react";
import Link from "next/link";
import { motion, Variants, easeInOut } from "framer-motion";
import { FiArrowRight, FiCalendar, FiBookmark } from "react-icons/fi";
import { useState } from "react";
import NextImage from "next/image";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const Time = chakra("time");

const newsData = [
  {
    title: "Taking MyCES Global",
    image: "/news/1.png",
    description:
      "Expanding into the Middle East through strategic collaboration in energy monitoring and technical due diligence",
    link: "/news/global-2026",
    date: "March 15, 2026",
    category: "Global Expansion",
    featured: true,
  },
  {
    title: "Shaping MyCES Together",
    image: "/news/2.png",
    description:
      "AGM 2026: Reviewing achievements and planning new initiatives for growth",
    link: "/news/agm-2026",
    date: "March 10, 2026",
    category: "Events",
    featured: false,
  },
  {
    title: "Driving Digital Healthcare",
    image: "/news/3.png",
    description:
      "Partnering with MSQH to advance healthcare accreditation with AI-powered tools",
    link: "/news/msqh-collaboration",
    date: "March 5, 2026",
    category: "Partnership",
    featured: false,
  },
];

// Animation variants for better performance
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

  const bgColor = "white";
  const textColor = "gray.600";
  const titleColor = "gray.800";
  const cardShadow = "lg";

  const handleImageLoad = (title: string) => {
    setImageLoaded((prev) => ({ ...prev, [title]: true }));
  };

  const toggleBookmark = (title: string) => {
    setBookmarked((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const animationProps = {};

  return (
    <Box
      py={{ base: 12, md: 20 }}
      px={{ base: 4, md: 6 }}
      bg={bgColor}
      position="relative"
      overflow="hidden"
      role="main"
      aria-label="News and announcements section"
    >
      {/* Background Decoration - Optimized with will-change */}
      <Box
        position="absolute"
        top="-20%"
        right="-10%"
        w="500px"
        h="500px"
        bg="green.50"
        borderRadius="full"
        filter="blur(100px)"
        opacity={0.3}
        zIndex={0}
        pointerEvents="none"
        willChange="transform"
      />

      <Container maxW="1200px" position="relative" zIndex={1}>
        {/* Header Section with improved semantics */}
        <MotionBox
          as="header"
          textAlign="center"
          mb={16}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge
            colorScheme="green"
            fontSize="sm"
            px={4}
            py={2}
            borderRadius="full"
            mb={4}
            display="inline-block"
            role="status"
            aria-label="Latest updates badge"
          >
            Latest Updates
          </Badge>
          <Heading
            as="h1"
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="bold"
            mb={4}
            bgGradient="linear(to-r, green.600, blue.600)"
            bgClip="text"
            letterSpacing="tight"
          >
            News & Announcements
          </Heading>
          <Text
            fontSize="lg"
            color={textColor}
            maxW="600px"
            mx="auto"
            lineHeight="tall"
          >
            Stay updated with our latest news, events, and company milestones
          </Text>
        </MotionBox>

        {/* News Grid with optimized animations */}
        <MotionFlex
          as="section"
          direction="column"
          gap={16}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          {...animationProps}
        >
          {newsData.map((news, index) => (
            <MotionFlex
              key={news.title}
              direction={{
                base: "column",
                lg: index === 0 ? "row" : "row-reverse",
              }}
              gap={12}
              align="center"
              variants={itemVariants}
              transition={{ duration: 0.2 }}
              role="article"
              aria-label={`News article: ${news.title}`}
            >
              {/* Image Section with Next.js Image optimization */}
              <Box
                flex="1"
                position="relative"
                borderRadius="2xl"
                boxShadow={cardShadow}
                bg="gray.50"
                overflow="hidden"
              >
                <AspectRatio ratio={16 / 9}>
                  <Box position="relative">
                    {!imageLoaded[news.title] && (
                      <Skeleton
                        position="absolute"
                        top={0}
                        left={0}
                        w="100%"
                        h="100%"
                        borderRadius="2xl"
                        bg="gray.200"
                      />
                    )}
                    <Box
                      position="relative"
                      width="100%"
                      height="0"
                      pb="56.25%"
                    >
                      <NextImage
                        src={news.image}
                        alt={news.title}
                        fill
                        style={{ objectFit: "cover" }}
                        onLoad={() => handleImageLoad(news.title)}
                        priority={index === 0}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </Box>
                    <Box
                      position="absolute"
                      top={0}
                      left={0}
                      right={0}
                      bottom={0}
                      _groupHover={{ bg: "blackAlpha.300" }}
                      transition="all 0.3s ease"
                    />
                  </Box>
                </AspectRatio>

                <Badge
                  position="absolute"
                  top={4}
                  left={4}
                  colorScheme="green"
                  fontSize="xs"
                  px={3}
                  py={1}
                  borderRadius="full"
                  textTransform="uppercase"
                  letterSpacing="wider"
                  zIndex={1}
                >
                  {news.category}
                </Badge>

                {news.featured && (
                  <Badge
                    position="absolute"
                    top={4}
                    right={4}
                    colorScheme="orange"
                    fontSize="xs"
                    px={3}
                    py={1}
                    borderRadius="full"
                    textTransform="uppercase"
                    letterSpacing="wider"
                    zIndex={1}
                  >
                    Featured
                  </Badge>
                )}
              </Box>

              {/* Content Section with improved typography */}
              <Box flex="1">
                <Flex
                  align="center"
                  gap={4}
                  mb={3}
                  color="gray.500"
                  fontSize="sm"
                >
                  <Flex align="center" gap={1}>
                    <Icon as={FiCalendar} boxSize={4} />
                    <time dateTime={news.date as string}>{news.date}</time>
                  </Flex>
                </Flex>

                <Heading
                  as="h2"
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="bold"
                  mb={4}
                  color={titleColor}
                  lineHeight="1.3"
                  letterSpacing="tight"
                >
                  {news.title}
                </Heading>

                <Text fontSize="md" mb={6} color={textColor} lineHeight="1.6">
                  {news.description}
                </Text>

                <Flex gap={3} align="center">
                  <Link href={news.link} passHref legacyBehavior>
                    <Button
                      as="a"
                      size="md"
                      variant="outline"
                      colorScheme="green"
                      _hover={{
                        bg: "green.50",
                        transform: "translateX(4px)",
                        transition: "all 0.2s ease",
                      }}
                      aria-label={`Read full article about ${news.title}`}
                      display="inline-flex"
                      alignItems="center"
                      gap={2}
                    >
                      Read Full Article <FiArrowRight />
                    </Button>
                  </Link>

                  <Button
                    size="md"
                    variant="ghost"
                    colorScheme="gray"
                    onClick={() => toggleBookmark(news.title)}
                    aria-label={
                      bookmarked[news.title]
                        ? "Remove bookmark"
                        : "Bookmark article"
                    }
                    _hover={{ bg: "gray.100" }}
                    display="inline-flex"
                    alignItems="center"
                    gap={2} // spacing between icon & text
                  >
                    <FiBookmark />
                    {bookmarked[news.title] ? "Saved" : "Save"}
                  </Button>
                </Flex>
              </Box>
            </MotionFlex>
          ))}
        </MotionFlex>

        {/* Enhanced CTA Section with better accessibility */}
        <Box
          as="section"
          mt={20}
          p={{ base: 8, md: 12 }}
          bgGradient="linear(to-r, green.600, green.700)"
          borderRadius="2xl"
          textAlign="center"
          color="white"
          role="complementary"
          aria-label="Newsletter subscription"
        >
          <Heading as="h2" fontSize={{ base: "xl", md: "2xl" }} mb={4}>
            Want to stay updated?
          </Heading>
          <Text mb={6} opacity={0.9} maxW="500px" mx="auto">
            Subscribe to our newsletter for the latest news, insights, and
            exclusive content
          </Text>
          <Flex
            gap={3}
            justify="center"
            direction={{ base: "column", sm: "row" }}
            maxW="500px"
            mx="auto"
          >
            {/* You can add subscription form fields here */}
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}
