"use client";

import {
  Box,
  Heading,
  Text,
  Grid,
  Stack,
  Input,
  Textarea,
  Button,
  VStack,
  HStack,
  Icon,
  Spinner,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const MotionBox = motion(Box);
const MotionButton = motion(Button);
const FloatingGradient = motion(Box);

export default function GetInTouchSection() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = { firstName, lastName, email, phone, message };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
      }
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <Box position="relative" py={28} px={{ base: 6, md: 20 }} bg="white">
      {/* Background Glow */}
      <FloatingGradient
        position="absolute"
        top="-120px"
        left="-120px"
        w="420px"
        h="420px"
        borderRadius="full"
        bgGradient="linear(to-r, green.200, teal.200)"
        filter="blur(120px)"
        opacity={0.6}
      />

      <FloatingGradient
        position="absolute"
        bottom="-150px"
        right="-150px"
        w="450px"
        h="450px"
        borderRadius="full"
        bgGradient="linear(to-r, teal.200, green.200)"
        filter="blur(140px)"
        opacity={0.6}
      />

      {/* SECTION TITLE */}
      <Stack textAlign="center" mb={16}>
        <Heading fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold">
          Get In Touch
        </Heading>
        <Text color="gray.600" maxW="600px" mx="auto">
          We love to hear from you. Reach out for inquiries, collaborations, or
          support.
        </Text>
      </Stack>

      <form onSubmit={handleSubmit}>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={16}
          alignItems="stretch"
        >
          {/* LEFT SIDE */}
          <MotionBox
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* <Heading
              fontSize={{ base: "xl", md: "3xl" }}
              mb={4}
              color={"#163F2D"}
            >
              Let’s Work Together
            </Heading>

            <Text color="gray.600" mb={10}>
              Have questions or want to collaborate? Reach out to us anytime.
            </Text> */}

            {/* Glass Card */}
            <Box
              bg="whiteAlpha.800"
              backdropFilter="blur(16px)"
              p={8}
              borderRadius="2xl"
              border="1px solid"
              borderColor="gray.200"
              shadow="lg"
            >
              <VStack align="start" gap={6}>
                <HStack _hover={{ transform: "translateX(5px)" }}>
                  <Icon as={MapPin} mt={1} color="#163F2D" />
                  <Text color="gray.700">
                    <strong>Office (HQ):</strong>
                    <br />
                    20-1, Jalan Damai Mewah 1,
                    <br />
                    Taman Damai Mewah,
                    <br />
                    43000 Kajang,
                    <br />
                    Selangor, Malaysia
                  </Text>
                </HStack>

                <HStack _hover={{ transform: "translateX(5px)" }}>
                  <Icon as={Mail} color="#163F2D" />
                  <Link href="mailto:hello@mycesgroup.com">
                    hello@mycesgroup.com
                  </Link>
                </HStack>

                <HStack _hover={{ transform: "translateX(5px)" }}>
                  <Icon as={Phone} color="#163F2D" />
                  <Link href="tel:+60387255811">(+60) 3-8725 5811</Link>
                </HStack>

                <Text color="gray.600">
                  <strong>Operating Hours:</strong>
                  <br />
                  Monday – Friday
                  <br />
                  8:30 AM – 5:30 PM
                </Text>
              </VStack>
            </Box>
          </MotionBox>

          {/* RIGHT SIDE MAP */}
          <MotionBox
            borderRadius="2xl"
            overflow="hidden"
            shadow="2xl"
            minH={{ base: "300px", md: "500px" }}
            whileHover={{ scale: 1.02 }}
          >
            <iframe
              src="https://www.google.com/maps?q=20-1%20Jalan%20Damai%20Mewah%201%20Kajang%20Selangor&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />
          </MotionBox>
        </Grid>

        {/* FORM */}
        <Box mt={24}>
          <MotionBox
            bg="white"
            border="1px solid"
            borderColor="gray.200"
            p={10}
            borderRadius="2xl"
            shadow="xl"
          >
            <Stack gap={6}>
              {success && (
                <Box
                  bg="green.50"
                  border="1px solid"
                  borderColor="green.200"
                  p={3}
                  borderRadius="md"
                  fontSize="sm"
                  color="green.700"
                >
                  Message sent successfully 🚀
                </Box>
              )}
              <Box>
                <Text fontSize="xl" fontWeight="bold" color="#163F2D" mb={1}>
                  Leave your enquiries
                </Text>
                <Text fontSize="sm" color="gray.500">
                  Fill in the form below and we’ll get back to you shortly.
                </Text>
              </Box>
              <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
                <Input
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  _focus={{ borderColor: "green.500" }}
                />
                <Input
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  _focus={{ borderColor: "green.500" }}
                />
              </Grid>

              <Input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                _focus={{ borderColor: "green.500" }}
              />

              <Input
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                _focus={{ borderColor: "green.500" }}
              />

              <Textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                minH="150px"
                _focus={{ borderColor: "green.500" }}
              />

              {/* GREEN BUTTON */}
              <MotionButton
                type="submit"
                size="lg"
                w="180px"
                h="56px"
                bg="#0B5D3B"
                color="white"
                fontWeight="semibold"
                borderRadius="lg"
                alignSelf="flex-end"
                _hover={{ bg: "green.700" }}
                _active={{ bg: "green.800" }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                disabled={loading}
              >
                {loading ? <Spinner size="sm" /> : "Send"}
              </MotionButton>
            </Stack>
          </MotionBox>
        </Box>
      </form>
    </Box>
  );
}
