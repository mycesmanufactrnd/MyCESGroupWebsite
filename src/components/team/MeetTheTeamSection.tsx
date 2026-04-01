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

const MotionBox = motion(Box);

const teamMembers = [
  {
    name: "Mohd. Faiz Bin Hasan",
    role: "Managing Director",
    image: "/team/En_Faiz.png",
    quote:
      "“Leading MYCES Group with integrity and strategic vision, ensuring sustainable growth, strong governance, and long-term value for our clients, partners, and communities.”",
  },
  {
    name: "Muhammad Syamil Bin Reizon @ Ridzwan",
    role: "Associate Director",
    image: "/team/En_Syamil.png",
    quote:
      "“Driving operational excellence through collaboration, innovation, and disciplined execution to support MYCES Group’s strategic objectives.”",
  },
  {
    name: "Nur Adibah bte Mohd Aslah",
    role: "General Manager",
    image: "/team/Pn_Adibah.png",
    quote: "“-”",
  },
  {
    name: "Muhammad Nur Iqbal Bin Razemi",
    role: "Chief of Operations",
    image: "/team/En_Iqbal.png",
    quote:
      "“Committed to optimizing energy performance through technical expertise, regulatory compliance, and sustainable engineering solutions that support MYCES Group’s mission.”",
  },
  {
    name: "Hisham bin Ibrahim",
    role: "Project Advisor",
    image: "/team/En_Hisyam.png",
    quote:
      "“Delivering reliable and efficient energy management solutions in line with MYCES Group’s commitment to sustainability and excellence.”",
  },
  {
    name: "Nur Anis Syazwanie binti Mohd Zaidi",
    role: "Chief Financial Officer",
    image: "/team/Pn_Anis.png",
    quote: "“-”",
  },
  {
    name: "Hifzhan Ahmad bin Habibullah",
    role: "Head of Project Engineering",
    image: "/team/En_Hifzhan.png",
    quote: "“-”",
  },
  {
    name: "Mohd Zahiruddin bin Mohd Jamal",
    role: "Head of Software Development",
    image: "/team/En_Zahiruddin.png",
    quote: "“-”",
  },
  {
    name: "Mohd Hanif bin Razali",
    role: "Head of Business Development",
    image: "/team/En_Hanif.png",
    quote: "“-”",
  },
  {
    name: "Muhammad Amirul Hycarl bin Abu Bakar",
    role: "Head of Electrical Project",
    image: "/team/En_Amirul.png",
    quote: "“-”",
  },

  // Add additional members if needed
];

export default function MeetTheTeamSection() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <Box
      w="full"
      py={{ base: 20, md: 28 }}
      px={{ base: 6, md: 20 }}
      bgImage="url('/backgrounds/bg5.jpg')"
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
      bgAttachment="fixed" // static background
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
          <Heading fontSize={{ base: "1xl", md: "3xl" }} fontWeight="bold">
            Meet the Team
          </Heading>
        </MotionBox>

        {/* TEAM GRID */}
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} gap={0}>
          {teamMembers.map((member, index) => (
            <Box key={`${member.name}-${index}`} p={3}>
              <MotionBox
                bg="white"
                border="1px solid"
                borderColor="gray.200"
                borderRadius="xl"
                p={6}
                minH="440px"
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                textAlign="center"
                whileHover={{
                  y: -8,
                  boxShadow: "0px 25px 50px rgba(0,0,0,0.12)",
                  borderColor: "#0F2A1D",
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
                    h="360px"
                    objectFit="cover"
                    borderRadius="30px"
                    bg="teal.100"
                  />
                </MotionBox>

                {/* TEXT */}
                <Box mt={2}>
                  <Text fontWeight="bold" fontSize="md" color="gray.900" mb={1}>
                    {member.name}
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    {member.role}
                  </Text>
                </Box>
              </MotionBox>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      {/* ================= MODAL ================= */}
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
          >
            {/* Modal container */}
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
            >
              {/* Left Image */}
              <Box w={{ base: "100%", md: "50%" }}>
                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  h="100%"
                  w="100%"
                  objectFit="cover"
                />
              </Box>

              {/* Right Text */}
              <Box
                w={{ base: "100%", md: "50%" }}
                p={{ base: 6, md: 10 }}
                position="relative"
              >
                {/* Close Button */}
                <IconButton
                  icon={<CloseIcon />}
                  colorScheme="red"
                  aria-label="Close modal"
                  position="absolute"
                  top={4}
                  right={4}
                  borderRadius="full"
                  onClick={() => setSelectedMember(null)}
                  _hover={{ transform: "scale(1.1)" }}
                />

                {/* Quote */}
                <Box textAlign="center" mt={6}>
                  <Text fontSize="2xl" color="red.500" mb={2}>
                    &ldquo;
                  </Text>
                  <Text
                    fontSize={{ base: "md", md: "lg" }}
                    color="gray.700"
                    lineHeight="1.8"
                  >
                    {selectedMember.quote}
                  </Text>
                  <Text fontSize="2xl" color="red.500" mt={2}>
                    &rdquo;
                  </Text>
                </Box>

                {/* Signature */}
                <Box textAlign="center" mt={6}>
                  <Text fontFamily="serif" fontWeight="bold" fontSize="lg">
                    {selectedMember.name}
                  </Text>
                  <Text fontFamily="sans-serif" fontSize="sm" color="gray.500">
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
