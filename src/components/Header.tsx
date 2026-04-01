"use client";

import { Box, Flex, Image, Text, Icon, Input } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import NextLink from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaGlobe } from "react-icons/fa";
import { usePathname } from "next/navigation";

const MotionBox = motion(Box);

// Futuristic glow animations with emotion keyframes
const pulseGlow = keyframes`
  0% { box-shadow: 0 0 0px rgba(0, 255, 100, 0.3); border-color: rgba(0, 255, 100, 0.3); }
  50% { box-shadow: 0 0 20px rgba(0, 255, 100, 0.8); border-color: rgba(0, 255, 100, 0.8); }
  100% { box-shadow: 0 0 0px rgba(0, 255, 100, 0.3); border-color: rgba(0, 255, 100, 0.3); }
`;

const scanline = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`;

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-2px); }
  100% { transform: translateY(0px); }
`;

const neonPulse = keyframes`
  0% { opacity: 0.6; filter: brightness(1); }
  100% { opacity: 1; filter: brightness(1.2); }
`;

export default function Header() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [actOpen, setActOpen] = useState(false);
  const [newsOpen, setNewsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [careerOpen, setCareerOpen] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);
  const fontFamily = "'Orbitron', 'Share Tech Mono', monospace";
  const neonGreen = "#00ff66";

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    if (!query) return;

    // Enhanced search with more keywords
    const searchMap: { [key: string]: string } = {
      about: "/about",
      "energy audit": "/services/energy-audit",
      audit: "/services/energy-audit",
      equipment: "/services2/equipmentrental",
      rental: "/services2/equipmentrental",
      digital: "/services/energy-audit/digitalsystem",
      measurement: "/services3/measurement",
      agriculture: "/services4/agriculture",
      reem: "/services5/reemconsultancy",
      geological: "/services6/geologicalsurvey",
      ems: "/services7/emscertification",
      biomedical: "/services8/biomedical",
      team: "/our-company/team-member",
      subsidiaries: "/subsidiaries",
      contact: "/contact",
      career: "/career",
      internship: "/internshipcareer",
      portfolio: "/portfolio",
      award: "/award",
      news: "/news",
      ventures: "/services10/ventures",
      manufacturing: "/services/energy-audit/digitalsystem",
      academy: "/services9/robotic",
      aircond: "/services11/building",
      engineering: "/services/energy-audit",
    };

    let found = false;
    for (const [key, value] of Object.entries(searchMap)) {
      if (query.includes(key)) {
        window.location.href = value;
        found = true;
        break;
      }
    }

    if (!found) {
      // Futuristic error notification
      const notification = document.createElement("div");
      notification.textContent = "⚠️ NO MATCHING DATA STREAM FOUND ⚠️";
      notification.style.position = "fixed";
      notification.style.bottom = "20px";
      notification.style.right = "20px";
      notification.style.backgroundColor = "#ff0033";
      notification.style.color = "#00ff66";
      notification.style.fontFamily = fontFamily;
      notification.style.padding = "12px 24px";
      notification.style.borderRadius = "4px";
      notification.style.border = "1px solid #00ff66";
      notification.style.boxShadow = "0 0 20px rgba(0, 255, 102, 0.5)";
      notification.style.zIndex = "9999";
      notification.style.fontSize = "12px";
      document.body.appendChild(notification);
      setTimeout(() => notification.remove(), 2000);
    }
  };

  // Close search dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [searchRef]);

  // Navigation items
  const navItems = [
    {
      label: "ABOUT US",
      key: "company",
      open: companyOpen,
      setOpen: setCompanyOpen,
      items: [
        { label: "⟫ WHO WE ARE", href: "/about" },
        { label: "⟫ TEAM MANAGEMENT", href: "/our-company/team-member" },
        { label: "⟫ CERTIFICATIONS", href: "/award" },
        { label: "⟫ PORTFOLIO", href: "/portfolio" },
      ],
    },
    {
      label: "OUR BUSINESS",
      key: "services",
      open: servicesOpen,
      setOpen: setServicesOpen,
      items: [
        { label: "⟫ MYCES BIOMEDICAL", href: "/services8/biomedical" },
        { label: "⟫ MYCES VENTURES", href: "/services10/ventures" },
        {
          label: "⟫ MYCES MANUFACTURING",
          href: "/services/energy-audit/digitalsystem",
        },
        { label: "⟫ MYCES ACADEMY", href: "/services9/robotic" },
        {
          label: "⟫ MYCES AIRCOND & ELECTRICAL",
          href: "/services11/building",
        },
        { label: "⟫ MYCES ENGINEERING", href: "/services/energy-audit" },
      ],
    },
    {
      label: "ACT RESPONSIBLY",
      key: "act",
      open: actOpen,
      setOpen: setActOpen,
      items: [
        {
          label: "⟫ INTEGRITY v1",
          href: "/pdf/integrity1.pdf",
          external: true,
        },
        {
          label: "⟫ INTEGRITY v2",
          href: "/pdf/integrity2.pdf",
          external: true,
        },
        {
          label: "⟫ INTEGRITY v3",
          href: "/pdf/integrity2.pdf",
          external: true,
        },
      ],
    },
    {
      label: "NEWS",
      key: "news",
      open: newsOpen,
      setOpen: setNewsOpen,
      items: [{ label: "⟫ LATEST UPDATES", href: "/news" }],
    },
    {
      label: "CAREER",
      key: "career",
      open: careerOpen,
      setOpen: setCareerOpen,
      items: [
        { label: "⟫ PROFESSIONAL", href: "/career", external: true },
        { label: "⟫ INTERNSHIP", href: "/internshipcareer" },
      ],
    },
  ];

  return (
    <Box suppressHydrationWarning position="relative" zIndex={50}>
      {/* Solid black background gradient */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient="linear(135deg, #000000 0%, #0a0a0a 50%, #000000 100%)"
        opacity={1}
        zIndex={-1}
      />

      {/* Grid pattern overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgImage="radial-gradient(circle at 1px 1px, rgba(0, 255, 100, 0.05) 1px, transparent 1px)"
        bgSize="40px 40px"
        pointerEvents="none"
        zIndex={-1}
      />

      {/* Scanline effect */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        height="100%"
        bgGradient="linear(to-b, transparent 0%, rgba(0, 255, 100, 0.03) 50%, transparent 100%)"
        animation={`${scanline} 8s linear infinite`}
        pointerEvents="none"
        zIndex={-1}
      />

      {/* Main header content with semi-transparent background */}
      <Box
        px={{ base: 6, md: 14 }}
        py={4}
        bg="rgba(255, 255, 255, 0.85)" // Semi-transparent black (85% opacity)
        backdropFilter="blur(10px)" // Adds blur effect for glass morphism
        borderBottom={`1px solid ${neonGreen}`}
        boxShadow={`0 0 20px rgba(0, 255, 100, 0.15), inset 0 1px 0 rgba(0, 255, 100, 0.1)`}
        position="relative"
        transition="all 0.3s ease"
        _hover={{
          boxShadow: `0 0 30px rgba(0, 255, 100, 0.25)`,
          bg: "rgba(0, 0, 0, 0.9)", // Slightly less transparent on hover
        }}
      >
        <Flex align="center" justify="space-between" wrap="wrap">
          {/* ================= LEFT : LOGO with neon pulse ================= */}
          <Flex align="center" gap={3} flex="1" minW="180px">
            <ChakraLink
              as={NextLink}
              href="/"
              _hover={{ transform: "scale(1.02)" }}
              transition="all 0.2s"
            >
              <Box position="relative">
                <Image
                  src="/logo2.png"
                  alt="MyCES Logo"
                  h="70px"
                  objectFit="contain"
                  filter={`drop-shadow(0 0 8px ${neonGreen})`}
                  animation={`${floatAnimation} 3s ease-in-out infinite`}
                />
                <Box
                  position="absolute"
                  bottom="-4px"
                  left="10%"
                  width="80%"
                  height="2px"
                  bgGradient={`linear(to-r, transparent, ${neonGreen}, transparent)`}
                  animation={`${pulseGlow} 2s infinite`}
                />
              </Box>
            </ChakraLink>
            <ChakraLink as={NextLink} href="/">
              <Text
                fontSize="2xl"
                fontWeight="900"
                bgGradient={`linear(135deg, ${neonGreen} 0%, #00ccff 50%, ${neonGreen} 100%)`}
                bgClip="text"
                fontFamily={fontFamily}
                letterSpacing="3px"
                transition="all 0.2s"
                _hover={{
                  letterSpacing: "4px",
                  filter: "drop-shadow(0 0 5px #00ff66)",
                }}
              >
                MyCES
              </Text>
              <Text
                fontSize="8px"
                color={neonGreen}
                fontFamily={fontFamily}
                letterSpacing="2px"
                opacity={0.7}
                mt="-2px"
              >
                MyCES Sdn Bhd
              </Text>
            </ChakraLink>
          </Flex>

          {/* ================= CENTER : NAVIGATION ================= */}
          <Flex
            flex="2"
            justify="center"
            align="center"
            gap={{ base: 4, md: 8 }}
            fontFamily={fontFamily}
            wrap="wrap"
          >
            {navItems.map((item) => (
              <Box
                key={item.key}
                position="relative"
                onMouseEnter={() => item.setOpen(true)}
                onMouseLeave={() => item.setOpen(false)}
              >
                <Text
                  fontSize="11px"
                  fontWeight="bold"
                  cursor="pointer"
                  color={item.open ? neonGreen : "#88ffaa"}
                  textTransform="uppercase"
                  letterSpacing="2px"
                  transition="all 0.2s"
                  _hover={{
                    color: neonGreen,
                    textShadow: `0 0 8px ${neonGreen}`,
                    letterSpacing: "3px",
                  }}
                >
                  {item.label}
                </Text>

                {/* Animated indicator dot */}
                <Box
                  position="absolute"
                  bottom="-6px"
                  left="50%"
                  transform="translateX(-50%)"
                  width="4px"
                  height="4px"
                  borderRadius="full"
                  bg={neonGreen}
                  opacity={item.open ? 1 : 0}
                  transition="all 0.2s"
                />

                <AnimatePresence>
                  {item.open && (
                    <MotionBox
                      position="absolute"
                      top="140%"
                      left="50%"
                      transform="translateX(-50%)"
                      bg="rgba(0, 0, 0, 0.95)" // Semi-transparent dropdown
                      backdropFilter="blur(10px)"
                      boxShadow={`0 0 30px rgba(0, 255, 100, 0.3), inset 0 1px 0 rgba(0, 255, 100, 0.2)`}
                      minW="260px"
                      zIndex={30}
                      borderRadius="8px"
                      overflow="hidden"
                      border={`1px solid ${neonGreen}`}
                      initial={{ opacity: 0, y: -15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -15, scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      }}
                    >
                      {item.items.map((subItem, idx) => (
                        <ChakraLink
                          key={idx}
                          as={subItem.external ? "a" : NextLink}
                          href={subItem.href}
                          target={subItem.external ? "_blank" : undefined}
                          rel={
                            subItem.external ? "noopener noreferrer" : undefined
                          }
                          _hover={{ textDecoration: "none" }}
                        >
                          <MotionBox
                            px={5}
                            py={3}
                            fontSize="12px"
                            fontWeight="500"
                            color="#ccffcc"
                            fontFamily={fontFamily}
                            letterSpacing="1px"
                            borderBottom={`1px solid rgba(0, 255, 100, 0.15)`}
                            transition="all 0.2s"
                            whileHover={{
                              x: 8,
                              background: `linear-gradient(90deg, rgba(0, 255, 100, 0.15), transparent)`,
                              color: neonGreen,
                              textShadow: `0 0 4px ${neonGreen}`,
                            }}
                          >
                            {subItem.label}
                          </MotionBox>
                        </ChakraLink>
                      ))}
                      {/* Decorative corner */}
                      <Box
                        position="absolute"
                        bottom="0"
                        right="0"
                        width="20px"
                        height="20px"
                        borderRight={`2px solid ${neonGreen}`}
                        borderBottom={`2px solid ${neonGreen}`}
                        opacity={0.5}
                      />
                    </MotionBox>
                  )}
                </AnimatePresence>
              </Box>
            ))}

            <ChakraLink as={NextLink} href="/contact">
              <Text
                fontSize="11px"
                fontWeight="bold"
                cursor="pointer"
                color="#88ffaa"
                textTransform="uppercase"
                letterSpacing="2px"
                transition="all 0.2s"
                _hover={{
                  color: neonGreen,
                  textShadow: `0 0 8px ${neonGreen}`,
                  letterSpacing: "3px",
                }}
              >
                CONTACT US
              </Text>
            </ChakraLink>
          </Flex>

          {/* ================= RIGHT : ICONS with futuristic effects ================= */}
          <Flex
            flex="1"
            justify="flex-end"
            align="center"
            gap={4}
            ref={searchRef}
          >
            {/* Search with neon input */}
            <Box position="relative">
              <Icon
                as={FaSearch}
                boxSize={4}
                cursor="pointer"
                color={searchOpen ? neonGreen : "#88ffaa"}
                transition="all 0.2s"
                _hover={{
                  color: neonGreen,
                  filter: `drop-shadow(0 0 5px ${neonGreen})`,
                  transform: "scale(1.1)",
                }}
                onClick={() => setSearchOpen(!searchOpen)}
              />
              <AnimatePresence>
                {searchOpen && (
                  <MotionBox
                    position="absolute"
                    top="130%"
                    right={0}
                    bg="rgba(0, 0, 0, 0.95)" // Semi-transparent search dropdown
                    backdropFilter="blur(10px)"
                    boxShadow={`0 0 20px rgba(0, 255, 100, 0.4)`}
                    borderRadius="8px"
                    p={3}
                    width="260px"
                    border={`1px solid ${neonGreen}`}
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    zIndex={40}
                  >
                    <form onSubmit={handleSearchSubmit}>
                      <Box position="relative">
                        <Input
                          placeholder="SEARCH DATABASE..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          autoFocus
                          pr="8"
                          size="sm"
                          bg="rgba(10, 10, 10, 0.8)"
                          border={`1px solid ${neonGreen}`}
                          color={neonGreen}
                          fontFamily={fontFamily}
                          fontSize="11px"
                          letterSpacing="1px"
                          _focus={{
                            boxShadow: `0 0 15px ${neonGreen}`,
                            borderColor: neonGreen,
                          }}
                          _placeholder={{
                            color: "rgba(0, 255, 100, 0.5)",
                            fontSize: "10px",
                          }}
                        />
                        <Icon
                          as={FaSearch}
                          boxSize={3}
                          position="absolute"
                          right="3"
                          top="50%"
                          transform="translateY(-50%)"
                          cursor="pointer"
                          color={neonGreen}
                          onClick={handleSearchSubmit}
                          _hover={{
                            filter: `drop-shadow(0 0 3px ${neonGreen})`,
                          }}
                        />
                      </Box>
                    </form>
                    <Text
                      fontSize="8px"
                      color="rgba(0, 255, 100, 0.5)"
                      fontFamily={fontFamily}
                      mt={2}
                      textAlign="center"
                    >
                      ⟡ ENCRYPTED SEARCH ⟡
                    </Text>
                  </MotionBox>
                )}
              </AnimatePresence>
            </Box>

            {/* Globe with rotation animation */}
            <Box
              as={motion.div}
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Icon
                as={FaGlobe}
                boxSize={4}
                cursor="pointer"
                color="#88ffaa"
                _hover={{
                  color: neonGreen,
                  filter: `drop-shadow(0 0 5px ${neonGreen})`,
                }}
              />
            </Box>

            {/* Futuristic indicator dots */}
            <Flex gap={1} align="center">
              {[...Array(3)].map((_, i) => (
                <Box
                  key={i}
                  width="3px"
                  height="3px"
                  borderRadius="full"
                  bg={neonGreen}
                  opacity={0.5 + i * 0.25}
                  animation={`${neonPulse} ${1 + i * 0.5}s infinite alternate`}
                />
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Box>

      {/* Bottom neon bar */}
      <Box
        height="2px"
        bgGradient={`linear(90deg, transparent, ${neonGreen}, #00ccff, ${neonGreen}, transparent)`}
        boxShadow={`0 0 10px ${neonGreen}`}
        width="100%"
      />
    </Box>
  );
}
