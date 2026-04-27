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
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiEye, FiTarget, FiStar, FiFlag } from "react-icons/fi";

const MotionBox = motion(Box);
const Divider = chakra("div");

export default function VisionMissionPage() {
  const sections = [
    {
      title: "Vision",
      icon: FiEye,
      description: "Our forward-looking statement that guides our direction",
      content:
        "To be a leader in energy audit services by providing enhanced services, relationships, and profitability, exceeding customer expectations.",
      gradient: "linear(135deg, #0B5D3B, #1A8F5A)",
    },
    {
      title: "Mission",
      icon: FiTarget,
      description: "What we do every day to achieve our vision",
      content:
        "Build long-term relationships with customers and clients, delivering exceptional service through innovation and advanced technology.",
      gradient: "linear(135deg, #0B5D3B, #219A6B)",
    },
    {
      title: "Core Values",
      icon: FiStar,
      description: "The principles that define our culture",
      content: [
        "Respect and faith in customer relationships",
        "Growth through creativity and innovation",
        "Honesty, integrity, and business ethics in all operations",
      ],
      gradient: "linear(135deg, #0B5D3B, #28B47A)",
    },
    {
      title: "Goals",
      icon: FiFlag,
      description: "Our measurable targets for success",
      content: [
        "Support national efforts to reduce CO2 emissions per GDP",
        "Build a strong reputation in energy services and become a key industry player",
      ],
      gradient: "linear(135deg, #0B5D3B, #33D28C)",
    },
  ];

  const companyGreen = "#0B5D3B";

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
        bg="teal.400"
        opacity="0.1"
        filter="blur(100px)"
        pointerEvents="none"
      />

      <Container maxW="container.xl">
        {/* Header Section */}
        <VStack gap={4} mb={16} textAlign="center">
          <chakra.span
            fontSize="sm"
            fontWeight="semibold"
            letterSpacing="widest"
            color={companyGreen}
            textTransform="uppercase"
          >
            Our Strategic Framework
          </chakra.span>

          <Heading
            as="h1"
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="extrabold"
            letterSpacing="tight"
            bgGradient={`linear(to-r, ${companyGreen}, teal.400)`}
            bgClip="text"
            color={companyGreen}
          >
            Company Strategy
          </Heading>

          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.700"
            maxW="2xl"
            mx="auto"
            fontWeight="medium"
          >
            Our roadmap to sustainable excellence and industry leadership
          </Text>

          <Divider
            w="100px"
            h="3px"
            bgGradient={`linear(to-r, ${companyGreen}, teal.400)`}
            borderRadius="full"
          />
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
                  <Box
                    position="relative"
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
                  </Box>

                  <Box flex={1}>
                    <VStack align="stretch" gap={2}>
                      <Heading
                        fontSize={{ base: "xl", md: "2xl" }}
                        color="gray.800"
                      >
                        {section.title}
                      </Heading>
                      <Text fontSize="sm" color="gray.600" fontWeight="medium">
                        {section.description}
                      </Text>

                      {Array.isArray(section.content) ? (
                        <VStack align="start" gap={2} mt={3}>
                          {section.content.map((item, idx) => (
                            <Flex key={idx} gap={2} align="center">
                              <Box
                                w="1.5"
                                h="1.5"
                                borderRadius="full"
                                bgGradient={section.gradient}
                              />
                              <Text
                                fontSize={{ base: "sm", md: "md" }}
                                color="gray.700"
                                lineHeight="tall"
                                fontWeight="medium"
                              >
                                {item}
                              </Text>
                            </Flex>
                          ))}
                        </VStack>
                      ) : (
                        <Text
                          fontSize={{ base: "sm", md: "md" }}
                          color="gray.700"
                          lineHeight="tall"
                          mt={3}
                          fontWeight="medium"
                        >
                          {section.content}
                        </Text>
                      )}
                    </VStack>
                  </Box>
                </Flex>
              </MotionBox>
            );
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
