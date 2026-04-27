"use client";

import {
  Box,
  Heading,
  Text,
  Stack,
  Input,
  Button,
  createToaster,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, ChangeEvent } from "react";

const MotionBox = motion(Box);

export default function SendCVInternshipSection() {
  const toaster = createToaster({ placement: "top" });

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [internshipType, setInternshipType] = useState("");
  const [cvFile, setCvFile] = useState<File | null>(null);

  const handleSubmit = async () => {
    if (!name || !email || !phone || !internshipType) {
      toaster.create({
        title: "Missing required fields",
        description: "Please complete all required fields.",
        type: "error",
        duration: 4000,
        closable: true,
      });
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("internshipType", internshipType);

      if (cvFile) {
        formData.append("cvFile", cvFile);
      }

      const res = await fetch("/api/send-cv-internship", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!data.success) throw new Error(data.error);

      toaster.create({
        title: "Application submitted",
        description: "Your internship CV has been successfully sent.",
        type: "success",
        duration: 4000,
        closable: true,
      });

      // reset
      setName("");
      setEmail("");
      setPhone("");
      setInternshipType("");
      setCvFile(null);
    } catch (error) {
      toaster.create({
        title: "Submission failed",
        description: "Please try again later.",
        type: "error",
        duration: 4000,
        closable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <MotionBox
      maxW="900px"
      mx="auto"
      px={{ base: 4, md: 8 }}
      py={20}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Stack gap={6}>
        {/* HEADER */}
        <Box textAlign="center">
          <Heading size="lg">Send Your Internship CV</Heading>
          <Text color="gray.600" mt={2}>
            Apply for available internship positions by submitting your details
            below.
          </Text>
        </Box>

        {/* Internship Type */}
        <Box>
          <Text mb={2}>Internship Type</Text>
          <select
            value={internshipType}
            onChange={(e) => setInternshipType(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              background: "#f5f5f5",
              borderRadius: "6px",
              border: "1px solid #e2e8f0",
              boxSizing: "border-box",
            }}
          >
            <option value="">Select type</option>
            <option value="Engineering">Engineering</option>
            <option value="Marketing">Marketing</option>
            <option value="Design">Design</option>
            <option value="Administrative">Administrative</option>
            <option value="IT & Development">IT & Development</option>
          </select>
        </Box>

        {/* Name */}
        <Box>
          <Text mb={2} fontWeight="medium">
            Full Name
          </Text>
          <Input
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            placeholder="Enter your full name"
            bg="gray.100"
          />
        </Box>

        {/* Email */}
        <Box>
          <Text mb={2} fontWeight="medium">
            Email Address
          </Text>
          <Input
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            placeholder="example@email.com"
            bg="gray.100"
          />
        </Box>

        {/* Phone */}
        <Box>
          <Text mb={2} fontWeight="medium">
            Phone Number
          </Text>
          <Input
            value={phone}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPhone(e.target.value)
            }
            placeholder="+60 12-345 6789"
            bg="gray.100"
          />
        </Box>

        {/* CV Upload */}
        <Box>
          <Text mb={2} fontWeight="medium">
            Upload CV (PDF, max 10MB)
          </Text>
          <Input
            type="file"
            accept=".pdf,.doc,.docx"
            bg="gray.100"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setCvFile(e.target.files?.[0] || null)
            }
          />
        </Box>

        {/* Submit */}
        <Box display="flex" justifyContent="flex-end">
          <Button
            size="sm"
            bg="green.800"
            color="white"
            _hover={{ bg: "green.900" }}
            loading={loading}
            loadingText="Submitting"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </Stack>
    </MotionBox>
  );
}
