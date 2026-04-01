"use client";

import {
  Box,
  Text,
  Flex,
  Button,
  Heading,
  Badge,
  Stack,
  Container,
  Icon,
  AspectRatio,
  Skeleton,
} from "@chakra-ui/react";
// import { useColorModeValue } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import {
  FiArrowRight,
  FiCalendar,
  FiBookOpen,
  FiShare2,
  FiBookmark,
} from "react-icons/fi";
import { useState } from "react";
import NextImage from "next/image";
import { supabaseStorageClient } from "@/src/supabase";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

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

const itemVariants = {
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
  //   const prefersReducedMotion = usePrefersReducedMotion();

  const bgColor = "white";
  const textColor = "gray.600";
  const titleColor = "gray.800";
  const borderColor = "gray.100";
  const cardShadow = "lg";

  const handleImageLoad = (title: string) => {
    setImageLoaded((prev) => ({ ...prev, [title]: true }));
  };

  const toggleBookmark = (title: string) => {
    setBookmarked((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  // Respect user's motion preferences
  //   const animationProps = prefersReducedMotion
  //     ? { initial: false, animate: true, whileInView: undefined, viewport: undefined }
  //     : {};

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
        <Box
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
        </Box>

        {/* News Grid with optimized animations */}
        <Flex
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
              //   whileHover={!prefersReducedMotion ? { y: -4 } : undefined}
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
                        startColor="gray.200"
                        endColor="gray.300"
                        borderRadius="2xl"
                      />
                    )}
                    {/* <Image
                      as={NextImage}
                      src={news.image}
                      alt={news.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{
                        objectFit: "cover",
                        transition: "transform 0.5s ease",
                      }}
                      onLoad={() => handleImageLoad(news.title)}
                      fallback={<Skeleton w="100%" h="100%" />}
                      priority={index === 0}
                    /> */}
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
                    <Text as="time" dateTime={news.date}>
                      {news.date}
                    </Text>
                  </Flex>
                  <Flex align="center" gap={1}>
                    <Icon as={FiBookOpen} boxSize={4} />
                    <Text>{news.readTime}</Text>
                  </Flex>
                </Flex>

                <Heading
                  as="h2"
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="bold"
                  mb={4}
                  color={titleColor}
                  lineHeight="1.3"
                  letterGap="tight"
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
                      rightIcon={<FiArrowRight />}
                      _hover={{
                        bg: "green.50",
                        transform: "translateX(4px)",
                        transition: "all 0.2s ease",
                      }}
                      transition="all 0.2s ease"
                      aria-label={`Read full article about ${news.title}`}
                    >
                      Read Full Article
                    </Button>
                  </Link>

                  <Button
                    size="md"
                    variant="ghost"
                    colorScheme="gray"
                    leftIcon={<FiBookmark />}
                    onClick={() => toggleBookmark(news.title)}
                    aria-label={
                      bookmarked[news.title]
                        ? "Remove bookmark"
                        : "Bookmark article"
                    }
                    _hover={{ bg: "gray.100" }}
                  >
                    {bookmarked[news.title] ? "Saved" : "Save"}
                  </Button>
                </Flex>
              </Box>
            </MotionFlex>
          ))}
        </Flex>

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
            {/* <Button
              bg="white"
              color="green.700"
              size="lg"
              px={8}
              _hover={{
                bg: "gray.100",
                transform: "scale(1.02)",
              }}
              _active={{ transform: "scale(0.98)" }}
              transition="all 0.2s ease"
              aria-label="Subscribe to newsletter"
            >
              Subscribe Now
            </Button>
            <Button
              variant="outline"
              borderColor="white"
              color="white"
              size="lg"
              _hover={{
                bg: "whiteAlpha.200",
                transform: "scale(1.02)",
              }}
              aria-label="View all news"
            >
              View All News
            </Button> */}
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}

// "use client";

// import {
//   Box,
//   Text,
//   Image,
//   Button,
//   Flex,
//   Container,
//   Badge,
//   Heading,
//   AspectRatio,
//   Skeleton,
//   Icon,
// } from "@chakra-ui/react";
// import { useColorModeValue } from "@chakra-ui/system";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//   FiArrowRight,
//   FiCalendar,
//   FiBookOpen,
//   FiBookmark,
// } from "react-icons/fi";
// import { useState, useEffect } from "react";
// import NextImage from "next/image";
// import { supabaseStorageClient } from "@/src/supabase";
// // import { supabase } from "@/src/supabase";

// const MotionFlex = motion(Flex);

// export default function NewsAbout() {
//   const [newsData, setNewsData] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [bookmarked, setBookmarked] = useState<Record<string, boolean>>({});

//   const bgColor = useColorModeValue("white", "gray.800");
//   const textColor = useColorModeValue("gray.600", "gray.300");
//   const titleColor = useColorModeValue("gray.800", "white");
//   const cardShadow = useColorModeValue("lg", "dark-lg");

//   const toggleBookmark = (title: string) => {
//     setBookmarked((prev) => ({ ...prev, [title]: !prev[title] }));
//   };

