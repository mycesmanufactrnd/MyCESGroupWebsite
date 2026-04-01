"use client";

import {
  Box,
  Heading,
  Input,
  Textarea,
  Button,
  VStack,
  Spinner,
  Text,
  Field,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function NewsletterAdmin() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [totalSubscribers, setTotalSubscribers] = useState(0);

  // Fetch subscriber count
  useEffect(() => {
    const fetchSubscribers = async () => {
      const res = await fetch("/api/subscribers/count");
      const data = await res.json();
      setTotalSubscribers(data.total);
    };

    fetchSubscribers();
  }, []);

  const sendNewsletter = async () => {
    if (!subject || !message) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/send-newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ subject, message }),
    });

    if (res.ok) {
      alert("Newsletter sent successfully!");
      setSubject("");
      setMessage("");
    } else {
      alert("Error sending newsletter");
    }

    setLoading(false);
  };

  return (
    <Box maxW="700px" mx="auto" py={16} px={8}>
      <Heading mb={4} color="#1B4D2E">
        Newsletter Dashboard
      </Heading>

      {/* Total Subscribers */}
      <Text mb={6} fontWeight="bold" color="#1B4D2E">
        Total Subscribers: {totalSubscribers}
      </Text>

      <Text mb={6} color="gray.600">
        Send company news and updates to all subscribers.
      </Text>

      <VStack spacing={6} align="stretch">
        <Field.Root>
          <Field.Label>Subject</Field.Label>
          <Input
            placeholder="Example: New Energy Monitoring System"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </Field.Root>

        <Field.Root>
          <Field.Label>Message</Field.Label>
          <Textarea
            placeholder="Write newsletter message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={8}
          />
        </Field.Root>

        <Button
          bg="#1B4D2E"
          color="white"
          _hover={{ bg: "#163F26" }}
          onClick={sendNewsletter}
          disabled={loading}
        >
          {loading ? <Spinner size="sm" /> : "Send to Subscribers"}
        </Button>
      </VStack>
    </Box>
  );
}
