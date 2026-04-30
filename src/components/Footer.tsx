"use client";

import { useState } from "react";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Link,
  Stack,
  Input,
  Button,
  Flex,
  Icon,
  HStack,
} from "@chakra-ui/react";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import NextLink from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNotifyMe = async () => {
    if (!email) return alert("Please enter your email.");

    setLoading(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) return alert(data.message);

      alert(data.message);
      setEmail("");
    } catch (err) {
      alert("Failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      bg="#CCD5C5"
      color="#1A1A1A"
      fontFamily="var(--font-jakarta), sans-serif"
    >
      {/* ===== GRID ===== */}
      <Box maxW="5xl" mx="auto" px={6} py={14}>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(5, 1fr)" }}
          gap={{ base: 8, md: 10 }}
        >
          {/* Column */}
          {[
            {
              title: "ABOUT US",
              links: [
                { label: "Who We Are", href: "/about" },
                {
                  label: "Board & Leadership",
                  href: "/our-company/team-member",
                },
                { label: "Certification", href: "/award" },
                { label: "Portfolio", href: "/portfolio" },
              ],
            },
            {
              title: "OUR BUSINESS",
              links: [
                {
                  label: "MyCES Group",
                  href: "/businessMyces/myces",
                },
                {
                  label: "Biomedical",
                  href: "/services8/biomedical",
                },
                {
                  label: "Manufacturing",
                  href: "/services/energy-audit/digitalsystem",
                },
                { label: "Academy", href: "/services9/robotic" },
                { label: "Power Solution", href: "/services11/building" },
                { label: "Engineering", href: "/services/energy-audit" },
              ],
            },
            {
              title: "SERVICES",
              links: [
                { label: "Energy Audit", href: "/businessMyces/myces" },
                { label: "Biomedical", href: "/services8/biomedical" },
                {
                  label: "Equipment Rental",
                  href: "/services2/equipmentrental",
                },
                {
                  label: "Digital System",
                  href: "/services/energy-audit/digitalsystem",
                },
                {
                  label: "Measurement & Verification",
                  href: "/services3/measurement",
                },
                { label: "Robotic Class", href: "/services9/robotic" },
              ],
            },
            {
              title: "SERVICES",
              links: [
                {
                  label: "EMS Certification",
                  href: "/subportfolio4?service=SUSTAINABLE%20ENERGY%20MANAGEMENT%20SYSTEM%20(SEMS)",
                },
                {
                  label: "Street Lighting",
                  href: "/services11/building",
                },
                {
                  label: "Electrical Wiring",
                  href: "/services11/building",
                },
                {
                  label: "Energy Manager Consultancy",
                  href: "/services5/reemconsultancy",
                },
              ],
            },
          ].map((col, i) => (
            <GridItem key={i}>
              <Heading
                size="xs"
                mb={3}
                letterSpacing="wide"
                fontWeight="semibold"
              >
                {col.title}
              </Heading>

              <Stack gap={2} fontSize="xs">
                {col.links.map((link, idx) => (
                  <Link
                    key={idx}
                    as={NextLink}
                    href={link.href}
                    _hover={{ color: "green.800" }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Stack>
            </GridItem>
          ))}

          {/* CONTACT */}
          <GridItem>
            <Heading size="xs" mb={3} letterSpacing="wide">
              CONTACT
            </Heading>

            <Stack fontSize="xs">
              <Text fontWeight="medium">
                <strong>Office (HQ)</strong>
              </Text>

              <Text lineHeight="1.5">
                20-1, Jalan Damai Mewah 1, <br />
                Taman Damai Mewah, 43000 Kajang, Selangor
              </Text>

              <Text>
                <strong>Phone:</strong>(+60) 3-8725 5811
              </Text>

              <Text>
                <strong>Email:</strong>
                <Link
                  href="mailto:hello@mycesgroup.com"
                  textDecoration="underline"
                >
                  hello@mycesgroup.com
                </Link>
              </Text>

              <HStack gap={3} mt={2}>
                {[FaLinkedin, FaFacebook, FaInstagram].map((IconItem, i) => (
                  <Icon
                    key={i}
                    as={IconItem}
                    w={4}
                    h={4}
                    opacity={0.7}
                    cursor="pointer"
                    _hover={{ opacity: 1 }}
                  />
                ))}
              </HStack>
            </Stack>
          </GridItem>
        </Grid>
      </Box>

      {/* ===== DIVIDER ===== */}
      <Box h="1px" bg="blackAlpha.300" />

      {/* ===== NEWSLETTER ===== */}
      {/* <Box maxW="7xl" mx="auto" px={6} py={8}>
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          gap={5}
        >
          <Box textAlign={{ base: "center", md: "left" }}>
            <Heading fontSize="12px" mb={0}>
              Stay Updated
            </Heading>
            <Text fontSize="xs" opacity={0.8}>
              Get updates and insights weekly.
            </Text>
          </Box>

          <Flex gap={2} align="center">
            <Input
              placeholder="Email"
              fontSize="12px"
              bg="white"
              borderRadius="full"
              px={3}
              maxW="220px"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              bg="#1B4D2E"
              fontSize="12px"
              color="white"
              borderRadius="full"
              px={6}
              _hover={{ bg: "#163F26" }}
              onClick={handleNotifyMe}
              loading={loading}
            >
              Submit
            </Button>
          </Flex>
        </Flex>
      </Box> */}

      {/* ===== COPYRIGHT ===== */}
      <Box bg="#CCD5C5" py={3}>
        <Text fontSize="12px" opacity={0.7} textAlign="center">
          © {new Date().getFullYear()} MyCES Group Sdn Bhd. All Rights Reserved.
        </Text>
      </Box>
    </Box>
  );
}
