"use client";

import { useEffect, useState } from "react";
import { Box, Flex, Text, Image, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiFacebook, FiLinkedin, FiMessageCircle } from "react-icons/fi";
import type { TeamMember } from "./TeamMember";
import CompanyServices from "./CompanyServices";

const MotionBox = motion(Box);

export interface SocialLink {
  icon: React.ElementType;
  href: string;
  label: string;
}

interface LinkTreeProps {
  member?: TeamMember;
  name?: string;
  title?: string;
  profileImage?: string;
}

export default function LinkTree({
  member,
  name,
  title,
  profileImage,
}: LinkTreeProps) {
  
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const displayName = name ?? member?.name ?? "MYCES Group";
  const displayTitle = title ?? member?.role ?? "";
  const displayImage = profileImage ?? member?.image ?? "/team/placeholder.png";

  const socialLinks: SocialLink[] = [
    ...(member?.facebook
      ? [{ icon: FiFacebook, href: member.facebook, label: "Facebook" }]
      : []),
    ...(member?.linkedin
      ? [{ icon: FiLinkedin, href: member.linkedin, label: "LinkedIn" }]
      : []),
    ...(member?.whatsapp
      ? [{ icon: FiMessageCircle, href: member.whatsapp, label: "WhatsApp" }]
      : []),
  ];

  return (
    <Flex
      minH="100vh"
      direction="column"
      align="center"
      justify="center"
      bg="gray.100"
      px={4}
      py={8}
    >
      {/* Company branding */}
      <MotionBox
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        mb={5}
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={2}
      >
        <Image src="/logo.png" alt="MYCES Group" h="48px" objectFit="contain" />
        <Text
          fontSize="xs"
          fontWeight="600"
          color="gray.500"
          fontFamily="var(--font-jakarta), sans-serif"
          letterSpacing="widest"
          textTransform="uppercase"
        >
          MYCES Group
        </Text>
      </MotionBox>

      <Box
        w="full"
        maxW="420px"
        borderRadius="3xl"
        overflow="hidden"
        boxShadow="2xl"
      >
        <Box
          position="relative"
          bg="linear-gradient(135deg, #2d3561 0%, #1a6b5a 40%, #4a3f8c 70%, #6b4f9e 100%)"
          pb={6}
          pt={8}
          px={6}
          overflow="hidden"
        >
          <Box
            position="absolute"
            top="-20px"
            left="-30px"
            w="180px"
            h="180px"
            borderRadius="full"
            bg="rgba(180,160,100,0.45)"
            transform="rotate(-20deg)"
          />
          <Box
            position="absolute"
            top="10px"
            right="-20px"
            w="140px"
            h="140px"
            borderRadius="full"
            bg="rgba(80,160,120,0.5)"
            transform="rotate(15deg)"
          />
          <Box
            position="absolute"
            bottom="-10px"
            left="50%"
            transform="translateX(-50%)"
            w="220px"
            h="100px"
            borderRadius="full"
            bg="rgba(100,80,180,0.4)"
          />
          <Box
            position="absolute"
            top="60px"
            left="30px"
            w="80px"
            h="120px"
            borderRadius="40%"
            bg="rgba(220,160,80,0.35)"
            transform="rotate(30deg)"
          />
          <Box
            position="absolute"
            bottom="20px"
            right="20px"
            w="100px"
            h="100px"
            borderRadius="full"
            bg="rgba(60,130,100,0.4)"
          />

          <Flex
            direction="column"
            align="center"
            position="relative"
            zIndex={1}
          >
            {/* Profile image */}
            <MotionBox
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              mb={3}
            >
              <Box
                w="90px"
                h="90px"
                borderRadius="full"
                border="3px solid white"
                overflow="hidden"
                boxShadow="lg"
                bg="blue.900"
              >
                <Image
                  src={displayImage}
                  alt={displayName}
                  w="full"
                  h="full"
                  objectFit="cover"
                />
              </Box>
            </MotionBox>

            <MotionBox
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Text
                fontSize="xl"
                fontWeight="700"
                color="white"
                fontFamily="var(--font-jakarta), sans-serif"
                letterSpacing="wider"
                textAlign="center"
              >
                {displayName}
              </Text>
            </MotionBox>

            <MotionBox
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Text
                fontSize="xs"
                color="whiteAlpha.900"
                textAlign="center"
                mt={1}
                fontFamily="var(--font-inter), sans-serif"
                px={4}
              >
                {displayTitle}
              </Text>
            </MotionBox>

            {/* Social icons */}
            <MotionBox
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Flex gap={4} mt={3} justify="center">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    color="white"
                    _hover={{ opacity: 0.8, transform: "scale(1.2)" }}
                    transition="all 0.2s"
                    display="inline-flex"
                    alignItems="center"
                  >
                    <social.icon size={20} />
                  </Link>
                ))}
              </Flex>
            </MotionBox>
          </Flex>
        </Box>

        <Box bg="white" px={5} pt={5} pb={6}>
          <CompanyServices />
        </Box>
      </Box>

      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        mt={5}
      >
        <Text
          fontSize="2xs"
          color="gray.400"
          fontFamily="var(--font-inter), sans-serif"
          textAlign="center"
        >
          {year && <>© {year} MYCES Group. All rights reserved.</>}
        </Text>
      </MotionBox>
    </Flex>
  );
}