//   // Fetch news from Supabase
//   useEffect(() => {
//     async function fetchNews() {
//       setLoading(true);

//       const { data, error } = await supabaseStorageClient
//         .from("NewsDetail")
//         .select("*")
//         .order("id", { ascending: true });

//       if (error) {
//         console.error("Error fetching news:", error);
//       } else if (data) {
//         const formattedData = data.map((item) => ({
//           title: item.title,
//           image: item.image,
//           description: item.description,
//           link: item.link,
//           date: item.date,
//           category: item.category,
//           featured: item.featured,
//         }));
//         setNewsData(formattedData);
//       }
//       setLoading(false);
//     }

//     fetchNews();
//   }, []);

//   if (loading) {
//     return (
//       <Box py={20} textAlign="center" color={textColor}>
//         Loading news...
//       </Box>
//     );
//   }

//   return (
//     <Box py={{ base: 12, md: 20 }} px={{ base: 4, md: 6 }} bg={bgColor}>
//       <Container maxW="1200px">
//         <Box textAlign="center" mb={16}>
//           <Badge
//             colorScheme="green"
//             fontSize="sm"
//             px={4}
//             py={2}
//             borderRadius="full"
//             mb={4}
//           >
//             Latest Updates
//           </Badge>
//           <Heading
//             as="h1"
//             fontSize={{ base: "3xl", md: "4xl" }}
//             fontWeight="bold"
//             mb={4}
//             bgGradient="linear(to-r, green.600, blue.600)"
//             bgClip="text"
//           >
//             News & Announcements
//           </Heading>
//           <Text
//             fontSize="lg"
//             color={textColor}
//             maxW="600px"
//             mx="auto"
//             lineHeight="tall"
//           >
//             Stay updated with our latest news, events, and company milestones
//           </Text>
//         </Box>

//         <Flex direction="column" gap={16}>
//           {newsData.map((news) => (
//             <MotionFlex
//               key={news.title}
//               direction={{
//                 base: "column",
//                 lg: news.featured ? "row" : "row-reverse",
//               }}
//               gap={12}
//               align="center"
//             >
//               {/* IMAGE */}
//               <Box
//                 flex="1"
//                 position="relative"
//                 borderRadius="2xl"
//                 boxShadow={cardShadow}
//                 overflow="hidden"
//               >
//                 <AspectRatio ratio={16 / 9}>
//                   <NextImage
//                     src={news.image}
//                     alt={news.title}
//                     fill
//                     style={{ objectFit: "cover" }}
//                   />
//                 </AspectRatio>
//                 <Badge
//                   position="absolute"
//                   top={4}
//                   left={4}
//                   colorScheme="green"
//                   fontSize="xs"
//                   px={3}
//                   py={1}
//                   borderRadius="full"
//                 >
//                   {news.category}
//                 </Badge>
//                 {news.featured && (
//                   <Badge
//                     position="absolute"
//                     top={4}
//                     right={4}
//                     colorScheme="orange"
//                     fontSize="xs"
//                     px={3}
//                     py={1}
//                     borderRadius="full"
//                   >
//                     Featured
//                   </Badge>
//                 )}
//               </Box>

//               {/* CONTENT */}
//               <Box flex="1">
//                 <Flex
//                   align="center"
//                   gap={4}
//                   mb={3}
//                   color="gray.500"
//                   fontSize="sm"
//                 >
//                   <Flex align="center" gap={1}>
//                     <Icon as={FiCalendar} boxSize={4} />
//                     <Text as="time" dateTime={news.date}>
//                       {news.date}
//                     </Text>
//                   </Flex>
//                 </Flex>

//                 <Heading
//                   as="h2"
//                   fontSize={{ base: "xl", md: "2xl" }}
//                   fontWeight="bold"
//                   mb={4}
//                   color={titleColor}
//                 >
//                   {news.title}
//                 </Heading>

//                 <Text fontSize="md" mb={6} color={textColor} lineHeight="1.6">
//                   {news.description}
//                 </Text>

//                 <Flex gap={3} align="center">
//                   <Link href={news.link} passHref legacyBehavior>
//                     <Button
//                       as="a"
//                       size="md"
//                       variant="outline"
//                       colorScheme="green"
//                       rightIcon={<FiArrowRight />}
//                       aria-label={`Read full article about ${news.title}`}
//                     >
//                       Read Article →
//                     </Button>
//                   </Link>

//                   <Button
//                     size="md"
//                     variant="ghost"
//                     colorScheme="gray"
//                     leftIcon={<FiBookmark />}
//                     onClick={() => toggleBookmark(news.title)}
//                     aria-label={
//                       bookmarked[news.title]
//                         ? "Remove bookmark"
//                         : "Bookmark article"
//                     }
//                   >
//                     {bookmarked[news.title] ? "Saved" : "Save"}
//                   </Button>
//                 </Flex>
//               </Box>
//             </MotionFlex>
//           ))}
//         </Flex>
//       </Container>
//     </Box>
//   );
// }
