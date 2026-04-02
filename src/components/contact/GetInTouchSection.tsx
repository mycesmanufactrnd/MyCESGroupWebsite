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
  Field,
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
    <Box
      position="relative"
      py={28}
      px={{ base: 6, md: 20 }}
      bg="white"
      overflow="hidden"
    >
      {/* Animated Gradient Background */}
      <FloatingGradient
        position="absolute"
        top="-120px"
        left="-120px"
        w="420px"
        h="420px"
        borderRadius="full"
        bgGradient="linear(to-r, green.200, teal.200)"
        filter="blur(120px)"
        opacity={0.7}
        animate={{
          x: [0, 40, -20, 0],
          y: [0, 30, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
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
        opacity={0.7}
        animate={{
          x: [0, -40, 20, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <form onSubmit={handleSubmit}>
        <Grid
          templateColumns={{ base: "1fr", md: "45% 55%" }}
          gap={20}
          alignItems="center"
        >
          {/* LEFT SIDE */}
          <MotionBox
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Heading
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="bold"
              mb={6}
            >
              <Box as="span" color="black">
                Lets Work Together
              </Box>
            </Heading>

            <Text color="gray.600" lineHeight="1.8" mb={10}>
              Have questions about our solutions or want to explore
              collaboration opportunities? Send us a message and our team will
              respond shortly.
            </Text>

            {/* CONTACT INFO */}
            <VStack align="start" gap={6}>
              <HStack>
                <Icon as={Mail} color="#163F2D" />
                <Text fontSize="md" color="gray.700" lineHeight="1.9" mb={4}>
                  <Link
                    href="mailto:admin@mycesgroup.com"
                    color="#0F2A1D"
                    fontWeight="medium"
                  >
                    admin@mycesgroup.com
                  </Link>
                </Text>
              </HStack>

              <HStack>
                <Icon as={Phone} color="#163F2D" />
                <Text fontSize="md" color="gray.700" lineHeight="1.9" mb={4}>
                  <Link
                    href="tel:+60387255811"
                    color="#0F2A1D"
                    fontWeight="medium"
                  >
                    (+60) 3-8725 5811
                  </Link>
                </Text>
              </HStack>

              <HStack>
                <Text fontSize="md" color="gray.700" lineHeight="1.9">
                  <strong>Operating Hours:</strong>
                  <br />
                  Monday – Friday
                  <br />
                  8:30 AM – 5:30 PM
                </Text>
              </HStack>
            </VStack>
          </MotionBox>

          {/* FORM CARD */}
          <MotionBox
            bg="rgba(255,255,255,0.85)"
            backdropFilter="blur(20px)"
            border="1px solid"
            borderColor="gray.200"
            p={10}
            borderRadius="2xl"
            shadow="xl"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
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

              <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
                <Field.Root>
                  <Field.Label>First Name</Field.Label>
                  <Input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    bg="gray.50"
                    border="1px solid"
                    borderColor="gray.200"
                    _focus={{
                      borderColor: "#163F2D",
                      boxShadow: "0 0 0 2px rgba(22,63,45,0.15)",
                    }}
                  />
                </Field.Root>

                <Field.Root>
                  <Field.Label>Last Name</Field.Label>
                  <Input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    bg="gray.50"
                    border="1px solid"
                    borderColor="gray.200"
                    _focus={{
                      borderColor: "#163F2D",
                      boxShadow: "0 0 0 2px rgba(22,63,45,0.15)",
                    }}
                  />
                </Field.Root>
              </Grid>

              <Field.Root>
                <Field.Label>Email</Field.Label>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  bg="gray.50"
                  border="1px solid"
                  borderColor="gray.200"
                  _focus={{
                    borderColor: "#163F2D",
                    boxShadow: "0 0 0 2px rgba(22,63,45,0.15)",
                  }}
                />
              </Field.Root>

              <Field.Root>
                <Field.Label>Phone</Field.Label>
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  bg="gray.50"
                  border="1px solid"
                  borderColor="gray.200"
                  _focus={{
                    borderColor: "#163F2D",
                    boxShadow: "0 0 0 2px rgba(22,63,45,0.15)",
                  }}
                />
              </Field.Root>

              <Field.Root>
                <Field.Label>Message</Field.Label>
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  minH="150px"
                  resize="none"
                  bg="gray.50"
                  border="1px solid"
                  borderColor="gray.200"
                  _focus={{
                    borderColor: "#163F2D",
                    boxShadow: "0 0 0 2px rgba(22,63,45,0.15)",
                  }}
                />
              </Field.Root>

              {/* Animated Gradient Button */}
              <MotionButton
                type="submit"
                size="lg"
                borderRadius="lg"
                bgGradient="linear(to-r, #163F2D, green.400)"
                backgroundSize="200% auto"
                animation="gradientMove 5s linear infinite"
                color="white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                disabled={loading}
              >
                {loading ? <Spinner size="sm" /> : "Send Message"}
              </MotionButton>
            </Stack>
          </MotionBox>
        </Grid>
      </form>
    </Box>
  );
}
