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
  chakra,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, ChangeEvent } from "react";

// Motion wrapper
const MotionBox = motion(Box);

// Create a styled select component - CORRECT WAY
const StyledSelect = chakra("select", {});

export default function SendCVInternshipSection() {
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<{
    type: "success" | "error";
    title: string;
    description?: string;
  } | null>(null);

  // Form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [university, setUniversity] = useState("");
  const [course, setCourse] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [internshipType, setInternshipType] = useState("");

  const [cvFile, setCvFile] = useState<File | null>(null);
  const [transcriptFile, setTranscriptFile] = useState<File | null>(null);
  const [otherFile, setOtherFile] = useState<File | null>(null);

  const toBase64 = (file: File) =>
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const result = reader.result as string;
        const base64 = result.substring(result.indexOf(",") + 1);
        resolve(base64);
      };
      reader.onerror = (error) => reject(error);
    });

  const handleSubmit = async () => {
    if (
      !name ||
      !email ||
      !phone ||
      !university ||
      !course ||
      !duration ||
      !internshipType
    ) {
      setNotification({
        type: "error",
        title: "Missing required fields",
        description: "Please fill in all mandatory fields.",
      });
      return;
    }

    try {
      setLoading(true);

      const cvBase64 = cvFile ? await toBase64(cvFile) : undefined;
      const transcriptBase64 = transcriptFile
        ? await toBase64(transcriptFile)
        : undefined;
      const otherBase64 = otherFile ? await toBase64(otherFile) : undefined;

      const res = await fetch("/api/send-cv-internship", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          university,
          course,
          duration,
          internshipType,
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

        // Reset form
        setName("");
        setEmail("");
        setPhone("");
        setUniversity("");
        setCourse("");
        setDuration("");
        setInternshipType("");
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
      {notification && (
        <Box
          mb={6}
          p={4}
          borderRadius="md"
          bg={notification.type === "success" ? "green.100" : "red.100"}
          border={`1px solid ${
            notification.type === "success" ? "green.300" : "red.300"
          }`}
        >
          <Text fontWeight="bold" mb={1}>
            {notification.title}
          </Text>
          {notification.description && <Text>{notification.description}</Text>}
        </Box>
      )}

      <Stack gap={3} mb={10}>
        <Heading fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">
          SEND YOUR INTERNSHIP CV
        </Heading>
        <Text fontWeight="semibold" color="gray.600">
          YES, WE ARE LOOKING FOR TALENTED INTERNS!
        </Text>
      </Stack>

      <Stack gap={8}>
        {/* Name & Email */}
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
          <Box>
            <Text mb={2} fontWeight="medium">
              Name
            </Text>
            <Input
              bg="gray.100"
              placeholder="Your full name"
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
          </Box>
          <Box>
            <Text mb={2} fontWeight="medium">
              Email
            </Text>
            <Input
              bg="gray.100"
              placeholder="example@email.com"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </Box>
        </Grid>

        {/* Phone & University */}
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
          <Box>
            <Text mb={2} fontWeight="medium">
              Phone
            </Text>
            <Input
              bg="gray.100"
              placeholder="+60 XX-XXXXXXX"
              value={phone}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPhone(e.target.value)
              }
            />
          </Box>
          <Box>
            <Text mb={2} fontWeight="medium">
              University
            </Text>
            <Input
              bg="gray.100"
              placeholder="Your university"
              value={university}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setUniversity(e.target.value)
              }
            />
          </Box>
        </Grid>

        {/* Course */}
        <Box>
          <Text mb={2} fontWeight="medium">
            Course / Program
          </Text>
          <Input
            bg="gray.100"
            placeholder="Your course"
            value={course}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setCourse(e.target.value)
            }
          />
        </Box>

        {/* Internship Type */}
        <Box>
          <Text mb={2} fontWeight="medium">
            Internship Type
          </Text>
          <StyledSelect
            bg="gray.100"
            px={3}
            py={2}
            borderRadius="md"
            border="1px solid"
            borderColor="gray.200"
            width="100%"
            cursor="pointer"
            _focus={{
              outline: "none",
              borderColor: "blue.500",
              boxShadow: "0 0 0 1px var(--chakra-colors-blue-500)",
            }}
            value={internshipType}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setInternshipType(e.target.value)
            }
          >
            <option value="">Select type of internship</option>
            <option value="Engineering">Engineering</option>
            <option value="Marketing">Marketing</option>
            <option value="Design">Design</option>
            <option value="Administrative">Administrative</option>
            <option value="IT & Development">IT & Development</option>
          </StyledSelect>
        </Box>

        {/* Duration */}
        <Box>
          <Text mb={2} fontWeight="medium">
            Internship Duration
          </Text>
          <Input
            bg="gray.100"
            placeholder="E.g., 3 months"
            value={duration}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setDuration(e.target.value)
            }
          />
        </Box>

        {/* File Uploads */}
        <Box>
          <Text mb={2} fontWeight="medium">
            CV / Resume (Max 20MB)
          </Text>
          <Input
            type="file"
            bg="gray.100"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setCvFile(e.target.files?.[0] || null)
            }
          />
        </Box>

        <Box>
          <Text mb={2} fontWeight="medium">
            Academic Transcript (Max 20MB)
          </Text>
          <Input
            type="file"
            bg="gray.100"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTranscriptFile(e.target.files?.[0] || null)
            }
          />
        </Box>

        <Box>
          <Text mb={2} fontWeight="medium">
            Other Relevant Documents (Max 20MB)
          </Text>
          <Input
            type="file"
            bg="gray.100"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setOtherFile(e.target.files?.[0] || null)
            }
          />
        </Box>

        {/* About */}
        <Box>
          <Text mb={2} fontWeight="medium">
            About Yourself
          </Text>
          <Textarea
            bg="gray.100"
            rows={5}
            placeholder="Tell us about yourself..."
            value={description}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setDescription(e.target.value)
            }
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
          loading={loading}
          onClick={handleSubmit}
        >
          SEND
        </Button>
      </Stack>
    </MotionBox>
  );
}
