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
import { FiEye, FiTarget, FiStar } from "react-icons/fi";
import Link from "next/link";

const UL = chakra("ul");
const LI = chakra("li");

const MotionBox = motion(Box);
const Divider = chakra("div");

export default function VisionMissionPage() {
  const sections = [
    {
      title: "Vision",
      icon: FiEye,
      description: "Our aspiration",
      content:
        "To be a premier engineering solutions provider for innovative, sustainable, and reliable solutions that empower industries.",
      isList: false,
      gradient: "linear(135deg, #0B5D3B, #1A8F5A)",
    },
    {
      title: "Mission",
      icon: FiTarget,
      description: "What drives us every day",
      content: [
        "Deliver cutting-edge engineering services combining technical expertise, innovation, and sustainability.",
      ],
      isList: false,
      gradient: "linear(135deg, #0B5D3B, #219A6B)",
    },
    {
      title: "Core Values",
      icon: FiStar,
      description: "The principles that define our culture",
      content: [
        "Continuously seek creative and forward-thinking engineering solutions.",
        "Uphold honesty, transparency, and ethical practices in every project.",
        "Deliver high-quality, reliable, and sustainable engineering solutions.",
      ],
      isList: true,
      gradient: "linear(135deg, #0B5D3B, #28B47A)",
    },
    {
      title: "Goals",
      icon: FiStar,
      description: "The principles that define our culture",
      content: [
        "Develop engineering solutions that improve operational efficiency, safety, and sustainability.",
        "Address complex engineering challenges using advanced technology and innovative approaches.",
        "Enhance professional expertise through continuous training, certifications, and knowledge sharing.",
      ],
      isList: true,
      gradient: "linear(135deg, #0B5D3B, #28B47A)",
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
      {/* Background Glow */}
      <Box
        position="absolute"
        top="-20%"
        right="-10%"
        w="400px"
        h="400px"
        borderRadius="full"
        bg="green.400"
        opacity="0.1"
        filter="blur(100px)"
      />
      <Box
        position="absolute"
        bottom="-20%"
        left="-10%"
        w="400px"
        h="400px"
        borderRadius="full"
        bg="green.300"
        opacity="0.1"
        filter="blur(100px)"
      />

      <Container maxW="container.xl">
        {/* HEADER */}
        <VStack gap={4} mb={16} textAlign="center">
          <Text
            fontSize="sm"
            fontWeight="semibold"
            letterSpacing="widest"
            color={companyGreen}
            textTransform="uppercase"
          >
            MyCES Engineering
          </Text>

          <Heading
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="extrabold"
            color={companyGreen}
          >
            Company Strategy
          </Heading>

          <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" maxW="2xl">
            Driving innovation and excellence through education, engineering,
            and real-world impact.
          </Text>

          <Divider w="100px" h="3px" bg={companyGreen} borderRadius="full" />
        </VStack>

        {/* GRID */}
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
          {sections.map((section, index) => {
            const IconComponent = section.icon;

            return (
              <MotionBox
                key={section.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                p={{ base: 6, md: 8 }}
                borderRadius="2xl"
                bg="white"
                border="1px solid"
                borderColor="gray.200"
                boxShadow="md"
                _hover={{
                  borderColor: companyGreen,
                  boxShadow: "lg",
                }}
                position="relative"
              >
                {/* Top Accent */}
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  h="4px"
                  bgGradient={section.gradient}
                  borderTopRadius="2xl"
                />

                <Flex align="flex-start" gap={4}>
                  {/* ICON */}
                  <Box
                    w="12"
                    h="12"
                    borderRadius="xl"
                    bg={companyGreen}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Icon as={IconComponent} boxSize={6} color="white" />
                  </Box>

                  <Box flex={1}>
                    <Heading
                      fontSize={{ base: "lg", md: "xl" }}
                      color="gray.800"
                      mb={1}
                    >
                      {section.title}
                    </Heading>

                    <Text fontSize="sm" color="gray.500" mb={3}>
                      {section.description}
                    </Text>

                    {/* CONTENT */}
                    {section.isList ? (
                      <UL mt={2} pl={5} listStyleType="disc">
                        {(section.content as string[]).map((item, idx) => (
                          <LI key={idx} mb={2}>
                            <Text
                              fontSize={{ base: "sm", md: "md" }}
                              color="gray.700"
                              lineHeight="tall"
                            >
                              {item}
                            </Text>
                          </LI>
                        ))}
                      </UL>
                    ) : (
                      <Text
                        fontSize={{ base: "sm", md: "md" }}
                        color="gray.700"
                        lineHeight="tall"
                      >
                        {section.content}
                      </Text>
                    )}
                  </Box>
                </Flex>
              </MotionBox>
            );
          })}
        </SimpleGrid>
      </Container>
      <Flex justify="flex-end" mt={10} mr="5%">
        <Link href="/businessEng/eng" passHref>
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
