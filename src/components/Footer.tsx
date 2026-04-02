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
import { FaLinkedin, FaFacebook } from "react-icons/fa";
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

      alert(data.message);
      setEmail("");
    } catch (error) {
      console.error("Newsletter error:", error);
      alert("Failed to subscribe. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleClick = async () => {
    setLoading(true);

    try {
      // Perform some action here, such as sending an email to the newsletter
      setLoading(false);
    } catch (error) {
      console.error("Error submitting newsletter:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <Box bg="#CCD5C5" color="#1A1A1A">
      {/* ===== FOOTER GRID ===== */}
      <Box maxW="7xl" mx="auto" px={6} py={16}>
        <Grid templateColumns={{ base: "1fr", md: "repeat(5, 1fr)" }} gap={12}>
          {/* Column 1: About Us */}
          <GridItem>
            <Heading size="md" mb={4}>
              WHAT WE DO
            </Heading>
            <Stack gap={2} fontSize="sm">
              <Link
                as={NextLink}
                href="/about"
                _hover={{ textDecoration: "underline", color: "green.800" }}
              >
                Who We Are
              </Link>
              <Link
                as={NextLink}
                href="/our-company/team-member"
                _hover={{ textDecoration: "underline", color: "green.800" }}
              >
                Board & Leadership
              </Link>
              <Link
                as={NextLink}
                href="/award"
                _hover={{ textDecoration: "underline", color: "green.800" }}
              >
                Certification
              </Link>
              <Link
                as={NextLink}
                href="/portfolio"
                _hover={{ textDecoration: "underline", color: "green.800" }}
              >
                Portfolio
              </Link>
            </Stack>
          </GridItem>

          {/* Column 2: Our Business */}
          <GridItem>
            <Heading size="md" mb={4}>
              OUR BUSINESS
            </Heading>
            <Stack gap={2} fontSize="sm">
              <Link
                as={NextLink}
                href="/services8/biomedical"
                _hover={{ textDecoration: "underline", color: "green.800" }}
              >
                Biomedical Engineering
              </Link>
              <Link
                as={NextLink}
                href="/services/energy-audit/digitalsystem"
                _hover={{ textDecoration: "underline", color: "green.800" }}
              >
                Manufacturing
              </Link>
              <Link
                as={NextLink}
                href="/services9/robotic"
                _hover={{ textDecoration: "underline", color: "green.800" }}
              >
                Academy
              </Link>
              <Link
                as={NextLink}
                href="/services11/building"
                _hover={{ textDecoration: "underline", color: "green.800" }}
              >
                Aircond & Electrical
              </Link>
              <Link
                as={NextLink}
                href="/services/energy-audit"
                _hover={{ textDecoration: "underline", color: "green.800" }}
              >
                Engineering
              </Link>
            </Stack>
          </GridItem>

          {/* Column 3: Services 1 */}
          <GridItem>
            <Heading size="md" mb={4}>
              Services
            </Heading>
            <Stack gap={2} fontSize="sm">
              <Link
                as={NextLink}
                href="/services/energy-audit"
                _hover={{ textDecoration: "underline", color: "green.800" }}
              >
                Energy Audit
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
                href="/services5/reemconsultancy"
                _hover={{ textDecoration: "underline", color: "green.800" }}
              >
                REM Consultancy
              </Link>
            </Stack>
          </GridItem>

          {/* Column 4: Services 2 */}
          <GridItem>
            <Heading size="md" mb={4}>
              Services
            </Heading>
            <Stack gap={2} fontSize="sm">
              <Link
                as={NextLink}
                href="/services7/emscertification"
                _hover={{ textDecoration: "underline", color: "green.800" }}
              >
                EMS Certification
              </Link>
              <Link
                as={NextLink}
                href="/services11/building"
                _hover={{ textDecoration: "underline", color: "green.800" }}
              >
                Building Automation System
              </Link>
              <Link
                as={NextLink}
                href="/services11/building"
                _hover={{ textDecoration: "underline", color: "green.800" }}
              >
                Supply And Installation
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
          </GridItem>

          {/* Column 5: Contact Us */}
          <GridItem>
            <Heading size="md" mb={4}>
              Contact Us
            </Heading>
            <Stack gap={2} fontSize="sm">
              <Text fontWeight="semibold">Office (HQ)</Text>
              <Text>
                No. 20, Jalan Damai Mewah 1, <br />
                Taman Damai Mewah, 43000 Kajang, Selangor
                <br />
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
              <HStack gap={3} mt={2}>
                <Link
                  href="https://www.linkedin.com/company/myces-energy-consultant/posts/?feedView=all"
                  as="a"
                  target="_blank" // specify that the link should open in a new tab
                  rel="noopener noreferrer" // specify that the link is external
                  aria-label="LinkedIn"
                >
                  <Icon as={FaLinkedin} w={5} h={5} />
                </Link>
                <Link
                  href="https://www.facebook.com/mycesgroup#"
                  as="a"
                  target="_blank" // specify that the link should open in a new tab
                  rel="noopener noreferrer" // specify that the link is external
                  aria-label="Facebook"
                >
                  <Icon as={FaFacebook} w={5} h={5} />
                </Link>
              </HStack>
            </Stack>
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
              onClick={handleClick}
              loading={loading}
            >
              Submit
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
