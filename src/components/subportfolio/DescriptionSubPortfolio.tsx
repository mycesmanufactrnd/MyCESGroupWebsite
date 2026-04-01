"use client";

import { Box, Grid, Stack, Text, Container } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function DescriptionSubPortfolio() {
  // Example project data
  const project = {
    details: {
      client: "MYCES Group",
      location: "Kuala Lumpur",
      description: "Renovation and maintenance of industrial facilities.",
      category: "Facility Management",
    },
    images: [
      "/portfolio/p1.jpg", // <-- first image
      "/portfolio/p1.jpg",
      "/portfolio/p1.jpg",
    ],
  };

  return (
    <Container maxW="container.xl" py={12}>
      <Grid
        templateColumns={{ base: "1fr", md: "70% 30%" }}
        gap={{ base: 8, md: 12 }}
      >
        {/* LEFT: IMAGE GALLERY */}
        <Stack gap={4}>
          {project.images.map((src, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Box
                w="full"
                h={{ base: "180px", md: "450px" }} // fixed smaller height
                bgImage={`url(${src})`}
                bgSize="cover"
                bgPos="center"
                borderRadius="md"
                shadow="md"
              />
            </MotionBox>
          ))}
        </Stack>

        {/* RIGHT: STICKY SIDEBAR */}
        <Box position={{ md: "sticky" }} top={{ md: 20 }}>
          <Text fontWeight="bold" fontSize="lg" mb={4}>
            Description:
          </Text>

          <Box mb={3}>
            <Text fontSize="sm" fontWeight="bold" color="gray.500">
              CLIENT
            </Text>
            <Text color="gray.800">{project.details.client}</Text>
          </Box>

          <Box mb={3}>
            <Text fontSize="sm" fontWeight="bold" color="gray.500">
              LOCATION
            </Text>
            <Text color="gray.800">{project.details.location}</Text>
          </Box>

          <Box mb={3}>
            <Text fontSize="sm" fontWeight="bold" color="gray.500">
              DESCRIPTION
            </Text>
            <Text color="gray.800">{project.details.description}</Text>
          </Box>

          <Box mb={3}>
            <Text fontSize="sm" fontWeight="bold" color="gray.500">
              CATEGORY
            </Text>
            <Text color="gray.800">{project.details.category}</Text>
          </Box>
        </Box>
      </Grid>
    </Container>
  );
}
