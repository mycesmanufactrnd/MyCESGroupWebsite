"use client";

import {
  Box,
  BoxProps,
  Heading,
  Text,
  Grid,
  GridItem,
  Stack,
  Input,
  Textarea,
  Button,
  ButtonProps,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { motion, HTMLMotionProps } from "framer-motion";
import { useState } from "react";

const MotionButton = motion<
  Omit<ButtonProps, "transition"> & HTMLMotionProps<"button">
>(Button);
const MotionBox = motion<Omit<BoxProps, "transition"> & HTMLMotionProps<"div">>(
  Box,
);

const darkGreen = "#15350f";

export default function ReemConsultancyContact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      firstName,
      lastName,
      email,
      phone,
      message,
    };

    try {
      const response = await fetch("/api/reem-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      alert(data.message);

      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <Box bg="gray.100" px={{ base: 6, md: 20 }} py={20}>
      <Grid templateColumns={{ base: "1fr", md: "40% 60%" }} gap={12}>
        {/* LEFT COLUMN — REEM INFO */}
        <MotionBox
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Heading
            fontSize={{ base: "3xl", md: "3xl" }}
            color={darkGreen}
            mb={6}
          >
            Registered Electrical Energy Manager (REEM) Contact
          </Heading>

          <Text fontSize="md" color="gray.700" mb={4}>
            For inquiries related to Registered Electrical Energy Manager (REEM)
            consultancy, regulatory compliance under EMEER 2008, or energy
            management strategy implementation, please contact MyCES using the
            details below.
          </Text>

          <Text fontSize="md" color="gray.700" mb={6}>
            Our certified REEM professionals support facilities in meeting
            Energy Commission (ST) requirements, improving energy efficiency,
            and achieving sustainable operational performance.
          </Text>

          <Stack gap={3}>
            <Box>
              <Text fontWeight="bold">Office Address:</Text>
              <Text>
                20-1, Jalan Damai Mewah 1, Taman Damai Mewah, 43000 Kajang,
                Selangor.
              </Text>
            </Box>

            <Box>
              <Text fontWeight="bold">Phone Numbers:</Text>
              <Text>+603-8725 5811 (Office)</Text>
            </Box>

            <Box>
              <Text fontWeight="bold">Email:</Text>
              <Text>
                <ChakraLink href="mailto:admin@mycesgroup.com">
                  admin@mycesgroup.com
                </ChakraLink>{" "}
              </Text>
            </Box>

            <Box>
              <Text fontWeight="bold">Website:</Text>
              <ChakraLink
                href="https://www.mycesgroup.com"
                color="green.600" // or your darkGreen variable
                target="_blank"
                rel="noopener noreferrer"
              >
                www.mycesgroup.com
              </ChakraLink>
            </Box>
          </Stack>
        </MotionBox>

        {/* RIGHT COLUMN — CONTACT FORM */}
        <MotionBox
          bg="white"
          p={10}
          shadow="lg"
          _hover={{ shadow: "xl" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit}>
            <Stack gap={6}>
              {/* NAME */}
              <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
                <GridItem>
                  <Input
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    bg="gray.100"
                    border="none"
                    _focus={{
                      bg: "white",
                      boxShadow: "0 0 0 2px #0B5D3B",
                    }}
                    required
                  />
                </GridItem>

                <GridItem>
                  <Input
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    bg="gray.100"
                    border="none"
                    _focus={{
                      bg: "white",
                      boxShadow: "0 0 0 2px #0B5D3B",
                    }}
                    required
                  />
                </GridItem>
              </Grid>

              {/* EMAIL */}
              <Input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                bg="gray.100"
                border="none"
                _focus={{
                  bg: "white",
                  boxShadow: "0 0 0 2px #0B5D3B",
                }}
                required
              />

              {/* PHONE */}
              <Input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                bg="gray.100"
                border="none"
                _focus={{
                  bg: "white",
                  boxShadow: "0 0 0 2px #0B5D3B",
                }}
              />

              {/* MESSAGE */}
              <Textarea
                placeholder="Describe your REEM consultancy requirements, compliance needs, or energy management concerns"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                bg="gray.100"
                border="none"
                minH="150px"
                resize="none"
                _focus={{
                  bg: "white",
                  boxShadow: "0 0 0 2px #0B5D3B",
                }}
                required
              />

              {/* SUBMIT */}
              <MotionButton
                type="submit"
                bg={darkGreen}
                color="white"
                size="lg"
                borderRadius="md"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                _hover={{ bg: "#8FAF9B" }}
              >
                Submit
              </MotionButton>
            </Stack>
          </form>
        </MotionBox>
      </Grid>
    </Box>
  );
}
