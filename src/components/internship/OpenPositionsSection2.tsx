//localhost:3005/cvinternship- application intern form

http: "use client";

import { Box, Heading, Text, Stack } from "@chakra-ui/react";
import Link from "next/link";

export default function OpenPositionsSection2() {
  type Job = {
    id: number;
    position: string;
    location: string;
    department: string;
    requirements: string[];
    scope: string[];
  };

  const jobs: Job[] = [];
  const isEmpty = jobs.length === 0;

  return (
    <Box w="full" py={{ base: 16, md: 24 }} px={{ base: 4, md: 16 }} bg="white">
      <Box maxW="1200px" mx="auto">
        {/* HEADER */}
        <Heading fontSize={{ base: "2xl", md: "3xl" }} mb={2}>
          Internship Opportunities
        </Heading>

        <Box w="60px" h="2px" bg="green.700" mb={10} />

        {/* ================= EMPTY STATE ================= */}
        {isEmpty ? (
          <Box
            textAlign="center"
            py={20}
            border="1px dashed"
            borderColor="gray.300"
            borderRadius="md"
          >
            <Text fontSize="lg" fontWeight="semibold" mb={2}>
              No Internship Positions Available
            </Text>

            <Text color="gray.600">
              We currently do not have any internship openings. Please check
              back later for future opportunities.
            </Text>
          </Box>
        ) : (
          /* ================= JOB LIST (future use) ================= */
          <Stack gap={0}>{/* Job cards will go here when available */}</Stack>
        )}
      </Box>
    </Box>
  );
}
