"use client";

import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  chakra,
  Container,
  Icon,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiEye, FiTarget, FiStar, FiFlag } from "react-icons/fi";
import Link from "next/link";

const UL = chakra("ul");
const LI = chakra("li");
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const Divider = chakra("div");

export default function VisionMissionPage() {
  const sections = [
    {
      title: "Vision",
      icon: FiEye,
      description: "Our forward-looking statement that guides our direction",
      content: [
        "To be the leading training and education provider in Malaysia, revolutionizing STEM learning through practical, experiential programs.",
      ],
      gradient: "linear(135deg, #0B5D3B, #1A8F5A)",
    },
    {
      title: "Mission",
      icon: FiTarget,
      description: "What we do every day to achieve our vision",
      content: [
        "Empower people with hands-on, industry-relevant engineering education, bridging classroom learning and real-world application.",
      ],
      gradient: "linear(135deg, #0B5D3B, #219A6B)",
    },
    {
      title: "Core Values",
      icon: FiStar,
      description: "The principles that define our culture",
      content: [
        "Innovative: Promote creativity and critical thinking",
        "Integrity: Uphold honesty, transparency, and ethics",
        "Excellence: Deliver high-quality education exceeding expectations",
      ],
      gradient: "linear(135deg, #0B5D3B, #28B47A)",
    },
    {
      title: "Goals",
      icon: FiFlag,
      description: "Our measurable targets for success",
      content: [
        "Deliver industry-aligned, hands-on engineering training that equips students for future professional success.",
        "Bridge academic learning and practical application through experiential STEM programs.",
        "Cultivate a culture of creativity, innovation, and critical thinking among learners",
      ],
      gradient: "linear(135deg, #0B5D3B, #33D28C)",
    },
  ];

  const companyGreen = "#0B5D3B";

  // Animation variants for container
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

  // Animation variants for each item - formal fade in
  const itemVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <Box
      minH="100vh"
      bgGradient="linear(to-br, gray.50, white)"
      py={{ base: 12, md: 24 }}
      position="relative"
      overflow="hidden"
    >
      {/* Animated Background Elements */}
      <Box
        position="absolute"
        top="-20%"
        right="-10%"
        w="500px"
        h="500px"
        borderRadius="full"
        bg="green.400"
        opacity="0.1"
        filter="blur(100px)"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="-20%"
        left="-10%"
        w="500px"
        h="500px"
        borderRadius="full"
        bg="green"
        opacity="0.1"
        filter="blur(100px)"
        pointerEvents="none"
      />

      <Container maxW="container.xl">
        {/* Header Section */}
        <VStack gap={4} mb={16} textAlign="center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <chakra.span
              fontSize="sm"
              fontWeight="semibold"
              letterSpacing="widest"
              color={companyGreen}
              textTransform="uppercase"
            >
              MyCES Academy
            </chakra.span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Heading
              as="h1"
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              bgGradient={`linear(to-r, ${companyGreen}, green)`}
              bgClip="text"
              color={companyGreen}
            >
              Company Strategy
            </Heading>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.700"
              maxW="2xl"
              mx="auto"
              fontWeight="medium"
            >
              Our roadmap to sustainable excellence and industry leadership in
              Biomedical Engineering
            </Text>
          </motion.div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Divider
              w="100px"
              h="3px"
              bgGradient={`linear(to-r, ${companyGreen}, green)`}
              borderRadius="full"
            />
          </motion.div>
        </VStack>

        {/* Main Grid Cards */}
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
          {sections.map((section, index) => {
            const IconComponent = section.icon;

            return (
              <MotionBox
                key={section.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                p={{ base: 6, md: 8 }}
                borderRadius="2xl"
                bg="white"
                backdropFilter="blur(10px)"
                border="1px solid"
                borderColor="rgba(11, 93, 59, 0.2)"
                boxShadow="lg"
                position="relative"
                overflow="hidden"
                _hover={{
                  borderColor: companyGreen,
                  boxShadow: "2xl",
                }}
              >
                {/* Gradient Accent Bar */}
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  h="4px"
                  bgGradient={section.gradient}
                />

                <Flex align="flex-start" gap={5}>
                  {/* Icon Circle */}
                  <MotionBox
                    position="relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.1 }}
                    _before={{
                      content: '""',
                      position: "absolute",
                      top: "-2px",
                      left: "-2px",
                      right: "-2px",
                      bottom: "-2px",
                      borderRadius: "xl",
                      bgGradient: section.gradient,
                      opacity: 0.5,
                      filter: "blur(4px)",
                    }}
                  >
                    <Box
                      w="14"
                      h="14"
                      borderRadius="xl"
                      bg={companyGreen}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      position="relative"
                      zIndex={1}
                    >
                      <Icon as={IconComponent} boxSize={7} color="white" />
                    </Box>
                  </MotionBox>

                  <Box flex={1}>
                    <VStack align="stretch" gap={2}>
                      <MotionBox
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.1 + 0.15,
                        }}
                      >
                        <Heading
                          fontSize={{ base: "xl", md: "2xl" }}
                          color="gray.800"
                        >
                          {section.title}
                        </Heading>
                      </MotionBox>

                      <MotionBox
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                      >
                        <Text
                          fontSize="sm"
                          color="gray.600"
                          fontWeight="medium"
                        >
                          {section.description}
                        </Text>
                      </MotionBox>

                      {/* All content rendered as bullet points */}
                      <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                      >
                        <UL mt={3} pl={5} listStyleType="disc">
                          {section.content.map((item, idx) => (
                            <MotionBox
                              key={idx}
                              variants={itemVariants}
                              as={LI}
                              mb={2}
                            >
                              <Text
                                fontSize={{ base: "sm", md: "md" }}
                                color="gray.700"
                                lineHeight="tall"
                                fontWeight="medium"
                              >
                                {item}
                              </Text>
                            </MotionBox>
                          ))}
                        </UL>
                      </motion.div>
                    </VStack>
                  </Box>
                </Flex>
              </MotionBox>
            );
          })}
        </SimpleGrid>
      </Container>
      <Flex justify="flex-end" mt={10} mr="5%">
        <Link href="/businessAcademy/academy" passHref>
          <Button
            bg="white"
            color={companyGreen}
            border="1px solid"
            borderColor={companyGreen}
            px={6}
            py={5}
            fontSize="sm"
            fontWeight="medium"
            borderRadius="md"
            _hover={{
              bg: companyGreen,
              color: "white",
            }}
            _active={{
              transform: "scale(0.98)",
            }}
            transition="all 0.2s ease"
          >
            See More →
          </Button>
        </Link>
      </Flex>
    </Box>
  );
}
