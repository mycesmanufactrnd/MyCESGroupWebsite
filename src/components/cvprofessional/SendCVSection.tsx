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
  Alert, // Only Alert is imported
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

// Motion wrapper
const MotionBox = motion(Box);

export default function SendCVSection() {
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<{
    type: "success" | "error";
    title: string;
    description?: string;
  } | null>(null);

  const [vacancy, setVacancy] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const [cvFile, setCvFile] = useState<File | null>(null);
  const [transcriptFile, setTranscriptFile] = useState<File | null>(null);
  const [otherFile, setOtherFile] = useState<File | null>(null);

  // helper function
  const toBase64 = (file: File) =>
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const result = reader.result as string;
        // Use a more robust split in case of different file types
        const base64 = result.substring(result.indexOf(",") + 1);
        resolve(base64);
      };
      reader.onerror = (error) => reject(error);
    });

  const handleSubmit = async () => {
    if (!vacancy || !name || !email || !phone) {
      setNotification({
        type: "error",
        title: "Missing required fields",
        description: "Please fill in all mandatory fields.",
      });
      return;
    }

    try {
      setLoading(true);

      // Convert files to base64
      const cvBase64 = cvFile ? await toBase64(cvFile) : undefined;
      const transcriptBase64 = transcriptFile
        ? await toBase64(transcriptFile)
        : undefined;
      const otherBase64 = otherFile ? await toBase64(otherFile) : undefined;

      const res = await fetch("/api/send-cv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          vacancy,
          name,
          email,
          phone,
          description,
          cvFile: cvFile ? { name: cvFile.name, base64: cvBase64 } : null,
          transcriptFile: transcriptFile
            ? { name: transcriptFile.name, base64: transcriptBase64 }
            : null,
          otherFile: otherFile
            ? { name: otherFile.name, base64: otherBase64 }
            : null,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setNotification({
          type: "success",
          title: "CV submitted successfully!",
          description: "Your application has been saved.",
        });

        setVacancy("");
        setName("");
        setEmail("");
        setPhone("");
        setDescription("");
        setCvFile(null);
        setTranscriptFile(null);
        setOtherFile(null);
      } else {
        throw new Error(data.error || "Unknown error");
      }
    } catch (error) {
      console.error(error);
      setNotification({
        type: "error",
        title: "Submission failed",
        description: "There was an error saving your CV. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <MotionBox
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      maxW="1000px"
      mx="auto"
      px={{ base: 4, md: 6 }}
      py={20}
    >
      {/* Notification */}
      {notification && (
        <Box
          mb={6}
          p={4}
          borderRadius="md"
          bg={notification.type === "success" ? "green.100" : "red.100"}
          border={`1px solid ${notification.type === "success" ? "green.300" : "red.300"}`}
        >
          <Text fontWeight="bold" mb={1}>
            {notification.title}
          </Text>
          {notification.description && <Text>{notification.description}</Text>}
        </Box>
      )}

      {/* Header */}
      <Stack spacing={3} mb={10}>
        <Heading fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">
          SEND YOUR CV
        </Heading>
        <Text fontWeight="semibold" color="gray.600">
          YES, WE ARE LOOKING FOR YOU!
        </Text>
        <Text color="gray.600" maxW="700px" lineHeight="1.8">
          As MyCES Group continues to grow, we are constantly seeking talented,
          motivated, and passionate individuals to be part of our professional
          team. If you believe you have what it takes, we welcome your
          application.
        </Text>
      </Stack>

      {/* Form */}
      <Stack spacing={8}>
        {/* Vacancy */}
        <Box>
          <Text mb={2} fontWeight="medium">
            Vacancy of Interest
          </Text>
          <Box
            as="select"
            bg="gray.100"
            px={3}
            py={2}
            borderRadius="md"
            border="1px solid"
            borderColor="gray.200"
            value={vacancy}
            onChange={(e) => setVacancy(e.target.value)}
          >
            <option value="">Select a position</option>
            <option value="Energy Engineer">Energy Engineer</option>
            <option value="Business Developer">Business Developer</option>
          </Box>
        </Box>

        {/* Name */}
        <Box>
          <Text mb={2} fontWeight="medium">
            Name
          </Text>
          <Input
            bg="gray.100"
            placeholder="Your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Box>

        {/* Email & Phone */}
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} spacing={6}>
          <Box>
            <Text mb={2} fontWeight="medium">
              Email
            </Text>
            <Input
              bg="gray.100"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>

          <Box>
            <Text mb={2} fontWeight="medium">
              Contact Phone
            </Text>
            <Input
              bg="gray.100"
              placeholder="+60 XX-XXXXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Box>
        </Grid>

        {/* CV Upload */}
        <Box>
          <Text fontWeight="medium" mb={2}>
            CV / Resume (Max 20MB)
          </Text>
          <Input
            type="file"
            bg="gray.100"
            onChange={(e) => setCvFile(e.target.files?.[0] || null)}
          />
        </Box>

        {/* Academic Transcript */}
        <Box>
          <Text fontWeight="medium" mb={2}>
            Academic Transcript (Max 20MB)
          </Text>
          <Input
            type="file"
            bg="gray.100"
            onChange={(e) => setTranscriptFile(e.target.files?.[0] || null)}
          />
        </Box>

        {/* Other Docs */}
        <Box>
          <Text fontWeight="medium" mb={2}>
            Other Relevant Documents (Max 20MB)
          </Text>
          <Input
            type="file"
            bg="gray.100"
            onChange={(e) => setOtherFile(e.target.files?.[0] || null)}
          />
        </Box>

        {/* About Yourself */}
        <Box>
          <Text mb={2} fontWeight="medium">
            About Yourself
          </Text>
          <Textarea
            bg="gray.100"
            rows={5}
            placeholder="Tell us about yourself..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Box>

        {/* Submit */}
        <Button
          alignSelf="flex-start"
          bg="gray.700"
          color="white"
          px={8}
          _hover={{ bg: "gray.800" }}
          transition="0.3s"
          isLoading={loading}
          onClick={handleSubmit}
        >
          SEND
        </Button>
      </Stack>
    </MotionBox>
  );
}
