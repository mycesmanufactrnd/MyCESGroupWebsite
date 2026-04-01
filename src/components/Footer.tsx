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
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNotifyMe = async () => {
    if (!email) {
      alert("Please enter your email.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      alert(data.message); // ✅ always defined now
      setEmail("");
    } catch (error) {
      console.error("Newsletter error:", error);
      alert("Failed to subscribe. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box bg="#CCD5C5" color="#1A1A1A">
      {/* ===== TOP FOOTER GRID ===== */}
      <Box maxW="7xl" mx="auto" px={6} py={16}>
        <Grid templateColumns={{ base: "1fr", md: "1.2fr 2fr 1fr" }} gap={12}>
          {/* Contact Us */}
          <GridItem>
            <Heading size="md" mb={4}>
              Contact Us
            </Heading>
            <Stack gap={2} fontSize="sm">
              <Text fontWeight="semibold">Selangor Head Office</Text>
              <Text>
                No. 20, Jalan Damai Mewah 1, <br />
                Taman Damai Mewah, 43000 Kajang, <br />
                Selangor
              </Text>
              <Text>Phone: (+60) 3-8725 5811</Text>
              <Text>
                Email:{" "}
                <Link
                  href="mailto:admin@mycesgroup.com"
                  textDecoration="underline"
                >
                  admin@mycesgroup.com
                </Link>
              </Text>
              <Text>Hours: 9:00AM – 6:00PM</Text>
            </Stack>
          </GridItem>

          {/* Services */}
          <GridItem>
            <Heading size="md" mb={4} textAlign={{ base: "left", md: "left" }}>
              Services
            </Heading>

            <Grid templateColumns="1fr 1fr" gap={6} fontSize="sm">
              <Stack gap={2}>
                <Link
                  as={NextLink}
                  href="/services/energy-audit"
                  _hover={{ textDecoration: "underline", color: "green.800" }}
                >
                  Energy Audit
                </Link>
                <Link
                  as={NextLink}
                  href="/services2/equipmentrental"
                  _hover={{ textDecoration: "underline", color: "green.800" }}
                >
                  Equipment Rental
                </Link>
                <Link
                  as={NextLink}
                  href="/services/energy-audit/digitalsystem"
                  _hover={{ textDecoration: "underline", color: "green.800" }}
                >
                  Digital System
                </Link>
                <Link
                  as={NextLink}
                  href="/services3/measurement"
                  _hover={{ textDecoration: "underline", color: "green.800" }}
                >
                  Measurement & Verification
                </Link>
                <Link
                  as={NextLink}
                  href="/services9/robotic"
                  _hover={{ textDecoration: "underline", color: "green.800" }}
                >
                  Robotic Class
                </Link>
                <Link
                  as={NextLink}
                  href="/services9/robotic"
                  _hover={{ textDecoration: "underline", color: "green.800" }}
                >
                  Training Provider
                </Link>
                <Link
                  as={NextLink}
                  href="/services5/reemconsultancy"
                  _hover={{ textDecoration: "underline", color: "green.800" }}
                >
                  REEM Consultancy
                </Link>
              </Stack>

              <Stack gap={2}>
                <Link
                  as={NextLink}
                  href="/services7/emscertification"
                  _hover={{ textDecoration: "underline", color: "green.800" }}
                >
                  Energy Management System Certification
                </Link>
                <Link
                  as={NextLink}
                  href="/services8/biomedical"
                  _hover={{ textDecoration: "underline", color: "green.800" }}
                >
                  Biomedical
                </Link>
                <Link
                  as={NextLink}
                  href="/services11/building"
                  _hover={{ textDecoration: "underline", color: "green.800" }}
                >
                  Building Automation System (BAS)
                </Link>
                <Link
                  as={NextLink}
                  href="/services11/building"
                  _hover={{ textDecoration: "underline", color: "green.800" }}
                >
                  Control Panel Supply And Installation
                </Link>
                <Link
                  as={NextLink}
                  href="/services11/building"
                  _hover={{ textDecoration: "underline", color: "green.800" }}
                >
                  Electrical Wiring And Installation
                </Link>
                <Link
                  as={NextLink}
                  href="/services11/building"
                  _hover={{ textDecoration: "underline", color: "green.800" }}
                >
                  Testing Commissioning And Maintanance
                </Link>
                <Link
                  as={NextLink}
                  href="/services11/building"
                  _hover={{ textDecoration: "underline", color: "green.800" }}
                >
                  Energy Efficiency and Smart Buiding Solutions (EMS)
                </Link>
              </Stack>
            </Grid>
          </GridItem>

          {/* Our Company */}
          <GridItem>
            <Flex gap={{ base: 10, md: 32 }}>
              <Box>
                <Heading size="md" mb={4}>
                  Our Company
                </Heading>
                <Stack gap={2} fontSize="sm">
                  <Link
                    as={NextLink}
                    href="/our-company/team-member"
                    whiteSpace="nowrap"
                    display="inline-block"
                    _hover={{ textDecoration: "underline", color: "green.800" }}
                  >
                    Team Management
                  </Link>
                </Stack>
              </Box>
              <Box>
                <Heading size="md" mb={4}>
                  <Link
                    as={NextLink}
                    href="/career"
                    whiteSpace="nowrap"
                    display="inline-block"
                    _hover={{ textDecoration: "underline", color: "green.800" }}
                  >
                    Career
                  </Link>
                </Heading>
                <Stack gap={2} fontSize="sm">
                  <Link
                    as={NextLink}
                    href="/career"
                    whiteSpace="nowrap"
                    display="inline-block"
                    _hover={{ textDecoration: "underline", color: "green.800" }}
                  >
                    Professional
                  </Link>
                  <Link
                    as={NextLink}
                    href="/internshipcareer"
                    whiteSpace="nowrap"
                    display="inline-block"
                    _hover={{ textDecoration: "underline", color: "green.800" }}
                  >
                    Internship
                  </Link>
                </Stack>
              </Box>
              <Box>
                <Heading size="md" mb={4}>
                  <Link
                    as={NextLink}
                    href="/about"
                    whiteSpace="nowrap"
                    display="inline-block"
                    _hover={{ textDecoration: "underline", color: "green.800" }}
                  >
                    About Us
                  </Link>
                </Heading>
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Box>

      {/* ===== NEWSLETTER BAR ===== */}
      <Box h="1px" bg="gray.600" opacity={0.6} />

      <Box maxW="7xl" mx="auto" px={6} py={10}>
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          gap={6}
        >
          <Box>
            <Heading size="sm" mb={1}>
              Stay Updated with Our Company
            </Heading>
            <Text fontSize="sm">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </Text>
          </Box>

          <Flex gap={3} w={{ base: "100%", md: "auto" }}>
            <Input
              placeholder="Enter your email"
              bg="white"
              borderRadius="md"
              maxW="280px"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              bg="#1B4D2E"
              color="white"
              px={6}
              _hover={{ bg: "#163F26" }}
              onClick={handleNotifyMe}
              loading={loading}
            >
              {loading ? "Subscribing" : "Notify Me"}
              Notify Me
            </Button>
          </Flex>
        </Flex>
      </Box>

      {/* ===== COPYRIGHT STRIP ===== */}
      <Box bg="#BFC8B5" py={4}>
        <Box maxW="7xl" mx="auto" px={6}>
          <Text fontSize="sm">
            © {new Date().getFullYear()} MyCES–Group.com – All Rights Reserved
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
