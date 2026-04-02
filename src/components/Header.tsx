"use client";

import { Box, Flex, Image, Text, Icon, Input } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaGlobe } from "react-icons/fa";
import { usePathname } from "next/navigation";

const MotionBox = motion(Box);

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
  const fontFamily = "'Inter', sans-serif"; // Corporate font
  const primaryColor = "#1A1A1A"; // Dark text for corporate look

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    if (!query) return;

    const searchMap: { [key: string]: string } = {
      about: "/about",
      "energy audit": "/services/energy-audit",
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
      alert("⚠️ No matching data found.");
    }
  };

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

  const navItems = [
    {
      label: "ABOUT US",
      key: "company",
      open: companyOpen,
      setOpen: setCompanyOpen,
      items: [
        { label: "WHO WE ARE", href: "/about" },
        { label: "BOARD & LEADERSHIP", href: "/our-company/team-member" },
        { label: "CERTIFICATIONS", href: "/award" },
        { label: "PORTFOLIO", href: "/portfolio" },
      ],
    },
    {
      label: "OUR BUSINESS",
      key: "services",
      open: servicesOpen,
      setOpen: setServicesOpen,
      items: [
        {
          label: "MYCES BIOMEDICAL ENGINEERING",
          href: "/services8/biomedical",
        },
        // { label: "VENTURES", href: "/services10/ventures" },
        {
          label: "MYCES MANUFACTURING",
          href: "/services/energy-audit/digitalsystem",
        },
        { label: "MYCES ACADEMY", href: "/services9/robotic" },
        { label: "MYCES AIRCOND & ELECTRICAL", href: "/services11/building" },
        { label: "MYCES ENGINEERING", href: "/services/energy-audit" },
      ],
    },
    {
      label: "ACT RESPONSIBLY",
      key: "act",
      open: actOpen,
      setOpen: setActOpen,
      items: [
        { label: "INTEGRITY v1", href: "/pdf/integrity1.pdf", external: true },
        { label: "INTEGRITY v2", href: "/pdf/integrity2.pdf", external: true },
      ],
    },
    {
      label: "NEWS",
      key: "news",
      open: newsOpen,
      setOpen: setNewsOpen,
      items: [{ label: "LATEST UPDATES", href: "/news" }],
    },
    {
      label: "CAREER",
      key: "career",
      open: careerOpen,
      setOpen: setCareerOpen,
      items: [
        { label: "PROFESSIONAL", href: "/career", external: true },
        { label: "INTERNSHIP", href: "/internshipcareer" },
      ],
    },
  ];

  return (
    <Box position="relative" zIndex={50}>
      {/* White header */}
      <Box
        px={{ base: 6, md: 14 }}
        py={4}
        bg="white"
        borderBottom={`1px solid #e2e2e2`}
        boxShadow="0 1px 5px rgba(0,0,0,0.1)"
      >
        <Flex align="center" justify="space-between" wrap="wrap">
          {/* Logo */}
          <Flex align="center" gap={3} flex="1" minW="180px">
            <ChakraLink as={NextLink} href="/">
              <Image
                src="/logo2.png"
                alt="MyCES Logo"
                h="60px"
                objectFit="contain"
              />
            </ChakraLink>
          </Flex>

          {/* Navigation */}
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
                  fontSize="12px"
                  fontWeight="600"
                  cursor="pointer"
                  color={primaryColor}
                  textTransform="uppercase"
                  letterSpacing="1px"
                  _hover={{ color: "#199800" }}
                >
                  {item.label}
                </Text>

                <AnimatePresence>
                  {item.open && (
                    <MotionBox
                      position="absolute"
                      top="120%"
                      left="50%"
                      transform="translateX(-50%)"
                      bg="white"
                      minW="200px"
                      zIndex={30}
                      borderRadius="6px"
                      border="1px solid #e2e2e2"
                      boxShadow="0 2px 8px rgba(0,0,0,0.1)"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
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
                          <Box
                            px={4}
                            py={2}
                            fontSize="12px"
                            fontWeight="500"
                            color={primaryColor}
                            _hover={{ bg: "#f5f5f5" }}
                          >
                            {subItem.label}
                          </Box>
                        </ChakraLink>
                      ))}
                    </MotionBox>
                  )}
                </AnimatePresence>
              </Box>
            ))}

            <ChakraLink as={NextLink} href="/contact">
              <Text
                fontSize="12px"
                fontWeight="600"
                cursor="pointer"
                color={primaryColor}
                textTransform="uppercase"
                letterSpacing="1px"
                _hover={{ color: "#199800" }}
              >
                Contact Us
              </Text>
            </ChakraLink>
          </Flex>

          {/* Search */}
          <Flex
            flex="1"
            justify="flex-end"
            align="center"
            gap={4}
            ref={searchRef}
          >
            <Icon
              as={FaSearch}
              boxSize={4}
              cursor="pointer"
              color={primaryColor}
              onClick={() => setSearchOpen(!searchOpen)}
            />

            <AnimatePresence>
              {searchOpen && (
                <MotionBox
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 200, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  overflow="hidden"
                >
                  <form onSubmit={handleSearchSubmit}>
                    <Input
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      size="sm"
                      bg="white"
                      border="1px solid #ccc"
                      fontFamily={fontFamily}
                      fontSize="12px"
                      _focus={{
                        borderColor: "#199800",
                        boxShadow: "0 0 5px rgba(25, 152, 0, 0.5)",
                      }}
                    />
                  </form>
                </MotionBox>
              )}
            </AnimatePresence>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
