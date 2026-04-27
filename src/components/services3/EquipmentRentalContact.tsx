"use client";

import {
  Box,
  Heading,
  Text,
  Grid,
  GridItem,
  Stack,
  Input,
  Textarea,
  Button,
  ButtonProps,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, forwardRef } from "react";

// Motion-enabled Chakra components
const MotionBox = motion(Box);

// Dark green color
const darkGreen = "#0B5D3B";

// Motion-enabled Chakra Button with ref forwarding
const ButtonWithRef = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => <Button ref={ref} {...props} />,
);
ButtonWithRef.displayName = "ButtonWithRef";

const MotionButton = motion(ButtonWithRef);
MotionButton.displayName = "MotionButton";

export default function EquipmentRentalContact() {
  // ✅ Hooks must be inside the component
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = { firstName, lastName, email, phone, message };
    try {
      const response = await fetch("/api/equipment-rental-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      alert(data.message);

      // reset form
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
    <Box bg="white" px={{ base: 6, md: 20 }} py={20}>
      <Grid templateColumns={{ base: "1fr", md: "40% 60%" }} gap={12}>
        {/* LEFT COLUMN */}
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
            Rental Contact Information
          </Heading>
          <Text fontSize="md" color="gray.700" mb={4}>
            To inquire about equipment availability or to request a rental
            quote, you can contact MyCES through the following channels:
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
                <Link href="mailto:hello@mycesgroup.com">
                  hello@mycesgroup.com
                </Link>
              </Text>
            </Box>

            <Box>
              <Text fontWeight="bold">Website:</Text>
              <Link
                href="https://www.mycesgroup.com"
                color={darkGreen}
                target="_blank"
              >
                www.mycesgroup.com
              </Link>
            </Box>
          </Stack>
        </MotionBox>

        {/* RIGHT COLUMN - Form */}
        <MotionBox
          bg="white"
          p={10}
          borderRadius="2xl"
          shadow="lg"
          _hover={{ shadow: "xl" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit}>
            <Stack gap={6}>
              <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
                <GridItem>
                  <Input
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    bg="gray.100"
                    border="none"
                    _focus={{ bg: "white", boxShadow: "0 0 0 2px #0B5D3B" }}
                  />
                </GridItem>
                <GridItem>
                  <Input
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    bg="gray.100"
                    border="none"
                    _focus={{ bg: "white", boxShadow: "0 0 0 2px #0B5D3B" }}
                  />
                </GridItem>
              </Grid>

              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                bg="gray.100"
                border="none"
                _focus={{ bg: "white", boxShadow: "0 0 0 2px #0B5D3B" }}
              />

              <Input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                bg="gray.100"
                border="none"
                _focus={{ bg: "white", boxShadow: "0 0 0 2px #0B5D3B" }}
              />

              <Textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                bg="gray.100"
                border="none"
                minH="150px"
                resize="none"
                _focus={{ bg: "white", boxShadow: "0 0 0 2px #0B5D3B" }}
              />

              {/* SUBMIT BUTTON */}
              <MotionButton
                type="submit"
                bg={darkGreen}
                color="white"
                size="lg"
                borderRadius="md"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                _hover={{ bg: "#CCD5C5" }}
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
