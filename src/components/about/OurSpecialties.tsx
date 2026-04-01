"use client";

import { Box, Heading, VStack, Text } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const MotionBox = motion(Box);

export default function OurSpecialties() {
  const items = [
    {
      title: "Expert Support Team",
      content:
        "Our dedicated team is always available to provide expert guidance and ensure seamless operations.",
    },
    {
      title: "User-Friendly Interface",
      content:
        "The intuitive design ensures that all features are easily accessible and simple to use, making facility management straightforward for everyone.",
    },
    {
      title: "Efficient Workflow",
      content:
        "Streamlined processes reduce complexity and save time, allowing teams to focus on core tasks efficiently.",
    },
    {
      title: "Integrated Engineering Excellence",
      content:
        "We deliver seamless facility operations by combining deep technical expertise in electrical engineering with advanced building automation and system integration. ",
    },
    {
      title: "Sustainable Innovation",
      content:
        "Our commitment to a 'Greener' future drives us to implement smart energy monitoring and optimized control strategies that reduce environmental impact while lowering operational costs.",
    },
  ];

  // Rest of your component logic...

  const [expandedIndex, setExpandedIndex] = useState<number | null>(1);

  const toggleItem = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Box px={{ base: 2, md: 6 }} py={20} bg="gray.100">
      <Heading
        textAlign="center"
        mb={20}
        color="#163F2D"
        fontWeight="bold"
        fontSize={{ base: "3xl", md: "3xl" }}
      >
        Our Specialties
      </Heading>

      <VStack spacing={6} w="100%">
        {items.map((item, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <MotionBox
              key={index}
              w="100%"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              layout // <-- smooth height animation
            >
              {/** Header */}
              <MotionBox
                as="button"
                w="100%"
                maxW="95%"
                mx="auto"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                bg="gray.200"
                _hover={{ bg: "gray.300" }}
                px={6}
                py={5}
                borderRadius="xl"
                onClick={() => toggleItem(index)}
                whileHover={{ scale: 1.02 }} // subtle hover effect
                whileTap={{ scale: 0.98 }}
                transition={{ type: "tween", duration: 0.2 }}
              >
                <Text fontWeight="semibold">{item.title}</Text>
                <MotionBox
                  as="span"
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  ▼
                </MotionBox>
              </MotionBox>

              {/** Animated content */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <MotionBox
                    maxW="95%"
                    mx="auto"
                    px={6}
                    py={4}
                    mt={2}
                    bg="white"
                    border="1px solid #E2E8F0"
                    borderRadius="md"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    layout // smooth height change
                  >
                    {item.content}
                  </MotionBox>
                )}
              </AnimatePresence>
            </MotionBox>
          );
        })}
      </VStack>
    </Box>
  );
}
