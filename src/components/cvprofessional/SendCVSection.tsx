"use client";

import {
  Box,
  Heading,
  Text,
  Stack,
  Input,
  Button,
  Select,
  createToaster,
  chakra,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, ChangeEvent } from "react";

const MotionBox = motion.create(Box);

export default function SendCVSection() {
  const toaster = createToaster({
    placement: "top",
  });

  const [loading, setLoading] = useState(false);

  const [vacancy, setVacancy] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cvFile, setCvFile] = useState<File | null>(null);

  const handleSubmit = async () => {
    // Field-by-field validation (better UX)
    if (!vacancy) {
      toaster.create({
        title: "Vacancy required",
        description: "Please select a position.",
        type: "error",
        duration: 4000,
        closable: true,
      });
      return;
    }

    if (!name) {
      toaster.create({
        title: "Name required",
        description: "Please enter your full name.",
        type: "error",
        duration: 4000,
        closable: true,
      });
      return;
    }

    if (!email) {
      toaster.create({
        title: "Email required",
        description: "Please enter your email address.",
        type: "error",
        duration: 4000,
        closable: true,
      });
      return;
    }

    if (!phone) {
      toaster.create({
        title: "Phone number required",
        description: "Please enter your phone number.",
        type: "error",
        duration: 4000,
        closable: true,
      });
      return;
    }

    if (!cvFile) {
      toaster.create({
        title: "CV required",
        description: "Please upload your CV file.",
        type: "error",
        duration: 4000,
        closable: true,
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toaster.create({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        type: "error",
        duration: 4000,
        closable: true,
      });
      return;
    }

    // File validation
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(cvFile.type)) {
      toaster.create({
        title: "Invalid file type",
        description: "Only PDF, DOC, or DOCX files are allowed.",
        type: "error",
        duration: 4000,
        closable: true,
      });
      return;
    }

    if (cvFile.size > 10 * 1024 * 1024) {
      toaster.create({
        title: "File too large",
        description: "File size must be less than 10MB.",
        type: "error",
        duration: 4000,
        closable: true,
      });
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("vacancy", vacancy);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("cvFile", cvFile); // now REQUIRED

      const res = await fetch("/api/send-cv", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!data.success) throw new Error(data.error);

      // ✅ SUCCESS MESSAGE
      toaster.create({
        title: "Application submitted",
        description: "Your CV has been successfully sent.",
        type: "success",
        duration: 4000,
        closable: true,
      });

      // Reset form
      setVacancy("");
      setName("");
      setEmail("");
      setPhone("");
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
        <Box textAlign="center">
          <Heading size="lg">Send Your CV</Heading>
          <Text color="gray.600" mt={2}>
            Apply for available positions by submitting your details below.
          </Text>
        </Box>

        {/* Vacancy */}
        <Box>
          <Text mb={2}>Vacancy</Text>
          <chakra.select
            value={vacancy}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setVacancy(e.target.value)
            }
            style={{
              width: "100%",
              padding: "10px",
              background: "#f5f5f5",
              borderRadius: "6px",
              boxSizing: "border-box",
            }}
          >
            <option value="">Select position</option>
            <option value="Energy Engineer">Energy Engineer</option>
            <option value="Business Developer">Business Developer</option>
            <option value="Accountant">Accountant</option>
          </chakra.select>
        </Box>

        {/* Name */}
        <Box>
          <Text mb={2} fontWeight="medium">
            Full Name
          </Text>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
          />
        </Box>

        {/* Email */}
        <Box>
          <Text mb={2} fontWeight="medium">
            Email Address
          </Text>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@email.com"
          />
        </Box>

        {/* Phone */}
        <Box>
          <Text mb={2} fontWeight="medium">
            Phone Number
          </Text>
          <Input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+60 12-345 6789"
          />
        </Box>

        {/* CV Upload */}
        <Box>
          <Text mb={2} fontWeight="medium">
            Upload CV (max 10MB)
          </Text>
          <Input
            type="file"
            accept=".pdf,.doc,.docx"
            p={1}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setCvFile(e.target.files?.[0] || null)
            }
          />
        </Box>

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
