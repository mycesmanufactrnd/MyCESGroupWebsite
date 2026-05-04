"use client";

import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Image,
  IconButton,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CloseIcon } from "@chakra-ui/icons";
import { teamMembers, TeamMember } from "./LinkTree/TeamMember";

const MotionBox = motion(Box);

export default function MeetTheTeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <Box
      w="full"
      py={{ base: 20, md: 28 }}
      px={{ base: 6, md: 20 }}
      bgImage="url('/backgrounds/bg5.jpg')"
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
      bgAttachment="fixed"
      position="relative"
    >
      {/* Overlay */}
      <Box
        position="absolute"
        inset={0}
        bg="rgba(255,255,255,0.8)"
        zIndex={0}
      />

      <Box maxW="1400px" mx="auto" position="relative" zIndex={1}>
        {/* SECTION HEADER */}
        <MotionBox
          textAlign="center"
          mb={{ base: 14, md: 20 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <Heading
            fontFamily="{heading}"
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="bold"
          >
            Executive Leadership
          </Heading>
        </MotionBox>

        {/* TEAM GRID */}
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} gap={6}>
          {teamMembers.map((member, index) => (
            <Box key={`${member.name}-${index}`}>
              <MotionBox
                bg="white"
                border="1px solid"
                borderColor="gray.200"
                borderRadius="xl"
                p={6}
                h="100%"
                minH="440px"
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                textAlign="center"
                whileHover={{
                  y: -8,
                  boxShadow: "0px 25px 50px rgba(0,0,0,0.12)",
                  borderColor: "#CCD5C5",
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                onClick={() => setSelectedMember(member)}
                cursor="pointer"
              >
                {/* IMAGE */}
                <MotionBox
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  mb={6}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    mx="auto"
                    w="100%"
                    h="280px"
                    objectFit="cover"
                    borderRadius="30px"
                    bg="teal.100"
                  />
                </MotionBox>

                {/* TEXT */}
                <Box mt={2}>
                  <Text
                    fontFamily="{heading}"
                    fontWeight="semibold"
                    fontSize="md"
                    color="gray.900"
                    mb={1}
                  >
                    {member.name}
                  </Text>
                  <Text fontFamily="{body}" fontSize="sm" color="gray.600">
                    {member.role}
                  </Text>
                </Box>
              </MotionBox>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      {/* MODAL */}
      <AnimatePresence>
        {selectedMember && (
          <MotionBox
            position="fixed"
            inset={0}
            bg="rgba(0,0,0,0.6)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            zIndex={9999}
            onClick={() => setSelectedMember(null)}
          >
            <MotionBox
              bg="white"
              w={{ base: "90%", md: "70%", lg: "60%" }}
              maxW="1000px"
              display={{ base: "block", md: "flex" }}
              borderRadius="xl"
              overflow="hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              position="relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Image Container - with relative positioning for close button */}
              <Box w={{ base: "100%", md: "50%" }} position="relative">
                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  h={{ base: "320px", md: "100%" }}
                  w="100%"
                  objectFit="cover"
                />

                {/* Close Button - Only visible on mobile */}
                <IconButton
                  aria-label="Close modal"
                  position="absolute"
                  top={4}
                  right={4}
                  borderRadius="full"
                  onClick={() => setSelectedMember(null)}
                  bg="blackAlpha.700"
                  color="white"
                  _hover={{ bg: "blackAlpha.900", transform: "scale(1.1)" }}
                  size="sm"
                  display={{ base: "flex", md: "none" }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>

              {/* Right Text Container */}
              <Box
                w={{ base: "100%", md: "50%" }}
                p={{ base: 6, md: 10 }}
                position="relative"
              >
                {/* Close Button - Only visible on desktop */}
                <IconButton
                  colorScheme="red"
                  aria-label="Close modal"
                  position="absolute"
                  top={4}
                  right={4}
                  borderRadius="full"
                  onClick={() => setSelectedMember(null)}
                  _hover={{ transform: "scale(1.1)" }}
                  display={{ base: "none", md: "flex" }}
                >
                  <CloseIcon />
                </IconButton>

                {/* Quote */}
                <Box textAlign="center" mt={{ base: 0, md: 6 }}>
                  <Text
                    fontFamily="heading"
                    fontSize="2xl"
                    color="red.500"
                    mb={0}
                    lineHeight="0.8"
                  >
                    &ldquo;
                  </Text>
                  <Text
                    fontFamily="heading"
                    fontSize={{ base: "md", md: "lg" }}
                    color="gray.700"
                    lineHeight="1.5"
                    mt={1}
                    mb={1}
                  >
                    {selectedMember.quote}
                  </Text>
                  <Text
                    fontFamily="heading"
                    fontSize="2xl"
                    color="red.500"
                    mt={0}
                    lineHeight="0.8"
                  >
                    &rdquo;
                  </Text>
                </Box>

                {/* Signature */}
                <Box textAlign="center" mt={6}>
                  <Text fontFamily="heading" fontWeight="bold" fontSize="lg">
                    {selectedMember.name}
                  </Text>
                  <Text fontFamily="body" fontSize="sm" color="gray.500">
                    {selectedMember.role}
                  </Text>
                </Box>
              </Box>
            </MotionBox>
          </MotionBox>
        )}
      </AnimatePresence>
    </Box>
  );
}
