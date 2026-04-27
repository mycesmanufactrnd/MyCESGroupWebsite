"use client";

import { Box, Flex, Image, Text, Icon, Input } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";

const MotionBox = motion(Box);

type SubItem = {
  label: string;
  href?: string;
  external?: boolean;
  key?: string;
  onClick?: () => void;
};

type NavItem = { label: string; key: string; items: SubItem[] };

export default function Header() {
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showPolicy, setShowPolicy] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);

  const handleSearchSubmit = (
    e?:
      | React.FormEvent<HTMLFormElement>
      | React.KeyboardEvent<HTMLInputElement>,
  ) => {
    e?.preventDefault();

    const query = searchQuery.trim().toLowerCase();
    if (!query) return;

    const searchMap: { [key: string]: string } = {
      about: "/about",
      team: "/our-company/team-member",
      portfolio: "/portfolio",
      contact: "/contact",
      biomedical: "/services8/biomedical",
      engineering: "/services/energy-audit",
      academy: "/services9/robotic",
      power: "/services11/building",
      news: "/news",
      career: "/career",
      job: "/career",
      internship: "/internshipcareer",
    };

    for (const key in searchMap) {
      if (query.includes(key)) {
        router.push(searchMap[key]);
        setSearchOpen(false);
        setSearchQuery("");
        return;
      }
    }

    alert("⚠️ No matching result found.");
  };

  const navItems: NavItem[] = [
    {
      label: "ABOUT US",
      key: "company",
      items: [
        { label: "WHO WE ARE", href: "/about" },
        { label: "BOARD & LEADERSHIP", href: "/our-company/team-member" },
        { label: "CERTIFICATIONS", href: "/award" },
        { label: "PORTFOLIO", href: "/portfolio" },
      ],
    },
    {
      label: "OUR BUSINESS",
      key: "business",
      items: [
        { label: "MyCES GROUP", href: "/businessMyces/myces" },
        { label: "BIOMEDICAL", href: "/businessBiomed/biomed" },
        {
          label: "MANUFACTURING",
          href: "/businessManu/manu",
        },
        { label: "ACADEMY", href: "/businessAcademy/academy" },
        { label: "POWER SOLUTION", href: "/businessPower/power" },
        { label: "ENGINEERING", href: "/businessEng/eng" },
      ],
    },
    // {
    //   label: "OUR SUBSIDARIES",
    //   key: "services",
    //   items: [
    //     // { label: "MyCES GROUP", href: "/services1/myces-group" },
    //     { label: "BIOMEDICAL ENGINEERING", href: "/services8/biomedical" },
    //     {
    //       label: "MANUFACTURING",
    //       href: "/services/energy-audit/digitalsystem",
    //     },
    //     { label: "ACADEMY", href: "/services9/robotic" },
    //     { label: "POWER SOLUTION", href: "/services11/building" },
    //     { label: "ENGINEERING", href: "/services/energy-audit" },
    //   ],
    // },
    {
      label: "ACT RESPONSIBLY",
      key: "act",
      items: [
        {
          label: "ANTI-BRIBERY AND CORRUPTION POLICY",
          href: "/act1",
        },
        {
          label: "ISO 9001 : 2015",
          href: "/act2",
        },
        {
          label: "ISO 41001 : 2018",
          href: "/act3",
        },
      ],
    },
    {
      label: "NEWS",
      key: "news",
      items: [{ label: "LATEST UPDATES", href: "/news" }],
    },
    {
      label: "CAREER",
      key: "career",
      items: [
        { label: "PROFESSIONAL", href: "/career" },
        { label: "INTERNSHIP", href: "/internshipcareer" },
      ],
    },
  ];

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
  }, []);

  return (
    <Box
      position="sticky"
      top="0"
      zIndex={100}
      bg="white"
      boxShadow="0 2px 10px rgba(0,0,0,0.05)"
      fontFamily="heading"
      fontWeight={"bold"}
    >
      {/* HEADER TOP */}
      <Flex
        px={{ base: 4, md: 10 }}
        py={4}
        align="center"
        justify="space-between"
        position="relative"
      >
        {/* LOGO */}
        <ChakraLink as={NextLink} href="/">
          <Image src="/logo2.png" h="50px" />
        </ChakraLink>

        {/* DESKTOP NAV */}
        <Flex display={{ base: "none", md: "flex" }} gap={6} align="center">
          {navItems.map((item) => (
            <Box
              key={item.key}
              position="relative"
              onMouseEnter={() => setOpenDropdown(item.key)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Text
                fontSize="12px"
                fontWeight="600"
                cursor="pointer"
                letterSpacing="0.05em"
                textTransform="uppercase"
                _hover={{ color: "green.600" }}
              >
                {item.label}
              </Text>

              <AnimatePresence>
                {openDropdown === item.key && (
                  <MotionBox
                    position="absolute"
                    top="120%"
                    left="50%"
                    transform="translateX(-50%)"
                    bg="white"
                    minW="220px"
                    border="1px solid #eee"
                    borderRadius="8px"
                    boxShadow="0 10px 30px rgba(0,0,0,0.08)"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {item.items.map((sub, i) => (
                      <ChakraLink key={i} as={NextLink} href={sub.href ?? "#"}>
                        <Text
                          px={4}
                          py={3}
                          fontSize="12px"
                          fontWeight="600"
                          cursor="pointer"
                          letterSpacing="0.05em"
                          textTransform="uppercase"
                          _hover={{ bg: "#f7f7f7" }}
                        >
                          {sub.label}
                        </Text>
                      </ChakraLink>
                    ))}
                  </MotionBox>
                )}
              </AnimatePresence>
            </Box>
          ))}

          <ChakraLink as={NextLink} href="/contact">
            <Text fontSize="12px" fontWeight="600" textTransform="uppercase">
              CONTACT
            </Text>
          </ChakraLink>
        </Flex>

        {/* SEARCH ICON DESKTOP */}
        <Flex display={{ base: "none", md: "flex" }} align="center">
          <Icon
            as={FaSearch}
            cursor="pointer"
            onClick={() => setSearchOpen(!searchOpen)}
          />
          <AnimatePresence>
            {searchOpen && (
              <MotionBox
                ml={2}
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "200px" }}
                exit={{ opacity: 0, width: 0 }}
                overflow="hidden"
                transition={{ duration: 0.3 }}
              >
                <form onSubmit={handleSearchSubmit}>
                  <Input
                    size="sm"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </form>
              </MotionBox>
            )}
          </AnimatePresence>
        </Flex>

        {/* MOBILE ICONS + INLINE SEARCH */}
        <Flex align="center" gap={2} display={{ base: "flex", md: "none" }}>
          <AnimatePresence>
            {searchOpen && (
              <MotionBox
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "140px", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                overflow="hidden"
                transition={{ duration: 0.25 }}
              >
                <form onSubmit={handleSearchSubmit}>
                  <Input
                    size="sm"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                      if (e.key === "Enter") handleSearchSubmit();
                    }}
                  />
                </form>
              </MotionBox>
            )}
          </AnimatePresence>

          <Icon
            as={FaSearch}
            cursor="pointer"
            boxSize={5}
            onClick={() => setSearchOpen(!searchOpen)}
          />
          <Icon
            as={menuOpen ? FaTimes : FaBars}
            cursor="pointer"
            boxSize={5}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </Flex>
      </Flex>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <MotionBox
            display={{ base: "block", md: "none" }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            overflow="hidden"
            px={4}
          >
            {navItems.map((item) => (
              <Box key={item.key} mb={3}>
                <Flex
                  justify="space-between"
                  cursor="pointer"
                  onClick={() =>
                    setOpenDropdown(openDropdown === item.key ? null : item.key)
                  }
                >
                  <Text fontSize="12px" fontWeight="600">
                    {item.label}
                  </Text>
                </Flex>

                <AnimatePresence>
                  {openDropdown === item.key && (
                    <MotionBox
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <Box pl={4} mt={2}>
                        <Flex direction="column">
                          {item.items.map((sub, i) => (
                            <Box
                              key={i}
                              borderBottom="1px solid"
                              borderColor="gray.200"
                            >
                              <ChakraLink
                                as={sub.href ? NextLink : "a"}
                                href={sub.href ?? "#"}
                                onClick={() => {
                                  setMenuOpen(false);
                                  setOpenDropdown(null);
                                  sub.onClick?.();
                                }}
                                _hover={{ textDecoration: "none" }}
                              >
                                <Box
                                  py={2}
                                  px={2}
                                  borderRadius="md"
                                  _hover={{ bg: "gray.100" }}
                                  transition="0.2s"
                                >
                                  <Text fontSize="xs">{sub.label}</Text>
                                </Box>
                              </ChakraLink>
                            </Box>
                          ))}
                        </Flex>
                      </Box>
                    </MotionBox>
                  )}
                </AnimatePresence>
              </Box>
            ))}
            <ChakraLink
              as={NextLink}
              href="/contact"
              onClick={() => setMenuOpen(false)}
            >
              <Text fontSize="12px" fontWeight="600" mt={0} mb={3}>
                CONTACT
              </Text>
            </ChakraLink>
          </MotionBox>
        )}
      </AnimatePresence>
    </Box>
  );
}
